import React from 'react';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import cloudinary from 'cloudinary.config';
import { getPosts } from '@/lib/utils';
import { MiniCard } from '@/components/Card';
import { IExperience } from '@/lib/types';
import Header from '@/layouts/Header';
import MainLayout from '@/layouts/Layout';
import { NextPageWithLayout } from '../_app';

type Props = {
  posts: IExperience[];
};

const About: NextPageWithLayout<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(({ frontmatter }) => (
        <Head key={frontmatter.id}>
          <meta name="description" content={`Michael Kubin frontend developer, experience, ${frontmatter.where}`} />
          <meta property="og:title" content={`Michael Kubín ${frontmatter.position} ${frontmatter.title}`} />
          <meta property="og:description" content={`experience, ${frontmatter.description}`} />
        </Head>
      ))}
      <section className="flex flex-1 flex-col my-10 md:my-20">
        {posts.map(({ frontmatter }) => (
          <MiniCard key={frontmatter.id} item={frontmatter} />
        ))}
      </section>
    </>
  );
};

export default About;

About.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <Header />
      <MainLayout>{page}</MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const profileImages = (await cloudinary.api.resources_by_tag('work', { max_results: 20 })).resources
    .map((resource) => resource.public_id)
    .filter((image) => !image.includes('cover'));

  const posts: IExperience[] = getPosts('src/_posts/_experience')
    .sort((a, b) => b.frontmatter.id - a.frontmatter.id)
    .map((post) => ({
      ...post,
      frontmatter: {
        ...(post.frontmatter as IExperience['frontmatter']),
        image: profileImages.find((image) => image.includes(post.slug)),
      },
    })) as IExperience[];

  return {
    props: {
      posts,
    },
  };
};
