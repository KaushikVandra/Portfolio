"use client";

import { useState } from "react";
import { faqs } from "@/content/site";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Common questions
          </h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i}>
              <div className="terminal-border bg-[var(--bg-card)]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-display text-base font-medium">{faq.question}</span>
                  <span className="font-mono text-[var(--accent)]">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="border-t border-[var(--border)] px-6 py-4">
                    <p className="text-[var(--fg-muted)] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
