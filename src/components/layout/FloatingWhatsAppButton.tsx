'use client';

import React from 'react';

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
      <div className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba56] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 shrink-0">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.968 14.117.94 11.48.94c-5.44 0-9.866 4.372-9.87 9.802 0 1.814.48 3.59 1.39 5.169l-1.009 3.686 3.794-.984zm13.688-6.19c-.31-.155-1.838-.894-2.126-.996-.288-.103-.498-.155-.707.155-.21.31-.806.996-.988 1.196-.182.2-.364.22-.674.065-3.08-1.503-4.316-2.585-5.69-4.947-.28-.48.28-.445.8-.1.468.31.52.52.8.675.28.156.14.31.07.466-.07.155-.707 1.678-.866 2.063-.155.372-.31.393-.674.288-1.395-.69-2.274-1.92-2.9-3.003-.18-.31-.015-.478.14-.633.14-.14.31-.328.467-.492.155-.164.207-.276.31-.46.103-.185.052-.347-.026-.502-.078-.155-.707-1.678-.969-2.302-.255-.612-.516-.53-.707-.54-.183-.01-.393-.01-.603-.01-.21 0-.55.078-.838.393-.288.31-1.1.1.076-1.1 2.4 0-1.073.4-1.74.838-2.215.467-.37.935-.49 1.25-.49h.935c.288 0 .612.01.894.078.282.068.56.24.81.492.25.253.935 2.246 1.016 2.403.08.157.135.34.027.553-.108.21-.163.34-.325.53-.163.19-.34.326-.48.494-.15.176-.3.37-.13.66.17.29.75 1.205 1.615 1.96 1.11 1.01 2.03 1.32 2.32 1.46.29.14.46.12.63-.08.17-.2.72-.82.91-1.11.19-.29.38-.24.66-.14.28.1.1.78.89 2.126.99.08.02.16.07.22.1.28.15.55.33.81.54z"/>
        </svg>
      </div>
    </a>
  );
}
