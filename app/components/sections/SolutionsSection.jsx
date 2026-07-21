"use client";
import React, { useState } from "react";
import { Verified, Smartphone, ListFilter } from "lucide-react";
import Carousel from "../ui/Carousel";

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
    // 1. Fixed compounding padding-x and set dynamic container width constraints
    <section className="w-full bg-beige-100 px-4 py-16 sm:px-8 md:px-16 lg:px-20 font-sans text-[#1A1A1A]">
      <div className="w-full max-w-7xl mx-auto ">
        
        {/* 2. Changed a generic div into an explicit H2 for regional target optimization */}
        <h2 className="py-2 pb-5 w-full text-4xl text-center font-bold text-black/60">
          Verified B2B Lead Databases Available All Over India
        </h2>

        {/* Carousel Container */}
        <div className="w-full overflow-hidden  pb-10 relative">
          <Carousel />
        </div>

        {/* 3. Replaced H2 with H3 to follow appropriate semantic structural hierarchy */}
        <div className="max-w-2xl mb-12">
          <h3 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
            Find the exact target B2B email list you need to pitch.
          </h3>
          <p className="text-base text-gray-600 leading-relaxed max-w-xl">
            Stop dealing with missing emails and dead numbers. Tell us your
            target audience profile and our team will extract a verified dataset
            built to convert your prospects.
          </p>
        </div>

        {/* 4. Streamlined Minimal Feature Grid (Removed typo 'PX-20') */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          {/* Card 1 */}
          <div className="space-y-2 rounded-xl border border-neutral-200/80 p-5 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center" aria-hidden="true">
              <Verified className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="text-[1.05rem] font-semibold leading-tight text-neutral-900">
              Verified B2B Contact Lists
            </h4>
            <p className="text-sm leading-6 text-neutral-500">
              Every sales lead profile undergoes strict validation. Zero dead-end emails or high bounce rates on your cold outreach campaigns.
            </p>
          </div>

          {/* Card 2 */}
          <div className="space-y-2 rounded-xl border border-neutral-200/80 p-5 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center" aria-hidden="true">
              <Smartphone className="w-7 h-7 text-emerald-600" />
            </div>
            <h4 className="text-[1.05rem] font-semibold leading-tight text-neutral-900">
              Direct Mobile Phone Numbers
            </h4>
            <p className="text-sm leading-6 text-neutral-500">
              Connect instantly without dealing with receptionist gatekeepers. Direct mobile connections optimized for fast sales loops.
            </p>
          </div>

          {/* Card 3 */}
          <div className="space-y-2 rounded-xl border border-neutral-200/80 p-5 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center" aria-hidden="true">
              <ListFilter className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-[1.05rem] font-semibold leading-tight text-neutral-900">
              Niche Industry Categories
            </h4>
            <p className="text-sm leading-6 text-neutral-500">
              Target narrow micro-niches instantly—ranging from specific industry verticals down to localized pincode tracking areas.
            </p>
          </div>
        </div>

        {/* 5. Interactive Capture Section */}
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-200/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-200/60">
            <div>
              <h4 className="text-xl font-bold text-neutral-900">
                Request your sample data batch
              </h4>
            </div>

            {/* Pill Switcher */}
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
                    name="business-email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter business email address"
                    className="flex-1 px-4 py-3 rounded-full border border-neutral-300 text-xs focus:outline-none focus:border-black bg-white transition-all"
                    aria-label="Business email address"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-black hover:bg-neutral-800 text-white text-xs font-semibold rounded-full whitespace-nowrap transition-colors shadow-sm"
                  >
                    Request Free Sample
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