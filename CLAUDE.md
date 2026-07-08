# CLAUDE.md — LP Deutz Advocacia · Defesa do Médico

> Regras sempre-ativas do projeto. Mantenha este arquivo enxuto: aqui só entra o
> que vale para **todo** prompt. Workflow detalhado (design, SEO, performance,
> compliance) vive nas skills em `.claude/skills/`.

## Projeto
Landing page única, de alta conversão, para campanha de **Google Ads** do escritório
**Deutz Advocacia** (Vitória-ES), voltada à **defesa do médico**: sindicância no CRM,
processo ético-profissional, acusação de erro médico e blindagem jurídica.
Copy em **pt-BR**. Destino único de conversão: **WhatsApp**. Sem formulário.

## Stack (não mudar sem autorização)
- Next.js 14 (App Router) + TypeScript **strict** + Tailwind CSS
- Site 100% **estático**: o build gera `out/` para hospedagem compartilhada

## Restrição de deploy — CRÍTICA, inegociável
A LP é exportada como site estático e hospedada na **raiz** do subdomínio
`defesamedica.deutzadv.com.br` (Hostinger). Portanto:

- `next.config`: `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`
- **SEM** `basePath` / `assetPrefix` (a LP vive na raiz do subdomínio)
- **NUNCA** usar: API routes, Route Handlers server-side, Server Actions,
  `middleware.ts`, ISR / `revalidate`, fetch dinâmico no servidor, `next/image` otimizado
- Deploy = subir o **conteúdo** de `out/` para a pasta do subdomínio

Se qualquer requisito exigir servidor, **pare e sinalize** — não improvise um workaround.

## Paleta (não alterar sem autorização) — v2, aprovada com o cliente
```
Fundo (âncora):     #1B3A5C
Card / superfície:  #24506F   (sobe em relação ao fundo)
Barra / rodapé:     #0F2033   (afunda em relação ao fundo)
Título no claro:    #16324F
Fundo claro:        #F7F4EF
Corpo no claro:      #5C6B70
Branco:             #FFFFFF

Dourado — CTA + números:     #C5A57A
Dourado — destaque no dark:  #E0C8A4
Dourado — destaque no claro: #A8875A  (só em texto display/grande — ver contraste)
```
- **CTA:** preenchido `#C5A57A`, texto `#0F2033` (nunca branco). Sem verde nesta v2.
- **Dourado no fundo claro:** só em texto grande/display (`#A8875A`). Em texto pequeno
  (labels, filete) não usar dourado sobre `#F7F4EF` — usar `#16324F` ou o próprio filete
  (ver `deutz-ui`).
- Regras completas de uso, contraste e o padrão de cabeçalho (filete) na skill `deutz-ui`.
- Logo: sem conflito de cor a resolver — a marca usa o token do accent (`#C5A57A`) via
  componente inline (ver `deutz-ui` → Logo).

## Conversão
- Todo CTA aponta para o WhatsApp:
  `https://wa.me/5527992815232?text=Olá,%20sou%20médico(a)%20e%20gostaria%20de%20uma%20avaliação%20sigilosa%20do%20meu%20caso.`
- CTA fixo (sticky) no mobile é recomendado
- Sem formulário nesta v1

## Conteúdo & idioma
- Toda copy visível em **pt-BR**
- A copy já foi estruturada e será validada pelo cliente — é a **fonte da verdade**
- **Não inventar** números, credenciais, prêmios ou depoimentos. Onde faltar dado real,
  usar placeholder explícito e sinalizar (o cliente preenche).

## Guardrail OAB — Provimento 205/2021 (obrigatório)
Qualquer texto gerado ou editado deve respeitar: sem promessa de resultado, sem
urgência artificial, sem mercantilização ou superlativo, credenciais apenas factuais,
rodapé legal presente. Detalhe e checklist na skill `oab-compliance`.

## Padrões de qualidade (sempre-ativos)
- TypeScript **strict**; evitar `any`
- HTML **semântico** e acessível: contraste mínimo AA, foco visível, `alt` em imagens,
  um único `h1`, hierarquia de headings correta
- **Mobile-first** (maior parte do tráfego de Ads é mobile)
- Nunca commitar segredos: `.env`, `node_modules/`, `.next/`, `out/` no `.gitignore`

## Skills do projeto (consultar quando a tarefa pedir)
- `deutz-ui` — sistema visual, paleta, tipografia, componentes, logo, responsividade
- `landing-seo` — metadata, Open Graph, JSON-LD (LegalService), sitemap/robots
- `web-performance` — Core Web Vitals, pipeline de imagens, fontes, JS mínimo
- `oab-compliance` — guardrail do Provimento 205/2021
- `frontend-design` (oficial) — base de design
- `webapp-testing` (oficial) — validação de render e responsividade