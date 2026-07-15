import React from "react";
import BlobBackground from "../SVG/BlobBackground";
import FloatingCard from "./FloatingCard";

export default function BlurGlass() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen  text-center relative">

        <BlobBackground />


        <div className="h-screen w-screen flex flex-row justify-center top-0 left-0 items-center text-left  bg-white/10 backdrop-blur-lg shadow-lg ring-1 ring-black/20 absolute">
          {/* /////////////////////////////////////////////////////////// */}
          {/* left Side Heading */}
          {/* /////////////////////////////////////////////////////////// */}
          <div className="w-[80%] h-full flex flex-col gap-8 justify-center items-start pl-50 ">
            <p>For Data Buyers & Sellers</p>
            <h1 className="text-6xl font-medium text-black">
              Leads, made <br />
              <p className="bg-linear-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                discoverable.
              </p>
            </h1>

            <p className="text-wrap w-2/3 ">
              Buy verified B2B contact and intent data, or list your own
              datasets for sale. Every record scored, matched and
              compliance-checked before it reaches a buyer.
            </p>

            {/* ////////////////////////////////////////////////// */}
            {/* buttons */}
            <div className="">
              <button className=" cursor-pointer bg-black text-white px-9 py-3 rounded-full hover:shadow-lg transition duration-300">
                Get Started
              </button>
              <button className=" cursor-pointer ml-4 bg-white px-9 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300">
                Learn More
              </button>
            </div>
            
            <p className="w-full"> <span className="font-bold"> 12,482 </span> leads verified today</p>
          </div>
{/* ///////////////////////////////////////////////////////////////// */}
          {/* right side card */} 
          <div className=" w-full h-min  flex flex-col justify-center items-center text-5xl font-medium text-black pb-20">
            <FloatingCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
