/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        customGray: 'rgba(84, 84, 84, 1)',
      },
      top:{
        customtop: '50px'
      },
    },
  },
  plugins: [],
}

