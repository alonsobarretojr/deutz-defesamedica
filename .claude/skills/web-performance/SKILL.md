---
name: web-performance
description: Performance e Core Web Vitals da LP estática da Deutz. Cobre pipeline manual de imagens (o export é unoptimized), LCP, carregamento de fontes, JS/INP, estratégia de scripts de tracking (GTM/GA4/Pixel), CLS, CSS e cache/compressão no host compartilhado. Use ao adicionar imagens, fontes, animações, scripts de terceiros, ao otimizar velocidade, LCP/INP/CLS, ou ao configurar cache/.htaccess.
---

# web-performance — LP Deutz (Next.js estático)

## Metas (Core Web Vitals, mobile primeiro)
- **LCP** ≤ 2,5s · **INP** ≤ 200ms · **CLS** ≤ 0,1
Por quê: alimenta a nota de experiência da página no Google Ads e o tráfego é majoritariamente mobile.

## Contexto que muda as regras
- **Export estático** → o Next **não** otimiza imagem no servidor (`images.unoptimized`).
  Toda otimização de imagem é **manual, na origem**.
- **Host compartilhado (LiteSpeed/Apache)** → cache e compressão configurados via `.htaccess`.

## Imagens — prioridade máxima
- **Formato moderno:** servir WebP (base) e, quando compensar, AVIF via `<picture>`/`<source>`.
- **Dimensão certa:** exportar no tamanho de exibição (+2x para retina). Nunca subir um
  original de 3000px exibido a 400px.
- **`width`/`height` explícitos** (ou `aspect-ratio`) em toda imagem → evita CLS.
- **Responsivo:** usar `srcset` + `sizes` para o mobile baixar a versão menor.
- **Lazy abaixo da dobra:** `loading="lazy"`. A imagem de LCP (hero/foto principal) é
  `loading="eager"` + `fetchpriority="high"` + `<link rel="preload">`.
- **Comprimir** na origem (sharp/squoosh). SVG para logo e ícones (leve e nítido).
- **Fundo escuro do hero:** preferir cor sólida / gradiente CSS em vez de foto (quase custo zero).
- A foto de "quem assina" fica abaixo da dobra → WebP, lazy, dimensionada.

## LCP
- Identificar o elemento de LCP (provável: título do hero em Fraunces, ou foto/logo do topo).
- Se for texto: garantir preload da fonte (o `next/font` já pré-carrega os pesos usados).
- Se houver imagem no topo: preload + `fetchpriority="high"`, sem lazy.
- CSS crítico enxuto (ver seção CSS).

## Fontes
- `next/font` (self-host no build) já preload + gera fallback com métricas ajustadas (reduz CLS do swap).
- Carregar **só os pesos usados**; subset `latin`; `display: 'swap'`.
- Fraunces é variável — limitar aos eixos/pesos necessários para não inchar o payload.

## JS & INP
- **Client component só onde há interação:** CTA sticky, accordion do FAQ, animações de scroll.
  O resto é estático/Server Component.
- Evitar libs pesadas. Animações sutis: **CSS + IntersectionObserver**, não framer-motion.
- Nada de JS bloqueante no topo.

## Scripts de terceiros (tracking) — maior risco de INP
- Centralizar em **um GTM** em vez de três tags soltas.
- Carregar com `next/script`:
  - GTM/GA4: `strategy="afterInteractive"`.
  - Pixels que não precisam disparar cedo: `strategy="lazyOnload"` (protege o INP).
- `preconnect` para os domínios de analytics no `<head>`.
- Medir o custo das tags: elas costumam ser o item mais pesado de uma LP de campanha.

```tsx
import Script from 'next/script';
<Script id="gtm" strategy="afterInteractive">{`/* GTM-XXXX */`}</Script>
```

## CLS
- Dimensões explícitas em imagens/embeds.
- Reservar espaço para o **CTA sticky mobile** (`padding-bottom` no conteúdo) — a barra é
  `position: fixed`, mas o conteúdo não pode ficar por baixo dela.
- Não injetar conteúdo acima do que já está renderizado após o load.

## CSS
- Tailwind com `content` apontando certo → purga classes não usadas → CSS mínimo.
- Sem outro framework de CSS além do Tailwind.

## Cache & compressão no host (`.htaccess` na raiz do subdomínio)
```apache
# Compressão
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>

<IfModule mod_headers.c>
  # Estáticos com hash do Next (_next/static): imutáveis por 1 ano
  <FilesMatch "\.(js|css|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  # Imagens próprias: cache moderado (ou versione o nome do arquivo ao trocar)
  <FilesMatch "\.(avif|webp|png|jpg|jpeg|svg)$">
    Header set Cache-Control "public, max-age=2592000"
  </FilesMatch>
  # HTML: sempre revalidar
  <FilesMatch "\.html$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>
</IfModule>
```
> A Hostinger costuma ativar gzip/brotli por padrão; o bloco acima garante e reforça o cache.

## Medição
- Referência: **PageSpeed Insights** (é a métrica que o Google Ads enxerga) + Lighthouse (mobile).
- Rodar após o `next build`/deploy, não só em dev.
- Metas verdes nos três (LCP/INP/CLS) antes de subir a campanha.