import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

const getDirection = (str: string): string => path.join(process.cwd(), str);

const getPaths = (str: string) => {
  const directory = getDirection(str);
  const filenames = fs.readdirSync(directory);
  return  sanitation(filenames, '.md');
};

const getPosts = (dir: string) => {
  const directory = getDirection(dir);
  const filenames = fs.readdirSync(directory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { data: frontmatter } = matter(fileContent);

    return {
      filename: slug,
      frontmatter,
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

const imgPaths = (img: string) => `/img/work/${img}`;

export { getPost, getPosts, getPaths, getDirection, sanitation, imgPaths };