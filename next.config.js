// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true,
    typedRoutes: true
  },
  images: {
    domains: [
      'images.unsplash.com',
      'randomuser.me'
    ],
    formats: ['image/avif', 'image/webp']
  },
  output: 'standalone',
  // Enable edge runtime for all routes
  runtime: 'edge',
};

module.exports = nextConfig;
