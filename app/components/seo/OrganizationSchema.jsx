// components/OrganizationSchema.jsx
const telephone = "+91-8017449616"
const email = "datatreasure@gmail.com"
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `https://${baseUrl}/#organization`,

    name: "LeadWala",

    url: `https://${baseUrl}`,

    logo: {
      "@type": "ImageObject",
      url: `https://${baseUrl}/icon.png`,
    },

    description:
      "LeadWala provides verified B2B and B2C business databases and data solutions that help businesses connect with relevant decision-makers and generate qualified leads.",

    email: `mailto:${email}`,

    telephone: telephone,

    contactPoint: {
      "@type": "ContactPoint",
      telephone: telephone,
      email: email,
      contactType: "customer service",
      availableLanguage: ["English"],
    },

  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}