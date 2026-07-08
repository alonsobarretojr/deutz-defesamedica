import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

type WhatsAppButtonProps = {
  label?: string;
  className?: string;
};

export default function WhatsAppButton({
  label = 'Falar com um advogado no WhatsApp',
  className = '',
}: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-[10px] bg-cta px-6 py-4 text-base font-semibold text-dark transition-colors hover:bg-cta-hover ${className}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  );
}
