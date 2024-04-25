/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      width: {
        'xs': '320px',
        'ss': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      height: {
        'xs': '320px',
        'ss': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'xss': '320px',
        '60px': '60px',
        'dvh': '100dvh',
        'dvh-60': 'calc(100dvh - 60px)'
      },
    },
  },
  plugins: [],
}