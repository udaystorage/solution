'use client'
import { openWhatsApp } from "@/lib/whatsapp";


function BlogWhatsappBtn() {
  return (
    <button
      onClick={() =>
        openWhatsApp(
          "Hi, I would like to talk to the back-office expert team.",
        )
      }
      className="w-full bg-stone-950 text-stone-100 hover:bg-stone-900 hover:text-white hover:scale-105 transition-transform duration-300 ease-in-out hover:scale-105 transition-colors cursor-pointer  py-2.5 px-4 text-xs font-medium tracking-wide rounded-xl"
    >
      Consult With Our Expert
    </button>
  );
}

export default BlogWhatsappBtn;
