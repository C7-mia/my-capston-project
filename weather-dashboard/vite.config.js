import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Use '/' if deploying to root domain. Change to '/weather-dashboard/' if deploying to a subfolder.
  build: {
    outDir: 'dist', // Default is 'dist', matching Netlify's publish directory
    emptyOutDir: true
  }
});
