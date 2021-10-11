module.exports = {
  purge: ["./src/pages/*.tsx", "./src/components/**/*.tsx"],
  mode: "jit",
  variants: {
    scale: ["hover"],
    rotate: ["hover"],
  },
  plugins: [require("@tailwindcss/forms")],
};
