// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Hosted on GitHub Pages at https://mashfiqzihad.github.io/beam-lab-website/
// If you move to a custom domain later, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://mashfiqzihad.github.io',
  base: '/beam-lab-website',
  vite: { plugins: [tailwindcss()] },
});
