"use client"
import { CircleMinus, CirclePlus } from 'lucide-react'
import React, { useState } from 'react'

export default function ItemCard() {
    const [quant, setQuant] = useState(0)

  return (
    <>
     <div className="sm:w-150 w-full h-18 sm:h-30 shrink-0 px-4 sm:px-8 py-3 bg-white/30 rounded-2xl border-2  border-white/40 flex justify-between items-center">
                        <div className="w-2/3 h-full flex justify-start items-center gap-4">
                            <div className="sm:w-22 sm:h-22 w-14 aspect-square rounded-full text-center bg-white"></div>
                            <div className=" flex justify-center sm:text-md text-xs flex-col">
                                <p>Product Name</p>
                                <p> Product description</p>
                            </div>
                         </div>
                        <div className="  flex items-center justify-center w-20 gap-4 sm:mr-8 mr-1">
                            <div className=" cursor-pointer h-full"
                            onClick={() =>{
                                setQuant(quant+1);
                            }}
                            > <CirclePlus className='bg-cyan-500 rounded-lg stroke-white p-1 sm:w-8 sm:h-8 w-6 h-6 '/>  </div>
                            <div className=" font-bold">{quant}</div>
                            <div className="cursor-pointer"
                             onClick={() =>{
                                if(quant >= 1){
                                    setQuant(quant-1);
                                }
                            }}
                            > <CircleMinus className='bg-cyan-500 rounded-lg stroke-white p-1 sm:w-8 sm:h-8 w-6 h-6'/></div>
                        </div>
        </div>
    </>
  )
}
