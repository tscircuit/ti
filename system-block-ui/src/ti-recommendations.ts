interface TiMcpConversationResponse {
  conversation?: unknown;
}

const TI_RECOMMENDATIONS_URL =
  import.meta.env.VITE_TI_RECOMMENDATIONS_URL?.trim() ||
  "https://ti-mcp-cache-proxy.seve.workers.dev/api/ti-recommendations";

export interface TiMcpConversation {
  request: string;
  response: string;
  tool: string;
}

const conversationCache = new Map<string, Promise<TiMcpConversation>>();

export function getTiMcpConversation(
  category: string,
): Promise<TiMcpConversation> {
  let conversation = conversationCache.get(category);
  if (conversation) return conversation;

  const request = (async () => {
    const query = new URLSearchParams({
      category,
      format: "conversation",
    });
    const endpoint = new URL(TI_RECOMMENDATIONS_URL);
    endpoint.search = query.toString();
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`TI MCP request failed with HTTP ${response.status}.`);
    }

    const payload = (await response.json()) as TiMcpConversationResponse;
    if (!payload.conversation || typeof payload.conversation !== "object") {
      throw new Error("TI MCP response did not include a conversation.");
    }

    const value = payload.conversation as Record<string, unknown>;
    if (
      typeof value.request !== "string" ||
      typeof value.response !== "string" ||
      typeof value.tool !== "string"
    ) {
      throw new Error("TI MCP conversation is malformed.");
    }

    return {
      request: value.request,
      response: value.response,
      tool: value.tool,
    };
  })();

  conversation = request;
  conversationCache.set(category, request);
  void request.catch(() => {
    if (conversationCache.get(category) === request) {
      conversationCache.delete(category);
    }
  });
  return conversation;
}
