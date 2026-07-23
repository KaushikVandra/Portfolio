import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">{siteConfig.name}</p>
          <p className="mt-1 font-mono text-xs text-[var(--fg-muted)]">
            {siteConfig.jobTitle} · {siteConfig.location.city}, {siteConfig.location.country}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
          <Link href="/work" className="font-mono text-xs text-[var(--fg-muted)] hover:text-[var(--accent)]">
            Work
          </Link>
          <Link href="/contact" className="font-mono text-xs text-[var(--fg-muted)] hover:text-[var(--accent)]">
            Contact
          </Link>
          <Link href="/sitemap.xml" className="font-mono text-xs text-[var(--fg-muted)] hover:text-[var(--accent)]">
            Sitemap
          </Link>
        </nav>

        <p className="font-mono text-xs text-[var(--fg-muted)]">
          © {year} {siteConfig.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
