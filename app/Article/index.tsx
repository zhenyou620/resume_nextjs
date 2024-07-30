import { useEffect, useState, type FC } from 'react';
import { ZennArticle } from './components/ZennArticle';
import { type ZennArticleType } from './types/ZennArticleType';
// import { getZennArticles } from '@/utils/getArticles';

const ZennArticles: FC = () => {
  const [articles, setArticles] = useState<ZennArticleType[]>([]);
  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const result = await getZennArticle();
  //     setArticles(result);
  //   };
  //   void fetchArticles();
  // }, []);

  //   useEffect(() => {
  //     const result: ZennArticleType[] = getZennArticles();
  //     setArticles(result);
  //   }, []);

  return (
    <section>
      <h1 className="mb-4 mt-12 text-4xl font-semibold">Zenn</h1>
      <div className="mb-10 grid gap-x-2 gap-y-3 sm:grid-cols-2">
        {articles.map((article) => (
          <ZennArticle article={article} key={article.id}></ZennArticle>
        ))}
      </div>
    </section>
  );
};

export default ZennArticles;
