type SectionHeadingProps = {
  label: string;
  heading?: React.ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
};

export default function SectionHeading({
  label,
  heading,
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const labelColor = tone === 'dark' ? 'text-gold' : 'text-body';

  return (
    <div className={`border-l-2 border-gold pl-3 md:pl-4 ${className}`}>
      <p className={`text-sm font-medium ${labelColor}`}>{label}</p>
      {heading && <div className="mt-2">{heading}</div>}
    </div>
  );
}
