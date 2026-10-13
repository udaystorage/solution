"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BadgeCheck,
  Clock3,
  Database,
  ShieldCheck,
  ListFilterPlus,
  MapPin,
} from "lucide-react";

export default function ProductHero({ product }) {
  const { title, description, image } = product;

  console.log(description);
  console.log(title);

  return (
    <section className="border-b border-stone-200 bg-linear-to-b from-white via-stone-50/40 to-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-14 px-4 py-16 md:py-20 sm:px-6 lg:px-10 ">
        {/* Breadcrumb */}

        <Link
          href="/datastore"
          className="inline-flex w-fit items-center gap-2 text-sm text-stone-500 transition hover:text-black"
        >
          <ArrowLeft className="size-2.5 sm:size-3" />
          Back to Data Store
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          {/* LEFT */}

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-700">
              <Database size={14} />
              Premium Database
            </span>

            <h1 className="mt-3 sm:mt-4 md:mt6 max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-stone-900 sm:text-3xl lg:text-5xl">
              {title}
            </h1>

            <p className="mt-3 sm:mt-4 md:mt-6 max-w-2xl text-base md:text-lg leading-8 text-stone-600">
              {description}
            </p>

            {/* Trust pills */}

            {/* Product Benefits */}
            {/* <div className="mt-5">
              <div className="grid grid-cols-3 divide-x divide-stone-200 border-y border-stone-200 py-3">
                <div className="pr-2 sm:pr-4">
                  <div className="flex items-center gap-1.5 text-stone-800">
                    <MapPin size={14} className="shrink-0 text-cyan-600" />
                    <span className="text-[11px] font-semibold sm:text-xs">
                      Pan India
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] leading-4 text-stone-500 sm:text-xs">
                    Nationwide Coverage Available
                  </p>
                </div>

                <div className="px-2 sm:px-4">
                  <div className="flex items-center gap-1.5 text-stone-800">
                    <ListFilterPlus
                      size={14}
                      className="shrink-0 text-cyan-600"
                    />
                    <span className="text-[11px] font-semibold sm:text-xs">
                      Custom Filters
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] leading-4 text-stone-500 sm:text-xs">
                    Define your audience
                  </p>
                </div>

                <div className="pl-2 sm:pl-4">
                  <div className="flex items-center gap-1.5 text-stone-800">
                    <ShieldCheck size={14} className="shrink-0 text-cyan-600" />
                    <span className="text-[11px] font-semibold sm:text-xs">
                      Private Enquiry
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] leading-4 text-stone-500 sm:text-xs">
                    Contact details stay private
                  </p>
                </div>
              </div>
            </div> */}

            {/* Trust Pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-600">
                <BadgeCheck size={14} className="shrink-0 text-cyan-600" />
                Verified Records
              </div>

              <div className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-600">
                <Clock3 size={14} className="shrink-0 text-cyan-600" />
                Delivery in 2–3 Hours
              </div>

              <div className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-600">
                <Database size={14} className="shrink-0 text-cyan-600" />
                Custom Database
              </div>
            </div>

          </div>

          {/* RIGHT */}

          <div className="relative min-w-0">
            {/* Subtle background glow */}
            <div
              aria-hidden="true"
              className="absolute -left-4 top-8 size-28 rounded-full bg-cyan-200/30 blur-3xl sm:size-36"
            />

            <div
              aria-hidden="true"
              className="absolute -right-2 top-0 size-32 rounded-full bg-violet-200/30 blur-3xl sm:size-40"
            />

            {/* Preview Card */}
            <div className="relative mx-auto max-w-lg overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-4 shadow-[0_16px_50px_rgba(15,23,42,0.07)] sm:rounded-3xl sm:p-5 lg:p-6">
              {/* Card heading */}
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500">
                  Database Preview
                </span>

                <Database
                  size={15}
                  aria-hidden="true"
                  className="text-cyan-600"
                />
              </div>

              {/* Product image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-stone-100">
                <Image
                  src={image}
                  alt={title}
                  fill
                  fetchPriority="high"
                  loading="eager"
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>

              {/* Product identity */}
              <div className="flex items-center gap-3 py-3.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                  <Database
                    size={19}
                    aria-hidden="true"
                    className="text-cyan-700"
                  />
                </div>

                <div className="min-w-0">
                  <h2 className="truncate text-sm font-semibold text-stone-900">
                    {title}
                  </h2>
                  <p className="mt-0.5 text-xs text-stone-500">
                    Tailored &amp; Verified Dataset
                  </p>
                </div>
              </div>

              {/* Product specifications */}
              <dl className="border-t border-stone-100">
                <div className="flex items-center justify-between gap-3 border-b border-stone-100 py-2.5 text-xs">
                  <dt className="text-stone-500">Coverage</dt>
                  <dd className="text-right font-medium text-stone-800">
                    Pan India
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-stone-100 py-2.5 text-xs">
                  <dt className="text-stone-500">Quality</dt>
                  <dd className="text-right font-medium text-stone-800">
                    Premium Verified
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-3 py-2.5 text-xs">
                  <dt className="text-stone-500">Delivery</dt>
                  <dd className="text-right font-medium text-stone-800">
                    Within Hours
                  </dd>
                </div>
              </dl>

              {/* Verification note */}
              <div className="mt-2 flex items-start gap-2 rounded-xl bg-cyan-50/70 px-3 py-2.5">
                <ShieldCheck
                  size={15}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-cyan-700"
                />
                <p className="text-[11px] leading-4 text-cyan-900">
                  Tailored and reviewed before delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
