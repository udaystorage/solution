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
        bottom-5
        right-5
        z-50
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-slate-800
        bg-slate-950
        text-white
        shadow-lg
        shadow-slate-950/20
        min-[480px]:hidden
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