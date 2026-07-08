import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1E1E2E',
        light: '#F4F4F4',
        body: '#555560',
        accent: '#F5A623',
        cta: { DEFAULT: '#2ECC8A', hover: '#26B478' },
        surface: '#262636',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderColor: {
        'on-dark': 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
