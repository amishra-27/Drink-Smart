module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0070f3',
          secondary: '#00c7b7'
        }
      }
    }
  },
  plugins: []
}; 