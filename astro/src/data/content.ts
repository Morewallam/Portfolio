import type { Project, ExperienceItem, SkillGroup, Testimonial, SocialLink } from "./types";

export const site = {
  name: "Your Name",
  tagline: "Frontend developer building fast, accessible web apps",
  subheading: "I design and build performant interfaces, from prototype to production.",
  email: "hello@yourname.dev",
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A short description of the problem, your approach, and the outcome.",
    tech: ["React", "TypeScript", "Node"],
    image: "/images/project-one.jpg",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourname/project-one",
    featured: true,
  },
  {
    title: "Project Two",
    description: "A short description of the problem, your approach, and the outcome.",
    tech: ["Astro", "Three.js"],
    image: "/images/project-two.jpg",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourname/project-two",
  },
  {
    title: "Project Three",
    description: "A short description of the problem, your approach, and the outcome.",
    tech: ["Vue", "Tailwind"],
    image: "/images/project-three.jpg",
    codeUrl: "https://github.com/yourname/project-three",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Engineer",
    org: "Company Name",
    dates: "2023 — Present",
    summary: "One or two lines on scope and impact in this role.",
  },
  {
    role: "Web Developer",
    org: "Previous Company",
    dates: "2021 — 2023",
    summary: "One or two lines on scope and impact in this role.",
  },
];

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
  { category: "Frameworks", items: ["Astro", "React", "Vue"] },
  { category: "Tools", items: ["Vite", "Git", "Figma"] },
  { category: "3D / Graphics", items: ["Three.js", "WebGL", "GLSL"] },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Great to work with — shipped on time, every time.",
    name: "Jane Doe",
    role: "Engineering Lead, Company",
  },
];

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/yourname", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/yourname", icon: "linkedin" },
  { label: "Email", url: "mailto:hello@yourname.dev", icon: "mail" },
];
