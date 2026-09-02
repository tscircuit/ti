import { describe, expect, test } from "bun:test";

import type { SubcircuitDefinition } from "./model";
import {
  clearTiRecommendationCacheForTest,
  getTiRecommendations,
  matchTiRecommendedDefinitionIds,
} from "./ti-recommendations";

const definition = (id: string, title: string): SubcircuitDefinition => ({
  category: "Wireless",
  componentName: id,
  id,
  importPath: "@tsci/tscircuit.ti",
  ports: [],
  sourcePath: `lib/subcircuits/${id}.circuit.tsx`,
  title,
});

const definitions = [
  definition("cc2340", "Wireless MCU CC2340 R5"),
  definition("cc2564", "CC2564C Bluetooth Controller"),
  definition("antenna", "W3006 Wireless Connectivity Antenna"),
];

describe("TI recommendation matching", () => {
  test("matches exact titles and part-number tokens only", () => {
    expect([
      ...matchTiRecommendedDefinitionIds(["CC2340R5", "W3006"], definitions),
    ]).toEqual(["cc2340", "antenna"]);
  });

  test("retries a category after a failed request", async () => {
    clearTiRecommendationCacheForTest();
    const originalFetch = globalThis.fetch;
    let requestCount = 0;
    globalThis.fetch = (async () => {
      requestCount += 1;
      return requestCount === 1
        ? new Response(undefined, { status: 502 })
        : Response.json({
            recommendations: [
              {
                description: "Low-power wireless MCU.",
                name: "SimpleLink wireless MCU",
                partNumber: "CC2340R5",
              },
            ],
          });
    }) as unknown as typeof globalThis.fetch;

    try {
      await expect(
        getTiRecommendations("Wireless", definitions),
      ).rejects.toThrow("HTTP 502");
      expect(await getTiRecommendations("Wireless", definitions)).toMatchObject(
        {
          parts: [
            {
              description: "Low-power wireless MCU.",
              name: "SimpleLink wireless MCU",
              partNumber: "CC2340R5",
            },
          ],
        },
      );
      expect(requestCount).toBe(2);
    } finally {
      globalThis.fetch = originalFetch;
      clearTiRecommendationCacheForTest();
    }
  });

  test("requests recommendations from the wider TI portfolio", async () => {
    clearTiRecommendationCacheForTest();
    const originalFetch = globalThis.fetch;
    let requestedUrl = "";
    globalThis.fetch = (async (input: RequestInfo | URL) => {
      requestedUrl = String(input);
      return Response.json({ recommendations: [] });
    }) as unknown as typeof globalThis.fetch;

    try {
      await getTiRecommendations("Wireless", definitions);
      const query = new URL(requestedUrl, "http://localhost").searchParams;
      expect(query.get("category")).toBe("Wireless");
      expect(query.has("candidates")).toBe(false);
    } finally {
      globalThis.fetch = originalFetch;
      clearTiRecommendationCacheForTest();
    }
  });
});
