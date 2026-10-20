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
          bg: "#FAF8F5",
          linen: "#F2EFE9",
          cream: "#F7F3EB",
          sage: {
            50: "#F4F6F3",
            100: "#E6ECE4",
            200: "#CEDA" + "CA",
            300: "#A3B19B",
            400: "#7E9178",
            500: "#5F7161",
            600: "#4A594C",
            700: "#3A463B",
            800: "#2C352E",
            900: "#1F2620",
          },
          rose: {
            50: "#FDF8F8",
            100: "#F7ECEC",
            200: "#E8D3D3",
            300: "#D4A5A5",
            400: "#B87D7D",
            500: "#9E5E5E",
          },
          gold: {
            light: "#E6D5B8",
            DEFAULT: "#C5A880",
            dark: "#9E8259",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        botanical: "0 10px 40px -10px rgba(95, 113, 97, 0.12)",
        "botanical-lg": "0 20px 50px -12px rgba(95, 113, 97, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
