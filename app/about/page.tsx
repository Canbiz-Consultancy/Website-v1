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
              About
            </span>
          </div>

          <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mb-5">
            {aboutSection.eyebrow}
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mb-6">
            {aboutSection.headingPlain}{" "}
            <span className="text-brand-gold">{aboutSection.headingGold}</span>
          </h1>
          <div className="w-12 h-0.5 bg-brand-gold mb-8" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-16">
            {aboutSection.subtext}
          </p>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-brand-navy-border divide-x divide-brand-navy-border">
            {aboutStats.map((s, i) => (
              <div key={i} className="py-8 px-6 md:px-10">
                <p className="text-brand-gold text-3xl font-semibold mb-1">
                  {s.value}
                </p>
                <p className="text-gray-500 text-xs tracking-wide">{s.label}</p>
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
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">Our History</p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight mb-6">
              {aboutSection.storyHeadingPlain}{" "}
              <span className="text-brand-gold">{aboutSection.storyHeadingGold}</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mb-8" />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {aboutSection.storyPara1}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-10">
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
      <section id="mission-values" className="bg-brand-surface py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">Purpose & Principles</p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight">
              What <span className="text-brand-gold">drives us</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {aboutPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="bg-white p-8 group hover:bg-brand-navy transition-colors duration-300 cursor-default">
                  <div className="w-10 h-10 border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold/60 transition-colors mb-6">
                    <Icon size={18} className="text-brand-gold" weight="light" />
                  </div>
                  <h3 className="text-brand-navy text-sm font-semibold mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                    {pillar.text}
                  </p>
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
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">The Minds Behind Canbiz</p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight">
              Our <span className="text-brand-gold">Leadership</span> Team
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5 mb-6" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <p className="text-white text-xs leading-relaxed">{leader.description}</p>
                  </div>
                </div>
                <h3 className="text-brand-navy text-base font-semibold group-hover:text-brand-gold transition-colors duration-300">
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
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">Growth & Milestones</p>
            <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
              Our <span className="text-brand-gold">Journey</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-navy-border relative">
            {aboutJourney.map((item, i) => (
              <div key={i} className="bg-brand-navy-mid p-8 lg:p-10 group hover:bg-brand-navy-light transition-colors duration-500">
                <span className="text-brand-gold/20 text-5xl font-semibold block mb-4 group-hover:text-brand-gold/40 transition-colors duration-300">
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
      <section className="bg-brand-surface py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            Get in touch
          </p>
          <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight mb-5">
            Ready to shape the future of your enterprise?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-prose mx-auto mb-10">
            Whether you're looking to transform your organization, build your
            brand, or develop the next generation of leaders — Canbiz is your
            trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-brand-navy text-white px-10 py-3.5 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 flex items-center gap-2"
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
      </section>

      <Footer />
    </div>
  );
}
