"use client";

import { useState } from "react";
import LocationInput from "./LocationInput";
import QuantitySelector from "./QuantitySelector";
import QualitySelector from "./QualitySelector";
import RequirementsBox from "./RequirementsBox";
import CustomerForm from "./CustomerForm";
import ConsentCheckbox from "../../ui/ConsentCheckbox";
import WhatsappButton from "./WhatsappButton";

export default function DatabaseConfigurator({
  request,
  setRequest,
  loading,
  error,
  handleClick,
}) {
   const [accepted, setAccepted] = useState(false);

  const updateField = (field, value) => {
    setRequest((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateCustomer = (customer) => {
    setRequest((prev) => ({
      ...prev,
      customer,
    }));
  };

  return (
    <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,.06)]">
      {/* Header */}

      <div className="border-b border-stone-200 px-8 py-8 lg:px-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/60 bg-neutral-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black sm:text-[11px] lg:text-[12px]">

          Database Configuration
        </span>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-stone-900">
          Configure your database
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
          Tell us exactly what you&apos;re looking for. Every request is
          manually reviewed before delivery to ensure the highest possible
          relevance and accuracy.
        </p>
      </div>

      {/* Body */}

      <div>
        <ConfiguratorSection>
          <LocationInput
            value={request.location}
            onChange={(value) => updateField("location", value)}
          />
        </ConfiguratorSection>

        <ConfiguratorSection>
          <QuantitySelector
            value={request.quantity}
            onChange={(value) => updateField("quantity", value)}
          />
        </ConfiguratorSection>

        <ConfiguratorSection>
          <QualitySelector
            value={request.quality}
            onChange={(value) => updateField("quality", value)}
          />
        </ConfiguratorSection>

        <ConfiguratorSection>
          <RequirementsBox
            value={request.requirements}
            onChange={(value) => updateField("requirements", value)}
          />
        </ConfiguratorSection>

        <ConfiguratorSection last>
          <CustomerForm value={request.customer} onChange={updateCustomer} />
        </ConfiguratorSection>
      </div>

      {/* Footer */}

      <div className="border-t border-stone-200 bg-stone-50 px-8 py-8 lg:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <ConsentCheckbox
        checked={accepted}
        onChange={setAccepted}
      />

          <WhatsappButton
            accepted={accepted}
            request={request}
            loading={loading}
            error={error}
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
}

function ConfiguratorSection({ children, last = false }) {
  return (
    <div
      className={`px-8 py-12 lg:px-10 ${
        !last ? "border-b border-stone-100" : ""
      }`}
    >
      {children}
    </div>
  );
}
