"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { services, servicesSection } from "../constants/content";

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-brand-navy py-24 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">{servicesSection.eyebrow}</p>
            <h2 className="text-white text-3xl md:text-4xl font-light leading-tight">
              {servicesSection.headingPlain}{" "}
              <span className="text-brand-gold">{servicesSection.headingGold}</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[380px]">
            {servicesSection.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-navy-border">
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className={`relative p-5 md:p-8 transition-all duration-300 block ${
                  isHovered ? "bg-brand-gold" : "bg-brand-navy-mid"
                }`}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <span
                  className={`absolute top-6 right-6 text-xs font-light tracking-widest transition-colors duration-300 ${
                    isHovered ? "text-brand-navy" : "text-brand-gold/40"
                  }`}
                >
                  {String(service.id).padStart(2, "0")}
                </span>

                <div
                  className={`w-10 h-10 flex items-center justify-center mb-5 transition-all duration-300 ${
                    isHovered ? "text-brand-navy" : "text-brand-gold"
                  }`}
                >
                  <Icon size={22} weight="light" />
                </div>

                <h3
                  className={`text-sm font-semibold leading-snug mb-3 transition-colors duration-300 pr-6 ${
                    isHovered ? "text-brand-navy" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed transition-colors duration-300 ${
                    isHovered ? "text-brand-navy/80" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>

                <div
                  className={`mt-5 flex items-center gap-1.5 text-xs font-medium transition-all duration-300 ${
                    isHovered ? "text-brand-navy" : "text-brand-gold"
                  } ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                  Learn more <ArrowRightIcon size={13} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Link
            href="/services"
            className="border border-brand-gold text-brand-gold px-10 py-3.5 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-all duration-300"
          >
            {servicesSection.ctaPrimary}
          </Link>
          <Link href="/contact" className="text-gray-400 text-sm hover:text-brand-gold transition-colors flex items-center gap-2">
            {servicesSection.ctaSecondary} <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
