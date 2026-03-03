"use client";

import { useState, useEffect } from "react";
import { CaretLeftIcon, CaretRightIcon, PauseIcon, PlayIcon } from "@phosphor-icons/react";

const slides = [
  {
    id: 1,
    category: "CEO IMPERATIVE",
    title: "Five priorities for GCC CEOs navigating transformation and growth in 2026",
    description: "Explore how top business leaders across the Gulf are reimagining strategy, talent, and innovation to build resilient, future-ready organizations.",
    tab: "CEO Imperative",
    image: "https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDRU8lMjBsZWFkZXJzaGlwJTIwZnV0dXJlJTIwc3RyYXRlZ3klMjB2aXNpb258ZW58MXx8fHwxNzcyMzM3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    category: "WOMEN LEADERSHIP",
    title: "She leads: how Canbiz's Women CEO Programs are reshaping business across the GCC",
    description: "Specialized leadership and capacity-building programs empowering women entrepreneurs and senior executives to reach their full potential.",
    tab: "Women Leadership",
    image: "https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MjMzNzE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    category: "GLOBAL BUSINESS",
    title: "International business delegations: connecting GCC entrepreneurs with the world",
    description: "Discover how our curated global exposure programs have facilitated 120+ MOU signings and opened new markets for entrepreneurs across 30+ countries.",
    tab: "Global Delegations",
    image: "https://images.unsplash.com/photo-1759013277013-d69946b834eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjB0cmF2ZWwlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc3MjMzNzE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const tabs = ["CEO Imperative", "Women Leadership", "Global Delegations"];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <div className="relative w-full h-[540px] md:h-[620px] overflow-hidden">
      {/* Background Image */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        </div>
      ))}

      {/* Decorative Rectangle */}
      <div className="absolute top-1/4 right-[15%] hidden md:block">
        <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
          <rect x="2" y="2" width="196" height="156" stroke="url(#grad)" strokeWidth="3" fill="none" />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="200" y2="160">
              <stop offset="0%" stopColor="var(--color-brand-gold)" />
              <stop offset="100%" stopColor="#FF00AA" />
            </linearGradient>
          </defs>
        </svg>
        {/* Corner dots */}
        <div className="absolute bottom-[-8px] left-[-8px] flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-brand-gold" />
          <div className="w-2 h-2 rounded-full bg-brand-gold opacity-60" />
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-6">
        <div className="max-w-[700px]">
          <p className="text-brand-gold text-xs tracking-widest mb-4 font-medium uppercase">{slide.category}</p>
          <h1 className="text-white text-3xl md:text-4xl font-light leading-tight mb-4 max-w-[600px]">{slide.title}</h1>
          <div className="flex items-start gap-3 mb-8">
            <div className="w-0.5 h-5 bg-white mt-1 shrink-0" />
            <p className="text-gray-200 text-base leading-relaxed">{slide.description}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between border-t border-white/20 pt-4">
          <div className="flex gap-6">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setCurrent(i)}
                className={`text-sm pb-1 transition-colors font-medium ${
                  current === i
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-8 h-8 border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <CaretLeftIcon size={16} />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <CaretRightIcon size={16} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              {isPlaying ? <PauseIcon size={14} /> : <PlayIcon size={14} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}