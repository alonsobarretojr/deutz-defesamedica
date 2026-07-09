import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';

const mauricioTags = ['Direito + Medicina', 'Conselheiro CRM-ES'];

export default function Equipe() {
  return (
    <section className="bg-light py-14 md:py-24">
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm md:col-span-2">
            <div className="flex items-center gap-4">
              <Image
                src="/team/mauricio-480.webp"
                alt="Maurício Pires Anastácio"
                width={80}
                height={80}
                loading="lazy"
                className="h-20 w-20 shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-title">Maurício Pires Anastácio</p>
                <p className="text-sm text-body">OAB-ES nº 43.620 · CRM/ES nº 5409</p>
              </div>
            </div>
            <p className="mt-5 text-[1.0625rem] leading-[1.7] text-body">
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

          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
            <Image
              src="/team/davi-480.webp"
              alt="Davi Robalo Deutz"
              width={64}
              height={64}
              loading="lazy"
              className="h-16 w-16 rounded-full object-cover"
            />
            <p className="mt-4 text-lg font-semibold text-title">Davi Robalo Deutz</p>
            <p className="text-sm text-body">OAB-ES nº 41.340</p>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-body">
              Graduado em Direito pela Faculdade de Direito de Vitória (FDV, 2024), com
              pós-graduação em Direito Cooperativista pela Faculdade Unimed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
