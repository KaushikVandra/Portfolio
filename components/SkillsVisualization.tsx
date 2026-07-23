"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const SkillsScene = dynamic(
  () => import("./SkillsScene").then((m) => m.SkillsScene),
  { ssr: false }
);

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Gatsby.js", "Tailwind CSS", "Zustand", "TanStack Query"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "GraphQL", "REST APIs", "AWS Lambda"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Infra & Tools",
    skills: ["AWS", "Docker", "Git", "CI/CD", "NX Monorepo", "Vercel"],
  },
];

export function SkillsVisualization() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">
            04 — Skills & Stack
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Full-stack toolkit
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            {skillGroups.map((group, gi) => (
              <Reveal key={group.category} delay={gi}>
                <div>
                  <h3 className="font-mono text-sm text-[var(--accent)]">{group.category}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill, si) => (
                      <li
                        key={skill}
                        className="terminal-border bg-[var(--bg-card)] px-3 py-1.5 font-mono text-xs text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        style={{ transitionDelay: `${si * 30}ms` }}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div className="terminal-border relative flex h-80 items-center justify-center overflow-hidden bg-[var(--bg-card)] lg:h-full lg:min-h-[400px]">
              {!reduceMotion ? (
                <Suspense
                  fallback={
                    <div className="h-32 w-32 animate-pulse rounded-full border border-[var(--accent)] opacity-30" />
                  }
                >
                  <SkillsScene />
                </Suspense>
              ) : (
                <div className="font-mono text-sm text-[var(--fg-muted)]">
                  [3D stack visualization]
                </div>
              )}
              <p className="absolute bottom-4 left-4 font-mono text-[10px] text-[var(--fg-muted)]">
                orbiting_stack.render()
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
