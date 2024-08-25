import type { FC } from 'react';
import { SkillCard } from './components/SkillCard';
import { skillsData } from './assets/skillsData';

export const Skill: FC = () => {
  return (
    <section className="grid">
      <h2 className="mt-12 text-3xl font-semibold text-primary mb-7 ">
        Skills
      </h2>
      <div className="grid gap-x-3 gap-y-3 sm:grid-cols-3">
        <SkillCard skillsData={skillsData} />
      </div>
    </section>
  );
};
