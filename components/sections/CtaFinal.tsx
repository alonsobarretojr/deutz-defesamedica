import WhatsAppButton from '@/components/WhatsAppButton';

export default function CtaFinal() {
  return (
    <section className="bg-dark py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <h2 className="mx-auto max-w-2xl font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight text-white">
          Sua carreira merece uma defesa <em className="italic text-accent">à altura</em>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-[1.7] text-white/70">
          Converse com quem une Direito e Medicina para defender o médico. Sigiloso e
          sem compromisso.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
