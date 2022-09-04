import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NotificationProvider } from 'src/providers/NotificationProvider';
import { ThemeProvider } from 'next-themes';
import BackToTop from '@/components/BackToTop';
import { NextPage } from 'next/types';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout): React.ReactElement => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider attribute="class" enableSystem>
      <NotificationProvider>
        <BackToTop />
        {getLayout(<Component {...pageProps} />)}
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default MyApp;
