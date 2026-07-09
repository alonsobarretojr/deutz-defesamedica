const stats = [
  { value: '+9', label: 'anos de experiência com Conselho do CRM' },
  { value: '+30', label: 'anos de experiência médica' },
  { value: 'Espírito Santo', label: 'Atuação em todo o Estado' },
];

export default function StatsBar() {
  return (
    <div className="bg-anchor py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span className="font-serif text-5xl font-medium leading-none text-gold md:text-6xl">
                {value}
              </span>
              <p className="mt-3 max-w-[16rem] text-sm uppercase tracking-wide leading-[1.6] text-white/70">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
