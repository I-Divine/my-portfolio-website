/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": 'url("/assets/images/SBA_1294.png")',
      },
    },
  },
  plugins: [],
};
