/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack(config) {
  //   config.infrastructureLogging = { debug: /PackFileCache/ }
  //   return config
  // },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
