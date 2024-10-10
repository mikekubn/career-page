import Intro from '@/components/Intro';
import { Metadata } from 'next/types';
import Article from '@/components/ArticleIntro';
import { getArticle, getArticles } from '@/utils/helpers';
import Clients from '@/components/Clients';
import Talk from '@/components/Talk';

export const metadata: Metadata = {
  title: 'Tech Blog | Michael Kubin',
  description: 'Explore articles and insights on React, TypeScript, frontend architecture, and software engineering by Michael Kubin.',
  keywords:
    'Michael Kubin blog, React tutorials, TypeScript tips, frontend development, software engineering, JavaScript articles, web application architecture, tech blog, digital crafting, programming insights',
  openGraph: {
    title: 'Tech Blog | Michael Kubin - Software Engineering & Frontend Development',
    type: 'website',
    locale: 'en_US',
    url: 'https://mikekubn.cz/blog',
    description: 'Explore articles and insights on React, TypeScript, frontend architecture, and software engineering by Michael Kubin.',
    images: [
      {
        url: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1681157556/og_michael_kubin_dcskgv.jpg',
        width: 1200,
        height: 630,
        alt: 'Michael Kubin Blog',
      },
    ],
  },
  alternates: {
    canonical: 'https://mikekubn.cz/blog',
  },
};

const Blog = async () => {
  const pathnames = await getArticles();
  const articles = pathnames?.map(async (pathname) => {
    try {
      const article = await getArticle(pathname);
      return {
        slug: pathname,
        ...article,
      };
    } catch (error) {
      console.error('error', error);
    }
  });
  const content = await Promise.all(articles);

  return (
    <section className="flex flex-col items-center md:items-stretch w-full max-w-screen-lg mx-auto px-6">
      <Intro title="Blog," />
      <div className="h-20" />
      <div className="flex flex-row justify-center flex-wrap gap-6 min-h-screen">
        {content?.map((article) => (
          <Article
            key={article?.slug}
            title={article?.metadata?.title}
            date={article?.metadata?.date}
            src={article?.image?.url}
            slug={article?.slug}
          />
        ))}
      </div>
      <div className="h-40 md:h-0" />
      <Clients title="Where I've been coding" className="mx-auto mb-40 md:mb-60" />
      <Talk className="mx-auto my-40 md:my-60" />
    </section>
  );
};

export default Blog;
