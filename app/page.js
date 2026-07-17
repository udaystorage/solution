import BlurGlass from "./components/BlurGlass";
import FAQSection from "./components/sections/FAQ";
import { Check, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="w-[101%]  flex flex-col items-center justify-center bg-white font-sans overflow-hidden m-auto">
      <BlurGlass />
      <div className="w-full h-40 bg-gray-50 flex flex-wrap justify-around items-center px-20 gap-4">
        <h4 className="text-2xl font-bold text-gray-400">Mumbai</h4>
        <h4 className="text-2xl font-bold text-gray-400">Delhi</h4>
        <h4 className="text-2xl font-bold text-gray-400">bangalore</h4>
        <h4 className="text-2xl font-bold text-gray-400">Pune</h4>
        <h4 className="text-2xl font-bold text-gray-400">Westbengal</h4>
        <h4 className="text-2xl font-bold text-gray-400">more..</h4>
      </div>

      <div className="w-full h-fit  bg-gray-50 flex flex-col justify-center items-start gap-4 px-20 py-10">
        <h3 className="text-4xl font-medium text-wrap w-140  pl-25">
          Built for both sides of the exchange.
        </h3>
        <p className="text-gray-600 pl-25 w-180">
          Whether you're sourcing leads or monetizing a dataset you already own,
          Verinet handles verification, pricing and delivery.
        </p>

        <div className="w-full flex justify-around gap-3 items-center px-20">
          <div className="bg-white shadow-xl rounded-3xl w-90 h-50 flex flex-col justify-start items-start text-2xl font-medium text-black px-6">
            <div className="pt-5 pb-8">
              <Check className="w-9 h-9 rounded-lg bg-green-400" />
            </div>
            <h5 className="text-xl">Verified contacts</h5>
            <p className=" text-sm text-gray-600 p-1">
              Every record passes email, phone and employment checks before it's
              listed — no stale or bounced data.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-3xl w-90 h-50 flex flex-col justify-start items-start text-2xl font-medium text-black px-6">
            <div className="pt-5 pb-8">
              <TrendingUp className="w-9 h-9 rounded-lg bg-green-400 p-1" />
            </div>
            <h5 className="text-xl">Real-time enrichment</h5>
            <p className=" text-sm text-gray-600 p-1">
             Append firmographic and intent signals to your existing lists in seconds via API or CSV upload.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-3xl w-90 h-50 flex flex-col justify-start items-start text-2xl font-medium text-black px-6">
            <div className="pt-5 pb-8">
              <TrendingUp className="w-9 h-9 rounded-lg bg-green-400" />
            </div>
            <h5 className="text-xl">Compliant sourcing</h5>
            <p className=" text-sm text-gray-600 p-1">
              Consent and origin tracked on every record, so what you buy or sell stays GDPR and CCPA safe.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-green-300"></div>
        <FAQSection page="home" />
    </div>
  );
}
