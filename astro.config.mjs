// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({

  site: 'https://kerrinfull.cloud',
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare(),
  output: 'server',
  i18n: {
    defaultLocale: 'es',
    locales: ['es','en'],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'redirect'
    }
  }
});