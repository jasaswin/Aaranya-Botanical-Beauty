/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#304B3A",
        sage: "#71846A",
        cream: "#F5F0E6",
        sand: "#E8DDCA",
        rose: "#C98F82",
        gold: "#B8945A",
        charcoal: "#252824",
        offwhite: "#FCFAF5",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
}
