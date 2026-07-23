"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/content/experience";
import { Reveal } from "./Reveal";

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative px-6 py-24 lg:px-12" ref={containerRef}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">
            02 — Experience
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            3 years of shipping production code
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--fg-muted)]">
            From MVPs to enterprise platforms — a growth arc from junior developer to
            full-stack owner of complex features.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute top-0 left-4 h-full w-px bg-[var(--border)] md:left-1/2 md:-translate-x-px">
            <motion.div
              className="w-full origin-top bg-[var(--accent)]"
              style={{ height: lineHeight }}
            />
          </div>

          <ol className="space-y-16">
            {experience.map((entry, index) => (
              <Reveal key={entry.id} delay={index}>
                <li
                  className={`relative grid gap-8 md:grid-cols-2 ${
                    index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="absolute left-2.5 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] md:left-1/2 md:-translate-x-1/2" />
                    <time className="font-mono text-sm text-[var(--accent)]">{entry.period}</time>
                    <h3 className="mt-2 font-display text-xl font-bold">{entry.role}</h3>
                    <p className="font-mono text-sm text-[var(--fg-muted)]">
                      {entry.company} · {entry.location}
                    </p>
                  </div>

                  <div className="terminal-border ml-12 bg-[var(--bg-card)] p-6 md:ml-0">
                    <p className="text-[var(--fg-muted)]">{entry.description}</p>
                    <ul className="mt-4 space-y-2">
                      {entry.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-[var(--fg)]">
                          <span className="text-[var(--accent)]">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="border border-[var(--border)] px-2 py-0.5 font-mono text-[10px] text-[var(--fg-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
