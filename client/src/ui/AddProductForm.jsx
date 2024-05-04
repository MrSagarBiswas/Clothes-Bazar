import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Type, FileText, PlusCircle, DollarSign } from "react-feather"
import Loader from '../components/Loader'

import Input from "@/components/Input"
import Button from "@/components/Button"
import Alert from "@/components/Alert"

export default function AddProductForm({ onSubmit }) {
	const [title, setTitle] = useState("")
	const [description, setDesc] = useState("")
	const [image, setImg] = useState("")
	const [price, setPrice] = useState("")
	const [added, setAdded] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState("")

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		const resp = await onSubmit({title, description, image, price})
		setLoading(false)
		if (resp.status == "ok") {
			setAdded(resp.message)
		} else {
			setError(resp.message)
		}
	}
	useEffect(() => {
		return () => {
			setLoading(false)
		}
	}, [])

	return (
		<form
			className="flex items-center flex-col space-y-2"
			onSubmit={handleSubmit}
		>
			<Input 
				value={title}
				onChange={e => setTitle(e.target.value)}
				icon={<Type width={20} height={20} />}
				placeholder="Product Title" required />
			<Input 
				value={description}
				onChange={e => setDesc(e.target.value)}
				icon={<FileText width={20} height={20} />}
				placeholder="Description" required />
			<Input 
				value={image}
				onChange={e => setImg(e.target.value)}
				icon={<PlusCircle width={20} height={20} />}
				placeholder="Image Link" required />
			<Input 
				value={price}
				icon={<DollarSign width={20} height={20} />}
				onChange={e => setPrice(e.target.value)}
				type="number" placeholder="Price in INR" required />

			{error && <Alert heading="Error!" body={error} danger />}
			{added && <Alert heading="Success!" body={added} success />}

			<Button 
				className="w-full !mt-6 !text-base !rounded-full" 
				type="submit"
				disabled={loading}
			>
				{loading ? <Loader /> : "Add"}
			</Button>
				
		</form>
	)
}