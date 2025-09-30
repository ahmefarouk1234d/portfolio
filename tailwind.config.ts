import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        // 8pt scale
        0: "0",
        1: "0.5rem", // 8px
        2: "1rem", // 16px
        3: "1.5rem", // 24px
        4: "2rem", // 32px
        5: "2.5rem", // 40px
        6: "3rem", // 48px
        8: "4rem", // 64px
        10: "5rem", // 80px
        12: "6rem", // 96px
        16: "8rem", // 128px
      },
      borderRadius: {
        lg: "1rem", // 16px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
      },
    },
  },
  plugins: [],
};
export default config;
