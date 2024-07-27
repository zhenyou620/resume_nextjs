import { useState, useEffect, type FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

type Props = {
  url: string;
  altText: string;
  name: string;
  percentage: number;
};

const SkillCard: FC<Props> = ({ url, altText, name, percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, [percentage]);

  return (
    <Card className="w-">
      <CardContent>
        <div className="flex flex-row items-center gap-3 pt-4">
          <Image
            src={url}
            alt={altText}
            className={name === 'Figma' ? 'w-7' : 'w-9'}
          ></Image>
          <div className="w-full">
            <p className="text-base font-medium">{name}</p>
            <div className="flex items-center gap-1">
              <p className="text-xs">{percentage}%</p>
              <Progress value={progress} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
