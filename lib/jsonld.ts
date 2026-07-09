import { faqItems } from '@/lib/faq';
import { SITE_URL } from '@/lib/site';

export function legalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Deutz Advocacia',
    url: `${SITE_URL}/`,
    telephone: '+5527992815232',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. José Alexandre Buaiz, 350, sala 1613, Enseada do Suá',
      addressLocality: 'Vitória',
      addressRegion: 'ES',
      postalCode: process.env.NEXT_PUBLIC_POSTAL_CODE || '29050-545',
      addressCountry: 'BR',
    },
    areaServed: process.env.NEXT_PUBLIC_AREA_SERVED || 'Espírito Santo',
    sameAs: ['https://deutzadv.com.br'],
    description:
      'Defesa do médico em sindicância no CRM, processo ético-profissional e erro médico.',
  };
}

export function faqPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}
