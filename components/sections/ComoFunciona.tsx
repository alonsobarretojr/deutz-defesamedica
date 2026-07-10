'use client';

import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

const STAGGER_MS = 70;

const steps = [
  {
    number: '01',
    title: 'Você relata o caso',
    description:
      'Pelo WhatsApp, com sigilo absoluto. Realizamos uma triagem inicial cuidadosa para compreender a sua situação com rapidez e discrição.',
  },
  {
    number: '02',
    title: 'Análise por advogado e médico',
    description:
      'Seu caso será analisado em conjunto por advogados e por um médico, unindo estratégia jurídica e visão técnica para uma defesa mais precisa, segura e alinhada à realidade da profissão médica.',
  },
  {
    number: '03',
    title: 'Reunião estratégica com o cliente',
    description:
      'Após a análise inicial, realizamos uma reunião para esclarecer dúvidas, alinhar os próximos passos e definir a melhor estratégia de defesa para o seu caso.',
  },
  {
    number: '04',
    title: 'Defesa estratégica da sua carreira',
    description:
      'Atuamos do início ao fim para proteger sua imagem, seu CRM e sua trajetória profissional, com acompanhamento próximo em cada etapa.',
  },
];

function Step({
  number,
  title,
  description,
  isFirst,
  isLast,
  index,
}: {
  number: string;
  title: string;
  description: string;
  isFirst: boolean;
  isLast: boolean;
  index: number;
}) {
  const reveal = useReveal<HTMLDivElement>(index * STAGGER_MS);
  return (
    <div
      ref={reveal.ref}
      className={`relative ${isLast ? '' : 'pb-10 md:pb-12'} ${reveal.className}`}
      style={reveal.style}
    >
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute -bottom-4 left-4 top-4 w-px bg-[rgba(22,50,79,0.15)]"
        />
      )}
      <div className="flex items-center gap-5">
        <div
          className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
            isFirst ? 'bg-anchor' : 'border border-gold'
          }`}
        >
          <span
            className={`font-serif text-sm font-medium leading-none ${
              isFirst ? 'text-gold-dark' : 'text-title'
            }`}
          >
            {number}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-title md:text-xl">{title}</h3>
      </div>
      <p className="mt-2 pl-[52px] text-[1.0625rem] leading-[1.7] text-body">{description}</p>
    </div>
  );
}

export default function ComoFunciona() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          label="O caminho"
          heading={
            <h2 className="max-w-2xl font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight text-title">
              Defesa técnica, sigilosa,{' '}
              <em className="italic text-gold-light">ao seu&nbsp;lado</em>.
            </h2>
          }
        />

        <div className="mt-12 max-w-2xl">
          {steps.map(({ number, title, description }, i) => (
            <Step
              key={number}
              number={number}
              title={title}
              description={description}
              isFirst={i === 0}
              isLast={i === steps.length - 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
