import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        "plus-jakarta": ["var(--font-plus-jakarta-sans)", "sans-serif"],
        inter: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        sora: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        "work-sans": ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#F7F5FE",
          100: "#EEE7FF",
          200: "#DACBFE",
          300: "#BD9FFC",
          400: "#9867F7",
          500: "#7635EF",
          600: "#5B2DB8",
          700: "#482194",
          800: "#381775",
          900: "#270F55",
          sidebar: "#2F1964",
          sidebarDark: "#23114C",
          sidebarActive: "#4A269C",
        },
        teal: {
          50: "#E4F5F3",
          100: "#CCEDE7",
          500: "#0D9488",
          600: "#0B7A70",
          700: "#08635B",
        },
        amber: {
          50: "#FEF3DD",
          500: "#F59E0B",
          600: "#D97706",
        },
        navy: {
          700: "#16264A",
          800: "#0F1E3D",
          900: "#0A1834",
          950: "#060F22",
        },
        slate: {
          bg: "#F7F9FC",
          card: "#FFFFFF",
          border: "#E2E8F0",
          muted: "#5C6981",
        },
        kpi: {
          purple: "#7048E8",
          coral: "#FA5252",
          blue: "#339AF0",
          orange: "#FD7E14",
          emerald: "#20C997",
          yellow: "#FAB005",
          pink: "#E64980",
          indigo: "#4C6EF5",
        }
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(10, 24, 52, 0.04)",
        card: "0 10px 30px -10px rgba(10, 24, 52, 0.08)",
        cardHover: "0 20px 40px -15px rgba(91, 45, 184, 0.12)",
        dashboard: "0 25px 60px -20px rgba(10, 24, 52, 0.25)",
        primaryGlow: "0 10px 25px -5px rgba(91, 45, 184, 0.4)",
        tealGlow: "0 10px 25px -5px rgba(13, 148, 136, 0.4)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
};
export default config;
