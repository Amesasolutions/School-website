/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#005EFF",
        secondaryColor: "#FFC300",
        txtColor: "#222",
      }
    },
  },
  plugins: [],
}

