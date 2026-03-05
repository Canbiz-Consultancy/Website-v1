"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MagnifyingGlassIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { CanbizLogo } from "./CanbizLogo";
import { navItems, services, industries } from "../content";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);

    if (sectionId === "services") {
      router.push("/services");
      return;
    }

    if (sectionId === "industries") {
      router.push("/industries");
      return;
    }

    if (sectionId === "careers") {
      router.push("/careers");
      return;
    }

    if (sectionId === "about") {
      router.push("/about");
      return;
    }

    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -56;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const getServiceHref = (childLabel: string) => {
    const match = services.find(
      (s) =>
        s.shortTitle.toLowerCase() === childLabel.toLowerCase() ||
        s.title.toLowerCase().includes(childLabel.toLowerCase())
    );
    return match ? `/services/${match.slug}` : "/services";
  };

  const getIndustryHref = (childLabel: string) => {
    const match = industries.find(
      (i) =>
        i.shortTitle?.toLowerCase() === childLabel.toLowerCase() ||
        i.name.toLowerCase().includes(childLabel.toLowerCase())
    );
    return match ? `/industries/${match.slug}` : "/industries";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy text-white">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
        >
          <CanbizLogo className="h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-0">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick(item.section)}
                className="px-4 py-5 text-xs text-gray-300 hover:text-white hover:bg-brand-navy-light transition-colors flex items-center gap-1 tracking-wide uppercase"
              >
                {item.label}
              </button>

              {activeDropdown === item.label && item.children && (
                <div className="absolute top-full left-0 bg-brand-navy-mid min-w-[260px] shadow-2xl z-50 border-t-2 border-brand-gold">
                  <div className="py-2">
                    {item.children.map((child) => {
                      const aboutAnchors: Record<string, string> = {
                        "Our Story": "/about#our-story",
                        "Mission & Values": "/about#mission-values",
                        "Leadership Team": "/about#leadership",
                        "Our Journey": "/about#journey",
                      };
                      const careersAnchors: Record<string, string> = {
                        "Open Positions": "/careers#open-positions",
                        "Life at Canbiz": "/careers#life",
                        "Graduate Programs": "/careers#graduates",
                        "Internships": "/careers#graduates",
                      };
                      const href =
                        item.section === "services"
                          ? getServiceHref(child.label)
                          : item.section === "industries"
                          ? getIndustryHref(child.label)
                          : item.section === "careers"
                          ? (careersAnchors[child.label] ?? "/careers")
                          : item.section === "about"
                          ? (aboutAnchors[child.label] ?? "/about")
                          : `/#${item.section}`;
                      return (
                        <Link
                          key={child.label}
                          href={href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex flex-col px-5 py-3 hover:bg-brand-navy-light transition-colors border-b border-brand-navy-border/50 last:border-b-0 group"
                        >
                          <span className="text-xs text-gray-200 group-hover:text-brand-gold transition-colors font-medium">{child.label}</span>
                          <span className="text-[10px] text-gray-500 mt-0.5">{child.sub}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors">
            <MagnifyingGlassIcon size={14} />
            <span>Search</span>
          </button>
          <button 
            onClick={() => router.push('/contact')}
            className="hidden md:block bg-brand-gold text-brand-navy text-xs font-semibold px-5 py-2 hover:bg-brand-gold-hover transition-colors"
          >
            Contact Us
          </button>
          <button
            className="lg:hidden text-gray-200 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <XIcon size={22} /> : <ListIcon size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-brand-navy-mid border-t border-brand-navy-border">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                className="w-full text-left px-6 py-4 text-xs text-gray-200 hover:text-brand-gold hover:bg-brand-navy-light transition-colors uppercase tracking-widest border-b border-brand-navy-border"
                onClick={() => handleNavClick(item.section)}
              >
                {item.label}
              </button>
            </div>
          ))}
          <div className="px-6 py-4 flex gap-4 border-t border-brand-navy-border">
            <button className="flex items-center gap-1.5 text-xs text-gray-300">
              <MagnifyingGlassIcon size={13} /> Search
            </button>
            <button 
              onClick={() => {
                setMobileOpen(false);
                router.push('/contact');
              }}
              className="ml-auto bg-brand-gold text-brand-navy text-xs font-semibold px-4 py-2"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}