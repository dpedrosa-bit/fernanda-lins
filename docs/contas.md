# Contas — o que criar, em que ordem e em nome de quem

## Em nome de quem fica cada conta

Quem cuida do site é o irmão dela, e vai continuar cuidando. A Fernanda não tem
nem quer ter conhecimento técnico. Isso é normal e não é problema — o que muda de
conta para conta é **quanto se perde se o acesso sumir**.

### O que pode ficar na sua conta pessoal, sem problema

**Cloudflare (hospedagem e DNS).** Não acumula nada. A fonte de verdade do site é
o repositório no GitHub; se esta conta desaparecesse amanhã, o site sobe em outro
lugar em dez minutos e os registros de DNS se recriam em cinco. Não há histórico,
público nem avaliação presos ali. **Use a conta que você já tem** — é uma senha a
menos para ela guardar e nada de valor fica exposto.

O mesmo vale para o GitHub.

### O que precisa ser dela, mesmo que você opere tudo

Três ativos acumulam valor que **não se transfere**:

| Ativo | O que se perde | Como resolver |
| --- | --- | --- |
| **Domínio** (registro.br) | O endereço do negócio | Registrado no CPF dela |
| **Perfil da Empresa no Google** | As avaliações — não migram de jeito nenhum | Ela como *Proprietária principal*, você como *Gerente* |
| **Meta Business** | Público do Pixel e histórico | Ela como *Administradora*, você também |

**A solução não é ela ter que aprender a mexer.** Essas plataformas têm sistema de
papéis justamente para isto: ela pode ser proprietária **sem nunca entrar**,
enquanto você opera como gerente e faz todo o trabalho. No Perfil do Google, o
proprietário principal nem precisa saber que existe um painel.

Custa zero e leva dois minutos na hora de criar. Refazer depois, quando já houver
40 avaliações e meses de histórico, é que é caro — ou impossível.

### O que pode ficar do jeito mais prático

**GA4 e Google Ads.** Uma conta Google do negócio, operada por você, com os dados
de recuperação apontando para você *e* para ela. O histórico importa, mas as duas
plataformas permitem adicionar administradores a qualquer momento, então a
correção é barata se um dia for preciso.

### Por que isso não é desconfiança

O risco real não é você agir de má-fé. É **prosaico**: um celular perdido, uma
conta Google suspensa por engano, uma doença, uma viagem longa, ou o dia em que
ela contratar uma agência e precisar dar acesso. Nesses casos a diferença entre
"a Fernanda é a proprietária e adiciona quem quiser" e "está tudo numa conta que
ninguém mais alcança" é o negócio dela parar ou não.

Vale também escrever numa página — pode ser no bloco de notas do celular dela —
**quem tem acesso a quê e com qual e-mail**. Conhecimento que só existe na cabeça
de uma pessoa é o mesmo que não estar documentado.

## 1. Conta de e-mail (é por aqui que começa)

### O essencial: uma conta Google do negócio

Crie **`fernandalinsestetica@gmail.com`** (ou o que estiver livre). É **gratuita**
e vira a chave-mestra: o Perfil da Empresa no Google, o Analytics e o Google Ads
exigem uma conta Google, e é bom que seja a mesma.

Quem opera essa conta no dia a dia é você. Mas cadastre **os dois telefones** na
recuperação e ative a verificação em duas etapas — assim nenhum dos dois fica
trancado para fora se um celular se perder.

Não use a sua conta pessoal aqui: um dia essa conta pode precisar ser passada
adiante, e junto com ela iria o seu e-mail de sempre.

### O profissional: `contato@fernandalinsestetica.com.br`

Agora que o domínio é dela, vale ter o endereço próprio para site, cartão e bio
do Instagram. Duas formas, as duas baratas:

> **Antes de configurar qualquer e-mail, leia isto.** O registro.br criou no
> domínio três registros que declaram *"este domínio não envia nem recebe
> e-mail"*: um **MX nulo** (aponta para `.` com prioridade 0), um **SPF**
> `v=spf1 -all` e uma política **DMARC**. Eles protegem contra falsificação e
> devem ficar enquanto não houver e-mail.
>
> Só que eles **bloqueiam o Email Routing**: com o MX nulo no lugar, nenhuma
> mensagem chega. Ao ativar o `contato@`, será preciso **substituir o MX nulo
> pelos MX da Cloudflare** e **rever o SPF** — o `-all` sozinho barra qualquer
> envio legítimo futuro. A Cloudflare costuma oferecer a troca automática dos MX
> ao ativar o Email Routing; aceite, mas confira o SPF depois.
>
> Enquanto o e-mail não for configurado, **não mexa nesses três registros**.

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

> Roteiro detalhado, incluindo a verificação por vídeo e o plano de avaliações:
> **`docs/perfil-google.md`**.

Hoje: **5,0 com apenas 8 avaliações**, e o painel indica perfil **não
reivindicado**. Enquanto estiver assim ela não publica, não responde avaliação
como dona, não recebe mensagem, e qualquer pessoa pode sugerir alteração no
endereço e no horário dela.

1. Em [business.google.com](https://business.google.com), logada na conta Google
   **do negócio**, busque "Fernanda Lins Estética Facial e Corporal".
2. Reivindique. A verificação costuma ser por vídeo, telefone ou cartão postal.
3. **Assim que verificar, defina a Fernanda como Proprietária principal** e deixe
   a conta do negócio como Gerente. Em *Pessoas e acesso*, convide o e-mail dela,
   depois transfira a propriedade principal. Ela não precisa fazer mais nada
   depois de aceitar o convite — quem opera continua sendo você. **É o passo que
   protege as avaliações**, que são o ativo que não se recupera.
4. Depois de verificada:
   - **Troque a categoria** de "Profissional da beleza" para algo específico —
     categoria é um dos fatores mais fortes de posicionamento local.
   - Complete os **horários** (os mesmos do site: seg a sex 14h–20h, sáb 9h–16h).
   - Suba **fotos reais** do estúdio, dela atendendo e dos equipamentos.
   - Adicione o **site** e o **WhatsApp**.
5. **Meta: sair de 8 para 30 avaliações.** Pedir em todo atendimento, dois dias
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

0. Conferir se o domínio no registro.br está no CPF dela
1. Conta Google do negócio → destrava tudo
2. Reivindicar o Perfil da Empresa no Google → maior retorno, custo zero
3. `contato@` pela Cloudflare → endereço profissional
4. GA4 → Google Ads → Meta Pixel
5. Variáveis na Cloudflare e novo deploy
6. Conferir a medição funcionando
7. **Só então** ligar a primeira campanha

Os passos 1 e 2 valem mais, nos primeiros 90 dias, do que a verba inteira de
anúncio. Não deixe para depois de publicar o site.
