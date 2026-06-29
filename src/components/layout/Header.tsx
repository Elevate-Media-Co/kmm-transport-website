'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_INFO, NAV_ITEMS } from '@/config/site';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll listener for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if contact placeholders have been updated
  const hasPhone = CONTACT_INFO.phone && !CONTACT_INFO.phone.includes('[Add');
  const telLink = hasPhone ? `tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}` : '#';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm py-3' : 'bg-white py-4 border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded-lg">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-primary tracking-tight transition-colors duration-200 group-hover:text-secondary">
                {CONTACT_INFO.name}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-accent">
                Non-Emergency Medical Transport
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex space-x-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors duration-200 focus:outline-none focus:text-secondary ${
                    isActive
                      ? 'text-secondary border-b-2 border-secondary pb-1'
                      : 'text-neutral-muted hover:text-primary hover:border-b-2 hover:border-slate-300 pb-1'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-4">
            <a
              href={telLink}
              className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors duration-200 py-2 px-3 rounded-lg border border-transparent hover:border-slate-200"
            >
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <Link
              href="/book-a-ride"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-secondary hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Book a Ride
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-neutral-muted hover:text-primary hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[600px] border-b border-slate-100 bg-white' : 'max-h-0'}`} id="mobile-menu">
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'bg-secondary-light text-secondary font-bold'
                    : 'text-neutral-dark hover:bg-slate-50 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 px-4">
            <a
              href={telLink}
              className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-base font-bold text-primary hover:bg-slate-50 transition-colors"
            >
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <Link
              href="/book-a-ride"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center py-3 bg-secondary hover:bg-primary text-white rounded-xl text-base font-bold transition-colors shadow-sm"
            >
              Book a Ride
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
