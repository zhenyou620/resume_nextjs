import { ZennArticleType } from '../types/ZennArticleType';

// const isZennArticle = (data: unknown): data is ZennArticleType => {
//   const d = data as ZennArticleType;

//   return (
//     typeof d?.id === 'number' &&
//     typeof d?.path === 'string' &&
//     d.emoji === 'string' &&
//     d.title === 'string' &&
//     d.published_at === 'string'
//   );
// };

export const getZennArticles: () => Promise<ZennArticleType[]> = async () => {
  const res = await fetch(
    'https://zenn.dev/api/articles?username=zhenyou620&order=latest',
    { next: { revalidate: 3600 } } // 1時間ごとに再検証
  );

  if (!res.ok) {
    throw new Error('Failed to fetch Zenn articles');
  }

  const data = await res.json();
  const articles: ZennArticleType[] = data?.article?.slice(0, 10);

  return articles;
};

// export const getZennArticles = (): ZennArticleType[] => {
//   const data = zennArticles.articles.map((article) => ({
//     id: article.id,
//     path: article.path,
//     emoji: article.emoji,
//     title: article.title,
//     published_at: article.published_at,
//   }));

//   return data;
// };
