import React from "react";
import UpperSide from "../components/leadstore/UpperSide";
import ChooseCatagory from "../components/leadstore/ChooseCatagory";
import BestProducts from "../components/leadstore/BestProducts";


export default function page() {

  

  return (
    <>
      <div className="w-full min-h-max flex flex-col justify-start items-center text-black">
         <UpperSide/>
         <ChooseCatagory/>
         <BestProducts/>
      </div>
    </>
  );
}
