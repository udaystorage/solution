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
    <section className="space-y-4">
      {/* Heading */}
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
          Delivery Contact
        </p>

        <h3 className="text-lg font-semibold tracking-tight text-stone-900 sm:text-xl">
          Where should we reach you?
        </h3>

        <p className="text-sm leading-5 text-stone-500">
          For discussing your request and sharing pricing or availability.
        </p>
      </div>

      {/* Contact fields */}
      <div className="grid gap-3 sm:grid-cols-2">
        <Input
          icon={<User2 size={16} />}
          label="Full Name"
          placeholder="Your full name"
          autoComplete="name"
          value={value.name}
          onChange={(e) => update("name", e.target.value)}
        />

        <Input
          icon={<Phone size={16} />}
          label="Mobile Number"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+91 98765 43210"
          value={value.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </div>

      {/* Privacy info */}
      <div className="flex items-start gap-2.5 rounded-xl border border-cyan-100 bg-cyan-50/60 px-3.5 py-3">
        <ShieldCheck
          size={16}
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-cyan-600"
        />

        <p className="text-xs leading-5 text-stone-600">
          <span className="font-medium text-stone-800">
            Your information stays private.
          </span>{" "}
          <span className="hidden md:block">
            We use your contact details only to discuss your request and
            don&apos;t sell or publicly share them.
          </span>
        </p>
      </div>
    </section>
  );
}

function Input({ icon, label, ...props }) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-xs font-medium text-stone-700">
        {label}
      </span>

      <div className="group flex h-11 items-center gap-3 rounded-xl border border-stone-200 bg-white px-3.5 transition-colors focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-100">
        <div className="shrink-0 text-stone-400 transition-colors group-focus-within:text-cyan-600">
          {icon}
        </div>

        <input
          {...props}
          className="min-w-0 w-full bg-transparent text-sm text-stone-800 outline-none placeholder:text-stone-400"
        />
      </div>
    </label>
  );
}
