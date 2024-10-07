import Intro from '@/components/Intro';
import { Metadata } from 'next/types';
import Article from '@/components/ArticleIntro';
import { getArticle, getArticles } from '@/utils/helpers';
import Clients from '@/components/Clients';
import Talk from '@/components/Talk';

export const metadata: Metadata = {
  title: 'Blog | Michael Kubin',
  alternates: {
    canonical: 'https://www.the12st.com/blog',
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
      <Clients title="Where I've been coding" className="mx-auto mb-40 md:mb-60" />
      <Talk className="mx-auto my-40 md:my-60" />
    </section>
  );
};

export default Blog;
