/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {fontFamily: {
      inter: ['"Inter"', 'sans-serif'],
      montserrat: ['"Montserrat"', 'sans-serif'],
      outfit: ['"Outfit"', 'sans-serif'],
      roboto: ['"Roboto"', 'sans-serif'],
    }},
  },
  plugins: [],
}

