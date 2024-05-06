import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { ShoppingBag, ChevronLeft } from "react-feather"
import clsx from "clsx"
import { dummyOrders } from '@/dummydata'

import OrderItem from "@/components/OrderItem"
import PageHeader from "@/components/PageHeader"
import Button from "@/components/Button"
import api from '../../api'

export default function OrdersPage() {
	const navigate = useNavigate()
	const [orders, setOrders] = useState([])

	useEffect(() => {
		(async () => {
			const resp = await api.CustomerOrders()
			if (resp.length) {
				setOrders(resp)
			}
		})()
	}, [])

	if (orders.length === 0) {
		return (
			<main className="min-h-screen flex flex-col items-center text-center my-14 p-4 space-y-4">
				<PageHeader>No Orders Received</PageHeader>
				<Link to="/admin/dashboard">
					<Button link className="text-xl">
						<ShoppingBag className="mr-2" />
						Go Back
					</Button>
				</Link>
			</main>
		)
	}

	return (
		<main className="min-h-screen my-14">
			<PageHeader>All Customer Orders</PageHeader>

			<section className={clsx(
				"flex flex-col max-w-2xl",
				"border border-gray-300 rounded",
				"shadow divide-y divide-gray-200",
				"my-16 px-2 py-4 m-4",
				"sm:mx-auto",
			)}>
				{orders.map(order => (
					<Link key={order._id} to={`/admin/${order._id}`}>
						<OrderItem
							products={order.products}
							status={order.status}
							amount={order.amount}
						/>
					</Link>
				))}
			</section>
			<Button
				onClick={() => navigate("/admin/dashboard")}
				className="absolute top-16 -left-4 text-lg"
				secondary
			><ChevronLeft className="mr-2" /> Back
			</Button>
		</main>
	)
}