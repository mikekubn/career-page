import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from 'src/layouts/MainLayout';
import Footer from 'src/components/Footer';
import Header from 'src/components/TopPanel';
import { NotificationProvider } from 'src/providers/NotificationProvider';
import BackToTop from '@/components/BackToTop';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <NotificationProvider>
    <Header />
    <BackToTop />
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    <Footer />
  </NotificationProvider>
);

export default MyApp;
