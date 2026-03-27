"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  careersSection,
  careersValues,
  careersStats,
  openPositions,
  careersLifeImages,
} from "../constants/content";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MapPinIcon,
  BriefcaseIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

export default function CareersPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="h-14" />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy pt-20 pb-0 px-6 md:px-16 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#E1B857 1px, transparent 1px), linear-gradient(90deg, #E1B857 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="text-brand-gold/60 hover:text-brand-gold text-xs tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={11} />
              Home
            </Link>
            <span className="text-brand-gold/30 text-xs">/</span>
            <span className="text-brand-gold/50 text-xs tracking-widest uppercase">
              Careers
            </span>
          </div>

          <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mb-5">
            {careersSection.eyebrow}
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-[800px] mb-6">
            {careersSection.headingPlain}{" "}
            <span className="text-brand-gold">{careersSection.headingGold}</span>
          </h1>
          <div className="w-12 h-0.5 bg-brand-gold mb-8" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-[580px] mb-16">
            {careersSection.subtext}
          </p>
        </div>
      </section>

      {/* ── Values Strip ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 md:px-16 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {careersValues.map((v, i) => (
              <div
                key={i}
                className="bg-white p-8 group hover:bg-brand-navy transition-colors duration-300 cursor-default"
              >
                <div className="w-8 h-0.5 bg-brand-gold mb-5 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-brand-navy text-sm font-semibold mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ────────────────────────────────────────────────────── */}
      <section id="open-positions" className="bg-brand-surface py-24 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
              Current Openings
            </p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight mb-2">
              Open <span className="text-brand-gold">Positions</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5 mb-6" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-[540px]">
              We're hiring across multiple practice areas. Find the role where
              your expertise can create the most impact.
            </p>
          </div>

          <div className="space-y-px">
            {openPositions.map((pos) => {
              const isOpen = expandedId === pos.id;
              return (
                <div
                  key={pos.id}
                  className="bg-white border border-gray-100 group"
                >
                  <button
                    className="w-full text-left px-6 md:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-brand-navy/[0.02] transition-colors"
                    onClick={() =>
                      setExpandedId(isOpen ? null : pos.id)
                    }
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-[10px] border border-brand-gold/30 text-brand-gold px-2.5 py-0.5 tracking-wide">
                          {pos.department}
                        </span>
                      </div>
                      <h3 className="text-brand-navy text-base font-semibold group-hover:text-brand-gold transition-colors duration-200">
                        {pos.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                          <MapPinIcon size={12} weight="fill" />
                          {pos.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                          <BriefcaseIcon size={12} weight="fill" />
                          {pos.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                          <ClockIcon size={12} weight="fill" />
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-brand-gold font-medium hidden sm:block">
                        {isOpen ? "Collapse" : "View Role"}
                      </span>
                      <div
                        className={`w-8 h-8 border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:border-brand-gold ${
                          isOpen ? "bg-brand-navy border-brand-navy" : ""
                        }`}
                      >
                        <ArrowRightIcon
                          size={13}
                          className={`transition-transform duration-300 ${
                            isOpen
                              ? "rotate-90 text-white"
                              : "text-gray-400 group-hover:text-brand-gold"
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Expanded detail */}
                  {isOpen && (
                    <div className="border-t border-gray-100 px-6 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <p className="text-brand-gold text-[10px] tracking-[0.2em] uppercase mb-2">
                            About The Role
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {pos.description}
                          </p>
                        </div>
                        <div>
                          <p className="text-brand-gold text-[10px] tracking-[0.2em] uppercase mb-3">
                            What We're Looking For
                          </p>
                          <ul className="space-y-2">
                            {pos.requirements.map((r, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-gray-600 text-xs leading-relaxed"
                              >
                                <CheckCircleIcon
                                  size={14}
                                  weight="fill"
                                  className="text-brand-gold shrink-0 mt-0.5"
                                />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="bg-brand-navy p-8 flex flex-col justify-between">
                        <div>
                          <p className="text-brand-gold text-[10px] tracking-[0.2em] uppercase mb-4">
                            Role Details
                          </p>
                          <div className="space-y-3">
                            {[
                              { label: "Department", value: pos.department },
                              { label: "Type", value: pos.type },
                              { label: "Location", value: pos.location },
                            ].map((d) => (
                              <div key={d.label}>
                                <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-0.5">
                                  {d.label}
                                </p>
                                <p className="text-white text-xs font-medium">
                                  {d.value}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <a
                          href="mailto:careers@canbizconsultancy.com"
                          className="mt-8 inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy text-xs font-semibold px-6 py-3.5 hover:bg-brand-gold-hover transition-colors duration-200"
                        >
                          Apply Now <ArrowRightIcon size={13} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Life at Canbiz  ───────────────────────────────────────────────────── */}
      <section id="life" className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[800px] mb-16">
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
              Life at Canbiz
            </p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight mb-5">
              Where great work meets{" "}
              <span className="text-brand-gold">great culture</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mb-6" />
            <p className="text-gray-500 text-sm leading-relaxed">
              At Canbiz, we believe the best work happens when talented people
              are trusted, challenged, and supported. Our culture is built on
              mutual respect, intellectual curiosity, and an unwavering
              commitment to our clients and each other.
            </p>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200">
            {careersLifeImages.map((img, i) => (
              <div key={i} className="relative group overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-52 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-navy/50 group-hover:bg-brand-navy/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-medium leading-snug">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Talent Network CTA ────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-20 px-6 md:px-16">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            Don't See Your Role?
          </p>
          <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight mb-5">
            Join our{" "}
            <span className="text-brand-gold">Talent Network</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[520px] mx-auto mb-10">
            We're always looking for exceptional people. If you don't see a
            current opening that fits your background, submit your profile and
            we'll reach out when the right opportunity arises.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:careers@canbizconsultancy.com"
              className="bg-brand-navy text-white px-10 py-3.5 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 flex items-center gap-2"
            >
              Submit Your Profile <ArrowRightIcon size={14} />
            </a>
            <Link
              href="/"
              className="text-gray-500 text-sm hover:text-brand-navy transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={13} /> Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
