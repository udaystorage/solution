"use client";

import React, { useState } from "react";
import { Verified, Smartphone, ListFilter } from "lucide-react";
import Carousel from "../ui/Carousel";
import { openWhatsApp } from "@/lib/whatsapp";

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("leads");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mobileError, setMobileError] = useState("");

  const validateMobile = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setMobileError("Enter a valid 10-digit Indian mobile number.");
      return false;
    }

    setMobileError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateMobile()) return;

    const message = `${mobile} wants to buy ${
      activeTab === "leads" ? "B2B Lists" : "Custom Data"
    }`;

    openWhatsApp(message);
    setSubmitted(true);
  };

  return (
    // 1. Fixed compounding padding-x and set dynamic container width constraints
    <section className="w-full bg-beige-100 px-4 py-16 sm:px-8 md:px-16 lg:px-20 font-sans text-[#1A1A1A]">
      <div className="w-full max-w-7xl mx-auto ">
        {/* 2. Changed a generic div into an explicit H2 for regional target optimization */}
        <h2 className="py-2 pb-8 w-full text-2xl text-center font-bold text-black/60">
          Pan India Business Leads
        </h2>

        {/* Carousel Container */}
        <div className="w-full overflow-hidden  pb-10 relative">
          <Carousel />
        </div>

        {/* 3. Replaced H2 with H3 to follow appropriate semantic structural hierarchy */}
        <div className="max-w-2xl mb-12 mt-12">
          <h3 className="text-3xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            {/* Find the exact target B2B/B2C email list you need to pitch. */}
            Reach the target audience with leadwala verified preimium databases.
          </h3>
          <p className="text-base text-gray-600 leading-relaxed max-w-xl">
            Stop reaching out the wrong people. Our verified and filtered databses will lead you to the interested prospects.
          </p>
        </div>

        {/* 4. Streamlined Minimal Feature Grid (Removed typo 'PX-20') */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Card 1 */}
          <div className="space-y-2 rounded-xl border border-neutral-200/80 p-5 bg-linear-to-br from-white via-neutral-50 to-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
            <div
              className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center"
              aria-hidden="true"
            >
              <Verified className="w-8 h-8 text-sky-500" />
            </div>
            <h4 className="text-[1.05rem] font-semibold leading-tight text-neutral-900">
              Human Verified Databases
            </h4>
            <p className="text-sm leading-6 text-neutral-500">
              Every sales lead profile undergoes manual verification for optimum database accuracy. No outreach campaign goes to waste.
              {/* Every sales lead profile undergoes manual verification & validation. Leadwala make sure each databse has optimum accuracy for your outreach campaigns.   */}
            </p>
          </div>

          {/* Card 2 */}
          <div className="space-y-2 rounded-xl border border-neutral-200/80 p-5 bg-linear-to-br from-white via-neutral-50 to-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
            <div
              className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center"
              aria-hidden="true"
            >
              <Smartphone className="w-7 h-7 text-sky-500" />
            </div>
            <h4 className="text-[1.05rem] font-semibold leading-tight text-neutral-900">
              Direct Mobile Numbers
            </h4>
            <p className="text-sm leading-6 text-neutral-500">
              You reach the decision maker - no intermediary interactions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="space-y-2 rounded-xl border border-neutral-200/80 p-5 bg-linear-to-br from-white via-neutral-50 to-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
            <div
              className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center"
              aria-hidden="true"
            >
              <ListFilter className="w-6 h-6 text-sky-500" />
            </div>
            <h4 className="text-[1.05rem] font-semibold leading-tight text-neutral-900">
              Niche Industry Categories
            </h4>
            <p className="text-sm leading-6 text-neutral-500">
              Target your outreach campaigns to micro industries, desired regions, and specific audience segments.
            </p>
          </div>
        </div>

        {/* 5. Interactive Capture Section */}
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border-3 border-neutral-200/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-200/60">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                Try Our Premium Leads
              </h3>
            </div>

            <div className="relative flex min-w-60 rounded-full bg-stone-100 p-1 shadow-inner ring-1 ring-black/5">
              {/* Sliding Pill */}
              <div
                className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full
      bg-stone-900 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-black/5
      transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]
      ${activeTab === "leads" ? "translate-x-0" : "translate-x-full"}`}
              />

              <button
                onClick={() => {
                  setActiveTab("leads");
                  setSubmitted(false);
                }}
                type="button"
                aria-label="B2B Lists"
                className={`relative z-10 w-1/2 whitespace-nowrap rounded-full px-4 py-2
      text-xs font-semibold transition-colors duration-300 ${
        activeTab === "leads"
          ? "text-white"
          : "text-stone-700 hover:text-stone-900"
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
                aria-label="Custom Data"
                className={`relative z-10 w-1/2 whitespace-nowrap rounded-full px-4 py-2
      text-xs font-semibold transition-colors duration-300 ${
        activeTab === "custom"
          ? "text-white"
          : "text-stone-700 hover:text-stone-900"
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
                 Need broader reach over your target audience? our standard leads are what you need. Affordable and reliable.
                </p>
              ) : (
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Looking for higher response rates? Our premium databases are what you need. Accurate, precise and human-verified. 
                </p>
              )}
            </div>

            {/* Inline Email Input and Capture Action */}
            <div className="lg:col-span-6 w-full">
              {submitted ? (
                <div className=" w-full bg-neutral-800 text-white px-5 py-3 rounded-2xl flex items-center gap-3 border border-neutral-800 relative">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <p className="relative w-full pr-14 text-[11px] leading-5 font-medium sm:text-[13.5px]">
                    Query logged. Our database managers will call you within 2
                    hours.
                    <span
                    aria-label="Ok"
                      onClick={() => {
                        setSubmitted("");
                        setMobile("");
                      }}
                      className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer
      rounded-xl bg-white px-2.5 py-2 text-green-700
      transition-all duration-200 ease-out
      hover:scale-105 hover:rotate-3 hover:text-green-500"
                    >
                      Ok!
                    </span>
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col sm:flex-row gap-2"
                >
                  <div className="w-full flex-1">
                    <div
                      className={`rounded-full p-px ${
                        mobileError
                          ? "bg-red-400"
                          : "bg-linear-to-r from-violet-500 via-sky-500 to-sky-400"
                      }`}
                    >
                      <input
                        type="tel"
                        name="mobile"
                        autoComplete="tel"
                        inputMode="numeric"
                        maxLength={10}
                        value={mobile}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);

                          setMobile(value);

                          // Only show an immediate error for an invalid starting digit
                          if (value && !/^[6-9]/.test(value)) {
                            setMobileError(
                              "Mobile number must starts with 6, 7, 8, or 9.",
                            );
                          } else {
                            setMobileError("");
                          }
                        }}
                        placeholder={
                          mobileError ? mobileError : "Enter Your Mobile Number"
                        }
                        className={`w-full rounded-full outline-none bg-white px-4 py-3 text-xs
      transition-all ${
        mobileError
          ? "border-red-400 focus:border-red-500"
          : "border-neutral-300 focus:border-black"
      }`}
                        aria-label="Mobile number"
                      />
                    </div>

                    <p
                      className={`mt-1.5 px-3 text-[13px] text-red-400 transition-opacity duration-300 ${
                        mobileError ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {" "}
                      {mobileError || "Enter your mobile number"}
                    </p>
                  </div>
                  <button
                    type="submit"
                    aria-label="Request your batch"
                    className="px-6 py-3 bg-black hover:bg-neutral-800 text-white text-xs font-semibold rounded-full whitespace-nowrap transition-colors shadow-sm cursor-pointer max-h-fit  "
                  >
                    Request Your Batch
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
