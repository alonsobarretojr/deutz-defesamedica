'use client';

import { Gavel, Stethoscope, ShieldCheck, FileText, UserCheck, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

const STAGGER_MS = 70;

// Ordem = ordem visual no grid bento: linha 1 (Acusação, Blindagem) preenche as
// duas colunas ao lado da âncora Sindicância; linha 2 (Questões, Atendimento)
// preenche as duas colunas antes da âncora Cooperativas.
const areas = [
  {
    icon: Stethoscope,
    title: 'Acusação de erro médico',
    description:
      'Elaboração da defesa e acompanhamento na esfera cível, com apoio de análise técnica e perícia.',
  },
  {
    icon: ShieldCheck,
    title: 'Blindagem e prevenção jurídica',
    description:
      'Revisão de prontuários, termos de consentimento e rotinas para reduzir riscos antes que virem processos.',
  },
  {
    icon: FileText,
    title: 'Questões contratuais',
    description:
      'Análise de contratos com hospitais, planos de saúde e cooperativas, resguardando os interesses do médico.',
  },
  {
    icon: UserCheck,
    title: 'Atendimento dedicado',
    description:
      'Você fala direto com o advogado responsável, com acompanhamento em cada etapa.',
  },
];

function AreaCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof Gavel;
  title: string;
  description: string;
  index: number;
}) {
  const reveal = useReveal<HTMLDivElement>(index * STAGGER_MS);
  return (
    <div
      ref={reveal.ref}
      className={`rounded-2xl border border-black/5 bg-white p-7 shadow-sm ${reveal.className}`}
      style={reveal.style}
    >
      <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
      <h3 className="mt-4 text-xl font-semibold text-title">{title}</h3>
      <p className="mt-2 text-[1.0625rem] leading-[1.7] text-body">{description}</p>
    </div>
  );
}

export default function AreasAtuacao() {
  const sindicancia = useReveal<HTMLDivElement>(0);
  const cooperativas = useReveal<HTMLDivElement>((areas.length + 1) * STAGGER_MS);

  return (
    <section id="areas-atuacao" className="bg-light py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          label="Áreas de atuação"
          heading={
            <h2 className="max-w-2xl font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight text-title">
              Em que defendemos <em className="italic text-gold-light">você</em>.
            </h2>
          }
        />
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.7] text-body">
          Cada situação pede uma estratégia própria. Atuamos nas frentes que ameaçam a
          carreira, o patrimônio e a reputação do médico.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            ref={sindicancia.ref}
            className={`flex flex-col justify-center rounded-2xl border border-on-dark bg-[linear-gradient(115deg,#2C5F86_0%,#24506F_50%,#1B3A5C_100%)] p-8 md:col-span-2 ${sindicancia.className}`}
            style={sindicancia.style}
          >
            <Gavel className="h-8 w-8 text-gold" aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-semibold text-white">
              Sindicância e processo ético-profissional
            </h3>
            <p className="mt-3 max-w-md text-[1.0625rem] leading-[1.7] text-white/70">
              Da notificação ao julgamento, conduzimos a defesa técnica do médico
              perante o CRM, as ouvidorias e os hospitais, em todas as instâncias.
            </p>
          </div>

          {areas.map(({ icon, title, description }, i) => (
            <AreaCard key={title} icon={icon} title={title} description={description} index={i + 1} />
          ))}

          <div
            ref={cooperativas.ref}
            className={`flex flex-col justify-center rounded-2xl border border-gold bg-white p-8 shadow-sm md:col-span-2 ${cooperativas.className}`}
            style={cooperativas.style}
          >
            <Users className="h-8 w-8 text-gold" aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-semibold text-gold-light">
              Cooperativas de trabalho médico
            </h3>
            <p className="mt-3 max-w-md text-[1.0625rem] leading-[1.7] text-body">
              Defesa em sindicâncias e processos disciplinares em cooperativas de
              trabalho médico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
