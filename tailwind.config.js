const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      md: ["18px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      big: ["35px"],
      card: ["24px", "30px"],
      gigant: ["100px", "100px"],
      gigantMobile: ["45px", "47px"],
      smMobile: ["15px"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
