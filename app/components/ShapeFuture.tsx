import { shapeFutureSection } from "../content";

export function ShapeFuture() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-brand-surface flex items-center px-6 md:px-16 py-24">
        <div className="max-w-[420px]">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">{shapeFutureSection.eyebrow}</p>
          <h2 className="text-brand-navy text-2xl md:text-3xl font-light leading-tight mb-6">
            {shapeFutureSection.heading}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {shapeFutureSection.body}
          </p>
        </div>
      </div>

      <div className="relative h-[400px] lg:h-auto overflow-hidden">
        <img
          src={shapeFutureSection.image}
          alt={shapeFutureSection.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="120" height="110" viewBox="0 0 120 110" fill="none">
            <rect x="2" y="2" width="116" height="106" stroke="url(#grad2)" strokeWidth="2.5" fill="none" />
            <defs>
              <linearGradient id="grad2" x1="0" y1="0" x2="120" y2="110">
                <stop offset="0%" stopColor="var(--color-brand-gold)" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-8 left-8">
          <span className="text-[10px] bg-brand-gold text-brand-navy px-3 py-1 font-semibold tracking-widest uppercase">
            {shapeFutureSection.imageTag}
          </span>
        </div>
      </div>
    </section>
  );
}