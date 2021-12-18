module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        "resp-img": "linear-gradient(to bottom,rgba(1, 2, 8, 0.616), rgba(1, 2, 8, 0.616)),url(./assets/bg/cup_coffee.jpg)",
        "time-img": "linear-gradient(to bottom,rgba(1, 2, 8, 0.616), rgba(1, 2, 8, 0.616)),url(./assets/bg/time.jpg)",
        "commun-img": "linear-gradient(to bottom,rgba(1, 2, 8, 0.616), rgba(1, 2, 8, 0.616)),url(./assets/bg/commun.jpg)"
      },
    },
  },
  plugins: [],
}
