import React from "react";
import BestProductCard from "./BestProductCard";

const CATEGORIES = [
  {
    id: 1,
    title: "Stock Market Trader's Data",
    slug: "stock-market-investors-data",
    image: "/leadCards/stock-trader.webp",
    description:
      "Demat A/C Holders, New in Stock Market, Interested Active Traders Data",
  },
  {
    id: 2,
    title: "Forex Trader's Data",
    slug: "forex-traders-data",
    image: "/leadCards/foreign-currencies.webp",

    description:
      "Verified stock market investors database for financial marketing campaigns.",
  },
  {
    id: 3,
    slug: "equity-traders-data",
    title: "Equity Trader's Data",
    image: "/leadCards/portfolio-on-screen.webp",

    description:
      "Verified stock market investors database for financial marketing campaigns.",
  },
  {
    id: 4,
    slug: "intraday-traders-data",
    title: "Intraday Trader's Data",
    image: "/leadCards/checking-candle-chart.webp",

    description:
      "Verified stock market investors database for financial marketing campaigns.",
  },
  {
    id: 5,
    slug: "future-and-options-traders-data",
    title: "Future & Options Trader's Data",
    image: "/leadCards/chart-on-laptop.webp",

    description:
      "Verified stock market investors database for financial marketing campaigns.",
  },
  {
    id: 6,
    slug: "commodity-traders-data",
    title: "Commodity Trader's Data",
    image: "/leadCards/gold-bars.webp",

    description:
      "Verified stock market investors database for financial marketing campaigns.",
  },
  {
    id: 7,
    slug: "crypto-traders-data",
    title: "Crypto Trader's Data",
    image: "/leadCards/trading-crypto.webp",

    description:
      "Verified stock market investors database for financial marketing campaigns.",
  },
  {
    id: 8,
    slug: "demat-account-holders-data",
    title: "Demat Account Holder's Data",
    image: "/leadCards/demat-account-holders.webp",

    description: "Verified database of Demat account holders across India.",
  },
];

export default function BestProducts() {
  return (
    <section>
      <div className="w-full flex flex-col justify-start items-center  transition-all duration-400">
        <div className="flex flex-row justify-between items-center w-full px-4 sm:px-8 md:px-16 lg:px-25 py-3 sm:py-5 bg-white">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold py-2 sm:py-3">
            Best Selling Leads
          </h2>
        </div>
        <div className="flex flex-row md:mb-8 justify-center items-start flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full px-4 sm:px-10 md:px-16  lg:px-20">
          {CATEGORIES.map((cat) => {
            return (
              <BestProductCard
                key={cat.id}
                name={cat.title}
                description={cat.description}
                slug={cat.slug}
                image={cat.image}
              />
            );
          })}
        </div>
        <div className="py-10 px-4 text-center">
          <p className="text-xs sm:text-sm   uppercase tracking-[0.2em] text-neutral-600">
            Database Collection
          </p>

          <h3 className="mt-2 text-xl md:text-2xl  font-bold ">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-blue-600 to-cyan-500">
              4,834+{" "}
            </span>{" "}
            Verified Database Segments
          </h3>

          <p className="mt-2 md:mt-3 text-sm md:text-base  text-neutral-500">
            Built to help you reach the right audience with precision.
          </p>
        </div>
      </div>
    </section>
  );
}
