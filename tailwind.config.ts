import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary": "#1D3C56",
        "secondary": "#A7BEC7",
        "tertiary": "#D9D9D9",
        "gray": "#F2F2F2"
      },
    },
    screens: {
      xs: "480px",
      sm: "680px",
      md: "980px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px"
    }
  },
  plugins: [],
} satisfies Config;
