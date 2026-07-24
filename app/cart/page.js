"use client"
import React from 'react'
import ItemCard from '../components/cart/ItemCard'
import { openWhatsApp } from '@/lib/whatsapp'

export default function page() {

  return (
    <div className='w-[99vw] h-screen pt-18 pl-20  bg-linear-to-b from-cyan-400 to-violet-400'>
        <div className=" w-full h-full flex flex-row flex-nowrap justify-center items-start">
            <div className="  w-1/2 h-160 flex flex-col overflow-y-auto justify-baseline items-end gap-2 scrollbar-thin py-3">
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
            </div>
            <div className=" w-1/2 h-150  p-3">
              <div className="w-125 h-125 bg-white/25 border-2 border-white/40 rounded-2xl flex flex-col p-5 pl-6 pb-4 justify-between">
                    <div className="text-xl font-bold w-full ">Order Details</div>
                    <div className="text-md pt-5 w-full h-full flex flex-col gap-2 ">
                        <div className="w-full h-8 flex justify-between pr-10">
                            <div className="">Total Price(2 items)</div>
                            <div className="">569</div>
                        </div>
                        <div className="w-full h-8 flex justify-between pr-10">
                            <div className="">Discount</div>
                            <div className="">569</div>
                        </div>
                        <div className="w-full h-8 flex justify-between pr-10">
                            <div className="">Extra charges</div>
                            <div className="">569</div>
                        </div>
                    </div>
                    <div className="text-xl px-5 font-bold w-full h-10 flex justify-between items-center">
                            <div className=''>Total 1234</div>
                            <button className=' cursor-pointer px-6 py-2 bg-cyan-300 rounded-full'
                            onClick={() => {
                                openWhatsApp("hello")
                            }}
                            >Order Now</button>
                    </div>
              </div>
            </div>
        </div>
    </div>
  )
}
