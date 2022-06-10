const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/components/*.js',
    './src/components/*/*.js',
    './src/pages/*/*.js',
    './src/pages/*.js'
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        bg: '#161616',
        SecBg: '#202020',
        principal: '#050505'
      }
    }
  },
  plugins: []
}
