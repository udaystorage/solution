import Image from "next/image";
import React from "react";
import bestselling1 from "../../images/BestSelling/bestselling1.jpg";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function BestProductCard({name , slug}) {
  return (
    <>
      <div className=" w-70 h-80 transition-all duration-300  rounded-2xl hover:shadow-lg shadow-slate-400 flex flex-col justify-between items-center mb-2">
        <Image
          src={bestselling1}
          className="rounded-t-xl h-40 w-full border"
          alt="demat"
        />
        <div className="flex flex-col rounded-2xl justify-between items-center h-50 w-full  bg-white p-2 -translate-y-3">
          <div className="text-lg font-bold p-1 px-2 text-start w-full">
           {name}
          </div>
          <p className="px-2 w-full text-start">{name}</p>
          <div className="flex justify-between pr-10 items-center w-full">
            <Link href={`/leadstore/${slug}`} className="cursor-pointer mb-1 mx-1 py-2 w-[70%] rounded-xl bg-emerald-400 hover:bg-emerald-500 text-center text-white font-bold">
              Details
            </Link>
            <button className=" group cursor-pointer hover:bg-cyan-400 mb-1 mx-1 p-2 transition-all duration-300  rounded-xl ">
             <ShoppingCart className="w-8 h-8 group-hover:stroke-white"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
