import { JSXElementConstructor } from 'react';

export interface IFrontmatter {
  slug: string;
  author: string;
  date: string;
  title: string;
  keywords: string;
  image: string;
  excerpt: string;
}

export interface IFile {
  frontmatter: IFrontmatter;
  content: React.ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}
