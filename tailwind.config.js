module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Nimbus Sans", 'sans-serif'],
      serif: ["Sequel Sans", 'sans-serif']
    },
    extend: {
      colors: {
        faintBlack: "#1D1D1D",
        customOrange: "#D8471E"
      },
      lineHeight: {
        "12": '4.2rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
