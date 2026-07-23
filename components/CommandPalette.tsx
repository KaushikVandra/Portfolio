"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/content/site";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 pt-[20vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-label="Command palette"
    >
      <div
        className="terminal-border w-full max-w-md bg-[var(--bg-elevated)] p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="border-b border-[var(--border)] px-3 py-2 font-mono text-xs text-[var(--fg-muted)]">
          jump_to --section
        </p>
        <ul className="py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-3 px-3 py-2 font-mono text-sm text-[var(--fg)] transition-colors hover:bg-[var(--accent-dim)] hover:text-[var(--accent)]"
                onClick={() => setOpen(false)}
              >
                <span className="text-[var(--accent)]">→</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="border-t border-[var(--border)] px-3 py-2 font-mono text-[10px] text-[var(--fg-muted)]">
          esc to close · try: help (coming soon)
        </p>
      </div>
    </div>
  );
}
