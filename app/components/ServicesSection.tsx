"use client";

import { useState } from "react";
import { ArrowRightIcon, UsersIcon, MegaphoneIcon, StarIcon, CodeIcon, ArrowsClockwiseIcon, GlobeIcon, GraduationCapIcon, BabyIcon, HeartIcon, BuildingsIcon } from "@phosphor-icons/react";

const services = [
  {
    id: 1,
    icon: UsersIcon,
    title: "Management Consulting & Professional Training",
    shortTitle: "Management Consulting",
    description:
      "Strategic advisory and capability-building programs covering business growth, leadership development, sales effectiveness, operations, and organizational performance.",
  },
  {
    id: 2,
    icon: MegaphoneIcon,
    title: "Brand Strategy, Marketing Advisory & Content Development",
    shortTitle: "Brand Strategy & Marketing",
    description:
      "End-to-end branding solutions including brand positioning, marketing strategy, digital marketing, and structured content planning and execution.",
  },
  {
    id: 3,
    icon: StarIcon,
    title: "Executive & Entrepreneur Personal Branding",
    shortTitle: "Personal Branding",
    description:
      "Personal brand positioning, reputation management, thought leadership development, and public visibility strategies for business leaders and professionals.",
  },
  {
    id: 4,
    icon: CodeIcon,
    title: "Software Development, Digital Solutions & IT Maintenance",
    shortTitle: "Software & Digital Solutions",
    description:
      "Design, development, implementation, and ongoing maintenance of customized software, platforms, and digital systems tailored to your business needs.",
  },
  {
    id: 5,
    icon: ArrowsClockwiseIcon,
    title: "Consultancy Annual Maintenance Contract (AMC) Services",
    shortTitle: "AMC Services",
    description:
      "Retainer-based advisory services providing continuous strategic, operational, and performance support to clients on an ongoing basis.",
  },
  {
    id: 6,
    icon: GlobeIcon,
    title: "International Entrepreneur Exposure & Business Delegations",
    shortTitle: "Global Business Delegations",
    description:
      "Curated international business trips, market exposure visits, networking forums, and global partnership facilitation for entrepreneurs.",
  },
  {
    id: 7,
    icon: GraduationCapIcon,
    title: "Executive MBA Program",
    shortTitle: "Executive MBA",
    description:
      "Advanced executive education program focused on strategic leadership, business scaling, financial management, and global expansion.",
  },
  {
    id: 8,
    icon: BabyIcon,
    title: "Junior CEO Leadership Development Program",
    shortTitle: "Junior CEO Program",
    description:
      "Structured leadership and business exposure program for children of business owners, including mentorship, internships, and entrepreneurial skill development.",
  },
  {
    id: 9,
    icon: HeartIcon,
    title: "She Entrepreneurship & Women CEO Leadership Programs",
    shortTitle: "Women Leadership Programs",
    description:
      "Specialized leadership, business development, and capacity-building programs designed to empower women entrepreneurs and senior executives.",
  },
  {
    id: 10,
    icon: BuildingsIcon,
    title: "Finance & Strategic Management Consulting for Government",
    shortTitle: "Government & Public Sector",
    description:
      "High-level financial advisory, strategic planning, policy support, and performance management consulting for government and semi-government organizations.",
  },
];

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="bg-brand-navy py-24 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">Our Core Services</p>
            <h2 className="text-white text-3xl md:text-4xl font-light leading-tight">
              Approved Core{" "}
              <span className="text-brand-gold">Service Portfolio</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[380px]">
            The following business activities form our core service offerings, designed to drive growth, innovation, and sustainable success for our clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-navy-border">
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;
            return (
              <div
                key={service.id}
                className={`relative p-8 cursor-pointer transition-all duration-300 ${
                  isHovered ? "bg-brand-gold" : "bg-brand-navy-mid"
                }`}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                {/* Number */}
                <span
                  className={`absolute top-6 right-6 text-xs font-light tracking-widest transition-colors duration-300 ${
                    isHovered ? "text-brand-navy" : "text-brand-gold/40"
                  }`}
                >
                  {String(service.id).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={`w-10 h-10 flex items-center justify-center mb-5 transition-all duration-300 ${
                    isHovered ? "text-brand-navy" : "text-brand-gold"
                  }`}
                >
                  <Icon size={22} weight="light" />
                </div>

                {/* Title */}
                <h3
                  className={`text-sm font-semibold leading-snug mb-3 transition-colors duration-300 pr-6 ${
                    isHovered ? "text-brand-navy" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs leading-relaxed transition-colors duration-300 ${
                    isHovered ? "text-brand-navy/80" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>

                {/* Arrow */}
                <div
                  className={`mt-5 flex items-center gap-1.5 text-xs font-medium transition-all duration-300 ${
                    isHovered ? "text-brand-navy" : "text-brand-gold"
                  } ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                  Learn more <ArrowRightIcon size={13} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button className="border border-brand-gold text-brand-gold px-10 py-3.5 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">
            Explore All Services
          </button>
          <a href="#" className="text-gray-400 text-sm hover:text-brand-gold transition-colors flex items-center gap-2">
            Request a Consultation <ArrowRightIcon size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
