"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (reduceMotion) return;

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor]");
      if (interactive) {
        setHovering(true);
        setLabel(interactive.getAttribute("data-cursor-label") || "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden mix-blend-difference md:block"
        animate={{ x: pos.x - (hovering ? 24 : 8), y: pos.y - (hovering ? 24 : 8) }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div
          className={`rounded-full border border-[var(--accent)] transition-all duration-200 ${
            hovering ? "h-12 w-12 bg-[var(--accent-dim)]" : "h-4 w-4 bg-[var(--accent)]"
          }`}
        />
        {label && (
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[var(--accent)] whitespace-nowrap">
            {label}
          </span>
        )}
      </motion.div>
      <style jsx global>{`
        @media (min-width: 768px) {
          body { cursor: none; }
          a, button { cursor: none; }
        }
      `}</style>
    </>
  );
}
