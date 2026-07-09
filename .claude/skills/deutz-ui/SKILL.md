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
- Ordem: label (filete) → headline (Fraunces, palavra-destaque em itálico + dourado) → subtítulo → CTA dourado → reforço.
- **Pilares de confiança integrados ao pé do hero** (não uma segunda faixa): 3 itens, filete fino `rgba(255,255,255,.08)` entre eles, ícones em dourado (balança, estetoscópio, cadeado).
- Sem item de abrangência no hero — coberto no FAQ.

## Paleta — papéis de uso (v2)
As cores são travadas (ver CLAUDE.md). Aqui definimos **onde** cada uma entra:

| Cor | Papel |
|-----|-------|
| `#1B3A5C` âncora | Fundo de hero (e header, unificado ao hero), CTA final |
| `#24506F` surface | Cards/superfícies sobre o âncora (sobem) |
| `#0F2033` bar | Barra de serviços, faixas de credibilidade, rodapé (afundam) |
| `#16324F` title | Títulos sobre fundo claro |
| `#F7F4EF` light | Fundo das seções de conteúdo |
| `#5C6B70` body | Parágrafos sobre claro/branco |
| `#FFFFFF` white | Cards sobre fundo claro; texto sobre fundo escuro |
| `#C5A57A` gold | CTA + números + ícones |
| `#E0C8A4` gold-dark | Palavra-destaque em título, sobre fundo escuro |
| `#A8875A` gold-light | Palavra-destaque em título, sobre fundo claro (só texto display/grande) |

Regras rígidas de cor:
- **CTA:** preenchido `#C5A57A`, texto `#0F2033` (nunca branco). Sem verde nesta v2.
- **Dourado no fundo claro (`#F7F4EF`):** só em texto grande/display (`#A8875A`). Em texto
  pequeno (labels, filete) não usar dourado como cor do texto ali, usar `#16324F` — o filete
  em si (a linha vertical) pode continuar dourado.
- Títulos sobre fundo claro: `#16324F`. Texto secundário sobre escuro: branco a ~70%.
- Ícones e números (badges 01/02/03…) usam o dourado base `#C5A57A` em qualquer fundo.

## Acessibilidade — pares aprovados (contraste AA+)
- ✅ Branco sobre `#1B3A5C`/`#24506F`/`#0F2033` · ✅ Corpo `#5C6B70` sobre `#F7F4EF`/branco
- ✅ Título `#16324F` sobre `#F7F4EF` · ✅ CTA dourado `#C5A57A` + texto `#0F2033`
- ❌ Branco sobre dourado · ❌ Dourado como texto pequeno sobre `#F7F4EF`
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
- Labels de cabeçalho de seção: ver padrão **filete** em "Craft editorial" (não mais
  caixa-alta com tracking largo — esse padrão foi abandonado).

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
- **Botão CTA (único, WhatsApp):** fundo dourado `#C5A57A`, texto `#0F2033` (nunca branco),
  raio ~10px, padding generoso, ícone do WhatsApp opcional, hover escurece + leve elevação.
  Nenhum outro botão compete com ele.
- **Cards:** sobre claro = branco, borda sutil/sombra leve, raio 12–16px. Sobre o âncora
  (`#1B3A5C`) = superfície `#24506F` + borda `rgba(255,255,255,.08)`. Card em destaque pode
  usar a superfície com um leve gradiente (ver Craft editorial) + ícone.
- **Ícones:** linha (`lucide-react`), dourado (`#C5A57A`) ou branco conforme o fundo.
- **Filetes/dividers:** finos, dourado ou branco a baixa opacidade.

## Ritmo de seções (cadência dark/light)
Header **(âncora)** + Hero **(âncora)** → Barra de serviços (tira fina `#0F2033`) →
Áreas **(light)** → Barra de números **(âncora)** → Como funciona **(branco/light)** →
Equipe **(light)** → FAQ **(light)** → CTA final **(âncora)** → Rodapé **(`#0F2033`)**.
Header e Hero usam a **mesma cor** (âncora) e não têm borda/sombra entre si — a LP não
tem navegação, então o header é lido como a linha superior do hero, não como um bloco
de menu à parte. Ajustável, mas manter a alternância legível.

## Textura decorativa (glow + linhas)
- **Glow radial duplo**, discreto, em seções de fundo escuro (âncora ou bar): um tom
  dourado sutil no canto inferior-esquerdo (`rgba(197,165,122,0.16)`) e um neutro mais
  fraco no canto superior-direito (`rgba(255,255,255,0.05)`), via componente
  `components/SectionGlow.tsx`. Decorativo, `aria-hidden`, atrás do conteúdo (`z-0`,
  conteúdo em `relative z-10`). Usado no Hero, CTA final e Rodapé.
- **Linhas verticais finas** (1px, `rgba(255,255,255,0.06)`, ~20/50/80% da largura):
  **exclusivas do Hero** — não propagar para outras seções, para manter esse elemento
  como assinatura visual de abertura da página, não um padrão repetido.
- Ambos são puramente decorativos e sutis o suficiente para não afetar o contraste do
  texto sobre o fundo sólido.

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
  `#16324F` no claro). Dispensa arquivo on-light separado.
- Marca/wordmark: usar o token dourado `var(--color-gold)` (`#C5A57A`) via componente
  inline. Sem conflito de cor a resolver.
- Espaço livre mínimo ≈ metade da altura do logo. Altura no header ~40px (`h-10`).
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
  --color-anchor: #1B3A5C;
  --color-surface: #24506F;
  --color-bar: #0F2033;
  --color-title: #16324F;
  --color-light: #F7F4EF;
  --color-white: #FFFFFF;
  --color-body: #5C6B70;
  --color-gold: #C5A57A;        /* CTA + números + ícones */
  --color-gold-hover: #B1946E;  /* estado derivado do CTA */
  --color-gold-dark: #E0C8A4;   /* destaque em título sobre fundo escuro */
  --color-gold-light: #A8875A;  /* destaque em título sobre fundo claro, só display */
  --border-on-dark: rgba(255, 255, 255, 0.08);
}
```

**Tailwind** (`tailwind.config.ts` → `theme.extend`):
```ts
colors: {
  anchor: '#1B3A5C',
  surface: '#24506F',
  bar: '#0F2033',
  title: '#16324F',
  light: '#F7F4EF',
  body: '#5C6B70',
  gold: {
    DEFAULT: '#C5A57A',   // CTA + números + ícones
    hover: '#B1946E',
    dark: '#E0C8A4',      // destaque de título sobre fundo escuro
    light: '#A8875A',     // destaque de título sobre fundo claro (só display)
  },
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