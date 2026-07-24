import ContactHero from "../components/sections/contact/ContactHero";
import ContactPanel from "../components/sections/contact/ContactPanel";
import ContactProcess from "../components/sections/contact/ContactProcess";
import ContactCTA from "../components/sections/contact/ContactCTA";

// Keep this only if you already use this FAQ component on Contact.
// import FAQSection from "../components/sections/FAQ";

export const metadata = {
  title: "Contact Leadwala | Discuss Your Data Requirement",
  description:
    "Tell Leadwala the audience, industry, location, or market you want to reach. Discuss verified B2B and B2C data availability with our team.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Leadwala | Discuss Your Data Requirement",
    description:
      "Share your target audience or data requirement with Leadwala and discuss suitable B2B and B2C data availability.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      <ContactHero />

      <ContactPanel />

      <ContactProcess />

      {/*
        Optional:
        Keep this only if your Contact FAQ contains genuinely useful
        contact/data-buying questions rather than generic filler.

        <FAQSection page="contact" />
      */}

      <ContactCTA />
    </main>
  );
}