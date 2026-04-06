import Image from "next/image";
import { shapeFutureSection } from "../constants/content";

export function ShapeFuture() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-white flex items-center px-6 md:px-16 py-24">
        <div className="max-w-xl">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">{shapeFutureSection.eyebrow}</p>
          <h2 className="text-brand-navy text-2xl md:text-3xl font-semibold leading-tight mb-6">
            {shapeFutureSection.heading}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {shapeFutureSection.body}
          </p>
        </div>
      </div>

      <div className="relative h-96 lg:h-auto overflow-hidden">
        <Image
          src={shapeFutureSection.image}
          alt={shapeFutureSection.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/30" />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
        <div className="absolute bottom-8 left-8">
          <span className="text-xs bg-brand-gold text-brand-navy px-3 py-1 font-semibold tracking-widest uppercase">
            {shapeFutureSection.imageTag}
          </span>
        </div>
      </div>
    </section>
  );
}
