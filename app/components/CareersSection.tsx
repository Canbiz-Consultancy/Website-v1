"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { careersSection, careersValues, careersWhyPoints } from "../constants/content";
import Link from "next/link";

export function CareersSection() {
  return (
    <section className="bg-[#F3F4F6] px-6 md:px-16 py-24 md:py-32">
      
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-end mb-20 md:mb-28">
         <div className="lg:w-1/2 shrink-0">
             <h2 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-6">{careersSection.eyebrow}</h2>
             <h3 className="mb-0 text-3xl md:text-4xl text-black font-semibold leading-tight max-w-[600px]">
               {careersSection.headingPlain}{" "}
               <span className="text-brand-gold">{careersSection.headingGold}</span>
             </h3>
         </div>
         <div className="lg:w-1/2 border-l border-black/10 pl-8 md:pl-10">
             <p className="text-gray-500 text-sm leading-7">
               {careersSection.subtext}
             </p>
         </div>
      </div>

      {/* ── Values/Pillars ──────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-x-12 border-t border-black/10 pt-16 md:pt-20 mb-24 md:mb-32">
        {careersValues.map((v, i) => (
          <div key={i} className="border-l border-black/10 pl-6 h-full">
            <h4 className="text-lg font-semibold mb-3 text-black tracking-[-0.01em] leading-snug">{v.title}</h4>
            <p className="text-[13px] text-gray-500 leading-[1.8]">{v.description}</p>
          </div>
        ))}
      </div>

      {/* ── Image & Why Us ─────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 mb-6 md:mb-12 border-t border-black/10 pt-24 md:pt-32">
         <div className="lg:w-1/2 relative">
             <div className="relative aspect-[4/5] overflow-hidden">
               <Image
                 src={careersSection.image}
                 alt={careersSection.imageAlt}
                 fill
                 sizes="(min-width: 1024px) 50vw, 100vw"
                 className="object-cover grayscale-[0.2]"
               />
             </div>
         </div>
         <div className="lg:w-1/2 flex flex-col justify-center">
             <h2 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-6">Environment</h2>
             <h3 className="mb-8 text-3xl md:text-4xl text-black font-semibold leading-tight max-w-[600px]">
               {careersSection.whyHeadingPlain}{" "}
               <span className="text-brand-gold">{careersSection.whyHeadingGold}</span>
             </h3>
             <div className="border-t border-black/10 flex flex-col w-full">
               {careersWhyPoints.map((item, i) => (
                 <div key={i} className="flex gap-4 border-b border-black/10 py-6 items-start">
                    <ArrowRightIcon className="text-gray-400 mt-1 shrink-0" size={16} />
                    <p className="text-sm text-gray-600 leading-7">{item}</p>
                 </div>
               ))}
             </div>
         </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto text-center border-t border-black/10 pt-16 mt-16 md:pt-20 md:mt-24">
        <p className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-6">
          {careersSection.ctaQuestion}
        </p>
        <Link href='/careers' className="inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-4 text-xs font-bold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 uppercase tracking-widest">
          {careersSection.ctaLabel} <ArrowRightIcon size={14} />
        </Link>
      </div>

    </section>
  );
}
