"use client";

import { LightbulbIcon, ShieldCheckIcon, ChartBarIcon } from "@phosphor-icons/react";

const pillars = [
  {
    icon: LightbulbIcon,
    value: "Strategic Clarity",
    label: "Turning complexity into clear, actionable direction for leaders",
  },
  {
    icon: ShieldCheckIcon,
    value: "Risk Intelligence",
    label: "Identifying and mitigating risk before it becomes a liability",
  },
  {
    icon: ChartBarIcon,
    value: "Performance Elevation",
    label: "Driving measurable growth across every layer of your organisation",
  },
];

export function EYParthenon() {
  return (
    <section className="bg-brand-navy py-24 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left */}
        <div className="bg-brand-navy py-12 pr-12 text-white flex flex-col justify-center">
          <div className="mb-3">
            <span className="text-brand-gold text-xs font-medium tracking-[3px] uppercase">
              Our Advisory Philosophy
            </span>
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-light leading-tight mb-5">
            Decisions that create value — today, and for the long term.
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            At Canbiz, we believe great advisory goes beyond advice. We embed
            ourselves in your challenges, align with your ambitions, and deliver
            counsel that is grounded in evidence, shaped by experience, and
            built for lasting impact across the GCC and beyond.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 gap-5 mb-10">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-brand-gold/30 mt-0.5">
                    <Icon size={14} className="text-brand-gold" weight="light" />
                  </div>
                  <div>
                    <span className="text-white text-sm font-medium">{pillar.value}</span>
                    <p className="text-gray-400 text-xs mt-0.5">{pillar.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="border-2 border-white text-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-brand-navy transition-colors w-fit">
            Explore our advisory approach
          </button>
        </div>

        {/* Right – Image */}
        <div className="relative min-h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3MjM1ODMyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Canbiz Advisory"
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
          {/* Gold top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gold" />
          {/* Bottom callout */}
          <div className="absolute bottom-0 left-0 right-0 px-8 py-7">
            <p className="text-brand-gold text-xs font-medium tracking-[2px] uppercase mb-1">
              Canbiz Advisory
            </p>
            <p className="text-white text-lg font-light leading-snug max-w-[280px]">
              Trusted by leaders across 30+ countries to navigate what comes next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
