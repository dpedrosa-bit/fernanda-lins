# CLAUDE.md — Site da Fernanda Lins Estética

Leia este arquivo primeiro em qualquer sessão nova. Depois leia `STATUS.md`,
que diz em que ponto o trabalho parou.

---

## O QUE É ESTE PROJETO

Site de captação de clientes da **Fernanda Lins Estética Facial e Corporal**,
estúdio de estética avançada na Zona Norte de São Paulo. A Fernanda é irmã do
dono do repositório; ela atende sozinha, numa sala, com hora marcada.

O site **não é um cartão de visita**. Existe para receber tráfego pago de Google
Ads e transformá-lo em conversa de WhatsApp. Toda decisão de estrutura vem daí.

- **Repositório:** https://github.com/dpedrosa-bit/fernanda-lins (público)
- **Instagram:** [@fernandalinsestetica](https://www.instagram.com/fernandalinsestetica/) — 4.752 seguidores
- **Endereço:** Rua Monjolo, 284 — Jardim Monjolo, São Paulo/SP, 02961-070
- **WhatsApp:** (11) 94920-0929
- **Google:** perfil existe, nota 5,0 com apenas 8 avaliações

## DOCUMENTOS DO PROJETO

- `docs/plano-captacao.html` — **a estratégia completa**, aprovada pela Fernanda.
  Arquitetura do site, os três funis, oportunidades, estrutura de campanhas
  Google e Meta, rastreamento, roadmap. Abra no navegador.
- `docs/previa-navegavel.html` — prévia das três páginas num arquivo só.
  É uma fotografia estática, **não reflete mudanças no código**; para ver o site
  de verdade use `npm run dev`.

## A TESE (por que o site é assim)

Do catálogo dela saem **três negócios com jornadas diferentes**, e misturá-los
numa lista de serviços é o que fazia o template rejeitado não captar ninguém:

| Porta | Serviços | Canal | Conversão |
| --- | --- | --- | --- |
| **Corpo & protocolo** | Lipedema, criolipólise, enzimas, radiofrequência | Google Search | Avaliação sem custo, nunca preço na 1ª tela |
| **SPA & presente** | SPA das amigas, mãe e filha, noiva, madrinhas | Meta + datas | Preço na cara, compra por impulso |
| **Facial & manutenção** | Limpeza de pele, dermaplaning, brow lamination | Maps, "perto de mim" | Agendamento direto |

A Porta 3 não é onde está o dinheiro — é onde está a **primeira visita**. Uma
limpeza de pele de R$ 99 coloca a cliente na maca por 60 minutos, e é ali que o
protocolo de corpo é apresentado.

**Uma página por problema que a cliente tem, não por equipamento que ela possui.**
Ninguém busca "corrente russa"; buscam "flacidez na barriga".

## REGRAS DE OURO (não quebrar)

1. **Antes-e-depois podem ir no site, nunca em anúncio.** A política de saúde e
   bem-estar do Meta proíbe antes-e-depois, close em parte do corpo e texto tipo
   "perca X cm". Reprovações repetidas restringem a conta de anúncios. No site
   eles devem aparecer — com protocolo, duração, aviso de variação e autorização
   de imagem assinada (que ela já tem).
2. **Lipedema: nunca prometer cura.** É condição crônica. O posicionamento é
   manejo de sintomas e conforto, com recomendação de acompanhamento médico.
   A página `/lipedema` tem um bloco explícito de "o que não faz" — não remova.
3. **A voz do site é a voz dela.** Use as legendas reais do Instagram, não
   linguagem corporativa de clínica: *"Aqui você é cuidada de verdade"*,
   *"Acredite, é possível"*, *"momento de rainha"*.
4. **Nada de segredo no repositório** — ele é público. IDs de rastreamento vão
   em variáveis de ambiente.
5. **Preço de tratamento corporal não vai na home.** Compete por preço.
   Preço de SPA vai, porque ali é compra por impulso.

## ESTRUTURA TÉCNICA

Astro estático, sem framework de UI, sem dependência em runtime. Gera HTML puro —
carrega rápido, o que melhora o Índice de Qualidade no Google Ads e derruba o CPC.

```
src/
  data/site.ts       Fonte única: endereço, WhatsApp, horários, mensagens
  layouts/Base.astro Head, rastreamento, topo, rodapé, barra fixa de WhatsApp
  pages/             Uma página por problema
  styles/global.css  Sistema visual (creme #FBF8F3, ouro #9A7433, serifada)
docs/                Plano de captação e prévia
public/fernanda.jpeg Foto do hero
```

**Para mudar telefone, endereço ou horário, mexa só em `src/data/site.ts`.**

```bash
npm install && npm run dev    # http://localhost:4321
npm run build                 # gera dist/
```

### Atribuição sem CRM

Cada link de WhatsApp leva **uma mensagem pré-escrita diferente por página**
(ver `msg` em `src/data/site.ts`). Quem sai do lipedema manda "queria saber do
protocolo para lipedema"; quem sai do pós-op manda "fiz cirurgia e preciso de
drenagem". É assim que ela sabe de qual campanha veio cada conversa, sem sistema
nenhum. **Ao criar página nova, crie a mensagem correspondente.**

Os cliques disparam `clique_whatsapp` e `clique_mapa` com página e posição do botão.

## PÁGINAS

| Rota | Estado | Papel |
| --- | --- | --- |
| `/` | pronta | Bifurca entre corpo e SPA na primeira tela |
| `/drenagem-pos-operatorio` | pronta | **Campanha principal** — maior valor por cliente |
| `/lipedema` | pronta | Segunda campanha — menor concorrência |
| `/resultados` | falta | Antes-e-depois. Prioridade: é o ativo mais forte |
| `/papada` | falta | Busca alta, concorrência baixa |
| `/celulite-flacidez`, `/limpeza-de-pele`, `/vale-presente` | falta | Fase 2 |

## PUBLICIDADE (quando ligar)

Verba de teste: **R$ 400–500/mês por 3 meses**. A R$ 15/dia:

- **Pós-operatório R$ 7/dia** → `/drenagem-pos-operatorio`. Tem volume para
  gastar e aprender rápido. Cliente faz 20–30 sessões a R$ 110.
- **Lipedema R$ 6/dia** → `/lipedema`. Menor concorrência, clique caro de valor.
- **Marca R$ 2/dia** → `/`. Defende o nome dela de concorrente.

Nessa verba, **não usar lances por conversão** — o Lances Inteligentes precisa de
15 a 30 conversões/mês para aprender. Use *maximizar cliques com teto de CPC* de
R$ 4–5, correspondência de frase e exata, nunca ampla.

Negativar desde o dia 1: `o que é`, `sintomas`, `cid`, `exercícios`, `dieta`,
`remédio`, `cirurgia`, `sus`, `convênio`, `curso`, `faculdade`, `vaga`.

Programar anúncios para o horário de atendimento — clique às 3h da manhã que cai
num WhatsApp sem resposta é verba perdida.

**Métrica que importa:** custo por conversa iniciada, depois custo por avaliação
comparecida. Não clique nem impressão.

## NOTA DE PASSAGEM DE TURNO (obrigatória)

Os transcritos não viajam entre máquinas — o `STATUS.md` é a ponte.

**Ao começar:** leia o `STATUS.md` e confirme com o usuário onde o trabalho está.

**Antes de encerrar** qualquer sessão com trabalho significativo, atualize o
`STATUS.md` com: **Feito**, **Decisões**, **Próximos passos**, **Bloqueios**.
Commite junto com o trabalho. Mantenha curto — descreve o estado ATUAL, não é
diário. Apague o que foi concluído; o histórico fica no git.
