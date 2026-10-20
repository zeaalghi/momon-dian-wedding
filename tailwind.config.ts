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
          // Main 3-Color Palette: Burgundy (#7A1026), Gold (#B7892B), Creme (#F3E2C7)
          bg: "#F3E2C7",
          linen: "#EAD3B1",
          cream: "#FAF2E4",
          sage: {
            50: "#FAF2E4",
            100: "#F0DFC3",
            200: "#DEC397",
            300: "#C8A162",
            400: "#B7892B",
            500: "#8F1830",
            600: "#7A1026", // Primary Burgundy (#7A1026)
            700: "#5E0C1D", // Darker Burgundy hover
            800: "#4A0917", // Deep Burgundy headings
            900: "#2B1B1F", // Deep Espresso-Burgundy
          },
          rose: {
            50: "#FAF2E4",
            100: "#F2DFBE",
            200: "#DFC38E",
            300: "#B7892B", // Primary Gold (#B7892B)
            400: "#B7892B", // Gold script & accents
            500: "#7A1026", // Burgundy badge text
          },
          gold: {
            light: "#D6B05C",
            DEFAULT: "#B7892B", // Exact Gold (#B7892B)
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
        botanical: "0 10px 40px -10px rgba(122, 16, 38, 0.14)",
        "botanical-lg": "0 20px 50px -12px rgba(122, 16, 38, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
