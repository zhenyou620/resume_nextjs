import type { FC } from 'react';
import { SkillCard } from './components/SkillCard';
import { skillsData } from './assets/skillsData';

export const Skill: FC = () => {
  return (
    <section>
      <div className="flex items-baseline gap-4">
        <h2 className="mb-5 mt-12 text-2xl font-semibold text-primary">
          <span className="text-2lg">#</span> Skills
        </h2>
      </div>
      <div className="grid gap-x-3 gap-y-3 sm:grid-cols-3">
        <SkillCard skillsData={skillsData} />
      </div>
      <a className="text-muted-foreground text-lg">read more →</a>
    </section>
  );
};
