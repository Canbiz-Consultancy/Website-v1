import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { services, serviceDetails, industries } from "../../constants/content";
import { ArrowLeftIcon, ArrowRightIcon, CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  
  if (!service || !detail) return {};
  
  return {
    title: `${service.title} | Canbiz Advisory`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug] as any;

  if (!service || !detail) notFound();

  const serviceIndex = services.indexOf(service);
  const prevService = services[serviceIndex - 1] ?? null;
  const nextService = services[serviceIndex + 1] ?? null;

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-brand-navy font-sans selection:bg-brand-gold/30">
      <Navbar />
      <div className="h-14 md:h-20" />

      {/* ── Hero (Outcome-Driven) ─────────────────────────────────────────── */}
      <section className="relative isolate px-6 md:px-16 pt-28 pb-32 md:pt-40 md:pb-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
             src={detail.hero} 
             alt={detail.heroAlt} 
             className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Gradient Overlay for Legibility */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-12">
            <Link
              href="/services"
              className="text-gray-400 hover:text-white text-[11px] font-medium tracking-widest uppercase transition-colors flex items-center gap-1.5"
            >
              <ArrowLeftIcon size={12} />
              Capabilities
            </Link>
            <span className="text-brand-gold/50 text-[11px]">-</span>
            <span className="text-white text-[11px] font-bold tracking-widest uppercase">
              {service.shortTitle}
            </span>
          </div>

          <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-6">
            {detail.eyebrow}
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight max-w-[900px] mb-8">
            {detail.headline}
          </h1>
          <div className="w-16 h-[2px] bg-brand-gold mb-8" />
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-[700px] font-light">
            {detail.subheadline}
          </p>
        </div>
      </section>

      {/* ── The Challenge (Pain Points) ───────────────────────────────────── */}
      <section className="bg-white px-6 md:px-16 py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
             <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-4">The Challenge</h2>
             <h3 className="text-2xl md:text-3xl font-light leading-snug">
               Navigating modern business complexity.
             </h3>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {detail.painPoints?.map((pain: any, i: number) => (
              <div key={i} className="relative">
                <div className="absolute -left-4 top-1.5 w-[2px] h-6 bg-brand-gold" />
                <h4 className="text-lg font-medium mb-3">{pain.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Solution (Deliverables) ──────────────────────────────────── */}
      <section className="bg-brand-surface px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 md:mb-24">
             <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-4">The Solution</h2>
             <h3 className="text-3xl md:text-4xl font-light leading-tight max-w-[600px]">
               Concrete deliverables driving structural transformation.
             </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {detail.deliverables?.map((del: any, i: number) => (
              <div key={i} className="bg-white p-10 md:p-14 hover:bg-[#fafafa] transition-colors">
                 <h4 className="text-xl font-medium mb-4">{del.title}</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">{del.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Process ──────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-16 py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
             <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-4">Our Approach</h2>
             <h3 className="text-2xl md:text-3xl font-light leading-snug sticky top-32">
               A methodical path to execution.
             </h3>
          </div>
          <div className="lg:w-2/3">
            <div className="flex flex-col gap-12">
              {detail.process?.map((step: any, i: number) => (
                <div key={i} className="flex gap-6 md:gap-10 items-start group">
                   <div className="text-4xl md:text-5xl font-light text-gray-200 group-hover:text-brand-gold transition-colors tracking-tighter w-16">
                     {step.step}
                   </div>
                   <div className="pt-2 border-t border-gray-200 w-full flex-1">
                     <h4 className="text-lg font-medium mb-3 mt-4">{step.title}</h4>
                     <p className="text-sm text-gray-500 leading-relaxed max-w-[500px]">{step.description}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tangible Outcomes & Proof ────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 md:py-32 bg-brand-navy text-white">
        <div className="max-w-[1200px] mx-auto">
           
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
             <div className="lg:w-1/3">
                <h2 className="text-[11px] text-brand-gold tracking-[0.2em] font-bold uppercase mb-4">Outcomes</h2>
                <h3 className="text-3xl md:text-4xl font-light leading-tight">
                  Measurable impact.
                </h3>
             </div>
             <div className="lg:w-2/3 grid grid-cols-2 gap-10 md:gap-16">
               {detail.outcomes?.map((outcome: any, i: number) => (
                 <div key={i} className="border-l border-brand-navy-border pl-6">
                   <p className="text-4xl md:text-5xl font-light text-brand-gold mb-3 tracking-tight">{outcome.metric}</p>
                   <p className="text-sm text-gray-400 font-medium">{outcome.description}</p>
                 </div>
               ))}
             </div>
           </div>

           {/* Proof Element */}
           <div className="bg-brand-navy-mid p-10 md:p-16 border-l-4 border-brand-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5 text-[150px] leading-none font-serif">&ldquo;</div>
              {detail.proof?.quote ? (
                <div className="relative z-10">
                   <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-[800px]">"{detail.proof.quote}"</p>
                   <div>
                     <p className="text-sm font-bold uppercase tracking-widest">{detail.proof.author}</p>
                     <p className="text-xs text-gray-400 mt-1">{detail.proof.role}, {detail.proof.company}</p>
                   </div>
                </div>
              ) : (
                <div className="relative z-10">
                   <p className="text-[11px] text-brand-gold tracking-[0.2em] font-bold uppercase mb-4">Case Impact</p>
                   <p className="text-xl md:text-2xl font-light leading-relaxed mb-6 max-w-[800px]">{detail.proof?.impact}</p>
                   <p className="text-sm text-gray-400 max-w-[600px] leading-relaxed">{detail.proof?.context}</p>
                </div>
              )}
           </div>

        </div>
      </section>

      {/* ── Audience & Why Us ──────────────────────────────────────────────── */}
      <section className="bg-brand-surface px-6 md:px-16 py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Target Audience */}
          <div>
            <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-4">Who This Is For</h2>
            <h3 className="text-2xl font-light mb-12">Designed for decisive leadership.</h3>
            <div className="space-y-8">
              {detail.targetAudience?.map((aud: any, i: number) => (
                <div key={i} className="flex gap-4">
                   <ArrowRightIcon className="text-brand-gold mt-1 shrink-0" size={16} />
                   <div>
                     <h4 className="text-sm font-bold mb-1 uppercase tracking-wide">{aud.title}</h4>
                     <p className="text-sm text-gray-500 leading-relaxed">{aud.description}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Us */}
          <div className="bg-white p-10 md:p-16 border border-gray-200">
            <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-4">The Canbiz Advantage</h2>
            <h3 className="text-2xl font-light mb-10">Distinctive capabilities.</h3>
            <div className="space-y-8">
              {detail.whyUs?.map((why: any, i: number) => (
                <div key={i} className="border-l-2 border-brand-gold pl-5">
                   <h4 className="text-sm font-bold mb-1">{why.title}</h4>
                   <p className="text-sm text-gray-500 leading-relaxed">{why.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA & FAQs ─────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* CTA */}
          <div className="lg:w-1/2">
             <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-4">Initiate Engagement</h2>
             <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
               Ready to structure your success?
             </h3>
             <p className="text-gray-500 text-sm leading-relaxed max-w-[400px] mb-10">
               Engage our advisory team to determine if {detail.eyebrow?.toLowerCase()} is the right strategic lever for your organization's current maturity stage.
             </p>
             <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-4 text-xs font-bold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 uppercase tracking-widest"
             >
                {detail.cta} <ArrowRightIcon size={14} />
             </Link>
          </div>

          {/* FAQs (Optional but rendered if present) */}
          {detail.faqs && detail.faqs.length > 0 && (
            <div className="lg:w-1/2 w-full">
               <h2 className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase mb-8">Frequent Inquiries</h2>
               <div className="border-t border-gray-200">
                 {detail.faqs.map((faq: any, i: number) => (
                   <details key={i} className="group border-b border-gray-200 [&_summary::-webkit-details-marker]:hidden">
                     <summary className="flex items-center justify-between cursor-pointer py-6 font-medium text-sm hover:text-brand-gold transition-colors">
                       {faq.question}
                       <span className="transition group-open:rotate-180">
                          <CaretDownIcon size={16} />
                       </span>
                     </summary>
                     <div className="pb-6 text-sm text-gray-500 leading-relaxed">
                       {faq.answer}
                     </div>
                   </details>
                 ))}
               </div>
            </div>
          )}

        </div>
      </section>

      {/* ── Next/Prev Navigation ───────────────────────────────────────────── */}
      <section className="bg-brand-surface border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 flex justify-between">
          <div className="py-12 md:py-16">
            {prevService && (
              <Link href={`/services/${prevService.slug}`} className="group block">
                <p className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-2">Previous Capability</p>
                <div className="flex items-center gap-3 text-brand-navy font-medium group-hover:text-brand-gold transition-colors">
                  <ArrowLeftIcon size={16} /> {prevService.title}
                </div>
              </Link>
            )}
          </div>
          <div className="py-12 md:py-16 text-right">
            {nextService && (
              <Link href={`/services/${nextService.slug}`} className="group block">
                <p className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-2">Next Capability</p>
                <div className="flex items-center justify-end gap-3 text-brand-navy font-medium group-hover:text-brand-gold transition-colors">
                  {nextService.title} <ArrowRightIcon size={16} />
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

