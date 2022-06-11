import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { getPosts } from 'src/lib/utils';
import cloudinary from 'cloudinary.config';

const HomeSection = dynamic(() => import('@/components/Sections/HomeSection'));
const ContactSection = dynamic(() => import('@/components/Sections/ContactSection'));

export interface IParamsProps {
  posts: {
    filename: string;
    frontmatter: {
      description: string[];
      cover: string;
      from: string;
      id: number;
      image: string;
      position: string;
      title: string;
      to: string;
      where: string;
    };
  }[];
  resources: {
    technology: string[];
  };
}

const Home: NextPage<IParamsProps> = ({ posts, resources }) => {
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
      <ContactSection resources={resources} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const images = (await cloudinary.api.resources_by_tag('work', { max_results: 20 })).resources.map((resource) => resource.public_id);

  const technology = (await cloudinary.api.resources_by_tag('technology', { max_results: 20 })).resources.map((resource) => resource.public_id);

  const _posts = getPosts('src/_posts').sort((a, b) => b.frontmatter.id - a.frontmatter.id);

  const posts = _posts.map((post) => {
    const image = images
      .filter((img) => !img.includes('cover'))
      .filter((job) => job.includes(post.filename))
      .toLocaleString();

    return {
      filename: post.filename,
      frontmatter: {
        ...post.frontmatter,
        image,
      },
    };
  });

  return {
    props: {
      posts: posts,
      resources: {
        technology,
      },
    },
  };
};
