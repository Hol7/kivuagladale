import type { NextConfig } from "next";
module.exports = {
  serverRuntimeConfig: {
    // BACKEND_URL: process.env.BACKEND_URL,
},
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
        {
          protocol: 'https',
          hostname: 'g-ladalle.com',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'g-ladalle.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'tonvootee.com.s3.amazonaws.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'back-preprod.tonvootee.com',
          pathname: '/**',
        },
      ],
    },
  }


const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
