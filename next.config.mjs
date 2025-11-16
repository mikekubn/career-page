/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx';

const withMDX = nextMDX();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.mikekubn.cz',
        port: '',
      },
    ],
  },
  reactStrictMode: true,
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack', 'url-loader'],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default withMDX(nextConfig);
