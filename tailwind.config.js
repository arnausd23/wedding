/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a5883c',
        secondary: '#f5f5f3',
        green: '#8ab0b1',
      },
      fontFamily: {
        serif: ["serif-regular", "serif"],
        futura: ["futura", "serif"],
      },
    },
  },
  plugins: [],
}