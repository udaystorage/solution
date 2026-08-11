import React from "react";
import ChooseCatagory from "../components/leadstore/ChooseCatagory";
import BestProducts from "../components/leadstore/BestProducts";
import FAQSection from "../components/sections/FAQ";
import LeadStoreHero from '../components/leadstore/LeadStoreHero';


export default function page() {
  return (
    <>
      <div className="w-full min-h-max flex flex-col justify-start items-center text-black">
         <LeadStoreHero/>
         <ChooseCatagory/>
         <BestProducts/>
         <FAQSection page="leadstore"/>
      </div>
    </>
  );
}
