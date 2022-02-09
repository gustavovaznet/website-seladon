const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#2C2CA0",
      "primary-light": "#3737C8",
      "primary-dark": "#212178",
      secondary: "#8787DE",
      "secondary-dark": "#AFAFE9",
      "content-dark": "#161650",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
