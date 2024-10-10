export interface IArticle {
  metadata: { title: string; description: string; date: string; keywords: string };
  image: { url: string; alt: string };
  content: Record<string, unknown>;
}
