"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { employeeTrainingSection } from "../constants/content";
import Link from "next/link";

export function TrainingSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-brand-surface flex items-center px-6 md:px-16 py-24 order-2 lg:order-1">
        <div className="max-w-[480px]">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
            {employeeTrainingSection.eyebrow}
          </p>
          <h2 className="text-brand-navy text-2xl md:text-3xl font-semibold leading-tight mb-6">
            {employeeTrainingSection.heading}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-10">
            {employeeTrainingSection.body}
          </p>
          <Link
            href="/careers"
            className="border-2 border-brand-navy text-brand-navy px-8 py-3 text-sm font-medium hover:bg-brand-navy hover:text-white transition-colors inline-flex items-center gap-2"
          >
            {employeeTrainingSection.ctaLabel} <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>

      <div className="relative h-[400px] lg:h-auto overflow-hidden order-1 lg:order-2">
        <img
          src={employeeTrainingSection.image}
          alt={employeeTrainingSection.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/10" />
        <div className="absolute bottom-8 right-8">
          <span className="text-[10px] bg-brand-gold text-brand-navy px-3 py-1 font-semibold tracking-widest uppercase shadow-lg">
            {employeeTrainingSection.imageTag}
          </span>
        </div>
      </div>
    </section>
  );
}
