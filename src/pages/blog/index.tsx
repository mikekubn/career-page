import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getPosts } from '@/lib/utils';
import { ArticleParagraph, H1, Paragraph, Time } from '@/components/Typography';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface IArticle {
  filename: string;
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
        <title>Michael Kubín | Blog</title>
        <meta name="description" content="Michael Kubin frontend developer, career web" />
        <meta property="og:title" content="Michael Kubin - Frontend developer" />
        <meta property="og:description" content="Michael Kubin work experience" />
        <meta property="og:url" content="https://mikekubn.cz/" />
        <meta property="og:type" content="website" />
      </Head>
      <section className="mx-auto xl:w-1/2 pt-8">
        {articles?.map((article) => (
          <motion.article
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            key={article.metadata.title}
            className="m-4 p-4 pt-0 mb-14 border-b border-black border-dashed hover:bg-gray/10 rounded-md">
            <Link href={article.filename} replace passHref>
              <H1 className="mb-4 cursor-pointer tracking-wide">{article.metadata.title}</H1>
            </Link>
            <div className="flex flex-row flex-1 flex-wrap">
              {article.metadata.tags.map((tag, index) => (
                <p key={index} className="px-4 py-1 rounded-full first:ml-0 mx-2 cursor-pointer bg-sky500/50 shadow-md shadow-sky500/20">
                  {tag}
                </p>
              ))}
            </div>
            <ArticleParagraph className="my-10">{article.metadata.excerpt}</ArticleParagraph>
            <div className="flex flex-row justify-between mb-12">
              <Time>{article.metadata.date}</Time>
              <Paragraph>{article.metadata.author}</Paragraph>
            </div>
          </motion.article>
        ))}
      </section>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = () => {
  const articles = getPosts('src/_posts/_blog');
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
