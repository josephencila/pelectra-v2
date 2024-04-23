/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'dvh-60': 'calc(100dvh - 60px)'
      },
    },
  },
  plugins: [],
}