import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.skoob.com.br',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static-sp.skoob.com.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
