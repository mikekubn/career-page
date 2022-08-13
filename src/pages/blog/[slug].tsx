import { createdAt, getPaths, getPost } from '@/lib/utils';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import RunningScrollBar from '@/components/RunningScrollBar';
import { Paragraph, Time } from '@/components/Typography';
import Tags from '@/components/Tags';
import { IArticle } from '@/lib/types';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import AnimatedButton from '@/components/Button';
import { useRouter } from 'next/router';
import { useNotificationProvider } from '@/provider/NotificationProvider';

interface IArticleProps extends Partial<Omit<IArticle, 'content'>> {
  content: MDXRemoteSerializeResult;
}

type Props = {
  article: IArticleProps;
};

type Params = NextParsedUrlQuery & Pick<IArticle, 'slug'>;

const Post: NextPage<Props> = ({ article }) => {
  const { back } = useRouter();
  const { dispatch } = useNotificationProvider();
  const { content, frontmatter } = article;

  if (!frontmatter) {
    return <></>;
  }

  const { date, author, tags } = frontmatter;
  const created = createdAt(date);
  const mdx_content = content as unknown as MDXRemoteSerializeResult;

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.href}`);
      dispatch({ visible: true, status: 'success', note: 'Copied success.' });
    } catch (e) {
      dispatch({ visible: true, status: 'error', note: 'Copied failed.' });
    }
  };

  return (
    <>
      <Head>
        <meta name="description" content={frontmatter.author} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.excerpt} />
      </Head>
      <RunningScrollBar />
      <section className="my-6 w-4/5 xl:w-3/5 mx-auto lg:mt-10 lg:mb-20">
        <div className="flex flex-row justify-between">
          <AnimatedButton title="🔙 Back" onClick={() => back()} />
          <AnimatedButton title="🔗 Copy link" onClick={handleClick} />
        </div>
        <div className="flex flex-row mt-10 justify-between">
          <Time>{created}</Time>
          <Paragraph>reading time</Paragraph>
          <Paragraph>{author}</Paragraph>
        </div>
        <Tags items={tags} className="my-6 lg:my-8" />
        <article className="prose lg:prose-lg prose-zinc lg:prose-h1:pb-10 max-w-none dark:prose-invert prose-a:text-sky500 prose-pre:bg-gray900 hover:prose-pre:bg-gray700 hover:prose-a:text-red400/60">
          <MDXRemote {...mdx_content} />
        </article>
      </section>
    </>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const { params } = context;

  if (!params) {
    return {
      notFound: true,
    };
  }

  const { slug } = params;
  const post = getPost(`src/_posts/_blog/${slug}.md`);
  const { content } = post;

  const mdxSource = await serialize(content);

  const article: IArticleProps = {
    content: mdxSource,
    frontmatter: { ...(post.frontmatter as IArticle['frontmatter']), date: post.frontmatter.date.toString() },
  };

  return {
    props: {
      article,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const articles = getPaths('src/_posts/_blog');
  const paths = articles.map((article) => ({ params: { slug: article } }));

  return {
    fallback: 'blocking',
    paths: paths,
  };
};
