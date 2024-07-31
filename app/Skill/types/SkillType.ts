export interface SkillType {
  url: string;
  altText: string;
  name: string;
  percentage: number;
  category: 'design' | 'language' | 'framework' | 'tool';
}

export type SkillsType = SkillType[];
