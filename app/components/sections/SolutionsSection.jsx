"use client";
import React, { useState } from "react";
import { Verified, Smartphone, ListFilter } from "lucide-react";

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("leads");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-beige-100 px-20 py-10 font-sans text-[#1A1A1A]">
      <div className="w-full px-20 py-10 ">
        {/* 1. Synced Regional Text Layout (Left Aligned, Non-stretching) */}
        <div className="w-full overflow-hidden pb-16 relative">
          <div className="flex space-x-12 whitespace-nowrap text-xl md:text-2xl font-semibold text-neutral-300 tracking-tight select-none">
            <span>Mumbai</span>
            <span>Delhi</span>
            <span>Bangalore</span>
            <span>Pune</span>
            <span>West Bengal</span>
            <span>Mumbai</span>
            <span>Delhi</span>
            <span>Bangalore</span>
            <span>Pune</span>
            <span>West Bengal</span>
            <span>Mumbai</span>
            <span>Delhi</span>
            <span>Bangalore</span>
            <span>Pune</span>
            <span>West Bengal</span>
            <span className="text-neutral-200">more..</span>
          </div>
        </div>

        {/* 2. Headline Matching the Left Grid Margin */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl font-medium text-wrap w-140">
            Find the exact target list you need to pitch.
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-xl">
            Stop dealing with missing emails and dead numbers. Tell us your
            target audience profile and our team will extract a verified dataset
            built to convert.
          </p>
        </div>

        {/* 3. Streamlined Minimal Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 PX-20">
          {/* Card 1 */}
          <div
            className="space-y-2 rounded-xl border border-neutral-200 p-5  shadow-[-16px_0_32px_-12px_rgba(15,23,42,0.15)] transition-colors bg-gradient-to-br
from-white
via-neutral-50
to-neutral-100
border border-neutral-200/80
shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
              <Verified className="w-4 h-4 text-emerald-600" />
            </div>

            <h3 className="text-[1.05rem] font-semibold leading-tight text-neutral-900">
              Triple-Verified Contacts
            </h3>

            <p className="text-sm leading-6 text-neutral-500">
              Every profile undergoes strict validation. Zero dead-end emails or
              high bounce rates on your outreach campaigns.
            </p>
          </div>

          {/* Card 2 */}
          {/* Card 2 */}
          <div
            className="space-y-2 rounded-xl border border-neutral-200 p-5  shadow-md transition-colors bg-gradient-to-br
from-white
via-neutral-50
to-neutral-100
border border-neutral-200/80
shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-emerald-600" />
            </div>

            <h3 className="text-[1.05rem] font-semibold leading-tight text-neutral-900">
              Direct Mobile Lines
            </h3>

            <p className="text-sm leading-6 text-neutral-500">
              Connect instantly without dealing with receptionist gatekeepers.
              Direct mobile phone connections built for fast sales loops.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="space-y-2 rounded-xl border border-neutral-200 p-5  shadow-[12px_0_24px_-10px_rgba(15,23,42,0.12)] transition-colors bg-gradient-to-br
from-white
via-neutral-50
to-neutral-100
border border-neutral-200/80
shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
              <ListFilter className="w-4 h-4 text-emerald-600" />
            </div>

            <h3 className="text-[1.05rem] font-semibold leading-tight text-neutral-900">
              Custom Category Filters
            </h3>

            <p className="text-sm leading-6 text-neutral-500">
              Target narrow micro-niches instantly—ranging from local city
              sectors right down to specific pinpoint zip codes.
            </p>
          </div>
        </div>

        {/* 4. Interactive Capture Section Styled Like Hero Component Pills */}
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-200/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-200/60">
            <div>
              <h4 className="text-xl font-bold text-neutral-900">
                Request your sample data batch
              </h4>
            </div>

            {/* Pill Switcher matching Navbar style */}
            <div className="flex bg-neutral-200/60 p-1 rounded-full border border-neutral-300/30">
              <button
                onClick={() => {
                  setActiveTab("leads");
                  setSubmitted(false);
                }}
                type="button"
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  activeTab === "leads"
                    ? "bg-black text-white"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                B2B Lists
              </button>
              <button
                onClick={() => {
                  setActiveTab("custom");
                  setSubmitted(false);
                }}
                type="button"
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  activeTab === "custom"
                    ? "bg-black text-white"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Custom Data
              </button>
            </div>
          </div>

          {/* Context Explainer + Inline Lead Capture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6">
              {activeTab === "leads" ? (
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Get high-density contact logs grouped by industry, region, and
                  scale. Perfect for cold calling or setting up direct
                  transactional outreach loops.
                </p>
              ) : (
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Looking for unique criteria like specific local restaurant
                  spaces or local pincode blocks? Our experts will custom curate
                  it.
                </p>
              )}
            </div>

            {/* Inline Email Input and Capture Action */}
            <div className="lg:col-span-6 w-full">
              {submitted ? (
                <div className="w-full bg-neutral-900 text-white px-5 py-3 rounded-2xl flex items-center gap-3 border border-neutral-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <p className="text-xs font-medium">
                    Query logged. Our database managers will contact you shortly
                    with samples.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col sm:flex-row gap-2"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter business email"
                    className="flex-1 px-4 py-3 rounded-full border border-neutral-300 text-xs focus:outline-none focus:border-black bg-white transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-black hover:bg-neutral-800 text-white text-xs font-semibold rounded-full whitespace-nowrap transition-colors shadow-sm"
                  >
                    Request Quote
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
