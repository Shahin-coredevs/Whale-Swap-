/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0094FF',
        White: '#F5F5F5',
        bodyText: '#A9B5C5',
        BGColor: '#141C29',
        error: '#DE353C',
        sidebg: '#0F1C35'


      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

