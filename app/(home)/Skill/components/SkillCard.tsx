'use client';

import { useState, useEffect, type FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import { SkillsType, SkillType } from '../types/SkillType';

interface Props {
  skillsData: SkillsType;
}

export const SkillCard: FC<Props> = ({ skillsData }) => {
  const [progressValues, setProgressValues] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    const timers = skillsData.map((skill) => {
      return setTimeout(() => {
        setProgressValues((prev) => ({
          ...prev,
          [skill.name]: skill.percentage,
        }));
      }, 350);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [skillsData]);

  return (
    <>
      {skillsData.map((skill: SkillType) => (
        <Card className="" key={skill.name}>
          <CardContent>
            <div className="flex flex-row items-center gap-3 pt-5">
              <span className="w-12">
                <Image
                  src={skill.url}
                  alt={skill.altText}
                  width="36"
                  height="36"
                  className={`${skill.name === 'Figma' ? 'w-5' : 'w-8'}`}
                ></Image>
              </span>
              <div className="w-full">
                <p className="text-base font-medium">{skill.name}</p>
                <div className="flex items-center gap-1">
                  <p className="text-xs">{skill.percentage}%</p>
                  <Progress
                    className="h-1"
                    value={progressValues[skill.name] || 0}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
