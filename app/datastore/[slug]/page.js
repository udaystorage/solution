import { notFound } from "next/navigation";

import leadStoreData from "@/data/leadStoreData";
import LeadStoreClient from "../LeadStoreClient";
import BreadCrumbSchema from "@/app/components/seo/BreadCrumbSchema";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;  


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = leadStoreData.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return {
      title: "Data Store | DataTreasure",
      description:
        "Explore verified B2B and B2C data solutions from DataTreasure.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }


  const canonicalUrl =
    `${baseUrl}/datastore/${product.slug}`;

  const imageUrl = product.image?.startsWith("http")
    ? product.image
    : `${baseUrl}${product.image}`;

  /*
   * Keep the meta description concise.
   * Aim for roughly 140–160 characters.
   */
  const description =
    product.description?.length > 160
      ? `${product.description.substring(0, 157).trim()}...`
      : product.description ||
        `Explore verified ${product.title} from LeadWala for targeted sales and marketing.`;


  return {
    title: `${product.title} | DataTreasure`,

    description,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title: product.title,
      description,
      url: canonicalUrl,
      siteName: "DataTreasure",
      type: "website",
      locale: "en_IN",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${product.title} - LeadWala`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function LeadStoreProductPage({ params }) {
  const { slug } = await params;

  const product = leadStoreData.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }


  

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    "@id": `${baseUrl}/datastore/${product.slug}#service`,

    name: product.title,

    description: product.description,

    url: `${baseUrl}/datastore/${product.slug}`,

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
            url: `${baseUrl}`,
          },
          {
            name: "Lead Store",
            url: `${baseUrl}/datastore`,
          },
          {
            name: product.title,
            url: `${baseUrl}/datastore/${product.slug}`,
          },
        ]}
      />
      <LeadStoreClient product={product} />
    </>
  );
}
