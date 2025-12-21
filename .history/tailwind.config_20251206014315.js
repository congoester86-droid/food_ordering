/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    red: {
      100: "#D33B0D"
    }
  },
  plugins: [],
}