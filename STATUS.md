# STATUS

Atualizado em 02/10/2026 — três campanhas **ativas** desde 01–02/10; medição
fechada. Primeira semana: não otimizar. Leia o `CLAUDE.md` antes deste arquivo.

## Feito

- Horários corrigidos em 02/10 em `site.ts` (seg 14–19, ter–qui 10–20, sex 10–19,
  sáb só com hora marcada) — propaga para rodapé, `/contato` e home.

- Estratégia aprovada pela Fernanda (`docs/plano-captacao.html`).
- **Site no ar em https://fernandalinsestetica.com.br** — nove páginas, Cloudflare
  Pages (projeto `fernanda-lins`, deploy a cada push na `main`), domínio no CPF
  dela com DNS na Cloudflare, HTTPS.
- **Contas** em `fernandalinsestetica@gmail.com`: GA4 `G-M29PKGDGG2`; Google Ads
  conta 355-718-5707, **ID de conversão `AW-18485662450`** (o `AW-3557185707`
  anotado antes era só o número da conta sem traços — errado).
- **Ads ↔ GA4 e Ads ↔ Perfil da Empresa vinculados** (30/09).
- **Campanhas no Ads, as três ATIVAS** (Pós-op e Marca em 01/10, Lipedema em 02/10; R$ 350 pré-pagos via Pix):
  - `Busca — Pós-operatório` (ID 24307184810) — conferida na campanha salva:
    raio 8 km da Rua Monjolo 284, só "Presença", seg–sex 13–21 / sáb 8–17 (**desatualizado — ver Próximos passos**),
    Cliques com teto R$ 5, R$ 7/dia, só rede de pesquisa, AI Max desligado,
    11 palavras-chave, 15 títulos (1 e 2 fixados), 4 descrições, 4 sitelinks,
    4 frases de destaque, chamada. Grupo "Drenagem pós-op".
  - `Busca — Marca` — mesmas configurações, R$ 2/dia, 4 palavras-chave, 7 títulos,
    2 descrições, 4 sitelinks, chamada.
  - `Busca — Lipedema` — mesmas configurações, R$ 6/dia, 10 palavras-chave,
    15 títulos (1 fixado), 4 descrições, 4 sitelinks, 4 frases, chamada, 29
    negativas de campanha do brief. **Exceção de política solicitada** para as
    palavras-chave (ver Bloqueios).
  - Lista **"Negativas compartilhadas"** (15 termos do brief) aplicada às três.
- Rastreamento no código (GA4 + Ads + Pixel atrás de variáveis; eventos
  `clique_whatsapp` e `clique_mapa`; mensagem de WhatsApp diferente por página).
- **Tags no ar (01/10):** variáveis `PUBLIC_GA4_ID` e `PUBLIC_GOOGLE_ADS_ID` em
  Production na Cloudflare (Preview sem elas, de propósito), redeploy feito;
  `clique_whatsapp` confirmado no Tempo real do GA4.
- **Verificação do anunciante** no Ads concluída pela Fernanda (01/10).
- **Medição fechada (02/10):** `clique_whatsapp` é evento principal no GA4 e foi
  importado no Ads como conversão **principal** da meta "Contato" (3 de 3
  campanhas). A automática "Fale conosco" (visita a `/contato`) virou secundária.

## Decisões

- **Quem opera o quê:** a Fernanda responde avaliações, publica no perfil e cuida
  das redes. O irmão faz o site, configura contas e campanhas e a orienta.
- **Cloudflare e GitHub ficam na conta do irmão**; **Perfil do Google, GA4, Ads e
  domínio** são da Fernanda.
- Testar rastreamento em outro navegador: no Chrome do irmão os envios ao Google
  voltam 503 (bloqueio local); a máquina em si alcança o GA4 normalmente.
- **Lipedema: pedir exceção ao Google** para as palavras-chave barradas (ver Bloqueios).
- "Conversões otimizadas" desligadas (o site não coleta e-mail).
- O resumo do assistente de campanha mostra "Todos os países" e "Personalização
  de texto ativada" mesmo quando não é verdade — confira sempre na campanha salva
  (Locais / Configurações), não no resumo.
- Resto como antes: lances por clique com teto R$ 5, sem lance por conversão antes
  de 30 conversões, sem Meta pago, antes-e-depois nunca em anúncio, sem
  remarketing sobre `/lipedema`.

## Próximos passos

1. **Acompanhar a primeira semana** sem otimizar: termos de pesquisa e negativar lixo.
   Se Pós-op seguir sem impressões depois de alguns dias úteis no horário, tirar a
   fixação do título 2 (o Google marca o anúncio como "qualidade baixa" e limita a veiculação).
2. **Programação de anúncios — falta só a Marca.** Pós-operatório e Lipedema já estão
   em seg 13–20, ter–qui 09–21, sex 09–20, sáb 09–16, dom off (02/10). A
   `Busca — Marca` ainda está seg–sex 13–21 / sáb 08–17 (o editor do Ads travou o
   navegador no meio; nada foi salvo nela).
3. **Perfil do Google:** conferir o horário **novo** (seg 14–19, ter–qui 10–20,
   sex 10–19, sáb com hora marcada), site, categorias e descrição; tornar a
   conta nova proprietária principal quando o Google liberar.
4. **`/resultados`:** preencher os casos (fotos + sessões + tempo).
5. Formulário com Turnstile; Fase 2 (`/celulite-flacidez`, `/limpeza-de-pele`,
   `/vale-presente`, Meta Pixel).

## Bloqueios

- Lipedema: exceção de política aprovada — palavras-chave "Qualificada" em 02/10.
- Pós-op e Marca têm uma palavra-chave cada com "Baixo volume de pesquisas"
  (as que citam "freguesia"); o Google só ativa se o volume subir.
- **O Google Ads pede "Confirme sua identidade"** de tempos em tempos; enquanto não
  confirmado, o assistente não salva e perde o que foi preenchido. Só a dona da
  conta confirma.
- **`/resultados`** depende de fotos e autorização assinada da Fernanda.
