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
          // Balanced Burgundy (#7A1026) & Gold (#B7892B) with Creme (#F3E2C7) as Accent
          bg: "#7A1026",
          linen: "#B7892B",
          cream: "#F3E2C7",
          sage: {
            50: "#F3E2C7",
            100: "#EAD3B1",
            200: "#D6B05C",
            300: "#C4973B",
            400: "#B7892B", // Primary Gold (#B7892B)
            500: "#8F1830",
            600: "#7A1026", // Primary Burgundy (#7A1026)
            700: "#5E0C1D", // Deep Burgundy
            800: "#4A0917", // Darkest Burgundy
            900: "#2B1B1F", // Espresso-Burgundy
          },
          rose: {
            50: "#F3E2C7",
            100: "#E8CFA6",
            200: "#D6B05C",
            300: "#B7892B", // Primary Gold (#B7892B)
            400: "#D6B05C", // Bright Gold highlight
            500: "#7A1026", // Primary Burgundy (#7A1026)
          },
          gold: {
            light: "#D6B05C",
            DEFAULT: "#B7892B", // Primary Gold (#B7892B)
            dark: "#8C6518",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        botanical: "0 12px 40px -10px rgba(43, 27, 31, 0.45)",
        "botanical-lg": "0 20px 55px -12px rgba(43, 27, 31, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
