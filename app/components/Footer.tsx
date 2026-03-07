"use client";

import { footerLinks, footerSocials, footerContent } from "../constants/content";

export function Footer() {
  return (
    <footer className="bg-white py-12 px-6 md:px-16 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div className="relative h-14 w-64">
            <img 
              src="/logo-2.png" 
              alt="Canbiz Logo" 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-40 w-auto object-contain max-w-none"
            />
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
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
          <p className="text-sm text-gray-500 leading-relaxed max-w-[800px]">
            {footerContent.description}
          </p>
          <p className="text-xs text-gray-400 mt-4">{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}