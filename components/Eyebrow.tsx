type EyebrowProps = {
  children: string;
  className?: string;
};

export default function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-wide text-accent ${className}`}
    >
      <span aria-hidden="true" className="h-px w-8 bg-accent" />
      {children}
    </p>
  );
}
