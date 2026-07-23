export type ExperienceEntry = {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "exp-1",
    period: "2024 — Present",
    role: "Full Stack Developer",
    company: "Tech Solutions Co.",
    location: "Ahmedabad, India",
    description:
      "Leading full-stack development on production SaaS products — owning features from API design through React UI to cloud deployment.",
    highlights: [
      "Architected NX monorepo with shared libraries across React and NestJS apps",
      "Integrated Razorpay payments and subscription billing for 2,000+ users",
      "Reduced API response times by 40% through query optimization and caching",
      "Mentored junior developers on TypeScript patterns and code review practices",
    ],
    technologies: ["React.js", "NestJS", "MongoDB", "Zustand", "TanStack Query", "NX"],
  },
  {
    id: "exp-2",
    period: "2023 — 2024",
    role: "Full Stack Developer",
    company: "Digital Agency",
    location: "Ahmedabad, India",
    description:
      "Rebuilt corporate web presence and delivered client-facing platforms with modern JAMstack and serverless architectures.",
    highlights: [
      "Rebuilt corporate website with Gatsby.js + headless WordPress CMS via GraphQL",
      "Achieved 95+ Lighthouse scores across performance, accessibility, and SEO",
      "Built patient mentoring platform on Next.js with AWS Lambda and PostgreSQL",
      "Implemented CI/CD pipelines cutting deployment time from hours to minutes",
    ],
    technologies: ["Next.js", "Gatsby.js", "GraphQL", "AWS Lambda", "PostgreSQL"],
  },
  {
    id: "exp-3",
    period: "2022 — 2023",
    role: "Junior Full Stack Developer",
    company: "Startup Studio",
    location: "Ahmedabad, India",
    description:
      "Started professional journey building MVPs and internal tools — rapidly growing from feature implementation to end-to-end ownership.",
    highlights: [
      "Shipped 4 client MVPs from wireframe to production within tight deadlines",
      "Designed RESTful APIs with Node.js and PostgreSQL data models",
      "Built responsive React interfaces with component-driven architecture",
      "Established testing practices with Jest and integration test coverage",
    ],
    technologies: ["React.js", "Node.js", "PostgreSQL", "TypeScript", "REST APIs"],
  },
];
