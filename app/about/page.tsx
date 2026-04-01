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
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-14" />

      {/* -- Hero ---------------------------------------------------------------- */}
      <section className="relative isolate bg-brand-navy px-6 md:px-16 pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/88 to-brand-navy/35" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07101d] to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link
              href="/"
              className="text-white/70 hover:text-white text-[11px] tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={11} />
              Home
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <span className="text-white/60 text-[11px] tracking-widest uppercase">
              About
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-12 items-end">
            <div>
              <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.28em] uppercase mb-6">
                {aboutSection.eyebrow}
              </p>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.02em] max-w-3xl mb-6">
                {aboutSection.headingPlain}{" "}
                <span className="text-brand-gold">{aboutSection.headingGold}</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-7 max-w-2xl">
                {aboutSection.subtext}
              </p>
            </div>
            <div className="hidden lg:block border-l border-white/15 pl-8 pb-1">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Firm</p>
              <p className="text-white text-lg leading-7 font-light">
                A disciplined advisory platform built for long-term institutional impact.
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-12 border-t border-white/15 grid grid-cols-2 md:grid-cols-4">
            {aboutStats.map((s, i) => (
              <div key={i} className="py-8 px-6 md:px-10 border-l border-white/10 first:border-l-0">
                <p className="text-brand-gold text-3xl font-semibold mb-1">
                  {s.value}
                </p>
                <p className="text-white/60 text-xs tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story Section ─────────────────────────────────────────────────────── */}
      <section id="our-story" className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* The image container */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
              <img
                src={aboutSection.image}
                alt={aboutSection.imageAlt}
                className="w-full h-full object-cover"
              />

            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400 mb-3">Our History</p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight mb-6">
              {aboutSection.storyHeadingPlain}{" "}
              <span className="text-brand-gold">{aboutSection.storyHeadingGold}</span>
            </h2>
            <p className="text-gray-600 text-sm leading-7 mb-6">
              {aboutSection.storyPara1}
            </p>
            <p className="text-gray-600 text-sm leading-7 mb-10">
              {aboutSection.storyPara2}
            </p>
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
              className="inline-flex items-center gap-2 bg-brand-navy text-white text-sm font-semibold px-8 py-3.5 hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300"
            >
              Meet our experts <ArrowRightIcon size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Core Values Strip ─────────────────────────────────────────────────── */}
      <section id="mission-values" className="bg-[#F3F4F6] py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400 mb-3">Purpose & Principles</p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight">
              What <span className="text-brand-gold">drives us</span>
            </h2>
          </div>

          <div className="border-t border-black/10 grid grid-cols-1 md:grid-cols-2">
            {aboutPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="border-b border-black/10 px-6 md:px-8 py-8 md:py-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-brand-navy/15 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand-gold" weight="light" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.24em] text-gray-400 mb-2">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-brand-navy text-sm font-semibold mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Employee Training ─────────────────────────────────────────────────── */}
      <TrainingSection />

      {/* ── Leadership Team ───────────────────────────────────────────────────── */}
      <section id="leadership" className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400 mb-3">The Minds Behind Canbiz</p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight">
              Our <span className="text-brand-gold">Leadership</span> Team
            </h2>
            <p className="text-gray-500 text-sm leading-7 max-w-xl">
              A diverse collective of seasoned consultants, educators, technologists, and strategists united by a passion for creating real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutLeadership.map((leader, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-5">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <p className="text-white text-xs leading-relaxed">{leader.description}</p>
                  </div>
                </div>
                <h3 className="text-brand-navy text-base font-semibold">
                  {leader.name}
                </h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Journey (Timeline) ────────────────────────────────────────────── */}
      <section id="journey" className="bg-brand-navy py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/45 mb-4">Growth & Milestones</p>
            <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
              Our <span className="text-brand-gold">Journey</span>
            </h2>
          </div>

          <div className="border-t border-white/15 grid grid-cols-1 md:grid-cols-3">
            {aboutJourney.map((item, i) => (
              <div
                key={i}
                className="border-b border-white/10 md:border-b-0 md:border-l md:border-white/10 first:md:border-l-0 px-6 md:px-8 py-8 md:py-10"
              >
                <p className="text-white/40 text-[10px] uppercase tracking-[0.24em] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <span className="text-brand-gold/45 text-2xl font-semibold block mb-3">
                  {item.year}
                </span>
                <h3 className="text-white text-base font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#F3F4F6] px-6 md:px-16 py-20 md:py-24">
        <div className="max-w-6xl mx-auto border-t border-black/10 pt-14 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-12 items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400 mb-6">
                Get in touch
              </p>
              <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight mb-5">
                Ready to shape the future of your enterprise?
              </h2>
              <p className="text-gray-500 text-sm leading-7 max-w-2xl">
                Whether you're looking to transform your organization, build your
                brand, or develop the next generation of leaders - Canbiz is your
                trusted partner.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                className="bg-brand-navy text-white px-10 py-3.5 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Us <ArrowRightIcon size={14} />
              </a>
              <Link
                href="/services"
                className="text-gray-500 text-sm hover:text-brand-navy transition-colors flex items-center gap-1.5"
              >
                View Our Services <ArrowRightIcon size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



