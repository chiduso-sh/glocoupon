import type { Config } from "tailwindcss";

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
      },      
    },
  },
    safelist: [
      "border-[#137DC8]", "border-[#15B311]", "border-[#2B1FBB]", "border-[#DAA508]",
      "bg-[#BEE4FF]", "bg-[#D6FFD5]", "bg-[#DBD7FF]", "bg-[#FFF4D3]"
    ],
  plugins: [],
} satisfies Config;
