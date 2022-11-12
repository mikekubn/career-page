import React from 'react';
import Head from 'next/head';

interface IMetadata {
  domain: string;
  title: string;
  description: string;
  siteName: string;
  keywords: string;
  canonical: string;
  ogType: string;
  twitterHandle: string;
  width?: string;
}

const defaultValues: Omit<IMetadata, 'canonical' | 'twitterHandle'> = {
  domain: 'https://https://mikekubn.cz/',
  title: 'Michael Kubin',
  siteName: 'React Developer',
  keywords: 'React Developer, Programmer, Javascript, Typescript, Nextjs, Frontend, Freelancer, Website, Web app',
  description: 'I am Michael Kubin, freelancer, programer, creative person. Work with react, typescript and nextjs',
  ogType: 'website',
};

const Metadata = ({
  title = defaultValues.title,
  siteName = defaultValues.siteName,
  keywords = defaultValues.keywords,
  description = defaultValues.description,
  canonical,
  width,
  ogType = defaultValues.ogType,
  twitterHandle,
}: Partial<IMetadata>): React.ReactElement => {
  return (
    <Head>
      <title>{`${title} | ${siteName}`}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta charSet="utf-8"></meta>
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}api/og?title=${title}&width=${width}`} />
      <meta property="og:type" content={ogType} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical ?? defaultValues.domain} />

      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta key="twitter:description" property="twitter:description" content={description} />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta key="twitter:creator" name="twitter:creator" content={twitterHandle} />

      <meta name="google-site-verification" content="JKVyi3BBSq744RDL7GjbV4PnS8NyES3hY93rQMu-QsE" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default Metadata;
