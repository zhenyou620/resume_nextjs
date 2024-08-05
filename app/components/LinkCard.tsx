import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const LinkCard: FC = () => {
  return (
    <>
      <div className="py-10 grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-6xl">🛠️</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-4xl text-right">Skills</span>
          </CardContent>
        </Card>
        <Card className="p-4 bg-slate-200 inline-block">
          <CardContent>
            <h2 className="text-4xl">Articles</h2>
            <span className="text-5xl">📰</span>
          </CardContent>
        </Card>
      </div>
      <div>
        <a className="inline-block">{/* <Image></Image> */}</a>
      </div>
    </>
  );
};
