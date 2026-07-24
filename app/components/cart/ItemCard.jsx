"use client"
import { CircleMinus, CirclePlus } from 'lucide-react'
import React, { useState } from 'react'

export default function ItemCard() {
    const [quant, setQuant] = useState(0)

  return (
    <>
     <div className="w-150 h-30 shrink-0 px-8 py-3 bg-white/30 rounded-2xl border-2  border-white/40 flex justify-between items-center">
                        <div className="w-2/3 h-full flex justify-start gap-4">
                            <div className="w-22 h-22 rounded-full text-center bg-white"></div>
                            <div className=" flex justify-center flex-col">
                                <p>Product Name</p>
                                <p> Product description</p>
                            </div>
                         </div>
                        <div className="  flex items-center justify-center w-20 gap-4 mr-8">
                            <div className=" cursor-pointer h-full"
                            onClick={() =>{
                                setQuant(quant+1);
                            }}
                            > <CirclePlus className='bg-cyan-500 rounded-lg stroke-white p-1 w-8 h-8'/>  </div>
                            <div className=" font-bold">{quant}</div>
                            <div className="cursor-pointer"
                             onClick={() =>{
                                if(quant >= 1){
                                    setQuant(quant-1);
                                }
                            }}
                            > <CircleMinus className='bg-cyan-500 rounded-lg stroke-white p-1 w-8 h-8'/></div>
                        </div>
        </div>
    </>
  )
}
