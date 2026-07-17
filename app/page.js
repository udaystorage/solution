import Image from "next/image";
import BlurGlass from "./components/BlurGlass";
import FAQSection from "./components/sections/FAQ";
import SolutionSection from "./components/sections/SolutionsSection";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import { Check, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="w-[101%]  flex flex-col items-center justify-center bg-white font-sans overflow-hidden m-auto">
      
      <BlurGlass />

      <SolutionSection />
      <WhyChooseUs />
      {/* <div className="w-full h-screen bg-green-300"></div> */}
        <FAQSection page="home" />
    </div>
  );
}
