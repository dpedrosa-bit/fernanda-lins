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

- [ ] Trocar o espaço reservado da foto na home por um retrato real da Fernanda (`public/fernanda.jpg`)
- [ ] Conferir os horários em `src/data/site.ts` (os atuais são uma suposição)
- [ ] Configurar as variáveis de ambiente de rastreamento
- [ ] Apontar o domínio e atualizar `site` em `astro.config.mjs`

## Regra de conteúdo

Antes-e-depois podem aparecer **no site**, com protocolo, duração, aviso de variação de
resultado e autorização de imagem assinada. **Nunca em anúncio** — a política de saúde e
bem-estar do Meta proíbe, e reprovações repetidas restringem a conta.
