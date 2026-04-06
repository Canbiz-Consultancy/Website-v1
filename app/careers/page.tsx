"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { openPositions, careersPage } from "../constants/content";
import {
  ArrowRightIcon,
  MapPinIcon,
  BriefcaseIcon,
  ArrowLeftIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { getCareers } from "../lib/strapi";
import { Job } from "../types/job";
import { StrapiBlock } from "../types/insight";
import { useEffect, ReactNode } from "react";

function RenderStrapiBlocks({ blocks }: { blocks: any }): ReactNode {
  if (typeof blocks === 'string') return <span>{blocks}</span>;
  if (!Array.isArray(blocks)) return null;

  return blocks.map((block: StrapiBlock, index: number) => {
    const children = block.children?.map((child, i) => {
      let text = child.text || "";
      if (child.bold) return <strong key={i} className="font-semibold">{text}</strong>;
      if (child.italic) return <em key={i}>{text}</em>;
      return <span key={i}>{text}</span>;
    }) || [];

    switch (block.type) {
      case "paragraph":
        return <p key={index} className="mb-4 last:mb-0 leading-relaxed text-gray-600">{children}</p>;
      case "list":
        const ListTag = block.listType === "ordered" ? "ol" : "ul";
        return (
          <ListTag key={index} className={`mb-4 last:mb-0 ${block.listType === "ordered" ? "list-decimal" : "list-disc"} pl-5 space-y-1`}>
            {children}
          </ListTag>
        );
      case "listItem":
        return <li key={index} className="text-gray-600">{children}</li>;
      default:
        return <p key={index} className="mb-4 last:mb-0 leading-relaxed text-gray-600">{children}</p>;
    }
  });
}

export default function CareersPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [jobs, setJobs] = useState<Job[]>(openPositions as any);

  useEffect(() => {
    async function loadJobs() {
      const response = await getCareers(1, 40);
      if (response && response.data && response.data.length > 0) {
        setJobs(response.data);
      }
    }
    loadJobs();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-brand-navy font-sans selection:bg-brand-gold/30">
      <Navbar />
      <div className="h-14 md:h-20" />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-brand-navy px-6 md:px-16 pt-32 md:pt-40 pb-16 overflow-hidden h-[600px] lg:h-[650px] relative isolate">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/88 to-brand-navy/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07101d] to-transparent" />
        <div className="max-w-[1200px] mx-auto relative z-10 w-full h-full flex flex-col justify-start">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 md:mb-12">
            <Link
              href="/"
              className="text-white/70 hover:text-white text-[11px] tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={11} />
              Home
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <span className="text-white/60 text-[11px] tracking-widest uppercase">
              Careers
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-12 lg:gap-20 items-end">
            <div>
              <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.28em] uppercase font-bold mb-4 md:mb-6">
                {careersPage.hero.eyebrow}
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.03em] max-w-[900px] mb-4 md:mb-6">
                {careersPage.hero.heading}
              </h1>
              <p className="text-gray-300 text-base md:text-lg lg:text-[22px] leading-[1.7] max-w-[680px] font-light">
                {careersPage.hero.subtext}
              </p>
            </div>
            <div className="hidden lg:block border-l border-white/15 pl-8 pb-2">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">{careersPage.heroSidebar.focusLabel}</p>
              <p className="text-white text-xl leading-tight font-light mb-8">{careersPage.heroSidebar.focusValue}</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 mb-4">{careersPage.heroSidebar.environmentLabel}</p>
              <p className="text-sm leading-7 text-gray-300">
                {careersPage.heroSidebar.environmentValue}
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
             <h2 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-6">{careersPage.openPositions.eyebrow}</h2>
             <h3 className="mb-4 text-3xl md:text-4xl text-black font-semibold leading-tight max-w-[600px]">
               {careersPage.openPositions.heading}
             </h3>
            </div>
            <p className="text-sm text-gray-500 leading-7 max-w-[340px]">
              {careersPage.openPositions.subtext}
            </p>
          </div>
          
          <div className="border-t border-black/10">
            {jobs.length === 0 ? (
              <div className="py-24 text-center">
                <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-6">
                  <BriefcaseIcon size={32} className="text-gray-400" weight="light" />
                </div>
                <h4 className="text-2xl font-semibold text-brand-navy mb-4">{careersPage.openPositions.noPositionsTitle}</h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[460px] mx-auto">
                  {careersPage.openPositions.noPositionsBody}{" "}
                  <a href={`mailto:${careersPage.openPositions.noPositionsEmail}`} className="text-brand-gold font-bold hover:underline">{careersPage.openPositions.noPositionsEmail}</a>{" "}
                  {careersPage.openPositions.noPositionsCta}
                </p>
              </div>
            ) : (
              jobs.map((pos, i) => {
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
                            {isOpen ? careersPage.openPositions.closeDetailsLabel : careersPage.openPositions.viewRoleLabel}
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
                              <h4 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-4">{careersPage.openPositions.aboutRoleLabel}</h4>
                              <div className="text-sm text-gray-600 leading-7">
                                <RenderStrapiBlocks blocks={pos.description} />
                              </div>
                            </div>
                            <div>
                              <h4 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-4">{careersPage.openPositions.requirementsLabel}</h4>
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
                            <h4 className="text-[11px] text-gray-500 tracking-[0.2em] font-bold uppercase mb-6">{careersPage.openPositions.roleDetailsLabel}</h4>
                            <div className="space-y-6">
                              {[
                                { label: careersPage.openPositions.departmentLabel, value: pos.department },
                                { label: careersPage.openPositions.typeLabel, value: pos.type },
                                { label: careersPage.openPositions.locationLabel, value: pos.location },
                              ].map(d => (
                                <div key={d.label} className="border-b border-black/10 pb-4 last:border-0 last:pb-0">
                                   <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">{d.label}</p>
                                   <p className="text-sm text-black font-semibold">{d.value}</p>
                                </div>
                              ))}
                            </div>
                            <a
                              href={`mailto:${careersPage.openPositions.noPositionsEmail}`}
                              className="mt-8 flex items-center justify-between w-full bg-brand-navy text-white px-6 py-4 text-[11px] uppercase tracking-widest font-bold hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300"
                            >
                              {careersPage.openPositions.applyNowLabel} <ArrowRightIcon size={14} />
                            </a>
                         </div>
                       </div>
                    )}
                  </div>
                 )
              })
            )}
          </div>
        </div>
      </section>

      {/* ── Environment / Values ───────────────────────────────────────────── */}
      <section className="bg-brand-navy text-white px-6 md:px-16 py-24 md:py-32">
         <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
           <div className="lg:w-1/3">
              <h2 className="text-[11px] text-brand-gold tracking-[0.2em] font-bold uppercase mb-6">{careersPage.lifeAtCanbiz.eyebrow}</h2>
              <h3 className="mb-4 text-3xl md:text-4xl font-semibold leading-tight text-white">
                {careersPage.lifeAtCanbiz.heading}
              </h3>
           </div>
           <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 border-t border-brand-navy-border pt-8 md:pt-0 md:border-t-0 md:border-l pl-0 md:pl-16">
             <div>
               <p className="text-sm font-bold uppercase tracking-widest mb-4">{careersPage.lifeAtCanbiz.values[0].title}</p>
               <p className="text-sm text-gray-400 leading-7">
                 {careersPage.lifeAtCanbiz.values[0].description}
               </p>
             </div>
             <div>
               <p className="text-sm font-bold uppercase tracking-widest mb-4">{careersPage.lifeAtCanbiz.values[1].title}</p>
               <p className="text-sm text-gray-400 leading-7">
                 {careersPage.lifeAtCanbiz.values[1].description}
               </p>
             </div>
           </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
