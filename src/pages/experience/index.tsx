import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import cloudinary from 'cloudinary.config';
import { getPosts } from '@/lib/utils';
import RunningScrollBar from '@/components/RunningScrollBar';
import { MiniCard } from '@/components/Card';

export interface IExperience {
  filename: string;
  content: string;
  frontmatter: {
    id: string;
    title: string;
    from: string;
    to: string;
    where: string;
    position: string;
    description: string[];
    image: string;
  };
}

type Props = {
  posts: ReturnType<typeof getPosts>;
};

const Experience: NextPage<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(({ frontmatter }) => (
        <Head key={frontmatter.id}>
          <meta name="description" content={`Michael Kubin frontend developer, experience, ${frontmatter.where}`} />
          <meta property="og:title" content={`Michael Kubín ${frontmatter.position} ${frontmatter.title}`} />
          <meta property="og:description" content={`experience, ${frontmatter.description}`} />
        </Head>
      ))}
      <RunningScrollBar />
      <section className="flex flex-1 flex-col my-10 md:my-20">
        {posts.map(({ frontmatter }) => (
          <MiniCard key={frontmatter.id} item={frontmatter as IExperience['frontmatter']} />
        ))}
      </section>
    </>
  );
};

export default Experience;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const profileImages = (await cloudinary.api.resources_by_tag('work', { max_results: 20 })).resources
    .map((resource) => resource.public_id)
    .filter((image) => !image.includes('cover'));

  const posts = getPosts('src/_posts/_experience')
    .sort((a, b) => b.frontmatter.id - a.frontmatter.id)
    .map((post) => ({
      ...post,
      frontmatter: {
        ...post.frontmatter,
        image: profileImages.find((image) => image.includes(post.filename)),
      },
    }));

  return {
    props: {
      posts,
    },
  };
};
