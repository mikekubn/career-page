import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import cloudinary from 'cloudinary.config';
import { getPosts } from '@/lib/utils';
import Image from 'next/image';
import RunningScrollBar from '@/components/RunningScrollBar';
import { MiniCard } from '@/components/Card';

export interface IExperience {
  id: string;
  title: string;
  from: string;
  to: string;
  where: string;
  position: string;
  description: string[];
  image: string;
}

const Experience: NextPage<{ posts: IExperience[] }> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <Head key={post.id}>
        <title>Michael Kubín | Experience</title>
        <meta name="description" content={`Michael Kubin frontend developer, experience, ${post.where}`} />
        <meta property="og:title" content={`Michael Kubín ${post.position} ${post.title}`} />
        <meta property="og:description" content={`experience, ${post.description}`} />
        <meta property="og:url" content="https://mikekubn.cz/experience" />
        <meta property="og:type" content="website" />
      </Head>
    ))}
    <RunningScrollBar />
    <section className="flex flex-1 flex-col my-10 md:my-20">
      {posts.map((post) => (
        <MiniCard key={post.id} item={post} />
      ))}
    </section>
  </>
);

export default Experience;

export const getStaticProps: GetStaticProps = async () => {
  const profileImages = (await cloudinary.api.resources_by_tag('work', { max_results: 20 })).resources
    .map((resource) => resource.public_id)
    .filter((image) => !image.includes('cover'));

  const posts = getPosts('src/_posts/_experience').sort((a, b) => b.frontmatter.id - a.frontmatter.id);

  const data = posts.map((post) => ({
    ...post.frontmatter,
    image: profileImages.find((image) => image.includes(post.filename)),
  }));

  return {
    props: {
      posts: data,
    },
  };
};
