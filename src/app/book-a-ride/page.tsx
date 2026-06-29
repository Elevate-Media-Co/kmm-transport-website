'use client';

import React, { useState } from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Navigation,
  Calendar,
  Clock,
  Accessibility,
  FileText,
  AlertTriangle,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';

export default function BookARidePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickupAddress: '',
    dropoffAddress: '',
    appointmentDate: '',
    appointmentTime: '',
    transportType: 'Ambulatory',
    rideFrequency: 'one-time',
    specialInstructions: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <>
      <PageHero
        title="Book a Ride"
        description="Request non-emergency medical transportation. Complete the request form below and our dispatch coordinator will contact you to confirm availability."
      />

      <section className="py-20 bg-slate-50 border-b border-slate-100 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Emergency Alert Banner */}
          <div className="bg-amber-50 border-l-4 border-accent p-5 rounded-r-2xl shadow-sm mb-10 flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
            <div>
              <h4 className="font-extrabold text-sm text-primary uppercase tracking-wider mb-1">
                Non-Emergency Services Only
              </h4>
              <p className="text-xs sm:text-sm text-neutral-muted leading-relaxed font-semibold">
                KMM Transport Services LLC provides non-emergency transportation services only. We do not provide emergency ambulance services or medical treatment during transportation. <span className="text-red-600 font-extrabold underline">For medical emergencies, please call 911 immediately.</span>
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-10 card-shadow shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-primary">Ride Request Submitted!</h3>
                  <p className="text-sm sm:text-base text-neutral-muted font-medium max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong className="text-primary">{formData.fullName}</strong>. We have received your request for transportation scheduled on <strong className="text-primary">{formData.appointmentDate}</strong>.
                  </p>
                </div>
                
                {/* Visual Confirmation summary box */}
                <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 text-xs text-neutral-muted font-semibold">
                  <p className="font-extrabold text-sm text-primary border-b border-slate-200 pb-1.5 uppercase tracking-wider">Request Details Summary</p>
                  <div className="flex justify-between">
                    <span>Passenger Name:</span>
                    <span className="text-primary">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pickup Address:</span>
                    <span className="text-primary truncate max-w-[200px]">{formData.pickupAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Drop-off Address:</span>
                    <span className="text-primary truncate max-w-[200px]">{formData.dropoffAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date &amp; Time:</span>
                    <span className="text-primary">{formData.appointmentDate} at {formData.appointmentTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transport Type:</span>
                    <span className="text-primary">{formData.transportType}</span>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-200 text-[10px] text-slate-400 italic leading-relaxed">
                    Please note: Our dispatch team will call you at <strong className="text-primary">{formData.phone}</strong> to confirm scheduling and vehicle availability.
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 hover:border-slate-300 font-bold text-sm text-primary hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-primary mb-1">Request a Ride</h3>
                  <p className="text-xs sm:text-sm text-neutral-muted font-semibold">
                    Rides are subject to driver and vehicle availability. Please submit requests at least 24 hours in advance if possible.
                  </p>
                </div>

                {/* Section 1: Contact Info */}
                <div className="space-y-4">
                  <h4 className="text-sm font-extrabold uppercase tracking-widest text-secondary border-b border-slate-100 pb-2">
                    1. Passenger Contact Information
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter passenger or coordinator name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
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
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
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
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                      />
                    </div>

                    {/* Ride Frequency */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="rideFrequency" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Ride Frequency *</span>
                      </label>
                      <select
                        id="rideFrequency"
                        name="rideFrequency"
                        value={formData.rideFrequency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white transition-all font-medium text-slate-800"
                      >
                        <option value="one-time">One-time Ride</option>
                        <option value="recurring">Recurring Rides (Weekly/Monthly)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Addresses */}
                <div className="space-y-4">
                  <h4 className="text-sm font-extrabold uppercase tracking-widest text-secondary border-b border-slate-100 pb-2">
                    2. Location Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Pickup Address */}
                    <div className="flex flex-col space-y-2 sm:col-span-2">
                      <label htmlFor="pickupAddress" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>Pickup Address *</span>
                      </label>
                      <input
                        type="text"
                        id="pickupAddress"
                        name="pickupAddress"
                        required
                        value={formData.pickupAddress}
                        onChange={handleChange}
                        placeholder="Street address, City, ZIP (e.g., Phoenix, AZ)"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                      />
                    </div>

                    {/* Drop-off Address */}
                    <div className="flex flex-col space-y-2 sm:col-span-2">
                      <label htmlFor="dropoffAddress" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <Navigation className="w-3.5 h-3.5 text-slate-400" />
                        <span>Drop-off Address *</span>
                      </label>
                      <input
                        type="text"
                        id="dropoffAddress"
                        name="dropoffAddress"
                        required
                        value={formData.dropoffAddress}
                        onChange={handleChange}
                        placeholder="Doctor office, hospital, clinic, or home address"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Time & Preferences */}
                <div className="space-y-4">
                  <h4 className="text-sm font-extrabold uppercase tracking-widest text-secondary border-b border-slate-100 pb-2">
                    3. Date, Time &amp; Mobility Options
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Appointment Date */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="appointmentDate" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <CalendarCheck className="w-3.5 h-3.5 text-slate-400" />
                        <span>Appointment Date *</span>
                      </label>
                      <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        required
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                      />
                    </div>

                    {/* Appointment Time */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="appointmentTime" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Appointment Time *</span>
                      </label>
                      <input
                        type="time"
                        id="appointmentTime"
                        name="appointmentTime"
                        required
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                      />
                    </div>

                    {/* Transport Type */}
                    <div className="flex flex-col space-y-2 sm:col-span-2">
                      <label htmlFor="transportType" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <Accessibility className="w-3.5 h-3.5 text-slate-400" />
                        <span>Type of Transportation Needed *</span>
                      </label>
                      <select
                        id="transportType"
                        name="transportType"
                        value={formData.transportType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white transition-all font-medium text-slate-800"
                      >
                        <option value="Ambulatory">Ambulatory (Able to walk with/without assistance)</option>
                        <option value="Wheelchair">Wheelchair (Requires wheelchair-accessible vehicle)</option>
                        <option value="Senior Transportation">Senior Transportation</option>
                        <option value="Hospital Discharge">Hospital Discharge</option>
                        <option value="Dialysis">Dialysis Appointment</option>
                        <option value="Therapy / Rehab">Therapy / Rehabilitation</option>
                        <option value="Other">Other (Specify in Instructions)</option>
                      </select>
                    </div>

                    {/* Special Instructions */}
                    <div className="flex flex-col space-y-2 sm:col-span-2">
                      <label htmlFor="specialInstructions" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span>Special Instructions / Mobility Notes</span>
                      </label>
                      <textarea
                        id="specialInstructions"
                        name="specialInstructions"
                        rows={4}
                        value={formData.specialInstructions}
                        onChange={handleChange}
                        placeholder="Add any specific pickup details, gate codes, oxygen support requirements, or cognitive details our drivers should know"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-secondary hover:bg-primary disabled:bg-slate-400 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing Request...
                      </>
                    ) : (
                      'Request Transportation'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
