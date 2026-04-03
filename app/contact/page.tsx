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
    <div className="min-h-screen bg-[#FDFDFD] text-brand-navy font-sans selection:bg-brand-gold/30">
      <Navbar />
      <div className="h-14 md:h-20" />

      {/* ── Hero Section ──────────────────────────────────────────────────────── */}
      <section className="relative isolate px-6 md:px-16 pt-32 md:pt-40 pb-16 overflow-hidden h-[600px] lg:h-[650px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
             src="https://images.unsplash.com/photo-1595856903272-97b63f25c777?auto=format&fit=crop&q=80&w=1920" 
             alt="Doha Business District" 
             className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Gradient Overlay for Legibility */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-navy via-brand-navy/88 to-brand-navy/35" />
        <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-[#07101d] to-transparent" />

        <div className="max-w-[1200px] mx-auto relative z-10 w-full h-full flex flex-col justify-start">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 md:mb-12">
            <Link
              href="/"
              className="text-white/70 hover:text-white text-[11px] tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={11} />
              Home
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <span className="text-white/60 text-[11px] tracking-widest uppercase">
              Contact
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-12 lg:gap-20 items-end">
            <div>
              <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.28em] uppercase font-bold mb-4 md:mb-6">
                {contactSection.eyebrow}
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.03em] max-w-[900px] mb-4 md:mb-6">
                {contactSection.headingPlain} <span className="text-brand-gold">{contactSection.headingGold}</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg lg:text-[22px] leading-[1.7] max-w-[680px] font-light">
                {contactSection.subtext}
              </p>
            </div>
            <div className="hidden lg:block border-l border-white/15 pl-8 pb-2">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Firm</p>
              <p className="text-white text-xl leading-tight font-light mb-8">Canbiz Conulstancy</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Positioning</p>
              <p className="text-sm leading-7 text-gray-300">
                A disciplined advisory platform built for long-term institutional impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Information & Form ─────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Office Information */}
          <div className="lg:w-1/3 shrink-0">
            <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-6">Get in Touch</h2>
            <h3 className="mb-8 text-2xl md:text-3xl font-semibold leading-snug max-w-[280px]">
              Let's connect.
            </h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-black text-sm font-medium mb-2">Email</p>
                <a href="mailto:info@canbizconsultancy.com" className="text-black text-lg hover:text-brand-navy transition-colors">info@canbizconsultancy.com</a>
              </div>
              
              <div>
                <p className="text-black text-sm font-medium mb-2">Phone</p>
                <a href={`tel:${contactSection.office.phone.replace(/\\s/g, '')}`} className="text-black text-lg hover:text-brand-navy transition-colors">{contactSection.office.phone}</a>
              </div>
              
              <div>
                <p className="text-black text-sm font-medium mb-2">Address</p>
                <p className="text-gray-600 text-sm leading-relaxed">{contactSection.office.address}</p>
                <p className="text-gray-500 text-sm mt-1">{contactSection.office.city}, {contactSection.office.country}</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-2/3">
            <div className="mb-16">
              <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-6">Contact Us</h2>
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight max-w-[600px]">
                Begin your <span className="text-brand-gold">transformation</span>
              </h3>
              <p className="text-gray-500 text-sm leading-7 max-w-[500px] mt-4">
                Share your vision with us, and let's explore how strategic advisory can accelerate your organization's growth and operational excellence.
              </p>
            </div>

            <div className="border-t border-black/10 pt-10">
              {success ? (
                <div className="bg-brand-navy p-16 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-5 text-[150px] leading-none font-serif">&ldquo;</div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-brand-gold/20 flex items-center justify-center rounded-full mx-auto mb-8">
                      <ArrowRightIcon size={28} className="text-brand-gold -rotate-45" weight="bold" />
                    </div>
                    <h4 className="text-white text-3xl font-light mb-4">Connection Established</h4>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-[600px]">
                      Thank you for your interest in Canbiz Advisory. Our team has received your message and will respond within 24 business hours to discuss your strategic needs.
                    </p>
                    <button 
                      onClick={() => setSuccess(false)}
                      className="text-brand-gold text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors border border-brand-gold px-8 py-4 hover:bg-brand-gold hover:text-brand-navy"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400 block mb-3">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#F3F4F6] border border-gray-200 px-4 py-4 text-sm text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400 block mb-3">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#F3F4F6] border border-gray-200 px-4 py-4 text-sm text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phoneNumber" className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400 block mb-3">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phoneNumber" 
                        name="phoneNumber" 
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full bg-[#F3F4F6] border border-gray-200 px-4 py-4 text-sm text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400 block mb-3">
                        Company / Organization
                      </label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-[#F3F4F6] border border-gray-200 px-4 py-4 text-sm text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400 block mb-3">
                      Message *
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#F3F4F6] border border-gray-200 px-4 py-4 text-sm text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-black/10">
                    <div>
                      <p className="text-[10px] text-gray-400 leading-loose max-w-[400px] mb-2">
                        By submitting this form, you acknowledge that you have read and agree to our Privacy Policy.
                      </p>
                      <p className="text-[10px] text-gray-400 leading-loose">
                        We respect your privacy and will never share your information with third parties.
                      </p>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-brand-navy text-white text-sm font-bold px-10 py-4 flex items-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"} 
                      {!isSubmitting && <ArrowRightIcon size={14} />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
