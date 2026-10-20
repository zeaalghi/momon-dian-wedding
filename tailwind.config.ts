import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        botanical: {
          // Romantic Botanical Palette:
          // Deep Wine Burgundy (#631426), Dark Mulberry (#3D0A16),
          // Champagne Gold (#D5B263), Antique Bronze (#9E7B3B),
          // Warm Ivory Cream (#FAF5EE), Soft Champagne (#EADBC8)
          bg: "#631426",
          mulberry: "#3D0A16",
          cream: "#FAF5EE",
          linen: "#EADBC8",
          sage: {
            50: "#FAF5EE",
            100: "#EADBC8",
            200: "#D5B263",
            300: "#C29B4D",
            400: "#9E7B3B",
            500: "#7B1B31",
            600: "#631426", // Deep Wine Burgundy
            700: "#4E0E1D",
            800: "#3D0A16", // Dark Mulberry
            900: "#28060E",
          },
          rose: {
            50: "#FAF5EE",
            100: "#EADBC8",
            200: "#D5B263",
            300: "#D5B263", // Champagne Gold
            400: "#9E7B3B", // Antique Bronze
            500: "#631426", // Deep Wine Burgundy
          },
          gold: {
            light: "#E5C985",
            DEFAULT: "#D5B263", // Champagne Gold
            dark: "#9E7B3B", // Antique Bronze
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-pinyon)", "cursive"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        botanical: "0 14px 40px -10px rgba(61, 10, 22, 0.28)",
        "botanical-lg": "0 24px 60px -12px rgba(38, 6, 14, 0.5)",
        "gold-glow": "0 10px 35px -8px rgba(213, 178, 99, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
