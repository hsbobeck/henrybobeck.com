/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/photo',
        destination: '/photography',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
