"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { aboutSection, aboutPillars, aboutStats } from "../constants/content";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">

        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">{aboutSection.eyebrow}</p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight">
              {aboutSection.headingPlain} <span className="text-brand-gold">{aboutSection.headingGold}</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[400px]">
            {aboutSection.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16 border border-gray-100 overflow-hidden">
          <div className="relative min-h-[380px]">
            <ImageWithFallback
              src={aboutSection.image}
              alt={aboutSection.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/50 to-transparent" />
          </div>
          <div className="bg-brand-navy p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="text-white text-xl font-light mb-5 leading-tight">
              {aboutSection.storyHeadingPlain}{" "}
              <span className="text-brand-gold">{aboutSection.storyHeadingGold}</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {aboutSection.storyPara1}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {aboutSection.storyPara2}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100 mb-16">
          {aboutStats.map((s, i) => (
            <div key={i} className="p-5 md:p-8 border-r border-gray-100 last:border-r-0 text-center">
              <p className="text-brand-gold text-3xl font-light mb-2">{s.value}</p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100 mb-14">
          {aboutPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-6 md:p-8 border-r border-gray-100 last:border-r-0 group hover:bg-brand-navy transition-all duration-300 cursor-default"
              >
                <div className="w-9 h-9 flex items-center justify-center border border-brand-gold/30 mb-5 group-hover:bg-brand-gold/10 transition-colors">
                  <Icon size={16} className="text-brand-gold" weight="light" />
                </div>
                <h3 className="text-brand-navy text-sm font-semibold mb-3 group-hover:text-white transition-colors">{pillar.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">{pillar.text}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6">
            {aboutSection.ctaQuestion}
          </p>
          <Link href='/about' className="inline-flex items-center gap-3 bg-brand-navy text-white px-10 py-4 text-sm font-semibold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">
            {aboutSection.ctaLabel} <ArrowRightIcon size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}