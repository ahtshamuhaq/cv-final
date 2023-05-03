/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],

  theme: {
    backgroundColor: {
      gray: "#333333",
      blue: "#2BABE2",
    },
    colors: {
      blue: "#2BABE2",
    },
    extend: {},
  },
  plugins: [],
};
