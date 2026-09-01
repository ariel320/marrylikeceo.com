import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { env } from "@/env/server";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
};

const checkOrigin = (request: NextRequest): boolean => {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const allowed = env.ALLOWED_ORIGINS.split(",").map((o) => o.trim());
  return allowed.includes(origin);
};

export const withValidation = <T>(
  schema: z.ZodSchema<T>,
  handler: (data: T, request: NextRequest) => Promise<NextResponse>,
) => {
  return async (request: NextRequest): Promise<NextResponse> => {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Try again later." },
        { status: 429 },
      );
    }

    if (!checkOrigin(request)) {
      return NextResponse.json(
        { success: false, message: "Origin not allowed." },
        { status: 403 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 },
      );
    }

    const result = schema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? "Validation error";
      return NextResponse.json(
        { success: false, message: firstError },
        { status: 400 },
      );
    }

    if (
      typeof body === "object" &&
      body !== null &&
      "honeypot" in body &&
      (body as { honeypot: string }).honeypot
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid submission." },
        { status: 400 },
      );
    }

    return handler(result.data, request);
  };
};
