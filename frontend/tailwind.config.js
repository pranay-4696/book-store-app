/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFCE1A',
        secondary: '#0D0842',
        blackBG: '#F3F3F3',
        favourite: '#FF5841',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

