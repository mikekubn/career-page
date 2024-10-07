import { IArticle } from '@/type';
import fs from 'fs';
import { notFound } from 'next/navigation';
import path from 'path';

export const sanity = (str: string) => str.replace(/\..*/, '');

export const getArticles = async () => {
  const dir = path.join(process.cwd(), 'articles');
  const filenames = fs.readdirSync(dir);
  const files = await Promise.all(filenames?.map((filename) => sanity(filename)));

  return files;
};

export const getArticle = async (slug: string): Promise<IArticle> => {
  const dir = path.join(process.cwd(), `articles/${slug}.json`);

  if (!fs.existsSync(dir)) return notFound();

  const file = fs.readFileSync(dir, 'utf-8');
  const json = JSON.parse(file);
  return json;
};
