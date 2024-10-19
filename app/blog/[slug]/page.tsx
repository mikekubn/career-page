import { Metadata } from 'next/types';
import { getArticle, getArticlesPaths } from '@/utils/helpers';
import Intro from '@/components/Intro';
import Article from '@/components/Article';
import Clients from '@/components/Clients';
import Talk from '@/components/Talk';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { metadata } = await getArticle(params.slug);

  return {
    title: metadata?.title,
    description: metadata?.description,
    keywords: metadata?.keywords,
    openGraph: {
      title: `Tech Blog | ${metadata?.title}`,
      type: 'website',
      locale: 'en_US',
      url: `https://mikekubn.cz/blog/${params.slug}`,
      description: metadata?.description,
      images: [
        {
          url: metadata?.image,
          width: 1200,
          height: 630,
          alt: `Tech Blog | ${metadata?.title}`,
        },
      ],
    },
    robots: 'index, follow',
    alternates: {
      canonical: metadata?.canonicalUrl?.length ? metadata?.canonicalUrl : `https://mikekubn.cz/blog/${params.slug}`,
    },
  };
}

export const generateStaticParams = async () => {
  const pathnames = await getArticlesPaths();

  return pathnames;
};

const Post = async ({ params }: { params: { slug: string } }) => {
  const { article } = await getArticle(params.slug);

  return (
    <section className="flex flex-col w-full max-w-screen-lg mx-auto px-6">
      <Intro title="Blog," />
      <div className="h-20" />
      <Article markdown={article} />
      <section className="flex flex-col items-center my-40">
        <Link href="/blog" className="inline-flex items-center hover:underline underline-offset-8 text-[18px] md:text-[24px] text-blue">
          Visit Blog
          <ArrowRight className="size-[24px]" />
        </Link>
      </section>
      <Clients title="Where I've been coding" className="mx-auto mb-40 md:mb-60" />
      <Talk className="mx-auto my-40 md:my-60" />
    </section>
  );
};

export default Post;
