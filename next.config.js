/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
    ],
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig
