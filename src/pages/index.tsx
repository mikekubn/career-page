import React from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import MainLayout from '@/layouts/Layout';
import Header from '@/layouts/Header';
import Link from 'next/link';
import { Button } from '@/components/Typography';
import RotateList from '@/components/RotateList';

const Home: NextPageWithLayout = () => (
  <>
    <Head>
      <meta name="description" content="Michael Kubin is frontend developer, freelancer and tester" />
      <meta property="og:title" content="Michael Kubin - Frontend developer" />
      <meta property="og:description" content="Michael Kubin landing page" />
    </Head>
    <section className="m-auto w-full h-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase mb-10">
        Michael <span className="text-blue">Kubin</span>
      </h1>
      <RotateList className="flex justify-center box-content mb-10 cursor-default" titleSize="text-2xl" />
      <Link href="/contact" passHref>
        <Button className="px-12 py-4 text-xl">Discover</Button>
      </Link>
    </section>
  </>
);

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <Header />
      <MainLayout>{page}</MainLayout>
    </>
  );
};
