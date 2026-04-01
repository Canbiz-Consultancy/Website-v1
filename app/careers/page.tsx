"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { openPositions } from "../constants/content";
import {
  ArrowRightIcon,
  MapPinIcon,
  BriefcaseIcon,
} from "@phosphor-icons/react";

export default function CareersPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-brand-navy font-sans selection:bg-brand-gold/30">
      <Navbar />
      <div className="h-14 md:h-20" />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-brand-navy px-6 md:px-16 pt-32 pb-24 md:pt-40 md:pb-36">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-14 lg:gap-20 items-end">
            <div>
              <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.28em] uppercase font-bold mb-6">
                Empowering Human Capital
              </p>
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.03em] max-w-[900px] mb-6">
                Join a disciplined consulting team.
              </h1>
              <p className="text-gray-300 text-lg md:text-[22px] leading-[1.7] max-w-[680px] font-light">
                We're hiring across multiple practice areas. Find the role where your expertise can create the most impact.
              </p>
            </div>
            <div className="hidden lg:block border-l border-white/15 pl-8 pb-2">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Focus</p>
              <p className="text-white text-xl leading-tight font-light mb-8">Measurable Outcomes</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">Environment</p>
              <p className="text-sm leading-7 text-gray-300">
                A high-performance culture rooted in structured systems and strategic clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Positions ─────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-16 py-24 md:py-32" id="open-positions">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 md:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
             <h2 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-6">Open Positions</h2>
             <h3 className="mb-4 text-3xl md:text-4xl text-black font-semibold leading-tight max-w-[600px]">
               Discover your next career milestone.
             </h3>
            </div>
            <p className="text-sm text-gray-500 leading-7 max-w-[340px]">
              Apply below to explore opportunities within our fast-growing, highly structured operational environment.
            </p>
          </div>
          
          <div className="border-t border-black/10">
            {openPositions.map((pos, i) => {
               const isOpen = expandedId === pos.id;
               return (
                <div key={pos.id} className="border-b border-black/10">
                  <button
                    className="w-full text-left py-8 md:py-12 grid grid-cols-1 md:grid-cols-[120px_minmax(0,1fr)_160px] gap-6 md:gap-10 md:items-center group"
                    onClick={() => setExpandedId(isOpen ? null : pos.id)}
                  >
                     <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-gray-500">
                       {String(i + 1).padStart(2, "0")}
                     </p>
                     <div>
                       <p className="text-[10px] uppercase tracking-[0.24em] text-gray-500 mb-3 group-hover:text-brand-gold transition-colors">
                         {pos.department}
                       </p>
                       <h4 className="text-2xl font-semibold mb-4 tracking-[-0.02em] text-black group-hover:text-brand-navy transition-colors">{pos.title}</h4>
                       <div className="flex flex-wrap items-center gap-6">
                          <span className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-bold">
                            <MapPinIcon size={14} className="text-brand-gold" />
                            {pos.location}
                          </span>
                          <span className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-bold">
                            <BriefcaseIcon size={14} className="text-brand-gold" />
                            {pos.type}
                          </span>
                       </div>
                     </div>
                     <div className="flex items-center gap-4 md:justify-end">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold group-hover:text-brand-gold transition-colors">
                          {isOpen ? "Close Details" : "View Role"}
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
                     <div className="px-0 py-10 grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-black/10">
                       <div className="lg:col-span-2 space-y-10">
                          <div>
                            <h4 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-4">About The Role</h4>
                            <p className="text-sm text-gray-600 leading-7">{pos.description}</p>
                          </div>
                          <div>
                            <h4 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-4">What We're Looking For</h4>
                            <ul className="space-y-4 border-l border-brand-navy/10 pl-6">
                              {pos.requirements.map((r, idx) => (
                                <li key={idx} className="flex gap-4 text-sm text-gray-600 leading-7">
                                  <ArrowRightIcon size={16} className="text-brand-navy/40 shrink-0 mt-1" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                       </div>
                       <div className="bg-[#F3F4F6] p-8 md:p-10 border-l-2 border-brand-navy h-fit">
                          <h4 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-6">Role Details</h4>
                          <div className="space-y-6">
                            {[
                              { label: "Department", value: pos.department },
                              { label: "Type", value: pos.type },
                              { label: "Location", value: pos.location },
                            ].map(d => (
                              <div key={d.label} className="border-b border-black/10 pb-4 last:border-0 last:pb-0">
                                 <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">{d.label}</p>
                                 <p className="text-sm text-black font-semibold">{d.value}</p>
                              </div>
                            ))}
                          </div>
                          <a
                            href="mailto:careers@canbizconsultancy.com"
                            className="mt-8 flex items-center justify-between w-full bg-brand-navy text-white px-6 py-4 text-[11px] uppercase tracking-widest font-bold hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300"
                          >
                            Apply Now <ArrowRightIcon size={14} />
                          </a>
                       </div>
                     </div>
                  )}
                </div>
               )
            })}
          </div>
        </div>
      </section>

      {/* ── Environment / Values ───────────────────────────────────────────── */}
      <section className="bg-brand-navy text-white px-6 md:px-16 py-24 md:py-32">
         <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
           <div className="lg:w-1/3">
              <h2 className="text-[11px] text-brand-gold tracking-[0.2em] font-bold uppercase mb-6">Life At Canbiz</h2>
              <h3 className="mb-4 text-3xl md:text-4xl font-semibold leading-tight text-white">
                An ecosystem of excellence.
              </h3>
           </div>
           <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 border-t border-brand-navy-border pt-8 md:pt-0 md:border-t-0 md:border-l pl-0 md:pl-16">
             <div>
               <p className="text-sm font-bold uppercase tracking-widest mb-4">Structured Growth</p>
               <p className="text-sm text-gray-400 leading-7">
                 We don't just organize clients; we apply the same exact rigorous frameworks to our internal progression paths. Growth is deliberate and documented.
               </p>
             </div>
             <div>
               <p className="text-sm font-bold uppercase tracking-widest mb-4">Autonomy</p>
               <p className="text-sm text-gray-400 leading-7">
                 Our operational templates allow you to focus entirely on creative problem solving and delivering strategic value without administrative bottlenecks.
               </p>
             </div>
           </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
