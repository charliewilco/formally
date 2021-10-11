const colors = require("tailwindcss/colors");

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
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
