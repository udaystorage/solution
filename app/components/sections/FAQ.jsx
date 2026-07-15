// FAQSection.jsx
'use client'
import React, { useState } from 'react';
import { faqData } from '../../../data/faqData';

// FAQItem is now a controlled component
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-100 py-5 transition-all duration-300">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-md font-semibold text-gray-900 md:text-md hover:text-purple-600 transition-colors duration-200">
          {question}
        </span>
        <span className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-purple-50 text-purple-600' : ''}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-base text-gray-600 md:text-sm leading-relaxed max-w-3xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQSection = ({ page }) => {
  const faqs = faqData[page] || faqData['home'];
  
  // Track the index of the currently open FAQ. null means all are closed.
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    // If the clicked item is already open, close it (set to null). Otherwise, open the clicked item.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 md:px-12 lg:px-24">
      {/* Dynamic landing template background blur accent */}
      <div className="absolute right-[-10%] top-1/2 -z-10 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 opacity-[0.08] blur-[80px]" />

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            Have Questions?
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-2xl capitalize">
            {page} FAQs
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about our data, platform, and processes.
          </p>
        </div>

        {/* Dynamic Accordion List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Global Action Block */}
        <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center md:flex md:items-center md:justify-between md:text-left">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Still have questions?</h3>
            <p className="mt-1 text-gray-500">Can&apost find the answer you are looking for? Our team is always here to help.</p>
          </div>
          <button className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 md:mt-0">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;