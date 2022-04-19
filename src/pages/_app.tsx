import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from 'src/layouts/MainLayout';
import Footer from 'src/components/Footer';
import TopPanel from 'src/components/TopPanel';
import { ThemeProvider } from 'src/providers/ThemeProvider';
import { NotificationProvider } from 'src/providers/NotificationProvider';
import Script from 'next/script';
import CenterLayout from '@/layouts/CenterLayout';
import BackToTop from '@/components/BackToTop';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <ThemeProvider>
    <NotificationProvider>
      <TopPanel />
      <BackToTop />
      <MainLayout>
        <CenterLayout>
          <Component {...pageProps} />
        </CenterLayout>
      </MainLayout>
      <Footer />
    </NotificationProvider>
    <Script src="/theme.js" strategy="beforeInteractive" />
  </ThemeProvider>
);

export default MyApp;
