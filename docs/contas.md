# Contas — o que criar, em que ordem e em nome de quem

## A decisão que importa mais que todas as outras

**Tudo tem que ficar em nome da Fernanda, numa conta dela, não na sua conta pessoal.**

Perfil da Empresa no Google, Analytics, Google Ads, Meta Business: são ativos do
negócio dela, e cada um acumula histórico que não se transfere facilmente. Um
Perfil do Google com 40 avaliações, uma conta de Ads com meses de aprendizado,
um Pixel com público de remarketing — nada disso se recria do zero.

Se tudo ficar preso num e-mail pessoal seu, o dia em que você estiver ocupado,
viajando, ou simplesmente quiser sair do projeto, ela fica sem acesso ao próprio
negócio. Isso acontece o tempo todo com pequeno negócio que terceirizou o
marketing, e é caro de desfazer.

**O jeito certo:** a conta é dela e ela é a proprietária. Você entra como
**administrador adicionado**, com acesso total, e pode ser removido ou
re-adicionado sem que nada se perca. Todas as plataformas abaixo suportam isso.

---

## 1. Conta de e-mail (é por aqui que começa)

### O essencial: uma conta Google do negócio

Crie **`fernandalinsestetica@gmail.com`** (ou o que estiver livre), em nome dela,
com o telefone dela para recuperação. É **gratuita** e vira a chave-mestra: o
Perfil da Empresa no Google, o Analytics e o Google Ads exigem uma conta Google,
e é bom que seja a mesma.

Guarde a senha num gerenciador de senhas compartilhado com ela, e **ative a
verificação em duas etapas no celular dela** — não no seu.

### O profissional: `contato@fernandalinsestetica.com.br`

Agora que o domínio é dela, vale ter o endereço próprio para site, cartão e bio
do Instagram. Duas formas, as duas baratas:

**Opção A — Cloudflare Email Routing (grátis, 5 minutos, só recebe)**

No mesmo painel da Cloudflare onde o site vai ficar: **Email → Email Routing**,
crie o endereço `contato@fernandalinsestetica.com.br` e encaminhe para o Gmail
do negócio. Ela recebe tudo na caixa do Gmail. Para *responder* a partir do
endereço profissional é preciso um servidor de envio, que o Email Routing não
oferece — na prática ela responderia pelo Gmail.

**Opção B — caixa de verdade, que envia e recebe**

Um serviço de e-mail para domínio próprio. O **Zoho Mail** tem plano gratuito
para um domínio, e o **Google Workspace** custa por volta de R$ 30 por mês e dá
o Gmail completo no domínio dela. Confira os planos antes de decidir, que mudam.

**Recomendação:** comece pela Opção A. É grátis, resolve o recebimento hoje, e
não impede migrar para a B depois. O canal principal dela é o WhatsApp de
qualquer forma — o e-mail é para cadastro de serviço e contato formal.

---

## 2. Perfil da Empresa no Google (faça antes de tudo que custa dinheiro)

Hoje: **5,0 com apenas 8 avaliações**, e o painel indica perfil **não
reivindicado**. Enquanto estiver assim ela não publica, não responde avaliação
como dona, não recebe mensagem, e qualquer pessoa pode sugerir alteração no
endereço e no horário dela.

1. Em [business.google.com](https://business.google.com), logada na conta Google
   **do negócio**, busque "Fernanda Lins Estética Facial e Corporal".
2. Reivindique. A verificação costuma ser por vídeo, telefone ou cartão postal.
3. Depois de verificada:
   - **Troque a categoria** de "Profissional da beleza" para algo específico —
     categoria é um dos fatores mais fortes de posicionamento local.
   - Complete os **horários** (os mesmos do site: seg a sex 14h–20h, sáb 9h–16h).
   - Suba **fotos reais** do estúdio, dela atendendo e dos equipamentos.
   - Adicione o **site** e o **WhatsApp**.
4. **Meta: sair de 8 para 30 avaliações.** Pedir em todo atendimento, dois dias
   depois, junto com o "como está a pele?". É o item de maior retorno do plano
   inteiro, e custa zero.

---

## 3. Google Analytics 4

Em [analytics.google.com](https://analytics.google.com), com a conta do negócio.
Crie a propriedade, fuso horário São Paulo, moeda Real.

Copie o **ID de medição** (formato `G-XXXXXXXXXX`) → variável `PUBLIC_GA4_ID`.

## 4. Google Ads

Em [ads.google.com](https://ads.google.com), mesma conta. **Não crie campanha
ainda** — só a conta e a tag.

Em **Ferramentas → Conversões**, crie a tag. Copie o **ID de conversão**
(formato `AW-XXXXXXXXX`) → variável `PUBLIC_GOOGLE_ADS_ID`.

Vincule o Analytics e o Perfil da Empresa à conta de Ads: é o que permite
extensão de local no anúncio e medição ponta a ponta.

## 5. Meta Business e Pixel

Em [business.facebook.com](https://business.facebook.com). Aqui há uma
particularidade: o Business Manager se prende a um **perfil pessoal do Facebook**
— então **a Fernanda precisa ser a administradora**, com o perfil dela, e você
entra como pessoa adicionada.

Crie o Pixel em **Gerenciador de Eventos**. Copie o ID (15 a 16 dígitos) →
variável `PUBLIC_META_PIXEL_ID`.

---

## 6. Onde colocar os três IDs

No painel da Cloudflare: **Workers & Pages → fernanda-lins → Settings →
Variables and Secrets**, para os ambientes de Production e Preview:

```
PUBLIC_GA4_ID           G-XXXXXXXXXX
PUBLIC_GOOGLE_ADS_ID    AW-XXXXXXXXX
PUBLIC_META_PIXEL_ID    000000000000000
```

Depois, um novo deploy. Sem essas variáveis o site funciona normalmente — só não
mede nada, e **campanha sem medição é aposta**.

### Como conferir se ficou certo

Abra o site publicado e, nas ferramentas de desenvolvedor, veja se as requisições
para `googletagmanager.com` e `connect.facebook.net` aparecem. Clique no botão de
WhatsApp e confira o evento `clique_whatsapp` no **Tempo real** do GA4.

---

## Ordem, em resumo

1. Conta Google do negócio, em nome dela → destrava tudo
2. Reivindicar o Perfil da Empresa no Google → maior retorno, custo zero
3. `contato@` pela Cloudflare → endereço profissional
4. GA4 → Google Ads → Meta Pixel
5. Variáveis na Cloudflare e novo deploy
6. Conferir a medição funcionando
7. **Só então** ligar a primeira campanha

Os passos 1 e 2 valem mais, nos primeiros 90 dias, do que a verba inteira de
anúncio. Não deixe para depois de publicar o site.
