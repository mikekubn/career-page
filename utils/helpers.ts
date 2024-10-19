import { IArticleProps, IArticleMetadata } from '@/type';
import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export const sanity = (str: string) => str.replace(/\..*/, '');

export const getArticle = async (slug: string): Promise<IArticleProps> => {
  await fs.access(path.join(process.cwd(), 'articles', `${slug}.mdx`)).catch(() => notFound());

  const markdown = await fs?.readFile(path.join(process.cwd(), 'articles', `${slug}.mdx`), 'utf-8');

  const { frontmatter, content } = await compileMDX<IArticleMetadata>({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  return {
    slug: sanity(slug),
    metadata: frontmatter,
    article: content,
  };
};

export const getArticles = async () => {
  const files = await fs.readdir(path.join(process.cwd(), 'articles'));
  const pathnames = files.map((file) => path.parse(file).name);
  const promise = await Promise.all(pathnames.map(async (pathname) => getArticle(pathname)));
  const articles = promise?.sort((a, b) => new Date(b?.metadata?.published).getTime() - new Date(a?.metadata?.published).getTime());

  return articles;
};

export const getArticlesPaths = async () => {
  const files = await fs.readdir(path.join(process.cwd(), 'articles'));
  const pathnames = files.map((file) => path.parse(file).name);
  const paths = pathnames?.map((pathname) => ({
    params: { slug: pathname },
  }));

  return paths;
};
