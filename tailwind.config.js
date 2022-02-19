module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        scrollingX: 'scrollingX 30s linear infinite',
        scrollingY: 'scrollingY 30s linear infinite',
      },
      fontFamily: {
        "space": ['Space Grotesk', 'sans-serif'],
        "poppins": ['poppins', 'sans-serif']
      },
      color: {
        "black-shade": '#0f0f0f'
      },
      keyframes: {
        scrollingX: {
          '0%': { transform: 'translateX(90vw)' },
          '100%': { transform: 'translateX(-150vw)' }
        },
        scrollingY: {
          '0%': { transform: 'translateY(90vw)' },
          '100%': { transform: 'translateY(-150vw)' }
        }
      },
    },
  },
  plugins: [],
}
