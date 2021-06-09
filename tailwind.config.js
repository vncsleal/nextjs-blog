const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.gray,
      white: colors.white,
      cyan: colors.cyan,
      black: colors.black,
    },
    extend: {
      fontFamily: {
        mono: ['"Roboto Mono"', 'ui-monospace'],
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
