'use client';

import React, { useState } from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
  Briefcase,
  FileText,
  CheckCircle2,
  Calendar,
  AlertCircle
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';

export default function DriversPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cityArea: '',
    hasLicense: 'yes',
    hasAvailability: 'yes',
    comfortableAssisting: 'yes',
    hasExperience: 'no',
    startDate: '',
    preferredSchedule: 'Full-Time',
    message: '',
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
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <>
      <PageHero
        title="Apply to Drive"
        description="Join KMM Transport Services LLC. We are looking for responsible, compassionate drivers to support local healthcare access across the Phoenix valley."
      />

      <section className="py-20 bg-slate-50 border-b border-slate-100 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Requirements & Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm flex-grow">
                <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full inline-block mb-4">
                  Join Our Team
                </span>
                <h3 className="font-extrabold text-xl text-primary mb-3">Why Drive with KMM?</h3>
                <p className="text-sm text-neutral-muted leading-relaxed mb-6 font-medium">
                  At KMM Transport Services LLC, our drivers are the heartbeat of our company. You do more than drive; you provide security, respect, and independence for seniors, patients, and those with mobility challenges.
                </p>
                
                <h4 className="font-extrabold text-xs uppercase tracking-wider text-primary mb-3">Requirements:</h4>
                <ul className="space-y-3">
                  {[
                    'Clean driving record & background checks',
                    'Valid Arizona Driver\'s License',
                    'Caring, patient, and respectful personality',
                    'Familiarity with Phoenix area navigation',
                    'Pass drug and physical screenings',
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-2.5 text-xs text-neutral-dark font-semibold">
                      <span className="w-4 h-4 rounded-full bg-secondary-light text-secondary flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3">
                <h4 className="font-bold text-sm text-accent uppercase tracking-wider flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-accent" />
                  <span>Meaningful Work</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  We support local communities by ensuring patients can reach clinical appointments safely. If you love helping people, you will find this work deeply rewarding.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 card-shadow shadow-sm h-full flex flex-col justify-center">
                {submitted ? (
                  <div className="text-center py-10 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-primary">Application Submitted!</h3>
                      <p className="text-sm text-neutral-muted font-medium leading-relaxed">
                        Thank you, <strong className="text-primary">{formData.fullName}</strong>. We have received your driver application info.
                      </p>
                    </div>
                    
                    {/* Visual Application Summary checklist */}
                    <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 text-left text-xs text-neutral-muted space-y-3 font-semibold max-w-md mx-auto">
                      <p className="font-bold text-primary border-b border-slate-200 pb-1.5 uppercase tracking-wider">Application Summary</p>
                      <div className="flex justify-between">
                        <span>Preferred Schedule:</span>
                        <span className="text-primary">{formData.preferredSchedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Available Start Date:</span>
                        <span className="text-primary">{formData.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>AZ Driver&apos;s License:</span>
                        <span className="text-primary">{formData.hasLicense === 'yes' ? 'Yes' : 'No'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Comfort Assisting Mobility:</span>
                        <span className="text-primary">{formData.comfortableAssisting === 'yes' ? 'Yes' : 'No'}</span>
                      </div>
                      
                      <div className="pt-3 border-t border-slate-200 text-[10px] text-slate-400 italic leading-relaxed">
                        Notice: Our recruitment office reviews applications. Qualified applicants will be contacted at <strong className="text-primary">{formData.phone}</strong> for next steps.
                      </div>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 font-bold text-sm text-primary hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-extrabold text-primary mb-1">Driver Application</h3>
                      <p className="text-xs text-neutral-muted font-semibold">
                        Fill out this preliminary form to apply. Fields marked with * are required.
                      </p>
                    </div>

                    {/* Form Block 1: Personal Details */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-secondary border-b border-slate-100 pb-1.5">
                        1. Personal Details &amp; Availability
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="flex flex-col space-y-1.5 sm:col-span-2">
                          <label htmlFor="fullName" className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
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
                            placeholder="First and last name"
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
                            placeholder="e.g. driver@example.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                          />
                        </div>

                        {/* City/Area */}
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="cityArea" className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>City / Area of Residence *</span>
                          </label>
                          <input
                            type="text"
                            id="cityArea"
                            name="cityArea"
                            required
                            value={formData.cityArea}
                            onChange={handleChange}
                            placeholder="e.g., Phoenix, Glendale"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                          />
                        </div>

                        {/* Start Date */}
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="startDate" className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>Available Start Date *</span>
                          </label>
                          <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            required
                            value={formData.startDate}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                          />
                        </div>

                        {/* Preferred Schedule */}
                        <div className="flex flex-col space-y-1.5 sm:col-span-2">
                          <label htmlFor="preferredSchedule" className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>Preferred Schedule *</span>
                          </label>
                          <select
                            id="preferredSchedule"
                            name="preferredSchedule"
                            value={formData.preferredSchedule}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white transition-all font-medium text-slate-800"
                          >
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Weekdays">Weekdays Only</option>
                            <option value="Weekends">Weekends Only</option>
                            <option value="Flexible">Flexible Schedule</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Form Block 2: Licensing & Experience */}
                    <div className="space-y-4 pt-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-secondary border-b border-slate-100 pb-1.5">
                        2. Licensing &amp; Qualifications
                      </h4>
                      <div className="space-y-4">
                        {/* License check */}
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-primary">
                            Do you have a valid driver&apos;s license? *
                          </label>
                          <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
                            <label className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                name="hasLicense"
                                value="yes"
                                checked={formData.hasLicense === 'yes'}
                                onChange={handleChange}
                                className="w-4 h-4 text-secondary focus:ring-secondary"
                              />
                              Yes
                            </label>
                            <label className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                name="hasLicense"
                                value="no"
                                checked={formData.hasLicense === 'no'}
                                onChange={handleChange}
                                className="w-4 h-4 text-secondary focus:ring-secondary"
                              />
                              No
                            </label>
                          </div>
                        </div>

                        {/* Availability check */}
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-primary">
                            Do you have reliable availability? *
                          </label>
                          <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
                            <label className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                name="hasAvailability"
                                value="yes"
                                checked={formData.hasAvailability === 'yes'}
                                onChange={handleChange}
                                className="w-4 h-4 text-secondary focus:ring-secondary"
                              />
                              Yes
                            </label>
                            <label className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                name="hasAvailability"
                                value="no"
                                checked={formData.hasAvailability === 'no'}
                                onChange={handleChange}
                                className="w-4 h-4 text-secondary focus:ring-secondary"
                              />
                              No
                            </label>
                          </div>
                        </div>

                        {/* Assist check */}
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-primary">
                            Are you comfortable assisting seniors or passengers with mobility needs? *
                          </label>
                          <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
                            <label className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                name="comfortableAssisting"
                                value="yes"
                                checked={formData.comfortableAssisting === 'yes'}
                                onChange={handleChange}
                                className="w-4 h-4 text-secondary focus:ring-secondary"
                              />
                              Yes
                            </label>
                            <label className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                name="comfortableAssisting"
                                value="no"
                                checked={formData.comfortableAssisting === 'no'}
                                onChange={handleChange}
                                className="w-4 h-4 text-secondary focus:ring-secondary"
                              />
                              No
                            </label>
                          </div>
                        </div>

                        {/* Exp check */}
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-primary">
                            Do you have previous transportation, healthcare, caregiving, or customer service experience? *
                          </label>
                          <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
                            <label className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                name="hasExperience"
                                value="yes"
                                checked={formData.hasExperience === 'yes'}
                                onChange={handleChange}
                                className="w-4 h-4 text-secondary focus:ring-secondary"
                              />
                              Yes
                            </label>
                            <label className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                name="hasExperience"
                                value="no"
                                checked={formData.hasExperience === 'no'}
                                onChange={handleChange}
                                className="w-4 h-4 text-secondary focus:ring-secondary"
                              />
                              No
                            </label>
                          </div>
                        </div>

                        {/* Experience Message */}
                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-slate-400" />
                            <span>Brief message / previous experience</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Summarize your interest and relevant work experience"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-medium text-slate-800 focus:bg-white bg-slate-50/50"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="bg-amber-50 border-l-4 border-accent p-3 rounded-r-xl text-[10px] text-slate-500 font-semibold leading-relaxed mb-4 flex gap-2">
                        <AlertCircle className="w-4 h-4 text-accent shrink-0" />
                        <span>Notice: Submission of this form does not guarantee employment. KMM Transport Services LLC may contact qualified applicants for additional screening and next steps.</span>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-secondary hover:bg-primary disabled:bg-slate-400 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        {loading ? 'Submitting Application...' : 'Submit Driver Application'}
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
