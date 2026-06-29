import React from 'react';
import type { Metadata } from 'next';
import { Shield, Clock, Heart, Users, CalendarCheck } from 'lucide-react';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import CTASection from '@/components/common/CTASection';

export const metadata: Metadata = {
  title: 'About KMM Transport Services LLC | Medical Transportation Phoenix',
  description: 'Learn about the mission, values, and dedication of KMM Transport Services LLC. We provide safe, reliable NEMT services in Phoenix, AZ.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Safety',
      description: 'Prioritizing passenger wellbeing above all. Our drivers are trained in safe loading, transport, and defensive driving techniques.',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Reliability',
      description: 'Ensuring consistent, on-time arrivals. We track routes and schedule buffer times so you never miss an appointment.',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: 'Compassion',
      description: 'Providing care with a friendly, helpful attitude. We understand that medical transportation can be stressful and offer a helping hand.',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: 'Respect',
      description: 'Treating every individual with dignity. We respect your physical needs, comfort preferences, and personal schedule constraints.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Timeliness',
      description: 'Being there when you expect us. Punctual pickup and efficient route coordination helps streamline clinic handoffs.',
      icon: <CalendarCheck className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <PageHero
        title="About KMM Transport Services"
        description="Compassionate, safe, and professional non-emergency medical transportation in the Phoenix valley."
      />

      {/* Intro Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full inline-block">
                Who We Are
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Dedicated to Serving Our Phoenix Community
              </h2>
              <p className="text-base text-neutral-muted leading-relaxed font-medium">
                KMM Transport Services LLC is a Phoenix-based transportation company dedicated to providing safe, dependable, and compassionate non-emergency medical transportation. Our mission is simple: to help people reach the care they need with comfort, dignity, and reliability.
              </p>
              <p className="text-base text-neutral-muted leading-relaxed font-medium">
                We serve patients, seniors, individuals with mobility needs, families, assisted living facilities, healthcare providers, and community care organizations. From one-time appointments to recurring transportation needs, KMM Transport Services LLC is committed to making medical transportation easier and more dependable.
              </p>

              {/* Service highlights moved to a beautiful grid layout */}
              <div className="border-t border-slate-100 pt-6 mt-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-primary mb-4">Service Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Professional and respectful drivers',
                    'Familiar with Phoenix hospital networks',
                    'Dedicated door-to-door assistance',
                    'Customized schedules for outpatient clinics',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary-light flex items-center justify-center text-secondary shrink-0 font-bold text-[10px]">
                        ✓
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Premium Senior Care Illustration */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-slate-50 border border-slate-200/50 p-2 flex items-center justify-center">
                <Image
                  src="/images/senior-transport.svg"
                  alt="Compassionate Senior Medical Transport Assistance"
                  width={420}
                  height={315}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Banner Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-[#071324] opacity-95 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl z-0" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mx-auto shadow-inner">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-accent block">
            Our Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Our Mission
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-slate-100 max-w-3xl mx-auto leading-relaxed italic">
            &ldquo;To provide every passenger with respectful care, safe transportation, and reliable service from pickup to drop-off.&rdquo;
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-secondary bg-secondary-light px-3 py-1 rounded-full inline-block">
              Our Principles
            </span>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mt-3 mb-4">
              Our Core Values
            </h2>
            <p className="text-base text-neutral-muted leading-relaxed font-medium">
              We guide our daily decisions and interactions through five core principles that define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary-light flex items-center justify-center text-secondary mb-5 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">{v.title}</h3>
                <p className="text-sm text-neutral-muted leading-relaxed font-medium">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
