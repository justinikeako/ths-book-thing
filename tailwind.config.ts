import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["0.8em", { lineHeight: "1.5" }],
      base: ["1em", { lineHeight: "1.5" }],
      lg: ["1.25em", { lineHeight: "1.5", fontWeight: "500" }],
      xl: ["1.563em", { lineHeight: "1.15", fontWeight: "500" }],
      "2xl": ["1.953em", { lineHeight: "1.15", fontWeight: "500" }],
      "3xl": ["2.441em", { lineHeight: "1.15", fontWeight: "500" }],
      "4xl": [
        "3.052em",
        { lineHeight: "1.15", fontWeight: "600", letterSpacing: "-0.02em" },
      ],
    },

    extend: {},
  },
  plugins: [],
} satisfies Config;
