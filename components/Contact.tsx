"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { Reveal } from "./Reveal";

export function Contact() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * 0.2,
      y: (e.clientY - cy) * 0.2,
    });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <section id="contact" className="relative px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">
            05 — Contact
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let&apos;s build something
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <div className="terminal-border mt-12 bg-[var(--bg-card)] p-8 lg:p-12">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="font-mono text-sm text-[var(--accent)]">
                {siteConfig.availability}
              </span>
            </div>

            <p className="mt-6 max-w-xl text-lg text-[var(--fg-muted)]">
              Looking for a Full Stack Developer with {siteConfig.yearsExperience} years of
              experience in React, Next.js, and Node.js? I&apos;d love to hear about your project.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <motion.a
                ref={btnRef}
                href={`mailto:${siteConfig.email}`}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                animate={{ x: pos.x, y: pos.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="inline-flex items-center gap-2 border border-[var(--accent)] bg-[var(--accent)] px-8 py-4 font-mono text-sm font-medium text-[var(--bg)] transition-shadow hover:shadow-[0_0_30px_var(--accent-dim)]"
              >
                send_email()
              </motion.a>

              <div className="flex gap-4">
                {Object.entries(siteConfig.social).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[var(--fg-muted)] uppercase transition-colors hover:text-[var(--accent)]"
                    aria-label={key}
                  >
                    {key}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
