import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fernandalinsestetica.com.br',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto' },
  // O robots.txt aponta para o sitemap-index.xml; sem esta integracao,
  // o arquivo prometido nao existia e os buscadores recebiam 404.
  integrations: [sitemap()],
});
