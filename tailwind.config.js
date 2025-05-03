/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'oda-red': '#DD0000',
        'black': '#000000',
        'white': '#FFFFFF',
        'ivory': '#FFFFF0',
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'pattern': "url('/src/assets/pattern.png')",
      },
    },
  },
  plugins: [],
};