import type { FC } from 'react';
import { SkillCard } from './components/SkillCard';
import { skillsData } from './assets/skillsData';

export const Skill: FC = () => {
  return (
    <section className="grid">
      <h2 className="mt-12 text-4xl font-semibold text-primary mb-5">
        # Skills
      </h2>
      <div className="grid gap-x-3 gap-y-3 sm:grid-cols-3">
        <SkillCard skillsData={skillsData} />
      </div>
      <a className="text-lg text-muted-foreground text-right mr-1 mt-1">
        👉 read more
      </a>
    </section>
  );
};
