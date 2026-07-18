'use client';

import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

const mauricioTags = ['Direito + Medicina', 'Conselheiro CRM-ES'];
const STAGGER_MS = 70;

export default function Equipe() {
  const mauricio = useReveal<HTMLDivElement>(0);
  const davi = useReveal<HTMLDivElement>(STAGGER_MS);

  return (
    <section id="equipe" className="bg-light py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          label="Equipe"
          heading={
            <h2 className="max-w-2xl font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight text-title">
              Quem defende o médico também conhece a{' '}
              <em className="italic text-gold-light">medicina por dentro</em>.
            </h2>
          }
        />
        <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-body">
          Na Deutz, a defesa do médico é conduzida por uma equipe que une Direito
          e Medicina. Isso muda a estratégia: quem monta a sua defesa entende, na
          prática, o rito do conselho, a rotina do consultório e a linguagem do
          processo ético.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            ref={mauricio.ref}
            className={`flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm ${mauricio.className}`}
            style={mauricio.style}
          >
            <div className="relative aspect-[4/3] w-full shrink-0">
              <Image
                src="/team/mauricio-800x600.webp"
                alt="Maurício Pires Anastácio"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-anchor px-3 py-1.5">
                <p className="text-[11px] font-semibold text-white">Maurício Pires Anastácio</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-light">
                OAB-ES nº 43.620 · CRM/ES nº 5409
              </p>
              <p className="mt-1 font-serif text-lg font-semibold text-title">
                Maurício Pires Anastácio
              </p>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-body">
                Médico pela EMESCAM (1995) e advogado pela FDV (2024). Pós-graduado em
                Ginecologia e Obstetrícia e em Sexologia, mestre em Políticas Públicas e
                Desenvolvimento Local e Especialista em Ginecologia e Obstetrícia
                (AMB/Febrasgo). Conselheiro Efetivo do CRM-ES, com 9 anos de experiência
                no conselho.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {mauricioTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold/40 px-3 py-1 text-xs font-medium text-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={davi.ref}
            className={`flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm ${davi.className}`}
            style={davi.style}
          >
            <div className="relative aspect-[4/3] w-full shrink-0">
              <Image
                src="/team/davi-800x600.webp"
                alt="Davi Robalo Deutz"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-anchor px-3 py-1.5">
                <p className="text-[11px] font-semibold text-white">Davi Robalo Deutz</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-light">
                OAB-ES nº 41.340
              </p>
              <p className="mt-1 font-serif text-lg font-semibold text-title">
                Davi Robalo Deutz
              </p>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-body">
                Graduado em Direito pela Faculdade de Direito de Vitória (FDV, 2024), com
                pós-graduação em Direito Cooperativista pela Faculdade Unimed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
