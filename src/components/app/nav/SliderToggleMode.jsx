"use client";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/app/ThemeContext";

export default function SliderToggleMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`grid h-[100px] place-content-center px-4 transition-colors ${
        theme === "light" ? "bg-gray-100" : "bg-slate-900"
      }`}
    >
      <SliderToggle selected={theme} setSelected={toggleTheme} />
    </div>
  );
};

const SliderToggle = ({ selected, setSelected }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`text-sm font-medium flex items-center gap-2 px-3 py-3 transition-colors relative z-10 ${
          selected === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => setSelected("light")}
      >
        <FiMoon className="relative z-10 text-lg" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`text-sm font-medium flex items-center gap-2 px-3 py-3 transition-colors relative z-10 ${
          selected === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => setSelected("dark")}
      >
        <FiSun className="relative z-10 text-lg" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};