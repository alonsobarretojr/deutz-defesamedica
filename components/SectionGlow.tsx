type SectionGlowProps = {
  className?: string;
};

export default function SectionGlow({ className = '' }: SectionGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(circle at 8% 95%, rgba(197,165,122,0.16), transparent 45%), ' +
          'radial-gradient(circle at 95% 5%, rgba(255,255,255,0.05), transparent 40%)',
      }}
    />
  );
}
