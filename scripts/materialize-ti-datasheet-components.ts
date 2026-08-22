import { relative, resolve } from "node:path";
import ts from "typescript";

export type TiDatasheetCatalogEntry = {
  family: string;
  source: "existing" | "jlcpcb" | "ti-datasheet";
  componentExportName: string;
  manufacturerPartNumber: string;
  packageCode?: string;
  pinCount: number;
  packageDrawing?: string;
};

export type TiOfficialPin = {
  number: string;
  name: string;
  type: string;
  description: string;
};

type TiPinoutOk = {
  family: string;
  catalogSource: "ti-datasheet";
  manufacturerPartNumber: string;
  expectedPinCount: number;
  status: "ok";
  pins: TiOfficialPin[];
};

type TiPinoutUnavailable = {
  family: string;
  catalogSource: "ti-datasheet";
  manufacturerPartNumber: string;
  expectedPinCount: number;
  status: "unavailable";
  reason: string;
  message: string;
};

type TiPinoutRecord = TiPinoutOk | TiPinoutUnavailable;

export type CommittedFootprintTarget = {
  family: string;
  componentExportName: string;
  manufacturerPartNumber: string;
  packageDrawing?: string;
  status: "source-ready" | "unavailable";
  drawingId?: string;
  footprintPropSource?: string;
  physicalPadToPortHint?: Record<string, string>;
  ignoredPhysicalPins?: string[];
  /** Official contacts omitted by the cached function table (usually exposed pads). */
  supplementalPins?: TiOfficialPin[];
  coordinatePinAssignment?: CoordinatePinAssignment;
  coordinateGrid?: CoordinateGridFootprint;
  footprintSource?: "exact-jlc-drawing" | "official-ti-drawing";
  provenanceComment?: string;
  reason?: string;
};

export type CommittedFootprintCatalog = {
  schemaVersion: 1;
  targetCount: 111;
  coverage: {
    targetEntries: number;
    sourceReadyEntries: number;
    unavailableEntries: number;
  };
  targets: Record<string, CommittedFootprintTarget>;
};

export type TiGeneratedPinRole =
  | "power"
  | "ground"
  | "input"
  | "control"
  | "bidirectional"
  | "output"
  | "thermal"
  | "unknown"
  | "no-connect";

export type TiGeneratedPin = {
  pinKey: string;
  physical: string;
  name: string;
  labels: string[];
  role: TiGeneratedPinRole;
  attributes?: {
    requiresPower?: true;
    requiresGround?: true;
    doNotConnect?: true;
  };
};

export type CoordinatePinAssignment = {
  mode: "physical-alias";
  /** Explicit physical row order; JEDEC coordinate lettering is not alphabetic. */
  rowOrder: string[];
  /** Defaults to ascending numeric columns when omitted. */
  columnOrder?: number[];
};

export type CoordinateGridFootprint = {
  /** The letter component of coordinates in JEDEC order. */
  rowOrder: string[];
  /** The numeric component of coordinates in physical order. */
  columnOrder: number[];
  /** Normal BGAs use `y`; optical packages may put letters on x. */
  rowAxis?: "x" | "y";
  /** Shared pitch for axes that do not have a more specific pitch. */
  pitchMm?: number;
  rowPitchMm?: number;
  columnPitchMm?: number;
  /** Optional exact positions along the row axis, keyed by row letter. */
  rowPositionsMm?: Record<string, number>;
  /** Optional exact positions along the column axis, keyed by column number. */
  columnPositionsMm?: Record<string, number>;
  padShape: "circle" | "rect";
  padDiameterMm?: number;
  padWidthMm?: number;
  padHeightMm?: number;
};

type ResolvedFootprint = {
  drawingId: string;
  footprintPropSource?: string;
  physicalPadToPortHint: Record<string, string>;
  ignoredPhysicalPins: string[];
  supplementalPins: TiOfficialPin[];
  coordinatePinAssignment?: CoordinatePinAssignment;
  coordinateGrid?: CoordinateGridFootprint;
  source: "exact-jlc-drawing" | "official-ti-drawing";
  provenanceComment: string;
};

export type MaterializationBlocker = {
  family: string;
  manufacturerPartNumber: string;
  componentExportName: string;
  codes: string[];
  details: string[];
};

const normalizeWhitespace = (value: string) =>
  value.replace(/\s+/g, " ").trim();

const normalizeAlias = (value: string) =>
  normalizeWhitespace(value)
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

const normalizePhysical = (value: string) => normalizeAlias(value);

const getNormalizedPinFunctions = (name: string) => {
  const functions = name
    .split(/\s*\/\s*/)
    .map(normalizeAlias)
    .filter(Boolean);
  return [...new Set(functions.length > 0 ? functions : ["NC"])];
};

const getTsxSyntaxErrors = (source: string, fileName: string) =>
  (
    ts.transpileModule(source, {
      fileName,
      reportDiagnostics: true,
      compilerOptions: {
        jsx: ts.JsxEmit.ReactJSX,
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2020,
      },
    }).diagnostics ?? []
  ).filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error);

const isNumericPhysical = (value: string) => /^\d+$/.test(value.trim());

const isCoordinatePhysical = (value: string) =>
  /^[A-Z]{1,3}\d{1,3}$/i.test(value.trim());

const isNoConnect = (value: string) =>
  /(?:^|_)(?:NC|DNC|DNU|N_C|NO_CONNECT|NOT_CONNECTED|RESERVED|RSVD|DO_NOT_CONNECT)(?:$|_)/.test(
    value,
  );

const isGround = (value: string) =>
  /(?:^|_)(?:GND|AGND|DGND|PGND|SGND|VSS|VSSA|VSSD|GROUND)(?:\d*|$|_)/.test(
    value,
  );

const isPower = (value: string) =>
  /(?:^|_)(?:POWER|POWER_SUPPLY|SUPPLY|VCC|VDD|AVCC|AVDD|DVCC|DVDD|PVCC|PVDD|IOVCC|IOVDD|VDDA|VDDD|VDDIO|VBAT|VBUS|VIN|VSUPPLY|VBIAS|VREF|VREG|VLDO|VMOTOR|VM|VPP|VEE)(?:\d*|$|_)/.test(
    value,
  );

const isControl = (value: string) =>
  /(?:^|_)(?:EN|ENABLE|RESET|RST|SHDN|SHUTDOWN|SLEEP|WAKE|CLK|CLOCK|SCK|SCL|CS|CE|OE|SEL|MODE|ADDR|SYNC|LATCH|TRIG|TRIGGER|PWM|ILIM|ISET|FREQ|SS|BOOT|TEST)(?:\d*|$|_)/.test(
    value,
  );

const isThermalContact = (value: string) =>
  /^(?:EP|EPAD|PAD|DAP|POWERPAD|PADDLE|EXPOSED|EXPOSED_PAD|THERMAL|THERMALPAD|THERMAL_PAD|QFN_PAD|VQFN_THERMAL_PAD)$/.test(
    value,
  );

export const deriveTiPinRole = (pin: TiOfficialPin): TiGeneratedPinRole => {
  const name = normalizeAlias(pin.name);
  const type = normalizeAlias(pin.type);
  const description = normalizeAlias(pin.description);
  const combined = `${name}_${type}_${description}`;
  const explicitBidirectional =
    /(?:INPUT_OUTPUT|INPUTOUTPUT|I_O|BIDIRECTIONAL|BI_DIRECTIONAL)/.test(type);
  const explicitOutput = /(?:^|_)(?:OUTPUT|O)(?:$|_)/.test(type);
  const explicitInput = /(?:^|_)(?:INPUT|I)(?:$|_)/.test(type);
  const descriptionBidirectional =
    /^(?:INPUT_OUTPUT|BIDIRECTIONAL|BI_DIRECTIONAL)(?:_|$)/.test(description);
  const descriptionOutput = /^OUTPUT(?:_|$)/.test(description);
  const descriptionInput = /^INPUT(?:_|$)/.test(description);
  const bidirectionalName =
    /(?:^|_)(?:SDA|SDIO|GPIO|DIO|IO|DQ|DATA)(?:\d*|$|_)/.test(name);
  const outputName =
    /(?:^|_)(?:OUT|OUTPUT|VOUT|IOUT|TX|TXD|SDO|DOUT|MISO|SW|LX|PHASE|GATE|DRV|LED|INT|IRQ|ALERT|FAULT|PGOOD|POWERGOOD|STAT|READY|DONE|LOCK|CLKOUT|REFOUT|Y|Q|Z)(?:\d*|$|_)/.test(
      name,
    );
  const inputName = /(?:^|_)(?:IN|AIN|RX|RXD|SDI|DIN)(?:\d*|$|_)/.test(name);
  const descriptionIndicatesPower =
    /^(?:(?:ANALOG|DIGITAL|INPUT|OUTPUT)_)?(?:POWER_)?SUPPLY(?:_|$)|^POWER(?:_|$)/.test(
      description,
    );
  const descriptionDisclaimsGround =
    /(?:NOT|NO)_(?:AN?_)?ELECTRICAL(?:LY)?_GROUND/.test(description) ||
    /(?:GND|GROUND(?:ED)?|VSS).*?_OR_.*?FLOAT|FLOAT.*?_OR_.*?(?:GND|GROUND|VSS)/.test(
      description,
    );
  const descriptionIndicatesGround =
    !descriptionDisclaimsGround &&
    (/^(?:(?:ANALOG|DIGITAL|POWER)_)?GROUND(?:_|$)/.test(description) ||
      /(?:THERMAL|EXPOSED|QFN).*?(?:CONNECT|CONNECTION).*?(?:GND|GROUND|VSS)/.test(
        `${name}_${description}`,
      ));
  const isMosfetGate =
    name === "GATE" && /(?:^|_)MOSFET(?:_|$)/.test(description);

  if (isNoConnect(combined)) return "no-connect";
  if (isGround(name) || isGround(type)) return "ground";
  if (isMosfetGate) return "control";
  if (explicitBidirectional || descriptionBidirectional) {
    return "bidirectional";
  }
  if (explicitOutput || descriptionOutput) return "output";
  if (isControl(name)) return "control";
  if (
    type === "P" ||
    isPower(type) ||
    isPower(name) ||
    descriptionIndicatesPower
  ) {
    return "power";
  }
  if (bidirectionalName) return "bidirectional";
  if (explicitInput || descriptionInput) return "input";
  if (descriptionIndicatesGround) return "ground";
  if (isThermalContact(name)) return "thermal";
  if (outputName) return "output";
  if (inputName) return "input";
  return "unknown";
};

const attributesForRole = (
  role: TiGeneratedPinRole,
): TiGeneratedPin["attributes"] => {
  if (role === "power") return { requiresPower: true };
  if (role === "ground") return { requiresGround: true };
  if (role === "no-connect") return { doNotConnect: true };
  return undefined;
};

const getStaticStringArray = (
  expression: ts.Expression,
): string[] | undefined => {
  if (ts.isStringLiteralLike(expression)) return [expression.text];
  if (!ts.isArrayLiteralExpression(expression)) return undefined;
  const values: string[] = [];
  for (const element of expression.elements) {
    if (!ts.isStringLiteralLike(element)) return undefined;
    values.push(element.text);
  }
  return values;
};

const getPropertyName = (name: ts.PropertyName, sourceFile: ts.SourceFile) => {
  if (ts.isIdentifier(name) || ts.isStringLiteralLike(name)) return name.text;
  return name.getText(sourceFile);
};

/** Extract the literal aliases from the donor component's `pinLabels` map. */
export const extractDonorPinLabels = (
  sourceText: string,
  sourcePath = "donor.circuit.tsx",
): Record<string, string[]> => {
  const sourceFile = ts.createSourceFile(
    sourcePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  let labels: Record<string, string[]> | undefined;

  const visit = (node: ts.Node) => {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "pinLabels" &&
      node.initializer
    ) {
      const initializer = ts.isAsExpression(node.initializer)
        ? node.initializer.expression
        : node.initializer;
      if (!ts.isObjectLiteralExpression(initializer)) return;
      const parsed: Record<string, string[]> = {};
      for (const property of initializer.properties) {
        if (!ts.isPropertyAssignment(property)) continue;
        const pinKey = getPropertyName(property.name, sourceFile);
        if (!/^pin\d+$/.test(pinKey)) continue;
        const values = getStaticStringArray(property.initializer);
        if (values) parsed[pinKey] = values;
      }
      labels = parsed;
      return;
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  if (!labels || Object.keys(labels).length === 0) {
    throw new Error(`No literal pinLabels object found in ${sourcePath}`);
  }
  return labels;
};

const specialPhysicalAliases = (physical: string) => {
  const normalized = normalizePhysical(physical);
  if (/^TAB/.test(normalized)) return new Set([normalized, "TAB"]);
  if (/(?:EXPOSED|THERMAL|PAD|EP)/.test(normalized)) {
    return new Set([
      normalized,
      "EP",
      "EPAD",
      "EXPOSED_PAD",
      "EXPOSEDPAD",
      "THERMAL_PAD",
      "THERMALPAD",
      "POWERPAD",
      "PAD",
    ]);
  }
  return new Set([normalized]);
};

const normalizeExplicitPhysicalMap = (map: Record<string, string>) =>
  Object.fromEntries(
    Object.entries(map).map(([physical, pinKey]) => [
      normalizePhysical(physical),
      pinKey,
    ]),
  );

const parseCoordinatePhysical = (physical: string) => {
  const match = physical
    .trim()
    .toUpperCase()
    .match(/^([A-Z]{1,3})(\d{1,3})$/);
  return match ? { row: match[1], column: Number(match[2]) } : undefined;
};

export const buildCoordinatePhysicalMap = ({
  pins,
  expectedPinCount,
  assignment,
}: {
  pins: TiOfficialPin[];
  expectedPinCount: number;
  assignment: CoordinatePinAssignment;
}) => {
  if (assignment.mode !== "physical-alias") {
    throw new Error(`Unsupported coordinate assignment mode`);
  }
  if (pins.length !== expectedPinCount) {
    throw new Error(
      `Coordinate pin table has ${pins.length} physical balls; expected ${expectedPinCount}`,
    );
  }
  const normalizedRows = assignment.rowOrder.map((row) =>
    row.trim().toUpperCase(),
  );
  if (
    normalizedRows.some((row) => !/^[A-Z]{1,3}$/.test(row)) ||
    new Set(normalizedRows).size !== normalizedRows.length
  ) {
    throw new Error("Coordinate rowOrder must contain unique row names");
  }
  const rowIndex = new Map(normalizedRows.map((row, index) => [row, index]));
  const parsedPins = pins.map((pin) => {
    const coordinate = parseCoordinatePhysical(pin.number);
    if (!coordinate) {
      throw new Error(
        `Coordinate assignment cannot map non-coordinate physical pin ${pin.number}`,
      );
    }
    const row = rowIndex.get(coordinate.row);
    if (row === undefined) {
      throw new Error(
        `Coordinate row ${coordinate.row} is absent from rowOrder`,
      );
    }
    return { physical: pin.number, row, column: coordinate.column };
  });
  const normalizedPhysicals = parsedPins.map(({ physical }) =>
    normalizePhysical(physical),
  );
  if (new Set(normalizedPhysicals).size !== normalizedPhysicals.length) {
    throw new Error("Coordinate pin table contains duplicate physical balls");
  }
  const discoveredColumns = [
    ...new Set(parsedPins.map(({ column }) => column)),
  ].sort((left, right) => left - right);
  const columns = assignment.columnOrder ?? discoveredColumns;
  if (
    columns.some((column) => !Number.isInteger(column) || column < 1) ||
    new Set(columns).size !== columns.length
  ) {
    throw new Error(
      "Coordinate columnOrder must contain unique positive integers",
    );
  }
  const columnIndex = new Map(columns.map((column, index) => [column, index]));
  for (const { column } of parsedPins) {
    if (!columnIndex.has(column)) {
      throw new Error(`Coordinate column ${column} is absent from columnOrder`);
    }
  }
  parsedPins.sort(
    (left, right) =>
      left.row - right.row ||
      (columnIndex.get(left.column) ?? -1) -
        (columnIndex.get(right.column) ?? -1),
  );
  return Object.fromEntries(
    parsedPins.map(({ physical }, index) => [physical, `pin${index + 1}`]),
  );
};

const formatMillimeters = (value: number) => {
  const rounded = Number(value.toFixed(6));
  return `${Object.is(rounded, -0) ? 0 : rounded}mm`;
};

const getExplicitAxisPositions = (
  positions: Record<string, number> | undefined,
) =>
  positions
    ? new Map(
        Object.entries(positions).map(([coordinate, position]) => [
          coordinate.trim().toUpperCase(),
          position,
        ]),
      )
    : undefined;

/** Render exact pads from a compact official coordinate-grid description. */
export const renderCoordinateGridFootprintProp = ({
  pins,
  grid,
}: {
  pins: TiGeneratedPin[];
  grid: CoordinateGridFootprint;
}) => {
  const rowOrder = grid.rowOrder.map((row) => row.trim().toUpperCase());
  const columnOrder = [...grid.columnOrder];
  if (
    rowOrder.length === 0 ||
    rowOrder.some((row) => !/^[A-Z]{1,3}$/.test(row)) ||
    new Set(rowOrder).size !== rowOrder.length
  ) {
    throw new Error("Coordinate grid rowOrder must contain unique row names");
  }
  if (
    columnOrder.length === 0 ||
    columnOrder.some((column) => !Number.isInteger(column) || column < 1) ||
    new Set(columnOrder).size !== columnOrder.length
  ) {
    throw new Error(
      "Coordinate grid columnOrder must contain unique positive integers",
    );
  }
  const rowIndex = new Map(rowOrder.map((row, index) => [row, index]));
  const columnIndex = new Map(
    columnOrder.map((column, index) => [column, index]),
  );
  const rowPositions = getExplicitAxisPositions(grid.rowPositionsMm);
  const columnPositions = getExplicitAxisPositions(grid.columnPositionsMm);
  const rowPitch = grid.rowPitchMm ?? grid.pitchMm;
  const columnPitch = grid.columnPitchMm ?? grid.pitchMm;
  if (!rowPositions && (!rowPitch || rowPitch <= 0)) {
    throw new Error("Coordinate grid needs a positive row pitch or positions");
  }
  if (!columnPositions && (!columnPitch || columnPitch <= 0)) {
    throw new Error(
      "Coordinate grid needs a positive column pitch or positions",
    );
  }
  if (grid.padShape === "circle") {
    if (!grid.padDiameterMm || grid.padDiameterMm <= 0) {
      throw new Error("Circular coordinate-grid pads need a positive diameter");
    }
  } else if (
    !grid.padWidthMm ||
    grid.padWidthMm <= 0 ||
    !grid.padHeightMm ||
    grid.padHeightMm <= 0
  ) {
    throw new Error(
      "Rectangular coordinate-grid pads need positive width and height",
    );
  }

  const getRowPosition = (row: string) => {
    const explicit = rowPositions?.get(row);
    if (rowPositions) {
      if (explicit === undefined || !Number.isFinite(explicit)) {
        throw new Error(
          `Coordinate grid has no finite position for row ${row}`,
        );
      }
      return explicit;
    }
    const index = rowIndex.get(row);
    if (index === undefined) {
      throw new Error(`Coordinate grid does not contain row ${row}`);
    }
    const centered = index - (rowOrder.length - 1) / 2;
    return (grid.rowAxis ?? "y") === "y"
      ? -centered * (rowPitch ?? 0)
      : centered * (rowPitch ?? 0);
  };
  const getColumnPosition = (column: number) => {
    const explicit = columnPositions?.get(String(column));
    if (columnPositions) {
      if (explicit === undefined || !Number.isFinite(explicit)) {
        throw new Error(
          `Coordinate grid has no finite position for column ${column}`,
        );
      }
      return explicit;
    }
    const index = columnIndex.get(column);
    if (index === undefined) {
      throw new Error(`Coordinate grid does not contain column ${column}`);
    }
    return (index - (columnOrder.length - 1) / 2) * (columnPitch ?? 0);
  };

  const pads = pins.map((pin) => {
    const coordinate = parseCoordinatePhysical(pin.physical);
    if (!coordinate) {
      throw new Error(
        `Coordinate grid cannot place non-coordinate physical pin ${pin.physical}`,
      );
    }
    if (!rowIndex.has(coordinate.row)) {
      throw new Error(`Coordinate grid does not contain row ${coordinate.row}`);
    }
    if (!columnIndex.has(coordinate.column)) {
      throw new Error(
        `Coordinate grid does not contain column ${coordinate.column}`,
      );
    }
    if (!pin.labels.includes(normalizePhysical(pin.physical))) {
      throw new Error(
        `Generated pin ${pin.pinKey} does not expose physical alias ${pin.physical}`,
      );
    }
    const rowPosition = getRowPosition(coordinate.row);
    const columnPosition = getColumnPosition(coordinate.column);
    const x = (grid.rowAxis ?? "y") === "y" ? columnPosition : rowPosition;
    const y = (grid.rowAxis ?? "y") === "y" ? rowPosition : columnPosition;
    const size =
      grid.padShape === "circle"
        ? `radius=${JSON.stringify(formatMillimeters((grid.padDiameterMm ?? 0) / 2))} shape="circle"`
        : `width=${JSON.stringify(formatMillimeters(grid.padWidthMm ?? 0))} height=${JSON.stringify(formatMillimeters(grid.padHeightMm ?? 0))} shape="rect"`;
    return `        <smtpad portHints={[${JSON.stringify(normalizePhysical(pin.physical))}]} pcbX=${JSON.stringify(formatMillimeters(x))} pcbY=${JSON.stringify(formatMillimeters(y))} ${size} />`;
  });
  return `footprint={<footprint>\n${pads.join("\n")}\n      </footprint>}`;
};

export const createPhysicalToPinResolver = ({
  explicitPhysicalMap = {},
  donorPinLabels,
}: {
  explicitPhysicalMap?: Record<string, string>;
  donorPinLabels?: Record<string, string[]>;
}) => {
  const normalizedExplicitMap =
    normalizeExplicitPhysicalMap(explicitPhysicalMap);
  const donorAliases = Object.entries(donorPinLabels ?? {}).map(
    ([pinKey, aliases]) => ({
      pinKey,
      aliases: new Set(aliases.map(normalizePhysical)),
    }),
  );

  return (physical: string) => {
    const trimmed = physical.trim();
    if (isNumericPhysical(trimmed)) {
      const pinNumber = Number(trimmed);
      if (pinNumber < 1) throw new Error(`Invalid numeric pin ${trimmed}`);
      const expectedPinKey = `pin${pinNumber}`;
      const explicit = normalizedExplicitMap[normalizePhysical(trimmed)];
      if (explicit && explicit !== expectedPinKey) {
        throw new Error(
          `Numeric pin ${trimmed} must map to ${expectedPinKey}, not ${explicit}`,
        );
      }
      return expectedPinKey;
    }

    const physicalAliases = specialPhysicalAliases(trimmed);
    const explicitMatches = [
      ...new Set(
        [...physicalAliases]
          .map((alias) => normalizedExplicitMap[alias])
          .filter((pinKey): pinKey is string => Boolean(pinKey)),
      ),
    ];
    if (explicitMatches.length === 1) {
      const [explicit] = explicitMatches;
      if (!/^pin\d+$/.test(explicit)) {
        throw new Error(
          `Physical pin ${trimmed} maps to invalid port hint ${explicit}`,
        );
      }
      return explicit;
    }
    if (explicitMatches.length > 1) {
      throw new Error(
        `Physical pin ${trimmed} has conflicting explicit mappings: ${explicitMatches.join(", ")}`,
      );
    }

    const matches = donorAliases.filter(({ aliases }) =>
      [...physicalAliases].some((alias) => aliases.has(alias)),
    );
    if (matches.length === 1) return matches[0].pinKey;
    if (matches.length > 1) {
      throw new Error(
        `Physical pin ${trimmed} is ambiguous in donor pinLabels: ${matches.map(({ pinKey }) => pinKey).join(", ")}`,
      );
    }

    if (isCoordinatePhysical(trimmed)) {
      throw new Error(
        `Physical ball ${trimmed} has no matching alias in donor pinLabels`,
      );
    }
    throw new Error(
      `Special physical pad ${trimmed} needs an explicit or donor pinLabels mapping`,
    );
  };
};

const makeNcPin = (number: number): TiOfficialPin => ({
  number: String(number),
  name: "NC",
  type: "No connect",
  description: "No pin function is listed for this package position.",
});

/** Add audited package contacts that TI's function table omitted. */
export const mergeTiSupplementalPins = (
  pins: TiOfficialPin[],
  supplementalPins: TiOfficialPin[] = [],
) => {
  const merged = [...pins];
  const pinsByPhysical = new Map(
    pins.map((pin) => [normalizePhysical(pin.number), pin]),
  );
  for (const supplemental of supplementalPins) {
    const physical = normalizePhysical(supplemental.number);
    if (!physical) {
      throw new Error("Supplemental pin has an empty physical identifier");
    }
    const existing = pinsByPhysical.get(physical);
    if (existing) {
      if (
        normalizeAlias(existing.name) !== normalizeAlias(supplemental.name) ||
        deriveTiPinRole(existing) !== deriveTiPinRole(supplemental)
      ) {
        throw new Error(
          `Supplemental physical pin ${supplemental.number} conflicts with the cached official pin`,
        );
      }
      continue;
    }
    pinsByPhysical.set(physical, supplemental);
    merged.push(supplemental);
  }
  return merged;
};

export const buildTiGeneratedPins = ({
  pins,
  expectedPinCount,
  explicitPhysicalMap,
  donorPinLabels,
  ignoredPhysicalPins = [],
  coordinatePinAssignment,
}: {
  pins: TiOfficialPin[];
  expectedPinCount: number;
  explicitPhysicalMap?: Record<string, string>;
  donorPinLabels?: Record<string, string[]>;
  ignoredPhysicalPins?: string[];
  coordinatePinAssignment?: CoordinatePinAssignment;
}): TiGeneratedPin[] => {
  const ignoredPhysicals = new Set(ignoredPhysicalPins.map(normalizePhysical));
  const includedPins = pins.filter(
    (pin) => !ignoredPhysicals.has(normalizePhysical(pin.number)),
  );
  const pinByNumericPhysical = new Map(
    includedPins
      .filter((pin) => isNumericPhysical(pin.number))
      .map((pin) => [Number(pin.number), pin]),
  );
  const completedPins = [...includedPins];
  const hasCoordinatePins = includedPins.some((pin) =>
    isCoordinatePhysical(pin.number),
  );
  if (!hasCoordinatePins) {
    for (let number = 1; number <= expectedPinCount; number += 1) {
      if (!pinByNumericPhysical.has(number)) {
        completedPins.push(makeNcPin(number));
      }
    }
  }

  const repeatedFunctionCounts = new Map<string, number>();
  for (const pin of completedPins) {
    const [primary = "NC"] = getNormalizedPinFunctions(pin.name);
    repeatedFunctionCounts.set(
      primary,
      (repeatedFunctionCounts.get(primary) ?? 0) + 1,
    );
  }

  if (
    coordinatePinAssignment &&
    Object.keys(explicitPhysicalMap ?? {}).length
  ) {
    throw new Error(
      "coordinatePinAssignment cannot be combined with an explicit physical map",
    );
  }
  const coordinatePhysicalMap = coordinatePinAssignment
    ? buildCoordinatePhysicalMap({
        pins: completedPins,
        expectedPinCount,
        assignment: coordinatePinAssignment,
      })
    : undefined;
  const resolvePhysical = createPhysicalToPinResolver({
    explicitPhysicalMap: coordinatePhysicalMap ?? explicitPhysicalMap,
    donorPinLabels,
  });
  const generatedByPinKey = new Map<string, TiGeneratedPin>();
  for (const pin of completedPins) {
    const pinKey = resolvePhysical(pin.number);
    const [primary = "NC", ...alternateFunctions] = getNormalizedPinFunctions(
      pin.name,
    );
    const physicalAlias = normalizeAlias(pin.number) || pinKey.toUpperCase();
    const labels = [primary, ...alternateFunctions];
    if (physicalAlias !== primary) labels.push(physicalAlias);
    if ((repeatedFunctionCounts.get(primary) ?? 0) > 1) {
      labels.push(`${primary}_${physicalAlias}`);
    }
    const role = deriveTiPinRole(pin);
    const existing = generatedByPinKey.get(pinKey);
    if (!existing) {
      generatedByPinKey.set(pinKey, {
        pinKey,
        physical: pin.number,
        name: pin.name,
        labels: [...new Set(labels)],
        role,
        attributes: attributesForRole(role),
      });
      continue;
    }
    if (
      normalizePhysical(existing.physical) === normalizePhysical(pin.number)
    ) {
      throw new Error(
        `Official physical pin ${pin.number} is listed more than once`,
      );
    }
    let mergedRole = existing.role;
    if (mergedRole === "unknown") mergedRole = role;
    if (role !== "unknown" && role !== mergedRole) {
      throw new Error(
        `Physical pins ${existing.physical} and ${pin.number} map to ${pinKey} with conflicting roles ${existing.role} and ${role}`,
      );
    }
    existing.physical = `${existing.physical}, ${pin.number}`;
    if (normalizeAlias(existing.name) !== primary) {
      existing.name = `${existing.name} / ${pin.name}`;
    }
    existing.labels = [...new Set([...existing.labels, ...labels])];
    existing.role = mergedRole;
    existing.attributes = attributesForRole(mergedRole);
  }

  return [...generatedByPinKey.values()].sort((left, right) => {
    const leftNumber = Number(left.pinKey.replace(/^pin/, ""));
    const rightNumber = Number(right.pinKey.replace(/^pin/, ""));
    return leftNumber - rightNumber;
  });
};

const assertFootprintPropSource = (source: string, label: string) => {
  const errors = getTsxSyntaxErrors(
    `const component = <chip ${source} />`,
    `${label}.tsx`,
  );
  if (errors.length > 0 || !/^footprint=/.test(source.trim())) {
    throw new Error(`${label} has an invalid footprint prop source`);
  }
};

/** Extract every statically declared copper destination from inline JSX. */
export const extractFootprintPortHints = (
  footprintPropSource: string,
  label = "footprint",
) => {
  assertFootprintPropSource(footprintPropSource, label);
  const sourceFile = ts.createSourceFile(
    `${label}.tsx`,
    `const component = <chip ${footprintPropSource} />`,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const portHints: string[] = [];
  const visit = (node: ts.Node) => {
    if (
      ts.isJsxAttribute(node) &&
      node.name.getText(sourceFile) === "portHints"
    ) {
      const initializer = node.initializer;
      const values =
        initializer && ts.isStringLiteralLike(initializer)
          ? [initializer.text]
          : initializer &&
              ts.isJsxExpression(initializer) &&
              initializer.expression
            ? getStaticStringArray(initializer.expression)
            : undefined;
      if (!values || values.length === 0) {
        throw new Error(
          `${label} has a non-literal or empty portHints declaration`,
        );
      }
      portHints.push(...values);
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return portHints;
};

/** Ensure every selected and inline footprint destination is a generated port. */
export const assertFootprintDestinations = ({
  pins,
  footprintPropSource,
  physicalPadToPortHint = {},
  label = "footprint",
}: {
  pins: TiGeneratedPin[];
  footprintPropSource: string;
  physicalPadToPortHint?: Record<string, string>;
  label?: string;
}) => {
  const availableDestinations = new Set(
    pins.flatMap((pin) => [pin.pinKey, ...pin.labels]),
  );
  const selectedDestinations = Object.entries(physicalPadToPortHint).map(
    ([physical, destination]) => ({
      origin: `physicalPadToPortHint[${JSON.stringify(physical)}]`,
      destination,
    }),
  );
  const inlineDestinations = extractFootprintPortHints(
    footprintPropSource,
    label,
  ).map((destination) => ({ origin: "inline portHints", destination }));
  const missing = [...selectedDestinations, ...inlineDestinations].filter(
    ({ destination }) => !availableDestinations.has(destination),
  );
  if (missing.length > 0) {
    throw new Error(
      `${label} targets absent generated ports: ${missing
        .map(({ origin, destination }) => `${origin} -> ${destination}`)
        .join(", ")}`,
    );
  }
};

const resolveFootprint = ({
  entry,
  footprintCatalog,
}: {
  entry: TiDatasheetCatalogEntry;
  footprintCatalog: CommittedFootprintCatalog;
}): ResolvedFootprint => {
  const expectedDrawingId = entry.packageDrawing?.trim();
  if (!expectedDrawingId) {
    throw new Error("Catalog entry has no exact TI packageDrawing ID");
  }
  const selection = footprintCatalog.targets[entry.manufacturerPartNumber];
  if (!selection) throw new Error("Committed footprint target is missing");
  if (
    selection.family !== entry.family ||
    selection.componentExportName !== entry.componentExportName
  ) {
    throw new Error(
      "Committed footprint target identifies a different component",
    );
  }
  if (selection.status !== "source-ready") {
    throw new Error(selection.reason ?? "No source-ready exact footprint");
  }
  if (selection.drawingId !== expectedDrawingId) {
    throw new Error(
      `Committed footprint drawing ${selection.drawingId} does not exactly match catalog drawing ${expectedDrawingId}`,
    );
  }
  if (
    (!selection.footprintPropSource && !selection.coordinateGrid) ||
    !selection.footprintSource ||
    !selection.provenanceComment
  ) {
    throw new Error("Source-ready footprint record is incomplete");
  }
  if (selection.footprintPropSource) {
    assertFootprintPropSource(
      selection.footprintPropSource,
      `${entry.family}:${expectedDrawingId}`,
    );
  }
  return {
    drawingId: expectedDrawingId,
    footprintPropSource: selection.footprintPropSource,
    physicalPadToPortHint: selection.physicalPadToPortHint ?? {},
    ignoredPhysicalPins: selection.ignoredPhysicalPins ?? [],
    supplementalPins: selection.supplementalPins ?? [],
    coordinatePinAssignment: selection.coordinatePinAssignment,
    coordinateGrid: selection.coordinateGrid,
    source: selection.footprintSource,
    provenanceComment: selection.provenanceComment,
  };
};

const renderObject = (entries: Array<[string, unknown]>, indent = "  ") =>
  `{
${entries
  .map(([key, value]) => `${indent}${key}: ${JSON.stringify(value)},`)
  .join("\n")}
}`;

export const renderTiDatasheetComponent = ({
  entry,
  pins,
  footprintPropSource,
  footprintProvenance,
}: {
  entry: TiDatasheetCatalogEntry;
  pins: TiGeneratedPin[];
  footprintPropSource: string;
  footprintProvenance: string;
}) => {
  const pinLabelsSource = renderObject(
    pins.map((pin) => [pin.pinKey, pin.labels]),
  );
  const pinRolesSource = renderObject(
    pins.map((pin) => [pin.pinKey, pin.role]),
  );
  const pinsWithAttributes = pins.filter((pin) => pin.attributes);
  const pinAttributesSource = pinsWithAttributes.length
    ? `\nconst pinAttributes = ${renderObject(
        pinsWithAttributes.map((pin) => [pin.pinKey, pin.attributes]),
      )} as const\n`
    : "";
  const footprintLines = footprintPropSource.split("\n");
  const indentedFootprint = footprintLines
    .map((line, index) => `${index === 0 ? "      " : ""}${line}`)
    .join("\n");

  const source = `import type { ChipProps } from "@tscircuit/props"
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts"

const pinLabels = ${pinLabelsSource} as const

const pinRoles = ${pinRolesSource} as const
${pinAttributesSource}
export const ${entry.componentExportName} = (
  props: ChipProps<typeof pinLabels>,
) => {
  // Footprint provenance: ${normalizeWhitespace(footprintProvenance)}
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
${pinsWithAttributes.length ? "      pinAttributes={pinAttributes}\n" : ""}      manufacturerPartNumber=${JSON.stringify(entry.manufacturerPartNumber)}
${indentedFootprint}
      {...props}
    />
  )
}

export default ${entry.componentExportName}
`;
  const syntaxErrors = getTsxSyntaxErrors(
    source,
    `${entry.componentExportName}.circuit.tsx`,
  );
  if (syntaxErrors.length > 0) {
    throw new Error(
      `Generated invalid TSX for ${entry.componentExportName}: ${syntaxErrors
        .map((diagnostic) =>
          ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
        )
        .join("; ")}`,
    );
  }
  return source;
};

const addBlocker = (
  blockers: MaterializationBlocker[],
  entry: TiDatasheetCatalogEntry,
  code: string,
  detail: string,
) => {
  let blocker = blockers.find((candidate) => candidate.family === entry.family);
  if (!blocker) {
    blocker = {
      family: entry.family,
      manufacturerPartNumber: entry.manufacturerPartNumber,
      componentExportName: entry.componentExportName,
      codes: [],
      details: [],
    };
    blockers.push(blocker);
  }
  blocker.codes.push(code);
  blocker.details.push(detail);
};

const formatGeneratedFiles = async (
  repositoryRoot: string,
  generatedPaths: string[],
) => {
  if (generatedPaths.length === 0) return;
  const formatter = Bun.spawn(
    ["bunx", "biome", "format", "--write", ...generatedPaths],
    { cwd: repositoryRoot, stdout: "inherit", stderr: "inherit" },
  );
  const exitCode = await formatter.exited;
  if (exitCode !== 0) throw new Error(`Biome exited with code ${exitCode}`);
};

export const materializeTiDatasheetComponents = async ({
  repositoryRoot,
  catalogPath,
  pinoutsPath,
  footprintSelectionsPath,
  outputDirectory,
  blockerReportPath,
  allowPartial = false,
}: {
  repositoryRoot: string;
  catalogPath: string;
  pinoutsPath: string;
  footprintSelectionsPath: string;
  outputDirectory: string;
  blockerReportPath: string;
  allowPartial?: boolean;
}) => {
  const catalog = (await Bun.file(
    catalogPath,
  ).json()) as TiDatasheetCatalogEntry[];
  const pinouts = (await Bun.file(pinoutsPath).json()) as Record<
    string,
    TiPinoutRecord
  >;
  const footprintCatalog = (await Bun.file(
    footprintSelectionsPath,
  ).json()) as CommittedFootprintCatalog;
  const entries = catalog
    .filter((entry) => entry.source === "ti-datasheet")
    .sort((left, right) => left.family.localeCompare(right.family));
  if (entries.length !== 111) {
    throw new Error(
      `Expected 111 ti-datasheet entries; found ${entries.length}`,
    );
  }
  const entriesByMpn = new Map(
    entries.map((entry) => [entry.manufacturerPartNumber, entry]),
  );
  if (entriesByMpn.size !== entries.length) {
    throw new Error(
      "TI-datasheet catalog manufacturer part numbers are not unique",
    );
  }
  const committedTargets = Object.entries(footprintCatalog.targets);
  const actualSourceReadyEntries = committedTargets.filter(
    ([, target]) => target.status === "source-ready",
  ).length;
  const actualUnavailableEntries = committedTargets.filter(
    ([, target]) => target.status === "unavailable",
  ).length;
  if (
    footprintCatalog.schemaVersion !== 1 ||
    footprintCatalog.targetCount !== 111 ||
    footprintCatalog.coverage.targetEntries !== 111 ||
    committedTargets.length !== 111 ||
    footprintCatalog.coverage.sourceReadyEntries !== actualSourceReadyEntries ||
    footprintCatalog.coverage.unavailableEntries !== actualUnavailableEntries ||
    actualSourceReadyEntries + actualUnavailableEntries !== 111 ||
    committedTargets.some(([manufacturerPartNumber, target]) => {
      const entry = entriesByMpn.get(manufacturerPartNumber);
      return (
        !entry ||
        target.manufacturerPartNumber !== manufacturerPartNumber ||
        target.family !== entry.family ||
        target.componentExportName !== entry.componentExportName ||
        target.packageDrawing !== entry.packageDrawing ||
        (target.status === "source-ready" &&
          target.drawingId !== entry.packageDrawing)
      );
    })
  ) {
    throw new Error(
      "Committed footprint selection catalog must exactly cover all 111 TI-datasheet targets",
    );
  }

  const blockers: MaterializationBlocker[] = [];
  const ready: Array<{
    entry: TiDatasheetCatalogEntry;
    source: string;
    footprintSource: ResolvedFootprint["source"];
  }> = [];
  for (const entry of entries) {
    const pinout = pinouts[entry.family];
    let usablePinout: TiPinoutOk | undefined;
    if (pinout?.status !== "ok") {
      addBlocker(
        blockers,
        entry,
        "official-pinout-unavailable",
        pinout && pinout.status === "unavailable"
          ? `${pinout.reason}: ${pinout.message}`
          : "No cached official TI pinout record",
      );
    } else if (pinout.manufacturerPartNumber !== entry.manufacturerPartNumber) {
      addBlocker(
        blockers,
        entry,
        "official-pinout-mpn-mismatch",
        `Pinout is for ${pinout.manufacturerPartNumber}`,
      );
    } else if (
      pinout.family !== entry.family ||
      pinout.expectedPinCount !== entry.pinCount
    ) {
      addBlocker(
        blockers,
        entry,
        "official-pinout-catalog-mismatch",
        `Pinout identifies ${pinout.family} with expectedPinCount ${pinout.expectedPinCount}`,
      );
    } else if (pinout.pins.length === 0) {
      addBlocker(
        blockers,
        entry,
        "official-pinout-empty",
        "Official TI pinout contains no physical pins",
      );
    } else {
      usablePinout = pinout;
    }

    let footprint: ResolvedFootprint | undefined;
    try {
      footprint = resolveFootprint({ entry, footprintCatalog });
    } catch (error) {
      addBlocker(
        blockers,
        entry,
        "exact-footprint-unavailable",
        error instanceof Error ? error.message : String(error),
      );
    }
    if (!usablePinout || !footprint) continue;

    try {
      const coordinatePinAssignment = footprint.coordinateGrid
        ? {
            mode: "physical-alias" as const,
            rowOrder: footprint.coordinateGrid.rowOrder,
            columnOrder: footprint.coordinateGrid.columnOrder,
          }
        : footprint.coordinatePinAssignment;
      const generatedPins = buildTiGeneratedPins({
        pins: mergeTiSupplementalPins(
          usablePinout.pins,
          footprint.supplementalPins,
        ),
        expectedPinCount: entry.pinCount,
        explicitPhysicalMap: footprint.physicalPadToPortHint,
        ignoredPhysicalPins: footprint.ignoredPhysicalPins,
        coordinatePinAssignment,
      });
      const footprintPropSource = footprint.coordinateGrid
        ? renderCoordinateGridFootprintProp({
            pins: generatedPins,
            grid: footprint.coordinateGrid,
          })
        : footprint.footprintPropSource;
      if (!footprintPropSource) {
        throw new Error("Resolved footprint has no renderable source");
      }
      assertFootprintDestinations({
        pins: generatedPins,
        footprintPropSource,
        physicalPadToPortHint: footprint.physicalPadToPortHint,
        label: `${entry.family}:${footprint.drawingId}`,
      });
      ready.push({
        entry,
        source: renderTiDatasheetComponent({
          entry,
          pins: generatedPins,
          footprintPropSource,
          footprintProvenance: footprint.provenanceComment,
        }),
        footprintSource: footprint.source,
      });
    } catch (error) {
      addBlocker(
        blockers,
        entry,
        "pin-to-copper-mapping-failed",
        error instanceof Error ? error.message : String(error),
      );
    }
  }

  blockers.sort((left, right) => left.family.localeCompare(right.family));
  const report = {
    schemaVersion: 1,
    summary: {
      targetEntries: entries.length,
      readyEntries: ready.length,
      blockedEntries: blockers.length,
      officialPinoutBlockers: blockers.filter((blocker) =>
        blocker.codes.some((code) => code.startsWith("official-pinout")),
      ).length,
      exactFootprintBlockers: blockers.filter((blocker) =>
        blocker.codes.includes("exact-footprint-unavailable"),
      ).length,
      pinMappingBlockers: blockers.filter((blocker) =>
        blocker.codes.includes("pin-to-copper-mapping-failed"),
      ).length,
    },
    ready: ready.map(({ entry, footprintSource }) => ({
      family: entry.family,
      manufacturerPartNumber: entry.manufacturerPartNumber,
      componentExportName: entry.componentExportName,
      packageDrawing: entry.packageDrawing,
      footprintSource,
    })),
    blockers,
  };
  await Bun.write(blockerReportPath, `${JSON.stringify(report, null, 2)}\n`);

  if (blockers.length > 0 && !allowPartial) {
    const codes = new Map<string, number>();
    for (const blocker of blockers) {
      for (const code of blocker.codes) {
        codes.set(code, (codes.get(code) ?? 0) + 1);
      }
    }
    throw new Error(
      `Cannot materialize all 111 TI datasheet components: ${blockers.length} entries are blocked (${[
        ...codes,
      ]
        .map(([code, count]) => `${code}=${count}`)
        .join(", ")}). See ${blockerReportPath}`,
    );
  }

  const generatedPaths: string[] = [];
  for (const { entry, source } of ready) {
    const outputPath = resolve(
      outputDirectory,
      `${entry.componentExportName}.circuit.tsx`,
    );
    await Bun.write(outputPath, source);
    generatedPaths.push(relative(repositoryRoot, outputPath));
  }
  await formatGeneratedFiles(repositoryRoot, generatedPaths);

  return { ...report.summary, blockerReportPath, generatedPaths };
};

if (import.meta.main) {
  const repositoryRoot = resolve(import.meta.dir, "..");
  const allowPartial = Bun.argv.includes("--allow-partial");
  const result = await materializeTiDatasheetComponents({
    repositoryRoot,
    catalogPath: resolve(
      repositoryRoot,
      "lib/chips/ti-sysblocks-chip-catalog.json",
    ),
    pinoutsPath: resolve(repositoryRoot, "lib/chips/ti-sysblocks-pinouts.json"),
    footprintSelectionsPath: resolve(
      repositoryRoot,
      "lib/chips/ti-sysblocks-footprint-selections.json",
    ),
    outputDirectory: resolve(repositoryRoot, "lib/chips"),
    blockerReportPath: resolve(
      repositoryRoot,
      "lib/chips/ti-sysblocks-materialization-report.json",
    ),
    allowPartial,
  });
  console.log(JSON.stringify(result, null, 2));
}
