/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        tiempos: ['Tiempos Fine', 'serif'],
      },
      colors: {
        'lightGrey': '#919EAB',
        'themePink': '#F8E8D4',
      },
    },
  },
  plugins: [],
}