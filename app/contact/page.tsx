import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name}, Full Stack Developer in ${siteConfig.location.city}. Open to full-time and freelance opportunities. React, Next.js, Node.js specialist.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
