"use client";

import { footerLinks, footerSocials, footerContent } from "../constants/content";

export function Footer() {
  return (
    <footer className="bg-white py-6 px-6 md:px-16 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center md:flex-row md:items-center justify-between gap-8 mb-8">
          <div className="relative w-48 flex items-center justify-center md:justify-start">
            <img 
              src="/logo-2.svg" 
              alt="Canbiz Logo" 
              className="h-24 md:h-40 w-auto object-contain max-w-none"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-gray-600 hover:text-brand-navy transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {footerSocials.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} aria-label={social.label} className="text-gray-500 hover:text-brand-gold transition-colors">
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 leading-relaxed max-w-[800px] text-center md:text-left">
            {footerContent.description}
          </p>
          <p className="text-xs text-gray-400 mt-4 text-center md:text-left">{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}