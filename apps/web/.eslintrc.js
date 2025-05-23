module.exports = {
  extends: [
    'next/core-web-vitals',
    'prettier',
    require.resolve('@drink-smart/config/eslint-preset'),
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}; 