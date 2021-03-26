module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5E04A7",
        secondary: "#BB0502",
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        raised: "0 20px 50px rgba(0,0,0, 0.075)",
      },
      strokeWidth: {
        3: "3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
