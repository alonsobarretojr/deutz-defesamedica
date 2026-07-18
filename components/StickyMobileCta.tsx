import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-on-dark bg-bar p-3 md:hidden">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com um advogado no WhatsApp"
        data-cta="whatsapp"
        data-cta-location="sticky"
        className="focus-ring flex w-full items-center justify-center gap-2 rounded-[10px] bg-gold px-4 py-3 text-sm font-semibold text-bar transition-colors hover:bg-gold-hover"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Falar com um advogado no WhatsApp
      </a>
    </div>
  );
}
