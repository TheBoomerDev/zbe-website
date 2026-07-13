import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#00A3C4',
        'brand-dark': '#0077b6',
      },
      boxShadow: {
        card: '0 10px 40px -10px rgba(0, 119, 182, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
