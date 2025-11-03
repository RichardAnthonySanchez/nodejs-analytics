/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/**/*.{ejs,html}", "./src/public/**/*.{js,ts,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
