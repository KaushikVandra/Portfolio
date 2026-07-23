"use client";

import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function WorkSection() {
  const projects = getFeaturedProjects();

  return (
    <section id="work" className="relative px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">
                03 — Selected Work
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                Projects that prove the craft
              </h2>
            </div>
            <Link
              href="/work"
              className="font-mono text-sm text-[var(--accent)] transition-opacity hover:opacity-80"
            >
              view_all() →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-1">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
