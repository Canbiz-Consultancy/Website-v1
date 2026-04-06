"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { confidenceSection } from "../constants/content";
import Link from "next/link";

export function ConfidenceSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative h-96 lg:h-auto overflow-hidden">
        <Image
          src={confidenceSection.image}
          alt={confidenceSection.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/20" />
        <div className="absolute bottom-8 left-8">
          <span className="text-xs bg-brand-gold text-brand-navy px-3 py-1 font-semibold tracking-widest uppercase">
            {confidenceSection.imageTag}
          </span>
        </div>
      </div>

      <div className="bg-white flex items-center px-6 md:px-16 py-24">
        <div className="max-w-2xl">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">{confidenceSection.eyebrow}</p>
          <h2 className="text-brand-navy text-2xl md:text-3xl font-semibold leading-tight mb-6">
            {confidenceSection.heading}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {confidenceSection.body}
          </p>
          <ul className="space-y-3 mb-8">
            {confidenceSection.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 shrink-0" />
                <span className="text-gray-500 text-xs leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
          <Link href='/services' className="border-2 border-brand-navy text-brand-navy px-8 py-3 text-sm font-medium hover:bg-brand-navy hover:text-white transition-colors inline-flex items-center gap-2">
            {confidenceSection.ctaLabel} <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
