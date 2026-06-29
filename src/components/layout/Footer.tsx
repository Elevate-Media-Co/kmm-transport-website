import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO, NAV_ITEMS, SERVICE_AREAS } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Clean phone and email for links
  const hasPhone = CONTACT_INFO.phone && !CONTACT_INFO.phone.includes('[Add');
  const telLink = hasPhone ? `tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}` : '#';
  const hasEmail = CONTACT_INFO.email && !CONTACT_INFO.email.includes('[Add');
  const mailLink = hasEmail ? `mailto:${CONTACT_INFO.email}` : '#';

  return (
    <footer className="bg-primary text-white border-t border-primary-light">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company details */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-base shadow-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className="font-bold text-lg leading-tight tracking-tight text-white">
                {CONTACT_INFO.shortName}
              </span>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Providing dependable, safe, and compassionate non-emergency medical transportation services across the Phoenix metropolitan area.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{CONTACT_INFO.address}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={telLink} className="hover:text-accent hover:underline transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={mailLink} className="hover:text-accent hover:underline transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-100 border-b border-primary-light pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-300 hover:text-accent transition-colors flex items-center gap-1.5 group">
                    <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="flex flex-col space-y-4 md:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-100 border-b border-primary-light pb-2">
              Service Areas (Phoenix & Surrounding)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm text-slate-300">
                  <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-2 italic">
              *If your city is not listed, please contact us to check driver availability in your location.
            </p>
          </div>
        </div>

        {/* Disclaimer Area */}
        <div className="mt-12 pt-8 border-t border-primary-light">
          <div className="bg-primary-light/50 border-l-4 border-accent p-4 rounded-r-xl">
            <p className="text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-accent uppercase tracking-wider block mb-1">Notice & Disclaimer:</span>
              {CONTACT_INFO.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-primary-light/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {CONTACT_INFO.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
