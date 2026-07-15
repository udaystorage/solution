import React from "react";
import DustCard from "./TestCard";
import CardFlipAnimation from "./CardFlipAnimation";

export default function FloatingCard() {
  return (
    <div className=" w-full h-[90vh] flex items-center justify-center pt-20   overflow-hidden  ">
          {/* <div className="w-80 h-40 bg-white/40 rounded-2xl shadow-xl p-4">Card</div> */}
          {/* <DustCard/> */}
          <CardFlipAnimation/>
    </div>
  );
}
