export const siteConfig = {
  name: "Kaushik Vandra",
  title: "Kaushik Vandra — Full Stack Developer",
  titleTemplate: "%s | Kaushik Vandra",
  description:
    "Full Stack Developer with 3 years of experience building production web applications. React, Next.js, Node.js, NestJS, TypeScript — based in Ahmedabad, India.",
  url: "https://kaushikvandra.dev",
  ogImage: "/og-image.svg",
  locale: "en_IN",
  location: {
    city: "Ahmedabad",
    region: "Gujarat",
    country: "India",
  },
  jobTitle: "Full Stack Developer",
  yearsExperience: 3,
  email: "vandrakaushik2002@gmail.com",
  social: {
    github: "https://github.com/kaushikvandra",
    linkedin: "https://linkedin.com/in/kaushik-vandra",
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "AWS Lambda",
    "GraphQL",
    "Gatsby.js",
  ],
  education: {
    degree: "B.E. Computer Engineering",
    university: "Gujarat Technological University",
  },
  availability: "Open to opportunities",
} as const;

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
] as const;

export const faqs = [
  {
    question: "What does a Full Stack Developer do?",
    answer:
      "A Full Stack Developer builds and maintains both the frontend (what users see) and backend (servers, APIs, databases) of web applications. With 3 years of experience, I own features end-to-end — from architecture and implementation to deployment and iteration.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "My core stack includes React.js, Next.js, TypeScript, Node.js, and NestJS for application logic. I work with PostgreSQL and MongoDB for data, AWS Lambda for serverless workloads, GraphQL for flexible APIs, and Gatsby.js for performant static sites.",
  },
  {
    question: "Are you available for freelance or full-time work?",
    answer:
      "Yes — I'm currently open to opportunities including full-time roles, contract work, and interesting freelance projects. Based in Ahmedabad, India, and comfortable with remote collaboration.",
  },
] as const;
