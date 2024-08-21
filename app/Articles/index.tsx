// 'use client';

import { FC } from 'react';
import { ZennArticle } from './components/ZennArticle';
import { ZennArticleType } from './types/ZennArticleType';

export const Articles: FC = async () => {
  // const [articles, setArticles] = useState<ZennArticleType[]>([]);
  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const result = await getZennArticles();
  //     setArticles(result);
  //   };
  //   void fetchArticles();
  // }, []);
  const articles = await getZennArticles();

  return (
    <section>
      <h1 className="mb-4 mt-12 text-2xl font-semibold">Zenn</h1>
      <div className="mb-10 grid gap-x-2 gap-y-3 sm:grid-cols-2">
        {articles?.map((article) => (
          <ZennArticle article={article} key={article.id}></ZennArticle>
        ))}
      </div>
    </section>
  );
};

export const getZennArticles: () => Promise<ZennArticleType[]> = async () => {
  const res = await fetch(
    'https://zenn.dev/api/articles?username=zhenyou620&order=latest',
    { next: { revalidate: 3600 } } // 1時間ごとに再検証
  );

  const data = await res.json();
  const articles: ZennArticleType[] = data?.articles?.slice(0, 10);

  return articles;
};
