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
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'], // Add your cursive font here
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.autofill-text-tomato': {
          ':-webkit-autofill': {
            '-webkit-text-fill-color': '#FF6347',
            'transition': 'background-color 5000s ease-in-out 0s',
          },
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }, ['responsive', 'hover']);
    },
  ],
}