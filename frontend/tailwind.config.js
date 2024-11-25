/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        customPurple:"#80288b",
      },
      spacing: {
        '128': '68.3rem',
      }
    },
  },
  plugins: [],
}

