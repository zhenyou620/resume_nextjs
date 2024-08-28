import { type FC } from 'react';
import dayjs from 'dayjs';
import { Card, CardContent } from '../../../../components/ui/card';
import { ZennArticleType } from '../types/ZennArticleType';

type Props = {
  article: ZennArticleType;
};

export const ZennArticle: FC<Props> = ({ article }) => {
  const zennUrl = 'https://zenn.dev';

  return (
    <a key={article.id} href={zennUrl.concat(article.path)}>
      <Card className="pr-2 hover:bg-accent transition">
        <CardContent>
          <div className="flex flex-row items-center gap-3 pt-4">
            <span className="p-2 text-5xl">{article.emoji}</span>
            <div className="flex flex-col">
              <h2 className="line-clamp-2 text-base font-bold tracking-tight text-neutral-800">
                {article.title}
              </h2>
              <p className="text-xs font-medium text-neutral-500">
                {dayjs(article.published_at).format('YYYY/MM/DD')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
