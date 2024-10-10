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
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '<generated>',
        type: 'image/<generated>',
      },
      {
        src: '/icon.png',
        sizes: '<generated>',
        type: 'image/<generated>',
      },
    ],
  };
}
