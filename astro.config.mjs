// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';
import { LANGUAGES } from './src/i18n/config.i18n';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://kerrinfull.cloud',

  adapter: cloudflare(),
  i18n: {
    defaultLocale: 'es',
    locales: Object.keys(LANGUAGES),
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'redirect',
      redirectToDefaultLocale: true,
    }
  }
});