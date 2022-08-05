import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Michael Kubín - Blog</title>
        <meta name="description" content="Michael Kubin frontend developer, career web" />
        <meta property="og:title" content="Michael Kubin - Frontend developer" />
        <meta property="og:description" content="Michael Kubin work experience" />
        <meta property="og:url" content="https://mikekubn.cz/" />
        <meta property="og:type" content="website" />
      </Head>
      <div>Blog</div>
    </>
  );
};

export default Blog;
