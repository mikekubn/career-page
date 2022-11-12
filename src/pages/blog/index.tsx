import React from 'react';
import type { GetStaticProps } from 'next';
import { getPosts, sortByDate } from '@/lib/utils';
import BaseArticle from '@/components/Article';
import { IArticle } from '@/lib/types';
import { NextPageWithLayout } from '../_app';
import Header from '@/layouts/Header';
import MainLayout from '@/layouts/Layout';
import Metadata from '@/components/Metadata';
import BlogContainer from '@/layouts/Layout/BlogContainer';

type Props = {
  articles: IArticle[];
};

const Blog: NextPageWithLayout<Props> = ({ articles }) => {
  return (
    <>
      <Metadata
        title="Blog"
        siteName="Posts"
        description="What interested me, fronted development?"
        keywords="React, Nextjs, Blog, Frontend, Styles, Tailwind"
      />
      {articles?.map((article) => (
        <BaseArticle key={article.slug} article={article} />
      ))}
    </>
  );
};

export default Blog;

Blog.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <Header />
      <MainLayout>
        <BlogContainer className="mt-2 lg:mt-14">{page} </BlogContainer>
      </MainLayout>
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
