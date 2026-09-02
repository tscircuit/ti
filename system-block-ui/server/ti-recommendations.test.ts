import { describe, expect, test } from "bun:test";

import {
  clearTiRecommendationCachesForTest,
  extractMcpRecommendations,
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

  test("extracts distinct recommended parts with names and descriptions", () => {
    expect(
      extractMcpRecommendations({
        result: {
          content: [
            {
              text: JSON.stringify({
                finding_events: [
                  {
                    data: {
                      description: "Low-power wireless MCU.",
                      part_number: "CC2340R5",
                      product_name: "SimpleLink wireless MCU",
                    },
                    type: "finding",
                  },
                  { data: { part_number: "CC2340R5" }, type: "finding" },
                  { data: { part_number: "CC2564C" }, type: "finding" },
                ],
              }),
              type: "text",
            },
          ],
        },
      }),
    ).toEqual([
      {
        description: "Low-power wireless MCU.",
        name: "CC2340R5 SimpleLink wireless MCU",
        partNumber: "CC2340R5",
      },
      { description: "", name: "CC2564C", partNumber: "CC2564C" },
    ]);
  });

  test("extracts part numbers from structured MCP content", () => {
    expect(
      extractMcpRecommendations({
        result: {
          structuredContent: {
            finding_events: [
              { data: { part_number: "CC2540" }, type: "finding" },
            ],
          },
        },
      }),
    ).toEqual([{ description: "", name: "CC2540", partNumber: "CC2540" }]);
  });

  test("extracts part numbers from prose MCP content", () => {
    expect(
      extractMcpRecommendations({
        result: {
          content: [
            {
              text: [
                "Recommended products:",
                "- **CC2340R5** — Low-power wireless MCU.",
                "- **CC2564C** — Dual-mode Bluetooth controller.",
              ].join("\n"),
              type: "text",
            },
          ],
        },
      }),
    ).toEqual([
      { description: "", name: "CC2340R5", partNumber: "CC2340R5" },
      { description: "", name: "CC2564C", partNumber: "CC2564C" },
    ]);
  });

  test("builds display metadata from TI product family and feature facts", () => {
    expect(
      extractMcpRecommendations(
        {
          result: {
            content: [
              {
                text: JSON.stringify({
                  finding_events: [
                    {
                      data: {
                        parameters: [
                          { name: "Wide supply range" },
                          { name: "Thermal shutdown" },
                        ],
                        part_number: "DRV104",
                        product_family: "Motor Drivers",
                      },
                      type: "finding",
                    },
                  ],
                }),
                type: "text",
              },
            ],
          },
        },
        "Drivers",
      ),
    ).toEqual([
      {
        description:
          "From TI's Motor Drivers family, featuring Wide supply range and Thermal shutdown.",
        name: "DRV104 Motor Drivers",
        partNumber: "DRV104",
      },
    ]);
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

  test("accepts the versioned detailed response format", async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = (async () =>
      new Response(undefined, {
        status: 401,
      })) as unknown as typeof globalThis.fetch;
    try {
      const response = await handleTiRecommendationsRequest(
        new Request(
          "http://localhost/api/ti-recommendations?category=Wireless&format=details",
        ),
        { clientId: "test-id", clientSecret: "test-secret" },
      );
      expect(response.status).toBe(502);
    } finally {
      globalThis.fetch = originalFetch;
      clearTiRecommendationCachesForTest();
    }
  });

  test("reuses one TI recommendation call for the same category", async () => {
    clearTiRecommendationCachesForTest();
    const originalFetch = globalThis.fetch;
    const rpcMethods: string[] = [];
    let recommendationQuery = "";
    globalThis.fetch = (async (input, init) => {
      if (String(input).endsWith("/oauth")) {
        return Response.json({ access_token: "test-token", expires_in: 3600 });
      }
      const rpc = JSON.parse(String(init?.body)) as { method: string };
      rpcMethods.push(rpc.method);
      if (rpc.method === "tools/call") {
        recommendationQuery = (
          rpc as unknown as {
            params: { arguments: { query_input: { query: string } } };
          }
        ).params.arguments.query_input.query;
      }
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
                    {
                      data: {
                        description: "Low-power wireless MCU.",
                        part_number: "CC2340R5",
                        product_name: "SimpleLink wireless MCU",
                      },
                      type: "finding",
                    },
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
        "http://localhost/api/ti-recommendations?category=Wireless&candidates=WirelessMCU_CC2340R5%2CBluetoothController_CC2564C",
      );
      const credentials = { clientId: "test-id", clientSecret: "test-secret" };
      const first = await handleTiRecommendationsRequest(request, credentials);
      const second = await handleTiRecommendationsRequest(request, credentials);

      const payload = {
        recommendations: [
          {
            description: "Low-power wireless MCU.",
            name: "CC2340R5 SimpleLink wireless MCU",
            partNumber: "CC2340R5",
          },
        ],
      };
      expect(await first.json()).toEqual(payload);
      expect(await second.json()).toEqual(payload);
      expect(
        rpcMethods.filter((method) => method === "tools/call"),
      ).toHaveLength(1);
      expect(recommendationQuery).toContain(
        "WirelessMCU_CC2340R5, BluetoothController_CC2564C",
      );
    } finally {
      globalThis.fetch = originalFetch;
      clearTiRecommendationCachesForTest();
    }
  });
});
