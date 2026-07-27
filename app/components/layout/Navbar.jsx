"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart,ArrowRight } from "lucide-react";
import logiNav from "@/public/logoNav.png";
import Image from "next/image";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Lead Store", href: "/leadstore" },
  { label: "About Us", href: "/aboutus" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [visibleCount, setVisibleCount] = useState(0);

  // Lock page scrolling only while mobile navigation is open.
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 sm:h-18 h-14">
      <nav
        aria-label="Primary navigation"
        className="
          relative flex h-full w-full items-center justify-between
          bg-gray-50/40 px-2 shadow-sm backdrop-blur-sm
          sm:px-6
          lg:justify-between lg:px-25
        "
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label="Leadwala home"
          onClick={closeMenu}
          className="
            relative z-50
            text-xl font-bold
            sm:text-3xl flex items-end gap-4 justify-center tracking-wide
          "
        >
          <div className="relative sm:h-14 sm:w-10 h-10 w-8">
            <Image
              src={logiNav}
              fill
              sizes="100vw"
              className="object-cover mix-blend-multiply translate-x-4"
              alt="Logo"
            />
          </div>
          <span>eadwala</span>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div className="group relative hidden overflow-hidden rounded-full p-px lg:block">
          {/* Animated Gradient Border */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              animate-navbar-gradient
              bg-linear-to-r
              from-violet-500
              via-blue-500
              to-cyan-400
              bg-size-[300%_300%]
            "
          />

          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            className="
              absolute -inset-1 -z-10
              animate-navbar-gradient
              rounded-full
              bg-linear-to-r
              from-violet-500
              via-blue-500
              to-cyan-400
              bg-size-[300%_300%]
              opacity-10 blur-lg
              transition-opacity duration-500
              group-hover:opacity-20
            "
          />

          {/* Navigation Surface */}
          <div className="relative flex min-w-min items-center gap-1 rounded-full bg-white p-2">
            {navigationItems.map((navigationItem) => {
              const isActive =
                navigationItem.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(navigationItem.href);

              return (
                <Link
                  key={navigationItem.href}
                  href={navigationItem.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    rounded-full
                    px-5 py-2
                    text-sm font-medium whitespace-nowrap
                    transition-all duration-300 ease-out

                    ${
                      isActive
                        ? "bg-neutral-950 text-white shadow-sm"
                        : `
                          text-neutral-600
                          hover:bg-neutral-100
                          hover:text-neutral-950
                        `
                    }
                  `}
                >
                  {navigationItem.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            DESKTOP ACTIONS
        ====================================================== */}

        <div className="hidden items-center justify-center gap-4 lg:flex">
          <Link
  href="/leadstore/custom-data"
  className="
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    border
    border-slate-900/10
    bg-white
    px-5
    py-2.5
    text-sm
    font-semibold
    text-slate-900
    shadow-sm
    transition-all
    duration-300
    ease-out
    hover:-translate-y-0.5
    hover:border-slate-900
    hover:bg-slate-950
    hover:text-white
    hover:shadow-md
    hover:shadow-slate-950/10
    active:translate-y-0
    focus:outline-none
    focus:ring-2
    focus:ring-slate-950
    focus:ring-offset-2
  "
>
  <span>Get Custom Data</span>
  <ArrowRight 
    size={16} 
    className="transition-transform duration-300 ease-out group-hover:translate-x-1" 
  />
</Link>
        </div>

        {/* =====================================================
            MOBILE ACTIONS
        ====================================================== */}

        <div className="relative z-50 flex items-center gap-4 lg:hidden">
          {/* Cart */}
          {/* <Link
            href="/cart"
            aria-label="View shopping cart"
            onClick={closeMenu}
            className="
              flex sm:size-10 size-8 items-center justify-center
              rounded-full
              border border-black/5
              bg-white/70
              shadow-sm
              backdrop-blur-xl
              transition-colors duration-300
              hover:bg-white 
            "
          >
            <ShoppingCart aria-hidden="true" className="size-5" />
          </Link> */}
          <Link
  href="/leadstore/custom-data"
  className="
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    border
    border-slate-900/10
    bg-white
    px-4
    sm:px-4
    md:px-5
    lg:px-5
    py-2
    sm:py-2.5
    md:py-2.5
    lg:py-2.5
    text-sm
    font-semibold
    text-slate-900
    shadow-sm
    transition-all
    duration-300
    ease-out
    hover:-translate-y-0.2
    sm:hover:-translate-y-0.5
    md:hover:-translate-y-0.5
    hover:border-slate-900
    hover:bg-slate-950
    hover:text-white
    hover:shadow-md
    hover:shadow-slate-950/10
    active:translate-y-0
    focus:outline-none
    focus:ring-2
    focus:ring-slate-950
    focus:ring-offset-2
  "
>
  <span>Get Custom Data</span>
  <ArrowRight 
    size={16} 
    className="transition-transform duration-300 ease-out group-hover:translate-x-1" 
  />
</Link>
          {/* Hamburger */}
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="
              group relative
              flex sm:size-11 size-9
              items-center justify-center
              overflow-hidden
              rounded-full
              p-px cursor-pointer
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              focus-visible:ring-offset-2
            "
          >
            {/* Gradient Border */}
            <span
              aria-hidden="true"
              className="
                absolute inset-0
                animate-navbar-gradient
                bg-linear-to-r
                from-violet-500
                via-blue-500
                to-cyan-400
                bg-size-[300%_300%]
              "
            />

            {/* Button Surface */}
            <span
              className="
                relative
                flex size-full
                items-center justify-center
                rounded-full
                bg-white
                shadow-sm
              "
            >
              {/* Hamburger → X animation */}
              <span className="relative h-4 w-5">
                <span
                  className={`
                    absolute top-0.5 left-0
                    h-0.5 w-5
                    rounded-full bg-neutral-950
                    transition-all duration-500
                    ease-[cubic-bezier(0.76,0,0.24,1)]

                    ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}
                  `}
                />

                <span
                  className={`
                    absolute top-1.75 left-0
                    h-0.5
                    rounded-full bg-neutral-950
                    transition-all duration-300 ease-out

                    ${
                      isMenuOpen
                        ? "w-0 translate-x-2 opacity-0"
                        : "w-3.5 opacity-100"
                    }
                  `}
                />

                <span
                  className={`
                    absolute top-3 left-0
                    h-0.5 w-5
                    rounded-full bg-neutral-950
                    transition-all duration-500
                    ease-[cubic-bezier(0.76,0,0.24,1)]

                    ${isMenuOpen ? "-translate-y-1 -rotate-45" : ""}
                  `}
                />
              </span>
            </span>
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}

      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
        className={`
          fixed inset-x-0 top-18 bottom-0 z-30
          bg-neutral-950/10
          backdrop-blur-xs
          transition-opacity duration-500
          lg:hidden

          ${
            isMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`
          fixed top-20 right-3 left-3 z-40
          origin-top-right
          transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          sm:left-auto
          sm:right-5
          sm:w-97.5

          lg:hidden

          ${
            isMenuOpen
              ? `
                pointer-events-auto
                translate-y-0
                scale-100
                opacity-100
              `
              : `
                pointer-events-none
                -translate-y-3
                scale-95
                opacity-0
              `
          }
        `}
      >
        {/* Gradient Shell */}
        <div
          className="
            relative overflow-hidden
            rounded-4xl
            p-px
            shadow-2xl
          "
        >
          {/* Animated Gradient Border */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              animate-navbar-gradient
              bg-linear-to-br
              from-violet-500
              via-blue-500
              to-cyan-400
              bg-size-[300%_300%]
            "
          />

          {/* Glass Surface */}
          <div
            className="
              relative overflow-hidden
              rounded-[calc(2rem-1px)]
              bg-white/95
              p-3
              backdrop-blur-2xl
            "
          >
            {/* Ambient Blue Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -top-20 -right-16
                size-48
                rounded-full
                bg-blue-400/10
                blur-3xl
              "
            />

            {/* Ambient Violet Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -bottom-24 -left-16
                size-48
                rounded-full
                bg-violet-400/10
                blur-3xl
              "
            />

            {/* Navigation Items */}
            <div className="relative flex flex-col gap-1">
              {navigationItems.map((navigationItem, index) => {
                const isActive =
                  navigationItem.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(navigationItem.href);

                return (
                  <Link
                    key={navigationItem.href}
                    href={navigationItem.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                    style={{
                      transitionDelay: isMenuOpen
                        ? `${80 + index * 45}ms`
                        : "0ms",
                    }}
                    className={`
                      group/link
                      flex items-center justify-between
                      rounded-2xl
                      px-5 py-3.5
                      text-sm font-medium
                      transition-all duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      ${
                        isMenuOpen
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-2 opacity-0"
                      }

                      ${
                        isActive
                          ? `
                            bg-neutral-950
                            text-white
                            shadow-sm
                          `
                          : `
                            text-neutral-600
                            hover:bg-neutral-100
                            hover:text-neutral-950
                          `
                      }
                    `}
                  >
                    <span>{navigationItem.label}</span>

                    {/* Status Dot */}
                    <span
                      className={`
                        flex size-6
                        items-center justify-center
                        rounded-full
                        transition-colors duration-300

                        ${
                          isActive
                            ? "bg-white/10"
                            : `
                              bg-neutral-100
                              group-hover/link:bg-white
                            `
                        }
                      `}
                    >
                      <span
                        className={`
                          size-1.5
                          rounded-full
                          transition-transform duration-300
                          group-hover/link:scale-125

                          ${isActive ? "bg-white" : "bg-neutral-400"}
                        `}
                      />
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="relative my-3 h-px bg-neutral-200/70" />

            {/* Login CTA */}
          </div>
        </div>
      </div>
    </header>
  );
}
