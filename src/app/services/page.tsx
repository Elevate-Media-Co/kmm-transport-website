import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Heart,
  Accessibility,
  Activity,
  Stethoscope,
  Home,
  Shield,
  Clock,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import CTASection from '@/components/common/CTASection';
import { SERVICES } from '@/config/site';

export const metadata: Metadata = {
  title: 'Medical Transportation Services Phoenix | KMM Transport',
  description: 'Explore NEMT options by KMM Transport Services LLC in Phoenix, AZ: wheelchair access, dialysis trips, senior travel, rehab sessions, and hospital discharge rides.',
};

export default function ServicesPage() {
  // Map index to Lucide icons for all 8 services
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar className="w-6 h-6" />;
      case 1:
        return <Heart className="w-6 h-6" />;
      case 2:
        return <Accessibility className="w-6 h-6" />;
      case 3:
        return <Activity className="w-6 h-6" />;
      case 4:
        return <Stethoscope className="w-6 h-6" />;
      case 5:
        return <Home className="w-6 h-6" />;
      case 6:
        return <Shield className="w-6 h-6" />;
      case 7:
        return <Clock className="w-6 h-6" />;
      default:
        return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <>
      <PageHero
        title="Our Services"
        description="Providing safe, specialized, and supportive non-emergency medical transportation options tailored to your needs."
      />

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full inline-block">
                What We Do
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Reliable NEMT Transportation Solutions
              </h2>
              <p className="text-base text-neutral-muted leading-relaxed font-medium">
                We specialize in door-to-door, supportive medical transportation. Whether it is a routine doctor visit, recurring dialysis, or hospital discharge, we focus on safe transfers and punctual pick-ups.
              </p>
              <p className="text-sm text-neutral-muted leading-relaxed font-medium">
                Each of our vehicles is clean, well-maintained, and configured to support non-emergency patient, senior, and wheelchair-accessible transport needs.
              </p>
            </div>
            
            {/* Visual Panel for the services page */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-slate-50 border border-slate-200/50 p-2 flex items-center justify-center">
                <Image
                  src="/images/wheelchair-transport.svg"
                  alt="Wheelchair accessible transportation symbol"
                  width={420}
                  height={315}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="bg-white border border-slate-200/60 rounded-3xl p-8 card-shadow shadow-sm card-shadow-hover flex flex-col justify-between"
              >
                <div>
                  {/* Dynamic Lucide Icon */}
                  <div className="w-12 h-12 rounded-xl bg-secondary-light flex items-center justify-center text-secondary mb-6 shadow-sm">
                    {getServiceIcon(index)}
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-sm text-neutral-muted leading-relaxed mb-4 font-medium">
                    {service.description}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed pb-6 border-b border-slate-100 font-medium">
                    {service.details}
                  </p>
                </div>

                <div className="pt-6 flex justify-between items-center mt-auto">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    Non-Emergency
                  </span>
                  
                  <Link
                    href="/book-a-ride"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-secondary hover:bg-primary transition-colors shadow-sm"
                  >
                    <span>Request Ride</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
