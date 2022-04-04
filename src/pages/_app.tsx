import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from 'src/layouts/MainLayout';
import Footer from 'src/components/Footer';
import TopPanel from 'src/components/TopPanel';
import { ThemeProvider } from 'src/providers/ThemeProvider';
import { NotificationProvider } from 'src/providers/NotificationProvider';
import CenterLayout from '@/layouts/CenterLayout';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <ThemeProvider>
    <NotificationProvider>
      <TopPanel />
      <MainLayout>
        <CenterLayout>
          <Component {...pageProps} />
        </CenterLayout>
      </MainLayout>
      <Footer />
    </NotificationProvider>
  </ThemeProvider>
);

export default MyApp;
