const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/components/*.js', './src/pages/*/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
