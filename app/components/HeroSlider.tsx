"use client";

import { useState, useEffect } from "react";
import { CaretLeftIcon, CaretRightIcon, PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { heroSlides, heroTabs } from "../constants/content";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const prev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrent((c) => (c + 1) % heroSlides.length);

  const slide = heroSlides[current];

  return (
    <div className="relative w-full h-[100svh] max-h-[100svh] overflow-hidden">
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-6">
        <div className="max-w-2xl">
          <p className="text-brand-gold text-xs tracking-widest mb-4 font-medium uppercase">{slide.category}</p>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-3 md:mb-4 max-w-xl">{slide.title}</h1>
          <div className="flex items-start gap-3 mb-6 md:mb-8">
            <div className="w-0.5 h-4 md:h-5 bg-white mt-1 shrink-0" />
            <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">{slide.description}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/20 pt-4 gap-4">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-1 sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {heroTabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setCurrent(i)}
                className={`text-xs sm:text-sm pb-1 transition-colors font-medium whitespace-nowrap shrink-0 ${
                  current === i
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
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
