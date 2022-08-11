import { getPaths, getPost } from '@/lib/utils';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IArticle } from '.';

interface IPost {
  content: string;
  frontmatter: IArticle['metadata'];
}

const Post: NextPage<{ article: IPost }> = ({ article }) => {
  return <>{article.frontmatter?.title}</>;
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

  return {
    props: {
      article,
    },
    revalidate: 10,
  };
};
