import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { IFile, IFrontmatter } from './types';

const pathname = 'app/posts';
const sanity = (str: string) => str.replace(/\..*/, '');

export const getPosts = async (): Promise<IFile[]> => {
  const dir = path.join(process.cwd(), pathname);
  const filenames = fs.readdirSync(dir);
  const files = await Promise.all(filenames?.map((filename) => getPost({ post: sanity(filename) })));

  return files;
};

export const getPost = async ({ post }: { post: string }): Promise<IFile> => {
  const dir = path.join(process.cwd(), `${pathname}/${post}.mdx`);
  const isDirExist = fs.existsSync(dir);

  if (!isDirExist) {
    throw new Error(`The file has not been found. ${dir}`);
  } else {
    const source = fs.readFileSync(dir, { encoding: 'utf8' }).toString();

    const { frontmatter, content } = await compileMDX<IFrontmatter>({
      source,
      options: { parseFrontmatter: true },
    });

    return {
      frontmatter,
      content,
    };
  }
};
