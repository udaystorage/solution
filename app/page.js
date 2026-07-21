import Image from "next/image";
import BlurGlass from "./components/BlurGlass";
import FAQSection from "./components/sections/FAQ";
import SolutionSection from "./components/sections/SolutionsSection";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import { Check, TrendingUp } from "lucide-react";

// 1. Core Metadata Configuration for B2B Bounded Engine Optimization
export const metadata = {
  title: "Leadwala | Premium B2B Lead Databases & Verified Email Lists",
  description: "Buy hand-verified B2B contact lists without annual subscription traps. Export premium databases for Real Estate, E-commerce, Insurance, and niche industries.",
  keywords: [
    "buy b2b email list",
    "real estate agent database",
    "b2b lead generation platform",
    "ecommerce store email list",
    "download bulk lead database"
  ],
  alternates: {
    canonical: "https://leadwala.com", // Replace with your real URL when production-ready
  },
  openGraph: {
    title: "Leadwala | Premium B2B Lead Databases",
    description: "Access high-accuracy B2B datasets with zero subscription lock-ins.",
    url: "https://leadwala.com",
    siteName: "Leadwala",
    type: "website",
  }
};

export default function Home() {
  return (
    // 2. Transformed wrapper into a semantic <main> landmark
    // Removed the w-[101%] overflow quirk which can cause layout shifts that hurt Google's Core Web Vitals (CLS)
    <main className="w-full flex flex-col items-center justify-center bg-white font-sans overflow-hidden mx-auto">
      
      {/* Hero section */}
      <BlurGlass />

      {/* Structured core value components */}
      <SolutionSection />
      
      <WhyChooseUs />
      
      {/* FAQ handles automated Schema injection internally */}
      <FAQSection page="home" />
      
    </main>
  );
}