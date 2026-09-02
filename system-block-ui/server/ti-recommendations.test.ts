import { describe, expect, test } from "bun:test";

import {
  clearTiRecommendationCachesForTest,
  extractMcpRecommendedPartNumbers,
  findProductSelectionTool,
  handleTiRecommendationsRequest,
  parseMcpResponse,
} from "./ti-recommendations";

describe("TI MCP recommendation transport", () => {
  test("parses JSON-RPC from an SSE response", () => {
    expect(
      parseMcpResponse(
        'event: message\ndata: {"jsonrpc":"2.0","id":2,"result":{"content":[]}}\n',
      ),
    ).toEqual({ jsonrpc: "2.0", id: 2, result: { content: [] } });
  });

  test("extracts distinct recommended part numbers from finder output", () => {
    expect(
      extractMcpRecommendedPartNumbers({
        result: {
          content: [
            {
              text: JSON.stringify({
                finding_events: [
                  { data: { part_number: "CC2340R5" }, type: "finding" },
                  { data: { part_number: "CC2340R5" }, type: "finding" },
                  { data: { part_number: "CC2564C" }, type: "finding" },
                ],
              }),
              type: "text",
            },
          ],
        },
      }),
    ).toEqual(["CC2340R5", "CC2564C"]);
  });

  test("extracts part numbers from structured MCP content", () => {
    expect(
      extractMcpRecommendedPartNumbers({
        result: {
          structuredContent: {
            finding_events: [
              { data: { part_number: "CC2540" }, type: "finding" },
            ],
          },
        },
      }),
    ).toEqual(["CC2540"]);
  });

  test("discovers the current product-selection tool from its capability", () => {
    expect(
      findProductSelectionTool({
        result: {
          tools: [
            { name: "find_tech_doc" },
            {
              description:
                "Use for general product recommendation and selection queries.",
              inputSchema: {
                properties: { query_input: { type: "object" } },
                required: ["query_input"],
              },
              name: "product_features_applications",
            },
          ],
        },
      }),
    ).toEqual({
      name: "product_features_applications",
      wrapsQueryInput: true,
    });
  });

  test("rejects unsupported categories without contacting TI", async () => {
    const response = await handleTiRecommendationsRequest(
      new Request(
        "http://localhost/api/ti-recommendations?category=not-a-category",
      ),
      { clientId: "unused", clientSecret: "unused" },
    );
    expect(response.status).toBe(400);
  });

  test("rejects cache-busting query parameters", async () => {
    const response = await handleTiRecommendationsRequest(
      new Request(
        "http://localhost/api/ti-recommendations?category=Wireless&nonce=1",
      ),
      { clientId: "unused", clientSecret: "unused" },
    );
    expect(response.status).toBe(400);
  });

  test("reuses one TI recommendation call for the same category", async () => {
    clearTiRecommendationCachesForTest();
    const originalFetch = globalThis.fetch;
    const rpcMethods: string[] = [];
    globalThis.fetch = (async (input, init) => {
      if (String(input).endsWith("/oauth")) {
        return Response.json({ access_token: "test-token", expires_in: 3600 });
      }
      const rpc = JSON.parse(String(init?.body)) as { method: string };
      rpcMethods.push(rpc.method);
      if (rpc.method === "notifications/initialized") {
        return new Response(undefined, { status: 202 });
      }
      const result =
        rpc.method === "tools/list"
          ? {
              tools: [
                {
                  inputSchema: {
                    properties: { query_input: { type: "object" } },
                    required: ["query_input"],
                  },
                  name: "product_features_applications",
                },
              ],
            }
          : rpc.method === "tools/call"
            ? {
                structuredContent: {
                  finding_events: [
                    { data: { part_number: "CC2340R5" }, type: "finding" },
                  ],
                },
              }
            : {};
      return new Response(
        `data: ${JSON.stringify({ id: 1, jsonrpc: "2.0", result })}\n`,
        { headers: { "Mcp-Session-Id": "test-session" } },
      );
    }) as typeof globalThis.fetch;

    try {
      const request = new Request(
        "http://localhost/api/ti-recommendations?category=Wireless",
      );
      const credentials = { clientId: "test-id", clientSecret: "test-secret" };
      const first = await handleTiRecommendationsRequest(request, credentials);
      const second = await handleTiRecommendationsRequest(request, credentials);

      expect(await first.json()).toEqual({ partNumbers: ["CC2340R5"] });
      expect(await second.json()).toEqual({ partNumbers: ["CC2340R5"] });
      expect(
        rpcMethods.filter((method) => method === "tools/call"),
      ).toHaveLength(1);
    } finally {
      globalThis.fetch = originalFetch;
      clearTiRecommendationCachesForTest();
    }
  });
});
