import { basename } from "node:path";

export type TiReferencePoint = {
  x: number;
  y: number;
};

export type TiReferenceConnections = Record<string, string>;

export type TiReferenceFigureEvidence = {
  kind:
    | "ti-datasheet-typical-application"
    | "ti-evaluation-module-schematic"
    | "ti-reference-design-schematic";
  datasheetUrl: string;
  documentViewerRootUrl: string;
  sectionUrl: string;
  figureUrl: string;
  figure: string;
  figureCaption: string;
  pdfPage: number;
  documentRevision: string;
  scope: string;
};

export type TiReferenceMainDevice = {
  componentExportName: string;
  modulePath: string;
  name: string;
  position: TiReferencePoint;
  schWidth?: number;
  schHeight?: number;
  showPinAliases?: boolean;
  pinConnections?: TiReferenceConnections;
  schematicProjection?: {
    name: string;
    symbolName: string;
    portMap: Record<string, string>;
  };
  pinArrangement?: Partial<
    Record<"leftSide" | "rightSide" | "topSide" | "bottomSide", string[]>
  >;
};

export type TiReferencePassive = {
  kind: "resistor" | "capacitor" | "inductor";
  name: string;
  value: string;
  footprint: string;
  position: TiReferencePoint;
  rotation?: number;
  connections?: TiReferenceConnections;
  evidenceLabel: string;
  valueStatus: "specified-by-ti";
};

export type TiReferenceSymbolicLoad = {
  kind: "symbolic-load";
  name: string;
  displayLabel: string;
  position: TiReferencePoint;
  evidenceLabel: string;
  valueStatus: "unspecified-by-ti";
};

export type TiReferenceNetSymbol = {
  kind: "net-symbol";
  name: string;
  symbolName:
    | "digital_ground_down"
    | "digital_ground_up"
    | "ground_down"
    | "rail_up"
    | "rail_right"
    | "testpoint_right";
  port: string;
  net: string;
  displayLabel?: string;
  position: TiReferencePoint;
  evidenceLabel: string;
};

export type TiReferenceComponent =
  | TiReferencePassive
  | TiReferenceSymbolicLoad
  | TiReferenceNetSymbol;

export type TiReferenceTrace = {
  from?: string;
  to?: string;
  path?: string[];
  evidenceLabel: string;
};

type TiReferenceExampleBase = {
  id: string;
  family: string;
  title: string;
  description: string;
  evidence: TiReferenceFigureEvidence;
};

export type TiGeneratedReferenceExample = TiReferenceExampleBase & {
  implementation: "generated";
  mainDevice: TiReferenceMainDevice;
  components: TiReferenceComponent[];
  traces: TiReferenceTrace[];
};

export type TiHandwrittenReferenceExample = TiReferenceExampleBase & {
  implementation: "handwritten";
  sourceFile: string;
  sourceSha256: string;
};

export type TiReferenceExample =
  | TiGeneratedReferenceExample
  | TiHandwrittenReferenceExample;

export const isGeneratedTiReferenceExample = (
  example: TiReferenceExample,
): example is TiGeneratedReferenceExample =>
  example.implementation === "generated";

export type TiReferenceExampleManifest = {
  schemaVersion: 1;
  examples: TiReferenceExample[];
};

export type TiReferenceCatalogEntry = {
  family: string;
  componentExportName?: string;
  exportName: string;
};

export type TiReferenceFigureCandidate = {
  documentViewerRootUrl: string;
  sectionUrl: string;
  sectionTitle: string;
  figureUrl: string;
  figure: string;
  figureCaption: string;
  imageTitle: string;
};

const SIDE_NAMES = ["leftSide", "rightSide", "topSide", "bottomSide"] as const;

const assertRecord: (
  value: unknown,
  location: string,
) => asserts value is Record<string, unknown> = (value, location) => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${location} must be an object`);
  }
};

const assertNonEmptyString: (
  value: unknown,
  location: string,
) => asserts value is string = (value, location) => {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${location} must be a non-empty string`);
  }
};

const assertPoint = (value: unknown, location: string): void => {
  assertRecord(value, location);
  for (const axis of ["x", "y"] as const) {
    if (typeof value[axis] !== "number" || !Number.isFinite(value[axis])) {
      throw new Error(`${location}.${axis} must be a finite number`);
    }
  }
};

const assertTiUrl = (
  value: unknown,
  location: string,
  expectedPathPrefix: string | readonly string[],
): void => {
  assertNonEmptyString(value, location);
  const url = new URL(value);
  if (url.protocol !== "https:" || url.hostname !== "www.ti.com") {
    throw new Error(`${location} must be an https://www.ti.com URL`);
  }
  const expectedPathPrefixes = Array.isArray(expectedPathPrefix)
    ? expectedPathPrefix
    : [expectedPathPrefix];
  if (!expectedPathPrefixes.some((prefix) => url.pathname.startsWith(prefix))) {
    throw new Error(
      `${location} must start with ${expectedPathPrefixes.join(" or ")}`,
    );
  }
};

const assertConnections = (value: unknown, location: string): void => {
  assertRecord(value, location);
  const entries = Object.entries(value);
  if (entries.length === 0) {
    throw new Error(`${location} must not be empty`);
  }
  for (const [pin, net] of entries) {
    assertNonEmptyString(pin, `${location} pin`);
    assertNonEmptyString(net, `${location}.${pin}`);
    if (!/^net\.[A-Za-z_][A-Za-z0-9_]*$/.test(net)) {
      throw new Error(`${location}.${pin} must be a net.NAME selector`);
    }
  }
};

const validateEvidence = (
  value: unknown,
  location: string,
): TiReferenceFigureEvidence => {
  assertRecord(value, location);
  if (
    value.kind !== "ti-datasheet-typical-application" &&
    value.kind !== "ti-evaluation-module-schematic" &&
    value.kind !== "ti-reference-design-schematic"
  ) {
    throw new Error(`${location}.kind is not a supported TI evidence kind`);
  }
  assertTiUrl(value.datasheetUrl, `${location}.datasheetUrl`, "/lit/");
  assertTiUrl(
    value.documentViewerRootUrl,
    `${location}.documentViewerRootUrl`,
    "/document-viewer/",
  );
  assertTiUrl(value.sectionUrl, `${location}.sectionUrl`, [
    "/document-viewer/",
    "/lit/",
  ]);
  assertTiUrl(value.figureUrl, `${location}.figureUrl`, [
    "/ods/images/",
    "/lit/",
  ]);
  assertNonEmptyString(value.figure, `${location}.figure`);
  if (
    !/^Figure\s+\d+(?:[-.]\d+)*$/i.test(value.figure) &&
    !/^[A-Za-z0-9][A-Za-z0-9_-]+$/.test(value.figure)
  ) {
    throw new Error(
      `${location}.figure must be an exact TI figure number or legacy asset locator`,
    );
  }
  assertNonEmptyString(value.figureCaption, `${location}.figureCaption`);
  assertNonEmptyString(value.documentRevision, `${location}.documentRevision`);
  assertNonEmptyString(value.scope, `${location}.scope`);
  if (!Number.isInteger(value.pdfPage) || (value.pdfPage as number) < 1) {
    throw new Error(`${location}.pdfPage must be a positive integer`);
  }
  return value as TiReferenceFigureEvidence;
};

const validateMainDevice = (
  value: unknown,
  location: string,
  family: string,
  catalogByFamily?: ReadonlyMap<string, TiReferenceCatalogEntry>,
): TiReferenceMainDevice => {
  assertRecord(value, location);
  assertNonEmptyString(
    value.componentExportName,
    `${location}.componentExportName`,
  );
  assertNonEmptyString(value.modulePath, `${location}.modulePath`);
  assertNonEmptyString(value.name, `${location}.name`);
  if (
    !/^\.\.\/lib\/chips\/[A-Za-z_$][A-Za-z0-9_$]*\.tsx$/.test(value.modulePath)
  ) {
    throw new Error(
      `${location}.modulePath must reference a plain ../lib/chips/*.tsx module`,
    );
  }
  if (basename(value.modulePath, ".tsx") !== value.componentExportName) {
    throw new Error(
      `${location}.modulePath basename must match componentExportName`,
    );
  }
  assertPoint(value.position, `${location}.position`);
  if (value.pinConnections !== undefined) {
    assertConnections(value.pinConnections, `${location}.pinConnections`);
    for (const pin of Object.keys(
      value.pinConnections as Record<string, string>,
    )) {
      if (!/^pin\d+$/.test(pin)) {
        throw new Error(
          `${location}.pinConnections.${pin} must use a physical pinN selector`,
        );
      }
    }
  }
  for (const size of ["schWidth", "schHeight"] as const) {
    if (
      value[size] !== undefined &&
      (typeof value[size] !== "number" || (value[size] as number) <= 0)
    ) {
      throw new Error(`${location}.${size} must be a positive number`);
    }
  }
  if (value.pinArrangement !== undefined) {
    assertRecord(value.pinArrangement, `${location}.pinArrangement`);
    const arrangedPins = new Set<string>();
    for (const side of SIDE_NAMES) {
      const pins = value.pinArrangement[side];
      if (pins === undefined) continue;
      if (!Array.isArray(pins) || pins.length === 0) {
        throw new Error(`${location}.pinArrangement.${side} must be non-empty`);
      }
      for (const pin of pins) {
        if (typeof pin !== "string" || !/^pin\d+$/.test(pin)) {
          throw new Error(
            `${location}.pinArrangement.${side} contains an invalid physical pin`,
          );
        }
        if (arrangedPins.has(pin)) {
          throw new Error(`${location}.pinArrangement repeats ${pin}`);
        }
        arrangedPins.add(pin);
      }
    }
  }
  if (value.schematicProjection !== undefined) {
    assertRecord(value.schematicProjection, `${location}.schematicProjection`);
    assertNonEmptyString(
      value.schematicProjection.name,
      `${location}.schematicProjection.name`,
    );
    assertNonEmptyString(
      value.schematicProjection.symbolName,
      `${location}.schematicProjection.symbolName`,
    );
    assertRecord(
      value.schematicProjection.portMap,
      `${location}.schematicProjection.portMap`,
    );
    const portMapEntries = Object.entries(value.schematicProjection.portMap);
    if (portMapEntries.length === 0) {
      throw new Error(
        `${location}.schematicProjection.portMap must not be empty`,
      );
    }
    const mappedPhysicalPins = new Set<string>();
    if (value.schematicProjection.symbolName === "opamp_with_power_right") {
      const requiredPorts = ["inp1", "inp2", "out", "V+", "V-"];
      const actualPorts = new Set(
        portMapEntries.map(([symbolPort]) => symbolPort),
      );
      for (const requiredPort of requiredPorts) {
        if (!actualPorts.has(requiredPort)) {
          throw new Error(
            `${location}.schematicProjection.portMap is missing ${requiredPort} for opamp_with_power_right`,
          );
        }
      }
    }
    for (const [symbolPort, physicalPin] of portMapEntries) {
      assertNonEmptyString(
        symbolPort,
        `${location}.schematicProjection.portMap port`,
      );
      if (typeof physicalPin !== "string" || !/^pin\d+$/.test(physicalPin)) {
        throw new Error(
          `${location}.schematicProjection.portMap.${symbolPort} must map to a physical pinN selector`,
        );
      }
      if (mappedPhysicalPins.has(physicalPin)) {
        throw new Error(
          `${location}.schematicProjection.portMap repeats ${physicalPin}`,
        );
      }
      mappedPhysicalPins.add(physicalPin);
    }
    if (value.pinConnections !== undefined) {
      for (const physicalPin of Object.keys(
        value.pinConnections as Record<string, string>,
      )) {
        if (!mappedPhysicalPins.has(physicalPin)) {
          throw new Error(
            `${location}.schematicProjection.portMap is missing connected ${physicalPin}`,
          );
        }
      }
    }
    if (value.pinArrangement !== undefined) {
      throw new Error(
        `${location} cannot combine a schematicProjection with a box pinArrangement`,
      );
    }
  }
  const catalogEntry = catalogByFamily?.get(family);
  if (catalogEntry) {
    const expectedName =
      catalogEntry.componentExportName ?? catalogEntry.exportName;
    if (value.componentExportName !== expectedName) {
      throw new Error(
        `${location}.componentExportName does not match catalog family ${family}: expected ${expectedName}`,
      );
    }
  }
  return value as TiReferenceMainDevice;
};

const validateComponent = (
  value: unknown,
  location: string,
): TiReferenceComponent => {
  assertRecord(value, location);
  assertNonEmptyString(value.kind, `${location}.kind`);
  assertNonEmptyString(value.name, `${location}.name`);
  assertPoint(value.position, `${location}.position`);
  if (value.connections !== undefined) {
    assertConnections(value.connections, `${location}.connections`);
  }
  assertNonEmptyString(value.evidenceLabel, `${location}.evidenceLabel`);
  if (value.kind === "net-symbol") {
    if (
      value.symbolName !== "digital_ground_down" &&
      value.symbolName !== "digital_ground_up" &&
      value.symbolName !== "ground_down" &&
      value.symbolName !== "rail_up" &&
      value.symbolName !== "rail_right" &&
      value.symbolName !== "testpoint_right"
    ) {
      throw new Error(`${location}.symbolName is not an approved net symbol`);
    }
    assertNonEmptyString(value.port, `${location}.port`);
    if (!/^\d+$/.test(value.port)) {
      throw new Error(`${location}.port must be a numeric symbol port`);
    }
    assertNonEmptyString(value.net, `${location}.net`);
    if (!/^net\.[A-Za-z_][A-Za-z0-9_]*$/.test(value.net)) {
      throw new Error(`${location}.net must be a net.NAME selector`);
    }
    if (
      value.displayLabel !== undefined &&
      typeof value.displayLabel !== "string"
    ) {
      throw new Error(`${location}.displayLabel must be a string`);
    }
    return value as TiReferenceNetSymbol;
  }
  if (value.kind === "symbolic-load") {
    assertNonEmptyString(value.displayLabel, `${location}.displayLabel`);
    if (value.valueStatus !== "unspecified-by-ti") {
      throw new Error(
        `${location}.valueStatus must be unspecified-by-ti for a symbolic load`,
      );
    }
    if ("value" in value) {
      throw new Error(
        `${location} must not invent a value for a symbolic load`,
      );
    }
    return value as TiReferenceSymbolicLoad;
  }
  if (
    value.kind !== "resistor" &&
    value.kind !== "capacitor" &&
    value.kind !== "inductor"
  ) {
    throw new Error(`${location}.kind is not supported`);
  }
  assertNonEmptyString(value.value, `${location}.value`);
  assertNonEmptyString(value.footprint, `${location}.footprint`);
  if (value.valueStatus !== "specified-by-ti") {
    throw new Error(
      `${location}.valueStatus must be specified-by-ti for a passive`,
    );
  }
  if (
    value.rotation !== undefined &&
    (typeof value.rotation !== "number" || !Number.isFinite(value.rotation))
  ) {
    throw new Error(`${location}.rotation must be a finite number`);
  }
  return value as TiReferencePassive;
};

export const validateTiReferenceExampleManifest = (
  value: unknown,
  options: {
    catalog?: readonly TiReferenceCatalogEntry[];
  } = {},
): TiReferenceExampleManifest => {
  assertRecord(value, "manifest");
  if (value.schemaVersion !== 1) {
    throw new Error("manifest.schemaVersion must be 1");
  }
  if (!Array.isArray(value.examples) || value.examples.length === 0) {
    throw new Error(
      "manifest.examples must contain at least one evidence-backed example",
    );
  }
  const catalogByFamily = options.catalog
    ? new Map(options.catalog.map((entry) => [entry.family, entry]))
    : undefined;
  const ids = new Set<string>();
  const families = new Set<string>();
  for (const [index, rawExample] of value.examples.entries()) {
    const location = `manifest.examples[${index}]`;
    assertRecord(rawExample, location);
    assertNonEmptyString(rawExample.id, `${location}.id`);
    if (!/^[A-Za-z0-9_]+$/.test(rawExample.id)) {
      throw new Error(`${location}.id must be filename-safe`);
    }
    if (ids.has(rawExample.id))
      throw new Error(`duplicate example id ${rawExample.id}`);
    ids.add(rawExample.id);
    assertNonEmptyString(rawExample.family, `${location}.family`);
    if (families.has(rawExample.family)) {
      throw new Error(`duplicate family ${rawExample.family}`);
    }
    families.add(rawExample.family);
    if (
      catalogByFamily &&
      !catalogByFamily.has(rawExample.family) &&
      rawExample.implementation !== "handwritten"
    ) {
      throw new Error(`${location}.family is not present in the TI catalog`);
    }
    assertNonEmptyString(rawExample.title, `${location}.title`);
    assertNonEmptyString(rawExample.description, `${location}.description`);
    validateEvidence(rawExample.evidence, `${location}.evidence`);
    if (rawExample.implementation === "handwritten") {
      assertNonEmptyString(rawExample.sourceFile, `${location}.sourceFile`);
      if (rawExample.sourceFile !== `${rawExample.id}.circuit.tsx`) {
        throw new Error(
          `${location}.sourceFile must be ${rawExample.id}.circuit.tsx`,
        );
      }
      assertNonEmptyString(rawExample.sourceSha256, `${location}.sourceSha256`);
      if (!/^[a-f0-9]{64}$/.test(rawExample.sourceSha256)) {
        throw new Error(`${location}.sourceSha256 must be a lowercase SHA-256`);
      }
      for (const generatedField of [
        "mainDevice",
        "components",
        "traces",
        "annotations",
      ]) {
        if (rawExample[generatedField] !== undefined) {
          throw new Error(
            `${location}.${generatedField} is not allowed for a handwritten example`,
          );
        }
      }
      continue;
    }
    if (rawExample.implementation !== "generated") {
      throw new Error(
        `${location}.implementation must be generated or handwritten`,
      );
    }
    if (
      rawExample.sourceFile !== undefined ||
      rawExample.sourceSha256 !== undefined
    ) {
      throw new Error(
        `${location} generated examples cannot declare handwritten source metadata`,
      );
    }
    if (rawExample.annotations !== undefined) {
      throw new Error(
        `${location}.annotations are not allowed; use ordinary components and nets instead of schematic text`,
      );
    }
    const mainDevice = validateMainDevice(
      rawExample.mainDevice,
      `${location}.mainDevice`,
      rawExample.family,
      catalogByFamily,
    );
    if (
      !Array.isArray(rawExample.components) ||
      rawExample.components.length === 0
    ) {
      throw new Error(`${location}.components must not be empty`);
    }
    const componentNames = new Set<string>();
    let passiveCount = 0;
    for (const [componentIndex, component] of rawExample.components.entries()) {
      const parsed = validateComponent(
        component,
        `${location}.components[${componentIndex}]`,
      );
      if (componentNames.has(parsed.name)) {
        throw new Error(`${location} repeats component name ${parsed.name}`);
      }
      componentNames.add(parsed.name);
      if (
        parsed.kind === "resistor" ||
        parsed.kind === "capacitor" ||
        parsed.kind === "inductor"
      ) {
        passiveCount += 1;
      }
    }
    if (passiveCount === 0) {
      throw new Error(
        `${location} must include at least one TI-specified passive; chip-only examples are forbidden`,
      );
    }
    if (!Array.isArray(rawExample.traces) || rawExample.traces.length === 0) {
      throw new Error(
        `${location}.traces must encode the TI figure connectivity`,
      );
    }
    const validComponentNames = new Set([
      mainDevice.name,
      ...(rawExample.components as TiReferenceComponent[]).map(
        (component) => component.name,
      ),
    ]);
    const projection = mainDevice.schematicProjection;
    if (projection) validComponentNames.add(projection.name);
    let projectionTraceCount = 0;
    for (const [traceIndex, trace] of rawExample.traces.entries()) {
      const traceLocation = `${location}.traces[${traceIndex}]`;
      assertRecord(trace, traceLocation);
      assertNonEmptyString(
        trace.evidenceLabel,
        `${traceLocation}.evidenceLabel`,
      );
      const hasPair = trace.from !== undefined || trace.to !== undefined;
      const hasPath = trace.path !== undefined;
      if (hasPair === hasPath) {
        throw new Error(
          `${traceLocation} must provide either from/to or a multi-point path`,
        );
      }
      let endpoints: Array<[string, string]>;
      if (hasPath) {
        if (!Array.isArray(trace.path) || trace.path.length < 2) {
          throw new Error(
            `${traceLocation}.path must contain at least two endpoints`,
          );
        }
        endpoints = trace.path.map((endpoint, endpointIndex) => {
          assertNonEmptyString(
            endpoint,
            `${traceLocation}.path[${endpointIndex}]`,
          );
          return [`path[${endpointIndex}]`, endpoint];
        });
      } else {
        assertNonEmptyString(trace.from, `${traceLocation}.from`);
        assertNonEmptyString(trace.to, `${traceLocation}.to`);
        endpoints = [
          ["from", trace.from],
          ["to", trace.to],
        ];
      }
      for (const [endpointName, endpoint] of endpoints) {
        if (/^net\.[A-Za-z_][A-Za-z0-9_]*$/.test(endpoint)) continue;
        const selectorMatch = endpoint.match(
          /^\.([A-Za-z_$][A-Za-z0-9_$]*)\s*>\s*\.([A-Za-z0-9_+\-]+)$/,
        );
        if (!selectorMatch) {
          throw new Error(
            `${traceLocation}.${endpointName} must be net.NAME or .COMPONENT > .port`,
          );
        }
        if (!validComponentNames.has(selectorMatch[1])) {
          throw new Error(
            `${traceLocation}.${endpointName} references unknown component ${selectorMatch[1]}`,
          );
        }
        if (projection && selectorMatch[1] === projection.name) {
          projectionTraceCount += 1;
        }
        if (projection && selectorMatch[1] === mainDevice.name) {
          throw new Error(
            `${traceLocation}.${endpointName} must route through schematic projection ${projection.name}`,
          );
        }
      }
      if (trace.schematicRouteHints !== undefined) {
        throw new Error(
          `${traceLocation}.schematicRouteHints are not allowed; schematic traces must be autorouted`,
        );
      }
    }
    if (projection && projectionTraceCount === 0) {
      throw new Error(
        `${location}.traces must route through schematic projection ${projection.name}`,
      );
    }
  }
  return value as TiReferenceExampleManifest;
};

const decodeHtml = (value: string): string =>
  value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, decimal: string) =>
      String.fromCodePoint(Number.parseInt(decimal, 10)),
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const stripHtml = (value: string): string =>
  decodeHtml(value.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

const parseAttributes = (tag: string): Record<string, string> => {
  const attributes: Record<string, string> = {};
  const expression = /([:\w-]+)\s*=\s*(["'])([\s\S]*?)\2/g;
  for (const match of tag.matchAll(expression)) {
    attributes[match[1].toLowerCase()] = decodeHtml(match[3]);
  }
  return attributes;
};

const normalizeTiUrl = (href: string, baseUrl: string): string => {
  const normalized = href.startsWith("//") ? `https:${href}` : href;
  const url = new URL(normalized, baseUrl);
  url.hash = "";
  return url.toString();
};

export const extractTiApplicationSectionLinks = (
  rootHtml: string,
  rootUrl: string,
): Array<{ sectionUrl: string; sectionTitle: string }> => {
  const links = new Map<string, string>();
  for (const match of rootHtml.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/gi)) {
    const attributes = parseAttributes(match[0]);
    const href = attributes.href;
    if (!href) continue;
    const title =
      attributes["data-navtitle"] ||
      attributes["data-sectiontitle"] ||
      stripHtml(match[0]);
    const chapter = attributes["data-chaptertitle"] ?? "";
    if (
      !/application|reference schematic|reference design/i.test(
        `${chapter} ${title}`,
      )
    ) {
      continue;
    }
    const sectionUrl = normalizeTiUrl(href, rootUrl);
    if (new URL(sectionUrl).hostname !== "www.ti.com") continue;
    links.set(sectionUrl, title);
  }
  return [...links]
    .map(([sectionUrl, sectionTitle]) => ({ sectionUrl, sectionTitle }))
    .sort((left, right) => left.sectionUrl.localeCompare(right.sectionUrl));
};

export const extractTiReferenceFigures = (
  sectionHtml: string,
  sectionUrl: string,
  documentViewerRootUrl: string,
  sectionTitle = "Application and Implementation",
): TiReferenceFigureCandidate[] => {
  const candidates: TiReferenceFigureCandidate[] = [];
  const imageMatches = [...sectionHtml.matchAll(/<img\b[^>]*>/gi)];
  for (const [index, imageMatch] of imageMatches.entries()) {
    const attributes = parseAttributes(imageMatch[0]);
    if (!attributes.src) continue;
    const figureUrl = normalizeTiUrl(attributes.src, sectionUrl);
    const url = new URL(figureUrl);
    if (
      url.hostname !== "www.ti.com" ||
      !url.pathname.startsWith("/ods/images/")
    ) {
      continue;
    }
    const imageEnd = (imageMatch.index ?? 0) + imageMatch[0].length;
    const nextImageStart = imageMatches[index + 1]?.index ?? sectionHtml.length;
    const followingHtml = sectionHtml.slice(
      imageEnd,
      Math.min(nextImageStart, imageEnd + 2400),
    );
    const captionMatch = followingHtml.match(
      /<span\b[^>]*class=["'][^"']*caption[^"']*["'][^>]*>([\s\S]*?)<\/span>\s*<\/div>/i,
    );
    const figureCaption = captionMatch
      ? stripHtml(captionMatch[1])
      : stripHtml(attributes.title || attributes.alt || "");
    const figure = figureCaption.match(/Figure\s+\d+(?:[-.]\d+)+/i)?.[0] ?? "";
    candidates.push({
      documentViewerRootUrl,
      sectionUrl,
      sectionTitle,
      figureUrl,
      figure,
      figureCaption,
      imageTitle: stripHtml(attributes.title || attributes.alt || ""),
    });
  }
  return candidates;
};

export const discoverTiReferenceFigures = async (
  documentViewerRootUrl: string,
  options: { fetch?: typeof fetch } = {},
): Promise<TiReferenceFigureCandidate[]> => {
  assertTiUrl(
    documentViewerRootUrl,
    "documentViewerRootUrl",
    "/document-viewer/",
  );
  const fetchImplementation = options.fetch ?? fetch;
  const requestInit = {
    headers: {
      Accept: "text/html,application/xhtml+xml",
      "User-Agent":
        "Mozilla/5.0 (compatible; tscircuit-ti-reference-evidence/1.0)",
    },
  } as const;
  const readTiHtml = async (
    url: string,
    allowFailure = false,
  ): Promise<string | undefined> => {
    const response = await fetchImplementation(url, requestInit);
    if (response.ok) return await response.text();
    // TI sometimes rejects Bun's TLS fingerprint while serving the exact same
    // first-party page to curl. Keep injectable fetches deterministic in tests,
    // and use curl only as a local CLI fallback for that specific response.
    if (!options.fetch && response.status === 403) {
      const process = Bun.spawn(
        ["curl", "-L", "--fail", "--silent", "--show-error", url],
        { stdout: "pipe", stderr: "pipe" },
      );
      const [exitCode, stdout, stderr] = await Promise.all([
        process.exited,
        new Response(process.stdout).text(),
        new Response(process.stderr).text(),
      ]);
      if (exitCode === 0) return stdout;
      if (!allowFailure) {
        throw new Error(`curl failed for ${url}: ${stderr.trim()}`);
      }
      return undefined;
    }
    if (allowFailure) return undefined;
    throw new Error(
      `TI document-viewer returned HTTP ${response.status}: ${url}`,
    );
  };
  const rootHtml = await readTiHtml(documentViewerRootUrl);
  if (!rootHtml) {
    throw new Error(
      `TI document-viewer root was empty: ${documentViewerRootUrl}`,
    );
  }
  const links = extractTiApplicationSectionLinks(
    rootHtml,
    documentViewerRootUrl,
  );
  if (links.length === 0) {
    throw new Error(
      `No Application and Implementation links found: ${documentViewerRootUrl}`,
    );
  }
  const candidates: TiReferenceFigureCandidate[] = [];
  for (const link of links) {
    const sectionHtml = await readTiHtml(link.sectionUrl, true);
    if (!sectionHtml) continue;
    candidates.push(
      ...extractTiReferenceFigures(
        sectionHtml,
        link.sectionUrl,
        documentViewerRootUrl,
        link.sectionTitle,
      ),
    );
  }
  const unique = new Map<string, TiReferenceFigureCandidate>();
  for (const candidate of candidates)
    unique.set(candidate.figureUrl, candidate);
  return [...unique.values()].sort((left, right) =>
    left.figureUrl.localeCompare(right.figureUrl),
  );
};

const json = (value: string): string => JSON.stringify(value);

const renderConnections = (
  connections: TiReferenceConnections,
  indentation: string,
): string => {
  const lines = Object.entries(connections).map(
    ([pin, net]) => `${indentation}  ${json(pin)}: ${json(net)},`,
  );
  return `{{\n${lines.join("\n")}\n${indentation}}}`;
};

const renderPinArrangement = (
  arrangement: NonNullable<TiReferenceMainDevice["pinArrangement"]>,
): string => {
  const sides = SIDE_NAMES.flatMap((side) => {
    const pins = arrangement[side];
    if (!pins) return [];
    const direction =
      side === "leftSide" || side === "rightSide"
        ? "top-to-bottom"
        : "left-to-right";
    return [
      `        ${side}: { direction: ${json(direction)}, pins: ${JSON.stringify(pins)} },`,
    ];
  });
  return `{{\n${sides.join("\n")}\n      }}`;
};

const renderPinStyle = (
  arrangement: NonNullable<TiReferenceMainDevice["pinArrangement"]>,
): string | undefined => {
  const styles: string[] = [];
  for (const side of SIDE_NAMES) {
    const pins = arrangement[side] ?? [];
    for (const pin of pins.slice(1)) {
      styles.push(`        ${json(pin)}: { marginTop: 0.2 },`);
    }
  }
  if (styles.length === 0) return undefined;
  return `{{\n${styles.join("\n")}\n      }}`;
};

const renderMainDevice = (device: TiReferenceMainDevice): string => {
  if (device.schematicProjection) {
    const physicalConnections = Object.entries(
      device.schematicProjection.portMap,
    ).map(
      ([symbolPort, physicalPin]) =>
        `        ${json(symbolPort)}: ${json(`.${device.name} > .${physicalPin}`)},`,
    );
    return `    <${device.componentExportName}
      name=${json(device.name)}
      noSchematicRepresentation
    />

    <schematicsymbol
      name=${json(device.schematicProjection.name)}
      displayName=${json(device.name)}
      chipRef=${json(`.${device.name}`)}
      symbolName=${json(device.schematicProjection.symbolName)}
      schX={${device.position.x}}
      schY={${device.position.y}}
      connections={{
${physicalConnections.join("\n")}
      }}
    />`;
  }
  const lines = [
    `    <${device.componentExportName}`,
    `      name=${json(device.name)}`,
    `      schX={${device.position.x}}`,
    `      schY={${device.position.y}}`,
  ];
  if (device.schWidth !== undefined)
    lines.push(`      schWidth={${device.schWidth}}`);
  if (device.schHeight !== undefined)
    lines.push(`      schHeight={${device.schHeight}}`);
  if (device.showPinAliases !== undefined) {
    lines.push(`      showPinAliases={${device.showPinAliases}}`);
  }
  if (device.pinArrangement) {
    lines.push(
      `      schPinArrangement=${renderPinArrangement(device.pinArrangement)}`,
    );
    const pinStyle = renderPinStyle(device.pinArrangement);
    if (pinStyle) lines.push(`      schPinStyle=${pinStyle}`);
  }
  if (device.pinConnections) {
    lines.push(
      `      connections=${renderConnections(device.pinConnections, "      ")}`,
    );
  }
  lines.push("    />");
  return lines.join("\n");
};

const renderComponent = (component: TiReferenceComponent): string => {
  if (component.kind === "net-symbol") {
    return `    {/* ${component.evidenceLabel} */}
    <schematicsymbol
      name=${json(component.name)}
      displayName=${json(component.displayLabel ?? "")}
      symbolName=${json(component.symbolName)}
      schX={${component.position.x}}
      schY={${component.position.y}}
    />`;
  }
  if (component.kind === "symbolic-load") {
    return `    {/* ${component.evidenceLabel}; TI does not specify an impedance value. */}
    <schematicsymbol
      name=${json(component.name)}
      displayName=${json(component.displayLabel)}
      symbolName="resistor_down"
      schX={${component.position.x}}
      schY={${component.position.y}}
    />`;
  }
  const valueProp =
    component.kind === "resistor"
      ? "resistance"
      : component.kind === "capacitor"
        ? "capacitance"
        : "inductance";
  const rotation =
    component.rotation === undefined
      ? ""
      : `\n      schRotation=${json(`${component.rotation}deg`)}`;
  const connections = component.connections
    ? `\n      connections=${renderConnections(component.connections, "      ")}`
    : "";
  return `    <${component.kind}
      name=${json(component.name)}
      ${valueProp}=${json(component.value)}
      footprint=${json(component.footprint)}
      schX={${component.position.x}}
      schY={${component.position.y}}${rotation}${connections}
    />`;
};

const renderSharedNets = (example: TiGeneratedReferenceExample): string[] => {
  const netSymbols = example.components.filter(
    (component): component is TiReferenceNetSymbol =>
      component.kind === "net-symbol",
  );
  const symbolsByNet = new Map<string, TiReferenceNetSymbol[]>();
  for (const symbol of netSymbols) {
    const symbols = symbolsByNet.get(symbol.net) ?? [];
    symbols.push(symbol);
    symbolsByNet.set(symbol.net, symbols);
  }
  return [...symbolsByNet.entries()].flatMap(([netSelector, symbols]) => {
    if (symbols.length < 2) return [];
    const netName = netSelector.slice("net.".length);
    const connections = symbols.map(
      (symbol) => `${symbol.name}.pin${symbol.port}`,
    );
    const role = /^GND|AGND|DGND|PGND|VSS/i.test(netName) ? " isGroundNet" : "";
    return [
      `    <net name=${json(netName)}${role} connectsTo={${JSON.stringify(connections)}} />`,
    ];
  });
};

export const renderTiReferenceExample = (
  example: TiGeneratedReferenceExample,
): string => {
  const sourceLines = [
    `TI source: ${example.evidence.datasheetUrl}`,
    `Document viewer: ${example.evidence.sectionUrl}`,
    `${example.evidence.figure}: ${example.evidence.figureCaption}`,
    `Figure asset: ${example.evidence.figureUrl}`,
    `Scope: ${example.evidence.scope}`,
  ];
  const sharedNets = renderSharedNets(example);
  return `// Generated by scripts/generate-ti-reference-examples.ts.
// Do not edit by hand; update examples/ti-reference-examples.json.
import { ${example.mainDevice.componentExportName} } from ${json(example.mainDevice.modulePath)};
import "tscircuit";

/**
 * ${example.title}
 *
${sourceLines.map((line) => ` * ${line}`).join("\n")}
 */
export const ${example.id} = () => (
  <board routingDisabled schMaxTraceDistance={20}>
${renderMainDevice(example.mainDevice)}
${sharedNets.length > 0 ? `\n\n${sharedNets.join("\n")}` : ""}

${example.components.map(renderComponent).join("\n\n")}

${example.traces
  .map((trace) => {
    const endpoints = trace.path
      ? `path={${JSON.stringify(trace.path)}}`
      : `from=${json(trace.from as string)}\n      to=${json(trace.to as string)}`;
    return `    {/* ${trace.evidenceLabel} */}
    <trace ${endpoints} />`;
  })
  .join("\n\n")}
  </board>
);

export default ${example.id};
`;
};

export const renderTiReferenceBlockIndex = (
  manifest: TiReferenceExampleManifest,
): string => {
  const examples = [...manifest.examples].sort((left, right) =>
    left.id.localeCompare(right.id),
  );
  const identifiers = examples.map((example) => example.id);
  return `// Generated from examples/ti-reference-examples.json.
// Each export is a runnable, evidence-backed TI reference block.
${examples
  .map(
    (example) => `import { ${example.id} } from "./${example.id}.circuit.tsx";`,
  )
  .join("\n")}

export {
${identifiers.map((identifier) => `  ${identifier},`).join("\n")}
};

export const TiReferenceBlockComponents = {
${identifiers.map((identifier) => `  ${identifier},`).join("\n")}
} as const;

export type TiReferenceBlockName = keyof typeof TiReferenceBlockComponents;
export type TiReferenceBlockComponent =
  (typeof TiReferenceBlockComponents)[TiReferenceBlockName];
`;
};

export const getTiReferenceCoverage = (
  manifest: TiReferenceExampleManifest,
  catalog: readonly TiReferenceCatalogEntry[],
) => {
  const supportedFamilies = manifest.examples
    .map((example) => example.family)
    .sort((left, right) => left.localeCompare(right));
  const supported = new Set(supportedFamilies);
  const catalogFamilySet = new Set(catalog.map((entry) => entry.family));
  const catalogSupportedFamilies = supportedFamilies.filter((family) =>
    catalogFamilySet.has(family),
  );
  const unresolvedFamilies = catalog
    .map((entry) => entry.family)
    .filter((family) => !supported.has(family))
    .sort((left, right) => left.localeCompare(right));
  return {
    catalogFamilies: catalog.length,
    supportedFamilies,
    supportedCount: supportedFamilies.length,
    catalogSupportedFamilies,
    catalogSupportedCount: catalogSupportedFamilies.length,
    unresolvedFamilies,
    unresolvedCount: unresolvedFamilies.length,
  };
};
