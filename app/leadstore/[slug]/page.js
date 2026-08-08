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

  return (
    <>
      <BreadCrumbSchema
        items={[
          {
            name: "Home",
            url: "https://leadwala.com/",
          },
          {
            name: "Lead Store",
            url: "https://leadwala.com/leadstore",
          },
          {
            name: product.name,
            url: `https://leadwala.com/leadstore/${product.slug}`,
          },
        ]}
      />
      <LeadStoreClient product={product} />
    </>
  );
}
