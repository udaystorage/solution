// app/components/OrganizationSchema.jsx

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://yourdomain.com/#organization",

    name: "Lead Wala",
    url: "https://leadwala.in",
    logo: {
      "@type": "ImageObject",
      url: "https://yourdomain.com/logo.png",
    },

    description:
      "Lead Wala provides verified B2B databases and business data solutions that help companies connect with relevant decision-makers and generate qualified leads.",

    email: "mailto:contact@yourdomain.com",
    telephone: "+91-XXXXXXXXXX",

    sameAs: [
      "https://www.linkedin.com/company/your-company",
      "https://x.com/yourcompany",
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      email: "contact@yourdomain.com",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}