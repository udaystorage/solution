"use client";
import { MoveRight, PencilSparkles } from "lucide-react";
import React, { useState } from "react";
import CatagoryCard from "./CatagoryCard";
import {
  TrendingUp,
  LineChart,
  Landmark,
  Shield,
  Building2,
  Briefcase,
  Crown,
  Car,
  CreditCard,
  GraduationCap,
  Building,
  MapPin,
  Stethoscope,
  Globe,
} from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  {
    id: 1,
    title: "Demat Account Holders Data",
    slug: "demat-account-holders-data",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Stock Market Investors Data",
    slug: "stock-market-investors-data",
    icon: LineChart,
  },
  {
    id: 3,
    title: "Loan Data",
    slug: "loan-data",
    icon: Landmark,
  },
  {
    id: 4,
    title: "Insurance Data",
    slug: "insurance-data",
    icon: Shield,
  },
  {
    id: 5,
    title: "Real Estate Data",
    slug: "real-estate-data",
    icon: Building2,
  },
  {
    id: 6,
    title: "IT, Government, MNC Employees Data",
    slug: "it-government-mnc-employees-data",
    icon: Briefcase,
  },
  {
    id: 7,
    title: "HNI (High Net Worth Individuals) Data",
    slug: "hni-high-net-worth-individuals-data",
    icon: Crown,
  },
  {
    id: 8,
    title: "Car Owners Data",
    slug: "car-owners-data",
    icon: Car,
  },
  {
    id: 9,
    title: "Credit Card Data",
    slug: "credit-card-data",
    icon: CreditCard,
  },
  {
    id: 10,
    title: "Students Data",
    slug: "students-data",
    icon: GraduationCap,
  },
  {
    id: 11,
    title: "Company's,Hotel, Collage School, Resturents, Spa Database",
    slug: "companys-hotel-collage-school-resturents-spa-database",
    icon: Building,
  },
  {
    id: 12,
    title: "Pincode Wise Data",
    slug: "pincode-wise-data",
    icon: MapPin,
  },
  {
    id: 13,
    title: "Doctors Data",
    slug: "doctors-data",
    icon: Stethoscope,
  },
  {
    id: 14,
    title: "International Data",
    slug: "international-data",
    icon: Globe,
  },
];

export default function ChooseCatagory() {
  const [toggelheight, setToggelheight] = useState("h-80");
  const [toggeltext, setToggeltext] = useState("View all Categories");
  return (
    <>
      <div
        className={`w-full ${toggelheight} flex flex-col justify-start items-center overflow-hidden transition-all duration-400 py-5`}
      >
        <div className="flex flex-row justify-between items-center w-full px-25  bg-white">
          <div className="text-2xl font-bold">Shop by Categories</div>
          <div
            className="flex gap-2 text-center cursor-pointer hover:text-gray-500"
            onClick={() => {
              toggelheight == "h-80"
                ? setToggelheight("h-210")
                : setToggelheight("h-80");
              toggeltext == "View all Categories"
                ? setToggeltext("Hide all Categories")
                : setToggeltext("View all Categories");
            }}
          >
            {toggeltext}
            <MoveRight />
          </div>
        </div>
        <div className="w-full h-min px-25 py-3 flex flex-wrap flex-row gap-10 items-baseline justify-center">
              <Link
                  href={`/leadstore/custom-data`}
                  className="hover:shadow-lg shadow-gray-400 cursor-pointer transition duration-200 w-45 h-min rounded-2xl px-5 py-3 flex flex-col items-center justify-start gap-3.5 "
                >
                  <div className="bg-violet-500 flex items-center justify-center rounded-full w-30 h-30">
                    <PencilSparkles className="w-15 h-15 stroke-white"/> 
                  </div>
                  <div className="w-full text-center">Custom Data</div>
                </Link>
          {CATEGORIES.map((cat) => {
            let Icon = cat.icon;
            return (
              <div key={cat.id}>
                <Link
                  
                  href={`/leadstore/${cat.slug}`}
                  className="hover:shadow-lg shadow-gray-400 cursor-pointer transition duration-200 w-45 h-min rounded-2xl px-5 py-3 flex flex-col items-center justify-start gap-3.5 "
                >
                  <div className="bg-cyan-400 flex items-center justify-center rounded-full w-30 h-30">
                    <Icon className="w-15 h-15 stroke-white"/> 
                  </div>
                  <div className="w-full text-center">{cat.title}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
