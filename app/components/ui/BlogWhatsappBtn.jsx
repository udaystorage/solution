'use client'
import { openWhatsApp } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";


function BlogWhatsappBtn() {
  return (
    <button
      onClick={() =>
        openWhatsApp(
          "Hi, I would like to talk to the back-office expert team.",
        )
      }
className="w-full flex items-center justify-evenly bg-stone-950 text-stone-100 hover:bg-stone-800
hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,.25)]
transition-all duration-300 cursor-pointer py-2.5 px-4
text-xs font-medium tracking-wide rounded-xl"    >
      Talk to an Expert <ArrowRight width={15}/>
    </button>
  );
}

export default BlogWhatsappBtn;
