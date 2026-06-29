// Type definitions for portfolio data
// Ensures type safety across the entire application

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  resumePath: string;
}

export interface HeroData {
  headline: string;
  subheadline: string;
  highlights: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface AboutData {
  summary: string;
  stats: Stat[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface ExperienceEntry {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Project {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  keyContributions: string[];
  technologies: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
}

export interface EducationEntry {
  id: number;
  degree: string;
  institution: string;
  year: string;
}

export interface ContactData {
  heading: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface ResumeCTAData {
  heading: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  hero: HeroData;
  about: AboutData;
  skills: SkillsData;
  experience: ExperienceEntry[];
  projects: Project[];
  certifications: Certification[];
  education: EducationEntry[];
  contact: ContactData;
  resumeCTA: ResumeCTAData;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
  [key: string]: string | undefined;
}
