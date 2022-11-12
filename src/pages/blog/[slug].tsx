import { createdAt, getPaths, getPost } from '@/lib/utils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Button, Paragraph, Time } from '@/components/Typography';
import Tags from '@/components/Tags';
import { IArticle } from '@/lib/types';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { useRouter } from 'next/router';
import { useNotificationProvider } from '@/provider/NotificationProvider';
import readingTime, { ReadTimeResults } from 'reading-time';
import { NextPageWithLayout } from '../_app';
import Header from '@/layouts/Header';
import MainLayout from '@/layouts/Layout';
import BlogContainer from '@/layouts/Layout/BlogContainer';
import Metadata from '@/components/Metadata';

interface IArticleProps extends Partial<Omit<IArticle, 'content'>> {
  content: MDXRemoteSerializeResult;
}

type Props = {
  article: IArticleProps;
};

type Params = NextParsedUrlQuery & Pick<IArticle, 'slug'>;

const Post: NextPageWithLayout<Props> = ({ article }) => {
  const { back } = useRouter();
  const { dispatch } = useNotificationProvider();
  const { content, frontmatter } = article;

  if (!frontmatter) {
    return <></>;
  }

  const { date, author, tags, readTime, title } = frontmatter;
  const created = createdAt(date);

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
      <Metadata title={title} siteName="Blog" keywords={tags.join(',')} />
      <section className="my-10 mx-auto lg:mt-10 lg:mb-20">
        <div className="flex flex-row justify-between">
          <Button onClick={() => back()} className="px-4 py-1 text-sm">
            🔙 Back
          </Button>
          <Button onClick={handleClick} className="px-4 py-1 text-sm">
            🔗 Copy link
          </Button>
        </div>
        <div className="flex flex-row mt-10 justify-between">
          <Time>{created}</Time>
          <Paragraph>{readTime.text}</Paragraph>
          <Paragraph>{author}</Paragraph>
        </div>
        <Tags items={tags} className="my-6 lg:my-8" />
        <article className="prose lg:prose-lg prose-zinc lg:prose-h1:pb-10 max-w-none dark:prose-invert prose-a:text-blue prose-pre:bg-gray/90 hover:prose-pre:bg-gray hover:prose-a:text-pink">
          <MDXRemote {...content} />
        </article>
      </section>
    </>
  );
};

export default Post;

Post.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <Header />
      <MainLayout>
        <BlogContainer className="bg-white dark:bg-black">{page}</BlogContainer>
      </MainLayout>
    </>
  );
};

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

  const readTime: ReadTimeResults = readingTime(content);

  const mdxSource = await serialize(content);

  const article: IArticleProps = {
    content: mdxSource,
    frontmatter: { ...(post.frontmatter as IArticle['frontmatter']), date: post.frontmatter.date.toString(), readTime },
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
