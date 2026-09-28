/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          dark: '#140204',
          DEFAULT: '#2F0508',
          light: '#48090E',
        },
        ochre: {
          DEFAULT: '#B37F1D',
          light: '#C78F23',
          muted: 'rgba(179, 127, 29, 0.28)',
        },
        olive: {
          DEFAULT: '#4A4B29',
          badge: 'rgba(74, 75, 41, 0.40)',
          border: 'rgba(92, 94, 52, 0.60)',
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          muted: '#D4CDC3',
          dim: '#A89F91',
        },
      },
    },
  },
  plugins: [],
};
