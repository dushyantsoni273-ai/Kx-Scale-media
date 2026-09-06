import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#FFFFFF",
        mist: "#F5F5F5",
        line: "#EAEAEA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-1": ["clamp(3rem, 8vw, 8.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.25rem, 5vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-3": ["clamp(1.75rem, 3vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
