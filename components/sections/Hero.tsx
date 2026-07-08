import { Scale, Stethoscope, Lock } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';
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
    description: 'Sindicância, ético e erro médico.',
  },
  {
    icon: Lock,
    title: 'Sigilo absoluto',
    description: 'Confidencial e conforme a LGPD.',
  },
];

export default function Hero() {
  return (
    <section className="bg-dark pb-14 pt-4 md:pb-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow>DIREITO MÉDICO · DEFESA DO MÉDICO</Eyebrow>
          <h1 className="mt-5 font-serif text-[clamp(2.25rem,6vw,4rem)] font-medium leading-[1.05] text-white">
            Recebeu uma notificação do CRM? Sua defesa começa com quem entende de{' '}
            <em className="italic text-accent">medicina por dentro.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-white/70">
            Sindicância no CRM, processo ético-profissional e acusação de erro médico —
            conduzidos por uma equipe que reúne advogados e médico, com sigilo, do
            primeiro contato à decisão.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <WhatsAppButton />
            <p className="text-sm text-white/60">
              Atendimento confidencial · Sem compromisso
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 divide-y divide-on-dark sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-3 px-0 py-5 sm:px-6 sm:py-0">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
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
