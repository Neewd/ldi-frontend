const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      pink: colors.pink,
      orange: colors.orange,
      green: colors.green,
      amber: colors.amber,
      coolGray: colors.coolGray
    },
    extend: {
    },
  },
  variants: {
    extend: {
      cursor: ['hover']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
