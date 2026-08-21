import React from "react";
import Cube from "../animations/cubeAnimate/Cube";
import Image from "next/image";
import demoprofile1 from "../../images/store/demoprofile1.jpg";
import demoprofile2 from "../../images/store/demoprofile2.jpg";
import demoprofile3 from "../../images/store/demoprofile3.jpg";
import demoprofile4 from "../../images/store/demoprofile4.jpg";

export default function LeadStoreHero() {
  return (
    <section className="relative isolate overflow-hidden w-screen h-150 sm:h-180 md:h-150  flex flex-col md:flex-row justify-center items-center pt-24 md:pt-15 lg:pt-18 px-6 md:px-0 gap-10 md:gap-0 pb-10 md:pb-0">
      {/* Base Gradient */}
      <div className="absolute inset-0 -z-30 bg-linear-to-br from-sky-100 via-cyan-50 to-violet-100" />

      {/* Large Cyan Glow */}
      <div className="absolute -top-40 -left-40 w-175 h-175 rounded-full bg-cyan-300/35 blur-[140px] -z-20" />

      {/* Purple Glow */}
      <div className="absolute -bottom-55 left-1/3 w-162.5 h-162.5 rounded-full bg-violet-400/25 blur-[170px] -z-20" />

      {/* Blue Glow */}
      <div className="absolute top-10 -right-45 w-125 h-125 rounded-full bg-sky-400/25 blur-[140px] -z-20" />

      {/* White Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-87.5 bg-white/35 blur-[120px] -z-20" />
      <div
        className="absolute inset-0 opacity-[0.04] -z-10"
        style={{
          backgroundImage: `
      linear-gradient(to right, black 1px, transparent 1px),
      linear-gradient(to bottom, black 1px, transparent 1px)
    `,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, rgba(255,255,255,0.45) 100%)",
        }}
      />
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center text-center md:items-start md:text-left px-2 md:pl-16 lg:pl-32 xl:pl-55">
        <h1 className="max-w-xl hero-heading">
          Get custom leads tailored to your 
          <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent"> exact needs.</span>
        </h1>
        <p className="hero-subheading">
          Get custom, verified databases delivered directly to you within 2–3
          hours.
        </p>
        <div className="relative flex flex-row justify-center sm:justify-start w-full sm:w-60 h-20 items-center flex-wrap gap-y-2 mt-6 md:mt-8">
          <Image
            src={demoprofile1}
            alt=""
            className="object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12 border-2 border-white"
          />
          <Image
            src={demoprofile4}
            alt=""
            className="object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12 -translate-x-2 border-2 border-white"
          />
          <Image
            src={demoprofile2}
            alt=""
            className="object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12 -translate-x-4 border-2 border-white"
          />
          <Image
            src={demoprofile3}
            alt=""
            className="object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12 -translate-x-8 border-2 border-white"
          />
          <p className="w-full min-w-fit text-xs sm:text-sm font-medium text-center sm:text-left sm:w-auto  sm:translate-x-0">
            Verified by 7,203+ Happy Bussinesses.
          </p>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 h-45 sm:h-80 md:h-full flex justify-center items-center">
        <div className="absolute w-105 h-105 rounded-full bg-cyan-300/20 blur-[110px]" />

        <Cube />
      </div>
    </section>
  );
}
