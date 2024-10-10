import { Metadata } from 'next/types';
import { getArticle, getArticlesPaths } from '@/utils/helpers';
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
    keywords: article?.metadata?.keywords,
    openGraph: {
      title: `Tech Blog | ${article?.metadata?.title}`,
      type: 'website',
      locale: 'en_US',
      url: `https://mikekubn.cz/blog/${params.slug}`,
      description: article?.metadata?.description,
      images: [
        {
          url: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1681157556/og_michael_kubin_dcskgv.jpg',
          width: 1200,
          height: 630,
          alt: `Tech Blog | ${article?.metadata?.title}`,
        },
      ],
    },
    robots: 'index, follow',
    alternates: {
      canonical: `https://mikekubn.cz/blog/${params.slug}`,
    },
  };
}

export const generateStaticParams = async () => {
  const pathnames = await getArticlesPaths();

  return pathnames;
};

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
