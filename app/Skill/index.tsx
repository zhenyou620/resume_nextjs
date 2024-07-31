import type { FC } from 'react';
import { SkillCard } from './components/SkillCard';
import { skillsData } from './assets/skillsData';

export const Skill: FC = () => {
  return (
    <section>
      <h2 className="mb-2 mt-12 text-4xl font-semibold">Skills</h2>
      <div className="grid gap-x-3 gap-y-3 sm:grid-cols-3">
        <SkillCard skillsData={skillsData} />
      </div>
    </section>
  );
};
