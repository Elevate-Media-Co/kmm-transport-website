'use client';

import React, { useState } from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { CONTACT_INFO } from '@/config/site';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 1000);
  };

  // Clean links
  const hasPhone = CONTACT_INFO.phone && !CONTACT_INFO.phone.includes('[Add');
  const telLink = hasPhone ? `tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}` : '#';
  const hasEmail = CONTACT_INFO.email && !CONTACT_INFO.email.includes('[Add');
  const mailLink = hasEmail ? `mailto:${CONTACT_INFO.email}` : '#';

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have questions about scheduling a ride or partnership opportunities? Reach out to KMM Transport Services LLC today."
      />

      <section className="py-20 bg-slate-50 border-b border-slate-100 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Organization details & Map illustration */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 flex-grow">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full inline-block mb-3">
                    Office Details
                  </span>
                  <h3 className="font-extrabold text-xl text-primary">{CONTACT_INFO.name}</h3>
                  <p className="text-xs text-neutral-muted mt-1 font-bold">Non-Emergency Medical Transportation</p>
                </div>

                <div className="space-y-4 text-sm text-neutral-dark font-semibold">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-secondary-light flex items-center justify-center text-secondary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Our Address</p>
                      <p className="mt-0.5">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-secondary-light flex items-center justify-center text-secondary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Phone Number</p>
                      <a href={telLink} className="text-secondary font-bold hover:underline block mt-0.5">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-secondary-light flex items-center justify-center text-secondary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Email Address</p>
                      <a href={mailLink} className="text-secondary font-bold hover:underline block mt-0.5 break-all">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service map thumbnail indicator */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <p className="text-xs font-bold text-primary uppercase">Service Area Coverage</p>
                  <div className="rounded-2xl overflow-hidden border border-slate-200/60 shadow-inner bg-slate-50 p-1">
                    <Image 
                      src="/images/service-area-map.svg" 
                      alt="KMM Valley Coverage Map Preview" 
                      width={300}
                      height={200}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>

                {/* Emergency banner inside details */}
                <div className="pt-4 border-t border-slate-100 flex gap-2.5 items-start text-xs text-neutral-muted leading-relaxed font-semibold">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-red-600 font-extrabold block uppercase tracking-wider">Emergency Alert</span>
                    We do not provide emergency services. If you require urgent medical attention or an ambulance, please call 911 immediately.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 card-shadow shadow-sm h-full flex flex-col justify-center">
                {submitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-primary">Message Sent!</h3>
                      <p className="text-sm text-neutral-muted font-medium max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-primary">{formData.name}</strong>. We have received your inquiry and our team will get back to you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 font-bold text-sm text-primary hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-extrabold text-primary mb-1">Send a Message</h3>
                      <p className="text-xs text-neutral-muted font-semibold">
                        Fill out the form below to reach our Phoenix administrative staff.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Name */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          <span>Phone Number *</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. (602) 555-0199"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span>Email Address *</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. name@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                        />
                      </div>

                      {/* Message */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-slate-400" />
                          <span>Your Message *</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Explain what information or coordination you are seeking"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-secondary hover:bg-primary disabled:bg-slate-400 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
