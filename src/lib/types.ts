import { ReadTimeResults } from 'reading-time';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export type Post = {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
  content: string;
};

export interface IExperience extends Omit<Post, 'frontmatter'> {
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

export interface IArticle extends Omit<Post, 'frontmatter'> {
  frontmatter: {
    author: string;
    date: string;
    tags: string[];
    title: string;
    excerpt: string;
    readTime: ReadTimeResults;
  };
}
