'use client';

import React, { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import CTASection from '@/components/common/CTASection';
import { FAQS } from '@/config/site';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Have questions about our non-emergency medical transportation services? Find clear, direct answers below."
      />

      <section className="py-20 bg-white flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full inline-block">
              F.A.Q.
            </span>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mt-3 mb-4">
              Common Questions Answered
            </h2>
            <p className="text-base text-neutral-muted leading-relaxed font-medium">
              Find basic information on how we schedule rides, types of vehicles, and driving opportunities in Phoenix.
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    type="button"
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-primary text-sm sm:text-base focus:outline-none transition-colors hover:bg-slate-50/50"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className={`ml-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-secondary' : 'text-slate-400'}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  
                  {/* Expanding description container */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-60 border-t border-slate-100' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 text-xs sm:text-sm text-neutral-muted leading-relaxed font-semibold bg-slate-50/30">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NEMT warning notice */}
          <div className="mt-12 p-5 bg-amber-50/60 border border-amber-100 rounded-2xl text-center max-w-3xl mx-auto text-xs text-neutral-muted font-semibold leading-relaxed">
            <span className="font-extrabold text-accent uppercase tracking-wider block mb-1">
              Still Have Questions?
            </span>
            Our local Phoenix office is here to help coordinate. Feel free to submit a request on our contact page, email us, or call us. For emergencies, always dial 911 immediately.
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
