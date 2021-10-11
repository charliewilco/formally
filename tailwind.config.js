const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
  purge: ["./src/pages/*.tsx", "./src/components/**/*.tsx"],
  mode: "jit",
  variants: {
    scale: ["hover"],
    rotate: ["hover"],
  },
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        orange: colors.orange,
      },
      fontFamily: {
        mono: ["DM Mono", ...defaultTheme.theme.fontFamily.mono],
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
