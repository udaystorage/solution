import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function BestProductCard({ name, slug, image, description }) {
  return (
    <>
      <div className="group w-full max-w-70 sm:w-56 md:w-64 lg:w-70 h-auto transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl shadow-slate-400 flex flex-col justify-between items-center mb-2">
        <div className="relative aspect-video w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-t-2xl border-b object-cover"
            sizes="(max-width: 311px) calc(100vw - 2rem),
         (max-width: 639px) 280px,
         (max-width: 767px) 224px,
         (max-width: 1023px) 256px,
         280px"
          />
        </div>
        <div className="flex flex-col rounded-2xl justify-between items-center h-auto min-h-44 sm:min-h-48 md:min-h-50 w-full bg-white p-2 -translate-y-3 transition-transform duration-100 group-hover:pb-3">
          <h2 className="text-base sm:text-lg font-bold p-1 px-2 text-start w-full">
            {name}
          </h2>
          <p className="px-2 w-full text-neutral-500 text-start text-sm sm:text-base">
            {description ? description : "Details Here"}
          </p>
          <div className="flex justify-between items-center w-full px-2 gap-2">
            <Link
              href={`/leadstore/${slug}`}
              className="cursor-pointer mb-1 py-2 flex-1 rounded-xl bg-emerald-700 hover:bg-black text-center text-white font-bold text-sm sm:text-base"
            >
              Get Data
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
