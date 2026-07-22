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
    translate-y-6

    sm:max-w-[500px]
    sm:translate-y-5

    md:max-w-[600px]
    md:translate-y-3

    lg:max-w-none
    lg:w-[680px]
    lg:translate-y-0
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
