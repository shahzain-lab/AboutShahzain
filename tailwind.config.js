module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        "gra-btn": 'linear-gradient(to right,#eb72fb, #6929f8)'
      },
       animation: {
         'bounce-anime': `@keyframes {
          0%, 100% {
            transform: translateX(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateX(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }`
       }
    },
  },
  plugins: [],
}
