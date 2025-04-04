/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx';

const withMDX = nextMDX();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'uloziste.space',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'the12st.imgix.net',
        port: '',
      },
    ],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },
};

export default withMDX(nextConfig);
