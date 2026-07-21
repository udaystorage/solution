"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Lead Store", href: "/leadstore" },
  { label: "About Us", href: "/aboutus" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-30 h-18 w-full">
      <nav
        aria-label="Primary navigation"
        className="flex h-full w-full items-center justify-around
                   bg-gray-50/10 p-4 shadow-sm backdrop-blur-sm"
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label="Leadwala home"
          className="text-3xl font-bold"
        >
          leadwala
        </Link>

        {/* Primary Navigation */}
        {/* Primary Navigation */}
        <div className="group relative rounded-full p-px overflow-hidden">
          {/* Animated Gradient Border */}
          <div
            aria-hidden="true"
            className="
      absolute inset-0
      bg-[linear-gradient(110deg,#8b5cf6,#3b82f6,#22d3ee,#3b82f6,#8b5cf6)]
      bg-[length:300%_300%]
      animate-navbar-gradient
    "
          />

          {/* Subtle Ambient Glow */}
          <div
            aria-hidden="true"
            className="
      absolute -inset-1 -z-10
      rounded-full
      bg-[linear-gradient(110deg,#8b5cf6,#3b82f6,#22d3ee,#3b82f6,#8b5cf6)]
      bg-[length:300%_300%]
      opacity-10
      blur-lg
      animate-navbar-gradient
      transition-opacity duration-500
      group-hover:opacity-20
    "
          />

          {/* Navigation Surface */}
          <div
            className="
      relative
      flex min-w-min items-center gap-1
      rounded-full
      bg-white
      p-2
    "
          >
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
            whitespace-nowrap
            rounded-full
            px-5 py-2
            text-sm font-medium
            transition-all duration-300 ease-out

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
                  {navigationItem.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Account & Cart Actions */}
        <div className="flex items-center justify-center gap-4">
          <Link href="/login" aria-label="Login Page">
            <button
              type="button"
              className="rounded-full bg-black px-6 py-2 text-white
                       transition-all duration-300 hover:bg-neutral-800"
            >
              Login
            </button>
          </Link>

          <Link
            href="/cart"
            aria-label="View shopping cart"
            className="cursor-pointer rounded-xl p-2 px-3
                       transition-all duration-200 hover:bg-white"
          >
            <ShoppingCart aria-hidden="true" className="h-7 w-7" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
