/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add your font family here
        sans: ['Inter', 'sans-serif'], // Tailwind's default sans-serif stack
      },
    },
  },
  plugins: [],
}