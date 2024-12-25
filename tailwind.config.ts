import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: {
        darkest: '#090A0A',
      },
      gray: '#D2D5DA',
      'light-gray': '#FAFAFA',
      'dark-gray': '#1B1B1B',
      blue: '#0099FF',
      white: '#FFFFFF',
      red: '#FF0000',
    },
    fontFamily: {
      inter: ['var(--font-inter)', 'sans-serif'],
      ptSerif: ['var(--font-pt-serif)', 'serif'],
      beVietnamPro: ['var(--font-be-vietnam-pro)'],
      sourceCodePro: ['var(--font-source-code-pro)'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-motion')],
};
export default config;
