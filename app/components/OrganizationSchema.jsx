// components/OrganizationSchema.jsx

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://leadwala.co.in/#organization",

    name: "LeadWala",

    url: "https://leadwala.co.in",

    logo: {
      "@type": "ImageObject",
      url: "https://leadwala.co.in/logo.png",
    },

    description:
      "LeadWala provides verified B2B and B2C business databases and data solutions that help businesses connect with relevant decision-makers and generate qualified leads.",

    email: "mailto:YOUR_REAL_EMAIL",

    telephone: "+91-XXXXXXXXXX",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      email: "YOUR_REAL_EMAIL",
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