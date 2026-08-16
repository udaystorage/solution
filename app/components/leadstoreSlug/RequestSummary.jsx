"use client";

import {
  BadgeCheck,
  Clock3,
  Database,
  MapPin,
  Package,
  ShieldCheck,
  User2,
} from "lucide-react";

export default function RequestSummary({ request }) {
  const rows = [
    {
      icon: Database,
      label: "Database",
      value: request.category || "Not selected",
    },
    {
      icon: MapPin,
      label: "Target Region",
      value: request.location || "Choose a location",
    },
    {
      icon: Package,
      label: "Records",
      value:
        request.quantity === "custom"
          ? "Custom Quantity"
          : `${request.quantity?.toLocaleString()} Records`,
    },
    {
      icon: ShieldCheck,
      label: "Quality",
      value: request.quality === "premium" ? "Premium Verified" : "Standard",
    },
    {
      icon: User2,
      label: "Contact",
      value: request.customer?.name || "Not provided",
    },
  ];

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 shadow-[0_18px_55px_rgba(15,23,42,.05)] lg:rounded-4xl">
        {/* Header */}

        <div className="border-b border-white px-5 py-5 sm:px-8 sm:py-6 lg:px-7">
          {/* <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-2.5 py-1 text-[11px] font-medium text-cyan-700">
            <BadgeCheck size={14} />
            Live Request
          </span> */}

          <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-neutral-700 sm:text-2xl">
            {" "}
            Your Database Summary
          </h3>

          <p className="mt-1.5 text-sm leading-6 text-stone-500">
            {" "}
            Review your selections before continuing on WhatsApp.
          </p>
        </div>

        {/* Summary */}

        <div className="px-5 py-5 sm:px-8 sm:py-7 lg:px-7">
          <div className="space-y-5">
            {rows.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700">
                    <Icon className="h-4.5 w-4.5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-500">
                      {" "}
                      {item.label}
                    </p>

                    <p className="mt-0.5 wrap-break-word text-sm font-medium leading-6 text-stone-900">
                      {" "}
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery */}

        <div className="border-t border-stone-200 bg-stone-50 px-5 py-5 sm:px-8 sm:py-8 lg:px-7">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-400">
              <Clock3 className="h-4.5 w-4.5 text-neutral-100" />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-stone-900">
                Estimated Delivery
              </h4>

              <p className="mt-1 text-sm leading-6 text-stone-600">
                Most database requests are prepared and shared within
                <span className="font-semibold text-stone-900">
                  {" "}
                  2–3 business hours.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Trust */}

        {/* <div className="border-t border-stone-200 px-7 py-6">

          <div className="space-y-3">

            <TrustItem text="Human verified datasets" />

            <TrustItem text="Freshly processed records" />

            <TrustItem text="Customized before delivery" />

            <TrustItem text="Dedicated support" />

          </div>

        </div> */}
      </div>
    </aside>
  );
}

function TrustItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-2 rounded-full bg-cyan-500" />

      <span className="text-sm text-stone-600">{text}</span>
    </div>
  );
}
