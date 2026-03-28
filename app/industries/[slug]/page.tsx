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
              href="/industries"
              className="text-brand-gold/80 hover:text-brand-gold text-xs tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={12} />
              All Industries
            </Link>
            <span className="text-brand-gold/30 text-xs">/</span>
            <span className="text-brand-gold/60 text-xs tracking-widest uppercase">
              {industry.shortTitle}
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

      {/* ── Overview & Highlights ──────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-16 relative">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
             <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">Sector Overview</p>
             <h2 className="text-brand-navy text-2xl md:text-3xl font-light leading-tight mb-6">
               Leading transformation in <span className="text-brand-gold">{industry.shortTitle}</span>.
             </h2>
             <p className="text-gray-600 text-sm leading-relaxed mb-8">{detail.overview}</p>
             <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-brand-navy font-medium hover:text-brand-gold transition-colors border-b-2 border-brand-gold pb-0.5"
              >
                Consult Our Industry Experts <ArrowRightIcon size={14} />
              </a>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {detail.highlights.map((h, i) => (
              <div key={i} className="bg-white p-8 md:p-12 flex flex-col justify-center items-center text-center">
                <p className="text-brand-gold text-4xl md:text-5xl font-light mb-3">{h.value}</p>
                <p className="text-gray-500 text-xs tracking-widest uppercase">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities & Methodology ─────────────────────────────────────── */}
      <section className="bg-brand-surface py-20 lg:py-28 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24">
            
            {/* Left Column: Capabilities */}
            <div>
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
                Key Focus Areas
              </p>
              <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight mb-10">
                Sector <span className="text-brand-gold">Capabilities</span>
              </h2>
              <div className="space-y-6">
                {detail.features.map((feature, i) => (
                  <div key={i} className="bg-white p-6 md:p-8 border-l-2 border-brand-gold shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-brand-navy text-base font-medium mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Process/Methodology */}
            <div>
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
                Strategic Approach
              </p>
              <h2 className="text-brand-navy text-3xl md:text-4xl font-light leading-tight mb-10">
                How We <span className="text-brand-gold">Deliver Value</span>
              </h2>
              <div className="space-y-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-px before:bg-brand-gold/20">
                {detail.process.map((step, i) => (
                  <div key={i} className="flex gap-6 items-start relative">
                     <div className="w-9 h-9 bg-brand-surface border border-brand-gold/30 rounded-full flex items-center justify-center shrink-0 relative z-10 text-brand-gold text-xs font-semibold">
                       {step.step}
                     </div>
                     <div className="pt-1.5">
                       <h3 className="text-brand-navy text-sm font-semibold mb-2">{step.title}</h3>
                       <p className="text-gray-500 text-xs leading-relaxed">{step.body}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Relevant Services ──────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20 lg:py-28 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
           <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
                Solutions
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-light leading-tight">
                Recommended <span className="text-brand-gold">Services</span>
              </h2>
            </div>
            <Link href="/services" className="text-brand-gold text-sm hover:text-white transition-colors flex items-center gap-2">
              View All Services <ArrowRightIcon />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-navy-border">
            {services.slice(0, 3).map((service) => (
              <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="bg-brand-navy-mid p-8 lg:p-10 group hover:bg-brand-gold transition-colors duration-300"
                >
                  <service.icon size={28} className="text-brand-gold group-hover:text-brand-navy mb-6 transition-colors" weight="light" />
                  <h3 className="text-white text-lg font-medium mb-3 group-hover:text-brand-navy transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-8 group-hover:text-brand-navy/80 transition-colors line-clamp-3">
                    {service.description}
                  </p>
                  <span className="text-brand-gold text-xs font-semibold group-hover:text-brand-navy flex items-center gap-1.5 transition-colors uppercase tracking-widest mt-auto">
                    Explore <ArrowRightIcon size={12} />
                  </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-20 px-6 md:px-16 text-center">
         <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            Partner With Us
         </p>
         <h2 className="text-brand-navy text-3xl md:text-4xl font-light mb-8 max-w-[600px] mx-auto leading-tight">
            Ready to transform your organisation?
         </h2>
         <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-3.5 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-colors"
         >
            {detail.cta} <ArrowRightIcon size={14} />
         </Link>
      </section>

      {/* ── Previous / Next Navigation ─────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="py-8 pr-0 md:pr-12">
            {prevIndustry ? (
              <Link
                href={`/industries/${prevIndustry.slug}`}
                className="group flex items-start gap-4"
              >
                <div className="w-10 h-10 border border-gray-200 flex items-center justify-center mt-0.5 group-hover:border-brand-gold transition-colors shrink-0">
                  <ArrowLeftIcon size={16} className="text-gray-400 group-hover:text-brand-gold transition-colors" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1 tracking-wide uppercase">Previous Industry</p>
                  <p className="text-brand-navy text-sm font-medium group-hover:text-brand-gold transition-colors">
                    {prevIndustry.shortTitle}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
          <div className="py-8 pl-0 md:pl-12 flex justify-end">
            {nextIndustry ? (
              <Link
                href={`/industries/${nextIndustry.slug}`}
                className="group flex items-start gap-4 text-right"
              >
                <div>
                  <p className="text-gray-400 text-xs mb-1 tracking-wide uppercase">Next Industry</p>
                  <p className="text-brand-navy text-sm font-medium group-hover:text-brand-gold transition-colors">
                    {nextIndustry.shortTitle}
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
