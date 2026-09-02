"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaXTwitter, FaLinkedin, FaGlobe } from "react-icons/fa6";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Geist } from "next/font/google";
const geist = Geist({
  subsets: ["latin"],
});

import { openWhatsApp } from "@/lib/whatsapp";

const footerLinks = [
  { label: "About Us", href: "/aboutus" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setStatus("Opening WhatsApp...");

    const message = `I want to buy database form LW. My number : ${mobile}`;
    openWhatsApp(message);

    setMobile("");
      setTimeout(() => {
    setStatus("");
  }, 5000);
  };

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:px-8 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-[1.3fr_1fr_1fr_1.6fr]">
          {/* Logo */}

          <div>
            <div className="flex flex-col items-start text-left">
              <div className="relative flex justify-center items-center gap-1 ">
                <Image
                  src="/logo/logo.webp"
                  alt="DataTreasure Logo"
                  width={35}
                  height={35}
                  className="
                  flex justify-center items-center
                  w-4 h-4
                  sm:w-4 sm:h-4
                  md:w-5 md:h-5
                  lg:w-4.5 lg:h-4.5
                  object-contain
                  mix-blend-multiply
                "
                />
                <span
                  className={`${geist.className} text-sm md:text-base lg:text-lg font-semibold tracking-[0.01em]`}
                >
                  Data<span className="text-[#53A6DC]">Treasure</span>
                </span>
              </div>

              <p className="mt-2 md:mt-3 max-w-65 text-sm leading-5 sm:leading-6 text-neutral-500">
                Trusted data that helps you reach the right people.
              </p>

              <div className="mt-8 flex flex-col gap-2">
                <div className="flex items-center gap-3 text-[13px] leading-6 text-neutral-500">
                  <MapPin className="h-4 w-4 shrink-0 text-neutral-400" />
                  <span>Topsia, Kolkata, West Bengal 700046</span>
                </div>

                <div className="flex items-center gap-3 text-[13px] leading-6 text-neutral-500">
                  <Mail className="h-4 w-4 shrink-0 text-neutral-400" />
                  <span> joysolution21@gmail.com</span>
                </div>

                <div className="flex items-center gap-3 text-[13px] leading-6 text-neutral-500">
                  <Phone className="h-4 w-4 shrink-0 text-neutral-400" />
                  <span> +91 81000 25936</span>
                </div>
              </div>
            </div>
          </div>

          {/* Discover */}

          <div>
            <h1 className="mb-5 text-[14px] font-semibold text-neutral-900">
              Solutions
            </h1>

            <ul className="space-y-1 md:space-y-2 lg:space-y-3">
              {[
                "B2B Leads",
                "Industry Contacts",
                "Custom Data",
                "Lead Generation",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[13px] text-neutral-700 transition hover:text-black"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}

          <div>
            <h2 className="mb-5 text-[14px] font-semibold text-neutral-900">
              Company
            </h2>

            <ul className="space-y-1 md:space-y-2 lg:space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-neutral-700 transition hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="relative mb-2 sm:mb-3 md:mb-5 inline-block overflow-hidden text-[15 px] font-semibold tracking-tight text-neutral-900 before:absolute before:top-0 before:left-0 before:h-full before:w-[45%]  before:skew-x-[-20deg] before:bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.15)_35%,rgba(255,255,255,0.98)_50%,rgba(255,255,255,0.15)_65%,transparent_100%)] before:animate-shimmer-small">
                Need Custom Data?
              </h3>
              <p className="text-[13px] text-neutral-600">
                Tell our expert what you need. Send us your contact, we will get
                back to you within 5 minutes.
              </p>

              <div className="mt-4">
                <div className="flex overflow-hidden rounded-xl border border-neutral-300 bg-white">
                  <input
                    type="tel"
                    placeholder="Enter Your Mobile Number"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                      setError("");
                      setStatus("");
                    }}
                    className="w-full px-5 py-3 text-[13px] outline-none placeholder:text-neutral-400"
                  />

                  <button
                    onClick={handleClick}
                    aria-label="Submit number"
                    className="group flex w-14 items-center justify-center border-l border-neutral-200 bg-black transition-colors duration-200 hover:bg-black cursor-pointer"
                  >
                    <ArrowRight className="h-5 w-5 text-neutral-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
                  </button>
                </div>

                <p
                  className={`mt-2 h-5 text-xs transition-opacity duration-200 ${
                    error || status ? "opacity-100" : "opacity-0"
                  } ${error ? "text-red-500" : "text-neutral-500"}`}
                >
                  {error || status || "\u00A0"}
                </p>
              </div>
            </div>

            {/* <div className="mt-10 flex gap-3">
              <a
                href="#"
                className="group p-2.5 rounded-xl bg-transparent border border-transparent transition-all duration-300 ease-out 
    hover:bg-[#f5f6f8] 
    hover:border-white/80 
    hover:scale-[1.05] 
    hover:shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(0,0,0,0.08)] 
    active:scale-[0.97] 
    active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.06),_inset_-2px_-2px_5px_rgba(255,255,255,0.9)]"
              >
                <FaLinkedin className="h-5 w-5 stroke-[1.8] text-slate-600 transition-colors duration-300 group-hover:text-slate-900" />
              </a>

              <a
                href="#"
                className="group p-2.5 rounded-xl bg-transparent border border-transparent transition-all duration-300 ease-out 
    hover:bg-[#f5f6f8] 
    hover:border-white/80 
    hover:scale-[1.05] 
    hover:shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(0,0,0,0.08)] 
    active:scale-[0.97] 
    active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.06),_inset_-2px_-2px_5px_rgba(255,255,255,0.9)]"
              >
                <FaXTwitter className="h-5 w-5 stroke-[1.8] text-slate-600 transition-colors duration-300 group-hover:text-slate-900" />
              </a>

              <span
                onClick={() =>
                  openWhatsApp("Leadwala? I have some database query")
                }
                className="group p-2.5 rounded-xl bg-transparent border border-transparent transition-all duration-300 ease-out 
    hover:bg-[#f5f6f8] 
    hover:border-white/80 
    hover:scale-[1.05] 
    hover:shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(0,0,0,0.08)] 
    active:scale-[0.97] 
    active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.06),_inset_-2px_-2px_5px_rgba(255,255,255,0.9)]"
              >
                <FaWhatsapp className="h-5 w-5 stroke-[1.8] text-slate-600 transition-colors duration-300 group-hover:text-slate-900" />
              </span>

              <span
                onClick={() => {
                  window.location.href = "mailto:hello@leadwala.co.in";
                }}
                className="group p-2.5 rounded-xl bg-transparent border border-transparent transition-all duration-300 ease-out 
    hover:bg-[#f5f6f8] 
    hover:border-white/80 
    hover:scale-[1.05] 
    hover:shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(0,0,0,0.08)] 
    active:scale-[0.97] 
    active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.06),_inset_-2px_-2px_5px_rgba(255,255,255,0.9)]"
              >
                <Mail className="h-5 w-5 stroke-[1.8] text-slate-600 transition-colors duration-300 group-hover:text-slate-900" />
              </span>
            </div> */}
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-neutral-200 pt-8 text-center lg:flex-row lg:text-left">
          <p className="text-sm leading-7 text-neutral-600">
            © 2026 DataTreasure
            <br />
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-stone-500">
            <Link
              href="/privacy-policy"
              className="hover:text-stone-800 transition duration-200 hover:-translate-y-0.5"
            >
              Privacy Policy
            </Link>
            <span className="text-stone-300 text-[13px]">|</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-stone-800 transition duration-200 hover:-translate-y-0.5"
            >
              Terms & Conditions
            </Link>
            <span className="text-stone-300 text-[13px]">|</span>

            <Link
              href="/acceptable-use"
              className="hover:text-stone-800 transition duration-200 hover:-translate-y-0.5 "
            >
              Acceptable Use
            </Link>
            <span className="text-stone-300 text-[13px] ">|</span>

            <Link
              href="/refund-policy"
              className="hover:text-stone-800 transition duration-200 hover:-translate-y-0.5"
            >
              Refund Policy
            </Link>
            <span className="text-stone-300">|</span>

            <Link
              href="/disclaimer"
              className="hover:text-stone-800 transition duration-200 hover:-translate-y-0.5"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
