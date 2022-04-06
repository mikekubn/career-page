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
    <div className="h-screen flex justify-center items-center">
      <div className="flex-col-1 justify-center items-center">
        <h1 className="font-AsapItal text-3xl mb-16">Not Found</h1>
        <motion.div
          transition={{ yoyo: Infinity }}
          animate={{
            scale: [0.8, 1],
          }}
        >
          <Image src="/img/smiley-sad.png" alt="Error 404 smile sad" width={300} height={300} />
        </motion.div>
        <Link href="/" scroll={false} replace passHref>
          <a className="button-style mt-16">Go Home</a>
        </Link>
      </div>
    </div>
  </>
);

export default Custom404;
