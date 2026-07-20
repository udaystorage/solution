import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='p-4 w-full h-18 bg-gray-50/10 backdrop-blur-sm shadow-sm fixed top-0 z-30 flex flex-row justify-around items-center'>
         <div className="text-3xl font-bold ">leadwala</div>
         <div className=" flex flex-row gap-6 min-w-min p-1 px-2 bg-white rounded-full border">
          <Link className=' bg-black text-white rounded-full px-5 py-1.5' href="/">Home</Link>
          <Link className=' bg-white rounded-full px-5 py-1.5' href="/services">Services</Link>
          <Link className=' bg-white rounded-full px-5 py-1.5' href="/leadstore">Lead Store</Link>
          <Link className=' bg-white rounded-full px-5 py-1.5' href="/aboutus">About us</Link>
          <Link className=' bg-white rounded-full px-5 py-1.5' href="/blog">Blog</Link>
         </div>
         <div className=" flex justify-center items-center gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-full ">Login</button>
          <div className=" p-2 px-3 cursor-pointer hover:bg-white rounded-xl transition-all duration-200">
            <ShoppingCart className='h-7 w-7'/>
          </div>
         </div>
    </div>
  )
}
