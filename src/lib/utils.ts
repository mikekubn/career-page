import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import { ParsedUrlQuery } from 'querystring';

const getDirection = (str: string): string => path.join(process.cwd(), str);

const getPaths = (str: string) => {
  const directory = getDirection(str);
  const filenames = fs.readdirSync(directory);
  return  sanitation(filenames, '.md');
};

const getPosts = (_dir: string, arr: string[]) => arr.map((filename) => {
  const slug = filename.replace('.md', '');
  const filePath = path.join(_dir, filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data: frontmatter } = matter(fileContent);

  return {
    filename: slug,
    frontmatter,
  };
});

const getPost = (params: ParsedUrlQuery | undefined) => {
  const directory = getDirection(`src/_posts/${params?.id}.md`);
  const file = fs.readFileSync(directory, 'utf8');

  const { data: frontmatter } = matter(file);

  return {
    frontmatter,
  };
};

const sanitation = (arr: string[], cut: string): string[] => arr.map((a) => a.replace(cut, ''));

const imgPaths = (img: string) => `/img/work/${img}`;

export { getPost, getPosts, getPaths, getDirection, sanitation, imgPaths };