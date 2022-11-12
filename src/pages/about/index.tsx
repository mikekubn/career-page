import React from 'react';
import type { GetStaticProps } from 'next';
import cloudinary from 'cloudinary.config';
import { getCloudinaryUrl, getPosts } from '@/lib/utils';
import { IExperience } from '@/lib/types';
import Header from '@/layouts/Header';
import MainLayout from '@/layouts/Layout';
import { NextPageWithLayout } from '../_app';
import Image from 'next/image';
import RotateList from '@/components/RotateList';
import Card from '@/components/Card';
import { H5, ParagraphBase, ParagraphLarge } from '@/components/Typography';
import Metadata from '@/components/Metadata';

type Props = {
  posts: IExperience[];
};

const About: NextPageWithLayout<Props> = ({ posts }) => {
  return (
    <>
      <Metadata title="About me" siteName="Experience" />
      <section className="flex flex-col m-auto my-10 sm:my-20">
        <div className="flex flex-col lg:flex-row mb-10 mx-auto">
          <div className="flex-col m-auto mb-10 lg:mb-0">
            <Image
              alt="profile-image"
              src={getCloudinaryUrl({ url: 'profile/home_photo_circle_k9t68o' })}
              width="250"
              height="250"
              className="rounded-full"
            />
          </div>
          <div className="flex-col m-auto md:mx-10 lg:w-96 text-center lg:text-left">
            <H5 className="uppercase mb-1 font-semibold">
              Michael <span className="text-blue">Kubin</span>
            </H5>
            <ParagraphBase className="mb-2 cursor-pointer hover:underline">
              <a href="https://arc.dev/@mikekubn" target="_blank" rel="noreferrer">
                <span className="text-blue">Arc</span> Certified Remote Developer
              </a>
            </ParagraphBase>
            <RotateList className="flex justify-center lg:justify-start box-content cursor-default mb-4" titleSize="text-2xl md:text-3xl" />
            <ParagraphBase>
              Hi everyone, I&apos;m <span className="text-blue font-semibold">Michael Kubín</span> and I&apos;m a frontend developer mostly working
              with React and I really enjoy working with the Cypress e2e testing framework 👨‍💻. I love hiking, so when I&apos;m not coding I enjoy the
              peace and quiet there ⛰ 🥾.
            </ParagraphBase>
          </div>
        </div>
        <div className="flex flex-col m-auto mb-10">
          <div className="flex justify-start box-content cursor-default mb-4">
            <ParagraphLarge className="uppercase">My Stack: </ParagraphLarge>
            <ParagraphLarge className="pl-2 overflow-y-hidden h-8">
              {stack.map((item, index) => (
                <span className="rotate-list" key={index}>
                  {item}
                </span>
              ))}
            </ParagraphLarge>
          </div>
        </div>
        {posts.map(({ frontmatter }) => (
          <Card key={frontmatter.id} item={frontmatter} />
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
      <MainLayout className="px-4 md:px-0">{page}</MainLayout>
    </>
  );
};

const stack = ['Frontend Development 👨‍💻', 'End to End testing 🧪🪛', 'Cypress', 'React 🏢', 'TypeScript ❤️', 'Next.js 🏎', 'Frontend Development 👨‍💻'];

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
