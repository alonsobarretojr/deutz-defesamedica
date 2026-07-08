import Eyebrow from '@/components/Eyebrow';

const steps = [
  {
    number: '01',
    title: 'Você relata o caso',
    description: 'Pelo WhatsApp, com sigilo absoluto. Avaliamos a sua situação.',
  },
  {
    number: '02',
    title: 'Estratégia especializada',
    description:
      'Definimos a melhor linha de defesa considerando o rito e os detalhes do caso.',
  },
  {
    number: '03',
    title: 'Defesa do início ao fim',
    description: 'Conduzimos tudo ao seu lado, com acompanhamento em cada etapa.',
  },
];

export default function ComoFunciona() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Eyebrow>O CAMINHO</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight text-dark">
          Simples, sigiloso, <em className="italic text-accent">do seu lado</em>.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map(({ number, title, description }) => (
            <div key={number}>
              <span className="font-serif text-4xl font-medium text-accent">
                {number}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-dark">{title}</h3>
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
