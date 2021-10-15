const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
  purge: ["./pages/*.tsx", "./components/**/*.tsx"],
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
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
          ...defaultTheme.theme.fontFamily.mono,
        ],
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
