/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Abril: 'Abril Fatface',
      Titillium: 'Titillium Web'
    },
    extend: {
     colors: {
      buttonColor: '#E9A948',
      hoverCol: '#ffc670',
      inputCol: '#D9D9D9',
      logIn: '#942724',
      homeBtn: '#942724',
      hoverBtn: '#B95555',
      disable: '#cccccc;',
      textDisable: '#666666'

     }
    },
  },
  plugins: [],
}

