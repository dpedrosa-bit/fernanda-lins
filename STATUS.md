# STATUS

Atualizado em 27/10/2026. Leia o `CLAUDE.md` antes deste arquivo.

## Feito

- Estratégia completa desenhada e **aprovada pela Fernanda** (`docs/plano-captacao.html`).
- **Fase 1 completa: nove páginas** buildando limpo — home, pós-operatório,
  lipedema, gordura localizada, papada, SPA day, resultados, sobre e contato.
- Domínio `fernandalinsestetica.com.br` registrado e configurado no código.
- Horários confirmados com a Fernanda.
- Sitemap corrigido: o `robots.txt` prometia um arquivo que não era gerado.
- Foto do hero publicada (`public/fernanda.jpeg`), com recorte ancorado no topo
  para o rosto não ser cortado.
- Rastreamento preparado (GA4, Google Ads, Meta Pixel) atrás de variáveis de
  ambiente, com eventos de clique de WhatsApp e mapa.
- Mensagens de WhatsApp pré-escritas por página, para atribuir campanha sem CRM.

## Decisões

- **Hospedagem: Cloudflare Pages, não Vercel.** O plano gratuito da Vercel é para
  uso pessoal, e isto é um negócio. A Cloudflare é gratuita com uso comercial
  liberado, banda sem limite, PoP em São Paulo, função serverless (100 mil
  req/dia) e Turnstile grátis para o formulário.

- **Astro estático, sem painel de edição.** Quem mantém o site é o irmão dela, que
  é técnico. HTML puro carrega rápido, o que baixa o CPC no Google Ads.
- **Pós-operatório é a campanha principal**, não o lipedema. Ela está habilitada,
  a busca tem mais volume e uma cliente faz 20–30 sessões a R$ 110 — mais de
  R$ 2.000, contra R$ 1.495 do protocolo de lipedema.
- **Antes-e-depois no site, nunca em anúncio** (política do Meta). Ela tem as
  autorizações de imagem assinadas.
- **Agendamento online ficou para depois.** Ela atende sozinha, numa sala; agenda
  aberta ao público tira dela o encaixe, que é o que faz o dia render. Por ora,
  WhatsApp com mensagem pré-escrita.
- **Sem Meta pago nesta fase.** A verba não dá para dois canais e o Instagram dela
  já tem alcance orgânico com 4.752 seguidores.

## Próximos passos

1. **Publicar na Cloudflare Pages** e apontar o domínio — passo a passo completo
   em `docs/hospedagem.md`. Antes do push final, corrigir `site:` no
   `astro.config.mjs` e o `Sitemap:` em `public/robots.txt`.
2. **Reivindicar e ajustar o Perfil da Empresa no Google.** Estava para ser feito
   e não há confirmação de que foi. Trocar a categoria "Profissional da beleza"
   por uma específica, completar horários, e puxar de 8 para 30 avaliações.
   Rende mais nos primeiros 90 dias do que a verba inteira de anúncio.
3. **Criar as contas** na ordem de `docs/contas.md` e preencher as variáveis.
4. **Preencher os casos de `/resultados`.** A página está pronta e no ar, mas
   nenhum caso está publicado ainda — ela mostra o estado vazio, que aponta para
   o Instagram. Ver instruções no topo de `src/data/resultados.ts`.
5. Ligar as campanhas (ver `CLAUDE.md`), só depois de rastreamento validado.

## Bloqueios


- **Contas de serviço ainda não existem.** O caminho está em `docs/contas.md`:
  primeiro uma conta Google do negócio **em nome da Fernanda** (não numa conta
  pessoal), depois reivindicar o Perfil do Google, depois GA4, Ads e Pixel.
  Sem os IDs o site funciona, só não mede — e campanha sem medição é aposta.
- **Antes-e-depois:** faltam as fotos em `public/resultados/` e os dados de cada
  caso (quantas sessões, em quanto tempo). Sem isso `/resultados` fica no estado
  vazio. Um caso só vai ao ar com `publicado: true` **e** autorização assinada.
- Falta confirmar se o Perfil da Empresa no Google foi reivindicado.
