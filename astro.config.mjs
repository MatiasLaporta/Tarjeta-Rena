// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://renatamgazmuri.co.uk',
  // La tarjeta vive en /business-card/; la raíz del dominio redirige ahí
  redirects: {
    '/': '/business-card/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
