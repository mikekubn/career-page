import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import cloudinary from 'cloudinary.config';
import { getPosts } from '@/lib/utils';
import Image from 'next/image';
import RunningScrollBar from '@/components/RunningScrollBar';

interface IExperience {
  posts: {
    id: string;
    title: string;
    from: string;
    to: string;
    where: string;
    position: string;
    description: string[];
    image: string;
  }[];
}

const Experience: NextPage<IExperience> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <Head key={post.id}>
        <title>Michael Kubín - Experience</title>
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
        <ol key={post.id} className="relative border-l mx-auto w-10/12 md:3/5 lg:w-3/5 xl:w-2/5">
          <li className="mb-20 ml-12 sm:ml-16 md:ml-24 md:w-3/4 lg:w-[430px] rounded-xl bg-sky500/50 shadow-lg shadow-black">
            <span className="flex absolute -left-5 md:-left-8 justify-center items-center w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ring-8 dark-mode">
              <Image alt={post.image} src={post.image} height="62" width="62" className="rounded-full" />
            </span>
            <section className="pt-2 p-6 lg:pt-4 lg:p-8 rounded-xl">
              <time className="text-sm font-normal">
                From: {post.from} {post.to && `To: ${post.to}`}
              </time>
              <h1 className="pt-2 text-lg font-semibold">{post.title}</h1>
              <p className="text-sm font-light pt-1 pb-2">{post.where}</p>
              <p className="text-lg underline underline-offset-4 pb-4">{post.position}</p>
              <ul>
                {post.description.map((text, index) => (
                  <li key={index} className="list-disc font-light leading-loose">
                    <code>{text}</code>
                  </li>
                ))}
              </ul>
            </section>
          </li>
        </ol>
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
