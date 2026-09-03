import { afterEach, describe, expect, mock, spyOn, test } from "bun:test";

import type { SubcircuitDefinition } from "./model";
import {
  getTiRecommendations,
  matchTiRecommendedDefinitionIds,
  parseTiRecommendationResponse,
} from "./ti-recommendations";

const definition = (id: string, title: string): SubcircuitDefinition => ({
  id,
  title,
  category: "Power",
  componentName: id,
  importPath: "@tsci/tscircuit.ti",
  sourcePath: `lib/subcircuits/${id}.circuit.tsx`,
  ports: [],
});

const finding = (partNumber: string) => ({
  type: "finding",
  data: {
    part_number: partNumber,
    product_family: "Power management",
    parameters: [{ name: "Output voltage", value: "3.3 V" }],
  },
});

afterEach(() => mock.restore());

describe("TI MCP recommendation responses", () => {
  test("extracts each distinct finding and retains the complete decoded MCP JSON", () => {
    const response = {
      finding_events: [
        finding("TPS62840"),
        finding("TPS62840"),
        finding(" tps62840 "),
        finding("TPS7A02"),
        { type: "citations", data: ["https://www.ti.com/product/TPS62840"] },
      ],
      filter_events: [{ mutations: { family_gpns: ["UNRELATED123"] } }],
      is_cache_hit: true,
    };
    const result = parseTiRecommendationResponse({
      category: "Power",
      conversation: {
        request: "Recommend power parts",
        response: JSON.stringify(response),
        tool: "product_features_applications",
      },
      source: "ti-mcp",
    });

    expect(result.parts).toEqual([
      {
        partNumber: "TPS62840",
        name: "TPS62840",
        description: "Power management",
      },
      {
        partNumber: "TPS7A02",
        name: "TPS7A02",
        description: "Power management",
      },
    ]);
    expect(result.mcpResponse).toEqual(response);
  });

  test("keeps all returned parts after deduplicating parameter findings", () => {
    const partNumbers = Array.from(
      { length: 7 },
      (_, index) => `TPS123${index}`,
    );
    const result = parseTiRecommendationResponse({
      conversation: {
        response: {
          finding_events: partNumbers.flatMap((part) => [
            finding(part),
            finding(part),
          ]),
        },
      },
    });
    expect(result.parts.map((part) => part.partNumber)).toEqual(partNumbers);
  });

  test("supports legacy recommendation arrays and snake-case MCP product details", () => {
    const payload = {
      recommendations: [
        {
          partNumber: " TPS62840 ",
          name: " Buck regulator ",
          description: " Low power. ",
        },
        {
          part_number: "TPS7A02",
          product_name: "Low-IQ LDO",
          description: "Linear regulator.",
        },
        { partNumber: "TPS7A03", name: " " },
        null,
        "not a part",
        { partNumber: 123 },
        { partNumber: " " },
      ],
      metadata: { source: "ti-mcp" },
    };
    const result = parseTiRecommendationResponse(payload);
    expect(result.parts).toEqual([
      {
        partNumber: "TPS62840",
        name: "Buck regulator",
        description: "Low power.",
      },
      {
        partNumber: "TPS7A02",
        name: "Low-IQ LDO",
        description: "Linear regulator.",
      },
      { partNumber: "TPS7A03", name: "TPS7A03", description: "" },
    ]);
    expect(result.mcpResponse).toBe(payload);
  });

  test("reads structured recommendations inside the MCP response", () => {
    const response = {
      recommendations: [
        { part_number: "TMP117", product_name: "Temperature sensor" },
      ],
    };
    expect(
      parseTiRecommendationResponse({ conversation: { response } }).parts,
    ).toEqual([
      { partNumber: "TMP117", name: "Temperature sensor", description: "" },
    ]);
  });

  test("keeps empty, unexpected, and non-JSON responses inspectable without inventing parts", () => {
    for (const response of [
      null,
      [],
      { finding_events: [null, {}, { type: "finding", data: null }] },
      "No matching parts found.",
    ]) {
      const result = parseTiRecommendationResponse({
        conversation: { response },
      });
      expect(result.parts).toEqual([]);
      expect(result.mcpResponse).toEqual(response);
    }
  });
});

describe("TI recommendation badges", () => {
  test("matches local part numbers while preserving package suffix support", () => {
    const definitions = [
      definition("buck", "TPS62840 Buck Converter"),
      definition("ldo", "TPS7A02 LDO"),
      definition("other", "LM5050 Input Protection"),
    ];
    expect([
      ...matchTiRecommendedDefinitionIds(
        ["tps62840dlcr", "TPS7A02"],
        definitions,
      ),
    ]).toEqual(["buck", "ldo"]);
  });

  test("does not form a false match by joining different recommended part numbers", () => {
    expect(
      matchTiRecommendedDefinitionIds(
        ["TPS7", "A02"],
        [definition("ldo", "TPS7A02 LDO")],
      ).size,
    ).toBe(0);
  });
});

describe("TI recommendation requests", () => {
  test("uses only category and caches both parts and JSON while rematching local definitions", async () => {
    const response = { finding_events: [finding("TPS62840")] };
    const fetchMock = spyOn(globalThis, "fetch").mockResolvedValue(
      Response.json({
        conversation: { response: JSON.stringify(response) },
      }),
    );
    const [first, second] = await Promise.all([
      getTiRecommendations("test-cache", [
        definition("first", "TPS62840 Buck"),
      ]),
      getTiRecommendations("test-cache", [
        definition("second", "TPS62840 Buck"),
      ]),
    ]);
    const cached = await getTiRecommendations("test-cache", []);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const request = new URL(String(fetchMock.mock.calls[0]?.[0]));
    expect([...request.searchParams.entries()]).toEqual([
      ["category", "test-cache"],
    ]);
    expect([...first.definitionIds]).toEqual(["first"]);
    expect([...second.definitionIds]).toEqual(["second"]);
    expect(first.mcpResponse).toEqual(response);
    expect(cached.mcpResponse).toBe(first.mcpResponse);
    expect(cached.parts).toBe(first.parts);
    expect(cached.definitionIds.size).toBe(0);
  });

  test("does not reuse another category's response", async () => {
    const fetchMock = spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        Response.json({ recommendations: [{ partNumber: "TPS62840" }] }),
      )
      .mockResolvedValueOnce(
        Response.json({ recommendations: [{ partNumber: "TMP117" }] }),
      );
    const power = await getTiRecommendations("test-power", []);
    const sensors = await getTiRecommendations("test-sensors", []);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(power.parts[0]?.partNumber).toBe("TPS62840");
    expect(sensors.parts[0]?.partNumber).toBe("TMP117");
  });

  test("failed HTTP requests can be retried", async () => {
    const fetchMock = spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(new Response("Unavailable", { status: 503 }))
      .mockResolvedValueOnce(Response.json({ recommendations: [] }));
    await expect(getTiRecommendations("test-retry-http", [])).rejects.toThrow(
      "HTTP 503",
    );
    expect((await getTiRecommendations("test-retry-http", [])).parts).toEqual(
      [],
    );
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  test("malformed HTTP JSON does not poison the cache", async () => {
    const fetchMock = spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(new Response("not JSON"))
      .mockResolvedValueOnce(Response.json({ recommendations: [] }));
    await expect(getTiRecommendations("test-retry-json", [])).rejects.toThrow();
    expect((await getTiRecommendations("test-retry-json", [])).parts).toEqual(
      [],
    );
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
