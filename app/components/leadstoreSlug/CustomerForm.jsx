"use client";

import { User2, Mail, Phone, ShieldCheck } from "lucide-react";

export default function CustomerForm({ value, onChange }) {
  const update = (field, fieldValue) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  return (
    <section className="space-y-5 sm:space-y-6">
      {/* Heading */}

      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400 sm:text-xs">
          Delivery Contact
        </p>

        <h3 className="text-lg font-semibold tracking-[-0.03em] text-stone-900 sm:text-xl md:text-2xl">
          Where should we reach you?
        </h3>

        <p className="max-w-xl text-sm leading-6 text-stone-500">
          We&apos;ll use these details only to discuss your database request and
          share pricing or availability.
        </p>
      </div>

      {/* Card */}

      <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-[0_10px_40px_rgba(15,23,42,.04)] sm:rounded-4xl sm:p-6 lg:p-7">
        <div className="grid gap-5 sm:gap-6">
          {/* Name */}

          <Input
            icon={<User2 size={18} />}
            label="Full Name"
            placeholder="John Doe"
            value={value.name}
            onChange={(e) => update("name", e.target.value)}
          />

          {/* Mobile */}

          <Input
            icon={<Phone size={18} />}
            label="Mobile Number"
            type="tel"
            placeholder="+91 98765 43210"
            value={value.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>

        {/* Privacy */}

        <div className="mt-6 rounded-xl border border-cyan-100 bg-cyan-50 p-4 sm:mt-8 sm:rounded-2xl sm:p-5">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white sm:h-11 sm:w-11">
              <ShieldCheck className="h-5 w-5 text-cyan-600" />
            </div>

            <div>
              <h4 className="text-sm font-medium text-stone-900 sm:text-base">
                Your information stays private.
              </h4>

              <p className="mt-1.5 text-sm leading-6 text-stone-600 sm:mt-2">
                We only use these details to discuss your request. We never sell
                or publicly share your contact information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ icon, label, ...props }) {
  return (
    <label className="block">
      <span className="mb-3 block text-sm font-medium text-stone-700">
        {label}
      </span>

      <div className="group flex h-14 items-center gap-4 rounded-2xl border border-stone-200 bg-white px-5 transition-all duration-300 focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100">
        <div className="text-stone-400 group-focus-within:text-cyan-600 transition-colors">
          {icon}
        </div>

        <input
          {...props}
          className="w-full bg-transparent text-[15px] text-stone-800 outline-none placeholder:text-stone-400"
        />
      </div>
    </label>
  );
}
