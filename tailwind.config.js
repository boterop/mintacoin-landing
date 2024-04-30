module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    fontFamily: {
      PTSans: ['PT Sans', 'sans-serif'],
    },
    screens: {
      smartphone: { max: "900px" },
      laptop: { min: "901px", max: "1360px" },
      desktop: { min: "1361px" },
      computer: { min: "901px" },
    },
    colors: {
      primary: "#39FFC5",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
}
