"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { aboutSection, aboutPillars, aboutStats } from "../constants/content";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="bg-white px-6 md:px-16 py-24 md:py-32">
      
      {/* ── Header & Story ─────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-24 md:mb-32">
         <div className="lg:w-1/2 relative">
             <div className="relative aspect-[4/5] overflow-hidden">
               <Image
                 src={aboutSection.image}
                 alt={aboutSection.imageAlt}
                 fill
                 sizes="(min-width: 1024px) 50vw, 100vw"
                 className="object-cover grayscale-[0.2]"
               />
             </div>
         </div>
         <div className="lg:w-1/2">
             <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-6">{aboutSection.eyebrow}</h2>
             <h3 className="mb-8 text-3xl md:text-4xl text-brand-navy font-semibold leading-tight max-w-[600px]">
               {aboutSection.headingPlain}{" "}
               <span className="text-brand-gold">{aboutSection.headingGold}</span>
             </h3>
             <p className="text-gray-500 text-sm leading-7 mb-8">
               {aboutSection.subtext}
             </p>
             <div className="space-y-6 text-gray-500 text-sm leading-7">
               <p>{aboutSection.storyPara1}</p>
             </div>
         </div>
      </div>

      {/* ── Stats ────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-24 md:mb-32 border-t border-black/10 pt-16 md:pt-20">
        {aboutStats.map((s, i) => (
          <div key={i} className="border-l border-black/10 pl-6">
            <p className="text-4xl md:text-5xl font-light text-brand-navy mb-3 tracking-tight">{s.value}</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Pillars ──────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-1/3 shrink-0">
           <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-6">Values & Methods</h2>
           <h3 className="mb-4 text-3xl md:text-4xl text-brand-navy font-semibold leading-tight max-w-[280px]">
             Differentiators and pillars of execution.
           </h3>
        </div>
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-black/10">
          {aboutPillars.map((pillar, i) => {
            return (
              <div key={i} className="relative border-b border-black/10 py-10 md:py-12 md:pr-8">
                <h4 className="text-[22px] font-semibold mb-3 text-brand-navy tracking-[-0.02em] leading-snug">{pillar.title}</h4>
                <p className="text-sm text-gray-500 leading-7 max-w-[420px]">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto text-center border-t border-black/10 pt-16 mt-16 md:pt-20 md:mt-24">
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
