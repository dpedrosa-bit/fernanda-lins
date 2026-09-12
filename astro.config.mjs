import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fernandalinsestetica.com.br',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto' },
});
