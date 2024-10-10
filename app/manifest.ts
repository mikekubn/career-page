import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Michael Kubin - Software engineer & Digital Crafting',
    short_name: 'MikeKubn',
    description:
      'Explore the career of Michael Kubin, a software engineer and digital craftsman with extensive experience in building applications for major clients. Learn more about his journey.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090A0A',
    theme_color: '#090A0A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
