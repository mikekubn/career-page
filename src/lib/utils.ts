import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

const getDirection = (str: string): string => path.join(process.cwd(), str);

const getPaths = (str: string) => {
  const directory = getDirection(str);
  const filenames = fs.readdirSync(directory);
  return sanitation(filenames, '.md');
};

const getPosts = (dir: string) => {
  const directory = getDirection(dir);
  const filenames = fs.readdirSync(directory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { data: frontmatter, content } = matter(fileContent);

    return {
      filename: slug,
      frontmatter,
      content,
    };
  });

  return posts;
};

const getPost = (dir: string) => {
  const directory = getDirection(dir);
  const file = fs.readFileSync(directory, 'utf8');

  const { data: frontmatter } = matter(file);

  return {
    frontmatter,
  };
};

const sanitation = (arr: string[], cut: string): string[] => arr.map((a) => a.replace(cut, ''));

const getCloudinaryUrl = (url: string) => `/career_page/${url}`;

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

  const firstLetterToUpperCase = title?.charAt(0).toUpperCase() + title?.slice(1);

  return firstLetterToUpperCase;
};

export { getPost, getPosts, getPaths, getDirection, sanitation, getCloudinaryUrl, cleanTitle };
