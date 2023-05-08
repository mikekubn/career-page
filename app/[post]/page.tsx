import { Prose } from 'app/components/Typography';
import { Metadata } from 'next';
import { getPost } from 'utils';

interface IPostProps {
  params: {
    post: string;
  };
}

const getPostData = async ({ params: { post } }: IPostProps) => {
  const article = await getPost({ post });
  return article;
};

export const generateMetadata = async ({ params }: IPostProps): Promise<Metadata> => {
  const { post } = params;
  const article = await getPost({ post });

  const { frontmatter } = article;

  return {
    title: frontmatter?.title,
    authors: { name: frontmatter.author, url: 'https://mikekubn.cz' },
    creator: frontmatter?.author,
    keywords: frontmatter?.keywords,
    description: frontmatter.excerpt,
    applicationName: 'Post - Michael Kubin',
  };
};

const Post = async ({ params }: IPostProps): Promise<React.ReactElement> => {
  const markdown = await getPostData({ params });

  const { content } = markdown;

  return <Prose className="mx-auto w-full md:max-w-4xl">{content}</Prose>;
};
export default Post;
