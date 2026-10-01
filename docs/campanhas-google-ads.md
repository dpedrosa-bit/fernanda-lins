# Google Ads — brief de execução das campanhas

Documento para a sessão de criação das campanhas (com navegador). Tudo aqui
já foi decidido; o trabalho é colar, marcar e conferir. Se algo na tela do
Google divergir, a decisão registrada aqui prevalece até alguém mudar este
arquivo.

## Contas e IDs

| | Valor |
| --- | --- |
| Conta Google do negócio | `fernandalinsestetica@gmail.com` (dona de tudo abaixo) |
| Google Ads | conta **355-718-5707**, criada 30/09/2026 em modo especialista, **sem campanha** |
| ID de conversão do Ads | `AW-18485662450` |
| GA4 | propriedade `Site fernandalinsestetica.com.br`, ID `G-M29PKGDGG2` |
| Site | `https://fernandalinsestetica.com.br` (Cloudflare Pages, projeto `fernanda-lins`) |
| Perfil da Empresa | verificado; conta nova é proprietária; categorias Esteticista + Terapeuta de drenagem linfática |
| Meta Pixel | **não criado** — não entra nesta fase |

## Pré-requisitos (fazer ANTES de criar campanha)

Sem estes, campanha é aposta. Ordem:

1. [ ] Cloudflare → `fernanda-lins` → Settings → Variables and Secrets → `PUBLIC_GA4_ID` = `G-M29PKGDGG2` e `PUBLIC_GOOGLE_ADS_ID` = `AW-18485662450` (Text, Production + Preview) → Deployments → Retry deployment
2. [ ] Abrir o site, clicar no WhatsApp; no GA4 → Tempo real aparece `clique_whatsapp`
3. [ ] GA4 → Admin → Eventos → `clique_whatsapp` → **Marcar como evento principal**
4. [x] Ads → Ferramentas → Central de dados → Produtos conectados → GA4 vinculado com importação de métricas (30/09)
5. [ ] Ads → Metas → Conversões → Nova → **Importar → GA4 → Web** → `clique_whatsapp` (pode levar horas para listar após o passo 3)
6. [x] Ads → Ferramentas → Central de dados → **Perfil da Empresa** vinculado (30/09)
7. [x] Ads → Faturamento: pagamento manual via Pix, R$ 350 de saldo (30/09). Campanha ativa gasta desse saldo.

## Configurações comuns a todas as campanhas

- **Tipo:** Pesquisa. Desmarcar "Rede de Display" e "Parceiros de pesquisa" na criação (vêm marcados).
- **Local:** raio de **8 km** em torno de `Rua Monjolo, 284, São Paulo`. Em "Opções de local": *Presença: pessoas que estão em ou visitam regularmente*. Nunca "interesse".
- **Idioma:** Português.
- **Lances:** *Maximizar cliques* com **limite de CPC de R$ 5,00**. Não usar "Maximizar conversões" antes de 30 conversões acumuladas — o algoritmo não aprende com menos.
- **Programação:** seg–sex **13:00–21:00**, sáb **08:00–17:00**, domingo desligado. Uma hora de folga em torno do atendimento (14–20 / 9–16). Clique com WhatsApp sem resposta é verba perdida.
- **Rotação de anúncios:** otimizar.
- **Correspondência:** frase e exata. **Nunca ampla.** Ampla com verba pequena vira busca irrelevante.
- **URL final:** sempre a página do problema, nunca a home (exceto Marca).
- **Recursos (extensões):** local (via Perfil vinculado), chamada `(11) 94920-0929`, sitelinks e frases de destaque conforme cada campanha.

## Verba: R$ 15/dia no total

| Campanha | R$/dia | Por quê |
| --- | --- | --- |
| Pós-operatório | **7** | Maior valor por cliente (20–30 sessões a R$ 110), busca urgente, volume para aprender |
| Lipedema | **6** | Menor concorrência, clique de altíssima intenção |
| Marca | **2** | Defende o nome dela de concorrente que compra a palavra |

Mês 2, se sobrar: Papada (R$ 12). Gordura localizada só com R$ 1.500/mês.

---

## Campanha 1 — Pós-operatório

- **Nome:** `Busca — Pós-operatório`
- **URL final:** `https://fernandalinsestetica.com.br/drenagem-pos-operatorio`
- **Orçamento:** R$ 7/dia

### Palavras-chave (um grupo de anúncios: "Drenagem pós-op")

Frase:
```
"drenagem pós operatório"
"drenagem linfática pós operatório"
"drenagem pós cirurgia"
"drenagem pós lipo"
"drenagem pós lipoaspiração"
"drenagem pós abdominoplastia"
"drenagem linfática zona norte"
"drenagem pós operatório freguesia do ó"
```
Exata:
```
[drenagem pós operatório perto de mim]
[drenagem linfática pós operatória]
[massagem pós operatório]
```

### Títulos (até 15, máx. 30 caracteres)
- `Drenagem Pós-Operatória` (23/30)
- `Freguesia do Ó, Zona Norte` (26/30)
- `Comece Assim que Liberar` (24/30)
- `Com Liberação do Cirurgião` (26/30)
- `Horário Reservado p/ Pós-Op` (27/30)
- `Pacotes de 5 e 10 Sessões` (25/30)
- `Atendimento Individual` (22/30)
- `Fernanda Lins Estética` (22/30)
- `Desde 2015 na Estética` (22/30)
- `Sessão a partir de R$ 110` (25/30)
- `Fale pelo WhatsApp` (18/30)
- `Reduz Inchaço e Fibrose` (23/30)
- `Pós Lipo e Abdominoplastia` (26/30)
- `Terapeuta de Drenagem` (21/30)
- `Acesso Sem Escada` (17/30)

Fixar posição 1 em `Drenagem Pós-Operatória` e posição 2 em `Freguesia do Ó, Zona Norte`. O resto livre.

### Descrições (até 4, máx. 90 caracteres)
- `Drenagem linfática após lipo, abdominoplastia e outras cirurgias. Horário reservado.` (84/90)
- `Técnica ajustada ao que foi operado, com liberação do cirurgião. Pacotes de 5 e 10.` (83/90)
- `Atendimento individual do começo ao fim, na Freguesia do Ó. Reserve pelo WhatsApp.` (82/90)
- `Reduz inchaço, trabalha a fibrose e alivia o desconforto. Acesso sem escada até a sala.` (87/90)

### Sitelinks
- Pacotes e valores → `/drenagem-pos-operatorio#pacotes`
- Onde fica → `/contato`
- Quem atende → `/sobre`
- Lipedema → `/lipedema`

### Frases de destaque
`Liberação do cirurgião` · `Pacotes de 5 e 10` · `Horário reservado` · `Sem escada`

---

## Campanha 2 — Lipedema

- **Nome:** `Busca — Lipedema`
- **URL final:** `https://fernandalinsestetica.com.br/lipedema`
- **Orçamento:** R$ 6/dia

### Palavras-chave (grupo "Lipedema")

Frase:
```
"tratamento lipedema"
"tratamento para lipedema"
"lipedema tratamento estético"
"drenagem para lipedema"
"lipedema são paulo"
"lipedema zona norte"
"clínica lipedema"
```
Exata:
```
[quem trata lipedema]
[onde tratar lipedema]
[lipedema estética]
```

### Palavras-chave negativas (nível de campanha — obrigatório aqui)
"Lipedema" atrai muita busca informativa que nunca vira cliente:
```
o que é, sintomas, cid, cid 10, fotos, grau, grau 1, grau 2, grau 3, exercícios,
dieta, remédio, medicamento, cirurgia, lipoaspiração, sus, convênio, causas,
diagnóstico, médico, angiologista, curso, faculdade, apostila, vaga, emprego,
pdf, artigo, tese
```
Revisar o **relatório de termos de pesquisa** toda semana no primeiro mês e negativar o que aparecer.

### Títulos
- `Acompanhamento p/ Lipedema` (26/30)
- `Não É Falta de Esforço` (22/30)
- `Alívio do Peso nas Pernas` (25/30)
- `Avaliação Sem Custo` (19/30)
- `Freguesia do Ó, Zona Norte` (26/30)
- `Protocolo de 22 Sessões` (23/30)
- `Radiofrequência e Drenagem` (26/30)
- `Sem Promessa de Cura` (20/30)
- `Atendimento Individual` (22/30)
- `Fernanda Lins Estética` (22/30)
- `5x de R$ 299 Sem Juros` (22/30)
- `Desde 2015 na Estética` (22/30)
- `Fale pelo WhatsApp` (18/30)
- `Foco em Conforto e Bem-Estar` (28/30)
- `Cuidado Contínuo e Honesto` (26/30)

Fixar posição 1 em `Acompanhamento p/ Lipedema`. Deixar `Não É Falta de Esforço` livre — é o que mais deve performar.

### Descrições
- `Acompanhamento estético para quem convive com lipedema: peso nas pernas, inchaço e dor.` (87/90)
- `Radiofrequência, ultrassom, drenagem e ILIB. Sem promessa de cura, com honestidade.` (83/90)
- `Avaliação sem custo na Freguesia do Ó. Você conta o que incomoda, eu digo o que dá.` (83/90)
- `Atendimento individual, sempre com a mesma profissional. Chame no WhatsApp.` (75/90)

### Sitelinks
- O protocolo → `/lipedema#protocolo`
- Avaliação sem custo → `/lipedema`
- Quem atende → `/sobre`
- Onde fica → `/contato`

### Frases de destaque
`Avaliação sem custo` · `22 sessões` · `5x sem juros` · `Sem promessa de cura`

---

## Campanha 3 — Marca

- **Nome:** `Busca — Marca`
- **URL final:** `https://fernandalinsestetica.com.br/`
- **Orçamento:** R$ 2/dia

### Palavras-chave (exata e frase)
```
[fernanda lins estética]
[fernanda lins estetica]
"fernanda lins"
"fernanda lins freguesia"
```

### Títulos
- `Fernanda Lins Estética` (22/30)
- `Site Oficial` (12/30)
- `Freguesia do Ó, Zona Norte` (26/30)
- `Agende pelo WhatsApp` (20/30)
- `Estética Facial e Corporal` (26/30)
- `Desde 2015` (10/30)
- `Avaliação Sem Custo` (19/30)

### Descrições
- `Estética avançada facial e corporal na Freguesia do Ó. Atendimento com hora marcada.` (84/90)
- `Pós-operatório, lipedema, gordura localizada, papada e SPA. Fale direto com a Fernanda.` (87/90)

### Sitelinks
Pós-operatório · Lipedema · SPA day · Contato

---

## Negativas compartilhadas (lista para todas as campanhas)

Criar em Ferramentas → Listas de exclusão → aplicar às três:
```
grátis, gratuito, barato, curso, aprender, como fazer, caseiro, em casa,
aparelho, comprar, venda, vaga, emprego, salário, trabalhar
```

## Política — o que não pode aparecer no anúncio

- Nada de **antes-e-depois** como imagem (Pesquisa nem usa imagem; vale para extensões de imagem — não usar).
- Nada de **promessa de cura** para lipedema. Os textos acima já dizem "sem promessa de cura" de propósito.
- **Não criar público de remarketing** baseado em quem visitou `/lipedema` — condição de saúde é categoria sensível na política de publicidade personalizada do Google. Remarketing, quando vier, só sobre a home, SPA e pós-operatório.

## Critério de corte (definir antes de ligar, não depois)

Revisão semanal, planilha de cinco colunas: cliques · conversas no WhatsApp · avaliações agendadas · comparecidas · protocolos fechados.

- **60 cliques e nenhuma conversa:** o problema é a landing, não a verba. Pausar e corrigir a página.
- **Conversas mas nenhuma avaliação agendada:** o problema é o atendimento no WhatsApp — tempo de resposta ou o que está sendo dito.
- **Custo por conversa acima de R$ 60 por duas semanas:** revisar termos de pesquisa e negativar.
- **Custo por conversa até R$ 40:** está bom. Um protocolo de pós-op vale mais de R$ 2.000.

## Depois de publicar as campanhas

- Anúncios entram em **análise** — de minutos a um dia útil. Não mexer enquanto "em análise".
- Primeira semana: **não otimizar**. Só coletar termos de pesquisa e negativar lixo.
- Não aceitar as "recomendações" automáticas do Google (ampliar correspondência, subir verba, campanha inteligente). Recusar todas até o mês 2.
