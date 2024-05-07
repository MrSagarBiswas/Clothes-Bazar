import React, { useEffect, useState } from 'react'
import { ChevronLeft, Edit } from "react-feather"
import { useParams, useNavigate, Link } from "react-router-dom"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Container from "@/components/Container"
import OrderStatus from "@/components/OrderStatus"
import OrderProduct from "@/components/OrderProduct"
import Loader from "@/components/Loader"
import api from '../../api'
import clsx from "clsx"
import Alert from "@/components/Alert"


export default function OrderDetailsPage() {
	const navigate = useNavigate()
	const { id } = useParams()
	const [order, setOrder] = useState(null)

	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [status, setStatus] = useState("");
	const [loading, setLoading] = useState("");

	useEffect(() => {
		(async () => {
			if (!sessionStorage.getItem("isAdmin")) {
				navigate("/admin");
			}
			const resp = await api.OrderDetailsByAdmin(id)
			if (resp.status !== "ok") {
				navigate("/404")
			}
			setOrder(resp.order)
		})()
	}, [id])

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		const res = await api.updateStatus(id, status)
		setLoading(false)
		if (res.status == "ok") {
			setSuccess(res.message)
		} else {
			setError(res.message)
		}
		const x = await api.OrderDetailsByAdmin(id)
		setOrder(x.order)
	}

	if (!order) {
		return <main className='w-screen h-screen flex justify-center items-center'>
			<Loader color="bg-gray-600" />
		</main>
	}

	return (
		<main className="relative mb-20">
			<Container heading={`Order Details for #${id}`} className="flex flex-col">
				<OrderDetailsSection heading="Status:">
					<div className="max-w-2xl mx-2 px-2 py-4 sm:mx-auto border border-gray-300 rounded-lg shadow-sm">
						<OrderStatus currentStatus={order.status} />
					</div>

					<form
						className="max-w-sm mx-2 px-4 py-4 sm:mx-auto flex items-center flex-col space-y-2"
						onSubmit={handleSubmit}
					>

						<div className="w-full flex items-center relative mx-0 md:mx-3">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-600">
								<Edit width={20} height={20} />
							</div>
							<select className={clsx(
								"w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2",
								"focus:(outline-none ring ring-gray-300)",
								Edit && "pl-10",
								"!text-gray-600 !bg-gray-200",

							)} onChange={e => { setStatus(e.target.value) }}>
								<option>Change Status</option>
								<option>pending</option>
								<option>shipped</option>
								<option>in transit</option>
								<option>delivered</option>

							</select>
						</div>

						{error && <Alert heading="Error!" body={error} danger />}
						{success && <Alert heading="Success!" body={success} success />}

						<Button
							className="w-full bg-red-500 hover:bg-red-600 !mt-6 !text-base !rounded-full"
							type="submit"
							disabled={loading || status == "Change Status" || status == ""} danger
						>
							{loading ? <Loader /> : "Change"}
						</Button>

					</form>

					<div className="text-center space-y-2">
						<h3 className="text-xl mt-10">Shipping Info:</h3>
						<div className="space-x-1">
							<span className="font-normal">Address:</span>
							<span className="font-light">{order.address}</span>
						</div>
					</div>
				</OrderDetailsSection>

				<OrderDetailsSection heading="Products:">
					<div className="flex flex-wrap justify-center gap-2">
						{order.products.map(p => (
							<Link key={p._id} to={`/products/${p.productID._id}`}>
								<OrderProduct
									name={p.productID.title}
									imgSrc={p.productID.image}
									price={p.productID.price}
									quantity={p.quantity}
								/>
							</Link>
						))}
					</div>
					<div className="text-center space-y-2">
						<h3 className="text-xl mt-10">Total Amount:</h3>
						<p className="text-2xl font-light">₹{order.amount}</p>
					</div>
				</OrderDetailsSection>
			</Container>

			<Button
				onClick={() => navigate("/admin/orders")}
				className="absolute -top-12 -left-4 text-lg"
				secondary
			><ChevronLeft className="mr-2" /> Back
			</Button>
		</main>
	)
}

function OrderDetailsSection({ heading, children }) {
	return (
		<section className="my-12">
			<h2 className="text-2xl text-center font-medium mb-4">{heading}</h2>
			{children}
		</section>
	)
}