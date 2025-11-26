import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // temporary dummy handler so Vercel build passes
  return NextResponse.json({
    message: "Insights endpoint is working",
  });
}
/**import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * GET /api/insights
 * Returns precomputed feature sentiment + prioritized fixes data
 * for charts/dashboard and recommendations.
 */
/**
export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), "data");

    const featureSentimentPath = path.join(
      dataDir,
      "feature_sentiment.csv"
    );
    const prioritizedFixesPath = path.join(
      dataDir,
      "prioritized_fixes.json"
    );

    // Read feature_sentiment.csv
    const featureSentimentCsv = fs.readFileSync(
      featureSentimentPath,
      "utf-8"
    );

    // Read prioritized_fixes.json
    const prioritizedFixesRaw = fs.readFileSync(
      prioritizedFixesPath,
      "utf-8"
    );
    const prioritizedFixes = JSON.parse(prioritizedFixesRaw);

    return NextResponse.json(
      {
        featureSentimentCsv,
        prioritizedFixes,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Error in /api/insights:", err);
    return NextResponse.json(
      {
        error: "Failed to load insights data",
        details: err?.message ?? "Unknown error",
      },
      { status: 500 }
    );
  }
}
*/

