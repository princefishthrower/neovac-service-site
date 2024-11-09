/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10B981', // emerald-500
        'primary-dark': '#059669', // emerald-600
        background: '#FFFFFF',
        foreground: '#111827',
      },
      fontFamily: {
        gentium: ['Gentium Book Plus', 'serif'],
      },
    },
  },
  plugins: [],
}
