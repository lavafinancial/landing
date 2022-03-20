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
      },
    }
  },
  plugins: [],
}
