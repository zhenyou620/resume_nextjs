// 'use client';

import { FC } from 'react';
import { ZennArticle } from './components/ZennArticle';
import { ZennArticleType } from './types/ZennArticleType';
import Link from 'next/link';

export const Articles: FC = async () => {
  const articles = await getZennArticles();

  return (
    <section className="grid">
      <h2 className="mb-7 mt-16 text-3xl font-semibold">Articles</h2>
      <div className="grid gap-x-2 gap-y-3 sm:grid-cols-2">
        {articles?.map((article) => (
          <ZennArticle article={article} key={article.id}></ZennArticle>
        ))}
      </div>
      <Link
        href="articles"
        className="mr-1 mt-3 mb-12 text-lg text-muted-foreground text-right cursor-pointer hover:text-primary transition"
      >
        👉 read more
      </Link>
    </section>
  );
};

export const getZennArticles: () => Promise<ZennArticleType[]> = async () => {
  const res = await fetch(
    'https://zenn.dev/api/articles?username=zhenyou620&order=latest',
    { next: { revalidate: 3600 } }
  );

  const data = await res.json();
  const articles: ZennArticleType[] = data?.articles?.slice(0, 6);

  return articles;
};
