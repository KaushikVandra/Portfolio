"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig, navLinks } from "@/content/site";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md" : ""
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-mono text-sm text-[var(--accent)] transition-opacity hover:opacity-80"
        >
          ~/{siteConfig.name.split(" ")[0].toLowerCase()}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs tracking-wide text-[var(--fg-muted)] uppercase transition-colors hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <kbd className="hidden rounded border border-[var(--border)] px-2 py-1 font-mono text-[10px] text-[var(--fg-muted)] lg:inline-block">
            ⌘K
          </kbd>
          <button
            type="button"
            className="font-mono text-xs text-[var(--fg-muted)] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? "[close]" : "[menu]"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-sm text-[var(--fg-muted)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
