"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BadgeCheck,
  Clock3,
  Database,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ProductHero({ product }) {
  const { title, description, image } = product;

  console.log(description);
  console.log(title);

  return (
    <section className="border-b border-stone-200 bg-gradient-to-b from-white via-stone-50/40 to-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        {/* Breadcrumb */}

        <Link
          href="/leadstore"
          className="inline-flex w-fit items-center gap-2 text-sm text-stone-500 transition hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to Lead Store
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          {/* LEFT */}

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-700">
              <Database size={14} />
              Premium Database
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-stone-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              {description}
            </p>

            {/* Trust pills */}

            <div className="mt-10 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">
                <BadgeCheck size={16} className="text-cyan-600" />
                Verified Records
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">
                <Clock3 size={16} className="text-cyan-600" />
                Delivery in 2–3 Hours
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">
                <ShieldCheck size={16} className="text-cyan-600" />
                Human Verified
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="absolute -left-6 top-10 h-36 w-36 rounded-full bg-cyan-200/40 blur-3xl" />

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-500">
                  Database Preview
                </span>

                <Sparkles className="text-cyan-600" size={18} />
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white">
                {/* Hero Image */}
                <div className="relative aspect-[16/9] w-full bg-stone-100">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px)100vw,420px"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
                      <Database className="text-cyan-700" size={22} />
                    </div>

                    <div>
                      <p className="font-semibold text-stone-900">{title}</p>

                      <p className="text-sm text-stone-500">
                        Tailored & Verified Dataset
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-3 text-sm">
                      <span className="text-stone-500">Coverage</span>
                      <span className="font-medium">Pan India</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-stone-200 pb-3 text-sm">
                      <span className="text-stone-500">Quality</span>
                      <span className="font-medium">Premium Verified</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-500">Delivery</span>
                      <span className="font-medium">Within Hours</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50 px-5 py-4">
                <p className="text-sm leading-6 text-cyan-900">
                 Every database is tailored, reviewd and verified before delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
