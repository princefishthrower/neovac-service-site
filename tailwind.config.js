/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E9425C', // Nouvag red
        'primary-dark': '#D13B52', // Slightly darker red for hover states
        background: '#FFFFFF',
        foreground: '#111827',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'], // More corporate feel
      },
    },
  },
  plugins: [],
}
