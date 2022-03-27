const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/components/*.js', './src/pages/*/*.js', './src/pages/*.js'],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
}
