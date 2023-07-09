/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgfaintwhite: "#F5F5F5",
        secondarycolor: "#858585",
        darkGray:"#666666",
        lightgreen: "#DDEFE0",
        lightYellow: "#F4ECDD",
        lightPink: "#EFDADA",
        lightBlue: "#DEE0EF",
        chartColor1:"#98D89E",
        chartColor2:"#F6DC7D",
        chartColor3:"#EE8484",

      },
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
