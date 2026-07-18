import { Scale, Stethoscope, Lock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import SectionGlow from '@/components/SectionGlow';
import WhatsAppButton from '@/components/WhatsAppButton';

const pillars = [
  {
    icon: Scale,
    title: 'Direito + Medicina',
    description: 'Advogados e médico na mesma equipe.',
  },
  {
    icon: Stethoscope,
    title: 'Foco no médico',
    description: 'Sindicância, processo ético-profissional e processo por suposto erro médico.',
  },
  {
    icon: Lock,
    title: 'Sigilo absoluto',
    description: 'Confidencial e conforme a LGPD.',
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-anchor pb-14 pt-4 md:pb-16">
      <SectionGlow />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-y-0 left-[20%] w-px bg-white/[0.06]" />
        <div className="absolute inset-y-0 left-[50%] w-px bg-white/[0.06]" />
        <div className="absolute inset-y-0 left-[80%] w-px bg-white/[0.06]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <SectionHeading
            label="Direito médico"
            tone="dark"
            className="mx-auto w-fit text-left"
          />
          <h1 className="mt-5 font-serif text-[clamp(2.25rem,6vw,4rem)] font-medium leading-[1.05] text-white">
            Recebeu uma notificação do CRM? Sua defesa começa com quem entende de{' '}
            <em className="italic text-gold-dark">medicina por dentro.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-white/70">
            Sindicância no CRM, processo ético-profissional e acusação de erro médico,
            conduzidos por uma equipe que{' '}
            <span className="text-gold-dark">reúne advogados e médico</span>, com sigilo, do
            primeiro contato à decisão.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <WhatsAppButton location="hero" />
            <p className="text-sm text-white/60">
              Atendimento confidencial · Sem compromisso
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 divide-y divide-on-dark sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-3 px-0 py-5 sm:px-6 sm:py-0">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">{title}</p>
                <p className="mt-1 text-sm text-white/60">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
