/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['drive.google.com'],
  },
};

module.exports = nextConfig;
