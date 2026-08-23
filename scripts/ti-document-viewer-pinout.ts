import { pathToFileURL } from "node:url";

import type { TiSchematicPinRole } from "../lib/chips/get-ti-schematic-layout.ts";

const TI_ORIGIN = "https://www.ti.com";
const PACKAGE_PIN_MAP_WARNING =
  "TI's package pin-map grid provides ball/function data but not electrical pin type or description.";
const MISSING_PIN_TYPE_WARNING =
  "TI's HTML table provides pin names and descriptions but no electrical pin-type column.";

type FetchLike = (input: string | URL, init?: RequestInit) => Promise<Response>;

export interface TiDocumentPin {
  /** Package pin or ball identifier exactly as shown by TI. */
  number: string;
  name: string;
  type: string;
  description: string;
}

export interface TiPinTable {
  packageCode: string;
  packageColumn: string;
  pins: TiDocumentPin[];
  tableClass: string;
  warnings: string[];
}

export type TiPinTableParseResult =
  | { status: "ok"; table: TiPinTable }
  | {
      status: "unavailable";
      reason:
        | "pin-table-not-found"
        | "package-column-not-found"
        | "empty-pin-table"
        | "ambiguous-pin-table";
      message: string;
      packageColumns?: string[];
    };

export type TiPinoutFetchResult =
  | {
      status: "ok";
      gpn: string;
      packageCode: string;
      rootUrl: string;
      sectionUrl: string;
      table: TiPinTable;
    }
  | {
      status: "unavailable";
      gpn: string;
      packageCode: string;
      rootUrl: string;
      sectionUrl?: string;
      reason:
        | "document-not-found"
        | "pin-section-not-found"
        | "pin-table-not-found"
        | "package-column-not-found"
        | "empty-pin-table"
        | "ambiguous-pin-table"
        | "http-error";
      message: string;
      packageColumns?: string[];
    };

interface HtmlCell {
  text: string;
  colspan: number;
  rowspan: number;
}

interface ParsedHtmlTable {
  html: string;
  className: string;
  headers: string[];
  body: string[][];
  contextText: string;
}

interface PackageHint {
  code: string;
  descriptions: string[];
}

const PACKAGE_CODE_DESCRIPTION_HINTS: Record<string, string> = {
  D: "SOIC",
  DB: "SSOP",
  DBQ: "SSOP",
  DBV: "SOT-23",
  DCK: "SC-70",
  DGK: "VSSOP",
  DGS: "VSSOP",
  DRL: "SOT-5X3",
  DSE: "WSON",
  RGE: "VQFN",
  RHB: "VQFN",
  RGZ: "VQFN",
  RUG: "X2QFN",
  YBG: "DSBGA",
  YZP: "DSBGA",
  YZV: "DSBGA",
};

export interface TiPinSelectionHints {
  /** Catalog/package wording used when TI labels columns by package type. */
  packageDescription?: string;
  /** Expected physical pin count used when one TI package code has variants. */
  expectedPinCount?: number;
  /** Full orderable part number used for pinout-option columns such as A/J/K. */
  orderablePartNumber?: string;
}

export interface TscircuitPinMetadata {
  pinLabels: Record<string, readonly string[]>;
  pinRoles: Partial<Record<string, TiSchematicPinRole>>;
  physicalPinToKey: Record<string, string>;
}

const decodeHtmlEntities = (value: string) =>
  value.replace(
    /&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]+);/gi,
    (entity, body: string) => {
      if (body.startsWith("#x") || body.startsWith("#X")) {
        return String.fromCodePoint(Number.parseInt(body.slice(2), 16));
      }
      if (body.startsWith("#")) {
        return String.fromCodePoint(Number.parseInt(body.slice(1), 10));
      }
      const named: Record<string, string> = {
        amp: "&",
        apos: "'",
        deg: "°",
        gt: ">",
        hellip: "…",
        laquo: "«",
        lt: "<",
        mdash: "—",
        micro: "µ",
        minus: "−",
        nbsp: " ",
        ndash: "–",
        omega: "Ω",
        plusmn: "±",
        quot: '"',
        raquo: "»",
        reg: "®",
        times: "×",
        trade: "™",
      };
      return named[body.toLowerCase()] ?? entity;
    },
  );

const htmlToText = (html: string) =>
  decodeHtmlEntities(
    html
      .replace(/<sup\b[^>]*>[\s\S]*?<\/sup>/gi, "")
      .replace(/<\/?sub\b[^>]*>/gi, "")
      .replace(/<br\s*\/?\s*>/gi, ", ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();

const parseAttributes = (source: string) => {
  const attributes: Record<string, string> = {};
  const expression =
    /([^\s=/>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;
  for (const match of source.matchAll(expression)) {
    attributes[match[1].toLowerCase()] = decodeHtmlEntities(
      match[2] ?? match[3] ?? match[4] ?? "",
    );
  }
  return attributes;
};

const getClassTokens = (value: string | undefined) =>
  new Set((value ?? "").toLowerCase().split(/\s+/).filter(Boolean));

const extractElements = (html: string, tag: string) => {
  const expression = new RegExp(
    `<${tag}\\b([^>]*)>([\\s\\S]*?)<\\/${tag}>`,
    "gi",
  );
  return [...html.matchAll(expression)].map((match) => ({
    attributes: parseAttributes(match[1]),
    innerHtml: match[2],
    outerHtml: match[0],
    index: match.index,
  }));
};

const parseCells = (rowHtml: string) => {
  const cells: HtmlCell[] = [];
  const expression = /<(?:th|td)\b([^>]*)>([\s\S]*?)<\/(?:th|td)>/gi;
  for (const match of rowHtml.matchAll(expression)) {
    const attributes = parseAttributes(match[1]);
    cells.push({
      text: htmlToText(match[2]),
      colspan: Math.max(1, Number.parseInt(attributes.colspan ?? "1", 10)),
      rowspan: Math.max(1, Number.parseInt(attributes.rowspan ?? "1", 10)),
    });
  }
  return cells;
};

const expandRows = (rowsHtml: string[]) => {
  const grid: string[][] = [];
  const spans = new Map<number, { text: string; endRow: number }>();

  rowsHtml.forEach((rowHtml, rowIndex) => {
    const row: string[] = [];
    for (const [column, span] of spans) {
      if (rowIndex < span.endRow) row[column] = span.text;
      else spans.delete(column);
    }

    let column = 0;
    for (const cell of parseCells(rowHtml)) {
      while (row[column] !== undefined) column += 1;
      for (let offset = 0; offset < cell.colspan; offset += 1) {
        const targetColumn = column + offset;
        row[targetColumn] = cell.text;
        if (cell.rowspan > 1) {
          spans.set(targetColumn, {
            text: cell.text,
            endRow: rowIndex + cell.rowspan,
          });
        }
      }
      column += cell.colspan;
    }
    grid.push(row.map((cell) => cell ?? ""));
  });

  return grid;
};

const parseRowsFromContainer = (html: string) =>
  expandRows(extractElements(html, "tr").map((row) => row.innerHtml));

const getHeaderLabels = (headerRows: string[][]) => {
  const columnCount = Math.max(0, ...headerRows.map((row) => row.length));
  return Array.from({ length: columnCount }, (_, column) =>
    [
      ...new Set(headerRows.map((row) => row[column]?.trim()).filter(Boolean)),
    ].join(" / "),
  );
};

const parseHtmlTable = (
  tableHtml: string,
  contextHtml = "",
): ParsedHtmlTable => {
  const openingTag = tableHtml.match(/^<table\b([^>]*)>/i)?.[1] ?? "";
  const attributes = parseAttributes(openingTag);
  const head = extractElements(tableHtml, "thead")[0]?.innerHtml;
  const body = extractElements(tableHtml, "tbody")[0]?.innerHtml;

  if (head && body) {
    return {
      html: tableHtml,
      className: attributes.class ?? "",
      headers: getHeaderLabels(parseRowsFromContainer(head)),
      body: parseRowsFromContainer(body),
      contextText: htmlToText(contextHtml),
    };
  }

  const rows = extractElements(tableHtml, "tr");
  const firstBodyRow = rows.findIndex((row) => /<td\b/i.test(row.innerHtml));
  const headerRows = rows.slice(
    0,
    firstBodyRow < 0 ? rows.length : firstBodyRow,
  );
  const bodyRows = rows.slice(firstBodyRow < 0 ? rows.length : firstBodyRow);
  return {
    html: tableHtml,
    className: attributes.class ?? "",
    headers: getHeaderLabels(
      expandRows(headerRows.map((row) => row.innerHtml)),
    ),
    body: expandRows(bodyRows.map((row) => row.innerHtml)),
    contextText: htmlToText(contextHtml),
  };
};

const normalizeForMatch = (value: string) =>
  value
    .toUpperCase()
    .replace(/[‐‑‒–—−]/g, "-")
    .replace(/[^A-Z0-9]+/g, " ")
    .trim();

const splitList = (value: string) =>
  value
    .replace(/\bAND\b/gi, ",")
    .split(/[,;/]+/)
    .map((item) => item.trim())
    .filter(Boolean);

const extractTextsByClass = (html: string, className: string) =>
  ["span", "div"]
    .flatMap((tag) => extractElements(html, tag))
    .filter((element) =>
      getClassTokens(element.attributes.class).has(className),
    )
    .sort((left, right) => (left.index ?? 0) - (right.index ?? 0))
    .map((element) => htmlToText(element.innerHtml));

const parsePackageHints = (sectionHtml: string): PackageHint[] => {
  const descriptions = extractTextsByClass(sectionHtml, "pinoutdesc");
  const pinCounts = extractTextsByClass(sectionHtml, "pincountdesc");

  return descriptions.flatMap((description, index) => {
    const codes = splitList(
      description
        .replace(/^.*?\bPACKAGE\s*:?\s*/i, "")
        .replace(/\bPACKAGES?\b/gi, "")
        .trim() || description.replace(/\bPACKAGES?\b/gi, "").trim(),
    ).filter((candidate) => /^[A-Z0-9-]{1,12}$/i.test(candidate));
    const packageTypes = splitList(
      (pinCounts[index] ?? "").replace(/^\d+\s*-?\s*PIN\s*/i, ""),
    );

    return codes.map((code, codeIndex) => ({
      code,
      descriptions:
        packageTypes.length === codes.length
          ? [packageTypes[codeIndex]]
          : packageTypes,
    }));
  });
};

const isPinFunctionTable = (table: ParsedHtmlTable) => {
  const headers = table.headers.map(normalizeForMatch);
  const hasType = headers.some((header) =>
    /(?:^| )(?:TYPE|I O|DIR)(?:$| )/.test(header),
  );
  return (
    headers.some((header) =>
      /(?:^| )(?:NAME|DEFAULT FUNCTION)(?:$| )/.test(header),
    ) &&
    headers.some((header) =>
      /(?:^| )(?:PINS?|NO|NUMBER|BALLS?|PADS?|TERMINALS?)(?:$| )/.test(header),
    ) &&
    (headers.some((header) => /(?:^| )DESCRIPTION(?:$| )/.test(header)) ||
      (hasType && headers[headers.length - 1] === ""))
  );
};

const findPinFunctionTables = (sectionHtml: string) => {
  const tables = extractElements(sectionHtml, "table").map((element) => {
    const contextStart = Math.max(0, (element.index ?? 0) - 1200);
    const precedingHtml = sectionHtml.slice(contextStart, element.index ?? 0);
    const previousTableEnd = precedingHtml
      .toLowerCase()
      .lastIndexOf("</table>");
    return parseHtmlTable(
      element.outerHtml,
      previousTableEnd >= 0
        ? precedingHtml.slice(previousTableEnd + "</table>".length)
        : precedingHtml,
    );
  });
  const legacy = tables.filter(
    (table) =>
      getClassTokens(table.className).has("termfunctions") &&
      isPinFunctionTable(table),
  );
  if (legacy.length > 0) return legacy;
  return tables.filter(isPinFunctionTable);
};

const findColumn = (headers: string[], pattern: RegExp) =>
  headers.findIndex((header) => pattern.test(normalizeForMatch(header)));

const findColumns = (headers: string[], pattern: RegExp) =>
  headers.flatMap((header, column) =>
    pattern.test(normalizeForMatch(header)) ? [column] : [],
  );

const scoreDeviceColumn = (header: string, deviceName: string | undefined) => {
  if (!deviceName) return 0;
  const normalizedDevice = normalizeForMatch(deviceName).replace(/ /g, "");
  const deviceTokens = normalizeForMatch(header)
    .split(" ")
    .filter(
      (token) => token.length >= 5 && /[A-Z]/.test(token) && /\d/.test(token),
    );
  return Math.max(
    0,
    ...deviceTokens.map((token) => {
      if (token === normalizedDevice) {
        return 360 + token.length;
      }
      if (normalizedDevice.includes(token)) {
        return 300 + token.length;
      }
      if (token.includes(normalizedDevice)) {
        return 180 + normalizedDevice.length;
      }
      if (!token.includes("X")) return 0;
      const wildcard = new RegExp(
        token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/X/g, "."),
      );
      return wildcard.test(normalizedDevice) ? 320 + token.length : 0;
    }),
  );
};

const scorePackageColumn = (
  header: string,
  packageCode: string,
  packageHints: PackageHint[],
  deviceName?: string,
  selectionHints: TiPinSelectionHints = {},
) => {
  const normalizedHeader = ` ${normalizeForMatch(header)} `;
  const normalizedCode = normalizeForMatch(packageCode);
  // An explicit TI package-code header is authoritative. Count/type hints are
  // only tie-breakers for tables that omit the package code.
  let score = normalizedHeader.includes(` ${normalizedCode} `) ? 500 : 0;
  if (/(?:^| )PIN (?:NO|NUMBER)(?:$| )/.test(normalizedHeader.trim())) {
    score += 25;
  }
  score += Math.max(
    scoreDeviceColumn(header, deviceName),
    scoreDeviceColumn(header, selectionHints.orderablePartNumber),
  );
  if (
    selectionHints.expectedPinCount &&
    new RegExp(
      `(?:^|[^0-9])${selectionHints.expectedPinCount}(?:[^0-9]|$)`,
    ).test(normalizeForMatch(header))
  ) {
    score += 40;
  }
  const pinoutOption = normalizeForMatch(header).match(
    /(?:^| )PINOUT ([A-Z0-9]+)(?:$| )/,
  )?.[1];
  if (pinoutOption && deviceName && selectionHints.orderablePartNumber) {
    const normalizedDevice = normalizeForMatch(deviceName).replace(/ /g, "");
    const normalizedOrderable = normalizeForMatch(
      selectionHints.orderablePartNumber,
    ).replace(/ /g, "");
    const optionSuffix = normalizedOrderable.startsWith(normalizedDevice)
      ? normalizedOrderable.slice(normalizedDevice.length)
      : "";
    if (optionSuffix.startsWith(pinoutOption)) score += 150;
  }
  const hint = packageHints.find(
    (candidate) => normalizeForMatch(candidate.code) === normalizedCode,
  );
  for (const description of hint?.descriptions ?? []) {
    const normalizedDescription = normalizeForMatch(description);
    if (
      normalizedDescription &&
      normalizedHeader.includes(` ${normalizedDescription} `)
    ) {
      score += 50;
      continue;
    }
    for (const token of normalizedDescription.split(" ").filter(Boolean)) {
      if (token.length > 1 && normalizedHeader.includes(` ${token} `)) {
        score += 5;
      }
    }
  }
  return score;
};

const selectPackageColumn = (
  headers: string[],
  candidateColumns: number[],
  packageCode: string,
  packageHints: PackageHint[],
  deviceName?: string,
  selectionHints: TiPinSelectionHints = {},
  body: string[][] = [],
) => {
  if (candidateColumns.length === 1) return candidateColumns[0];
  const scored = candidateColumns
    .map((column) => {
      const parsedPinCount = new Set(
        body.flatMap((row) => splitPinNumbers(row[column] ?? "")),
      ).size;
      return {
        column,
        score:
          scorePackageColumn(
            headers[column] ?? "",
            packageCode,
            packageHints,
            deviceName,
            selectionHints,
          ) + (selectionHints.expectedPinCount === parsedPinCount ? 120 : 0),
      };
    })
    .sort((left, right) => right.score - left.score);
  if (
    scored[0]?.score > 0 &&
    (scored.length === 1 || scored[0].score > (scored[1]?.score ?? 0))
  ) {
    return scored[0].column;
  }
  return -1;
};

const scorePackageInContext = (context: string, packageCode: string) => {
  const normalizedContext = ` ${normalizeForMatch(context)} `;
  const normalizedCode = normalizeForMatch(packageCode);
  if (!normalizedCode) return 0;
  if (
    normalizedContext.includes(` ${normalizedCode} PACKAGE `) ||
    normalizedContext.includes(` PACKAGE ${normalizedCode} `) ||
    normalizedContext.includes(` PINS FOR ${normalizedCode} `)
  ) {
    return 200;
  }
  return normalizedCode.length >= 3 &&
    normalizedContext.includes(` ${normalizedCode} `)
    ? 40
    : 0;
};

const getTableCaptionContext = (context: string) => {
  const normalizedContext = context.toUpperCase();
  const tableCaptionStart = normalizedContext.lastIndexOf("TABLE ");
  const pinFunctionsStart = normalizedContext.lastIndexOf("PIN FUNCTIONS");
  const textAfterPinFunctions =
    pinFunctionsStart >= 0
      ? normalizeForMatch(
          context.slice(pinFunctionsStart + "PIN FUNCTIONS".length),
        )
      : "";
  const captionStart =
    pinFunctionsStart >= 0 && textAfterPinFunctions.length >= 4
      ? pinFunctionsStart
      : tableCaptionStart;
  return captionStart >= 0 ? context.slice(captionStart) : context.slice(-240);
};

const scorePinFunctionTable = (
  table: ParsedHtmlTable,
  packageCode: string,
  packageHints: PackageHint[],
  deviceName?: string,
  selectionHints: TiPinSelectionHints = {},
) => {
  const captionContext = getTableCaptionContext(table.contextText);
  const columnScore = Math.max(
    0,
    ...table.headers.map((header) =>
      scorePackageColumn(
        header,
        packageCode,
        packageHints,
        deviceName,
        selectionHints,
      ),
    ),
  );
  return (
    scorePackageInContext(table.contextText, packageCode) +
    columnScore +
    scoreDeviceColumn(captionContext, deviceName) +
    (findColumn(table.headers, /(?:^| )(?:TYPE|I O|DIR)(?:$| )/) >= 0 ? 10 : 0)
  );
};

const selectPinFunctionTables = (
  tables: ParsedHtmlTable[],
  packageCode: string,
  packageHints: PackageHint[],
  deviceName?: string,
  selectionHints: TiPinSelectionHints = {},
) => {
  if (tables.length === 1) return [tables[0]];
  const scored = tables
    .map((table) => ({
      table,
      score: scorePinFunctionTable(
        table,
        packageCode,
        packageHints,
        deviceName,
        selectionHints,
      ),
    }))
    .sort((left, right) => right.score - left.score);
  const top = scored[0];
  if (!top || top.score <= 0) return undefined;
  const topHasExactPackageContext =
    scorePackageInContext(top.table.contextText, packageCode) >= 200;
  if (topHasExactPackageContext) {
    const topDeviceScore = scoreDeviceColumn(
      getTableCaptionContext(top.table.contextText),
      deviceName,
    );
    const packageTables = scored.filter((candidate) => {
      const captionContext = getTableCaptionContext(
        candidate.table.contextText,
      );
      const hasExactPackageContext =
        scorePackageInContext(candidate.table.contextText, packageCode) >= 200;
      const deviceScore = scoreDeviceColumn(captionContext, deviceName);
      return (
        hasExactPackageContext &&
        (topDeviceScore === 0
          ? deviceScore === 0
          : deviceScore === topDeviceScore)
      );
    });
    if (packageTables.length > 0) {
      return packageTables.map(({ table }) => table);
    }
  }
  if (top.score > (scored[1]?.score ?? 0)) return [top.table];
  return undefined;
};

const deduplicateEquivalentColumns = (
  table: ParsedHtmlTable,
  columns: number[],
) =>
  columns.filter(
    (column, index) =>
      !columns
        .slice(0, index)
        .some(
          (previousColumn) =>
            normalizeForMatch(table.headers[previousColumn] ?? "") ===
              normalizeForMatch(table.headers[column] ?? "") &&
            table.body.every((row) => row[previousColumn] === row[column]),
        ),
  );

const expandPinRange = (value: string) => {
  const range = value.match(/^([A-Z]*)(\d+)\s*[-–—]\s*([A-Z]*)(\d+)$/i);
  if (!range) return [value];
  const leftPrefix = range[1].toUpperCase();
  const rightPrefix = (range[3] || range[1]).toUpperCase();
  const start = Number(range[2]);
  const end = Number(range[4]);
  if (leftPrefix !== rightPrefix || end < start || end - start > 1000) {
    return [value];
  }
  return Array.from(
    { length: end - start + 1 },
    (_, offset) => `${leftPrefix}${start + offset}`,
  );
};

const splitPinNumbers = (value: string) =>
  value
    .split(/[,;]+/)
    .map((pin) => pin.trim())
    .filter((pin) => pin && !/^(?:-|—|–|N\/A|NA)$/i.test(pin))
    .flatMap(expandPinRange)
    .filter((pin) =>
      /^(?:[A-Z]{0,3}\d+[A-Z]?|EP|EPAD|PAD|DAP|TAB|POWERPAD|THERMAL PAD)$/i.test(
        pin,
      ),
    );

const deduplicatePins = (pins: TiDocumentPin[]) => {
  const result: TiDocumentPin[] = [];
  const seen = new Map<string, TiDocumentPin>();
  const warnings: string[] = [];
  for (const pin of pins) {
    const previous = seen.get(pin.number);
    if (!previous) {
      seen.set(pin.number, pin);
      result.push(pin);
      continue;
    }
    if (
      previous.name !== pin.name ||
      previous.type !== pin.type ||
      previous.description !== pin.description
    ) {
      warnings.push(
        `Pin ${pin.number} appears more than once with conflicting data; kept the first row.`,
      );
    }
  }
  return { pins: result, warnings };
};

const parsePackagePinMap = (
  sectionHtml: string,
  packageCode: string,
): TiPinTable | undefined => {
  const pins = extractElements(sectionHtml, "td").flatMap((cell) => {
    const marker = extractElements(cell.innerHtml, "a")
      .map((anchor) => anchor.attributes.id ?? "")
      .find((id) => /^pm_.+_[A-Z]{1,3}\d{1,3}$/i.test(id));
    const number = marker?.match(/_([A-Z]{1,3}\d{1,3})$/i)?.[1];
    const name = htmlToText(cell.innerHtml);
    if (!number || !name) return [];
    return [{ number: number.toUpperCase(), name, type: "", description: "" }];
  });
  if (pins.length === 0) return undefined;

  const deduplicated = deduplicatePins(pins);
  return {
    packageCode,
    packageColumn: "ball coordinate from pm_*_<ball> anchor",
    pins: deduplicated.pins,
    tableClass: "termfunctions package-pin-map",
    warnings: [PACKAGE_PIN_MAP_WARNING, ...deduplicated.warnings],
  };
};

const parseSelectedPinFunctionTable = (
  table: ParsedHtmlTable,
  packageCode: string,
  packageHints: PackageHint[],
  deviceName: string | undefined,
  selectionHints: TiPinSelectionHints,
): TiPinTableParseResult => {
  const nameColumns = findColumns(
    table.headers,
    /(?:^| )(?:NAME|DEFAULT FUNCTION)(?:$| )/,
  );
  const nameColumn = nameColumns[0] ?? -1;
  const typeColumn = findColumn(
    table.headers,
    /(?:^| )(?:TYPE|I O|DIR)(?:$| )/,
  );
  const explicitDescriptionColumn = findColumn(
    table.headers,
    /(?:^| )DESCRIPTION(?:$| )/,
  );
  const descriptionColumn =
    explicitDescriptionColumn >= 0
      ? explicitDescriptionColumn
      : normalizeForMatch(table.headers[table.headers.length - 1] ?? "") === ""
        ? table.headers.length - 1
        : -1;
  const excluded = new Set([...nameColumns, typeColumn, descriptionColumn]);
  const remainingColumns = table.headers
    .map((_, column) => column)
    .filter((column) => !excluded.has(column));
  const likelyPackageColumns = remainingColumns.filter((column) => {
    const header = table.headers[column] ?? "";
    return (
      /(?:^| )(?:PINS?|NO|NUMBER|BALLS?|PADS?|TERMINALS?)(?:$| )/.test(
        normalizeForMatch(header),
      ) ||
      scorePackageColumn(
        header,
        packageCode,
        packageHints,
        deviceName,
        selectionHints,
      ) > 0
    );
  });
  const packageColumns = deduplicateEquivalentColumns(
    table,
    likelyPackageColumns.length > 0 ? likelyPackageColumns : remainingColumns,
  );
  const packageColumn = selectPackageColumn(
    table.headers,
    packageColumns,
    packageCode,
    packageHints,
    deviceName,
    selectionHints,
    table.body,
  );

  if (nameColumn < 0 || descriptionColumn < 0 || packageColumn < 0) {
    return {
      status: "unavailable",
      reason: "package-column-not-found",
      message: `Could not select the ${packageCode} package pin column from TI's table.`,
      packageColumns: packageColumns.map(
        (column) => table.headers[column] ?? `column ${column + 1}`,
      ),
    };
  }

  const parsedPins = table.body.flatMap((row) => {
    const numbers = splitPinNumbers(row[packageColumn] ?? "");
    const rawName = row[nameColumn]?.trim() ?? "";
    const type = typeColumn >= 0 ? (row[typeColumn]?.trim() ?? "") : "";
    const description = row[descriptionColumn]?.trim() ?? "";
    return numbers.map((number) => ({
      number,
      name:
        !rawName && /^(?:THERMAL PAD|EP|EPAD|PAD|DAP|POWERPAD)$/i.test(number)
          ? "THERMAL_PAD"
          : rawName,
      type,
      description,
    }));
  });
  const deduplicated = deduplicatePins(parsedPins);
  if (deduplicated.pins.length === 0) {
    return {
      status: "unavailable",
      reason: "empty-pin-table",
      message: `TI's ${packageCode} package column contains no pin identifiers.`,
    };
  }

  return {
    status: "ok",
    table: {
      packageCode,
      packageColumn: table.headers[packageColumn],
      pins: deduplicated.pins,
      tableClass: table.className,
      warnings: [
        ...(typeColumn < 0 ? [MISSING_PIN_TYPE_WARNING] : []),
        ...deduplicated.warnings,
      ],
    },
  };
};

export const parseTiPinFunctionsSection = (
  sectionHtml: string,
  packageCode: string,
  deviceName?: string,
  selectionHints: TiPinSelectionHints = {},
): TiPinTableParseResult => {
  const packagePinMap = parsePackagePinMap(sectionHtml, packageCode);
  if (packagePinMap) return { status: "ok", table: packagePinMap };

  const tables = findPinFunctionTables(sectionHtml);
  if (tables.length === 0) {
    return {
      status: "unavailable",
      reason: "pin-table-not-found",
      message:
        "TI's Pin Configuration and Functions section has no parseable HTML pin-function table.",
    };
  }
  const packageHints = parsePackageHints(sectionHtml);
  const callerDescriptions = [
    PACKAGE_CODE_DESCRIPTION_HINTS[packageCode.toUpperCase()],
    selectionHints.packageDescription,
  ].filter((description): description is string => Boolean(description));
  const matchingPackageHint = packageHints.find(
    (hint) => normalizeForMatch(hint.code) === normalizeForMatch(packageCode),
  );
  if (matchingPackageHint) {
    matchingPackageHint.descriptions.push(...callerDescriptions);
  } else if (callerDescriptions.length > 0) {
    packageHints.push({ code: packageCode, descriptions: callerDescriptions });
  }
  const selectedTables = selectPinFunctionTables(
    tables,
    packageCode,
    packageHints,
    deviceName,
    selectionHints,
  );
  if (!selectedTables) {
    return {
      status: "unavailable",
      reason: "ambiguous-pin-table",
      message: `TI exposes ${tables.length} pin-function tables; package-to-table selection is ambiguous.`,
    };
  }
  const parsedTables = selectedTables.map((table) =>
    parseSelectedPinFunctionTable(
      table,
      packageCode,
      packageHints,
      deviceName,
      selectionHints,
    ),
  );
  const successfulTables = parsedTables.flatMap((result) =>
    result.status === "ok" ? [result.table] : [],
  );
  if (successfulTables.length === 0) {
    return parsedTables[0] as Exclude<TiPinTableParseResult, { status: "ok" }>;
  }

  const deduplicated = deduplicatePins(
    successfulTables.flatMap((table) => table.pins),
  );
  const skippedTableWarnings = parsedTables.flatMap((result) =>
    result.status === "unavailable"
      ? [`Skipped a related TI table: ${result.message}`]
      : [],
  );
  return {
    status: "ok",
    table: {
      packageCode,
      packageColumn: [
        ...new Set(successfulTables.map((table) => table.packageColumn)),
      ].join(" + "),
      pins: deduplicated.pins,
      tableClass: [
        ...new Set(successfulTables.map((table) => table.tableClass)),
      ].join(" "),
      warnings: [
        ...(successfulTables.length > 1
          ? [
              `Combined ${successfulTables.length} package-specific TI pin tables.`,
            ]
          : []),
        ...new Set(successfulTables.flatMap((table) => table.warnings)),
        ...skippedTableWarnings,
        ...deduplicated.warnings,
      ],
    },
  };
};

const isPinFunctionsTitle = (title: string) => {
  const normalized = normalizeForMatch(title).replace(/^(?:\d+ )+/, "");
  return (
    /^(?:PIN|TERMINAL) CONFIGURATIONS?(?: |$)/.test(normalized) ||
    /^(?:PIN|TERMINAL) FUNCTIONS(?: |$)/.test(normalized)
  );
};

export const findTiPinConfigurationSectionUrls = (
  rootHtml: string,
  rootUrl: string,
  deviceName?: string,
) => {
  const candidates: { url: string; score: number; index: number }[] = [];
  for (const [index, anchor] of extractElements(rootHtml, "a").entries()) {
    const attributes = anchor.attributes;
    const title =
      attributes["data-navtitle"] ??
      attributes["data-chaptertitle"] ??
      htmlToText(anchor.innerHtml);
    const chapterTitle = attributes["data-chaptertitle"] ?? "";
    const isSupplementalPinData =
      isPinFunctionsTitle(chapterTitle) &&
      /^(?:PIN ATTRIBUTES|SIGNAL DESCRIPTIONS)$/.test(normalizeForMatch(title));
    if (!isPinFunctionsTitle(title) && !isSupplementalPinData) continue;
    const href = attributes.href;
    if (!href) continue;
    const url = new URL(href, rootUrl);
    url.hash = "";
    if (!candidates.some((candidate) => candidate.url === url.href)) {
      candidates.push({
        url: url.href,
        score: scoreDeviceColumn(title, deviceName),
        index,
      });
    }
  }
  return candidates
    .sort((left, right) => right.score - left.score || left.index - right.index)
    .map(({ url }) => url);
};

export const findTiPinConfigurationSectionUrl = (
  rootHtml: string,
  rootUrl: string,
  deviceName?: string,
) => findTiPinConfigurationSectionUrls(rootHtml, rootUrl, deviceName)[0];

export const findTiPackagePinMapSectionUrl = (
  rootHtml: string,
  rootUrl: string,
  packageCode: string,
) => {
  const normalizedPackageCode = normalizeForMatch(packageCode);
  for (const anchor of extractElements(rootHtml, "a")) {
    const attributes = anchor.attributes;
    const title =
      attributes["data-navtitle"] ??
      attributes["data-sectiontitle"] ??
      htmlToText(anchor.innerHtml);
    const match = normalizeForMatch(title).match(
      /^(.+?) PACKAGE PIN MAPS?(?: |$)/,
    );
    if (!match) continue;
    const packageCodes = splitList(match[1]).map(normalizeForMatch);
    if (!packageCodes.includes(normalizedPackageCode)) continue;
    const href = attributes.href;
    if (!href) continue;
    const url = new URL(href, rootUrl);
    url.hash = "";
    return url.href;
  }
  return undefined;
};

const unavailableFromParse = (
  result: Exclude<TiPinTableParseResult, { status: "ok" }>,
  context: {
    gpn: string;
    packageCode: string;
    rootUrl: string;
    sectionUrl: string;
  },
): TiPinoutFetchResult => ({ ...context, ...result });

export const fetchTiDocumentViewerPinout = async (
  gpn: string,
  packageCode: string,
  options: TiPinSelectionHints & {
    fetch?: FetchLike;
    tiOrigin?: string;
  } = {},
): Promise<TiPinoutFetchResult> => {
  const normalizedGpn = gpn.trim().toUpperCase();
  const normalizedPackageCode = packageCode.trim().toUpperCase();
  const tiOrigin = options.tiOrigin ?? TI_ORIGIN;
  const fetchPage = options.fetch ?? fetch;
  const rootUrl = new URL(
    `/document-viewer/${encodeURIComponent(normalizedGpn)}/datasheet`,
    tiOrigin,
  ).href;
  const context = {
    gpn: normalizedGpn,
    packageCode: normalizedPackageCode,
    rootUrl,
  };

  let rootResponse: Response;
  try {
    rootResponse = await fetchPage(rootUrl, {
      headers: { accept: "text/html,application/xhtml+xml" },
    });
  } catch (error) {
    return {
      status: "unavailable",
      ...context,
      reason: "http-error",
      message: `TI document-viewer request failed: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
  if (!rootResponse.ok) {
    return {
      status: "unavailable",
      ...context,
      reason: rootResponse.status === 404 ? "document-not-found" : "http-error",
      message: `TI document-viewer returned HTTP ${rootResponse.status} for ${normalizedGpn}.`,
    };
  }

  const rootHtml = await rootResponse.text();
  const sectionUrls = [
    findTiPackagePinMapSectionUrl(rootHtml, rootUrl, normalizedPackageCode),
    ...findTiPinConfigurationSectionUrls(rootHtml, rootUrl, normalizedGpn),
  ].filter(
    (url, index, urls): url is string =>
      Boolean(url) && urls.indexOf(url) === index,
  );
  if (sectionUrls.length === 0) {
    const rootParse = parseTiPinFunctionsSection(
      rootHtml,
      normalizedPackageCode,
      normalizedGpn,
      options,
    );
    if (rootParse.status === "ok") {
      return {
        status: "ok",
        ...context,
        sectionUrl: rootUrl,
        table: rootParse.table,
      };
    }
    if (rootParse.reason !== "pin-table-not-found") {
      return unavailableFromParse(rootParse, {
        ...context,
        sectionUrl: rootUrl,
      });
    }
    return {
      status: "unavailable",
      ...context,
      reason: "pin-section-not-found",
      message: `TI's HTML datasheet for ${normalizedGpn} has neither a Pin/Terminal Functions section nor a ${normalizedPackageCode} package pin-map link.`,
    };
  }

  let lastUnavailable: TiPinoutFetchResult | undefined;
  const knownSectionUrls = new Set(sectionUrls);
  for (
    let sectionIndex = 0;
    sectionIndex < sectionUrls.length && sectionIndex < 16;
    sectionIndex += 1
  ) {
    const sectionUrl = sectionUrls[sectionIndex];
    let sectionResponse: Response;
    try {
      sectionResponse = await fetchPage(sectionUrl, {
        headers: { accept: "text/html,application/xhtml+xml" },
      });
    } catch (error) {
      lastUnavailable = {
        status: "unavailable",
        ...context,
        sectionUrl,
        reason: "http-error",
        message: `TI pin-section request failed: ${error instanceof Error ? error.message : String(error)}`,
      };
      continue;
    }
    if (!sectionResponse.ok) {
      lastUnavailable = {
        status: "unavailable",
        ...context,
        sectionUrl,
        reason: "http-error",
        message: `TI pin-section request returned HTTP ${sectionResponse.status}.`,
      };
      continue;
    }

    const sectionHtml = await sectionResponse.text();
    const parsed = parseTiPinFunctionsSection(
      sectionHtml,
      normalizedPackageCode,
      normalizedGpn,
      options,
    );
    if (parsed.status === "ok") {
      return { status: "ok", ...context, sectionUrl, table: parsed.table };
    }
    lastUnavailable = unavailableFromParse(parsed, {
      ...context,
      sectionUrl,
    });

    const nestedSectionUrls = [
      findTiPackagePinMapSectionUrl(
        sectionHtml,
        sectionUrl,
        normalizedPackageCode,
      ),
      ...findTiPinConfigurationSectionUrls(
        sectionHtml,
        sectionUrl,
        normalizedGpn,
      ),
    ].filter((url): url is string => Boolean(url));
    for (const nestedSectionUrl of nestedSectionUrls) {
      if (knownSectionUrls.has(nestedSectionUrl)) continue;
      knownSectionUrls.add(nestedSectionUrl);
      sectionUrls.push(nestedSectionUrl);
    }
  }
  return lastUnavailable as TiPinoutFetchResult;
};

const comparePhysicalPins = (left: string, right: string) =>
  left.localeCompare(right, "en", { numeric: true, sensitivity: "base" });

export const sanitizeTiPinLabel = (value: string, fallback: string) => {
  let label = value.trim();
  const isActiveLow =
    /^[!/~]/.test(label) ||
    /(?:#|\u0305)$/.test(label) ||
    /\boverbar\b/i.test(label);
  label = label
    .replace(/^[!/~]+/, "")
    .replace(/(?:#|\u0305)+$/, "")
    .replace(/[−–—-]$/g, "_N")
    .replace(/\+$/g, "_P")
    .replace(/[^A-Za-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_+/g, "_");
  if (!label) label = fallback;
  if (isActiveLow && !/^N_/i.test(label) && !/_N$/i.test(label)) {
    label = `N_${label}`;
  }
  return label;
};

const roleFromOfficialPin = (
  pin: TiDocumentPin,
): TiSchematicPinRole | undefined => {
  const type = normalizeForMatch(pin.type);
  const name = sanitizeTiPinLabel(pin.name, "").toUpperCase();
  const description = normalizeForMatch(pin.description);
  if (
    /^(?:NC|N_C|DNC|DNU|RESERVED)$/.test(name) ||
    /(?:NO INTERNAL CONNECTION|DO NOT CONNECT|NOT CONNECTED)/.test(description)
  ) {
    return "no-connect";
  }
  if (/(?:^| )(?:GND|GROUND)(?:$| )/.test(type) || /GND|VSS/.test(name)) {
    return "ground";
  }
  if (
    /(?:SUPPLY|POWER PIN|POWER INPUT|BIAS POWER)/.test(description) ||
    /^(?:V_P|V_N|VDD|VCC|AVDD|AVCC|DVDD|DVCC|PVDD|VBAT|VBUS|VIO)(?:$|_)/.test(
      name,
    )
  ) {
    return "power";
  }
  if (/^(?:P|POWER|PWR|SUPPLY)$/.test(type)) return "power";
  if (/^(?:I O|IO|B|BIDIRECTIONAL)$/.test(type)) return "bidirectional";
  if (/^(?:O|OUTPUT|OD|OPEN DRAIN)$/.test(type)) return "output";
  if (/^(?:I|INPUT)$/.test(type)) return "input";
  return undefined;
};

export const toTscircuitPinMetadata = (
  pins: readonly TiDocumentPin[],
): TscircuitPinMetadata => {
  const sortedPins = [...pins].sort((left, right) =>
    comparePhysicalPins(left.number, right.number),
  );
  const numericPinNumbers = sortedPins
    .map((pin) => (/^\d+$/.test(pin.number) ? Number(pin.number) : undefined))
    .filter((pin): pin is number => pin !== undefined);
  let nextPinNumber = Math.max(0, ...numericPinNumbers) + 1;
  const usedKeys = new Set<string>();
  const pinLabels: Record<string, readonly string[]> = {};
  const pinRoles: Partial<Record<string, TiSchematicPinRole>> = {};
  const physicalPinToKey: Record<string, string> = {};

  for (const pin of sortedPins) {
    if (physicalPinToKey[pin.number]) continue;
    let key = /^\d+$/.test(pin.number) ? `pin${Number(pin.number)}` : "";
    if (!key || usedKeys.has(key)) {
      while (usedKeys.has(`pin${nextPinNumber}`)) nextPinNumber += 1;
      key = `pin${nextPinNumber}`;
      nextPinNumber += 1;
    }
    usedKeys.add(key);
    physicalPinToKey[pin.number] = key;

    const functionalLabel = sanitizeTiPinLabel(pin.name, `PIN_${pin.number}`);
    const aliases = [functionalLabel];
    if (!/^\d+$/.test(pin.number)) {
      const physicalAlias = sanitizeTiPinLabel(pin.number, key.toUpperCase());
      if (!aliases.includes(physicalAlias)) aliases.push(physicalAlias);
    }
    pinLabels[key] = aliases;
    const role = roleFromOfficialPin(pin);
    if (role) pinRoles[key] = role;
  }

  return { pinLabels, pinRoles, physicalPinToKey };
};

export const renderTiPinMetadataSource = (pins: readonly TiDocumentPin[]) => {
  const metadata = toTscircuitPinMetadata(pins);
  const renderRecord = (record: object) =>
    JSON.stringify(record, null, 2).replace(/"([^"\\]+)":/g, "$1:");
  return [
    `const pinLabels = ${renderRecord(metadata.pinLabels)} as const;`,
    "",
    `const pinRoles = ${renderRecord(metadata.pinRoles)} as const;`,
    "",
    "const schematicLayout = getTiSchematicLayout(pinLabels, { pinRoles });",
  ].join("\n");
};

const isDirectExecution = () => {
  const entry = process.argv[1];
  return Boolean(entry && import.meta.url === pathToFileURL(entry).href);
};

const runCli = async () => {
  const [gpn, packageCode] = process.argv.slice(2);
  if (!gpn || !packageCode) {
    console.error(
      "Usage: bun scripts/ti-document-viewer-pinout.ts <GPN> <PACKAGE_CODE>",
    );
    process.exitCode = 1;
    return;
  }
  const result = await fetchTiDocumentViewerPinout(gpn, packageCode);
  console.log(JSON.stringify(result, null, 2));
  if (result.status === "unavailable") process.exitCode = 2;
};

if (isDirectExecution()) await runCli();
