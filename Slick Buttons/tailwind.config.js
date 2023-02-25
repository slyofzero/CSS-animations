/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      inset: {
        "rm-dom": "-10000px"
      }
    },
  },
  plugins: [],
}
