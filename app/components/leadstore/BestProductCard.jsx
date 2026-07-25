import Image from "next/image";
import React from "react";
import bestselling1 from "../../images/BestSelling/bestselling1.jpg";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function BestProductCard({ name, slug }) {
  return (
    <>
      <div className="w-full max-w-70 sm:w-56 md:w-64 lg:w-70 h-auto transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl shadow-slate-400 flex flex-col justify-between items-center mb-2">
        <Image
          src={bestselling1}
          className="rounded-t-xl h-32 sm:h-36 md:h-40 w-full border object-cover"
          alt="demat"
        />
        <div className="flex flex-col rounded-2xl justify-between items-center h-auto min-h-44 sm:min-h-48 md:min-h-50 w-full bg-white p-2 -translate-y-3">
          <div className="text-base sm:text-lg font-bold p-1 px-2 text-start w-full">
            {name}
          </div>
          <p className="px-2 w-full text-start text-sm sm:text-base">{name}</p>
          <div className="flex justify-between items-center w-full px-2 gap-2">
            <Link
              href={`/leadstore/${slug}`}
              className="cursor-pointer mb-1 py-2 flex-1 rounded-xl bg-emerald-400 hover:bg-emerald-500 text-center text-white font-bold text-sm sm:text-base"
            >
              Details
            </Link>
            <button className="group cursor-pointer hover:bg-cyan-400 mb-1 p-2 transition-all duration-300 rounded-xl shrink-0">
              <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:stroke-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}