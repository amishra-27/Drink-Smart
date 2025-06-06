const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@drink-smart/ui'],
  eslint: {
    dirs: ['src', 'pages', 'components', 'lib', 'hooks'],
  },
};

module.exports = withPWA(nextConfig); 