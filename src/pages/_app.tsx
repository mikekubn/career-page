import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from 'src/layouts/MainLayout';
import { NotificationProvider } from 'src/providers/NotificationProvider';
import { ThemeProvider } from 'next-themes';
import BackToTop from '@/components/BackToTop';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <ThemeProvider attribute="class">
    <NotificationProvider>
      <BackToTop />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </NotificationProvider>
  </ThemeProvider>
);

export default MyApp;
