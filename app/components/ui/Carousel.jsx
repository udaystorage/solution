import React from 'react'
import { states } from "@/data/states";

function Carousel() {
    
const marquee = [...states, ...states];
  return (
<div className="group marquee-mask relative overflow-hidden py-1">
  <div className="marquee-track">
    {/* First Copy */}
    <div className="flex gap-4 pr-4">
      {marquee.map((state, index) => (
        <div
          key={`first-${state}-${index}`}
          className="
            relative
            flex
            items-center
            gap-3
            overflow-hidden
            rounded-full
            cursor-pointer
            border border-white/70

            bg-white/45
            backdrop-blur-md

            px-6
            py-4

            shadow-[0_4px_12px_rgba(15,23,42,.05),inset_0_1px_0_rgba(255,255,255,.95)]

            transition-[transform,background-color,border-color,box-shadow]
            duration-500
            ease-out

            hover:-translate-y-0.5
            hover:border-cyan-200
            hover:bg-white/60
            hover:shadow-[0_12px_24px_rgba(15,23,42,.08),inset_0_1px_0_rgba(255,255,255,1)]
          "
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/70 via-transparent to-transparent opacity-70" />

          <div className="relative h-2.5 w-2.5 flex-shrink-0">
            <span className="absolute inset-0 rounded-full bg-blue-400 blur-[5px] opacity-40" />
            <span className="absolute inset-[2px] rounded-full bg-cyan-500" />
          </div>

          <span className="relative whitespace-nowrap text-[14px] font-medium tracking-[0.03em] text-neutral-700">
            {state}
          </span>
        </div>
      ))}
    </div>

    {/* Second Copy */}
    <div className="flex gap-4 pr-4" aria-hidden="true">
      {marquee.map((state, index) => (
        <div
          key={`second-${state}-${index}`}
          className="
            relative
            flex
            items-center
            gap-3
            overflow-hidden
            rounded-full

            border border-white/70

            bg-white/45
            backdrop-blur-md

            px-6
            py-3

            shadow-[0_4px_12px_rgba(15,23,42,.05),inset_0_1px_0_rgba(255,255,255,.95)]

            transition-[transform,background-color,border-color,box-shadow]
            duration-500
            ease-out

            hover:-translate-y-0.5
            hover:border-emerald-200
            hover:bg-white/60
            hover:shadow-[0_12px_24px_rgba(15,23,42,.08),inset_0_1px_0_rgba(255,255,255,1)]
          "
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/70 via-transparent to-transparent opacity-70" />

          <div className="relative h-2.5 w-2.5 flex-shrink-0">
            <span className="absolute inset-0 rounded-full bg-emerald-400 blur-[5px] opacity-40" />
            <span className="absolute inset-[2px] rounded-full bg-emerald-500" />
          </div>

          <span className="relative whitespace-nowrap text-[14px] font-medium tracking-[0.03em] text-neutral-700">
            {state}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default Carousel