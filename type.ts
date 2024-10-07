export interface IArticle {
  metadata: { title: string; description: string; date: string };
  image: { url: string; alt: string };
  content: Record<string, unknown>;
}
