import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import HomeSection from '@/components/Sections/HomeSection';
import ContactSection from '@/components/Sections/ContactSection';

const Home: NextPage = (): React.ReactElement => (
  <>
    <Head>
      <title>Michael Kubín</title>
      <meta name="description" content="Michael Kubín career web" />
      <meta property="og:title" content="Michael Kubín - Frontend developer" />
      <meta property="og:description" content="Michael Kubín, work experience, contact section" />
      <meta property="og:url" content="https://mikekubn.cz/" />
      <meta property="og:type" content="website" />
    </Head>
    <HomeSection />
    <ContactSection />
  </>
);

export default Home;
