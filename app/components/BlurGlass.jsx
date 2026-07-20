import React from "react";
import BlobBackground from "../SVG/BlobBackground";
import FloatingCard from "./FloatingCard";

export default function BlurGlass() {
  return (
    // 1. Used <section> for semantic meaning - Google gives more weight to sections
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pl-20 bg-white" aria-label="Hero Section">
      
      <BlobBackground />

      {/* 2. Changed container structure to ensure text content remains readable and crawlable */}
      <div className="relative z-10 w-full  flex flex-col md:flex-row items-center justify-between py-5 bg-white/30">
        
        {/* Left Side: SEO-Critical Content */}
        <div className="w-1/2 pl-40 flex flex-col gap-6">
          <span className="text-sm font-semibold tracking-wide uppercase text-slate-500">
            Premium B2B & B2C Lead Generation
          </span>
          
          {/* 3. Strong H1 with primary keywords */}
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            Marketplace for <br />
            <span className="bg-linear-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              verified leads.
            </span>
          </h1>

          {/* 4. Keyword-rich sub-headline */}
          <p className="text-md text-slate-700 max-w-lg">
            Instantly access direct-dial phone numbers and verified email databases. 
            No subscription lock-ins, 95%+ accuracy, and compliance-ready data for your outreach.
          </p>

          <div className="flex gap-4">
            <button className="font-bold cursor-pointer bg-black text-white px-9 py-3 rounded-full hover:shadow-lg transition duration-300" aria-label="Explore database">
              Explore Store
            </button>
            <button className="font-bold cursor-pointer bg-white px-9 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300" aria-label="Contact sales team">
              Talk with us
            </button>
          </div>
        </div>

        {/* Right Side: Visual Element */}
        {/* Added min-height to prevent layout shift during loading */}
        <div className="w-full md:w-2/3 flex justify-center items-center mt-12 md:mt-0 min-h-75">
          <FloatingCard />
        </div>
      </div>
    </section>
  );
}