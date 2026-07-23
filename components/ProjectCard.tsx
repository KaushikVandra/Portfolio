"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      style={{ perspective: 1000 }}
    >
      <Link
        ref={ref}
        href={`/work/${project.slug}`}
        className="group relative block"
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
      >
        <motion.article
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className={`terminal-border relative overflow-hidden bg-gradient-to-br ${project.gradient} bg-[var(--bg-card)] p-8 transition-shadow hover:shadow-[0_0_40px_var(--accent-dim)]`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[var(--accent)]">
                0{index + 1} / {project.duration}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold transition-colors group-hover:text-[var(--accent)]">
                {project.title}
              </h3>
              <p className="mt-2 text-[var(--fg-muted)]">{project.tagline}</p>
            </div>
            <span className="font-mono text-2xl text-[var(--border)] transition-colors group-hover:text-[var(--accent)]">
              ↗
            </span>
          </div>

          <motion.div
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            className="mt-6 border-t border-[var(--border)] pt-4"
          >
            <p className="font-mono text-xs text-[var(--accent)]">{project.outcome}</p>
            <p className="mt-1 font-mono text-xs text-[var(--fg-muted)]">{project.role}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 font-mono text-[10px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
