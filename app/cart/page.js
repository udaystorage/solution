"use client"
import React from 'react'
import ItemCard from '../components/cart/ItemCard'
import { openWhatsApp } from '@/lib/whatsapp'

export default function page() {

  return (
    <div className='w-full min-h-screen h-auto md:h-screen pt-18 px-4 sm:px-8 md:pl-16 lg:pl-20 md:pr-4 pb-6 md:pb-0 bg-linear-to-b from-cyan-400 to-violet-400'>
        <div className="w-full h-full flex flex-col md:flex-row flex-nowrap justify-center items-center md:items-start gap-6 md:gap-4">
            <div className="w-full md:w-1/2 max-h-100 sm:max-h-120 md:h-160 flex flex-col overflow-y-auto justify-baseline items-center md:items-end gap-2 scrollbar-thin py-3">
              <div className="w-full sm:text-end max-sm:pl-2 sm:pr-60 text-nowrap text-lg sm:text-xl font-bold">Product Details</div>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
            </div>
            <div className="w-full md:w-1/2 h-auto md:h-150 p-0 sm:p-3 flex justify-center md:justify-start">
              <div className="w-full max-w-125 h-auto min-h-100 md:h-125 bg-white/25 border-2 border-white/40 rounded-2xl flex flex-col p-4 sm:p-5 pl-5 sm:pl-6 pb-4 justify-between gap-6">
                    <div className="text-lg sm:text-xl font-bold w-full">Order Details</div>
                    <div className="text-sm sm:text-md pt-2 sm:pt-5 w-full h-full flex flex-col gap-2">
                        <div className="w-full h-8 flex justify-between pr-4 sm:pr-10">
                            <div className="">Total Price(2 items)</div>
                            <div className="">569</div>
                        </div>
                        <div className="w-full h-8 flex justify-between pr-4 sm:pr-10">
                            <div className="">Discount</div>
                            <div className="">569</div>
                        </div>
                        <div className="w-full h-8 flex justify-between pr-4 sm:pr-10">
                            <div className="">Extra charges</div>
                            <div className="">569</div>
                        </div>
                    </div>
                    <div className="text-base sm:text-xl px-2 sm:px-5 font-bold w-full h-10 flex justify-between items-center gap-3">
                            <div className='whitespace-nowrap'>Total 1234</div>
                            <button className='cursor-pointer px-4 sm:px-6 py-2 bg-cyan-300 rounded-full text-sm sm:text-base whitespace-nowrap'
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