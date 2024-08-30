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
    },
    fontSize: {
      "2xsm": "0.625em",
      xsm: "0.75em",
      sm: "0.8125em",
      reg: "0.9375em",
      lg: "1.125em",
      xl: "1.375em",
      "2xl": "1.5625em",
      "3xl": "2em",
      "4xl": "2.5em",
      "5xl": "3.125em",
      "6xl": "4.375em",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "844px",
      lg: "1080px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

export default config;
