import React from 'react';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { firstLetterToUpperCase, urlPathnameSanity } from '@/lib/utils';

export interface IMetadata {
  title: string;
  description: string;
  query: ParsedUrlQuery;
  url: string;
}

const Metadata = ({ metadata }: { metadata: IMetadata }): React.ReactElement => {
  const { slug } = metadata.query;
  let title: string = metadata.title;

  if (metadata.description.length) {
    title = `${metadata.title} | ${metadata.description}`;
  }
  if (slug) {
    title = firstLetterToUpperCase(urlPathnameSanity(slug.toString()));
  }

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:url" content={`https://mikekubn.cz${metadata.url}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:creator" content="@mikekubn" />
      <meta name="robots" content="follow" />
      <meta name="theme-color" content="#1fb6ff" />
    </Head>
  );
};

export default Metadata;
