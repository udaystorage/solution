import React from 'react'
import { states } from "@/data/states";

function Carousel() {
    
const marquee = [...states, ...states];
  return (
   <div className="relative overflow-hidden py-4">
  {/* Left Fade */}
  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white via-white/90 to-transparent" />

  {/* Right Fade */}
  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/90 to-transparent" />

  <div className="flex w-max animate-marquee gap-4">
    {marquee.map((state, index) => (
   <div
  key={`${state}-${index}`}
  className="
    group
    relative
    flex
    items-center
    gap-3
    overflow-hidden
    rounded-full

    border border-white/70

    bg-white/45
    backdrop-blur-xl

    px-6
    py-3

    shadow-[0_2px_8px_rgba(15,23,42,0.04),0_10px_24px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.95)]

    transition-all
    duration-500

    hover:-translate-y-0.5
    hover:border-emerald-200
    hover:bg-white/60
    hover:shadow-[0_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,1)]
  "
>
  {/* top highlight */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/70 via-transparent to-transparent opacity-70" />

  {/* premium glowing indicator */}
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
  )
}

export default Carousel