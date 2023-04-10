import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000',
        'light-black': '#262626',
        shadow: '#585858',
        'light-shadow': '#8D8D8D',
        white: '#FFFFFF',
        devRed: '#FF0000',
        devGreen: '#00FF00',
        devBlue: '#0000FF',
        'light-blue': '#479FF1',
        'light-green': '#45EB9B',
        pink: '#9A35CD',
        'red-error': '#B91C1C',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-10': '10% 10%',
        'pos-100': '100% 100%',
      },
      keyframes: {
        disco: {
          '0%': { transform: 'translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateY(-50%) rotate(360deg)' },
        },
        headers: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        moving: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-15px) translateX(-2px)' },
        },
        'moving-arrow': {
          '0%': { transform: 'translateY(0px) translateX(32px)' },
          '100%': {
            transform: 'translateY(-3px) translateX(-12px)',
          },
        },
      },
      animation: {
        disco: 'disco 4s linear infinite',
        headers: 'headers 3s alternate infinite',
        moving: 'moving 2s forwards 1, infinite',
        'moving-arrow': 'moving-arrow 2s forwards 1, infinite',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/typography')],
} satisfies Config;
