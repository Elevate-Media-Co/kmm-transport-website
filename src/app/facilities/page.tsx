import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import { FACILITIES } from '@/config/site';

export const metadata: Metadata = {
  title: 'Healthcare Facility Transport Partners Phoenix | KMM Transport',
  description: 'KMM Transport Services LLC partners with hospitals, clinics, dialysis units, and assisted living facilities in Phoenix, AZ to provide on-time NEMT patient transport.',
};

export default function FacilitiesPage() {
  // Map icons to each facility
  const facilityIcons = [
    // Hospitals
    <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>,
    // Clinics
    <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>,
    // Dialysis Centers
    <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
    </svg>,
    // Rehabilitation Centers
    <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // Assisted Living Facilities
    <svg key="5" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>,
    // Nursing Homes
    <svg key="6" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    // Senior Care Communities
    <svg key="7" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    // Adult Day Care Centers
    <svg key="8" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Home Care Agencies
    <svg key="9" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>,
  ];

  return (
    <>
      <PageHero
        title="Facilities & Partners"
        description="Providing structured, dependable non-emergency medical transportation support for care facilities, health centers, and community organizations."
      />

      {/* Intro section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full inline-block">
                Partnership Support
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Transportation Support for Healthcare Facilities
              </h2>
              <p className="text-base text-neutral-muted leading-relaxed font-medium">
                KMM Transport Services LLC works with individuals, families, and care organizations that need reliable transportation support. We understand the critical coordination needed between nursing staff, family members, and transport dispatch.
              </p>
              <p className="text-base text-neutral-muted leading-relaxed font-medium">
                By partnering with us, you gain a dependable resource that values passenger dignity, punctuality, and open communication. We coordinate directly with your facility schedule to avoid missed treatment windows and reduce discharge delays.
              </p>
            </div>
            
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 p-8 rounded-3xl space-y-4 shadow-sm">
              <h3 className="font-extrabold text-lg text-primary">Why Partner With Us?</h3>
              <ul className="space-y-3">
                {[
                  'Punctual discharge scheduling',
                  'Clear dispatch updates',
                  'Professional, background-checked drivers',
                  'Consistent support for dialysis & therapy clients',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-neutral-dark font-medium">
                    <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-secondary bg-secondary-light px-3 py-1 rounded-full inline-block">
              Organizations Served
            </span>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mt-3 mb-4">
              Facilities We Support
            </h2>
            <p className="text-base text-neutral-muted leading-relaxed font-medium">
              We provide NEMT services to support patients, residents, and coordinators across various care settings:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FACILITIES.map((facility, index) => (
              <div
                key={facility}
                className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary-light flex items-center justify-center text-secondary shrink-0">
                  {facilityIcons[index] || (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-base text-primary mb-1">{facility}</h3>
                  <p className="text-xs text-neutral-muted leading-relaxed font-medium">
                    Safe, caring door-to-door transit options for residents or patients traveling to appointments.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Partner CTA banner */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
            Looking for a reliable transportation partner for your patients or residents?
          </h2>
          <p className="text-base sm:text-lg text-neutral-muted leading-relaxed font-medium max-w-2xl mx-auto">
            Contact KMM Transport Services LLC today to learn how we can support your facility&apos;s ongoing NEMT needs.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-secondary hover:bg-primary transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
