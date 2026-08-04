import { notFound } from "next/navigation";

import leadStoreData from "@/data/leadStoreData";

import LeadStoreClient from "../LeadStoreClient";

export default async function LeadStoreProductPage({ params }) {
  const { slug } = await params;

  const product = leadStoreData.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return <LeadStoreClient product={product} />;
}