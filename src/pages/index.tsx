import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import HomeSection from '@/components/Sections/HomeSection';
import ContactSection from '@/components/Sections/ContactSection';
import MotionDiv from '@/components/Motions/MotionDiv';

const Home: NextPage = (): React.ReactElement => (
  <>
    <Head>
      <title>Michael Kubín</title>
      <meta name="description" content="Michael Kubín career web" />
      <meta property="og:title" content="Michael Kubín" />
      <meta property="og:description" content="Michael Kubín, work experience, contact section" />
      <meta property="og:url" content="https://mikekubn.cz/" />
      <meta property="og:type" content="website" />
    </Head>
    <section className="main-page-layout">
      <MotionDiv>
        <HomeSection />
      </MotionDiv>
    </section>
    <section className="main-page-layout">
      <ContactSection />
    </section>
  </>
);

export default Home;
