'use client';

import WhatsAppButton from '@/components/WhatsAppButton';
import SectionGlow from '@/components/SectionGlow';
import { useReveal } from '@/hooks/useReveal';

export default function CtaFinal() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-anchor py-14 md:py-24">
      <SectionGlow />
      <div
        ref={reveal.ref}
        className={`relative z-10 mx-auto max-w-6xl px-5 text-center md:px-8 ${reveal.className}`}
        style={reveal.style}
      >
        <h2 className="mx-auto max-w-2xl font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight text-white">
          Sua carreira merece uma defesa <em className="italic text-gold-dark">à altura</em>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-[1.7] text-white/70">
          Converse com quem une Direito e Medicina para defender o médico. Sigiloso e
          sem compromisso.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton location="cta_final" />
        </div>
      </div>
    </section>
  );
}
