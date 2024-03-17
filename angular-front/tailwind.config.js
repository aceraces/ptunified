/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: '#480052',
        primaryList: {
          100: '#6C007A',
          200: '#5A0066',
          300: '#480052',
          400: '#36003D',
          500: '#240029'
        },
        secondary: '#fffaaa',
        lighttext: '#000000',
        darktext: '#ffffff',
        lightbackground: '#ffffff',
        darkbackground: '#040C10',

      }
    },
  },
  plugins: [],
}

