import React from "react";
import BlobBackground from "../SVG/BlobBackground";
import FloatingCard from "./FloatingCard";
import Link from "next/link";
import { Headset } from "lucide-react";

export default function BlurGlass() {
  return (

    // section gets morte weight by google
  <section
  className="
    relative w-full min-h-screen
    flex items-center justify-center
    overflow-hidden bg-white
    px-5 sm:px-8 md:px-10 lg:px-12 xl:px-20
    py-24 sm:py-28 lg:py-20
  "
  aria-label="Hero Section"
  >
  <BlobBackground />

 
  <div
    className="
      relative z-10
      w-full max-w-7xl mx-auto
      flex flex-col lg:flex-row
      items-center justify-between
      gap-12 md:gap-14 lg:gap-8 xl:gap-12
      rounded-3xl
      bg-white/10
    "
  >
    {/* Left Side: SEO-Critical Content */}
    <div
      className="
        w-full lg:w-1/2
        flex flex-col
        items-center lg:items-start
        text-center lg:text-left
        gap-5 sm:gap-6
        lg:pl-6 xl:pl-10
      "
    >
      <h2
        className="
          text-xs sm:text-sm
          font-semibold tracking-wide
          text-slate-500
        "
      >
        Premium B2B & B2C Lead Generation
      </h2>

      <h1
        className="
          text-[2.5rem] sm:text-5xl md:text-6xl
          lg:text-[3.5rem] xl:text-6xl
          font-bold text-black
          leading-[1.08] sm:leading-tight
          tracking-tight
        "
      >
        Marketplace for
        <br className="hidden sm:block" />{" "}
        <span
          className="
            bg-linear-to-r
            from-purple-500 to-cyan-500
            bg-clip-text text-transparent
          "
        >
          verified leads.
        </span>
      </h1>

      <p
        className="
          max-w-xl
          text-sm sm:text-base
          leading-6 sm:leading-7
          text-slate-700
        "
      >
        Instantly access direct-dial phone numbers and verified email
        databases. No subscription lock-ins, 95%+ accuracy, and
        compliance-ready data for your outreach.
      </p>

      <div
        className="
          w-full sm:w-auto
          flex flex-col sm:flex-row
          items-stretch sm:items-center
          justify-center lg:justify-start
          gap-3 sm:gap-4
          pt-1 sm:pt-2
        "
      >
        <Link
        href={"/leadstore"}
          className="
            w-full sm:w-auto
            min-h-12
            whitespace-nowrap
            font-semibold
            cursor-pointer
            bg-black text-white
            px-7 sm:px-9 py-3
            rounded-full
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-0.5
            active:translate-y-0
            transition-all duration-300
          "
          aria-label="Explore database"
        >
          Explore Store
        </Link>

        <button
          className="
            w-full sm:w-auto
            min-h-12  flex gap-2
            whitespace-nowrap
            font-semibold
            cursor-pointer
            bg-white text-black
            px-7 sm:px-9 py-3
            rounded-full justify-center 
            border border-slate-200/80
            shadow-md
            hover:shadow-lg
            hover:-translate-y-0.5
            active:translate-y-0
            transition-all duration-300
          "
          aria-label="Contact sales team"
        >
          Talk with us   
        <Headset/>  
        </button>
      </div>
    </div>

    {/* Right Side: Visual Element */}
    <div
      className="
        relative
        w-full lg:w-1/2
        flex justify-center lg:justify-end
        items-center
        min-h-70 sm:min-h-80 md:min-h-95 lg:min-h-105
      "
    >
      <div
        className="
          w-full
          max-w-80
          sm:max-w-md
          md:max-w-lg
          lg:max-w-xl
        "
      >
        <FloatingCard />
      </div>
    </div>
  </div>
</section>
  );
}