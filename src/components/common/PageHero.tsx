import React from 'react';
import Link from 'next/link';

interface PageHeroProps {
  title: string;
  description?: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-white py-16 md:py-20 border-b-4 border-accent">
      {/* Background gradients and glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-primary to-[#050b14] opacity-95 z-0" />
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-secondary/15 blur-3xl z-0" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-accent/5 blur-3xl z-0" />
      
      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0d_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Link href="/" className="hover:text-accent transition-colors focus:outline-none focus:text-accent">
              Home
            </Link>
            <span className="text-slate-600 font-normal">/</span>
            <span className="text-slate-200 font-semibold">{title}</span>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {title}
          </h1>
          
          {description && (
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
