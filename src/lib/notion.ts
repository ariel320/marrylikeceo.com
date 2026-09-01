import { Client } from "@notionhq/client";
import { env } from "@/env/server";

let _notion: Client | undefined;

const getNotion = () => {
  if (!_notion) {
    _notion = new Client({ auth: env.NOTION_TOKEN });
  }
  return _notion;
};

const sourceMap: Record<string, string> = {
  hero: "Community",
  experience: "Experience",
  book: "Book",
  final: "Experience",
};

const DEFAULT_SOURCE = "Community";

export const addSubscriber = async (
  email: string,
  source: string,
  firstName?: string,
) => {
  const sourceName = sourceMap[source] ?? DEFAULT_SOURCE;

  try {
    return await getNotion().pages.create({
      parent: { database_id: env.NOTION_SUBSCRIBERS_DB_ID },
      properties: {
        Name: {
          title: [{ text: { content: firstName || email } }],
        },
        Email: {
          email: email,
        },
        Source: {
          select: { name: sourceName },
        },
      },
    });
  } catch (error) {
    console.error("Notion API error:", {
      source,
      sourceName,
      email,
      error: error instanceof Error ? error.message : error,
    });
    throw error;
  }
};
