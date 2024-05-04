import React, { useContext } from 'react'
import { sliderItems } from '@/dummydata'

import { UserContext, CartContext } from '@/App'
import AddProductForm from "@/ui/AddProductForm"
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
			className="flex justify-around h-screen items-center bg-cover bg-center sm:bg-left"
			style={{backgroundImage: `url(${randomSlide.image})`}}
		>
			<div className="min-w-sm p-6 rounded-lg bg-white filter drop-shadow-2xl">
				<h3 className="text-2xl font-bold text-center mb-6">Add Product</h3>
				<AddProductForm onSubmit={handleLogin} />
			</div>
			<div className="min-w-sm p-6 rounded-lg bg-white filter drop-shadow-2xl">
				<h3 className="text-2xl font-bold text-center mb-6">Add Product</h3>
				<AddProductForm onSubmit={handleLogin} />
			</div>
			<div className="min-w-sm p-6 rounded-lg bg-white filter drop-shadow-2xl">
				<h3 className="text-2xl font-bold text-center mb-6">Add Product</h3>
				<AddProductForm onSubmit={handleLogin} />
			</div>
		</main>
	)
}