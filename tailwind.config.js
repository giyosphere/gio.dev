/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg:      "var(--color-bg)",
        surface: "var(--color-surface)",
        text:    "var(--color-text)",
        muted:   "var(--color-muted)",
        accent:  "var(--color-accent)",
        border:  "var(--color-border)",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body:    ["'DM Sans'", "sans-serif"],
        mono:    ["'Space Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
