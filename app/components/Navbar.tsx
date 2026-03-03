"use client";

import { useState } from "react";
import { MagnifyingGlass, List, X } from "@phosphor-icons/react";
import { CanbizLogo } from "./CanbizLogo";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -56;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    {
      label: "Insights",
      section: "insights",
      children: [
        { label: "CEO Imperative", sub: "Strategic leadership perspectives" },
        { label: "Entrepreneurship", sub: "Growth and innovation research" },
        { label: "Digital Transformation", sub: "Technology and IT trends" },
        { label: "Women Leadership", sub: "Empowerment and inclusion" },
        { label: "ESG & Sustainability", sub: "Policy and green business" },
        { label: "Global Markets", sub: "GCC and international outlook" },
      ],
    },
    {
      label: "Services",
      section: "services",
      children: [
        { label: "Management Consulting", sub: "Strategy and performance" },
        { label: "Brand & Marketing Advisory", sub: "Positioning and content" },
        { label: "Personal Branding", sub: "Executive visibility" },
        { label: "Digital Solutions & IT", sub: "Software and maintenance" },
        { label: "AMC Retainer Services", sub: "Ongoing advisory support" },
        { label: "Executive MBA Program", sub: "Advanced leadership education" },
        { label: "Junior CEO Program", sub: "Youth entrepreneurship" },
        { label: "Women CEO Programs", sub: "She entrepreneurship" },
        { label: "Government Advisory", sub: "Public sector consulting" },
        { label: "Global Delegations", sub: "International exposure" },
      ],
    },
    {
      label: "Industries",
      section: "industries",
      children: [
        { label: "Government & Public Sector", sub: "Policy and strategy" },
        { label: "Entrepreneurship & SMEs", sub: "Growth and operations" },
        { label: "Technology & Digital", sub: "IT and innovation" },
        { label: "Financial Services", sub: "Advisory and risk" },
        { label: "Education & Training", sub: "Leadership programs" },
        { label: "Global Business", sub: "International markets" },
      ],
    },
    {
      label: "Careers",
      section: "careers",
      children: [
        { label: "Open Positions", sub: "Join our growing team" },
        { label: "Life at Canbiz", sub: "Culture and values" },
        { label: "Graduate Programs", sub: "Start your career" },
        { label: "Internships", sub: "Hands-on experience" },
      ],
    },
    {
      label: "About us",
      section: "about",
      children: [
        { label: "Our Story", sub: "A decade of impact" },
        { label: "Mission & Vision", sub: "Purpose-driven advisory" },
        { label: "Leadership Team", sub: "Meet our experts" },
        { label: "Our Journey", sub: "Milestones and growth" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy text-white">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
        >
          <CanbizLogo className="h-10 w-auto" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => scrollToSection(item.section)}
                className="px-4 py-5 text-xs text-gray-300 hover:text-white hover:bg-brand-navy-light transition-colors flex items-center gap-1 tracking-wide uppercase"
              >
                {item.label}
              </button>

              {/* Mega Dropdown */}
              {activeDropdown === item.label && item.children && (
                <div className="absolute top-full left-0 bg-brand-navy-mid min-w-[260px] shadow-2xl z-50 border-t-2 border-brand-gold">
                  <div className="py-2">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href="#"
                        onClick={(e) => { e.preventDefault(); scrollToSection(item.section); }}
                        className="flex flex-col px-5 py-3 hover:bg-brand-navy-light transition-colors border-b border-brand-navy-border/50 last:border-b-0 group"
                      >
                        <span className="text-xs text-gray-200 group-hover:text-brand-gold transition-colors font-medium">{child.label}</span>
                        <span className="text-[10px] text-gray-500 mt-0.5">{child.sub}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors">
            <MagnifyingGlass size={14} />
            <span>Search</span>
          </button>
          <button className="hidden md:block bg-brand-gold text-brand-navy text-xs font-semibold px-5 py-2 hover:bg-brand-gold-hover transition-colors">
            Contact Us
          </button>
          <button
            className="lg:hidden text-gray-200 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-navy-mid border-t border-brand-navy-border">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                className="w-full text-left px-6 py-4 text-xs text-gray-200 hover:text-brand-gold hover:bg-brand-navy-light transition-colors uppercase tracking-widest border-b border-brand-navy-border"
                onClick={() => scrollToSection(item.section)}
              >
                {item.label}
              </button>
            </div>
          ))}
          <div className="px-6 py-4 flex gap-4 border-t border-brand-navy-border">
            <button className="flex items-center gap-1.5 text-xs text-gray-300">
              <MagnifyingGlass size={13} /> Search
            </button>
            <button className="ml-auto bg-brand-gold text-brand-navy text-xs font-semibold px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}