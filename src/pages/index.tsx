import React from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import MainLayout from '@/layouts/Layout';
import Header from '@/layouts/Header';
import Link from 'next/link';

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
      <div className="flex justify-center box-content mb-10 cursor-default">
        <h1 className="text-2xl">I am</h1>
        <div className="text-2xl pl-3 overflow-y-hidden h-8">
          {items.map((item, index) => (
            <span className="rotate-list" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <Link href="/contact" passHref>
        <button className="bg-blue rounded-full px-12 py-4 text-xl no-underline cursor-pointer hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white transition duration-700 ease-in-out">
          Discover
        </button>
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

const items: string[] = ['Developer', 'Freelancer', 'Creative', 'Tester', 'Developer'];
