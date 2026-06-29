import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-secondary-light/30 to-white py-16 sm:py-20 border-t border-slate-100">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-secondary/5 blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl z-0" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-4 inline-block">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4 mt-2">
          Need Reliable Medical Transportation?
        </h2>
        <p className="text-base sm:text-lg text-neutral-muted max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
          Schedule a safe, comfortable, and on-time ride with KMM Transport Services LLC today. We serve Phoenix and surrounding areas with dedicated care.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <Link
            href="/book-a-ride"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-secondary hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            Request Transportation
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-primary bg-white hover:bg-slate-50 transition-all duration-300 border border-slate-200 hover:border-slate-300 w-full sm:w-auto shadow-sm"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
