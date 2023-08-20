'use client';

import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IFile } from 'utils/types';
import { H4, ParagraphLarge } from './Typography';
import { usePostHog } from 'posthog-js/react';

const Posts = ({ posts }: { posts: IFile[] }): React.ReactElement => (
  <section className="flex flex-col lg:flex-row min-h-screen w-full justify-center items-center gap-10 my-10 md:my-20">
    {posts.map((post) => (
      <Post post={post} key={post.frontmatter.slug} />
    ))}
  </section>
);

export const Post = ({ post }: { post: IFile }): React.ReactElement => {
  const posthog = usePostHog();

  return (
    <Link
      href={`/${post.frontmatter.slug}` as Route}
      onClick={() => posthog?.capture(`Click on post - ${post.frontmatter.title}`)}
      className="group bg-white w-full sm:w-2/3 md:w-1/2 lg:w-5/12 text-light-black rounded-2xl hover:cursor-pointer">
      <div className="p-5">
        <H4 font="medium" className="h-16 md:h-28 text-light-blue group-hover:underline decoration-1 underline-offset-4">
          {post.frontmatter.title}
        </H4>
        <ParagraphLarge font="light" className="flex flex-col justify-start h-20 md:h-36">
          {post.frontmatter.excerpt}
        </ParagraphLarge>
      </div>
      <div className="relative w-full h-64">
        <Image className="rounded-b-2xl" fill quality={100} loading="eager" src={post.frontmatter.image} alt={post.frontmatter.slug} />
      </div>
    </Link>
  );
};

export default Posts;
