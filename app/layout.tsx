import type { Metadata } from 'next';
import { Inter, PT_Serif, Be_Vietnam_Pro, Source_Code_Pro } from 'next/font/google';
import clsx from 'clsx';

import './globals.css';

const ptSerif = PT_Serif({ subsets: ['latin'], display: 'swap', weight: ['400', '700'], variable: '--font-pt-serif' });

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-be-vietnam-pro',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
  title: 'Michael Kubin - Senior React Developer & Software Engineer',
  description:
    'Michael Kubin - Senior React Developer, Software Engineer, and Digital Craftsman. Specializing in TypeScript, Next.js, and web application architecture.',
  keywords:
    'Senior React Developer, Frontend Developer, Software Engineer, Digital Craftsman, TypeScript Developer, React.js Architect, JavaScript Expert, Web Application Developer, Tailwind CSS Developer, Next.js Developer, React Developer Czech Republic, Remote React Developer, React Developer Prague, Frontend Architecture Consulting',
  openGraph: {
    title: 'Michael Kubin',
    type: 'website',
    locale: 'en_US',
    url: 'https://mikekubn.cz/',
    description: 'Software engineer & Digital Crafting',
    images: [
      {
        url: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1733505263/image_stnxij.png',
        width: 1200,
        height: 630,
        alt: 'Software engineer & Digital Crafting',
      },
    ],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://mikekubn.cz',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => (
  <html lang="en" className="bg-black-darkest">
    <body
      className={clsx(
        'bg-black-darkest text-white overflow-x-hidden py-12',
        inter.variable,
        ptSerif.variable,
        beVietnamPro.variable,
        sourceCodePro.variable,
      )}>
      <main className="min-h-screen flex flex-col overflow-x-hidden">{children}</main>
      <footer className="font-normal font-sourceCodePro flex flex-col items-start md:items-center text-start md:text-center justify-center w-full gap-1 px-4 md:px-6">
        <p className="text-base md:text-lg">No Data Collected, created in 🇪🇺.</p>
        <p className="text-base md:text-lg">
          Powered by{' '}
          <a href="https://www.the12st.com/" className="text-blue hover:underline" target="_blank" rel="noreferrer">
            the12st
          </a>{' '}
          professionals
        </p>
      </footer>
    </body>
  </html>
);

export default RootLayout;
