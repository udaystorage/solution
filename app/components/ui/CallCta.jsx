"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function MobileCallCTA({ contact }) {
  return (
    <Link
      href={`tel:${contact}`}
      aria-label="Call LeadWala"
className="
  fixed
  bottom-4
  right-4
  z-50
  flex
  h-12
  w-12
  items-center
  justify-center
  rounded-full
  border
  border-white/20
  bg-slate-900/75
  text-white
  shadow-lg
  shadow-black/30
  backdrop-blur-lg
  backdrop-saturate-150
  min-[480px]:hidden
   animate-call-cta
"
    >
      <Phone
        size={18}
        strokeWidth={2.2}
        className="animate-phone-shake"
      />
    </Link>
  );
}