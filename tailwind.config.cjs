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
        sandyAlt: "#FFE6D2",
        orange: "#FFA155",
        lightBlue: "#ECF8F9",
        blue: "#444CFC",
        blueAlt: "#666DFF",
        darkBlue: "#232536",
        grey: "#5D5F6D",
      },
      boxShadow: { card: "0px 60px 68px -30px rgba(255, 161, 85, 0.35)" },
    },
  },
  plugins: [],
};
