export interface ZennArticleType {
  id: number;
  path: string;
  emoji: string;
  title: string;
  published_at: string;
}

export type ZennResponseType = ZennArticleType[];
