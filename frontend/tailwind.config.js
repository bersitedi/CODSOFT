/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09344F",
        secondary: "#046E8F",
        black: "#001928",
        dark: {
          eerie: "#212323",
          night: "#090A0A",
          soft: "#282A2A",
        },
      },
      fontFamily: {
        libre: ["'Libre Baskerville'", "serif"],
        roboto: ["'Roboto'", "sans - serif"],
      },
    },
  },
  plugins: [],
};
