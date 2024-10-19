import { getArticlesPaths } from '@/utils/helpers';
import type { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const articles = await getArticlesPaths();

  const content = articles.map((article) => ({
    url: `https://mikekubn.cz/blog/${article?.params?.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://mikekubn.cz/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://mikekubn.cz/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...content,
  ];
};

export default sitemap;
