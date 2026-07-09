---
name: landing-seo
description: SEO técnico da LP estática da Deutz. Cobre Metadata API do Next (title, description, canonical, Open Graph, Twitter), dados estruturados JSON-LD (LegalService + FAQPage), HTML semântico, robots.txt e sitemap.xml no export estático, e imagem de compartilhamento. Use ao definir metadados, tags <head>, títulos/descrições, schema/JSON-LD, sitemap, robots, canonical ou Open Graph.
---

# landing-seo — LP Deutz (Next.js estático)

## Enquadramento
LP de **tráfego pago** (Google Ads). SEO aqui = **higiene técnica + dados estruturados +
compartilhamento social**, não perseguição de ranking. Tudo precisa funcionar no
**export estático** (nada de rota dinâmica). Todo texto visível segue o guardrail OAB
(ver skill `oab-compliance`).

## Metadata (App Router, compatível com export)
No `layout.tsx`/`page.tsx`:
```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://defesamedica.deutzadv.com.br'),
  title: 'Defesa do médico em sindicância no CRM e erro médico — Deutz Advocacia',
  description:
    'Equipe que une Direito e Medicina na defesa do médico: sindicância no CRM, processo ético-profissional e erro médico. Atendimento sigiloso pelo WhatsApp.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://defesamedica.deutzadv.com.br/',
    siteName: 'Deutz Advocacia',
    title: 'Defesa do médico — Deutz Advocacia',
    description: '…',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
```
- `title` ~55–60 caracteres; `description` ~150–160. Ambos são **copy** → validar com o cliente e passar pelo OAB (sem promessa, sem superlativo).
- `canonical` **auto-referente** e coerente com `trailingSlash: true` (URL termina em `/`).
- `<html lang="pt-BR">`, `theme-color` `#1B3A5C`.
- **[DECISÃO] index vs noindex:** padrão = indexável (ganho orgânico grátis, não atrapalha o Ads).
  Só usar `noindex` se o cliente quiser a página exclusivamente para anúncio.

## Dados estruturados (JSON-LD)
Injetar via `<script type="application/ld+json">` na página.

**LegalService** (autoridade local — Vitória/ES):
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Deutz Advocacia",
  "url": "https://defesamedica.deutzadv.com.br/",
  "telephone": "+5527992815232",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. José Alexandre Buaiz, 350, sala 1613, Enseada do Suá",
    "addressLocality": "Vitória",
    "addressRegion": "ES",
    "postalCode": "29050-545",
    "addressCountry": "BR"
  },
  "areaServed": "Espírito Santo",
  "sameAs": ["https://deutzadv.com.br"],
  "description": "Defesa do médico em sindicância no CRM, processo ético-profissional e erro médico."
}
```

**FAQPage** — reaproveitar as perguntas do FAQ da copy.
- Regra do Google: o schema **tem que refletir o FAQ visível** na página (mesmas perguntas/respostas). Manter em sincronia.

**PROIBIDO:** schema de `Review`/`aggregateRating`. Não há avaliações — inventar viola a
política do Google **e** o OAB. Nada de nota/estrelas falsas.

## HTML semântico (é SEO e acessibilidade)
- Um único `<h1>` (título do hero); `<h2>` por seção, `<h3>` dentro.
- Landmarks: `<header> <main> <section> <footer> <nav>`.
- `alt` descritivo (logo = "Deutz Advocacia"; foto do responsável = nome + papel).
- CTA do WhatsApp com rótulo acessível (`aria-label`).
- Detalhes de contraste/foco na skill `deutz-ui`.

## Arquivos de rastreio (gerados no build, estáticos)
`app/robots.ts`:
```ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://defesamedica.deutzadv.com.br/sitemap.xml',
  };
}
```
`app/sitemap.ts`:
```ts
export default function sitemap() {
  return [{ url: 'https://defesamedica.deutzadv.com.br/', lastModified: new Date() }];
}
```
> Ambos funcionam com `output: 'export'` (viram `robots.txt` e `sitemap.xml` no build).

## Imagem de compartilhamento (OG)
- `og.jpg` **1200×630**, com a identidade da Deutz (fundo escuro, logo, título) — desenhar seguindo a `deutz-ui`.
- Otimizar o arquivo conforme a skill `web-performance`.

## Verificação & envio
- Verificar o domínio no **Google Search Console** (meta tag ou DNS) e enviar o `sitemap.xml`.
- Requer acesso do cliente ao GSC. **[Confirmar]**

## Performance = experiência = Ads
CWV entram na experiência da página. Não duplicar aqui — seguir a skill `web-performance`.