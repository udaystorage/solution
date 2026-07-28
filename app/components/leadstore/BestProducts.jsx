"use client"
import { MoveRight } from 'lucide-react'
import React, { useState } from 'react'
import BestProductCard from './BestProductCard'

const CATEGORIES = [
  { id: 1, title: "Stock Market Traders Data", slug: "stock-market-traders-data" },
  { id: 2, title: "Loan Data", slug: "loan-data" },
  { id: 3, title: "Insurance Data", slug: "insurance-data" },
  { id: 4, title: "Real Estate Data", slug: "real-estate-data" },
  { id: 5, title: "HNI (High Net Worth Individuals) Data", slug: "hni-high-net-worth-individuals-data" },
  { id: 6, title: "Credit Card Holders Data", slug: "credit-card-holders-data" },
  { id: 7, title: "Students Data", slug: "students-data" },
];

export default function BestProducts() {
    return (
      <>
        <div className="w-full flex flex-col justify-start items-center overflow-hidden transition-all duration-400">
          <div className="flex flex-row justify-between items-center w-full px-4 sm:px-8 md:px-16 lg:px-25 py-3 sm:py-5 bg-white">
            <div className="text-lg sm:text-xl md:text-2xl font-bold py-2 sm:py-3">Best Selling Products</div>
            {/* <div
              className="flex gap-2 text-center cursor-pointer hover:text-gray-500">
              {}
              <MoveRight />
            </div> */}
          </div>
          <div className="flex flex-row justify-center items-start flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full px-4 sm:px-10 md:px-16 lg:px-20">
            {
              CATEGORIES.map((cat) => {
                return (
                  <BestProductCard key={cat.id} name={cat.title} slug={cat.slug} />
                )
              })
            }
          </div>
        </div>
      </>
    );
}