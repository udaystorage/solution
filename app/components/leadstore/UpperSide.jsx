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
     <div className="w-screen h-150 md:h-115 bg-linear-180 from-cyan-300 to-purple-400 flex flex-col md:flex-row justify-center items-center pt-24 md:pt-18 px-6 md:px-0 gap-10 md:gap-0 pb-10 md:pb-0">
          
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center  items-center md:items-start gap-4 text-center md:text-left px-2 md:pl-16 lg:pl-32 xl:pl-55">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Get Custom Leads Tailored to Your Exact Needs.
            </div>
            <div className="text-sm sm:text-base">
              Get custom, verified databases delivered directly to you within 2–3 hours
            </div>
            <div className="relative flex flex-row justify-center sm:justify-start w-full sm:w-60 h-20 items-center flex-wrap gap-y-2">
              <Image
                src={demoprofile1}
                alt="leadstore"
                className="object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12 border-2 border-white"
              />
              <Image
                src={demoprofile4}
                alt="leadstore"
                className="object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12 -translate-x-2 border-2 border-white"
              />
              <Image
                src={demoprofile2}
                alt="leadstore"
                className="object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12 -translate-x-4 border-2 border-white"
                />
              <Image
                src={demoprofile3}
                alt="leadstore"
                className="object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12 -translate-x-8 border-2 border-white"
                />
                <p className="w-full min-w-fit text-xs sm:text-sm font-medium text-center sm:text-left sm:w-auto  sm:translate-x-0">
                  Verified by 7,203+ Happy Bussinesses.
                </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-45 sm:h-80 md:h-full flex flex-col justify-center items-center">
            <Cube />
          </div>
        </div>
    </>
  )
}