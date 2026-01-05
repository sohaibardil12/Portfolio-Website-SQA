
export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}

export interface Project {
  name: string;
  domain: string;
  tools: string[];
  responsibilities: string[];
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}
