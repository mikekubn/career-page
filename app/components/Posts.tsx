'use client';

import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IFile } from 'utils/types';
import { H4, ParagraphLarge } from './Typography';
import { usePostHog } from 'posthog-js/react';

const Posts = ({ posts }: { posts: IFile[] }): React.ReactElement => (
  <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
    {posts.map((post) => (
      <Post post={post} key={post.frontmatter.slug} />
    ))}
  </section>
);

export const Post = ({ post }: { post: IFile }): React.ReactElement => {
  const posthog = usePostHog();

  return (
    <article className="flex flex-col justify-between group gradient gradient-animate rounded-2xl h-[400px] w-[350px] text-white">
      <div className="mx-1 mt-1 rounded-t-2xl bg-black h-[25%] hover:opacity-90">
        <div className="p-3">
          <Link href={`/${post.frontmatter.slug}` as Route} onClick={() => posthog?.capture(`Click on post - ${post.frontmatter.title}`)}>
            <H4 font="medium" className="group-hover:underline decoration-1 underline-offset-4 line-clamp-2">
              {post.frontmatter.title}
            </H4>
          </Link>
        </div>
      </div>
      <div className="h-[140px] px-4 text-start">
        <ParagraphLarge font="light" className="line-clamp-5">
          {post.frontmatter.excerpt}
        </ParagraphLarge>
      </div>
      <div className="h-[35%] mx-1 mb-1 rounded-b-2xl bg-black flex flex-row items-center justify-center">
        <div className="relative size-full">
          <Image className="rounded-b-2xl" fill quality={100} loading="eager" src={post.frontmatter.image} alt={post.frontmatter.slug} />
        </div>
      </div>
    </article>
  );
};

export default Posts;
