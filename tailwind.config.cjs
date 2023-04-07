/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#fbe0af",
      dark: "#48494d",
      text_dark: "#66676c",
      secondary_dark: "#a2a5aa",
      blue: "#4c8cff",
      pink: "#f6bfc7",
      light_blue: "#f7fbfd",
      success: "#9bd9a4",
    },
    extend: {},
  },
  plugins: [],
};
