/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09344F",
        secondary: "#046E8F",
        cta: "#0D2436",
        green: "#8EC63F",
        dark: {
          eerie: "#212323",
          light: "#7C7C7C",
          night: "#090A0A",
          soft: "#282A2A",
        },
      },
      fontFamily: {
        primary: ["'Roboto Slab'", "serif"],
        secondary: ["'Poppins'", "sans - serif"],
        lora: ["'Lora'", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "d-",
  },
};
