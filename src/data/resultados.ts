/**
 * Casos de antes-e-depois.
 *
 * REGRA: um caso só aparece no site quando `publicado: true` E tem `imagem`.
 * Isso é proposital — evita publicar caso sem autorização de imagem assinada
 * por esquecimento. Preencher o objeto não basta; publicar é um ato explícito.
 *
 * REGRA: nada de antes-e-depois em anúncio. A política de saúde e bem-estar do
 * Meta proíbe, e reprovação repetida restringe a conta. No site, sim — com
 * protocolo, tempo e aviso de variação, que é o que separa prova de propaganda.
 *
 * Para acrescentar um caso:
 *   1. Salve a imagem em public/resultados/<slug>.jpg
 *      (antes e depois lado a lado, mesma luz, mesmo ângulo, mesma pose)
 *   2. Preencha o objeto abaixo
 *   3. Confirme que existe autorização de uso de imagem assinada
 *   4. Só então mude `publicado` para true
 */

export interface Resultado {
  slug: string;
  /** O que foi tratado, na língua da cliente. */
  titulo: string;
  /** Região tratada, ex.: "Abdômen e flancos". */
  regiao: string;
  /** Procedimentos do protocolo, na ordem em que foram feitos. */
  protocolo: string[];
  /** Número total de sessões. Omitir se não souber — melhor faltar que inventar. */
  sessoes?: number;
  /** Tempo entre a primeira e a última foto, ex.: "4 meses". */
  duracao?: string;
  /** O que a cliente manteve em casa. É o que dá credibilidade ao caso. */
  emCasa?: string;
  /** Fala da cliente ou da Fernanda sobre o caso. */
  depoimento?: string;
  /** Caminho em public/, ex.: "/resultados/corporal-completo.jpg" */
  imagem?: string;
  /** Só vai ao ar com autorização de imagem assinada. */
  publicado: boolean;
}

export const resultados: Resultado[] = [
  {
    slug: 'corporal-completo',
    titulo: 'Protocolo corporal completo',
    regiao: 'Abdômen, flancos e costas',
    protocolo: [
      'Criolipólise de placas',
      'Drenagem linfática',
      'Massagem modeladora',
      'Lipo enzimática',
      'Radiofrequência',
    ],
    // sessoes e duracao: preencher com os números reais do prontuário
    emCasa: 'Seguiu as orientações de alimentação e hidratação entre as sessões.',
    depoimento:
      'Confesso que por muitas vezes achei que não conseguiria corresponder às suas expectativas. Mas ela sempre focada, ouvindo o que era indicado, e assim seguimos até chegar nesse resultado.',
    // imagem: '/resultados/corporal-completo.jpg',
    publicado: false,
  },
  {
    slug: 'papada-enzimas',
    titulo: 'Protocolo para papada',
    regiao: 'Região submentoniana',
    protocolo: ['Enzimas pressurizadas, sem agulha'],
    // imagem: '/resultados/papada-enzimas.jpg',
    publicado: false,
  },
];

/** Só o que pode ir ao ar. */
export const resultadosPublicados = resultados.filter((r) => r.publicado && r.imagem);
