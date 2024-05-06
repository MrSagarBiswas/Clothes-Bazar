import React, { useContext } from 'react'
import { sliderItems } from '@/dummydata'
import { Link } from "react-router-dom"
import Button from "@/components/Button"

import { UserContext, CartContext } from '@/App'
import AddProductForm from "@/ui/AddProductForm"
import DeleteProductForm from "@/ui/DeleteProductForm"
import api from '@/api'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {

	const handleLogin = async userData => {
		const resp = await api.addProduct(userData)
		console.log(resp)
		return resp
	}
	const randomSlide = sliderItems[Math.floor(Math.random() * sliderItems.length)]

	return (
		<main 
			className="h-screen items-center bg-cover bg-center sm:bg-left"
			style={{backgroundImage: `url(${randomSlide.image})`}}
		>
		<div className="flex flex-wrap justify-around h-screen items-center bg-cover bg-center sm:bg-left">
			<div className="min-w-sm p-6 rounded-lg bg-white filter drop-shadow-2xl">
				<h3 className="text-2xl font-bold text-center mb-6">Add Product</h3>
				<AddProductForm onSubmit={handleLogin} />
			</div>
			<Link className="px-4 bg-gray-50 hover:bg-gray-100 text-black rounded" to="/admin/orders">
				<Button className="text-lg" link>
					Show Orders
				</Button>
			</Link>
			<div className="min-w-sm p-6 rounded-lg bg-white filter drop-shadow-2xl">
				<h3 className="text-2xl font-bold text-center mb-6">Delete Product</h3>
				<DeleteProductForm onSubmit={handleLogin} />
			</div>
			</div>
		</main>
	)
}