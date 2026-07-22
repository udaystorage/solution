import React from "react";
import DustCard from "./TestCard";
import CardFlipAnimation from "./CardFlipAnimation";

export default function FloatingCard() {
  return (
<div
  className="
    relative w-full
    max-w-[420px]
    sm:max-w-[520px]
    md:max-w-[620px]
    lg:max-w-[700px]
    mx-auto
    flex items-center justify-center
    overflow-hidden
  "
>          {/* <div className="w-80 h-40 bg-white/40 rounded-2xl shadow-xl p-4">Card</div> */}
          {/* <DustCard/> */}
          <CardFlipAnimation/>
    </div>
  );
}
