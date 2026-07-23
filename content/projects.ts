export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  duration: string;
  outcome: string;
  description: string;
  problem: string;
  approach: string;
  stack: string[];
  result: string;
  lessons: string;
  keywords: string[];
  datePublished: string;
  featured: boolean;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "handwriting-analysis-portal",
    title: "Handwriting Analysis Portal",
    tagline: "AI-powered analysis platform with payments & monorepo architecture",
    role: "Lead Full Stack Developer",
    duration: "8 months",
    outcome: "2,000+ active users · 99.9% uptime",
    description:
      "A full-featured SaaS portal for handwriting analysis with user dashboards, payment processing, and real-time analysis results. Built as an NX monorepo with shared type-safe libraries across frontend and backend.",
    problem:
      "The client needed a scalable platform to deliver handwriting analysis as a paid service — with user accounts, secure payments, analysis history, and admin tooling. The existing prototype couldn't handle growth or maintain code quality across teams.",
    approach:
      "I architected an NX monorepo separating the React frontend, NestJS API, and shared libraries. State management used Zustand for UI state and TanStack Query for server state with optimistic updates. MongoDB handled flexible document storage for analysis results. Razorpay integration covered subscriptions and one-time payments with webhook-driven fulfillment.",
    stack: ["React.js", "NestJS", "Zustand", "TanStack Query", "MongoDB", "Razorpay", "NX Monorepo"],
    result:
      "Launched to 2,000+ active users with 99.9% uptime. The monorepo reduced duplicate code by 60% and enabled parallel frontend/backend development. Payment conversion improved 25% after checkout flow optimization.",
    lessons:
      "Monorepo tooling pays off early when types are shared across boundaries. Investing in TanStack Query's cache invalidation strategy upfront prevented countless stale-data bugs in production.",
    keywords: ["React", "NestJS", "MongoDB", "SaaS", "Full Stack"],
    datePublished: "2024-06-01",
    featured: true,
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    slug: "corporate-website-rebuild",
    title: "Corporate Website Rebuild",
    tagline: "Headless CMS migration with blazing-fast static delivery",
    role: "Full Stack Developer",
    duration: "4 months",
    outcome: "95+ Lighthouse score · 3× faster page loads",
    description:
      "Complete rebuild of a corporate website migrating from a slow WordPress monolith to Gatsby.js with headless WordPress CMS — delivering sub-second page loads and a modern content editing experience for the marketing team.",
    problem:
      "The existing WordPress site loaded in 6+ seconds, scored poorly on Core Web Vitals, and frustrated both visitors and content editors. SEO rankings were declining due to performance penalties.",
    approach:
      "I implemented Gatsby.js as the static site generator pulling content via GraphQL from headless WordPress. Image optimization, code splitting, and CDN delivery were configured from day one. Custom Gatsby plugins bridged WordPress ACF fields to typed GraphQL queries.",
    stack: ["Gatsby.js", "WordPress CMS", "GraphQL", "TypeScript", "Tailwind CSS"],
    result:
      "Achieved 95+ Lighthouse scores across all metrics. Page load times dropped from 6s to under 1.5s — a 3× improvement. Organic traffic increased 35% within three months post-launch.",
    lessons:
      "Headless CMS gives editors flexibility without sacrificing frontend performance. GraphQL's query efficiency matters when pages aggregate content from multiple WordPress post types.",
    keywords: ["Gatsby.js", "GraphQL", "WordPress", "Performance", "SEO"],
    datePublished: "2023-11-15",
    featured: true,
    gradient: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    slug: "patient-mentoring-platform",
    title: "Patient Mentoring Platform",
    tagline: "Healthcare mentorship with serverless backend",
    role: "Full Stack Developer",
    duration: "6 months",
    outcome: "500+ mentor sessions · HIPAA-aware architecture",
    description:
      "A Next.js platform connecting patients with mentors for guided health journeys. AWS Lambda powers the API layer with PostgreSQL for relational data — designed for scalability and cost efficiency.",
    problem:
      "Healthcare mentors needed a reliable platform to schedule sessions, track patient progress, and manage communications — without the overhead of always-on servers. Data privacy requirements demanded careful architecture.",
    approach:
      "Built the frontend with Next.js App Router for SSR and SEO. AWS Lambda functions handled API routes with connection pooling to PostgreSQL via RDS Proxy. Role-based access control separated mentor, patient, and admin views. Real-time notifications used SNS with email fallbacks.",
    stack: ["Next.js", "AWS Lambda", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    result:
      "Facilitated 500+ mentor sessions in the first quarter. Serverless architecture reduced infrastructure costs by 70% compared to EC2 estimates. Platform maintained 99.5% availability during peak usage.",
    lessons:
      "Lambda cold starts are manageable with provisioned concurrency for critical paths. Designing PostgreSQL schemas with healthcare audit trails from the start saved weeks of retrofitting.",
    keywords: ["Next.js", "AWS Lambda", "PostgreSQL", "Healthcare", "Serverless"],
    datePublished: "2024-01-20",
    featured: true,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
