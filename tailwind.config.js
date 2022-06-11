module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      slate50: '#f8fafc',
      slate900: '#0f172a',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      red50: '#fef2f2',
      red200: '#fecaca',
      red400: '#f87171',
      green: '#13ce66',
      yellow: '#ffc82c',
      white: '#ffffff',
      gray: '#8492a6',
      gray100: '#f3f4f6',
      gray200: '#e2e8f0',
      gray500: '#6b7280',
      gray600: '#4b5563',
      gray700: '#374151',
      gray900: '#111827',
      sky300: '#7dd3fc',
      sky500: '#0ea5e9',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Asap: ['Asap', 'sans-serif'],
      AsapItal: ['Asap', 'sans-serif'],
    },
    extend: {
      textUnderlineOffset: {
        3: '3px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        move: 'move 1.5s linear infinite',
      },
      keyframes: {
        move: {
          '0%': {
            opacity: '0.5',
          },
          '30%, 60%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0.5',
          },
        },
      },
    },
  },
  plugins: [],
};
