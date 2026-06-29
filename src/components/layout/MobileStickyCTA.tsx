'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Car } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-slate-100 shadow-[0_-4px_24px_-4px_rgba(11,30,54,0.08)] px-4 py-3 flex items-center justify-between gap-3">
      <Link
        href="/book-a-ride"
        className="flex-grow inline-flex items-center justify-center gap-2 py-3 px-4 bg-secondary text-white rounded-xl text-sm font-bold shadow-sm hover:bg-primary active:scale-95 transition-all text-center focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
      >
        <Calendar className="w-4 h-4 shrink-0" />
        <span>Book a Ride</span>
      </Link>
      <Link
        href="/drivers"
        className="flex-grow inline-flex items-center justify-center gap-2 py-3 px-4 bg-accent hover:bg-accent-hover text-primary rounded-xl text-sm font-bold shadow-sm active:scale-95 transition-all text-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        <Car className="w-4 h-4 shrink-0" />
        <span>Apply to Drive</span>
      </Link>
    </div>
  );
}
