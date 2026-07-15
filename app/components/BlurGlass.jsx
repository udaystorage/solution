import React from "react";

export default function BlurGlass() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen px-20 text-center relative">
        <svg
          id="visual"
          className=" translate-x-80"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          version="1.1"
        >
          <linearGradient id="my-cool-gradient" x2="1" y2="1">
            <stop offset="0%" stopColor="#a500d7" />
            {/* <stop offset="50%" stopColor="#a500d7" /> */}
            <stop offset="100%" stopColor="#00e6e2" />
          </linearGradient>
          <g transform="translate(407.71660719112697 324.812379246231)">
            <path
              d="M96.8 -97C138 -55.6 192.5 -27.8 213.9 21.4C235.4 70.7 223.8 141.4 182.6 160.9C141.4 180.4 70.7 148.7 13.3 135.4C-44.1 122.1 -88.2 127.2 -100.7 107.7C-113.2 88.2 -94.1 44.1 -103.3 -9.2C-112.5 -62.5 -149.9 -124.9 -137.4 -166.3C-124.9 -207.6 -62.5 -227.8 -17.3 -210.5C27.8 -193.1 55.6 -138.3 96.8 -97"
              fill="url(#my-cool-gradient)"
            />
          </g>
        </svg>

        <div className="h-screen w-full flex flex-row justify-center items-center text-left  bg-white/10 backdrop-blur-lg shadow-lg ring-1 ring-black/20 absolute">
          {/* /////////////////////////////////////////////////////////// */}
          {/* left Side Heading */}
          {/* /////////////////////////////////////////////////////////// */}
          <div className="w-full h-full flex flex-col gap-8 justify-center items-start pl-40 ">
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

          <div className="w-full flex flex-col justify-center items-center text-5xl font-medium text-black mt-20"></div>
        </div>
      </div>
    </div>
  );
}
