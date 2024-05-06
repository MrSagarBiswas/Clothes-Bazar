import React, { useContext } from 'react'
import { sliderItems } from '@/dummydata'

import { UserContext, CartContext } from '@/App'
import AdminLoginForm from "@/ui/AdminLoginForm"
import api from '@/api'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
	const navigate = useNavigate()

	const handleLogin = async userData => {
		console.log(userData)
		if(userData.email=="admin@gmail.com" && userData.password=="admin"){
			sessionStorage.setItem("isAdmin", "true");
			navigate("/admin/dashboard");
			return {status: "ok", message: "Admin Verification Successful"}
		} else {
			return {status: "error", message: "Error! incorrect credientials"}
		}
	}
	const randomSlide = sliderItems[Math.floor(Math.random() * sliderItems.length)]

	return (
		<main 
			className="flex justify-center h-screen items-center bg-cover bg-center sm:bg-left"
			style={{backgroundImage: `url(${randomSlide.image})`}}
		>
			<div className="min-w-sm p-6 rounded-lg bg-white filter drop-shadow-2xl">
				<h3 className="text-2xl font-bold text-center mb-6">Admin Credentials</h3>
				<AdminLoginForm onSubmit={handleLogin} />
			</div>
		</main>
	)
}