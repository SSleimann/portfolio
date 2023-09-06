/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#e63946',
        'color2': '#f1faee',
        'color3': '#a8dadc',
        'color4': '#457b9d',
        'color5': '#1d3557',
      },
    }
  }
}
