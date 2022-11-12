import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import { Post } from './types';

const getDirection = (str: string): string => path.join(process.cwd(), str);

const getPaths = (str: string) => {
  const directory = getDirection(str);
  const filenames = fs.readdirSync(directory);
  const slug = sanitation(filenames, '.md');
  return slug;
};

const getPosts = (dir: string): Post[] => {
  const directory = getDirection(dir);
  const filenames = fs.readdirSync(directory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { data: frontmatter, content } = matter(fileContent);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  return posts;
};

const getPost = (dir: string): Post => {
  const directory = getDirection(dir);
  const basename = path.basename(dir);
  const slug = basename.replace('.md', '');
  const file = fs.readFileSync(directory, 'utf8');

  const { data: frontmatter, content } = matter(file);

  return {
    slug,
    frontmatter,
    content,
  };
};

const sanitation = (arr: string[], cut: string): string[] => arr.map((a) => a.replace(cut, ''));

const getCloudinaryUrl = ({ url, prefix }: { url: string; prefix?: string }) =>
  `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload${!!prefix ? prefix : '/career_page'}/${url}`;

const firstLetterToUpperCase = (str: string) => str?.charAt(0).toUpperCase() + str?.slice(1);

const urlPathnameSanity = (str: string) => str?.replace(/\//g, '').replace(/-/g, ' ').toString();

const cleanTitle = (value: string) => {
  const title = value
    .split('/')
    .pop()
    ?.toString()
    .replace(/[^\_]+$/, '')
    .replace('_', '');

  if (!title?.length) {
    return '';
  }

  const string = firstLetterToUpperCase(title);

  return string;
};

const sortByDate = (a: string, b: string) => {
  const date1 = new Date(a);
  const date2 = new Date(b);

  const result = date2.getTime() - date1.getTime();

  return result;
};

const createdAt = (str: string) => {
  const day = new Date(str).getDate();
  const month = new Date(str).getMonth() + 1;
  const year = new Date(str).getFullYear();

  return `${day}. ${month}. ${year}`;
};

export {
  getPost,
  getPosts,
  getPaths,
  getDirection,
  sanitation,
  getCloudinaryUrl,
  cleanTitle,
  firstLetterToUpperCase,
  urlPathnameSanity,
  sortByDate,
  createdAt,
};
