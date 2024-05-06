import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Type, FileText, PlusCircle, DollarSign } from "react-feather"
import Loader from '../components/Loader'
import api from '../api'
import clsx from "clsx"

import Input from "@/components/Input"
import Button from "@/components/Button"
import Alert from "@/components/Alert"


export default function AddProductForm({ onSubmit }) {
	const [id, setId] = useState();
	const [title, setTitle] = useState("")
	const [description, setDesc] = useState("")
	const [image, setImg] = useState("")
	const [price, setPrice] = useState("")
	const [deleted, setDeleted] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState("")

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		const resp = await api.deleteProduct(id)
		const res = await api.fetchProducts("")
		if (res.status !== "error") {
			setProducts(res)
		}
		setLoading(false)
		if (resp.status == "ok") {
			setDeleted(resp.message)
		} else {
			setError(resp.message)
		}
	}

	const [products, setProducts] = useState([]);
	useEffect(() => {
		(async () => {
			const resp = await api.fetchProducts("")
			if (resp.status !== "error") {
				setProducts(resp)
			}
			setLoading(false)
		})()
	}, [])

	return (
		<form
			className="flex items-center flex-col space-y-2"
			onSubmit={handleSubmit}
		>

			<div className="w-full flex items-center relative mx-0 md:mx-3">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-600">
					<Type width={20} height={20} />
				</div>
				<select className={clsx(
					"w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2",
					"focus:(outline-none ring ring-gray-300)",
					Type && "pl-10",
					"!text-gray-600 !bg-gray-200",

				)} onChange={e => { setId(products[e.target.selectedIndex - 1]._id); setDesc(products[e.target.selectedIndex - 1].description); setImg(products[e.target.selectedIndex - 1].image); setPrice(products[e.target.selectedIndex - 1].price); }}>
					<option>Select Product Title</option>
					{products.map(product => {
						return (
							<option key={product._id}>
								{product.title}
							</option>
						);
					})}
				</select>
			</div>


			<Input
				value={description}
				onChange={e => setDesc(e.target.value)}
				icon={<FileText width={20} height={20} />}
				placeholder="Description" disabled required />
			<Input
				value={image}
				onChange={e => setImg(e.target.value)}
				icon={<PlusCircle width={20} height={20} />}
				placeholder="Image Link" disabled required />
			<Input
				value={price + "/- Rupees"}
				icon={<DollarSign width={20} height={20} />}
				onChange={e => setPrice(e.target.value)}
				type="name" placeholder="Price in INR" disabled required />

			{error && <Alert heading="Error!" body={error} danger />}
			{deleted && <Alert heading="Success!" body={deleted} success />}

			<Button
				className="w-full bg-red-500 hover:bg-red-600 !mt-6 !text-base !rounded-full"
				type="submit"
				disabled={loading} danger
			>
				{loading ? <Loader /> : "Delete"}
			</Button>

		</form>
	)
}