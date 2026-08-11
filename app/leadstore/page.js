import React from "react";
import ChooseCatagory from "../components/leadstore/ChooseCatagory";
import BestProducts from "../components/leadstore/BestProducts";
import FAQSection from "../components/sections/FAQ";
import LeadStoreHero from '../components/leadstore/LeadStoreHero';
import BreadCrumbSchema from "../components/seo/BreadCrumbSchema";


export const metadata = {
  title: "Premium B2B & B2C Lead Databases | LeadWala",

  description:
    "Explore verified B2B and B2C lead databases for sales, marketing, and lead generation. Find targeted business and consumer data tailored to your audience.",

  alternates: {
    canonical: "https://leadwala.co.in/leadstore",
  },

  openGraph: {
    title: "Premium B2B & B2C Lead Databases | LeadWala",

    description:
      "Explore verified B2B and B2C lead databases for sales, marketing, and lead generation. Find targeted data tailored to your audience.",

    url: "https://leadwala.co.in/leadstore",

    siteName: "LeadWala",

    type: "website",

    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",

    title: "Premium B2B & B2C Lead Databases | LeadWala",

    description:
      "Explore verified B2B and B2C lead databases for sales, marketing, and lead generation.",
  },
};

export default function page() {

  
  return (
    <>
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
           
          ]}
        />
      <div className="w-full min-h-max flex flex-col justify-start items-center text-black">
         <LeadStoreHero/>
         <ChooseCatagory/>
         <BestProducts/>
         <FAQSection page="leadstore"/>
      </div>
    </>
  );
}
