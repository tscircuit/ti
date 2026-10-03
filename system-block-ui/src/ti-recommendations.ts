import type { SubcircuitDefinition } from "./model";

const TI_RECOMMENDATIONS_URL =
  import.meta.env.VITE_TI_RECOMMENDATIONS_URL?.trim() ||
  "https://ti-mcp-cache-proxy.seve.workers.dev/api/ti-recommendations";

export interface TiRecommendedPart {
  description: string;
  name: string;
  partNumber: string;
}

interface TiRecommendationData {
  mcpResponse: unknown;
  parts: readonly TiRecommendedPart[];
}

export interface TiRecommendations extends TiRecommendationData {
  definitionIds: ReadonlySet<string>;
}

const recommendationCache = new Map<string, Promise<TiRecommendationData>>();

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function parseTiRecommendationResponse(
  payload: unknown,
): TiRecommendationData {
  const conversation = isRecord(payload) ? payload.conversation : undefined;
  let mcpResponse =
    isRecord(conversation) && "response" in conversation
      ? conversation.response
      : payload;
  if (typeof mcpResponse === "string") {
    try {
      mcpResponse = JSON.parse(mcpResponse);
    } catch {
      // Keep non-JSON MCP responses available in the viewer, too.
    }
  }

  let recommendations: unknown[] = [];
  if (isRecord(payload) && Array.isArray(payload.recommendations)) {
    recommendations = payload.recommendations;
  } else if (isRecord(mcpResponse)) {
    if (Array.isArray(mcpResponse.recommendations)) {
      recommendations = mcpResponse.recommendations;
    } else if (Array.isArray(mcpResponse.finding_events)) {
      // Each product can have many findings (one per parameter). Only findings
      // are recommendations; filter_events also contain unrelated family parts.
      recommendations = mcpResponse.finding_events
        .filter((event) => isRecord(event) && event.type === "finding")
        .map((event) => event.data);
    }
  }

  const parts = new Map<string, TiRecommendedPart>();
  for (const recommendation of recommendations) {
    if (!isRecord(recommendation)) continue;
    const partNumber =
      readString(recommendation.partNumber) ||
      readString(recommendation.part_number);
    if (!partNumber) continue;
    const key = normalizePartText(partNumber);
    if (!key || parts.has(key)) continue;
    parts.set(key, {
      partNumber,
      name:
        readString(recommendation.name) ||
        readString(recommendation.product_name) ||
        partNumber,
      description:
        readString(recommendation.description) ||
        readString(recommendation.product_family),
    });
  }

  return { mcpResponse, parts: [...parts.values()] };
}

function normalizePartText(value: string): string {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replaceAll(/[^a-z0-9]/g, "");
}

function partNumberTokens(title: string): readonly string[] {
  return (title.match(/[a-z0-9]+(?:[-/][a-z0-9]+)*/gi) ?? [])
    .filter((token) => /\d/.test(token))
    .map(normalizePartText)
    .filter((token) => token.length >= 4);
}

export function matchTiRecommendedDefinitionIds(
  partNumbers: readonly string[],
  definitions: readonly SubcircuitDefinition[],
): ReadonlySet<string> {
  const normalizedRecommendations = partNumbers.map(normalizePartText);
  const matches = definitions
    .filter((definition) => {
      const normalizedTitle = normalizePartText(definition.title);
      return normalizedRecommendations.some(
        (recommendation) =>
          (normalizedTitle.length >= 8 &&
            recommendation.includes(normalizedTitle)) ||
          partNumberTokens(definition.title).some((token) =>
            recommendation.includes(token),
          ),
      );
    })
    .map((definition) => definition.id);
  return new Set(matches);
}

export function getTiRecommendations(
  category: string,
  definitions: readonly SubcircuitDefinition[],
): Promise<TiRecommendations> {
  let data = recommendationCache.get(category);
  if (!data) {
    const request = (async () => {
      const query = new URLSearchParams({ category });
      const endpoint = new URL(TI_RECOMMENDATIONS_URL);
      endpoint.search = query.toString();
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(
          `TI recommendations failed with HTTP ${response.status}.`,
        );
      }
      return parseTiRecommendationResponse(await response.json());
    })();
    data = request;
    recommendationCache.set(category, request);
    void request.catch(() => {
      if (recommendationCache.get(category) === request) {
        recommendationCache.delete(category);
      }
    });
  }

  return data.then((recommendations) => ({
    ...recommendations,
    definitionIds: matchTiRecommendedDefinitionIds(
      recommendations.parts.map((part) => part.partNumber),
      definitions,
    ),
  }));
}
