import { NextResponse } from "next/server";
import { z } from "zod";
import { recommendActivities } from "@/lib/ai";

export const runtime = "nodejs";

const Body = z.object({
  destination: z.string().min(2).max(80),
  city: z.string().min(1).max(80),
});

export async function POST(req: Request) {
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const activities = await recommendActivities(parsed.data.destination, parsed.data.city);
  return NextResponse.json({ activities });
}
