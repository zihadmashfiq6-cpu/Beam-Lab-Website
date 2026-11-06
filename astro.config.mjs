// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Hosted on GitHub Pages at https://zihadmashfiq6-cpu.github.io/Beam-Lab-Website/
// If you move to a custom domain later, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://zihadmashfiq6-cpu.github.io',
  base: '/Beam-Lab-Website',
  vite: { plugins: [tailwindcss()] },
});
