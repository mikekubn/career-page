import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NotificationProvider } from 'src/providers/NotificationProvider';
import { ThemeProvider } from 'next-themes';
import BackToTop from '@/components/BackToTop';
import Main from '@/layouts/Main';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <NotificationProvider>
        <BackToTop />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default MyApp;
