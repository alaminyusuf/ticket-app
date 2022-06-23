const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: url('/public/invoice.png'),
        career: url('/public/career.svg'),
      },
      colors: {
        forestgreen: '#228b22',
      },
      height: {
        landing: '600px',
      },
      width: {
        eighty: '80%',
      },
      fontSize: {
        medium: '2.5rem',
      },
    },
  },
  plugins: [],
};
