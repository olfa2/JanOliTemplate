/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f172a",
          surface: "#111827",
          accent: "#f97316"
        }
      }
    }
  },
  plugins: []
};
