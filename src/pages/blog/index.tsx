import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getPosts } from '@/lib/utils';
import { ArticleParagraph, Paragraph, Time } from '@/components/Typography';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import RunningScrollBar from '@/components/RunningScrollBar';

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
        <meta property="og:url" content="https://mikekubn.cz/blog" />
        <meta property="og:type" content="website" />
      </Head>
      <RunningScrollBar />
      <section className="mx-auto w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 pt-8">
        {articles?.map((article) => (
          <motion.article
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={articleVariants}
            key={article.metadata.title}
            className="m-4 p-4 pt-0 mb-14 border-b border-black border-dashed hover:bg-gray/10 rounded-lg">
            <Link href={article.filename} replace passHref>
              <motion.h1
                variants={headerVariant}
                className="pt-2 text-base md:text-lg lg:text-lg xl:text-xl font-semibold mb-4 cursor-pointer tracking-wide hover:text-sky500">
                {article.metadata.title}
              </motion.h1>
            </Link>
            <div className="flex flex-row flex-1 flex-wrap">
              {article.metadata.tags.map((tag, index) => (
                <p
                  key={index}
                  className="text-xs md:text-sm px-2 lg:px-4 py-1 first:ml-0 ml-1 my-1 lg:mx-2 rounded-full cursor-pointer bg-sky500/50 shadow-md shadow-sky500/20">
                  {tag}
                </p>
              ))}
            </div>
            <ArticleParagraph className="my-6 italic text-left">{article.metadata.excerpt}</ArticleParagraph>
            <div className="flex flex-row justify-between mb-3">
              <Time>{article.metadata.date}</Time>
              <Paragraph>{article.metadata.author}</Paragraph>
            </div>
            <div className="text-center mb-3">
              <Link href={article.filename} replace passHref>
                <motion.button
                  style={{ borderRadius: '9px' }}
                  whileHover={{ scale: 1.05, borderRadius: '75px', backgroundColor: '#0ea5e9' }}
                  className="bg-sky500/50 px-2 py-1 font-thin text-sm shadow-md shadow-black">
                  Read more 📚
                </motion.button>
              </Link>
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

const articleVariants: Variants = {
  reset: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      stiffness: 300,
    },
  },
};

const headerVariant: Variants = {
  reset: {
    x: 0,
  },
  hover: {
    shadow: '2px solid black',
    scale: 1.1,
    originX: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
    },
  },
};
