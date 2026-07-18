import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

type WhatsAppButtonProps = {
  label?: string;
  className?: string;
  location?: string;
};

export default function WhatsAppButton({
  label = 'Falar com um advogado no WhatsApp',
  className = '',
  location,
}: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-cta="whatsapp"
      data-cta-location={location}
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-[10px] bg-gold px-6 py-4 text-base font-semibold text-bar transition-colors hover:bg-gold-hover ${className}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  );
}
