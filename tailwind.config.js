/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tomatoOrange: '#FF6347', // Your custom color
        lightTomatoOrange: '#ffa07a', 
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, #ffa07a, #ff6347)',
      },
    },
  },
  plugins: [],
}