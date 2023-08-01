/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: "#FFFFFF",
        sandy: "#FFD3AF",
        orange: "#FFA155",
        lightBlue: "#ECF8F9",
        blue: "#444CFC",
        darkBlue: "#232536",
      },
    },
  },
  plugins: [],
};
