"use client";

import React from "react";
import Image from "next/image";
import { BadgeCheck, Database, ShieldCheck, Headset } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      id: "01",
      title: "Verified & Accurate Data",
      description:
        "Every dataset goes through multiple verification processes to ensure exceptional accuracy.",
      icon: BadgeCheck,
      highlight: true, // Used to create an asymmetric, editorial visual hierarchy
    },
    {
      id: "02",
      tagline: "1239+ custom data delivered",
      title: "Custom Database Solutions",
      description:
        "Tailored datasets filtered by industry, designation, geography, company size, and more.",
      icon: Database,
      highlight: false,
    },
    {
      id: "03",
      tagline: "Delivered within 5 hours, not days",
      title: "Fast & Secure Delivery",
      description:
        "Receive your database quickly through secure delivery methods with complete confidentiality.",
      icon: ShieldCheck,
      highlight: false,
    },
    {
      id: "04",
      tagline: "Effective support 24/7",
      title: "Dedicated Expert Support",
      description:
        "Our specialists work closely with you to deliver exactly the data your business requires.",
      icon: Headset,
      highlight: false,
    },
  ];

  return (
    <section className="w-full  px-20 py-10 text-left relative font-sans text-[#1A1A1A] overflow-hidden bg-[linear-gradient(180deg,#2F5FB5_0%,#3767BF_45%,#3E70C7_100%)]">
      {/* Decorative ambient blurred vector matching the hero section design language */}
      <div
        className="
    absolute
    right-[-100px]
    top-20
    h-[550px]
    w-[550px]
    rounded-full
    bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),rgba(99,102,241,0.22)_45%,rgba(168,85,247,0.14)_70%,transparent_90%)]
    blur-[100px]
    pointer-events-none
  "
      />
      <div
        className="absolute -top-40 left-1/2 h-[500px] w-[500px]
-translate-x-1/2 rounded-full
bg-cyan-300/15 blur-[120px]"
      />

      <div className="h-full w-full  flex flex-col justify-center items-center">
        {/* Layout synced exactly with the hero templates (w-[70%] and left padding offset) */}
        <div className="w-full px-20 py-10 flex flex-col gap-12 justify-center items-start">
          {/* Header Block */}
          <div className="max-w-xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-black border border-neutral-200/60 uppercase tracking-wider">
              Why Leadwala
            </span>
            <h2 className="text-4xl font-medium tracking-tight text-white leading-tight">
              Why Businesses Choose Us
            </h2>
            <p className="text-neutral-100 text-sm leading-relaxed max-w-3xl">
              Trusted by businesses that value accurate, verified, and
              high-quality data for sustainable growth.
            </p>
          </div>

          {/* Asymmetric Editorial SaaS Grid Layout */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left side: Large featured block (Benefit 1 - Verified & Accurate Data) */}
            {benefits
              .filter((item) => item.highlight)
              .map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.id}
                  className="
lg:col-span-7
group
bg-white
hover:bg-neutral-50
border
border-neutral-200/50
rounded-3xl
p-8 md:p-10
flex
flex-col
justify-between
min-h-[380px]
shadow-[0_4px_24px_rgba(0,0,0,0.01)]
hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]
transition-all
duration-500
ease-[cubic-bezier(0.22,1,0.36,1)]
"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200/50 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <IconComponent className="    h-6 w-6
      text-neutral-800
      transition-all
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:rotate-12
      group-hover:scale-110
      group-hover:text-emerald-600" />
                      </div>
                    </div>
                    <div className="relative w-full h-40 mt-6 rounded-lg overflow-hidden">
                     <Image
  src="/trust.webp"
  alt="Trust"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="
    object-cover
    rounded-2xl
    transition-transform
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
    group-hover:scale-[1.04]
    transform-gpu
  "
/>
                    </div>
                    <div className="space-y-4 mt-12">
                      <h3 className=" flex text-2xl font-semibold text-neutral-900 tracking-tight">
                        {feat.title}
                      </h3>
                    
                      <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                        {feat.description}
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-neutral-800 group-hover:text-black transition-colors">
                        Learn about verification pipeline
                        <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* Right side: Supporting asymmetric column list (Benefits 2, 3, 4) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {benefits
                .filter((item) => !item.highlight)
                .map((feat) => {
                  const IconComponent = feat.icon;
                  return (
                    <div
                      key={feat.id}
                      className="group bg-white border border-neutral-200/40 hover:border-neutral-200/80 rounded-2xl p-6 flex items-start gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-sm transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <IconComponent className="w-5 h-5 text-neutral-700" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-semibold text-neutral-900 tracking-tight">
                            {feat.title}
                          </h4>
                        </div>
                          <p className="    invisible
    max-h-0
    text-sm
    text-green-600
    overflow-hidden
    opacity-0
    -translate-y-2
    transition-all
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]
    group-hover:visible
    group-hover:max-h-10
    group-hover:opacity-100
    group-hover:translate-y-0">
                        {feat.tagline}
                      </p>
                        <p className="text-neutral-500 text-xs leading-relaxed">
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
