import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        anchor: '#1B3A5C',
        surface: '#24506F',
        bar: '#0F2033',
        title: '#16324F',
        light: '#F7F4EF',
        body: '#5C6B70',
        gold: {
          DEFAULT: '#C5A57A',
          hover: '#B1946E',
          dark: '#E0C8A4',
          light: '#A8875A',
        },
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
