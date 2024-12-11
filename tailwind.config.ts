import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spot-1": "spot 1.5s infinite ease-in-out",
        "spot-2": "spot 2s infinite ease-in-out",
        "spot-3": "spot 2.5s infinite ease-in-out",
        "spot-4": "spot 3s infinite ease-in-out",
        "spot-5": "spot 3.5s infinite ease-in-out",
        pulse: "pulse 2s infinite",
      },
      animation2: {
        'stroke-dashoffset': 'stroke-dashoffset 1s ease-in-out',
      },
      keyframes: {
        spot: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translateY(-20px) scale(1.2)", opacity: "0.8" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
