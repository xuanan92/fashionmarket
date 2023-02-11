import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
	  <div>
		<nav className='flex bg-gray-100'>
		  <div className='my-auto flex items-center p-2'>
			  <img className='w-[150px]' src="./fashion-market-lres.png" alt="fashion shop" />
			  <ul className="pl-4 list-none">
			  	<li className="font-bold">Office: T2-T6</li>
			  	<li className="italic">Tel: 0934.61.99.50</li>
			  </ul>
		  </div>
		  <div className='p-4 my-auto ml-auto'>
			<ul className="list-none flex space-x-4">
				<li> <NavLink to='/'>Homepage</NavLink></li>
				<li> <NavLink to='/shop'>Shop</NavLink></li>
				<li> <NavLink to='/blogs'>News</NavLink></li>
				<li> <NavLink to='/blogs'>Blogs</NavLink></li>
				<li> <NavLink to='/contact'>Contact</NavLink></li>
				<li> <NavLink to='/login'>Login</NavLink></li>
			</ul>
		  </div>
		</nav>
	  </div>
  )
}
