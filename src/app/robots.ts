import type { MetadataRoute } from "next";

/**
 * Crawl policy: fully open, including AI crawlers.
 * GEO decision — being ingested and cited by ChatGPT, Claude,
 * Perplexity, and Google AI Overviews is a growth channel for
 * a category-defining brand, not a risk.
 */
const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://marrylikeceo.com/sitemap.xml",
    host: "https://marrylikeceo.com",
  };
};

export default robots;
