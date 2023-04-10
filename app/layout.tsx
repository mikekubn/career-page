import localFont from 'next/font/local';
import type { Metadata } from 'next/types';
import clsx from 'clsx';
import '../styles/globals.css';

const inter = localFont({
  src: [
    {
      path: './fonts/Inter-Light.ttf',
      weight: '300',
    },
    {
      path: './fonts/Inter-Regular.ttf',
      weight: '400',
    },
    {
      path: './fonts/Inter-Medium.ttf',
      weight: '600',
    },
    {
      path: './fonts/Inter-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Michael Kubin',
  description: 'Software engineer',
  applicationName: 'Home page - Michael Kubin',
  generator: 'Next.js',
  keywords: [],
  referrer: 'origin',
  viewport: { width: 'device-width', initialScale: 1 },
  creator: 'Michael Kubin',
  publisher: 'Michael Kubin',
  robots: 'index, follow',
  appleWebApp: {
    capable: true,
    title: 'Michael Kubin',
    statusBarStyle: 'black-translucent',
  },
  verification: {
    google: '',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: '',
  },
  openGraph: {
    type: 'website',
    url: '',
    title: 'Michael Kubin',
    description: 'Software engineer',
    siteName: 'Software engineer - Michael Kubin',
    images: [
      {
        url: '',
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <html lang="en" className={clsx(inter.variable, 'bg-black text-white')}>
    <head />
    <body></body>
  </html>
);

export default RootLayout;
