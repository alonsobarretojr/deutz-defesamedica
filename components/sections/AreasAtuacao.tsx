import { Gavel, Stethoscope, ShieldCheck, FileText, UserCheck } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';

const areas = [
  {
    icon: Stethoscope,
    title: 'Acusação de erro médico',
    description:
      'Elaboração da defesa e acompanhamento nas esferas cível e criminal, com apoio de análise técnica e perícia.',
  },
  {
    icon: ShieldCheck,
    title: 'Blindagem e prevenção jurídica',
    description:
      'Revisão de prontuários, termos de consentimento e rotinas para reduzir riscos antes que virem processo.',
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

export default function AreasAtuacao() {
  return (
    <section className="bg-light py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Eyebrow>ÁREAS DE ATUAÇÃO</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight text-dark">
          Em que defendemos <em className="italic text-accent">você</em>.
        </h2>
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.7] text-body">
          Cada situação pede uma estratégia própria. Atuamos nas frentes que ameaçam a
          carreira, o patrimônio e a reputação do médico.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-on-dark bg-dark p-7 lg:col-span-2">
            <Gavel className="h-6 w-6 text-accent" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-white">
              Sindicância e processo ético-profissional
            </h3>
            <p className="mt-2 text-[1.0625rem] leading-[1.7] text-white/70">
              Da notificação ao julgamento, conduzimos a defesa técnica do médico
              perante o CRM, as ouvidorias e os hospitais, em todas as instâncias.
            </p>
          </div>

          {areas.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-dark">{title}</h3>
              <p className="mt-2 text-[1.0625rem] leading-[1.7] text-body">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
