import React from 'react'
import { Link } from "react-router-dom"
import { Linkedin, Instagram, Twitter, MapPin, Phone, Mail, GitHub, Globe } from "react-feather"

export default function Footer() {
	return (
		<footer className="grid grid-cols-1 md:(grid-cols-3) border-t border-gray-300 bg-gray-200 px-4">
			<div className="m-4 sm:m-6 flex-1">
				<h2 className="text-4xl text-center md:text-left mb-4">University of Allahabad</h2>
				<p className="text-justify text-gray-700">Hi👋</p>
				<p className="text-justify text-gray-700">My name is Sagar Biswas. I'm a B.Tech (CSE) Final year student of J.K. Institute of Applied Physics & Technology. This Fashion E-Commerce Store is my final year academic Project work under the supervision of Dr. Lucky Agarwal (Asst. Professor).</p>
				<ul className="flex mt-6 justify-center md:justify-start space-x-4">
					<li>
						<Link to="https://www.linkedin.com/in/mrsagarbiswas/" target="_blank"><Linkedin /></Link>
					</li>				
					<li>
						<Link to="https://www.instagram.com/mrsagarbiswas/" target="_blank"><Instagram /></Link>
					</li>				
					<li>
						<a href="https://github.com/MrSagarBiswas" target='_blank'><GitHub /></a>
					</li>
					<li>
						<a href="https://www.google.com/search?q=MrSagarBiswas&rlz=1C1CHBF_enIN970IN970&oq=MrSagarBiswas&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgoIARAAGIAEGKIEMgYIAhBFGDwyBggDEEUYPDIGCAQQRRg80gEINDA4MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1" target="_blank"><Globe /></a>
					</li>
				</ul>
			</div>			
			<div className="m-4 sm:m-6">
				<h2 className="text-xl text-center md:text-left font-medium mb-4">Useful Links</h2>
				<ul className="flex flex-col flex-wrap h-36 space-y-1 text-gray-600">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
					<li>
						<Link to="/products?category=men">Men Fashion</Link>
					</li>
					<li>
						<Link to="/products?category=women">Women Fashion</Link>
					</li>
					<li>
						<Link to="/orders">Track Order</Link>
					</li>
					<li>
						<Link to="/account">My Account</Link>
					</li>							
					<li>
						<Link to="/wishlist">Wishlist</Link>
					</li>					
					<li>
						<Link to="/terms">Terms</Link>
					</li>
				</ul>
			</div>			
			<div className="m-4 sm:m-6">
				<h2 className="text-xl text-center md:text-left font-medium mb-4">Contact</h2>
				<ul className="space-y-3 text-gray-700">
					<li className="flex items-center">
						<MapPin className="w-5 h-5 mr-2" />
						<span>JK Institute of Applied Physics & Technology, Prayagraj, UP</span>
					</li>					
					<li className="flex items-center">
						<Phone className="w-5 h-5 mr-2" />
						<span>+91-8967997966</span>
					</li>					
					<li className="flex items-center">
						<Mail className="w-5 h-5 mr-2" />
						<a href="mailto:biswassagar927@gmail.com" target="_blank">
						biswassagar927@gmail.com
						</a>
					</li>
					<li className="flex items-center">
						<GitHub className="w-5 h-5 mr-2" />
						<a href="https://github.com/MrSagarBiswas/" target="_blank">
							Shoping Place
						</a>
						<span className='mx-1'>built by</span>
						<a href="#" target="_blank" className='border-b-2 border-green-500'>
							Sagar Biswas
						</a>
					</li>
				</ul>
				<div className="mt-6">
					Cash On Delivery (COD) Available
				</div>
			</div>
		</footer>
	)
}