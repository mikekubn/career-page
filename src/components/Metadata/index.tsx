import React from 'react';
import Head from 'next/head';

export interface IMetadata {
  title: string;
  description: string;
  url: string;
}

const Metadata = ({ metadata }: { metadata: IMetadata }): React.ReactElement => {
  const title = `${metadata.title} ${metadata.description ? ` | ${metadata.description}` : ''}`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:url" content={`https://mikekubn.cz${metadata.url}`} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default Metadata;
