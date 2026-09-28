// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rena.matiaslaporta.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
