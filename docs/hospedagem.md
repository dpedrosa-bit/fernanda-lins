# Hospedagem — qual escolher e por quê

## Recomendação: Cloudflare Pages

Custo real do site no ar: **só o domínio, ~R$ 40 por ano.**

### Por que não a Vercel, que eu tinha sugerido antes

Correção de uma recomendação anterior: o plano gratuito da Vercel (**Hobby**) é,
pelos termos dela, para **uso pessoal e não comercial**. O site da Fernanda é um
negócio — usar o Hobby fica fora da política, e o plano pago sai por volta de
US$ 20/mês. Não vale para este porte quando há alternativa gratuita que permite
uso comercial.

### Comparativo

| | Cloudflare Pages | Netlify | GitHub Pages | Vercel |
| --- | --- | --- | --- | --- |
| Custo | Grátis | Grátis | Grátis | Hobby grátis / Pro ~US$20 |
| Uso comercial | Permitido | Permitido | Permitido | **Só no plano pago** |
| Banda | Sem limite | ~100 GB/mês | ~100 GB/mês (limite brando) | Limitada no Hobby |
| Domínio + SSL | Grátis | Grátis | Grátis | Grátis |
| Deploy por push | Sim | Sim | Precisa de Actions | Sim |
| Latência no Brasil | Melhor (PoP em SP) | Boa | Razoável | Boa |

Confira os valores antes de decidir — planos mudam.

A Cloudflare ganha em três pontos que importam aqui: **uso comercial no plano
gratuito**, **banda sem limite** (se uma campanha estourar, não chega conta) e
**presença em São Paulo**, o que significa menos latência para o público dela,
que é de um raio de 8 km. Site rápido melhora o Índice de Qualidade no Google
Ads e derruba o custo por clique — então velocidade aqui é dinheiro, não vaidade.

---

## Passo a passo

### 1. Registrar o domínio

No **[registro.br](https://registro.br)** — é o registrador oficial do `.com.br`,
sem intermediário e sem renovação inflada. Cerca de **R$ 40/ano**.

Sugestões, da melhor para a menos boa:

- `fernandalinsestetica.com.br` — bate com o @ do Instagram, que é o que as
  clientes já conhecem. **Preferir esta.**
- `fernandalins.com.br`
- `esteticafernandalins.com.br`

Depois de registrar, altere `site:` em `astro.config.mjs` para o domínio escolhido
e ajuste a linha `Sitemap:` em `public/robots.txt`.

### 2. Publicar na Cloudflare Pages

1. Crie conta em [dash.cloudflare.com](https://dash.cloudflare.com) (grátis).
2. **Workers & Pages → Create → Pages → Connect to Git**, autorize o GitHub e
   escolha `dpedrosa-bit/fernanda-lins`.
3. Configuração de build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Save and Deploy.** Sai um endereço `fernanda-lins.pages.dev` em 1–2 minutos.

A partir daí, todo `git push` na `main` publica sozinho.

### 3. Apontar o domínio

Na Cloudflare, o caminho mais simples é transferir a **gestão de DNS** (não o
registro) para ela:

1. No painel da Cloudflare: **Add a site**, digite o domínio, plano **Free**.
2. A Cloudflare mostra dois servidores de nome (`algo.ns.cloudflare.com`).
3. No registro.br, em **Alterar servidores DNS**, troque pelos dois da Cloudflare.
4. Propaga em algumas horas. Depois: **Pages → seu projeto → Custom domains →
   Set up a domain** e informe o domínio. O certificado sai automático.

O domínio continua registrado no registro.br e no nome dela; só o DNS passa a ser
gerido pela Cloudflare.

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
