import { z } from "zod";

const serverEnvSchema = z.object({
  NOTION_TOKEN: z.string().min(1),
  NOTION_SUBSCRIBERS_DB_ID: z.string().min(1),
  ALLOWED_ORIGINS: z.string().default("https://marrylikeceo.com,https://www.marrylikeceo.com,https://marrylikeceocom.vercel.app"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("production"),
  RESEND_API_KEY: z.string().optional(),
});

type ServerEnv = z.infer<typeof serverEnvSchema>;

let _env: ServerEnv | undefined;

export const getEnv = (): ServerEnv => {
  if (!_env) {
    _env = serverEnvSchema.parse(process.env);
  }
  return _env;
};

export const env = new Proxy({} as ServerEnv, {
  get(_, prop: string) {
    return getEnv()[prop as keyof ServerEnv];
  },
});
