"use client";

import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { contactSection } from "../constants/content";
import {
  ArrowLeftIcon,
  MapPinIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { submitContactForm } from "../lib/strapi";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await submitContactForm(formData);
      
      if (response) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          company: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-14" />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy pt-20 pb-0 px-6 md:px-16 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(var(--color-brand-gold)_1px,transparent_1px),linear-gradient(90deg,var(--color-brand-gold)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="text-brand-gold/60 hover:text-brand-gold text-xs tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={11} />
              Home
            </Link>
            <span className="text-brand-gold/30 text-xs">/</span>
            <span className="text-brand-gold/50 text-xs tracking-widest uppercase">
              Contact
            </span>
          </div>

          <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mb-5">
            {contactSection.eyebrow}
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight md:max-w-md lg:max-w-lg xl:max-w-2xl mb-6">
            {contactSection.headingPlain}{" "}
            <span className="text-brand-gold">{contactSection.headingGold}</span>
          </h1>
          <div className="w-12 h-0.5 bg-brand-gold mb-8" />
          <p className="text-gray-400 text-sm leading-relaxed md:max-w-md lg:max-w-lg xl:max-w-2xl mb-20">
            {contactSection.subtext}
          </p>
        </div>
      </section>

      {/* ── Content & Form ────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-24 px-6 md:px-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div>
                <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">Visit Us</p>
                <h2 className="text-brand-navy text-3xl font-light leading-tight mb-6">
                  Our <span className="text-brand-gold">Office</span>
                </h2>
                <div className="w-12 h-0.5 bg-brand-gold mb-10" />

                <div className="bg-white border border-gray-100 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1080" 
                      alt="Dubai Skyline" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-brand-navy text-xl font-medium mb-1 group-hover:text-brand-gold transition-colors">{contactSection.office.city}</h3>
                    <p className="text-brand-gold text-xs tracking-widest uppercase mb-6">{contactSection.office.country}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 text-gray-500 text-sm">
                        <MapPinIcon size={18} className="text-brand-gold mt-1 shrink-0" weight="fill" />
                        <span className="leading-relaxed">{contactSection.office.address}</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <PhoneIcon size={18} className="text-brand-gold shrink-0" weight="fill" />
                        <a href={`tel:${contactSection.office.phone.replace(/\\s/g, '')}`} className="hover:text-brand-navy transition-colors">{contactSection.office.phone}</a>
                      </div>
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <EnvelopeSimpleIcon size={18} className="text-brand-gold shrink-0" weight="fill" />
                        <a href={`mailto:${contactSection.office.email}`} className="hover:text-brand-navy transition-colors">{contactSection.office.email}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Inquiries block to fill space */}
              <div className="bg-brand-navy p-8 border-t-2 border-gray-600">
                <h3 className="text-white text-lg font-light mb-4">Other Inquiries</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Careers</p>
                    <a href="mailto:careers@canbizconsultancy.com" className="text-brand-gold text-sm hover:text-white transition-colors">careers@canbizconsultancy.com</a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Media & Press</p>
                    <a href="mailto:media@canbizconsultancy.com" className="text-brand-gold text-sm hover:text-white transition-colors">media@canbizconsultancy.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-navy opacity-[0.02] bg-[linear-gradient(var(--color-brand-gold)_1px,transparent_1px),linear-gradient(90deg,var(--color-brand-gold)_1px,transparent_1px)] bg-[size:24px_24px]" />
                     
                <div className="mb-10 relative z-10">
                  <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">Send a Message</p>
                  <h2 className="text-brand-navy text-2xl font-light leading-tight">
                    How can we <span className="text-brand-gold">help?</span>
                  </h2>
                </div>

                {success ? (
                  <div className="bg-brand-navy p-10 text-center relative z-10">
                    <div className="w-12 h-12 bg-brand-gold/20 flex items-center justify-center rounded-full mx-auto mb-5">
                      <ArrowRightIcon size={20} className="text-brand-gold -rotate-45" weight="bold" />
                    </div>
                    <h3 className="text-white text-xl font-light mb-3">Message Received</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Thank you for reaching out to Canbiz. A member of our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setSuccess(false)}
                      className="text-brand-gold text-xs font-semibold uppercase tracking-widest hover:text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-brand-navy text-xs font-semibold uppercase tracking-wider block">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-brand-surface border border-gray-200 px-4 py-3.5 text-sm text-brand-navy focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-brand-navy text-xs font-semibold uppercase tracking-wider block">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-brand-surface border border-gray-200 px-4 py-3.5 text-sm text-brand-navy focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phoneNumber" className="text-brand-navy text-xs font-semibold uppercase tracking-wider block">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phoneNumber" 
                          name="phoneNumber" 
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="w-full bg-brand-surface border border-gray-200 px-4 py-3.5 text-sm text-brand-navy focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-brand-navy text-xs font-semibold uppercase tracking-wider block">Company / Organization</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-brand-surface border border-gray-200 px-4 py-3.5 text-sm text-brand-navy focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-brand-navy text-xs font-semibold uppercase tracking-wider block">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-brand-surface border border-gray-200 px-4 py-3.5 text-sm text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-brand-navy text-white text-sm font-semibold px-8 py-4 flex items-center justify-center gap-2 hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"} 
                      {!isSubmitting && <ArrowRightIcon size={14} />}
                    </button>
                    
                    <p className="text-[10px] text-gray-400 text-center leading-loose mt-4">
                      By submitting this form, you acknowledge that you have read and agree to our Privacy Policy.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
