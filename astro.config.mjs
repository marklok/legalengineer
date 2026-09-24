// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://legalengineer.dk',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'da'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
