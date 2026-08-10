import { notFound } from "next/navigation";

import leadStoreData from "@/data/leadStoreData";
import LeadStoreClient from "../LeadStoreClient";
import BreadCrumbSchema from "@/app/components/BreadCrumbSchema";

export default async function LeadStoreProductPage({ params }) {
  const { slug } = await params;

  const product = leadStoreData.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const baseUrl = "https://leadwala.co.in";

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    "@id": `${baseUrl}/leadstore/${product.slug}#service`,

    name: product.title,

    description: product.description,

    url: `${baseUrl}/leadstore/${product.slug}`,

    image: `${baseUrl}${product.image}`,

    serviceType: `${product.title} Database`,

    provider: {
      "@id": `${baseUrl}/#organization`,
    },

    areaServed: {
      "@type": "Country",
      name: product.coverage === "Pan India" ? "India" : product.coverage,
    },

    audience: {
      "@type": "BusinessAudience",
      industry: product.industry,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSchema),
        }}
      />
      <BreadCrumbSchema
        items={[
          {
            name: "Home",
            url: "https://leadwala.co.in/",
          },
          {
            name: "Lead Store",
            url: "https://leadwala.co.in/leadstore",
          },
          {
            name: product.title,
            url: `https://leadwala.co.in/leadstore/${product.slug}`,
          },
        ]}
      />
      <LeadStoreClient product={product} />
    </>
  );
}
