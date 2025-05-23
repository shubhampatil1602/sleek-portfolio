import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "oklch(0.29 0 0)",
        secondary: "oklch(0.56 0 0)",
      },
    },
  },
  plugins: [
    typography,
    plugin(function ({ addVariant }) {
      addVariant("dark", "&:is(.dark *)");
    }),
  ],
} satisfies Config;
