import Logo from '@/components/Logo';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { services } from '@/lib/services';
import SectionGlow from '@/components/SectionGlow';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bar pb-8 pt-14 md:pt-20">
      <SectionGlow />
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-on-dark pb-10 md:grid-cols-3">
          <div>
            <Logo className="h-7 w-auto text-white" />
            <p className="mt-4 max-w-xs text-sm leading-[1.7] text-white/60">
              Advocacia especializada na defesa do
              médico e de instituições de saúde.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contato
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                WhatsApp:{' '}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring underline-offset-4 hover:underline"
                >
                  (27) 99281-5232
                </a>
              </li>
              <li>E-mail: deutz.adv@gmail.com</li>
              <li>R. José Alexandre Buaiz, 350, sala 1613, Enseada do Suá, Vitória-ES</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Áreas
            </h3>
            <p className="mt-4 text-sm leading-[1.7] text-white/60">
              {services.join(' · ')}
            </p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-[1.6] text-white/60">
          Conteúdo meramente informativo, em conformidade com o Código de Ética e
          Disciplina da OAB e o Provimento 205/2021. Este material não promete
          resultados nem constitui captação de clientela.
        </p>
      </div>
    </footer>
  );
}
