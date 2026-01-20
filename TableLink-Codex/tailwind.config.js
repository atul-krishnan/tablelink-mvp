const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d1219",
        "ink-soft": "#1c2430",
        sand: "#f6f2e9",
        parchment: "#f0ebdf",
        "stone-soft": "#e3ded3",
        "stone-muted": "#ebe6db",
        deep: "#123a37",
        accent: "#1b7368",
        amber: "#e0a437",
        cream: "#fdfbf6"
      },
      fontFamily: {
        sans: ["ManropeVariable", ...fontFamily.sans],
        display: ["Playfair Display Variable", ...fontFamily.sans]
      },
      boxShadow: {
        card: "0 22px 70px rgba(13, 18, 25, 0.08)",
        glow: "0 16px 60px rgba(18, 58, 55, 0.22)"
      },
      borderRadius: {
        soft: "18px"
      }
    }
  },
  plugins: []
};
