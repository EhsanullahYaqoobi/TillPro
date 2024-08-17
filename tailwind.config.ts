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
        Violet:"#7436EA",
        "Light-Gold": "#F8E231",
        "Med-Gold": "#FFD700",
        "light-purple": "#EAE0F0",
        'Btn-Color':"#C99C33",
        "light-pink":"#ED174F",
        'Footer-color':'#0F172A',
      },
    },
  },
  plugins: [],
};
export default config;
