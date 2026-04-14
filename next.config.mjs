/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/hidden-china-atlas',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coreva-normal.trae.ai',
      },
    ],
  },
};

export default nextConfig;
