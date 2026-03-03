export function ShapeFuture() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left Content */}
      <div className="bg-brand-surface flex items-center px-12 md:px-16 py-16">
        <div className="max-w-[420px]">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">Personal Branding</p>
          <h2 className="text-brand-navy text-2xl md:text-3xl font-light leading-tight mb-6">
            Will you shape your narrative, or let others define it?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            In today's hyper-connected world, your personal brand is your most powerful business asset. We help executives and entrepreneurs build an authentic, compelling presence that commands authority and opens doors.
          </p>
          <a href="#" className="block text-sm text-brand-navy hover:text-brand-gold transition-colors mb-3 font-medium">
            Build your personal brand with Canbiz →
          </a>
          <a href="#" className="block text-sm text-brand-navy hover:text-brand-gold transition-colors font-medium">
            Read our Executive Visibility Report →
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative h-[400px] lg:h-auto overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1733231291455-3c4de1c24e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwbWFya2V0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjMzNzE2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Personal branding and marketing"
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
            Executive Personal Branding
          </span>
        </div>
      </div>
    </section>
  );
}