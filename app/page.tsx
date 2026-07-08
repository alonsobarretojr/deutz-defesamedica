import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import AreasAtuacao from '@/components/sections/AreasAtuacao';
import ComoFunciona from '@/components/sections/ComoFunciona';
import QuemAssina from '@/components/sections/QuemAssina';
import Faq from '@/components/sections/Faq';
import CtaFinal from '@/components/sections/CtaFinal';
import Footer from '@/components/sections/Footer';
import StickyMobileCta from '@/components/StickyMobileCta';
import { legalServiceJsonLd, faqPageJsonLd } from '@/lib/jsonld';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd()) }}
      />
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <AreasAtuacao />
        <ComoFunciona />
        <QuemAssina />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
