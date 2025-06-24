const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      "images.unsplash.com",
      "randomuser.me"
    ]
  },
  output: "standalone",
  runtime: "edge"
};
module.exports = nextConfig;
