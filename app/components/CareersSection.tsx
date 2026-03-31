"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { careersSection, careersValues, careersStats, careersWhyPoints } from "../constants/content";
import Link from "next/link";

export function CareersSection() {
  return (
    <section className="bg-brand-surface py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">{careersSection.eyebrow}</p>
          <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight mb-4">
            {careersSection.headingPlain}{" "}
            <span className="text-brand-gold">{careersSection.headingGold}</span>
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
            {careersSection.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-20 border border-gray-200 bg-white">
          {careersValues.map((v, i) => (
            <div key={i} className="p-6 md:p-8 border-r border-gray-100 last:border-r-0 group hover:bg-brand-navy transition-colors duration-300">
              <div className="w-8 h-0.5 bg-brand-gold mb-5 group-hover:w-12 transition-all duration-300" />
              <h3 className="text-brand-navy text-sm font-semibold mb-3 group-hover:text-white transition-colors">{v.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16 overflow-hidden">
          <div className="relative h-64 sm:h-96">
            <img
              src={careersSection.image}
              alt={careersSection.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/30" />
          </div>
          <div className="bg-brand-navy p-6 sm:p-10 flex flex-col justify-center">
            <h3 className="text-white text-xl font-semibold mb-4">
              {careersSection.whyHeadingPlain} <span className="text-brand-gold">{careersSection.whyHeadingGold}</span>
            </h3>
            <ul className="space-y-4">
              {careersWhyPoints.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  <span className="text-gray-300 text-xs leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200 bg-white mb-12">
          {careersStats.map((s, i) => (
            <div key={i} className="p-5 md:p-8 border-r border-gray-100 last:border-r-0 text-center">
              <p className="text-brand-gold text-3xl font-semibold mb-2">{s.value}</p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6">
            {careersSection.ctaQuestion}
          </p>
          <Link href='/careers' className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-10 py-4 text-sm font-semibold hover:bg-brand-gold-hover transition-all duration-300">
            {careersSection.ctaLabel} <ArrowRightIcon size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
