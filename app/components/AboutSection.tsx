"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { aboutSection, aboutPillars, aboutStats } from "../constants/content";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-16">
      
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 md:mb-32">
        <div className="lg:w-1/3 shrink-0">
           <h2 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-6">{aboutSection.eyebrow}</h2>
           <h3 className="mb-4 text-2xl md:text-3xl text-black font-semibold leading-snug">
             {aboutSection.headingPlain} <span className="text-brand-gold">{aboutSection.headingGold}</span>
           </h3>
        </div>
        <div className="lg:w-2/3 border-t border-black/10 pt-6 md:pt-8 flex items-start">
          <p className="text-sm text-gray-600 leading-7 max-w-[600px]">
            {aboutSection.subtext}
          </p>
        </div>
      </div>

      {/* ── Image & Story ────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 md:mb-32">
        <div className="relative min-h-[400px]">
          <img
            src={aboutSection.image}
            alt={aboutSection.imageAlt}
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-brand-navy/5" />
        </div>
        <div className="flex flex-col justify-center border-l border-black/10 pl-8 md:pl-12 py-8">
          <h3 className="text-[22px] md:text-2xl text-black font-semibold mb-6 tracking-[-0.02em] leading-snug">
            {aboutSection.storyHeadingPlain}{" "}
            <span className="text-brand-gold">{aboutSection.storyHeadingGold}</span>
          </h3>
          <p className="text-sm text-gray-600 leading-7 mb-6">
            {aboutSection.storyPara1}
          </p>
          <p className="text-sm text-gray-600 leading-7">
            {aboutSection.storyPara2}
          </p>
        </div>
      </div>

      {/* ── Stats ────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-24 md:mb-32 border-t border-black/10 pt-16 md:pt-20">
        {aboutStats.map((s, i) => (
          <div key={i} className="border-l border-black/10 pl-6">
            <p className="text-4xl md:text-5xl font-light text-brand-navy mb-3 tracking-tight">{s.value}</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Pillars ──────────────────────────────────────────── */}
       <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 md:mb-32">
        <div className="lg:w-1/3 shrink-0">
           <h2 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-6">Values & Methods</h2>
           <h3 className="mb-4 text-2xl md:text-3xl text-black font-semibold leading-snug max-w-[280px]">
             Differentiators and pillars of execution.
           </h3>
        </div>
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-black/10">
          {aboutPillars.map((pillar, i) => {
            return (
              <div key={i} className="relative border-b border-black/10 py-10 md:py-12 md:pr-8">
                <h4 className="text-[22px] font-semibold mb-3 text-black tracking-[-0.02em] leading-snug">{pillar.title}</h4>
                <p className="text-sm text-gray-600 leading-7 max-w-[420px]">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-6">
          {aboutSection.ctaQuestion}
        </p>
        <Link href='/about' className="inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-4 text-xs font-bold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 uppercase tracking-widest">
          {aboutSection.ctaLabel} <ArrowRightIcon size={14} />
        </Link>
      </div>

    </section>
  );
}