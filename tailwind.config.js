/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // 🔥 HTML theme fix
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}