import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getPosts } from '@/lib/utils';
import RunningScrollBar from '@/components/RunningScrollBar';
import BaseArticle from '@/components/Article';

export interface IArticle {
  filename: string;
  content: string;
  metadata: {
    author: string;
    date: string;
    tags: string[];
    title: string;
    excerpt: string;
  };
}

const Blog: NextPage<{ articles: IArticle[] }> = ({ articles }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Michael Kubin frontend developer, career web" />
        <meta property="og:title" content="Michael Kubin - Frontend developer" />
        <meta property="og:description" content="Michael Kubin work experience" />
      </Head>
      <RunningScrollBar />
      <section className="mx-auto w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 pt-8">
        {articles?.map((article) => (
          <BaseArticle key={article.filename} article={article} />
        ))}
      </section>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = () => {
  const articles = getPosts('src/_posts/_blog').sort((a, b) => b.frontmatter.id - a.frontmatter.id);

  const data = articles.map(({ filename, frontmatter }) => ({
    filename: filename,
    metadata: frontmatter,
  }));

  return {
    props: {
      articles: data,
    },
  };
};
