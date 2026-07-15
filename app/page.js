import Image from "next/image";
import BlurGlass from "./components/BlurGlass";
import FAQSection from "./components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white font-sans overflow-scroll ">
         <BlurGlass/>
    <div className="w-full h-screen bg-green-300">
        jf4e
    </div>
    <FAQSection page="home" />
    </div>
  );
}
