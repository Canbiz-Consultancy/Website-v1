import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { industries, industryDetails, services } from "../../constants/content";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((s) => s.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.name} | Canbiz Consultancy Services`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((s) => s.slug === slug);
  const detail = industryDetails[slug];

  if (!industry || !detail) notFound();

  const industryIndex = industries.indexOf(industry);
  const prevIndustry = industries[industryIndex - 1] ?? null;
  const nextIndustry = industries[industryIndex + 1] ?? null;

  return (
    <div className="min-h-screen bg-background">
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
              href="/industries"
              className="text-white/70 hover:text-white text-[11px] tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={11} />
              All Industries
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <span className="text-white/60 text-[11px] tracking-widest uppercase">
              {industry.shortTitle}
            </span>
          </div>

          <p className="text-brand-gold text-[10px] tracking-[0.28em] uppercase mb-4">
            {detail.eyebrow}
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.02em] max-w-[820px] mb-6">
            {detail.headline}
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-[1.7] max-w-[640px] mb-10">
            {detail.subheadline}
          </p>
        </div>
      </section>

      {/* ── Overview & Highlights ──────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-28 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
             <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400 mb-4">Sector Overview</p>
             <h2 className="text-brand-navy text-2xl md:text-3xl font-semibold leading-tight mb-6">
               Leading transformation in <span className="text-brand-gold">{industry.shortTitle}</span>.
             </h2>
             <p className="text-gray-600 text-sm leading-7 mb-8">{detail.overview}</p>
             <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-brand-navy font-medium hover:text-gray-600 transition-colors border-b border-gray-300 pb-1"
              >
                Consult Our Industry Experts <ArrowRightIcon size={14} />
              </a>
          </div>

          <div className="lg:w-2/3 border-t border-black/10">
            {detail.highlights.map((h, i) => (
              <div key={i} className="grid grid-cols-[140px_minmax(0,1fr)] gap-6 border-b border-black/10 py-6 md:py-8">
                <p className="text-brand-gold text-3xl md:text-4xl font-light">{h.value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-[0.22em]">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities & Methodology ─────────────────────────────────────── */}
      <section className="bg-[#F3F4F6] py-24 md:py-28 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24">
            
            {/* Left Column: Capabilities */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400 mb-4">
                Key Focus Areas
              </p>
              <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight mb-6">
                Sector <span className="text-brand-gold">Capabilities</span>
              </h2>
              <div className="border-t border-black/10">
                {detail.features.map((feature, i) => (
                  <div key={i} className="border-b border-black/10 py-6 md:py-7">
                    <h3 className="text-lg font-semibold mb-4 text-brand-navy">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-7">{feature.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Process/Methodology */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400 mb-4">
                Strategic Approach
              </p>
              <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight mb-6">
                How We <span className="text-brand-gold">Deliver Value</span>
              </h2>
              <div className="border-t border-black/10">
                {detail.process.map((step, i) => (
                  <div key={i} className="grid grid-cols-[120px_minmax(0,1fr)] gap-6 border-b border-black/10 py-6 md:py-7">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-gray-400">{step.step}</p>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-brand-navy">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-7">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Relevant Services ──────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-24 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/45 mb-4">
                Solutions
              </p>
              <h2 className="mb-6 text-white text-3xl md:text-4xl font-semibold leading-tight">
                Recommended <span className="text-brand-gold">Services</span>
              </h2>
            </div>
            <Link href="/services" className="text-brand-gold text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
              View All Services <ArrowRightIcon size={12} />
            </Link>
          </div>

          <div className="border-t border-white/10">
            {services.slice(0, 3).map((service, i) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 py-6 md:py-8"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.26em] text-white/40 mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-brand-gold transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-white/60 text-xs leading-6 max-w-[520px]">
                    {service.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest group-hover:text-white transition-colors">
                  Explore <ArrowRightIcon size={12} className="translate-y-[1px]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F3F4F6] px-6 md:px-16 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto border-t border-black/10 pt-14 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-12 items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400 mb-6">Partner With Us</p>
              <h2 className="text-brand-navy text-3xl md:text-4xl font-semibold leading-tight mb-6 max-w-[520px]">
                Ready to transform your organisation?
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="bg-brand-navy text-white px-8 py-3 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 flex items-center justify-center gap-2"
              >
                {detail.cta} <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Previous / Next Navigation ─────────────────────────────────────── */}
      <section className="bg-white border-t border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 flex justify-between">
          <div className="py-12 md:py-16">
            {prevIndustry && (
              <Link href={`/industries/${prevIndustry.slug}`} className="group block">
                <p className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-2">Previous Industry</p>
                <div className="flex items-center gap-3 text-brand-navy font-medium group-hover:text-brand-gold transition-colors">
                  <ArrowLeftIcon size={16} /> {prevIndustry.shortTitle}
                </div>
              </Link>
            )}
          </div>
          <div className="py-12 md:py-16 text-right">
            {nextIndustry && (
              <Link href={`/industries/${nextIndustry.slug}`} className="group block">
                <p className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-2">Next Industry</p>
                <div className="flex items-center justify-end gap-3 text-brand-navy font-medium group-hover:text-brand-gold transition-colors">
                  {nextIndustry.shortTitle} <ArrowRightIcon size={16} />
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

