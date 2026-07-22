import React from "react";
import DustCard from "./TestCard";
import CardFlipAnimation from "./CardFlipAnimation";

export default function FloatingCard() {
  return (
<div
  className="
    relative
    w-full
    mx-auto
    flex
    items-center
    justify-center
    overflow-visible

    max-w-[400px]

    sm:max-w-[500px]

    md:max-w-[600px]

    lg:max-w-none
    lg:w-[680px]
    lg:-translate-x-4

    xl:w-[720px]
    xl:-translate-x-2

    2xl:w-[760px]
    2xl:translate-x-0
  "
>
  <CardFlipAnimation />
</div>
  );
}
