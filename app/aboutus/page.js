"use client";

import AboutHero from "../components/sections/aboutPage/AboutHero";
import WhyWeExist from "../components/sections/aboutPage/WhyWeExist";
import OurApproach from "../components/sections/aboutPage/OurApproach";
import OurPrinciples from "../components/sections/aboutPage/OurPrinciples";
import FinalCTA from "../components/sections/aboutPage/FinalCTA";
import ReachCapabilities from "../components/sections/aboutPage/ReachCapabilities";
import FAQSection from "../components/sections/FAQ";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-stone-950">
      <AboutHero />
      <WhyWeExist />
      <OurApproach />
      <OurPrinciples />
      <ReachCapabilities />
    <FAQSection page="about"/>
      <FinalCTA />
    </main>
  );
}
