import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nebula.wsimg.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
