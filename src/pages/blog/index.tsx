import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getPosts, sortByDate } from '@/lib/utils';
import RunningScrollBar from '@/components/RunningScrollBar';
import BaseArticle from '@/components/Article';
import { IArticle } from '@/lib/types';
import { NextPageWithLayout } from '../_app';
import Header from '@/layouts/Header';
import MainLayout from '@/layouts/Layout';

type Props = {
  articles: IArticle[];
};

const Blog: NextPageWithLayout<Props> = ({ articles }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Michael Kubin frontend developer, career web" />
        <meta property="og:title" content="Michael Kubin - Frontend developer" />
        <meta property="og:description" content="Michael Kubin work experience" />
      </Head>
      <section className="mx-auto w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 pt-8">
        {articles?.map((article) => (
          <BaseArticle key={article.slug} article={article} />
        ))}
      </section>
    </>
  );
};

export default Blog;

Blog.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <Header />
      <MainLayout>{page}</MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const articles: IArticle[] = getPosts('src/_posts/_blog')
    .sort((a, b) => sortByDate(a.frontmatter.date, b.frontmatter.date))
    .map((article) => ({
      ...article,
      frontmatter: {
        ...(article.frontmatter as IArticle['frontmatter']),
        date: article.frontmatter.date.toString(),
      },
    })) as IArticle[];

  return {
    props: {
      articles,
    },
  };
};
