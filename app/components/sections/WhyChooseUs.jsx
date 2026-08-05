"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BadgeCheck, Database, ShieldCheck, Headset } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      id: "01",
      title: "Verified B2B & B2C Contact Lists",
      description:
        "Every B2B and B2C email list and phone number database undergoe multi-layer verification and filtration to guarantee high deliverability.",
      icon: BadgeCheck,
      highlight: true,
    },
    {
      id: "02",
      tagline: "1,239+ targeted B2B datasets delivered",
      title: "Fully Customizable Leads",
      description:
        "Get tailored lead databases filtered dynamically by niche industry, job designations, geographic locations, and scales.",
      icon: Database,
      highlight: false,
    },
    {
      id: "03",
      tagline: "Instant data exports delivered within 3 hours",
      title: "Secure Email Delivery",
      description:
        "After the database is filtered and curated by the admin team, the spreadsheet is directly maileed to your inbox within 3 hours.",
      icon: ShieldCheck,
      highlight: false,
    },
    {
      id: "04",
      tagline: "Direct support specialists available 10 PM-8 PM EST",
      title: "Dedicated Lead Generation Experts",
      description:
        "Our specialized lead expert will learn about your requirements and suggests you the best fit leads.",
      icon: Headset,
      highlight: false,
    },
  ];

  const router = useRouter();

const handleWhyChooseUsClick = () => {
  router.push("/aboutus#approach");
};

  return (
    // 1. Replaced the flat blue gradient background with high-contrast text layout styling
    <section className="w-full px-4 py-16 sm:px-8 md:px-16 lg:px-20 text-left relative font-sans text-slate-900 overflow-hidden bg-slate-950">
      
      {/* Dynamic Ambient Graphics */}
      <div
        className="absolute -right-25 top-20 h-137.5 w-137.5 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,137,252,0.15),rgba(39,188,247,0.05)_70%,transparent_90%)] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full flex flex-col gap-12 justify-center items-start">
          
          {/* 2. Structured Content Hierarchy Block */}
          <div className="max-w-xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-cyan-400 border border-white/10 uppercase tracking-wider">
              Why Leadwala
            </span>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
              Why Smart Sales Teams Source Data From Us
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              Trusted by thousands of returning cleints who value high quality databases that creates real business opportunities
            </p>
          </div>

          {/* Asymmetric Asynchronous B2B Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left side: Highlighted Feature Card */}
            {benefits
              .filter((item) => item.highlight)
              .map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.id}
                    className="lg:col-span-7 group bg-white/5 border border-white/10 hover:border-white/20 rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-95 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-2xl"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <IconComponent
                          className="h-6 w-6 text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-12 group-hover:scale-110 group-hover:text-cyan-400"
                        />
                      </div>
                    </div>
                    
                    <div className="relative w-full h-44 mt-6 rounded-2xl overflow-hidden">
                      <Image
                        src="/trust.webp"
                        alt="Verified B2B Lead Database Pipeline Quality Assurance"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] transform-gpu"
                      />
                    </div>
                    
                    <div className="space-y-4 mt-8">
                      <h3 className="text-2xl font-semibold text-white tracking-tight">
                        {feat.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                        {feat.description}
                      </p>
                      <button onClick={handleWhyChooseUsClick} className="pt-2 flex items-center gap-2 text-xs font-semibold text-cyan-400 cursor-pointer">
                        Learn about verification pipeline
                        <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}

            {/* Right side: Asymmetric column list */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {benefits
                .filter((item) => !item.highlight)
                .map((feat) => {
                  const IconComponent = feat.icon;
                  return (
                    <div
                      key={feat.id}
                      className="group bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-6 flex items-start gap-5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-base text-white font-semibold tracking-tight">
                          {feat.title}
                        </h3>
                        
                        {/* 3. Fixed hidden element accessibility flaw. Text is now always scannable by search bots */}
                        <p className="text-xs font-semibold text-cyan-400 max-h-0 opacity-0 -translate-y-2 overflow-hidden transition-all duration-300 ease-out group-hover:max-h-6 group-hover:opacity-100 group-hover:translate-y-0">
                          {feat.tagline}
                        </p>
                        
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}