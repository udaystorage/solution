"use client";

import { useState } from "react";

import ProductHero from "@/app/components/sections/leadstoreSlug/ProductHero";
import DatabaseConfigurator from "@/app/components/sections/leadstoreSlug/DatabaseConfigurator";
import RequestSummary from "@/app/components/sections/leadstoreSlug/RequestSummary";

const WHATSAPP_NUMBER = "919999999999";

export default function LeadStoreClient({ product }) {
  const [request, setRequest] = useState({
    slug: product.slug,
    category: product.title,

    location: "",
    quantity: 5000,
    quality: "premium",
    requirements: "",

    customer: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleContinue() {
    setError("");

    if (!request.location.trim()) {
      return setError("Please choose a target location.");
    }

    if (!request.customer.name.trim()) {
      return setError("Please enter your name.");
    }

    if (!request.customer.phone.trim()) {
      return setError("Please enter your mobile number.");
    }

    setLoading(true);

    try {
      const order = {
        version: 1,
        updatedAt: new Date().toISOString(),

        customer: request.customer,

        order: {
          slug: request.slug,
          category: request.category,
          location: request.location,
          quantity: request.quantity,
          quality: request.quality,
          requirements: request.requirements,
        },
      };

      localStorage.setItem("leadwala-order", JSON.stringify(order));

      const message = `
Hi Leadwala 👋

I'd like to request a database.

━━━━━━━━━━━━━━━━━━

Database:
${request.category}

Location:
${request.location}

Quantity:
${request.quantity}

Quality:
${request.quality === "premium" ? "Premium" : "Standard"}

━━━━━━━━━━━━━━━━━━

Requirements:

${request.requirements || "None"}

━━━━━━━━━━━━━━━━━━

Contact Details

Name:
${request.customer.name}

Phone:
${request.customer.phone}

Email:
${request.customer.email || "Not provided"}

━━━━━━━━━━━━━━━━━━

Please share pricing and availability.

Thank you.
`;
      console.log(message);

      await new Promise((resolve) => setTimeout(resolve, 900));

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-stone-50">
      <ProductHero product={product} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          <DatabaseConfigurator
            request={request}
            setRequest={setRequest}
            loading={loading}
            error={error}
            handleClick={handleContinue}
          />

          <div className="space-y-6">
            <RequestSummary request={request} />
          </div>
        </div>
      </section>
    </main>
  );
}


