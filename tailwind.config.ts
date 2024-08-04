import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        Promary: "#EDE9E3",
        Secondary: "#CDC6C3",
        Accent: "#e74c3c",
        Light: "#f9f9f9",
        Dark: "#333333",
        olive: "#3E8E41",
        "Light-Gold": "#F8E231",
        "Medium-Gold": "#FFD700",
      },
    },
  },
  plugins: [],
};
export default config;
