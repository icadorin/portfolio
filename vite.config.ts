import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': '/src',
      '@styles': '/src/styles',
      '@styles-sections': '/src/styles/sections',
      '@styles-quickbite': '/src/styles/quickbite',
      '@pages': '/src/pages',
      '@pages-sections': '/src/pages/sections',
      '@pages-quickbite': '/src/pages/quickbite',
    },
  },
});
