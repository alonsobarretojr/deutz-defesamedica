import { Plus } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { faqItems } from '@/lib/faq';

export default function Faq() {
  return (
    <section className="bg-light py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          label="Dúvidas comuns"
          heading={
            <h2 className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight text-title">
              Perguntas <em className="italic text-gold-light">frequentes</em>.
            </h2>
          }
        />

        <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
          {faqItems.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-title">
                {question}
                <Plus
                  className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-3xl text-[1.0625rem] leading-[1.7] text-body">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
