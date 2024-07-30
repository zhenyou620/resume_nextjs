import type { FC } from 'react';
import { SkillCard } from './components/SkillCard';
import { SkillsType } from './types/SkillType';

interface SkillsProps {
  skillsData: SkillsType;
}

export const Skill: FC<SkillsProps> = ({ skillsData }) => {
  return (
    <section>
      <h2 className="mb-2 mt-12 text-4xl font-semibold">Skills</h2>
      <div className="grid gap-x-3 gap-y-3 sm:grid-cols-3">
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.name}
            url={skill.url ?? ''}
            altText={skill.altText ?? ''}
            name={skill.name}
            percentage={skill.percentage}
          ></SkillCard>
        ))}
      </div>
    </section>
  );
};
