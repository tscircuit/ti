interface TiRecommendationResponse {
  text?: unknown;
}

const TI_RECOMMENDATIONS_URL =
  import.meta.env.VITE_TI_RECOMMENDATIONS_URL?.trim() ||
  "https://ti-mcp-cache-proxy.seve.workers.dev/api/ti-recommendations";

const recommendationCache = new Map<string, Promise<string>>();

export function getTiRecommendationText(category: string): Promise<string> {
  let text = recommendationCache.get(category);
  if (!text) {
    const request = (async () => {
      const endpoint = new URL(TI_RECOMMENDATIONS_URL);
      endpoint.search = new URLSearchParams({
        category,
        format: "text",
      }).toString();
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(
          `TI recommendations failed with HTTP ${response.status}.`,
        );
      }
      const payload = (await response.json()) as TiRecommendationResponse;
      return typeof payload.text === "string" ? payload.text : "";
    })();
    text = request;
    recommendationCache.set(category, request);
    void request.catch(() => {
      if (recommendationCache.get(category) === request) {
        recommendationCache.delete(category);
      }
    });
  }
  return text;
}
