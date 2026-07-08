---
name: deutz-ui
description: Sistema de design da landing page da Deutz Advocacia (defesa do médico) — paleta e seus papéis, contraste acessível, tipografia (Fraunces + Inter), escala, espaçamento, componentes, botões/CTA, ritmo de seções, uso do logo e responsividade mobile-first. Use sempre que for criar ou editar qualquer UI, componente, seção, estilo, layout, cor, tipografia ou classe visual desta LP.
---

# deutz-ui — Sistema de Design · LP Deutz · Defesa do Médico

## Direção visual
**Autoridade sóbria.** Escritório sério, confiável, premium e discreto (sigilo).
Muito respiro, tipografia editorial, alto contraste. Nada agressivo ou "vendedor"
(restrição OAB). O ritmo alterna fundo escuro e claro para dar gravidade e leitura
descansada. Referência de estrutura: Silva Pimenta — mas com a paleta da Deutz.

## Hero — layout (definido)
- Composição **centralizada**, coluna única (sem o split de formulário da referência; sem espaço vazio à direita).
- Ordem: eyebrow → headline (Fraunces, palavra-destaque em itálico + accent) → subtítulo → CTA verde → reforço.
- **Pilares de confiança integrados ao pé do hero** (não uma segunda faixa): 3 itens, filete fino `rgba(255,255,255,.08)` entre eles, ícones em accent (balança, estetoscópio, cadeado).
- Sem item de abrangência no hero — coberto no FAQ.

## Paleta — papéis de uso
As 6 cores são travadas (ver CLAUDE.md). Aqui definimos **onde** cada uma entra:

| Cor | Papel |
|-----|-------|
| `#1E1E2E` dark | Fundo de hero, credibilidade, CTA final, rodapé |
| `#F4F4F4` light | Fundo das seções de conteúdo |
| `#FFFFFF` white | Cards sobre fundo claro; texto sobre fundo escuro |
| `#555560` body | Parágrafos sobre claro/branco |
| `#F5A623` accent | Eyebrows, palavra-destaque dos títulos, ícones, filetes, números |
| `#2ECC8A` cta | **Exclusivo de botões de ação** |

Regras rígidas de cor:
- **Laranja `#F5A623`: NUNCA em botões.** Nunca como texto de corpo sobre fundo claro
  (contraste insuficiente). Só decorativo / display / sobre escuro.
- **Verde `#2ECC8A`: só em CTA.** Texto do botão em `#1E1E2E` (escuro), **nunca branco**.
  Hover: `#26B478` (tom derivado de estado — não é cor de marca nova).
- Títulos sobre fundo claro: `#1E1E2E`. Texto secundário sobre escuro: branco a ~70%.

## Acessibilidade — pares aprovados (contraste AA+)
- ✅ Branco sobre `#1E1E2E` · ✅ Corpo `#555560` sobre `#F4F4F4`/branco
- ✅ Título `#1E1E2E` sobre `#F4F4F4` · ✅ CTA verde + texto escuro
- ❌ Branco sobre verde · ❌ Laranja como texto de corpo sobre claro
- Sempre: `focus-visible` com outline claro, alvos de toque ≥ 44px, `alt` em imagens,
  um único `h1`, hierarquia de headings correta.

## Tipografia
Par **display serifada + corpo sans**:
- **Display (títulos): Fraunces** — pesos 400/500/600. Use o **itálico** na palavra-destaque
  de cada título (assinatura visual, como na referência: *"...de quem entende de medicina."*).
  Alternativas: Spectral, Newsreader.
- **Corpo/UI: Inter** — 400/500/600.
- Carregar via `next/font/google` (self-host no build; compatível com export estático;
  `display: 'swap'`, subset `latin`).
- Eyebrow/labels: Inter, UPPERCASE, `tracking-wide`, ~0.8rem, cor laranja.

Escala fluida (mobile-first, `clamp`):
- Display / h1: `clamp(2.25rem, 6vw, 4rem)`, leading ~1.05
- h2: `clamp(1.75rem, 4vw, 2.75rem)`
- h3: 1.25–1.5rem
- Corpo: 1–1.125rem, leading 1.6–1.7
- Eyebrow: 0.8rem

## Espaçamento & layout
- Grade de 8px (escala padrão do Tailwind).
- Conteúdo: largura máx ~1200px, centralizado (`max-w-6xl`), gutter `px-5` (mobile) / `px-8`+ (desktop).
- Padding vertical de seção: `py-14/16` (mobile) → `py-20/24` (desktop).
- Respiro é premium — não lotar; deixar ar entre blocos.

## Componentes (regras, não código fixo)
- **Botão CTA (único, WhatsApp):** fundo verde, texto escuro, raio ~10px, padding generoso,
  ícone do WhatsApp opcional, hover escurece + leve elevação. Nenhum outro botão compete com ele.
- **Cards:** sobre claro = branco, borda sutil/sombra leve, raio 12–16px. Sobre escuro =
  superfície levemente mais clara (`#262636`) + borda `rgba(255,255,255,.08)`. Card em
  destaque pode ser escuro com ícone (padrão da referência).
- **Ícones:** linha (`lucide-react`), laranja ou branco conforme o fundo.
- **Filetes/dividers:** finos, laranja ou branco a baixa opacidade.

## Ritmo de seções (cadência dark/light)
Hero **(dark)** → Credibilidade (tira fina ao fim do hero, para não empilhar dois blocos
escuros pesados) → Áreas **(light)** → Como funciona **(branco/light)** → Quem assina
**(light)** → FAQ **(light)** → CTA final **(dark)** → Rodapé **(dark)**.
Ajustável, mas manter a alternância legível.

## Craft editorial — descaracterizar "cara de IA"

Página gerada por IA tem tells reconhecíveis. Evitar cada um, de propósito:

**Cabeçalho de seção — PADRÃO DEFINIDO: filete.**
Abandonar o eyebrow (rótulo caixa-alta + tracking + linha decorativa centralizada) —
é o tell nº1. No lugar: filete vertical dourado (`border-left: 2px solid #C5A57A`,
`padding-left: 12px`), título direto ao lado/abaixo, com uma frase-guia curta assumindo
o papel do rótulo. Sem caixa-alta, sem tracking largo.

**Grid de cards idênticos** (mesmo ícone, mesmo peso, tudo simétrico) → quebrar
hierarquia real: um item em destaque que rompe a grade, tamanhos/pesos diferentes
entre os cards, não seis retângulos iguais.

**Ícones de biblioteca como decoração** (lucide genérico repetido) → usar com
moderação; preferir um motivo visual próprio da marca a ícone de catálogo solto.
Number badges (01, 02, 03) são preferíveis a ícone decorativo sem função.

**Tudo centralizado no eixo do meio** → introduzir assimetria: seções alinhadas à
esquerda, conteúdo "pendurado" numa grade editorial com offsets, não tudo no centro.

**Ritmo idêntico entre seções** (mesma estrutura: rótulo → título → subtítulo → grid,
sempre o mesmo respiro) → variar a composição por seção. Uma pode ter um destaque
maior (pull-quote, número grande), outra full-bleed, outra dividida assimetricamente.

**Passos numerados em fileira idêntica** com chips genéricos embaixo de bio →
tratar como linha do tempo editorial de verdade, não como três colunas clonadas.

**O antídoto mais forte: conteúdo real e específico.** Nome, OAB, CRM, anos de
experiência, foto de pessoa real, endereço verdadeiro — genérico é o que mais
cheira a template. Quanto mais concreto o texto, menos "IA" a página parece.

**Micro-tipografia:** sem travessão (—) em prosa; preferir vírgula, ponto ou frase
nova. Aspas tipográficas corretas. Variar o comprimento das frases entre parágrafos.

> Esta lente se aplica a cada seção da página, não é uma etapa separada — usar
> junto com as decisões de layout de cada bloco (hero, áreas, "quem assina", etc.).

## Logo
- Renderizar **inline** via componente `components/Logo.tsx` (SVG embutido), não como `<img>`.
- Texto "ADVOCACIA": `fill="currentColor"` → herda a cor da seção (branco no escuro,
  `#1E1E2E` no claro). Dispensa arquivo on-light separado.
- Marca/wordmark: usar o token do accent `var(--color-accent)` (`#F5A623`) — reconcilia o
  laranja nativo do arquivo (`#f9a044`) com a paleta. (Resolve o item que estava pendente.)
- Espaço livre mínimo ≈ metade da altura do logo. Altura no header ~28–32px.
- Vetor → nítido em retina; zero requisição HTTP extra.

## Responsividade (mobile-first)
- Breakpoints padrão Tailwind (sm/md/lg/xl).
- **Hero:** 1 coluna no mobile (título → subtítulo → CTA → selo de sigilo). Sem formulário lateral.
- **Grid de áreas:** 1 col → 2 (md) → 3 (lg).
- **CTA sticky no mobile:** barra fixa no rodapé com o botão verde do WhatsApp sempre visível.
- Tipografia fluida via `clamp`; imagens com `width/height` definidos (evita CLS).

## Movimento (opcional, discreto)
Fade/slide sutil ao entrar na viewport; hover leve nos botões. Respeitar
`prefers-reduced-motion`. Nada chamativo.

---

## Implementação — tokens

**CSS variables** (`globals.css`):
```css
:root {
  --color-dark: #1E1E2E;
  --color-light: #F4F4F4;
  --color-white: #FFFFFF;
  --color-body: #555560;
  --color-accent: #F5A623;     /* títulos/destaques — nunca botões */
  --color-cta: #2ECC8A;        /* só botões */
  --color-cta-hover: #26B478;  /* estado derivado */
  --surface-dark-2: #262636;   /* cards sobre escuro */
  --border-on-dark: rgba(255, 255, 255, 0.08);
}
```

**Tailwind** (`tailwind.config.ts` → `theme.extend`):
```ts
colors: {
  dark: '#1E1E2E',
  light: '#F4F4F4',
  body: '#555560',
  accent: '#F5A623',                                 // nunca em botões
  cta: { DEFAULT: '#2ECC8A', hover: '#26B478' },      // só em botões
  surface: '#262636',
},
fontFamily: {
  serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
},
```

**next/font** (`app/layout.tsx`):
```ts
import { Fraunces, Inter } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], display: 'swap', variable: '--font-fraunces' });
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

// <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
```

> Se este arquivo crescer, mova receitas de componentes para `references/components.md`
> e mantenha aqui só os princípios e tokens.