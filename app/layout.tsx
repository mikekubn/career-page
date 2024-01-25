import localFont from 'next/font/local';
import type { Metadata } from 'next/types';
import clsx from 'clsx';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Providers from './providers';

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
  metadataBase: new URL('https://mikekubn.cz/'),
  title: 'Michael Kubin',
  description:
    'Welcome to my page, a skilled software engineer specializing in React, Next.js, and frontend development. Explore the world of JavaScript and TypeScript with Michael Kubin.',
  applicationName: 'Home page - Michael Kubin',
  generator: 'Next.js',
  keywords: [
    'software engineer',
    'react',
    'Michael Kubín',
    'Kubin',
    'Michael',
    'next.js',
    'frontend developer',
    'javascript',
    'typescript',
    'akcenta.digital',
    'livesport',
  ],
  referrer: 'origin',
  creator: 'Michael Kubin',
  publisher: 'Michael Kubin',
  robots: 'index, follow',
  appleWebApp: {
    capable: true,
    title: 'Michael Kubin',
    statusBarStyle: 'black-translucent',
  },
  verification: {
    google: 'JKVyi3BBSq744RDL7GjbV4PnS8NyES3hY93rQMu-QsE',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1681157556/og_michael_kubin_dcskgv.jpg',
  },
  openGraph: {
    type: 'website',
    url: 'https://mikekubn.cz/',
    title: 'Michael Kubin',
    description: 'Software engineer',
    siteName: 'Software engineer - Michael Kubin',
    images: [
      {
        url: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1681157556/og_michael_kubin_dcskgv.jpg',
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <html lang="en" className={clsx(inter.variable, 'bg-black text-white')}>
    <head />
    <Providers>
      <body>
        <Navigation />
        <main className="-mt-16 min-h-screen px-4 sm:px-6 max-w-6xl flex flex-col mx-auto">{children}</main>
        <Footer />
      </body>
    </Providers>
  </html>
);

export default RootLayout;
