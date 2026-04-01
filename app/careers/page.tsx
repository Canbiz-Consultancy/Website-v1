"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { openPositions } from "../constants/content";
import {
  ArrowRightIcon,
  MapPinIcon,
  BriefcaseIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

export default function CareersPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-14" />

      <section id="open-positions" className="bg-white py-28 md:py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-12 items-end mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400 mb-5">
                Current Openings
              </p>
              <h1 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight mb-5">
                Open <span className="text-brand-gold">Positions</span>
              </h1>
              <p className="text-gray-500 text-sm leading-7 md:max-w-xl">
                We're hiring across multiple practice areas. Find the role where
                your expertise can create the most impact.
              </p>
            </div>
            <div className="hidden lg:block border-l border-black/10 pl-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-gray-400 mb-3">
                Careers
              </p>
              <p className="text-brand-navy text-sm leading-7">
                Join a disciplined consulting team focused on measurable client outcomes.
              </p>
            </div>
          </div>

          <div className="border-t border-black/10">
            {openPositions.map((pos, i) => {
              const isOpen = expandedId === pos.id;
              return (
                <div key={pos.id} className="border-b border-black/10">
                  <button
                    className="w-full text-left py-8 md:py-10 grid grid-cols-1 md:grid-cols-[140px_minmax(0,1fr)_160px] gap-8 md:items-center"
                    onClick={() => setExpandedId(isOpen ? null : pos.id)}
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400 mb-4">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.24em] text-brand-gold">
                        {pos.department}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-brand-navy text-lg font-semibold">
                        {pos.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-5 mt-4">
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
                    <div className="flex items-center gap-4 md:justify-end">
                      <span className="text-xs text-brand-navy font-medium">
                        {isOpen ? "Collapse" : "View Role"}
                      </span>
                      <ArrowRightIcon
                        size={14}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-90 text-brand-gold" : "text-brand-navy"
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-black/10 px-6 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12 bg-[#F6F7F8]">
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
                      <div className="lg:border-l lg:border-black/10 lg:pl-10 flex flex-col justify-between">
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
                                <p className="text-brand-navy text-xs font-medium">
                                  {d.value}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <a
                          href="mailto:careers@canbizconsultancy.com"
                          className="mt-8 inline-flex items-center justify-center gap-2 bg-brand-navy text-white text-xs font-semibold px-6 py-3.5 hover:bg-brand-gold hover:text-brand-navy transition-colors duration-200"
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

      <Footer />
    </div>
  );
}
