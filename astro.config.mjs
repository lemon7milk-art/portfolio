import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://lemon7milk-art.github.io/portfolio',
  base: '/portfolio',
  integrations: [svelte()],
  output: 'static',
});
