# Fernanda Lins Estética

Site de captação da [Fernanda Lins Estética Facial e Corporal](https://www.instagram.com/fernandalinsestetica/) —
Rua Monjolo, 284, Jardim Monjolo, Zona Norte de São Paulo.

Astro estático, sem framework de UI e sem dependência em runtime. Gera HTML puro:
carrega rápido, o que melhora o Índice de Qualidade no Google Ads e derruba o custo por clique.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o dist/
```

## Contexto do projeto

- **`CLAUDE.md`** — leia primeiro: a tese do site, as regras que não se quebram,
  a estrutura técnica e o plano de campanhas.
- **`STATUS.md`** — em que ponto o trabalho parou, o que vem a seguir, o que está travado.
- **`docs/plano-captacao.html`** — a estratégia completa, aprovada. Abra no navegador.
- **`docs/hospedagem.md`** — onde publicar e como. Recomendação: Cloudflare Pages.
- **`docs/previa-navegavel.html`** — prévia estática das três páginas (não reflete o código atual).

## Estrutura

```
src/
  data/site.ts       Fonte única de verdade: endereço, WhatsApp, horários, mensagens
  layouts/Base.astro Head, rastreamento, topo, rodapé, barra fixa de WhatsApp
  pages/             Uma página por problema da cliente
  styles/global.css  Sistema visual (creme, ouro, serifada)
```

**Para mudar telefone, endereço ou horário, mexa só em `src/data/site.ts`** — propaga para
todas as páginas, para o rodapé e para o JSON-LD.

## Páginas

| Rota | Papel |
| --- | --- |
| `/` | Bifurca entre tratamento corporal e SPA |
| `/drenagem-pos-operatorio` | Campanha principal do Google Ads — maior valor por cliente |
| `/lipedema` | Segunda campanha — menor concorrência, alta intenção |
| `/gordura-localizada` | Criolipólise, enzimas, protocolo redutor intensivo |
| `/papada` | Enzimas pressurizadas, sem agulha |
| `/spa-day` | A porta 2: SPA e presente, com preço aberto |
| `/resultados` | Antes-e-depois. Sem caso publicado ainda — mostra estado vazio |
| `/sobre` | A Fernanda. É ela o ativo da marca |
| `/contato` | Mapa, horários, como chegar |

Fase 2: `/celulite-flacidez`, `/limpeza-de-pele` e `/vale-presente`.

## Rastreamento

Os IDs ficam em variáveis de ambiente, **nunca no código** (o repositório é público).
Configure no painel do deploy, usando `.env.example` como referência:

```
PUBLIC_GA4_ID
PUBLIC_GOOGLE_ADS_ID
PUBLIC_META_PIXEL_ID
```

Sem esses valores, nenhum script de terceiro é carregado — o site roda limpo em desenvolvimento.

Os cliques disparam eventos nomeados (`clique_whatsapp`, `clique_mapa`) com a página e a
posição do botão. Cada link de WhatsApp já leva uma mensagem pré-escrita diferente por
página: é o que permite saber de qual campanha veio cada conversa sem precisar de CRM.

## Antes de publicar

- [x] Foto da Fernanda no hero (`public/fernanda.jpeg`)
- [x] Nove páginas da fase 1 no ar
- [ ] **Horários reais** em `src/data/site.ts` — os atuais são uma suposição e
      aparecem no rodapé de todas as páginas e no JSON-LD que o Google lê
- [ ] **Domínio** em `astro.config.mjs` (`site:`) e em `public/robots.txt` (`Sitemap:`)
- [ ] **Variáveis de rastreamento** no painel da Cloudflare — criar antes as contas
      no GA4, no Google Ads e no Meta Business
- [ ] Preencher os casos de `/resultados` (ver `src/data/resultados.ts`)

## Regra de conteúdo

Antes-e-depois podem aparecer **no site**, com protocolo, duração, aviso de variação de
resultado e autorização de imagem assinada. **Nunca em anúncio** — a política de saúde e
bem-estar do Meta proíbe, e reprovações repetidas restringem a conta.
