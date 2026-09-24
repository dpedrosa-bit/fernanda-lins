// Fonte única de verdade do site. Trocar aqui muda em todas as páginas.

export const site = {
  nome: 'Fernanda Lins Estética',
  nomeCompleto: 'Fernanda Lins Estética Facial e Corporal',
  tagline: 'Estética avançada facial e corporal',
  descricao:
    'Estética avançada na Zona Norte de São Paulo. Drenagem pós-operatória, protocolo para lipedema, gordura localizada e cuidados faciais com a Fernanda Lins.',

  // Contato
  whatsapp: '5511949200929',
  telefoneExibicao: '(11) 94920-0929',
  instagram: 'fernandalinsestetica',
  instagramUrl: 'https://www.instagram.com/fernandalinsestetica/',

  // Endereço
  rua: 'Rua Monjolo, 284',
  bairro: 'Jardim Monjolo',
  cidade: 'São Paulo',
  uf: 'SP',
  cep: '02961-070',
  regiao: 'Zona Norte de São Paulo',
  mapsUrl: 'https://maps.google.com/?q=Rua+Monjolo,+284,+Jardim+Monjolo,+São+Paulo',

  // Horário confirmado com a Fernanda em out/2026.
  // Alimenta o rodapé de todas as páginas e o JSON-LD que o Google lê.
  horarios: [
    { dias: 'Segunda a sexta', horario: '14h às 20h' },
    { dias: 'Sábado', horario: '9h às 16h' },
  ],
} as const;

export const enderecoLinha = `${site.rua} — ${site.bairro}, ${site.cidade}/${site.uf}`;

/**
 * Link de WhatsApp com mensagem pré-escrita.
 * A mensagem é o mecanismo de atribuição: ela identifica de qual página
 * veio a conversa sem precisar de nenhum CRM.
 */
export function whatsappLink(mensagem: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const msg = {
  home: 'Oi Fernanda! Vim pelo site e queria saber mais sobre os tratamentos.',
  posOp: 'Oi Fernanda! Vim pelo site. Fiz cirurgia e preciso de drenagem pós-operatória.',
  lipedema: 'Oi Fernanda! Vim pelo site e queria saber do protocolo para lipedema.',
  avaliacao: 'Oi Fernanda! Vim pelo site e queria agendar uma avaliação.',
  papada: 'Oi Fernanda! Vim pelo site e queria saber do protocolo para papada.',
  resultados: 'Oi Fernanda! Vi os resultados no site e queria saber se serve para o meu caso.',
} as const;
