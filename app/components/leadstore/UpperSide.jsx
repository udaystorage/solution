import React from 'react'
import Cube from "../Desigines/Cube";
import Image from "next/image";
import demoprofile1 from "../../images/store/demoprofile1.jpg";
import demoprofile2 from '../../images/store/demoprofile2.jpg'
import demoprofile3 from '../../images/store/demoprofile3.jpg'
import demoprofile4 from '../../images/store/demoprofile4.jpg'
import { CircleChevronRight } from 'lucide-react';

export default function UpperSide() {
  return ( 
    <>
     <div className="w-full h-115 bg-linear-180 from-cyan-300 to-purple-400  flex justify-center items-center pt-18 ">
          <div className="w-1/2 h-full flex flex-col justify-center items-start gap-4 pl-55">
            <div className="text-5xl font-bold">
              Get Custom Leads Tailored to Your Exact Needs.
             <span> <CircleChevronRight className=' relative left-42 bottom-10 w-10 h-10'/> </span>
            </div>
            <div className="">
              Get custom, verified databases delivered directly to you within 2–3 hours
            </div>
            <div className="relative flex flex-row justify-start w-60 h-20 items-center">
              <Image
                src={demoprofile1}
                alt="leadstore"
                className="object-cover rounded-full w-12 h-12   border-2 border-white"
              />
              <Image
                src={demoprofile4}
                alt="leadstore"
                className="object-cover rounded-full w-12 h-12  -translate-x-2 border-2 border-white"
              />
              <Image
                src={demoprofile2}
                alt="leadstore"
                className="object-cover rounded-full w-12 h-12 -translate-x-4  border-2 border-white"
                />
              <Image
                src={demoprofile3}
                alt="leadstore"
                className="object-cover rounded-full w-12 h-12 -translate-x-8  border-2 border-white"
                />
                <p className="min-w-fit text-sm font-medium">Verified by 10,000+ Happy Bussinesses.</p>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-start ">
            <Cube />
          </div>
        </div>
    </>
  )
}
