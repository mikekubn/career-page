import Intro from '@/components/Intro';
import { Metadata } from 'next/types';
import ArticleIntro from '@/components/ArticleIntro';
import { getArticle, getArticles } from '@/utils/helpers';

export const metadata: Metadata = {
  title: 'Blog | Michael Kubin',
  alternates: {
    canonical: 'https://www.the12st.com/blog',
  },
};

const Blog = async () => {
  const articles = await getArticles();
  const article = await getArticle(articles?.[0]);
  const slug = articles?.[0];

  return (
    <>
      <section className="flex flex-col items-center md:items-stretch w-full max-w-screen-lg mx-auto px-6">
        <Intro title="Blog," />
        <ArticleIntro title={article?.metadata?.title} date={article?.metadata?.date} src={article?.image?.url} slug={slug} isLink />
      </section>
    </>
  );
};

export default Blog;
