import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import cloudinary from 'cloudinary.config';
import { getPosts } from '@/lib/utils';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';

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

const Experience: NextPage<IExperience> = ({ posts }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return (
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
      <motion.div className="h-3 top-32 fixed z-30 left-0 right-0 mx-16 bg-blue rounded-full" style={{ scaleX }} />
      <section className="flex flex-1 flex-col my-20">
        {posts.map((post) => (
          <ol key={post.id} className="relative border-l mx-auto w-2/5">
            <li className="mb-20 ml-24 w-3/4 rounded-xl bg-sky500/50 shadow-lg shadow-black">
              <span className="flex absolute -left-8 justify-center items-center w-16 h-16 rounded-full ring-8 dark-mode">
                <Image alt={post.image} src={post.image} height="62" width="62" className="rounded-full" />
              </span>
              <section className="pt-2 p-6 rounded-xl">
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
};

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
