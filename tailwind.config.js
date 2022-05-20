module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#06b6d4',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screen: {
        '2xl': '1320px'
      },
      blur: {
        xs: '5px'
      },
      boxShadow: {
        shadow: 'box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.3);'
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
}
