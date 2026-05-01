/*
"use server";

import { BetaAnalyticsDataClient } from "@google-analytics/data";

const propertyId = process.env.GA_PROPERTY_ID;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
});

export async function getVisitorStats() {
  if (!process.env.GA_CLIENT_EMAIL || !process.env.GA_PRIVATE_KEY || !propertyId) {
    return { total: 0, today: 0 };
  }

  try {
    // 1. Get Total Visitors (from the beginning of time - approx)
    const [totalResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: "2020-01-01", endDate: "today" }],
      metrics: [{ name: "activeUsers" }],
    });

    // 2. Get Today's Visitors
    const [todayResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: "today", endDate: "today" }],
      metrics: [{ name: "activeUsers" }],
    });

    const total = parseInt(totalResponse.rows?.[0]?.metricValues?.[0]?.value || "0");
    const today = parseInt(todayResponse.rows?.[0]?.metricValues?.[0]?.value || "0");

    return { total, today };
  } catch (error) {
    console.error("Failed to fetch Google Analytics stats:", error);
    return { total: 0, today: 0 };
  }
}
*/
export async function getVisitorStats() {
  return { total: 0, today: 0 };
}
