<<<<<<< HEAD
import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page
=======
"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  PackageCheck,
  Cpu,
  Users,
  MapPin,
} from "lucide-react";
import Image from "next/image";

import AboutHero from "../components/sections/aboutPage/AboutHero";
import WhyWeExist from "../components/sections/aboutPage/WhyWeExist";
import OurApproach from "../components/sections/aboutPage/OurApproach";
import OurPrinciples from "../components/sections/aboutPage/OurPrinciples";
import HumanExpertise from "../components/sections/aboutPage/HumanExpertise";
import FinalCTA from "../components/sections/aboutPage/FinalCTA";
import ReachCapabilities from "../components/sections/aboutPage/ReachCapabilities";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-stone-950">
      <AboutHero />
      <WhyWeExist />
      <OurApproach />
      <OurPrinciples />
      <ReachCapabilities />
      <HumanExpertise />
      <FinalCTA />
    </main>
  );
}
>>>>>>> 5c3acfc678e885bbc71748cef0ff6aa802ded47a
