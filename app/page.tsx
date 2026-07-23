import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { WorkSection } from "@/components/WorkSection";
import { SkillsVisualization } from "@/components/SkillsVisualization";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { JsonLd, faqJsonLd } from "@/lib/seo";
import { faqs } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Navigation />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <WorkSection />
        <SkillsVisualization />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
