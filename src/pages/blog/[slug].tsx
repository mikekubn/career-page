import { createdAt, getPaths, getPost } from '@/lib/utils';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IArticle } from '.';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import RunningScrollBar from '@/components/RunningScrollBar';
import { Paragraph, Time } from '@/components/Typography';
import Tags from '@/components/Tags';

type Props = {
  article: IArticle;
};

const Post: NextPage<Props> = ({ article }) => {
  const { content, frontmatter } = article;
  const { date, author, tags } = frontmatter;
  const created = createdAt(date);

  return (
    <>
      <Head>
        <meta name="description" content={frontmatter.author} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.excerpt} />
      </Head>
      <RunningScrollBar />
      <section className="my-6 w-4/5 xl:w-3/5 mx-auto lg:my-20">
        <div className="flex flex-row mt-10 justify-between">
          <Time>{created}</Time>
          <Paragraph>{author}</Paragraph>
        </div>
        <Tags items={tags} className="my-6 lg:my-8" />
        <article className="prose lg:prose-lg prose-zinc lg:prose-h1:pb-10 max-w-none dark:prose-invert prose-a:text-sky500 prose-pre:bg-gray900 hover:prose-pre:bg-gray700 hover:prose-a:text-red400/60">
          <MDXRemote {...(content as unknown as MDXRemoteSerializeResult)} />
        </article>
      </section>
    </>
  );
};

export default Post;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = () => {
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
    content: mdxSource,
    frontmatter: { ...post.frontmatter, date: post.frontmatter.date.toString() },
  };

  return {
    props: {
      article,
    },
    revalidate: 10,
  };
};
