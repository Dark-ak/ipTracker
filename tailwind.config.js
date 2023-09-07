/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      rubik: ['Rubik', 'sans-serif']
    },
    colors: {
      darkGray: "hsl(0, 0%, 17%)",
      gray: "hsl(0, 0%, 59%)",
      white: "#FFFFFF",
      red: "#FF0000"
    },
    backgroundImage: {
      pc: "url(/src/assets/pattern-bg-desktop.png)",
      phone: "url(/src/assets/pattern-bg-mobile.png)",
    }
  },
  plugins: [],
}

