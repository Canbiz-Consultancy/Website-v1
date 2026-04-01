"use client";

import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TrainingSection } from "../components/TrainingSection";
import {
  aboutSection,
  aboutPillars,
  aboutStats,
  aboutLeadership,
  aboutJourney,
} from "../constants/content";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-brand-navy font-sans selection:bg-brand-gold/30">
      <Navbar />
      <div className="h-14 md:h-20" />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative isolate px-6 md:px-16 pt-28 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/88 to-brand-navy/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07101d] to-transparent" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-12">
            <Link
              href="/"
              className="text-white/70 hover:text-white text-[11px] tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={11} />
              Home
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <span className="text-white/60 text-[11px] tracking-widest uppercase">
              About Us
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-14 lg:gap-20 items-end">
            <div>
              <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.28em] uppercase font-bold mb-6">
                {aboutSection.eyebrow}
              </p>
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.03em] max-w-[900px] mb-6">
                {aboutSection.headingPlain}{" "}
                <span className="text-brand-gold">{aboutSection.headingGold}</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-[22px] leading-[1.7] max-w-[680px] font-light">
                {aboutSection.subtext}
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

          {/* Stats strip */}
          <div className="mt-16 md:mt-24 border-t border-white/10 pt-10 grid grid-cols-2 md:grid-cols-4 gap-10">
            {aboutStats.map((s, i) => (
              <div key={i} className="border-l border-white/10 pl-6">
                 <p className="text-4xl md:text-5xl font-light text-brand-gold mb-3 tracking-tight">{s.value}</p>
                 <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story Section ─────────────────────────────────────────────────────── */}
      <section id="our-story" className="bg-white px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2 relative">
             <div className="relative aspect-[4/5] overflow-hidden">
               <img
                 src={aboutSection.image}
                 alt={aboutSection.imageAlt}
                 className="w-full h-full object-cover grayscale-[0.2]"
               />
             </div>
          </div>
          <div className="lg:w-1/2">
             <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-6">Our History</h2>
             <h3 className="mb-8 text-3xl md:text-4xl font-semibold leading-tight max-w-[600px]">
               {aboutSection.storyHeadingPlain}{" "}
               <span className="text-brand-gold">{aboutSection.storyHeadingGold}</span>
             </h3>
             <div className="space-y-6 text-gray-500 text-sm leading-7 mb-10">
               <p>{aboutSection.storyPara1}</p>
               <p>{aboutSection.storyPara2}</p>
             </div>
             
             <a 
               href="#leadership" 
               onClick={(e) => {
                 e.preventDefault();
                 const el = document.getElementById("leadership");
                 if (el) {
                   const y = el.getBoundingClientRect().top + window.scrollY - 56;
                   window.scrollTo({ top: y, behavior: "smooth" });
                 }
               }}
               className="inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-4 text-xs font-bold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 uppercase tracking-widest"
             >
               Meet our experts <ArrowRightIcon size={14} />
             </a>
          </div>
        </div>
      </section>

      {/* ── Core Values Strip ─────────────────────────────────────────────────── */}
      <section id="mission-values" className="bg-[#F3F4F6] px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
             <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-6">Purpose & Principles</h2>
             <h3 className="mb-4 text-3xl md:text-4xl font-semibold leading-tight max-w-[280px]">
               What <span className="text-brand-gold">drives us.</span>
             </h3>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-black/10">
            {aboutPillars.map((pillar, i) => {

              return (
                <div key={i} className="relative border-b border-black/10 py-10 md:py-12 md:pr-8">
                  <h4 className="text-[22px] font-semibold mb-3 tracking-[-0.02em] leading-snug">{pillar.title}</h4>
                  <p className="text-sm text-gray-500 leading-7 max-w-[420px]">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Employee Training ─────────────────────────────────────────────────── */}
      <TrainingSection />

      {/* ── Leadership Team ───────────────────────────────────────────────────── */}
      <section id="leadership" className="bg-white px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
             <div>
               <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-6">The Minds Behind Canbiz</h2>
               <h3 className="text-3xl md:text-4xl font-semibold leading-tight max-w-[600px]">
                 Our <span className="text-brand-gold">Leadership</span> Team
               </h3>
             </div>
             <p className="text-sm text-gray-500 leading-7 max-w-[400px]">
               A diverse collective of seasoned consultants, educators, technologists, and strategists united by a passion for creating real impact.
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {aboutLeadership.map((leader, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#F3F4F6]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/90 text-xs leading-relaxed">{leader.description}</p>
                  </div>
                </div>
                <div className="border-t border-black/10 pt-4">
                  <h3 className="text-lg font-semibold tracking-[-0.01em] mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                    {leader.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Journey (Timeline) ────────────────────────────────────────────── */}
      <section id="journey" className="bg-brand-navy text-white px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
             <h2 className="text-[11px] text-brand-gold tracking-[0.2em] font-bold uppercase mb-6">Growth & Milestones</h2>
             <h3 className="mb-4 text-3xl md:text-4xl font-semibold leading-tight sticky top-32">
               Our <span className="text-brand-gold">Journey</span>
             </h3>
          </div>
          <div className="lg:w-2/3">
            <div className="border-l border-white/10 pl-8 md:pl-10 flex flex-col gap-12">
              {aboutJourney.map((item, i) => (
                <div key={i} className="relative flex gap-6 md:gap-10 items-start group">
                   <div className="text-4xl md:text-5xl font-light text-white/20 group-hover:text-brand-gold transition-colors tracking-tighter w-24 shrink-0 mt-[-4px]">
                     {item.year}
                   </div>
                   <div className="w-full flex-1 pb-12 border-b border-white/10">
                     <h4 className="text-[22px] font-semibold mb-3 tracking-[-0.02em]">{item.title}</h4>
                     <p className="text-sm text-gray-400 leading-7 max-w-[560px]">{item.description}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#F3F4F6] px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
             <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-6">Get in touch</h2>
             <h3 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
               Ready to shape the future of your enterprise?
             </h3>
             <p className="text-gray-500 text-sm leading-relaxed max-w-[600px] mb-10">
               Whether you're looking to transform your organization, build your
               brand, or develop the next generation of leaders - Canbiz is your
               trusted partner.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
               <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-brand-navy text-white px-8 py-4 text-xs font-bold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 uppercase tracking-widest"
               >
                  Contact Us <ArrowRightIcon size={14} />
               </a>
               <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 border border-black/10 px-8 py-4 text-xs font-bold hover:bg-white transition-all duration-300 uppercase tracking-widest text-brand-navy"
               >
                  View Services
               </Link>
             </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
