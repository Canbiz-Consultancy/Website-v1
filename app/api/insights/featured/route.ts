import { NextResponse } from "next/server";
import { getFeaturedInsights } from "../../../lib/strapi";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? Number(limitParam) : 2;
  const safeLimit = Number.isFinite(limit) && limit > 0 ? Math.min(limit, 12) : 2;

  try {
    const insights = await getFeaturedInsights(safeLimit);
    return NextResponse.json({ insights });
  } catch (error) {
    console.error("Featured insights API error:", error);
    return NextResponse.json({ insights: [] }, { status: 200 });
  }
}
