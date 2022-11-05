/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {  // 감귤색
          100: "#FFF7EA",
          200: "#FFE2B1",
          300: "#FFD083",
          400: "#FFBF55",
          500: "#FFAE27",
          600: "#F89B00",
          700: "#f88800",
        },
        secondary: { // 녹색
          100: "#a2f093",
          200: "#77e961",
          300: "#55e339",
          400: "#3bd11d",
          500: "#2fa818",
          600: "#248012",
          700: "#008000",
        }
      }
    },
    
  },
  plugins: [],
};
