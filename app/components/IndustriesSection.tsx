"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { industries, industriesSection, industriesBottomStats } from "../constants/content";

export function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = industries[activeIndex];

  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">{industriesSection.eyebrow}</p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight">
              {industriesSection.headingPlain}{" "}
              <span className="text-brand-gold">{industriesSection.headingGold}</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[380px]">
            {industriesSection.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-gray-100">
          <div className="lg:col-span-2 border-r border-gray-100 order-2 lg:order-1 max-h-64 lg:max-h-none overflow-y-auto">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                className={`w-full text-left px-6 py-5 border-b border-gray-100 transition-all duration-200 group ${
                  activeIndex === index
                    ? "bg-brand-navy border-l-4 border-l-brand-gold"
                    : "hover:bg-gray-50 border-l-4 border-l-transparent"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className={`text-xs font-light tracking-widest block mb-0.5 ${
                        activeIndex === index ? "text-brand-gold/60" : "text-gray-300"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-sm font-medium transition-colors ${
                        activeIndex === index ? "text-white" : "text-brand-navy group-hover:text-brand-gold"
                      }`}
                    >
                      {industry.name}
                    </span>
                  </div>
                  <ArrowRightIcon
                    size={14}
                    className={`shrink-0 transition-all duration-200 ${
                      activeIndex === index ? "text-brand-gold opacity-100" : "text-gray-300 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3 flex flex-col order-1 lg:order-2">
            <div className="relative h-56 lg:h-64 overflow-hidden">
              <img
                key={active.id}
                src={active.image}
                alt={active.name}
                className="w-full h-full object-cover transition-transform duration-700 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <span className="text-brand-gold text-2xl font-light">{active.stat}</span>
                <p className="text-white text-xs mt-0.5">{active.statLabel}</p>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-brand-navy text-lg font-semibold mb-3">{active.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{active.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-brand-gold/40 text-brand-navy px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/industries/${active.slug}`}
                className="inline-flex items-center gap-2 text-sm text-brand-navy font-medium hover:text-brand-gold transition-colors border-b-2 border-brand-gold pb-0.5 self-start"
              >
                {industriesSection.ctaLabel} <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100">
          {industriesBottomStats.map((stat, i) => (
            <div
              key={i}
              className="py-6 px-4 md:py-8 md:px-8 text-center border-r border-gray-100 last:border-r-0"
            >
              <p className="text-brand-navy text-2xl md:text-3xl font-light mb-1">{stat.value}</p>
              <p className="text-gray-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
