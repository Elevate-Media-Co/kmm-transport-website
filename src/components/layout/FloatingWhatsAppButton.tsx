'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsAppButton() {
  const whatsappUrl = "https://wa.me/16027996148?text=Hi%20KMM%20Transport%20Services%20LLC%2C%20I%20would%20like%20to%20inquire%20about%20transportation%20services.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center gap-2 group transition-all duration-300 active:scale-95 bottom-24 right-6 xl:bottom-8 xl:right-8"
      aria-label="Chat with KMM Transport Services LLC on WhatsApp"
    >
      {/* Tooltip Label (Desktop only) */}
      <span className="hidden xl:inline-block px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-lg shadow-sm opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Chat on WhatsApp
      </span>
      
      {/* WhatsApp Circular Button */}
      <div className="w-[52px] h-[52px] xl:w-14 xl:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba56] hover:scale-105 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 shrink-0">
        <FaWhatsapp className="w-[26px] h-[26px] xl:w-[28px] xl:h-[28px]" />
      </div>
    </a>
  );
}
