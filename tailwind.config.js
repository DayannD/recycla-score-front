/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        'noe': ['noe-display', 'Helvetica']
      }
    },
    backgroundImage: {
      'nav': 'url("/assets/img/test-background.jpg")',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
};
