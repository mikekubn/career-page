import { getPaths, getPost } from '@/lib/utils';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IArticle } from '.';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import RunningScrollBar from '@/components/RunningScrollBar';

interface IPost {
  content: MDXRemoteSerializeResult;
  frontmatter: IArticle['metadata'];
}

const Post: NextPage<{ article: IPost }> = ({ article }) => {
  const { content, frontmatter } = article;

  return (
    <>
      <Head>
        <meta name="description" content={frontmatter.author} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.excerpt} />
      </Head>
      <RunningScrollBar />
      <section className="w-3/5 mx-auto my-20">
        <article className="prose max-w-none">
          <MDXRemote {...content} />
        </article>
      </section>
    </>
  );
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
  const post = getPost(`src/_posts/_blog/${params?.slug}.md`);
  const { content } = post;

  const mdxSource = await serialize(content);

  const article = {
    content: mdxSource as MDXRemoteSerializeResult,
    frontmatter: { ...post.frontmatter, date: post.frontmatter.date.toISOString() as string },
  };

  return {
    props: {
      article,
    },
    revalidate: 10,
  };
};
