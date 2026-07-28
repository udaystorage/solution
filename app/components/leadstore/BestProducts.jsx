"use client"
import { MoveRight } from 'lucide-react'
import React, { useState } from 'react'
import BestProductCard from './BestProductCard'


const CATEGORIES = [
  { id: 1, title: "Stock Market Trader's Data", slug: "stock-market-trader's-data",image:"/leadCards/stock-trader.webp",description:"Demat A/C Holders, New in Stock Market, Interested Active Traders Data" },
  { id: 2, title: "Loan Data", slug: "loan-data",image:"/leadCards/loan.webp", description:"Loan Defaulter, Home Loan Customers, Car Loan Customers" },
  { id: 3, title: "Insurance Data", slug: "insurance-data",image:"/leadCards/insurance.webp", description:"Life Insurance Enquiries, Car Insurance Policyholders, Health Insurance Prospects" },
  { id: 4, title: "Real Estate Data", slug: "real-estate-data",image:"/leadCards/real-estate.webp", description:"Active Property Buyers, Property Sellers, Flat Rent, VDNB (Visit Done Not Booking)" },
  { id: 5, title: "HNI (High Net Worth Individuals) Data", slug: "hni-high-net-worth-individual's-data",image:"/leadCards/hni.webp", description:"High Profile Individuals, High Salaried Persons, Business Owners" },
  { id: 6, title: "Credit Card Holder's Data", slug: "credit-card-holder's-data",image:"/leadCards/credit-card.webp", description:"Credit Card Interested Customers, High CIBIL Score Customers, Low CIBIL Score Customers" },
  { id: 7, title: "Student's Data", slug: "student's-data",image:"/leadCards/students.webp", description:"School Students, Fresh Engineering Graduates, Job Seekers, Skill Development Learners" },
  { id: 8, title: "Car Owner's Data", slug: "car-owner's-data",image:"/leadCards/car-owner.webp", description:"Car Insurance Renewal Customers, New Car Buyers, Luxury Car Owners, Used Car Buyers" },
];

export default function BestProducts() {
    return (
      <>
        <div className="w-full flex flex-col justify-start items-center overflow-hidden transition-all duration-400">
          <div className="flex flex-row justify-between items-center w-full px-4 sm:px-8 md:px-16 lg:px-25 py-3 sm:py-5 bg-white">
            <div className="text-lg sm:text-xl md:text-2xl font-bold py-2 sm:py-3">Best Selling Leads</div>
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
                  <BestProductCard key={cat.id} name={cat.title} description={cat.description} slug={cat.slug} image={cat.image} />
                )
              })
            }
          </div>
        </div>
      </>
    );
}