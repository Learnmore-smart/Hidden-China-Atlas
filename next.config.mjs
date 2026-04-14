/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/hidden-china-atlas',
  assetPrefix: '/hidden-china-atlas',
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coreva-normal.trae.ai',
      },
    ],
  },
};

export default nextConfig;
