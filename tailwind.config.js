/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Lato"', ...defaultTheme.fontFamily.sans],
        secondary: ['"Raleway"', ...defaultTheme.fontFamily.sans],
        display: ['"Raleway"', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "hero-pattern": 'url("/assets/images/SBA_1294.png")',
      },
    },
  },
  plugins: [],
};
