module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
       backgroundImage: {
        // "resp-img": "linear-gradient(to bottom,rgba(1, 2, 8, 0.616), rgba(1, 2, 8, 0.616)),url(./assets/cup_coffee.jpg)",
        // "time-img": "linear-gradient(to bottom,rgba(1, 2, 8, 0.616), rgba(1, 2, 8, 0.616)),url(./assets/time.jpg)",
        // "commun-img": "linear-gradient(to bottom,rgba(1, 2, 8, 0.616), rgba(1, 2, 8, 0.616)),url(./assets/commun.jpg)"
      },
    },
  },
  plugins: [],
}
