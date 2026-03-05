import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { services, serviceDetails } from "../../content";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Canbiz Consultancy Services`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) notFound();

  const Icon = service.icon;
  const serviceIndex = services.indexOf(service);
  const prevService = services[serviceIndex - 1] ?? null;
  const nextService = services[serviceIndex + 1] ?? null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="h-14" />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[520px] flex items-end overflow-hidden px-6 md:px-16">
        <img
          src={detail.hero}
          alt={detail.heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/20" />

        <div className="relative z-10 max-w-[1200px] mx-auto pb-16 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/services"
              className="text-brand-gold/80 hover:text-brand-gold text-xs tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={12} />
              All Services
            </Link>
            <span className="text-brand-gold/30 text-xs">/</span>
            <span className="text-brand-gold/60 text-xs tracking-widest uppercase">
              {service.shortTitle}
            </span>
          </div>

          <p className="text-brand-gold text-xs tracking-[0.25em] uppercase mb-4">
            {detail.eyebrow}
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-[820px] mb-6">
            {detail.headline}
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-[640px] mb-10">
            {detail.subheadline}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {detail.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-brand-gold/40 text-brand-gold/80 px-3 py-1 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights Strip ─────────────────────────────────────────────────── */}
      <section className="bg-brand-navy-mid border-t border-brand-navy-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-navy-border">
            {detail.highlights.map((h) => (
              <div key={h.label} className="py-8 px-4 md:px-10 text-center">
                <p className="text-brand-gold text-3xl font-light mb-1">{h.value}</p>
                <p className="text-gray-400 text-xs tracking-wide">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: icon + overview text */}
          <div>
            <div className="w-14 h-14 border border-brand-gold/30 flex items-center justify-center mb-8">
              <Icon size={26} className="text-brand-gold" weight="light" />
            </div>
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">Overview</p>
            <h2 className="text-brand-navy text-2xl md:text-3xl font-light leading-tight mb-6">
              {service.title}
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mb-8" />
            <p className="text-gray-600 text-sm leading-relaxed">{detail.overview}</p>
          </div>

          {/* Right: service number card + CTA */}
          <div className="flex flex-col gap-8">
            <div className="bg-brand-navy p-10">
              <span className="text-brand-gold/30 text-6xl font-light block mb-6 leading-none">
                {String(service.id).padStart(2, "0")}
              </span>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy text-sm font-semibold px-8 py-3.5 hover:bg-brand-gold-hover transition-colors"
              >
                {detail.cta} <ArrowRightIcon size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-24 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14">
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
              What We Deliver
            </p>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight">
              Core <span className="text-brand-gold">Capabilities</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {detail.features.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 group hover:bg-brand-navy transition-colors duration-300 cursor-default"
              >
                <div className="w-8 h-0.5 bg-brand-gold mb-6 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-brand-navy text-sm font-semibold mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Timeline ─────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-24 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14">
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
              Our Approach
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-light leading-tight">
              How We <span className="text-brand-gold">Work</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {detail.process.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col md:items-center border-b md:border-b-0 md:border-r border-brand-navy-border last:border-0 p-6 md:px-8 md:py-10 group"
              >
                {/* Step connector line (desktop only) */}
                {i < detail.process.length - 1 && (
                  <div className="hidden md:block absolute top-[52px] right-0 w-px h-6 bg-brand-gold/20" />
                )}
                <span className="text-brand-gold text-xl font-light mb-4 md:mb-6 md:text-center">
                  {step.step}
                </span>
                <h3 className="text-white text-sm font-semibold mb-3 md:text-center leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed md:text-center">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-20 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            Ready to get started?
          </p>
          <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight mb-6">
            Let's build something{" "}
            <span className="text-brand-gold">exceptional</span> together.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[520px] mx-auto mb-10">
            Speak to our expert team about how Canbiz can support your goals
            with a tailored engagement designed around your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-brand-navy text-white px-10 py-3.5 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 flex items-center gap-2"
            >
              {detail.cta} <ArrowRightIcon size={14} />
            </a>
            <Link
              href="/services"
              className="border border-brand-navy text-brand-navy px-10 py-3.5 text-sm font-medium hover:bg-brand-navy hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Previous / Next Navigation ───────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="py-8 pr-0 md:pr-12">
            {prevService ? (
              <Link
                href={`/services/${prevService.slug}`}
                className="group flex items-start gap-4"
              >
                <div className="w-10 h-10 border border-gray-200 flex items-center justify-center mt-0.5 group-hover:border-brand-gold transition-colors shrink-0">
                  <ArrowLeftIcon size={16} className="text-gray-400 group-hover:text-brand-gold transition-colors" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1 tracking-wide uppercase">Previous Service</p>
                  <p className="text-brand-navy text-sm font-medium group-hover:text-brand-gold transition-colors">
                    {prevService.shortTitle}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
          <div className="py-8 pl-0 md:pl-12 flex justify-end">
            {nextService ? (
              <Link
                href={`/services/${nextService.slug}`}
                className="group flex items-start gap-4 text-right"
              >
                <div>
                  <p className="text-gray-400 text-xs mb-1 tracking-wide uppercase">Next Service</p>
                  <p className="text-brand-navy text-sm font-medium group-hover:text-brand-gold transition-colors">
                    {nextService.shortTitle}
                  </p>
                </div>
                <div className="w-10 h-10 border border-gray-200 flex items-center justify-center mt-0.5 group-hover:border-brand-gold transition-colors shrink-0">
                  <ArrowRightIcon size={16} className="text-gray-400 group-hover:text-brand-gold transition-colors" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
