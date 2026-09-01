const BASE = "https://marrylikeceo.com";

/**
 * Entity layer for search engines and AI ingestion (GEO).
 * Descriptions use the locked-in phrases from the SEO/GEO strategy,
 * updated to current Experience terminology.
 */
export const EntitySchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        name: "Marry Like a CEO",
        url: BASE,
        logo: {
          "@type": "ImageObject",
          url: `${BASE}/images/logo-icon.png`,
        },
        description:
          "Marry Like a CEO teaches marriage strategy to ambitious women who want to approach love with the same intentionality they bring to business.",
        founder: { "@id": `${BASE}/#ariel` },
        sameAs: [
          "https://www.facebook.com/ariel.yankelewitz",
          "https://www.instagram.com/arielyankelewitz/",
          "https://www.tiktok.com/@arielyankelewitz1",
          "https://www.linkedin.com/in/arielayankelewitz/",
          "https://www.youtube.com/@ArielYankelewitz",
          "https://luma.com/marrylikeceo",
        ],
        email: "contact@marrylikeceo.com",
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: "Marry Like a CEO",
        publisher: { "@id": `${BASE}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${BASE}/#ariel`,
        name: "Ariel Yankelewitz",
        alternateName: "The Marriage Strategist",
        description:
          "Ariel Yankelewitz is The Marriage Strategist — a successful businesswoman who applied business frameworks to her own dating life after divorce and developed a proven methodology for finding a life partner.",
        jobTitle: "Founder",
        worksFor: { "@id": `${BASE}/#organization` },
        knowsAbout: [
          "marriage strategy",
          "relationship coaching for ambitious women",
          "business frameworks applied to dating",
        ],
      },
      {
        "@type": "Book",
        "@id": `${BASE}/#book`,
        name: "Marry Like a CEO: The Roadmap for Women Meant for Marriage",
        author: { "@id": `${BASE}/#ariel` },
        publisher: { "@id": `${BASE}/#organization` },
        description:
          "The complete Marry Like a CEO methodology in book form — business frameworks, real stories, and the exact system Ariel Yankelewitz used to find her second husband.",
        inLanguage: "en",
        url: `${BASE}/#book`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
