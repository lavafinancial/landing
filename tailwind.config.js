module.exports = {
  content: {
    files: [
      "./components/**/*.{vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
    ],
  },
  theme: {
    extend: {
      colors: {
        "lava-orange": "#fd683b",
        "lava-red": "#b41922",
        "lava-yellow": "#fca803",
        "lava-orange-hover": "#e35d34",
        "lava-dark-blue": "#170d2d"
      },
      borderRadius: {
        4: "16px",
        6: "24px",
        8: "32px",
      },
    }
  },
  plugins: [],
}
