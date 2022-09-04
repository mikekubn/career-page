import React from 'react';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import cloudinary from 'cloudinary.config';
import { getPosts } from '@/lib/utils';
import { IExperience } from '@/lib/types';
import Header from '@/layouts/Header';
import MainLayout from '@/layouts/Layout';
import { NextPageWithLayout } from '../_app';
import Image from 'next/image';
import { H1, Paragraph } from '@/components/Typography';
import RotateList from '@/components/RotateList';

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
      <section className="flex flex-col m-auto">
        <div className="flex flex-col lg:flex-row mb-5">
          <div className="flex-col m-auto mb-10">
            <Image alt="profile-image" src="career_page/profile/home_photo_circle_k9t68o" width="250" height="250" className="rounded-full" />
          </div>
          <div className="flex-col mx-auto sm:mx-20 w-72 sm:w-96 my-auto">
            <h1 className="uppercase mb-3 text-xl font-semibold">
              Michael <span className="text-blue">Kubin</span>
            </h1>
            <RotateList className="flex justify-start box-content cursor-default mb-4" titleSize="text-lg" />
            <Paragraph>
              Hi everyone, I&apos;m <span className="text-blue font-semiBold">Michael Kubín</span> and I&apos;m a frontend developer mostly working
              with React and I really enjoy working with the Cypress e2e testing framework 👨‍💻. I love hiking, so when I&apos;m not coding I enjoy the
              peace and quiet there ⛰ 🥾.
            </Paragraph>
          </div>
        </div>
        <div className="flex flex-col m-auto my-4">
          <div className="flex justify-start box-content cursor-default mb-4">
            <H1 className="uppercase">My Stack: </H1>
            <div className="pl-2 overflow-y-hidden h-8 text-lg">
              {stack.map((item, index) => (
                <span className="rotate-list" key={index}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

const stack = ['Frontend Development 👨‍💻', 'End to End testing 🧪🪛', 'Cypress', 'React 🏢', 'TypeScript ❤️', 'Next.js 🏎', 'Frontend Development 👨‍💻'];

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
