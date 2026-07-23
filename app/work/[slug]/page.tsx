import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { projects, getProjectBySlug } from "@/content/projects";
import { createMetadata, JsonLd, creativeWorkJsonLd } from "@/lib/seo";
import { siteConfig } from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/work/${project.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd data={creativeWorkJsonLd(project)} />
      <Navigation />
      <main className="px-6 pt-32 pb-24 lg:px-12">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/work"
            className="font-mono text-sm text-[var(--accent)] hover:opacity-80"
          >
            ← all projects
          </Link>

          <header className="mt-8">
            <p className="font-mono text-xs text-[var(--accent)]">
              {project.role} · {project.duration}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-[var(--fg-muted)]">{project.tagline}</p>
            <p className="mt-2 font-mono text-sm text-[var(--accent)]">{project.outcome}</p>
          </header>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border border-[var(--border)] px-3 py-1 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="prose-custom mt-12 space-y-8 text-[var(--fg-muted)] leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--fg)]">The Problem</h2>
              <p className="mt-4">{project.problem}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--fg)]">My Approach</h2>
              <p className="mt-4">{project.approach}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--fg)]">The Result</h2>
              <p className="mt-4">{project.result}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--fg)]">Lessons Learned</h2>
              <p className="mt-4">{project.lessons}</p>
            </section>
          </div>

          <footer className="terminal-border mt-12 bg-[var(--bg-card)] p-6">
            <p className="font-mono text-sm text-[var(--fg-muted)]">
              Built by {siteConfig.name} — Full Stack Developer with{" "}
              {siteConfig.yearsExperience} years of experience.
            </p>
            <Link
              href="/#contact"
              className="mt-4 inline-block font-mono text-sm text-[var(--accent)] hover:opacity-80"
            >
              discuss a similar project →
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
