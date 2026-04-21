"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme.js";

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-14 h-7 rounded-full border border-border bg-surface flex items-center px-1 transition-colors duration-300 hover:border-text/30"
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-text"
        animate={{ x: dark ? 0 : 28 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
    </button>
  );
}
