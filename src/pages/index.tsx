import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import fs from 'fs';
import { getDirection, getPosts } from 'src/lib/utils';

const HomeSection = dynamic(() => import('@/components/Sections/HomeSection'));
const ContactSection = dynamic(() => import('@/components/Sections/ContactSection'));

export interface IPostsProps {
  posts: {
    filename: string,
    frontmatter: {
      cover: string,
      from: string,
      id: number,
      image: string,
      position: string,
      title: string,
      to: string,
      where: string,
    }
  }[]
}

const Home: NextPage<IPostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Michael Kubín</title>
        <meta name="description" content="Michael Kubin frontend developer, career web" />
        <meta property="og:title" content="Michael Kubin - Frontend developer" />
        <meta property="og:description" content="Michael Kubin work experience" />
        <meta property="og:url" content="https://mikekubn.cz/" />
        <meta property="og:type" content="website" />
      </Head>
      <HomeSection posts={posts} />
      <ContactSection />
    </>
  );
};

export default Home;

export const  getStaticProps: GetStaticProps = async () => {
  const directory = getDirection('src/_posts');
  const filenames = fs.readdirSync(directory);
  const posts = getPosts(directory, filenames);
  const sortPostsByLast = posts.sort((a, b) => b.frontmatter.id - a.frontmatter.id);

  return {
    props: {
      posts: sortPostsByLast,
    },
  };
};
