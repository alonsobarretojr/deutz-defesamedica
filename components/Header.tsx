import { Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { PHONE_DISPLAY, PHONE_URL } from '@/lib/phone';

export default function Header() {
  return (
    <header className="bg-anchor">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Logo className="h-10 w-auto text-white" />
        <a
          href={PHONE_URL}
          className="focus-ring flex items-center gap-1.5 text-[13px] text-white/70 transition-colors hover:text-white"
        >
          <Phone className="h-[13px] w-[13px]" aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}
