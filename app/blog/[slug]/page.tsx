import { Metadata } from 'next/types';
import { getArticle } from '@/utils/helpers';
import { IArticle } from '@/type';
import Intro from '@/components/Intro';
import Article from '@/components/Article';
import Clients from '@/components/Clients';
import Talk from '@/components/Talk';

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
      canonical: `https://mikekubn.cz/blog/${params.slug}`,
    },
  };
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const article: IArticle = await getArticle(params.slug);

  if (!article) return null;

  return (
    <section className="flex flex-col items-center md:items-stretch w-full max-w-screen-lg mx-auto px-6">
      <Intro title="Blog," />
      <div className="h-20" />
      <article>
        <Article content={article.content} />
      </article>
      <div className="h-40" />
      <Clients title="Where I've been coding" className="mx-auto mb-40 md:mb-60" />
      <Talk className="mx-auto my-40 md:my-60" />
    </section>
  );
};

export default Post;
