import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    domains: ['cdn.dribbble.com'],
  },
}

export default nextConfig
