const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ['photos.hotelbeds.com', 'res.cloudinary.com'],
    minimumCacheTTL: 60
    // deviceSizes: [40, 68, 70, 120, 156, 180, 275, 422]
  },
  compiler: {
    removeConsole: true,
    // reactRemoveProperties: true
  }
}

module.exports = nextConfig
