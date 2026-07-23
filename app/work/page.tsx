import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Selected Work",
  description:
    "Full Stack Developer portfolio projects — Handwriting Analysis Portal, Corporate Website Rebuild, Patient Mentoring Platform. React, Next.js, NestJS, AWS Lambda.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main className="px-6 pt-32 pb-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">
            All Projects
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Selected Work
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--fg-muted)]">
            Production applications built over 3 years of full-stack development —
            from SaaS platforms to headless CMS sites and serverless healthcare tools.
          </p>

          <div className="mt-12 grid gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/#contact"
              className="font-mono text-sm text-[var(--accent)] hover:opacity-80"
            >
              ← back to contact
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
