# STATUS

Atualizado em 30/09/2026 — site no ar no domínio, contas criadas. Leia o
`CLAUDE.md` antes deste arquivo.

## Feito

- Estratégia aprovada pela Fernanda (`docs/plano-captacao.html`).
- **Site no ar em https://fernandalinsestetica.com.br** — nove páginas, Cloudflare
  Pages (projeto `fernanda-lins`, deploy a cada push na `main`), domínio no CPF
  dela com DNS na Cloudflare, HTTPS. Menu do celular, bairro "Freguesia do Ó",
  "desde 2015".
- **Contas criadas em 30/09**, todas em `fernandalinsestetica@gmail.com`:
  GA4 `G-M29PKGDGG2`, Google Ads `AW-3557185707` (conta 355-718-5707, modo
  especialista, sem campanha).
- **Perfil da Empresa no Google:** já era verificado (e-mail antigo dela);
  conta nova adicionada como proprietária, convite aceito. Descrição nova e
  ajustes de horário/site/categorias em andamento pela Fernanda.
- Rastreamento no código (GA4 + Ads + Pixel atrás de variáveis; eventos
  `clique_whatsapp` e `clique_mapa`; mensagem de WhatsApp diferente por página).
- Brief completo das campanhas, com textos validados nos limites do Google:
  **`docs/campanhas-google-ads.md`**.

## Decisões

- **Quem opera o quê:** a Fernanda responde avaliações, publica no perfil e cuida
  das redes. O irmão faz o site, configura contas e campanhas e a orienta.
- **Cloudflare e GitHub ficam na conta do irmão** (não acumulam nada; o site
  sobe em outro lugar em minutos). **Perfil do Google, GA4, Ads e domínio** são
  da Fernanda — os ativos que não se transferem.
- **Categoria do Perfil:** manter "Esteticista" principal + "Terapeuta de
  drenagem linfática"; só acrescentar "Clínica de estética" e "Spa de dia".
  Não mexer em nome, endereço ou telefone — dispara reverificação.
- **Cloudflare Pages, não Vercel** (plano grátis da Vercel é não comercial).
- **Pós-operatório é a campanha principal** (R$ 7/dia), lipedema R$ 6, marca
  R$ 2. Lances por clique com teto R$ 5; nada de lance por conversão antes de
  30 conversões. Sem Meta pago nesta fase.
- **Antes-e-depois no site, nunca em anúncio.** Sem remarketing sobre
  `/lipedema` (condição de saúde).

## Próximos passos

1. **Fechar a medição** (pré-requisitos do `docs/campanhas-google-ads.md`):
   variáveis na Cloudflare + redeploy → `clique_whatsapp` no Tempo real do GA4
   → evento principal → vincular GA4↔Ads → importar como conversão.
2. **Criar as três campanhas** seguindo o brief — sessão com navegador.
3. **Perfil do Google:** conferir que a Fernanda salvou horário (seg–sex 14–20,
   sáb 9–16), site, categorias secundárias e a descrição nova; tornar a conta
   nova proprietária principal quando o Google liberar.
4. **`/resultados`:** preencher os casos (fotos + sessões + tempo). É a página
   que mais converte protocolo caro e está no estado vazio.
5. Formulário com Turnstile em `functions/api/contato.ts` (segunda via ao WhatsApp).
6. Fase 2: `/celulite-flacidez`, `/limpeza-de-pele`, `/vale-presente`; Meta Pixel.

## Bloqueios

- **Importação da conversão no Ads** só lista `clique_whatsapp` algumas horas
  depois de ele virar evento principal no GA4 — pode não sair no mesmo dia.
- **`/resultados`** depende de material da Fernanda: fotos em
  `public/resultados/` e, por caso, quantas sessões e em quanto tempo. Só entra
  no ar com `publicado: true` **e** autorização assinada.
- **Transferência de proprietário principal** pode ser travada pelo Google por
  alguns dias após adicionar dono novo — é prazo de segurança, não erro.
