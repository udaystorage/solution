
import AboutHero from "../components/aboutPage/AboutHero";
import WhyWeExist from "../components/aboutPage/WhyWeExist";
import OurApproach from "../components/aboutPage/OurApproach";
import OurPrinciples from "../components/aboutPage/OurPrinciples";
import FinalCTA from "../components/aboutPage/FinalCTA";
import ReachCapabilities from "../components/aboutPage/ReachCapabilities";
import FAQSection from "../components/sections/FAQ";


// 1. Next.js SEO Metadata Config
export const metadata = {
  title: "About Leadwala | Verified B2B Data & Prospecting Intelligence",
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
    canonical: "https://www.leadwala.co.in/about",
  },
  openGraph: {
    title: "About Leadwala | Verified B2B Data & Prospecting Intelligence",
    description:
      "Data should create opportunities, not work. Learn how Leadwala delivers structured, accurate, and dependable B2B contact intelligence.",
    url: "https://www.leadwala.co.in/about",
    siteName: "Leadwala",
    images: [
      {
        url: "https://www.leadwala.co.in/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Leadwala B2B Data Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Leadwala | Verified B2B Data & Prospecting Intelligence",
    description:
      "Data should create opportunities, not work. Learn how Leadwala delivers structured, accurate, and dependable B2B contact intelligence.",
    images: ["https://www.leadwala.co.in/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-stone-950">
      <AboutHero />
      <WhyWeExist />
      <OurApproach />
      <OurPrinciples />
      <ReachCapabilities />
    <FAQSection page="about"/>
      <FinalCTA />
    </main>
  );
}
