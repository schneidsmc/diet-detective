/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./client/**/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "selector",
};
