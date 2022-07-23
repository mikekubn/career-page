import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Custom404: NextPage = (): React.ReactElement => (
  <>
    <Head>
      <title>Michael Kubín | 404</title>
      <meta name="description" content="Michael Kubín career web" />
      <meta property="og:title" content="Michael Kubín" />
      <meta property="og:url" content="https://mikekubn.cz/" />
      <meta property="og:type" content="website" />
    </Head>
    <section className="flex flex-col flex-1 items-center justify-center">
      <h1 className="font-AsapItal text-3xl mb-16">Sorry page was not found 404</h1>
      <Link href="/" scroll={false} replace passHref>
        <button className="p-4 rounded-full shadow-lg shadow-black dark:shadow-white flex flex-row justify-center hover:text-md">
          Do you want to go to the home page?
        </button>
      </Link>
    </section>
  </>
);

export default Custom404;
