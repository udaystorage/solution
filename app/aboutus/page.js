"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Layers, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  MessageSquare,
  Users,
  Database,
  Send,
  Sliders
} from "lucide-react";

export default function AboutPage() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: "01",
      title: "Understand Requirements",
      desc: "We align tracking parameters with your target profiles using localized geographic vectors, exact industry subdivisions, and operational scales.",
    },
    {
      num: "02",
      title: "Bespoke Research",
      desc: "Profiles and target corporate entities are gathered dynamically through specific live filters rather than compiling outdated pre-scraped logs.",
    },
    {
      num: "03",
      title: "Multi-Layer Verification",
      desc: "Records pass through algorithmic syntax filtering followed by human verification checks to prevent hard bounces and protect outreach health.",
    },
    {
      num: "04",
      title: "Data Structuring",
      desc: "Information is systematically cleaned, standardized, and neatly mapped out into clean ready-to-import CSV formats.",
    },
    {
      num: "05",
      title: "Secure Delivery",
      desc: "High-intent data files are funneled securely directly to your internal dashboards, completely ready for immediate campaign outreach.",
    },
  ];

  const [reqPersona, setReqPersona] = useState("Sales Leads");
  const [reqIndustry, setReqIndustry] = useState("SaaS Systems");
  const [reqLocation, setReqLocation] = useState("Pan-India");

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-cyan-100">
      
      {/* 1. ABOUT HERO — WHO WE ARE */}
      <section className="relative overflow-hidden mx-auto max-w-7xl px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-slate-100">
        
        {/* Dynamic Theme Blurred Background Aura Vector */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[450px] opacity-80 blur-[130px] rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 pointer-events-none z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              For Better Outbound Ecosystems
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.1]">
              Better data.<br />Better conversations.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Better business.
              </span>
            </h1>

            <p className="max-w-xl text-lg text-slate-600 font-normal leading-relaxed">
              We engineer functional data assets that maximize conversion success rates. By verifying every entry across intent loops, we connect you with real buyers.
            </p>

            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-600"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Verified Data</span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-600"><Layers className="w-4 h-4 text-purple-500" /> Custom-Built Lists</span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-600"><Users className="w-4 h-4 text-blue-500" /> Human-Assisted</span>
            </div>
          </div>

          {/* Clean Floating Metric Card UI */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 text-white p-8 rounded-3xl w-64 h-40 shadow-xl flex flex-col justify-between transform transition-transform hover:scale-105 duration-300">
              <span className="text-sm font-mono tracking-widest uppercase opacity-80">Data Accuracy Status</span>
              <div>
                <span className="text-4xl font-bold tracking-tight">10</span>
                <p className="text-xs font-medium tracking-wide opacity-90 mt-1">Tier Verification Steps Passed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY WE EXIST — OUR PURPOSE */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-purple-600 uppercase block">The Core Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
              Business data shouldn’t create more work.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Traditional setups overload workflows with mass unverified spreadsheets, leaving teams to process rows of decaying records, wrong addresses, and blocked routes.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-8">
            {/* The Old Way */}
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-6 shadow-sm">
              <h3 className="font-bold text-slate-400 uppercase tracking-wider text-xs border-b border-slate-100 pb-3">The Generic Route</h3>
              <ul className="space-y-4">
                {[
                  { t: "Mass Automated Scraping", d: "Bots pick old public text blocks without re-validation cycles." },
                  { t: "Bloated Row Entries", d: "Mass counts that damage deliverability indexes via dead contact targets." },
                  { t: "Heavy Staff Filtering Tasks", d: "Hours wasted sorting out bad text strings manually instead of selling." }
                ].map((item, idx) => (
                  <li key={idx} className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-800">{item.t}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Leadwala Way */}
            <div className="bg-black text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-bold text-cyan-400 uppercase tracking-wider text-xs border-b border-neutral-800 pb-3">The Leadwala Approach</h3>
              <ul className="space-y-4">
                {[
                  { t: "Target Profile Requirements First", d: "We shape your parameters completely prior to initiating active list building blocks." },
                  { t: "Multi-Source Custom Research", d: "Data pipelines dynamically pull fresh signals across active corporate registries." },
                  { t: "Double-Verification Pipelines", d: "Every row entry is verified live to guarantee bounce-proof deliverability." }
                ].map((item, idx) => (
                  <li key={idx} className="space-y-1">
                    <h4 className="text-sm font-bold text-neutral-100">{item.t}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR APPROACH — HOW WE BUILD BETTER DATA */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-b border-slate-100">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1 rounded-full uppercase tracking-wider">Engine Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">There is a thoughtful process behind the data we deliver.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {stages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center gap-4 relative ${
                  activeStage === idx
                    ? "bg-slate-950 border-slate-950 text-white shadow-md"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span className={`font-mono text-xs ${activeStage === idx ? 'text-cyan-400' : 'text-slate-400'}`}>{stage.num}</span>
                <span className="text-base font-bold tracking-tight">{stage.title}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-slate-200/50 select-none pointer-events-none">
              {stages[activeStage].num}
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200/30 font-bold">Verified Stage Blueprint</span>
              <h3 className="text-2xl font-bold text-slate-950">{stages[activeStage].title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">{stages[activeStage].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PRINCIPLES — WHAT WE STAND FOR */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-b border-slate-100">
        <div className="max-w-xl mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase block">System Rules</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">What we stand for.</h2>
        </div>

        <div className="border-t border-slate-200 divide-y divide-slate-200">
          {[
            { n: "01", h: "Accuracy over volume.", p: "We do not artificially pad list counts with outdated records. Clean functionality remains our single baseline quality standard." },
            { n: "02", h: "Relevance over generic lists.", p: "Static databanks decay constantly. We structure customized extraction rules built directly for your target lists." },
            { n: "03", h: "Transparency over unrealistic promises.", support: "If specialized segments fall beneath minimal statistical reliability markers, we inform your team transparently." },
            { n: "04", h: "Business outcomes over database size.", p: "We judge system efficiency entirely by active pipeline movement and customer campaign success rates." }
          ].map((pr, index) => (
            <div key={index} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-slate-50 px-4 -mx-4 transition-colors duration-200 rounded-xl">
              <div className="md:col-span-1 font-mono text-xs text-slate-400 pt-1">{pr.n}</div>
              <div className="md:col-span-4 text-lg font-bold text-slate-950">{pr.h}</div>
              <div className="md:col-span-7 text-xs sm:text-sm text-slate-500 leading-relaxed pt-0.5">{pr.p || pr.support}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OUR REACH & CAPABILITIES — PROOF */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-b border-slate-100 bg-blue-600 text-white rounded-t-[2.5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 z-0" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">Scale Verification</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">Pan-India data coverage frameworks.</h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-light">
              Our continuous data pipeline maps tech centers, industrial manufacturing hubs, and emerging digital enterprises across every major tier territory.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl space-y-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">99.2%</p>
                <p className="text-[10px] font-mono uppercase text-blue-200 mt-2 tracking-wider">Precision Matrix</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">45k+</p>
                <p className="text-[10px] font-mono uppercase text-blue-200 mt-2 tracking-wider">Active Verified Targets</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">24h</p>
                <p className="text-[10px] font-mono uppercase text-blue-200 mt-2 tracking-wider">Verification Sync Cycle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HUMAN EXPERTISE — THE PEOPLE BEHIND THE DATA */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-purple-600 uppercase">Quality Operations Layer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
              Technology helps us scale.<br />Human judgment helps us stay relevant.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Automated pipelines are efficient for bulk scraping, but they lack context. Our team personally audits complex account data vectors to ensure absolute accuracy.
            </p>
          </div>

          <div className="lg:col-span-5 border border-slate-200 bg-slate-50 p-6 rounded-3xl space-y-3">
            <span className="text-xs font-mono text-slate-400 block border-b border-slate-200 pb-2 uppercase tracking-wider">Verification Pipeline Steps</span>
            {[
              { label: "Data Pipeline Input", icon: Database },
              { label: "Algorithmic Filter Matrix", icon: Sliders },
              { label: "Human Audit Verification", icon: Users },
              { label: "Ready System Output", icon: Send }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200/60 shadow-sm text-xs font-semibold text-slate-800">
                <step.icon className="w-4 h-4 text-blue-600" />
                <span>{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA — TURN THE STORY INTO ACTION */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">Configure Output</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">You know your ideal customer. We’ll help you find them.</h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm sm:text-base">Define your core audience targets directly below to configure your operational database asset.</p>
        </div>

        {/* Dynamic Selector Dropdown Module */}
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl text-left max-w-2xl mx-auto shadow-sm">
          <div className="flex flex-wrap items-center gap-y-4 gap-x-2 text-sm sm:text-base text-slate-700 font-medium">
            <span>Extract verified contact files for</span>
            <select value={reqPersona} onChange={(e) => setReqPersona(e.target.value)} className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-slate-950 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-600 text-xs sm:text-sm">
              <option>Sales Leads</option>
              <option>Marketing Managers</option>
              <option>Founders & CEOs</option>
            </select>
            <span>in the</span>
            <select value={reqIndustry} onChange={(e) => setReqIndustry(e.target.value)} className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-slate-950 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-600 text-xs sm:text-sm">
              <option>SaaS Systems</option>
              <option>Fintech Hubs</option>
              <option>E-commerce Logistics</option>
            </select>
            <span>across</span>
            <select value={reqLocation} onChange={(e) => setReqLocation(e.target.value)} className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-slate-950 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-600 text-xs sm:text-sm">
              <option>Pan-India</option>
              <option>Mumbai Zone</option>
              <option>Bangalore Axis</option>
            </select>
            <span>territories.</span>
          </div>
        </div>

        {/* Buttons matching the specific Leadwala theme layout pill shapes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button className="w-full sm:w-auto bg-black text-white hover:bg-neutral-900 transition-colors duration-200 py-3 px-6 font-semibold text-sm rounded-full flex items-center justify-center gap-2 group shadow-md">
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <a href="https://wa.me/#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 transition-colors duration-200 py-3 px-6 font-semibold text-sm rounded-full flex items-center justify-center gap-2 shadow-sm">
            Talk to an Expert
            <MessageSquare className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </section>
    </main>
  );
}