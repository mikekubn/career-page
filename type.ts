export interface IArticleMetadata {
  title: string;
  keywords: string;
  description: string;
  image: string;
  published: string;
  date: string;
  canonicalUrl?: string;
}

export interface IArticleProps {
  slug?: string;
  metadata: IArticleMetadata;
  article: React.ReactElement;
}
