import { Metadata } from 'next/types';
import { getArticle } from '@/utils/helpers';
import { IArticle } from '@/type';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article: IArticle = await getArticle(params.slug);

  return {
    title: article?.metadata?.title,
    description: article?.metadata?.description,
    openGraph: {
      title: article?.metadata?.title,
    },
    robots: 'index, follow',
    alternates: {
      canonical: `https://www.the12st.com/blog/${params.slug}`,
    },
  };
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const article: IArticle = await getArticle(params.slug);

  if (!article) return null;

  return null;

  // return (
  //   <>
  //     <article className="flex flex-col w-full max-w-screen-lg mx-auto px-6">
  //       <Intro title="Blog," />
  //       <ArticleIntro title={article?.metadata?.title} date={article?.metadata?.date} src={article?.image?.url} />
  //       <div className="h-4 md:h-16" />
  //       <Article content={article?.content} />
  //     </article>
  //     <div className="h-8 md:h-20" />
  //     <Clients title="Where have we build" className="max-w-screen-lg mx-auto px-6" />
  //     <Talk className="max-w-screen-lg mx-auto px-6 py-14 md:py-20" />
  //   </>
  // );
};

export default Post;
