import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className="bg-dark">
      <div className="mx-auto max-w-6xl px-5 py-6 md:px-8">
        <Logo className="h-8 w-auto text-white" />
      </div>
    </header>
  );
}
