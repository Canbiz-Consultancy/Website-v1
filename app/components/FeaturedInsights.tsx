"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { insights, insightsSection } from "../content";

export function FeaturedInsights() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">{insightsSection.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-light">
              <span className="text-brand-navy">{insightsSection.headingPlain}</span>
              <span className="text-brand-gold">{insightsSection.headingGold}</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[380px]">
            {insightsSection.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 group cursor-pointer overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="border-t-4 border-brand-gold" />
            <div className="relative overflow-hidden h-72">
              <ImageWithFallback
                src={insights[0].image}
                alt={insights[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] bg-brand-gold text-brand-navy px-2 py-0.5 font-semibold tracking-wider uppercase">
                {insights[0].category}
              </span>
            </div>
            <div className="p-8">
              <h3 className="text-brand-navy text-lg leading-snug mb-3 group-hover:text-brand-gold transition-colors font-semibold">
                {insights[0].title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{insights[0].description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-brand-navy hover:text-brand-gold transition-colors">
                Read more <ArrowRightIcon size={13} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {insights.slice(1, 3).map((item) => (
              <div key={item.id} className="group cursor-pointer bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow flex-1">
                <div className="border-t-4 border-brand-gold" />
                <div className="overflow-hidden h-36">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] text-brand-gold font-semibold tracking-wider uppercase block mb-2">{item.category}</span>
                  <h3 className="text-brand-navy text-sm leading-snug mb-2 group-hover:text-brand-gold transition-colors font-medium">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {insights.slice(3, 6).map((item) => (
            <div key={item.id} className="group cursor-pointer bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="border-t-4 border-brand-gold" />
              <div className="overflow-hidden h-44">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] text-brand-gold font-semibold tracking-wider uppercase block mb-2">{item.category}</span>
                <h3 className="text-brand-navy text-base leading-snug mb-2 group-hover:text-brand-gold transition-colors font-medium">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{item.description}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-navy hover:text-brand-gold transition-colors mt-4">
                  Read more <ArrowRightIcon size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-right">
          <a href="#" className="text-sm text-brand-navy hover:text-brand-gold transition-colors flex items-center justify-end gap-2 font-medium">
            {insightsSection.ctaLabel} <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
