"use client";

import { useState } from "react";
import LocationInput from "../leadstoreSlug/LocationInput";
import QuantitySelector from "../leadstoreSlug/QuantitySelector";
import QualitySelector from "../leadstoreSlug/QualitySelector";
import RequirementsBox from "../leadstoreSlug/RequirementsBox";
import CustomerForm from "../leadstoreSlug/CustomerForm";
import ConsentCheckbox from ".././ui/ConsentCheckbox";
import WhatsappButton from "../leadstoreSlug/WhatsappButton";

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
  <section className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.04)]">

    {/* Compact Header */}
    <div className="border-b border-stone-200 px-5 py-5 sm:px-6 sm:py-6">
      <span className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-600">
        Database Configuration
      </span>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900">
        Configure your database
      </h2>

      <p className="mt-1.5 max-w-2xl text-sm leading-5 text-stone-600">
        Choose your target, record quantity and verification level.
        Share your requirements and we&apos;ll contact you on WhatsApp.
      </p>
    </div>

    {/* Form Sections */}
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
        <CustomerForm
          value={request.customer}
          onChange={updateCustomer}
        />
      </ConfiguratorSection>
    </div>

    {/* Compact Submission Footer */}
    <div className="border-t border-stone-200 bg-stone-50 px-5 py-5 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
      className={`px-5 py-7 sm:px-6 sm:py-8 ${
        !last ? "border-b border-stone-100" : ""
      }`}
    >
      {children}
    </div>
  );
}