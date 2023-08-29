/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontSize: {
        '1': '0.625 rem',
        '2': '1.25 rem',
        '3': '1.875 rem',
        '4': '2.5 rem',
        '5': '3.125 rem',
        '6': '3.75 rem',
      },
      width: {
        '1/10': '10%',
        '3/10': '30%',
        '5/10': '50%',
        '7/10': '70%',
        '9/10': '90%'
      },
      colors: {
        'dark-primary': '#000000',
        'dark-secondary': '#1a1a1a',
        'dark-accent': '#793FDF',
        'primary': '#ffffff',
        'secondary': '#f2f2f2',
        'accent': '#a781ea'
      },
      fontFamily: {
        'base': ['"Fira Sans Condensed"', 'sans-serif'],
        'sub-heading': ['Prompt', ' sans-serif'],
        'heading': ['Nunito',  'sans-serif']
      }
    },
  },
  plugins: []
}