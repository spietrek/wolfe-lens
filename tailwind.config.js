const path = require('path')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)')],
  // important: true,
  // important: '#root',
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      xs: '200px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
