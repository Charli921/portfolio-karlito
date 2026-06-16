/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        // Or discret réservé au palmarès (festivals / prix)
        laurel: '#c9a86a',
      },
    },
  },
  plugins: [],
};
