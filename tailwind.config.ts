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
        textYellow: "#fab428",
        textRed:"#e04403",
        textProduct:"#652f6c",
        bgProMenuEnfant:"#D0333A",
        bgProMenuG4:"#AF1957",
        bgProMenuTirami:"#84286B",
      },
    },
  },
  plugins: [],
} satisfies Config;
