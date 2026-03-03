"use client";

import { ArrowRight } from "@phosphor-icons/react";

export function ConfidenceSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left Image */}
      <div className="relative h-[400px] lg:h-auto overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1763739527737-e3626d731072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyMzM3MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Strategic advisory with confidence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/20" />
        {/* Accent tag */}
        <div className="absolute bottom-8 left-8">
          <span className="text-[10px] bg-brand-gold text-brand-navy px-3 py-1 font-semibold tracking-widest uppercase">
            Management Consulting
          </span>
        </div>
      </div>

      {/* Right Content */}
      <div className="bg-brand-surface flex items-center px-12 md:px-16 py-16">
        <div className="max-w-[480px]">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">Strategy & Performance</p>
          <h2 className="text-brand-navy text-2xl md:text-3xl font-light leading-tight mb-6">
            Confidence to reimagine. Capability to realize.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            We combine deep sector expertise with world-class advisory capabilities to help business leaders navigate complexity, accelerate performance, and achieve transformational outcomes across every dimension of their enterprise.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Strategic advisory and business growth frameworks",
              "Leadership development and organizational performance",
              "Sales effectiveness and operational excellence",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 shrink-0" />
                <span className="text-gray-500 text-xs leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
          <button className="border-2 border-brand-navy text-brand-navy px-8 py-3 text-sm font-medium hover:bg-brand-navy hover:text-white transition-colors flex items-center gap-2">
            Explore Consulting Services <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
