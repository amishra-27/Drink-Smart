/** @type {import('tailwindcss').Config} */
const { tailwind } = require('@drink-smart/config');

module.exports = {
  ...tailwind,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      ...tailwind.theme?.extend,
      colors: {
        ...tailwind.theme?.extend?.colors,
        brand: {
          primary: '#3B82F6', // blue
          accent: '#10B981', // green
        },
      },
    },
  },
  darkMode: 'class',
}; 