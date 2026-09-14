import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12263d",
        pearl: "#f3f7fa",
        blush: "#f17855",
        wine: "#0c7895",
        brass: "#e4a841",
        mist: "#dce9ef"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(18, 38, 61, 0.17)"
      }
    }
  },
  plugins: []
};

export default config;
