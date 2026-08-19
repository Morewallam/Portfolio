export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  org: string;
  dates: string;
  summary: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
