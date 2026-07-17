"use client"
import { MoveRight } from 'lucide-react'
import React, { useState } from 'react'
import CatagoryCard from './CatagoryCard'


const CATEGORIES = [
  {
    id: 1,
    title: "Demat Account Holders Data",
    slug: "demat-account-holders-data"
  },
  {
    id: 2,
    title: "Stock Market Investors Data",
    slug: "stock-market-investors-data"
  },
  {
    id: 3,
    title: "Loan Data",
    slug: "loan-data"
  },
  {
    id: 4,
    title: "Insurance Data",
    slug: "insurance-data"
  },
  {
    id: 5,
    title: "Real Estate Data",
    slug: "real-estate-data"
  },
  {
    id: 6,
    title: "IT, Government, MNC Employees Data",
    slug: "it-government-mnc-employees-data"
  },
  {
    id: 7,
    title: "HNI (High Net Worth Individuals) Data",
    slug: "hni-high-net-worth-individuals-data"
  },
  {
    id: 8,
    title: "Car Owners Data",
    slug: "car-owners-data"
  },
  {
    id: 9,
    title: "Credit Card Data",
    slug: "credit-card-data"
  },
  {
    id: 10,
    title: "Students Data",
    slug: "students-data"
  },
  {
    id: 11,
    title: "Company's,Hotel, Collage School, Resturents, Spa Database",
    slug: "companys-hotel-collage-school-resturents-spa-database"
  },
  {
    id: 12,
    title: "Pincode Wise Data",
    slug: "pincode-wise-data"
  },
  {
    id: 13,
    title: "Doctors Data",
    slug: "doctors-data"
  },
  {
    id: 14,
    title: "International Data",
    slug: "international-data"
  }
];


export default function ChooseCatagory() {
    const [toggelheight, setToggelheight] = useState("h-80")
    const [toggeltext, setToggeltext] = useState("View all Categories")
  return (
    <>
     <div className={`w-full ${toggelheight} flex flex-col justify-start items-center overflow-hidden transition-all duration-400 py-5`}>
            <div className="flex flex-row justify-between items-center w-full px-25  bg-white">
                <div className="text-2xl font-bold">
                    Shop by Categories
                </div>
                <div className="flex gap-2 text-center cursor-pointer hover:text-gray-500"
                onClick={() =>{
                    toggelheight == "h-80" ? setToggelheight("h-210") : setToggelheight("h-80");
                    toggeltext == "View all Categories" ? setToggeltext("Hide all Categories") : setToggeltext("View all Categories") ;
                }}
                >
                    {toggeltext}
                    <MoveRight/>
                </div>
            </div>
            <div className="w-full h-min px-25 py-3 flex flex-wrap flex-row gap-6 items-baseline justify-center">
                
                {
                    CATEGORIES.map((cat) =>{
                       return (
                      
                       <CatagoryCard key={cat.id} name={cat.title} slug={cat.slug}/>
                        
                    )
                    })
                }
               
            </div>
     </div>
    </>
  )
}
