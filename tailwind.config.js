/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica'],
        noe: ['noe-display', 'Helvetica']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
