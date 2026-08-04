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
  { id: 1, title: "Demat Account Holders Data", slug: "demat-account-holders-data", icon: TrendingUp },
  { id: 2, title: "Stock Market Investors Data", slug: "stock-market-investors-data", icon: LineChart },
  { id: 3, title: "Loan Data", slug: "loan-data", icon: Landmark },
  { id: 4, title: "Insurance Data", slug: "insurance-data", icon: Shield },
  { id: 5, title: "Real Estate Data", slug: "real-estate-data", icon: Building2 },
  { id: 6, title: "IT, Government, MNC Employees Data", slug: "it-government-mnc-employees-data", icon: Briefcase },
  { id: 7, title: "HNI (High Net Worth Individuals) Data", slug: "hni-data", icon: Crown },
  { id: 8, title: "Car Owners Data", slug: "car-owners-data", icon: Car },
  { id: 9, title: "Credit Card Data", slug: "credit-card-data", icon: CreditCard },
  { id: 10, title: "Students Data", slug: "students-data", icon: GraduationCap },
  { id: 11, title: "Company's,Hotel, Collage School, Resturents, Spa Database", slug: "companies-hotels-colleges-schools-restaurants-spa-database", icon: Building },
  { id: 12, title: "Pincode Wise Data", slug: "pincode-wise-data", icon: MapPin },
  { id: 13, title: "Doctors Data", slug: "doctors-data", icon: Stethoscope },
  { id: 14, title: "International Data", slug: "international-data", icon: Globe },
];

export default function ChooseCatagory() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className={`w-full flex flex-col justify-start items-center overflow-hidden transition-all duration-400 py-5 ${
          expanded
            ? "max-h-[4000px]"
            : "max-h-80 sm:max-h-95 md:max-h-80"
        }`}
      >
        <div className="flex flex-row justify-between items-center w-full px-4 sm:px-8 md:px-8 lg:px-6 bg-white gap-2">
          <div className="text-lg sm:text-xl md:text-2xl font-bold">Leads by Categories</div>
          <div
            className="flex gap-2 items-center text-center cursor-pointer hover:text-gray-500 text-sm sm:text-base shrink-0"
            onClick={() => setExpanded((prev) => !prev)}
          >
            <span className="whitespace-nowrap">
              {expanded ? "Hide all Categories" : "View all Categories"}
            </span>
            <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        <div className="w-full h-min px-2 sm:px-8 md:px-8 lg:px-8 py-3 flex flex-wrap flex-row gap-2 sm:gap-6 md:gap-8 lg:gap-10 items-baseline justify-center">
          <Link
            href={`/leadstore/custom-data`}
            className="hover:shadow-lg shadow-gray-400 cursor-pointer transition duration-200 w-28 sm:w-36 md:w-40 lg:w-45 h-min rounded-2xl px-3 sm:px-4 lg:px-5 py-3 flex flex-col items-center justify-start gap-2 sm:gap-3 lg:gap-3.5"
          >
            <div className="bg-violet-500 flex items-center justify-center rounded-full w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30">
              <PencilSparkles className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15 stroke-white" />
            </div>
            <div className="w-full text-center text-xs sm:text-sm md:text-base">Custom Data</div>
          </Link>

          {CATEGORIES.map((cat) => {
            let Icon = cat.icon;
            return (
              <div key={cat.id}>
                <Link
                  href={`/leadstore/${cat.slug}`}
                  className="hover:shadow-lg shadow-gray-400 cursor-pointer transition duration-200 w-28 sm:w-36 md:w-40 lg:w-45 h-min rounded-2xl px-3 sm:px-4 lg:px-5 py-3 flex flex-col items-center justify-start gap-2 sm:gap-3 lg:gap-3.5"
                >
                  <div className="bg-cyan-400 flex items-center justify-center rounded-full w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30">
                    <Icon className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15 stroke-white" />
                  </div>
                  <div className="w-full text-center text-xs sm:text-sm md:text-base">{cat.title}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}