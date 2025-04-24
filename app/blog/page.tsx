import Intro from '@/components/Intro';
import { Metadata } from 'next/types';
import Teaser from '@/components/Teaser';
import { getArticles } from '@/utils/helpers';
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
        url: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1733505263/image_stnxij.png',
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
  const articles = await getArticles();

  return (
    <section className="flex flex-col items-center md:items-stretch w-full max-w-screen-lg mx-auto px-6">
      <Intro title="Blog," isArrowVisible />
      <div className="h-20" />
      <div className="flex flex-row flex-wrap justify-center gap-6">{articles?.map((article) => <Teaser {...article} key={article.slug} />)}</div>
      <Clients title="Where I've been coding" className="mx-auto my-40 md:my-60" />
      <Talk className="mx-auto my-40 md:my-60" />
    </section>
  );
};

export default Blog;
