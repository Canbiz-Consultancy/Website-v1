"use client";

import { advisoryPillars, advisorySection } from "../constants/content";

export function AdvisoryPhilosophy() {
  return (
    <section className="bg-brand-navy py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="bg-brand-navy lg:pr-12 text-white flex flex-col justify-center">
          <div className="mb-3">
            <span className="text-brand-gold text-xs font-medium tracking-[3px] uppercase">
              {advisorySection.eyebrow}
            </span>
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight mb-5">
            {advisorySection.heading}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            {advisorySection.body}
          </p>

          <div className="grid grid-cols-1 gap-5 mb-10">
            {advisoryPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <Icon size={14} className="text-brand-gold" weight="light" />
                  </div>
                  <div>
                    <span className="text-white text-sm font-medium">{pillar.value}</span>
                    <p className="text-gray-400 text-xs mt-0.5">{pillar.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[320px] lg:min-h-[420px] overflow-hidden hidden lg:block">
          <img
            src={advisorySection.image}
            alt={advisorySection.imageAlt}
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-8 py-7">
            <p className="text-brand-gold text-xs font-medium tracking-[2px] uppercase mb-1">
              {advisorySection.imageEyebrow}
            </p>
            <p className="text-white text-lg font-semibold leading-snug max-w-[280px]">
              {advisorySection.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
