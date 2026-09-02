import type { SubcircuitDefinition } from "./model";

interface TiRecommendationResponse {
  recommendations?: unknown;
}

export interface TiRecommendedPart {
  description: string;
  name: string;
  partNumber: string;
}

export interface TiRecommendations {
  definitionIds: ReadonlySet<string>;
  parts: readonly TiRecommendedPart[];
}

const recommendationCache = new Map<
  string,
  Promise<readonly TiRecommendedPart[]>
>();

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
  const normalizedRecommendation = normalizePartText(partNumbers.join(" "));
  const matches = definitions
    .filter((definition) => {
      const normalizedTitle = normalizePartText(definition.title);
      if (
        normalizedTitle.length >= 8 &&
        normalizedRecommendation.includes(normalizedTitle)
      ) {
        return true;
      }
      return partNumberTokens(definition.title).some((token) =>
        normalizedRecommendation.includes(token),
      );
    })
    .map((definition) => definition.id);
  return new Set(matches);
}

export function getTiRecommendations(
  category: string,
  definitions: readonly SubcircuitDefinition[],
): Promise<TiRecommendations> {
  let parts = recommendationCache.get(category);
  if (!parts) {
    const request = (async () => {
      const query = new URLSearchParams({
        category,
        format: "details",
      });
      const response = await fetch(`/api/ti-recommendations?${query}`);
      if (!response.ok) {
        throw new Error(
          `TI recommendations failed with HTTP ${response.status}.`,
        );
      }
      const payload = (await response.json()) as TiRecommendationResponse;
      if (Array.isArray(payload.recommendations)) {
        return payload.recommendations
          .filter((recommendation): recommendation is Record<string, unknown> =>
            Boolean(recommendation && typeof recommendation === "object"),
          )
          .map((recommendation) => ({
            description:
              typeof recommendation.description === "string"
                ? recommendation.description.trim()
                : "",
            name:
              typeof recommendation.name === "string"
                ? recommendation.name.trim()
                : "",
            partNumber:
              typeof recommendation.partNumber === "string"
                ? recommendation.partNumber.trim()
                : "",
          }))
          .filter((recommendation) => recommendation.partNumber)
          .map((recommendation) => ({
            ...recommendation,
            name: recommendation.name || recommendation.partNumber,
          }))
          .slice(0, 5);
      }
      return [];
    })();
    parts = request;
    recommendationCache.set(category, request);
    void request.catch(() => {
      if (recommendationCache.get(category) === request) {
        recommendationCache.delete(category);
      }
    });
  }

  return parts.then((resolvedParts) => ({
    definitionIds: matchTiRecommendedDefinitionIds(
      resolvedParts.map((part) => part.partNumber),
      definitions,
    ),
    parts: resolvedParts,
  }));
}

export function clearTiRecommendationCacheForTest(): void {
  recommendationCache.clear();
}
