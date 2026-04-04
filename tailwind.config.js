/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#f8fafc",
          dark: "#0f172a",
          surface: "#ffffff",
          accent: "#2563eb",
          "accent-hover": "#1d4ed8"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      }
    }
  },
  plugins: []
};
