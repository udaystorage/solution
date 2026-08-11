import AboutHero from "../components/aboutPage/AboutHero";
import WhyWeExist from "../components/aboutPage/WhyWeExist";
import OurApproach from "../components/aboutPage/OurApproach";
import OurPrinciples from "../components/aboutPage/OurPrinciples";
import FinalCTA from "../components/aboutPage/FinalCTA";
import ReachCapabilities from "../components/aboutPage/ReachCapabilities";
import FAQSection from "../components/sections/FAQ";
import BreadCrumbSchema from "../components/seo/BreadCrumbSchema";

// 1. Next.js SEO Metadata Config
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "About LeadWala | Verified Business Data & Lead Generation",
  description:
    "Discover how Leadwala helps businesses reach decision-makers with high-accuracy B2B databases, custom human-assisted research, and pan-India coverage.",
  keywords: [
    "Leadwala",
    "",
    "B2B data provider",
    "verified B2B leads",
    "lead generation India",
    "custom research",
    "decision maker contacts",
    "B2B database",
  ],
  alternates: {
    canonical: `${baseUrl}/aboutus`,
  },
  openGraph: {
    title: "About LeadWala | Verified Business Data & Lead Generation",
    description:
      "Data should create opportunities, not work. Learn how Leadwala delivers structured, accurate, and dependable B2B contact intelligence.",
    url: `${baseUrl}/aboutus`,
    siteName: "Leadwala",
    images: [
      {
        url: `${baseUrl}/og-about.jpg`,
        width: 1200,
        height: 630,
        alt: "Leadwala B2B Data Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About LeadWala | Verified Business Data & Lead Generation",
    description:
      "Data should create opportunities, not work. Learn how Leadwala delivers structured, accurate, and dependable B2B contact intelligence.",
    images: [`${baseUrl}/og-about.jpg`],
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadCrumbSchema
        items={[
          {
            name: "Home",
            url: baseUrl,
          },
          {
            name: "About Us",
            url: `${baseUrl}/aboutus`,
          },
        ]}
      />
      <main className="overflow-hidden bg-white text-stone-950">
        <AboutHero />
        <WhyWeExist />
        <OurApproach />
        <OurPrinciples />
        <ReachCapabilities />
        <FAQSection page="about" />
        <FinalCTA />
      </main>
    </>
  );
}
