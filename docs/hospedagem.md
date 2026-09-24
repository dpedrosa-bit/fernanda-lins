# Hospedagem — qual escolher e por quê

## Recomendação: Cloudflare Pages

Custo real do site no ar: **só o domínio, ~R$ 40 por ano.**

### Por que não a Vercel, que eu tinha sugerido antes

Correção de uma recomendação anterior: o plano gratuito da Vercel (**Hobby**) é,
pelos termos dela, para **uso pessoal e não comercial**. O site da Fernanda é um
negócio — usar o Hobby fica fora da política, e o plano pago sai por volta de
US$ 20/mês. Não vale para este porte quando há alternativa gratuita que permite
uso comercial.

### E o formulário serverless?

Os dois suportam. A diferença está no limite e no que vem junto:

- **Cloudflare Pages Functions** (Workers por baixo): **100 mil requisições por
  dia** no plano gratuito. Para um site que recebe dezenas de contatos por mês,
  isso é ordens de grandeza a mais do que o necessário. Basta criar
  `functions/api/contato.ts` no repositório — a rota `/api/contato` passa a
  existir, sem configuração.
- **Vercel Functions**: também funciona, mas herda a restrição de uso comercial
  do plano Hobby.

Dois pontos práticos a favor da Cloudflare aqui:

1. **Turnstile** — o captcha dela é gratuito e integra em minutos. Formulário
   público sem proteção vira alvo de robô em semanas, e aí a Fernanda passa a
   receber lixo no lugar de cliente.
2. **Envio de e-mail**: Workers não fazem SMTP, então o envio sai por API HTTP.
   O mais simples é o **Resend** (gratuito até 3.000 e-mails/mês), com a chave
   guardada como secret no painel da Cloudflare — nunca no repositório.

**Observação honesta sobre o formulário:** no Brasil, WhatsApp converte bem mais
que formulário, e é por isso que o site inteiro foi construído em torno dele. O
formulário vale como segunda via — para quem não quer chamar no WhatsApp naquele
momento, ou está no trabalho. Não inverta a prioridade.

### Comparativo

| | Cloudflare Pages | Netlify | GitHub Pages | Vercel |
| --- | --- | --- | --- | --- |
| Custo | Grátis | Grátis | Grátis | Hobby grátis / Pro ~US$20 |
| Uso comercial | Permitido | Permitido | Permitido | **Só no plano pago** |
| Banda | Sem limite | ~100 GB/mês | ~100 GB/mês (limite brando) | Limitada no Hobby |
| Domínio + SSL | Grátis | Grátis | Grátis | Grátis |
| Deploy por push | Sim | Sim | Precisa de Actions | Sim |
| Função serverless | 100 mil req/dia | 125 mil req/mês | Não tem | Só no plano pago |
| Captcha gratuito | Turnstile | Não | Não | Não |
| Latência no Brasil | Melhor (PoP em SP) | Boa | Razoável | Boa |

Confira os valores antes de decidir — planos mudam.

A Cloudflare ganha em três pontos que importam aqui: **uso comercial no plano
gratuito**, **banda sem limite** (se uma campanha estourar, não chega conta) e
**presença em São Paulo**, o que significa menos latência para o público dela,
que é de um raio de 8 km. Site rápido melhora o Índice de Qualidade no Google
Ads e derruba o custo por clique — então velocidade aqui é dinheiro, não vaidade.

---

## Passo a passo

### 1. Domínio — já registrado no registro.br

Ajuste o domínio em dois lugares do repositório:

- `astro.config.mjs` → campo `site:`
- `public/robots.txt` → linha `Sitemap:`

É daí que saem as URLs canônicas e o JSON-LD que o Google lê, então o valor
precisa bater exatamente com o domínio real, com `https://` e sem barra no fim.

### 2. Publicar na Cloudflare Pages

1. Crie conta em [dash.cloudflare.com](https://dash.cloudflare.com) (grátis).
2. **Workers & Pages → Create → Pages → Connect to Git**, autorize o GitHub e
   escolha `dpedrosa-bit/fernanda-lins`.
3. Configuração de build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Em **Environment variables**, acrescente `NODE_VERSION` = `22`
4. **Save and Deploy.** Sai um endereço `fernanda-lins.pages.dev` em 1–2 minutos.

> **O `NODE_VERSION` não é opcional.** A Cloudflare Pages ainda usa uma versão
> antiga de Node por padrão em projetos novos, e o Astro 5 exige 18.20+, 20.3+ ou
> 22+. Sem essa variável a build falha com erro de sintaxe ou de engine, e o
> motivo não é óbvio na leitura do log. O `.nvmrc` no repositório cobre o mesmo
> caso, mas definir a variável evita depender de qual delas a plataforma lê.

A partir daí, todo `git push` na `main` publica sozinho.

### 3. Apontar o domínio do registro.br para a Cloudflare

O que muda aqui é só a **gestão do DNS**. O domínio continua registrado no
registro.br, no CPF ou CNPJ dela, e a titularidade não se altera. Dá para
reverter a qualquer momento.

**Na Cloudflare:**

1. **Add a site**, digite o domínio, escolha o plano **Free**.
2. Ela varre os registros existentes e mostra **dois servidores de nome**, algo
   como `xxx.ns.cloudflare.com` e `yyy.ns.cloudflare.com`. Anote os dois.

**No registro.br:**

3. Entre em [registro.br](https://registro.br), **Painel → Meus domínios**, e
   clique no domínio.
4. Abra **DNS → Alterar servidores DNS** (em algumas telas aparece como
   "Configurar endereçamento" → "Usar servidores DNS próprios").
5. Apague o que estiver lá e informe os **dois servidores da Cloudflare**.
   Salve. O registro.br valida a configuração antes de aceitar; se acusar erro,
   é porque a zona ainda não existe na Cloudflare — confirme o passo 1 e repita.
6. A propagação leva de minutos a algumas horas. O painel da Cloudflare mostra
   "Active" quando reconhecer.

**De volta na Cloudflare, para ligar o domínio ao site:**

7. **Workers & Pages → seu projeto → Custom domains → Set up a domain**.
8. Informe o domínio raiz (sem `www`). A Cloudflare cria o registro sozinha.
9. Repita para `www.<seu domínio>` e configure o redirecionamento de `www` para
   a raiz, para não existirem duas versões do site aos olhos do Google.
10. O certificado HTTPS é emitido automaticamente, em geral em poucos minutos.

**Só depois que o domínio estiver ativo:** faça um push com o `site:` correto no
`astro.config.mjs`, para as URLs canônicas saírem certas na build publicada.

### 4. Variáveis de ambiente

Em **Pages → Settings → Variables and Secrets**, adicione (ver `.env.example`):

```
PUBLIC_GA4_ID
PUBLIC_GOOGLE_ADS_ID
PUBLIC_META_PIXEL_ID
```

Sem elas, nenhum script de terceiro carrega — o site funciona igual, só não mede.
**Preencha antes de ligar qualquer campanha:** anúncio sem medição é aposta.

Elas precisam ser criadas nas contas primeiro: GA4 em analytics.google.com,
o ID de conversão no Google Ads, o Pixel no Meta Business.

---

## Ordem recomendada

1. Registrar o domínio (bloqueia todo o resto).
2. Publicar na Cloudflare Pages — já sai no ar em `pages.dev`, dá para mostrar
   para a Fernanda antes do domínio propagar.
3. Apontar o domínio.
4. Criar GA4, Ads e Pixel, e preencher as variáveis.
5. Só então ligar campanha.

Entre os passos 2 e 5 cabem as páginas que faltam — `/resultados` principalmente,
que é o ativo mais forte e está parado.
