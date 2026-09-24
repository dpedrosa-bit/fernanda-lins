# STATUS

Atualizado em 24/09/2026. Leia o `CLAUDE.md` antes deste arquivo.

## Feito

- Estratégia completa desenhada e **aprovada pela Fernanda** (`docs/plano-captacao.html`).
- Projeto Astro no ar no repositório, buildando limpo, com três páginas prontas:
  home, `/drenagem-pos-operatorio` e `/lipedema`.
- Foto do hero publicada (`public/fernanda.jpeg`), com recorte ancorado no topo
  para o rosto não ser cortado.
- Rastreamento preparado (GA4, Google Ads, Meta Pixel) atrás de variáveis de
  ambiente, com eventos de clique de WhatsApp e mapa.
- Mensagens de WhatsApp pré-escritas por página, para atribuir campanha sem CRM.

## Decisões

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

1. **Publicar o site.** Recomendação: **Cloudflare Pages** — ver `docs/hospedagem.md`.
   Registrar o domínio no Registro.br (~R$ 40/ano).
2. **Reivindicar e ajustar o Perfil da Empresa no Google.** Estava para ser feito
   e não há confirmação de que foi. Trocar a categoria "Profissional da beleza"
   por uma específica, completar horários, e puxar de 8 para 30 avaliações.
   Rende mais nos primeiros 90 dias do que a verba inteira de anúncio.
3. **Criar `/resultados`** com os antes-e-depois. É o ativo mais forte e está
   parado. Precisa de 3–4 casos com protocolo, número de sessões e duração.
4. Criar `/papada` — busca alta, concorrência baixa, já é serviço dela.
5. Ligar as campanhas (ver `CLAUDE.md`), só depois de rastreamento validado.

## Bloqueios

- **Horários de atendimento ainda são um chute.** Estão em `src/data/site.ts` como
  "seg a sex 14h–20h, sáb 9h–16h", inferidos do "abre seg às 14h" do perfil do
  Google. Aparecem no rodapé de todas as páginas. **Confirmar com a Fernanda.**
- **Domínio não registrado.** Trava a publicação e a configuração de rastreamento.
- **Antes-e-depois:** faltam os dados de cada caso (quantas sessões, de quê, em
  quanto tempo) para montar `/resultados` com honestidade.
- Falta confirmar se o Perfil da Empresa no Google foi reivindicado.
