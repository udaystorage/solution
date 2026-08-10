import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-white text-[#111827] flex flex-col justify-between overflow-hidden font-sans antialiased">
      
      {/* Subtle Ambient Glow (Keeps the Leadwala brand DNA, but pushed heavily into the background) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-40 mix-blend-multiply filter blur-3xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00d2ff] via-[#9d4edd] to-[#7928ca] rounded-full transform scale-75 animate-pulse duration-[10s]" />
      </div>

   

      {/* Centered Minimal Content */}
      <main className="flex-grow flex flex-col items-center justify-center z-10 px-6 text-center max-w-xl mx-auto -translate-y-6">
        
        {/* Massive Timeless 404 Headline */}
        <h1 className="text-[120px] sm:text-[160px] lg:text-[200px] font-extrabold tracking-tighter text-stone-800 leading-none select-none">
          404
        </h1>
        
        {/* Simple, Elegant Status Message */}
        <h2 className="text-xl md:text-2xl font-bold text-slate-700 mt-2 tracking-tight">
          Page not found
        </h2>
        
        <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed max-w-sm">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        
        {/* Centered Synced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full sm:w-auto">
          <Link 
            href="/" 
            className="px-8 py-3.5 rounded-full bg-black text-white font-medium text-sm transition-all duration-200 hover:bg-neutral-800 shadow-sm hover:shadow-md"
          >
            Go to Home
          </Link>
          <Link  
            href="/leadstore" 
            className="px-8 py-3.5 rounded-full border border-gray-200 bg-white text-gray-900 font-medium text-sm transition-all duration-200 hover:bg-gray-50 flex items-center justify-center gap-2 group shadow-sm"
          >
            Explore Store
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}