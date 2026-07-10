'use client';

import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { kind: 'count', prefix: '+', target: 9, label: 'anos de experiência com Conselho do CRM' },
  { kind: 'count', prefix: '+', target: 30, label: 'anos de experiência médica' },
  { kind: 'text', value: 'Espírito Santo', label: 'Atuação em todo o Estado' },
] as const;

type Stat = (typeof stats)[number];

function StatValue({ stat, start }: { stat: Stat; start: boolean }) {
  const target = stat.kind === 'count' ? stat.target : 0;
  const count = useCountUp(target, start && stat.kind === 'count');

  if (stat.kind === 'text') {
    return <>{stat.value}</>;
  }

  return (
    <>
      {stat.prefix}
      {count}
    </>
  );
}

export default function StatsBar() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <div className="bg-anchor py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div
          ref={reveal.ref}
          className={`flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-8 ${reveal.className}`}
          style={reveal.style}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="font-serif text-5xl font-medium leading-none text-gold md:text-6xl">
                <StatValue stat={stat} start={reveal.visible} />
              </span>
              <p className="mt-3 max-w-[16rem] text-sm uppercase tracking-wide leading-[1.6] text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
