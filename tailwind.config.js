const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
        2: 'rgba(255, 255, 255, 0.8)',
        3: 'rgba(255, 255, 255, 0.1)',
      },
      black: {
        DEFAULT: '#000000',
        2: 'rgba(0, 0, 0, 0.5)',
        3: 'rgba(0, 0, 0, 0.1)',
      },
      primary: '#28293D',
      sections: '#2D2F45',
      cards: '#373951',
      cardsections: '#3E405B',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
