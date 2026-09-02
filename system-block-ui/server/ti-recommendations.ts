const TI_OAUTH_URL = "https://transact.ti.com/v1/oauth";
const TI_MCP_URL = "https://transact.ti.com/v1/mcp";
const USER_AGENT = "python-requests/2.32.3";
const RECOMMENDATION_TTL_MS = 24 * 60 * 60 * 1000;
const TOKEN_EXPIRY_SKEW_MS = 60 * 1000;

const SUPPORTED_CATEGORIES = new Set([
  "Audio",
  "Development",
  "Drivers",
  "Interfaces",
  "Logic",
  "Memory",
  "Motor Control",
  "Other",
  "Power",
  "Processors",
  "Protection",
  "Sensors",
  "Timing",
  "User Interface",
  "Wireless",
]);

export interface TiMcpCredentials {
  clientId: string;
  clientSecret: string;
}

interface CachedToken {
  clientId: string;
  expiresAt: number;
  value: string;
}

interface CachedRecommendation {
  expiresAt: number;
  promise: Promise<readonly TiRecommendedPart[]>;
}

export interface TiRecommendedPart {
  description: string;
  name: string;
  partNumber: string;
}

interface CachedProductSelectionTool {
  accessToken: string;
  value: ProductSelectionTool;
}

interface ProductSelectionTool {
  name: string;
  wrapsQueryInput: boolean;
}

interface RpcResponse {
  error?: { message?: string };
  id?: string | number;
  jsonrpc?: string;
  result?: unknown;
}

let cachedToken: CachedToken | undefined;
let pendingToken:
  | { clientId: string; promise: Promise<CachedToken> }
  | undefined;
let cachedProductSelectionTool: CachedProductSelectionTool | undefined;
const recommendationCache = new Map<string, CachedRecommendation>();

function jsonResponse(
  body: unknown,
  options: { cache?: boolean; status?: number } = {},
): Response {
  const headers = new Headers({ "Content-Type": "application/json" });
  if (options.cache) {
    headers.set(
      "Cache-Control",
      "public, max-age=300, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=604800",
    );
  } else {
    headers.set("Cache-Control", "no-store");
  }
  return new Response(JSON.stringify(body), {
    headers,
    status: options.status ?? 200,
  });
}

function readCredentials(
  credentials?: Partial<TiMcpCredentials>,
): TiMcpCredentials | undefined {
  const clientId = credentials?.clientId ?? process.env.TI_SIE_CLIENT_ID;
  const clientSecret =
    credentials?.clientSecret ?? process.env.TI_SIE_CLIENT_SECRET;
  if (!clientId || !clientSecret) return undefined;
  return { clientId, clientSecret };
}

export function parseMcpResponse(raw: string): RpcResponse | undefined {
  for (const line of raw.split(/\r?\n/)) {
    if (!line.startsWith("data:")) continue;
    try {
      return JSON.parse(line.slice(5).trim()) as RpcResponse;
    } catch {
      // Continue in case a later SSE data line contains the JSON-RPC payload.
    }
  }

  try {
    return JSON.parse(raw) as RpcResponse;
  } catch {
    return undefined;
  }
}

function firstString(
  record: Record<string, unknown>,
  keys: readonly string[],
): string | undefined {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return undefined;
}

interface RecommendationFacts {
  description?: string;
  featureNames: string[];
  name?: string;
  partNumber: string;
  productFamily?: string;
}

function collectPartNumbersFromText(
  text: string,
  factsByPartNumber: Map<string, RecommendationFacts>,
): void {
  const possiblePartNumbers =
    text.match(/\b[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)*\d[A-Z0-9-]*\b/gi) ?? [];
  for (const possiblePartNumber of possiblePartNumbers) {
    const partNumber = possiblePartNumber.replace(/[.,;:)]+$/, "");
    if (partNumber.length < 4 || factsByPartNumber.has(partNumber)) continue;
    if (factsByPartNumber.size >= 5) return;
    factsByPartNumber.set(partNumber, { featureNames: [], partNumber });
  }
}

function collectRecommendationFacts(
  value: unknown,
  factsByPartNumber: Map<string, RecommendationFacts>,
): void {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      try {
        collectRecommendationFacts(JSON.parse(trimmed), factsByPartNumber);
        return;
      } catch {
        // Fall through to the text parser for malformed or fenced JSON.
      }
    }
    collectPartNumbersFromText(trimmed, factsByPartNumber);
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      collectRecommendationFacts(item, factsByPartNumber);
    }
    return;
  }
  if (!value || typeof value !== "object") return;
  const record = value as Record<string, unknown>;
  const rawPartNumber = record.part_number ?? record.partNumber;
  const partNumber =
    typeof rawPartNumber === "string" ? rawPartNumber.trim() : "";
  if (partNumber) {
    let facts = factsByPartNumber.get(partNumber);
    if (!facts && factsByPartNumber.size < 5) {
      facts = { featureNames: [], partNumber };
      factsByPartNumber.set(partNumber, facts);
    }
    if (facts) {
      facts.description ??= firstString(record, [
        "description",
        "short_description",
        "shortDescription",
        "product_description",
        "productDescription",
        "summary",
      ]);
      facts.name ??= firstString(record, [
        "product_name",
        "productName",
        "product_title",
        "productTitle",
        "device_name",
        "deviceName",
        "generic_product_name",
        "genericProductName",
        "title",
        "name",
      ]);
      facts.productFamily ??= firstString(record, [
        "product_family",
        "productFamily",
      ]);
      const parameters = record.parameters;
      if (Array.isArray(parameters)) {
        for (const parameter of parameters) {
          if (!parameter || typeof parameter !== "object") continue;
          const featureName = firstString(
            parameter as Record<string, unknown>,
            ["name"],
          );
          if (featureName && !facts.featureNames.includes(featureName)) {
            facts.featureNames.push(featureName);
          }
        }
      }
    }
  }
  for (const [key, item] of Object.entries(value)) {
    if (key !== "part_number" && key !== "partNumber") {
      collectRecommendationFacts(item, factsByPartNumber);
    }
  }
}

function formatSeries(values: readonly string[]): string {
  if (values.length < 2) return values[0] ?? "";
  if (values.length === 2) return `${values[0]} and ${values[1]}`;
  return `${values.slice(0, -1).join(", ")}, and ${values.at(-1)}`;
}

function includePartNumber(partNumber: string, name: string): string {
  const normalizedPartNumber = partNumber.toLowerCase().replace(/\W/g, "");
  const normalizedName = name.toLowerCase().replace(/\W/g, "");
  return normalizedName.includes(normalizedPartNumber)
    ? name
    : `${partNumber} ${name}`;
}

function buildDescription(
  facts: RecommendationFacts,
  category?: string,
): string {
  if (facts.description) return facts.description;
  const featureNames = facts.featureNames.slice(0, 3);
  if (featureNames.length > 0) {
    const prefix = facts.productFamily
      ? `From TI's ${facts.productFamily} family, featuring`
      : "Features";
    return `${prefix} ${formatSeries(featureNames)}.`;
  }
  if (facts.productFamily && category) {
    return `Recommended for ${category} applications from TI's ${facts.productFamily} family.`;
  }
  return "";
}

export function extractMcpRecommendations(
  response: RpcResponse,
  category?: string,
): readonly TiRecommendedPart[] {
  const factsByPartNumber = new Map<string, RecommendationFacts>();
  collectRecommendationFacts(response.result, factsByPartNumber);
  return [...factsByPartNumber.values()].map((facts) => {
    return {
      description: buildDescription(facts, category),
      name: includePartNumber(
        facts.partNumber,
        facts.name ?? facts.productFamily ?? facts.partNumber,
      ),
      partNumber: facts.partNumber,
    };
  });
}

export function findProductSelectionTool(
  response: RpcResponse,
): ProductSelectionTool | undefined {
  if (!response.result || typeof response.result !== "object") return undefined;
  const tools = (response.result as { tools?: unknown }).tools;
  if (!Array.isArray(tools)) return undefined;
  const namedTools = tools
    .map((tool) => {
      if (!tool || typeof tool !== "object") return undefined;
      const { description, inputSchema, name } = tool as {
        description?: unknown;
        inputSchema?: unknown;
        name?: unknown;
      };
      if (typeof name !== "string") return undefined;
      return {
        description: typeof description === "string" ? description : "",
        inputSchema,
        name,
      };
    })
    .filter(
      (
        tool,
      ): tool is { description: string; inputSchema: unknown; name: string } =>
        Boolean(tool),
    );
  const selected =
    namedTools.find(({ name }) => name === "find_product_selection") ??
    namedTools.find(({ name }) => name === "product_features_applications") ??
    namedTools.find(({ name }) => {
      const normalized = name.toLowerCase();
      return (
        normalized.includes("product") &&
        (normalized.includes("selection") || normalized.includes("recommend"))
      );
    }) ??
    namedTools.find(({ description }) => {
      const normalized = description.toLowerCase();
      return (
        normalized.includes("product") &&
        normalized.includes("recommendation") &&
        normalized.includes("selection")
      );
    });
  if (!selected) return undefined;
  const schema =
    selected.inputSchema && typeof selected.inputSchema === "object"
      ? (selected.inputSchema as {
          properties?: unknown;
          required?: unknown;
        })
      : undefined;
  const properties =
    schema?.properties && typeof schema.properties === "object"
      ? schema.properties
      : undefined;
  return {
    name: selected.name,
    wrapsQueryInput:
      (Array.isArray(schema?.required) &&
        schema.required.includes("query_input")) ||
      Boolean(properties && "query_input" in properties),
  };
}

function isMcpToolError(response: RpcResponse | undefined): boolean {
  if (!response?.result || typeof response.result !== "object") return false;
  return (response.result as { isError?: unknown }).isError === true;
}

async function getAccessToken(
  credentials: TiMcpCredentials,
): Promise<CachedToken> {
  const now = Date.now();
  if (
    cachedToken?.clientId === credentials.clientId &&
    cachedToken.expiresAt > now
  ) {
    return cachedToken;
  }
  if (pendingToken?.clientId === credentials.clientId) {
    return pendingToken.promise;
  }

  const promise = (async (): Promise<CachedToken> => {
    const authorization = btoa(
      `${credentials.clientId}:${credentials.clientSecret}`,
    );
    const response = await fetch(TI_OAUTH_URL, {
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${authorization}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": USER_AGENT,
      },
      method: "POST",
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) {
      throw new Error(`TI OAuth request failed with HTTP ${response.status}.`);
    }
    const payload = (await response.json()) as {
      access_token?: unknown;
      expires_in?: unknown;
    };
    if (typeof payload.access_token !== "string") {
      throw new Error("TI OAuth response did not include an access token.");
    }
    const expiresIn =
      typeof payload.expires_in === "number" ? payload.expires_in : 3600;
    cachedToken = {
      clientId: credentials.clientId,
      expiresAt: Date.now() + expiresIn * 1000 - TOKEN_EXPIRY_SKEW_MS,
      value: payload.access_token,
    };
    return cachedToken;
  })();

  pendingToken = { clientId: credentials.clientId, promise };
  try {
    return await promise;
  } finally {
    if (pendingToken?.promise === promise) pendingToken = undefined;
  }
}

async function postRpc(
  token: string,
  payload: unknown,
  sessionId?: string,
): Promise<{ response?: RpcResponse; sessionId?: string }> {
  const headers = new Headers({
    Accept: "application/json, text/event-stream",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "User-Agent": USER_AGENT,
  });
  if (sessionId) headers.set("Mcp-Session-Id", sessionId);

  const result = await fetch(TI_MCP_URL, {
    body: JSON.stringify(payload),
    headers,
    method: "POST",
    signal: AbortSignal.timeout(30_000),
  });
  const returnedSessionId = result.headers.get("Mcp-Session-Id") ?? sessionId;
  const raw = await result.text();
  if (!result.ok && result.status !== 202) {
    throw new Error(`TI MCP request failed with HTTP ${result.status}.`);
  }
  return {
    response: raw ? parseMcpResponse(raw) : undefined,
    sessionId: returnedSessionId,
  };
}

async function requestCategoryRecommendations(
  category: string,
  credentials: TiMcpCredentials,
  candidates: readonly string[],
): Promise<readonly TiRecommendedPart[]> {
  const token = await getAccessToken(credentials);
  const initialized = await postRpc(token.value, {
    id: 1,
    jsonrpc: "2.0",
    method: "initialize",
    params: {
      capabilities: {},
      clientInfo: { name: "tscircuit-ti-system-block-ui", version: "1.0" },
      protocolVersion: "2024-11-05",
    },
  });
  await postRpc(
    token.value,
    {
      jsonrpc: "2.0",
      method: "notifications/initialized",
      params: {},
    },
    initialized.sessionId,
  );

  let productSelectionTool =
    cachedProductSelectionTool?.accessToken === token.value
      ? cachedProductSelectionTool.value
      : undefined;
  if (!productSelectionTool) {
    const listed = await postRpc(
      token.value,
      {
        id: 2,
        jsonrpc: "2.0",
        method: "tools/list",
        params: {},
      },
      initialized.sessionId,
    );
    if (listed.response?.error) {
      throw new Error(
        listed.response.error.message ?? "TI MCP could not list its tools.",
      );
    }
    productSelectionTool = listed.response
      ? findProductSelectionTool(listed.response)
      : undefined;
    if (!productSelectionTool) {
      throw new Error("TI MCP did not advertise a product-selection tool.");
    }
    cachedProductSelectionTool = {
      accessToken: token.value,
      value: productSelectionTool,
    };
  }

  const candidateConstraint =
    candidates.length > 0
      ? ` Choose only from this exact list of available subcircuits: ${candidates.join(", ")}. Do not recommend products outside this list.`
      : "";
  const query = `Recommend up to five widely applicable Texas Instruments products for ${category} applications.${candidateConstraint} For every recommendation, return its exact part_number, full product_name, and a concise one-sentence description.`;

  const called = await postRpc(
    token.value,
    {
      id: 3,
      jsonrpc: "2.0",
      method: "tools/call",
      params: {
        arguments: productSelectionTool.wrapsQueryInput
          ? { query_input: { query } }
          : { query },
        name: productSelectionTool.name,
      },
    },
    initialized.sessionId,
  );
  if (called.response?.error) {
    throw new Error(
      called.response.error.message ?? "TI MCP returned an unknown error.",
    );
  }
  if (isMcpToolError(called.response)) {
    throw new Error("TI MCP product selection failed.");
  }
  if (!called.response) return [];
  return extractMcpRecommendations(called.response, category);
}

function getCategoryRecommendations(
  category: string,
  credentials: TiMcpCredentials,
  candidates: readonly string[],
): Promise<readonly TiRecommendedPart[]> {
  const now = Date.now();
  const cacheKey = `${category}\0${candidates.join(",")}`;
  const cached = recommendationCache.get(cacheKey);
  if (cached && cached.expiresAt > now) return cached.promise;

  const promise = requestCategoryRecommendations(
    category,
    credentials,
    candidates,
  ).catch((error) => {
    recommendationCache.delete(cacheKey);
    throw error;
  });
  recommendationCache.set(cacheKey, {
    expiresAt: now + RECOMMENDATION_TTL_MS,
    promise,
  });
  return promise;
}

export async function handleTiRecommendationsRequest(
  request: Request,
  credentials?: Partial<TiMcpCredentials>,
): Promise<Response> {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed." }, { status: 405 });
  }
  const url = new URL(request.url);
  if (
    [...url.searchParams.keys()].some(
      (key) => key !== "candidates" && key !== "category" && key !== "format",
    ) ||
    (url.searchParams.has("format") &&
      url.searchParams.get("format") !== "details")
  ) {
    return jsonResponse(
      { error: "Unsupported query parameter." },
      { status: 400 },
    );
  }
  const category = url.searchParams.get("category")?.trim();
  if (!category || !SUPPORTED_CATEGORIES.has(category)) {
    return jsonResponse({ error: "Unsupported TI category." }, { status: 400 });
  }
  const rawCandidates = url.searchParams.get("candidates")?.trim();
  const candidates = rawCandidates
    ? rawCandidates.split(",").map((candidate) => candidate.trim())
    : [];
  if (
    candidates.length > 50 ||
    candidates.some(
      (candidate) =>
        !candidate ||
        candidate.length > 100 ||
        !/^[A-Za-z0-9_]+$/.test(candidate),
    )
  ) {
    return jsonResponse(
      { error: "Unsupported TI recommendation candidate." },
      { status: 400 },
    );
  }
  const resolvedCredentials = readCredentials(credentials);
  if (!resolvedCredentials) {
    return jsonResponse(
      { error: "TI recommendations are not configured." },
      { status: 503 },
    );
  }

  try {
    const recommendations = await getCategoryRecommendations(
      category,
      resolvedCredentials,
      candidates,
    );
    return jsonResponse({ recommendations }, { cache: true });
  } catch {
    return jsonResponse(
      { error: "TI recommendations are temporarily unavailable." },
      { status: 502 },
    );
  }
}
