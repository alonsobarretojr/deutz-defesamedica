import { UserRound } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';

const tags = ['[Defesa perante o CRM]', '[Direito + Medicina]', '[Ex-conselheiro CRM — CONFIRMAR]'];

export default function QuemAssina() {
  return (
    <section className="bg-light py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>QUEM VAI DEFENDER VOCÊ</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight text-dark">
              Quem defende o médico também conhece a{' '}
              <em className="italic text-accent">medicina por dentro</em>.
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-[1.7] text-body">
              Na Deutz, a defesa do médico é conduzida por uma equipe que une Direito
              e Medicina. Isso muda a estratégia: quem monta a sua defesa entende, na
              prática, o rito do conselho, a rotina do consultório e a linguagem do
              processo ético.
            </p>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-light"
                aria-hidden="true"
              >
                <UserRound className="h-8 w-8 text-body/60" />
              </div>
              <div>
                <p className="text-lg font-semibold text-dark">[NOME COMPLETO]</p>
                <p className="text-sm text-body">
                  [OAB/UF nº 000.000] · [CRM/UF nº 00000]
                </p>
              </div>
            </div>
            <p className="mt-5 text-[1.0625rem] leading-[1.7] text-body">
              [Médico(a) com XX anos de experiência clínica] e advogado(a). [Ex-conselheiro(a)
              do CRM-XX]. Conhece por dentro o funcionamento do conselho e o rito das
              sindicâncias — e traz isso para cada linha de defesa.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-dashed border-accent/40 px-3 py-1 text-xs font-medium text-body"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-body/60">
              Placeholder — aguardando dados reais e validação do cliente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
