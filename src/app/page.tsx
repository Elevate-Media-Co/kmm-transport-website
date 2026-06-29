import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  MapPin,
  Activity,
  HeartHandshake,
  CalendarCheck,
  Calendar,
  Heart,
  Accessibility,
  Stethoscope,
  Home,
  ArrowRight,
  Shield,
  Clock,
  ThumbsUp,
  Compass,
} from 'lucide-react';
import Image from 'next/image';
import { CONTACT_INFO, SERVICE_AREAS, SERVICES } from '@/config/site';
import CTASection from '@/components/common/CTASection';

export const metadata: Metadata = {
  title: 'KMM Transport Services LLC | Medical Transportation in Phoenix, AZ',
  description:
    'KMM Transport Services LLC provides safe, reliable non-emergency medical transportation in Phoenix, AZ for seniors, patients, wheelchair users, medical appointments, dialysis, therapy visits, and hospital discharges.',
};

export default function HomePage() {
  const hasPhone = CONTACT_INFO.phone && !CONTACT_INFO.phone.includes('[Add');
  const telLink = hasPhone ? `tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}` : '#';

  const servicesPreview = SERVICES.slice(0, 6);

  // Map indexes to Lucide icons for services preview
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar className="w-6 h-6 text-secondary" />;
      case 1:
        return <Heart className="w-6 h-6 text-secondary" />;
      case 2:
        return <Accessibility className="w-6 h-6 text-secondary" />;
      case 3:
        return <Activity className="w-6 h-6 text-secondary" />;
      case 4:
        return <Stethoscope className="w-6 h-6 text-secondary" />;
      case 5:
        return <Home className="w-6 h-6 text-secondary" />;
      default:
        return <Activity className="w-6 h-6 text-secondary" />;
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-primary text-white py-16 lg:py-24 border-b border-slate-800">
        {/* Background blobs and styling */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-primary to-[#040c17] opacity-95 z-0" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl z-0" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl z-0" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35 z-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary/20 text-blue-300 border border-secondary/35 self-start">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Phoenix, AZ Non-Emergency Medical Transport
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Safe & Reliable <span className="text-secondary">Medical Transportation</span> in Phoenix, AZ
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl">
                KMM Transport Services LLC provides dependable non-emergency medical transportation for patients, seniors, individuals with mobility needs, and healthcare-related appointments across Phoenix and surrounding areas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/book-a-ride"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-secondary hover:bg-white hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  Book a Ride
                </Link>
                <a
                  href={telLink}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white border border-slate-600 hover:bg-slate-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  <MapPin className="w-5 h-5 text-accent mr-2" />
                  Call Now: {CONTACT_INFO.phone}
                </a>
              </div>
              
              <div className="pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs sm:text-sm text-slate-400 font-semibold italic">
                <Shield className="w-5 h-5 text-accent shrink-0" />
                <span>Comfortable rides. Caring support. On-time transportation when it matters most.</span>
              </div>
            </div>

            {/* Right Graphic Column: Responsive SVG Illustration */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-primary-light/40 border border-slate-800/80 backdrop-blur-md p-2 flex items-center justify-center">
                <Image
                  src="/images/hero-transport-van.svg"
                  alt="KMM Non-Emergency Medical Transport Van"
                  width={500}
                  height={375}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Badge Strip */}
      <div className="bg-slate-50 border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-secondary">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-primary">Phoenix-Based Service</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-secondary">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-primary">Non-Emergency Transport</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-secondary">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-primary">Senior &amp; Mobility Support</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-secondary">
                <CalendarCheck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-primary">Ride Requests Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full inline-block">
              Welcome to KMM Transport
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mt-3 mb-6">
              Compassionate Transportation You Can Count On
            </h2>
            <p className="text-base sm:text-lg text-neutral-muted leading-relaxed font-medium">
              At KMM Transport Services LLC, we understand that medical transportation is more than just a ride. It is about safety, dignity, comfort, and peace of mind. Whether you need transportation to a doctor&apos;s appointment, dialysis treatment, therapy session, hospital discharge, senior care visit, or routine medical checkup, our goal is to make every trip smooth, respectful, and reliable.
            </p>
          </div>

          {/* Services Preview Grid with Lucide Icons and Hover Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesPreview.map((service, index) => (
              <div
                key={service.id}
                className="bg-white border border-slate-100 rounded-2xl p-6 card-shadow card-shadow-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary-light flex items-center justify-center mb-5">
                    {getServiceIcon(index)}
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-muted leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                </div>
                
                <Link
                  href="/services"
                  className="text-xs font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1 mt-auto"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 hover:border-slate-300 font-bold text-sm text-primary hover:bg-slate-50 transition-all shadow-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Description */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full inline-block self-start">
                Why Choose KMM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Our Commitment to Excellence
              </h2>
              <p className="text-base text-neutral-muted leading-relaxed font-medium">
                At KMM Transport Services LLC, we hold ourselves to the highest standards of safety and service. Every aspect of our operations is designed to provide passengers and their families with the comfort and peace of mind they deserve.
              </p>
              
              <div className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm border-l-4 border-l-accent">
                <p className="text-xs text-neutral-muted italic font-medium leading-relaxed">
                  &ldquo;Our mission is to help people reach the care they need with comfort, dignity, and reliability. From door to door, we care for you.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column Benefits List with icons */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Benefit 1 */}
              <div className="bg-white p-6 rounded-2xl card-shadow border border-slate-100">
                <div className="w-10 h-10 bg-secondary-light rounded-xl text-secondary flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-primary text-base mb-2">Reliable Scheduling</h4>
                <p className="text-xs text-neutral-muted leading-relaxed font-medium">
                  Punctuality is our priority. We plan routing in advance to guarantee pickups are on-time.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-2xl card-shadow border border-slate-100">
                <div className="w-10 h-10 bg-secondary-light rounded-xl text-secondary flex items-center justify-center mb-4">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-primary text-base mb-2">Comfortable &amp; Respectful</h4>
                <p className="text-xs text-neutral-muted leading-relaxed font-medium">
                  We treat every passenger like family, ensuring dignified, gentle support throughout.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white p-6 rounded-2xl card-shadow border border-slate-100">
                <div className="w-10 h-10 bg-secondary-light rounded-xl text-secondary flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-primary text-base mb-2">Local Phoenix Service</h4>
                <p className="text-xs text-neutral-muted leading-relaxed font-medium">
                  Deeply familiar with local Phoenix neighborhoods and major hospital systems.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white p-6 rounded-2xl card-shadow border border-slate-100">
                <div className="w-10 h-10 bg-secondary-light rounded-xl text-secondary flex items-center justify-center mb-4">
                  <Accessibility className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-primary text-base mb-2">Mobility Support</h4>
                <p className="text-xs text-neutral-muted leading-relaxed font-medium">
                  Specialized solutions designed to safely handle non-emergency ambulatory and mobility challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Driver Hiring Section with ID illustration */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-[#071324] opacity-95 z-0" />
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl z-0" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Driver Badge recruitment visual */}
            <div className="relative mx-auto w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-primary-light/40 p-2 flex items-center justify-center">
              <Image
                src="/images/driver-hiring.svg"
                alt="KMM Driver Recruitment Identification Badge"
                width={420}
                height={315}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>

            {/* Hiring Details Content */}
            <div className="flex flex-col space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/15 px-3 py-1 rounded-full self-start">
                We&apos;re Hiring Drivers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Join KMM Transport Services LLC as a Driver
              </h2>
              <p className="text-base text-slate-300 leading-relaxed font-medium">
                KMM Transport Services LLC is looking for dependable, caring, and professional drivers to help provide safe non-emergency medical transportation for patients, seniors, and individuals with mobility needs across Phoenix and surrounding areas.
              </p>
              
              <ul className="space-y-3.5">
                {[
                  'Flexible driving opportunities',
                  'Meaningful work helping patients and seniors',
                  'Professional and respectful work environment',
                  'Local Phoenix-based transportation company',
                  'Opportunity to support healthcare access in the community',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 text-accent shrink-0 mt-0.5 flex items-center justify-center bg-accent/10 rounded-full font-bold text-xs">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  href="/drivers"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-primary bg-accent hover:bg-white hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  Apply to Drive
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service Areas Section with Custom Map Card */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Map Visual (Left on desktop) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 order-2 lg:order-1">
              <div className="relative mx-auto w-full max-w-[450px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-slate-50 border border-slate-200/50 p-2 flex items-center justify-center">
                <Image
                  src="/images/service-area-map.svg"
                  alt="KMM Transport Service Areas Map Phoenix Valley"
                  width={450}
                  height={337}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Service Areas Details (Right on desktop) */}
            <div className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-secondary bg-secondary-light px-3 py-1 rounded-full inline-block self-start">
                Our Locations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Serving Phoenix &amp; Nearby Areas
              </h2>
              <p className="text-base text-neutral-muted leading-relaxed font-medium">
                We proudly provide NEMT transport solutions throughout the Phoenix metropolitan area and all surrounding valley cities. Our drivers are local residents who know the quickest routes to valley medical systems.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SERVICE_AREAS.map((area) => (
                  <div
                    key={area}
                    className="bg-slate-50 border border-slate-200/40 rounded-xl p-3 flex items-center gap-2.5 transition-colors hover:bg-secondary-light hover:border-secondary/20 group"
                  >
                    <Compass className="w-4 h-4 text-secondary shrink-0 group-hover:rotate-45 transition-transform duration-500" />
                    <span className="font-bold text-xs sm:text-sm text-primary">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Reusable Final CTA Section */}
      <CTASection />
    </>
  );
}
