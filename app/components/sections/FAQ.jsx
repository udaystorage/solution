'use client'
import React, { useState, useEffect } from 'react';
import { faqData } from '../../../data/faqData';

// FAQItem component with ARIA indicators for structural crawler visibility
const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  const headingId = `faq-heading-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-gray-100 py-5 transition-all duration-300 ">
      <h3 className="m-0 p-0 text-md font-semibold text-gray-900 md:text-md ">
        <button
          id={headingId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          type="button"
          className="flex w-full items-center justify-between text-left focus:outline-none cursor-pointer hover:text-purple-600 transition-colors duration-200"
        >
          <span>{question}</span>
          <span 
            className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-600 transition-transform duration-300 ${
              isOpen ? 'rotate-180 bg-purple-50 text-purple-600' : ''
            }`}
            aria-hidden="true"
          >
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
      </h3>
      <div
        id={panelId}
        aria-labelledby={headingId}
        role="region"
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
  const currentPage = page || 'home';
  const faqs = faqData[currentPage] || faqData['home'];
  
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Dynamically inject structural JSON-LD FAQ schema for search crawlers
  useEffect(() => {
    if (!faqs || faqs.length === 0) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const scriptId = `faq-schema-${currentPage}`;
    let scriptContainer = document.getElementById(scriptId);

    if (!scriptContainer) {
      scriptContainer = document.createElement('script');
      scriptContainer.id = scriptId;
      scriptContainer.type = 'application/ld+json';
      document.head.appendChild(scriptContainer);
    }

    scriptContainer.text = JSON.stringify(schema);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [faqs, currentPage]);

  // Clean formatting wrapper for dynamic text headings
  const formatHeadingText = (text) => {
    if (!text) return 'Frequently Asked Questions';
    return `${text.charAt(0).toUpperCase() + text.slice(1)} Frequently Asked Questions`;
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="absolute right-[-10%] top-1/2 -z-10 h-87.5 w-87.5 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 opacity-[0.08] blur-[80px]" aria-hidden="true" />

      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-100 text-black border border-neutral-200/60 uppercase tracking-wider">
            Have Questions?
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {formatHeadingText(currentPage)}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about our data services, platform extraction, and validation processes.
          </p>
        </div>

        {/* Dynamic Accordion List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              index={index}
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Global Action Conversion Block */}
        <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center md:flex md:items-center md:justify-between md:text-left">
          <div>
            <h4 className="text-xl font-bold text-gray-900 m-0">Still have questions?</h4>
            <p className="mt-1 text-gray-500 text-sm">Can't find the exact answer you are looking for? Our database specialists are always here to help.</p>
          </div>
          <button 
            type="button" 
            className="mt-6 inline-flex items-center cursor-pointer justify-center rounded-full bg-black px-9 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 md:mt-0 shadow-sm"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;