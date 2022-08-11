import { getPaths, getPost } from '@/lib/utils';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IArticle } from '.';
import ReactMarkdown from 'react-markdown';

interface IPost {
  content: string;
  frontmatter: IArticle['metadata'];
}

const Post: NextPage<{ article: IPost }> = ({ article }) => {
  const { content } = article;
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default Post;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<IParams> = () => {
  const articles = getPaths('src/_posts/_blog');
  const paths = articles.map((article) => ({ params: { slug: article } }));

  return {
    fallback: 'blocking',
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = getPost(`src/_posts/_blog/${params?.slug}.md`);

  const data = {
    ...article,
    frontmatter: { ...article.frontmatter, date: JSON.parse(JSON.stringify(article.frontmatter.date)) },
  };

  return {
    props: {
      article: data,
    },
    revalidate: 10,
  };
};
