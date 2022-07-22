const { Icons } = require('tailwindcss-plugin-icons')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      }
    },
  },
  plugins: [
      Icons({
        heroiconsSolid: {
      icons: ['trash', 'trash?bg']
    },
        heroiconsOutline: {
      icons: ['lock-open', 'lock-closed'],
      location: 'my-icon-alias/icons.json'
    },
    custom: {
      icons: ['loading'],
      location:
          'https://gist.githubusercontent.com/JensDll/4e59cf6005f585581975941a94bc1d88/raw/0e70bdac81224add27d8f0576ab15406709e5938/icons.json'
    },
    customAlt: {
      icons: ['loading'],
      location: './src/icons.json'
    }
  })],
}