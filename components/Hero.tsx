"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { Scene3D } from "./Scene3D";
import { fadeUp } from "@/lib/animations";

const introLines = [
  "> initializing portfolio...",
  "> loading 3 years of production experience",
  "> status: ready",
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setShowMain(true);
      return;
    }

    const currentLine = introLines[lineIndex];
    if (!currentLine) {
      setShowMain(true);
      return;
    }

    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= currentLine.length) {
        setDisplayText(currentLine.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setLineIndex((i) => i + 1);
          setDisplayText("");
        }, 400);
      }
    }, 28);

    return () => clearInterval(typeInterval);
  }, [lineIndex, reduceMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-16 lg:px-12"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <Scene3D className="pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {!showMain && (
          <p
            className="mb-8 font-mono text-sm text-[var(--accent)]"
            aria-live="polite"
          >
            {displayText}
            <span className="blink">▊</span>
          </p>
        )}

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate={showMain || reduceMotion ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-4 font-mono text-sm tracking-widest text-[var(--accent)] uppercase"
          >
            {"// "}{siteConfig.jobTitle} · {siteConfig.yearsExperience} years · {siteConfig.location.city}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl"
          >
            <span className="text-gradient">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-2xl text-lg text-[var(--fg-muted)] sm:text-xl"
          >
            I build production-grade web applications end-to-end — from React & Next.js
            frontends to NestJS APIs, databases, and cloud deployment.{" "}
            <span className="text-[var(--fg)]">
              {siteConfig.yearsExperience} years of shipping real products.
            </span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-none border border-[var(--accent)] bg-[var(--accent-dim)] px-6 py-3 font-mono text-sm text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--bg)]"
            >
              <span>view_projects()</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[var(--border)] px-6 py-3 font-mono text-sm text-[var(--fg-muted)] transition-colors hover:border-[var(--fg-muted)] hover:text-[var(--fg)]"
            >
              get_in_touch()
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showMain || reduceMotion ? 1 : 0, y: showMain || reduceMotion ? 0 : 20 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-24 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="font-mono text-xs text-[var(--fg-muted)]">scroll.down()</span>
          <div className="h-12 w-px animate-pulse bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
