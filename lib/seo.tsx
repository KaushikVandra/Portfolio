import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

const baseUrl = siteConfig.url;

export function createMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const pageTitle = title
    ? siteConfig.titleTemplate.replace("%s", title)
    : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const url = `${baseUrl}${path}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
    keywords: [
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Ahmedabad",
      "TypeScript",
      "Node.js",
    ],
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.jobTitle,
    url: baseUrl,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    sameAs: Object.values(siteConfig.social),
    knowsAbout: siteConfig.knowsAbout,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.education.university,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    author: { "@type": "Person", name: siteConfig.name },
  };
}

export function creativeWorkJsonLd(project: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${baseUrl}/work/${project.slug}`,
    datePublished: project.datePublished,
    author: { "@type": "Person", name: siteConfig.name },
    keywords: project.keywords.join(", "),
    image: siteConfig.ogImage,
  };
}

export function faqJsonLd(
  faqs: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
