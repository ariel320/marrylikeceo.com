import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  firstName: z.string().max(100).optional(),
  source: z.enum(["hero", "experience", "book", "final"]),
  honeypot: z.string().max(0).optional(),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;
