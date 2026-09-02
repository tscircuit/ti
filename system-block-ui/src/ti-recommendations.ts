import type { SubcircuitDefinition } from "./model";

interface TiRecommendationResponse {
  partNumbers?: unknown;
}

export interface TiRecommendations {
  definitionIds: ReadonlySet<string>;
  partNumbers: readonly string[];
}

const recommendationCache = new Map<string, Promise<readonly string[]>>();

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
  let partNumbers = recommendationCache.get(category);
  if (!partNumbers) {
    const request = (async () => {
      const query = new URLSearchParams({ category });
      const response = await fetch(`/api/ti-recommendations?${query}`);
      if (!response.ok) {
        throw new Error(
          `TI recommendations failed with HTTP ${response.status}.`,
        );
      }
      const payload = (await response.json()) as TiRecommendationResponse;
      if (Array.isArray(payload.partNumbers)) {
        return payload.partNumbers
          .filter((partNumber): partNumber is string =>
            Boolean(typeof partNumber === "string" && partNumber.trim()),
          )
          .slice(0, 5);
      }
      return [];
    })();
    partNumbers = request;
    recommendationCache.set(category, request);
    void request.catch(() => {
      if (recommendationCache.get(category) === request) {
        recommendationCache.delete(category);
      }
    });
  }

  return partNumbers.then((resolvedPartNumbers) => ({
    definitionIds: matchTiRecommendedDefinitionIds(
      resolvedPartNumbers,
      definitions,
    ),
    partNumbers: resolvedPartNumbers,
  }));
}

export function clearTiRecommendationCacheForTest(): void {
  recommendationCache.clear();
}
