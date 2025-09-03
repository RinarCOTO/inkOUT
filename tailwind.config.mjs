import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        optima: ['Optima', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
