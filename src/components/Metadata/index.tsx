import React from 'react';
import Head from 'next/head';

const Metadata = (): React.ReactElement => (
  <Head>
    <meta property="og:url" content="https://mikekubn.cz/" />
    <meta property="og:type" content="website" />
  </Head>
);

export default Metadata;
