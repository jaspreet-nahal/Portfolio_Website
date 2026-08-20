export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'app' | 'research';
  link: string;
  featured?: boolean;
}

export interface SkillData {
  name: string;
  proficiency: number;
}