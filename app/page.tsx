import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import ServicesBar from '@/components/ServicesBar';
import AreasAtuacao from '@/components/sections/AreasAtuacao';
import StatsBar from '@/components/StatsBar';
import ComoFunciona from '@/components/sections/ComoFunciona';
import Equipe from '@/components/sections/Equipe';
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
        <ServicesBar />
        <AreasAtuacao />
        <StatsBar />
        <ComoFunciona />
        <Equipe />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
