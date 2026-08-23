import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import ts from "typescript";

import type { TiSchematicPinRole } from "../lib/chips/get-ti-schematic-layout.ts";
import {
  sanitizeTiPinLabel,
  type TiDocumentPin,
  toTscircuitPinMetadata,
} from "./ti-document-viewer-pinout.ts";

type PhysicalOnlySelectionReason =
  | "jlcpcb-physical-coordinate-labels"
  | "jlcpcb-numeric-physical-labels"
  | "jlcpcb-physical-numeric-labels";

interface PhysicalOnlyPinoutCacheEntry {
  family: string;
  catalogSource: "jlcpcb";
  selectionReason: PhysicalOnlySelectionReason;
  pinLabelSourcePath: string;
  status: "ok";
  pins: TiDocumentPin[];
}

type PinoutCacheEntry =
  | PhysicalOnlyPinoutCacheEntry
  | {
      catalogSource?: string;
      selectionReason?: string;
      status?: string;
    };

type PinoutCache = Record<string, PinoutCacheEntry>;

interface ParsedPinLabels {
  statementStart: number;
  statementEnd: number;
  labels: Record<string, string[]>;
}

export interface EnrichedArrayPinMetadata {
  pinLabels: Record<string, readonly string[]>;
  pinRoles: Partial<Record<string, TiSchematicPinRole>>;
  pinAttributes: Record<
    string,
    { requiresPower?: true; requiresGround?: true; doNotConnect?: true }
  >;
}

const normalizePhysicalIdentifier = (value: string) => {
  const normalized = value.trim().toUpperCase();
  const numeric = /^(?:PIN_?)?0*(\d+)$/.exec(normalized);
  return numeric ? String(Number(numeric[1])) : normalized;
};

const unwrapExpression = (expression: ts.Expression): ts.Expression => {
  if (
    ts.isAsExpression(expression) ||
    ts.isTypeAssertionExpression(expression) ||
    ts.isParenthesizedExpression(expression) ||
    ts.isSatisfiesExpression(expression)
  ) {
    return unwrapExpression(expression.expression);
  }
  return expression;
};

const getPropertyName = (name: ts.PropertyName, sourceFile: ts.SourceFile) => {
  if (
    ts.isIdentifier(name) ||
    ts.isStringLiteral(name) ||
    ts.isNumericLiteral(name)
  ) {
    return name.text;
  }
  return name.getText(sourceFile).replace(/^['"]|['"]$/g, "");
};

const getStringAliases = (expression: ts.Expression) => {
  const unwrapped = unwrapExpression(expression);
  if (
    ts.isStringLiteral(unwrapped) ||
    ts.isNoSubstitutionTemplateLiteral(unwrapped)
  ) {
    return [unwrapped.text];
  }
  if (!ts.isArrayLiteralExpression(unwrapped)) return [];
  return unwrapped.elements.flatMap((element) => {
    if (
      ts.isStringLiteral(element) ||
      ts.isNoSubstitutionTemplateLiteral(element)
    ) {
      return [element.text];
    }
    return [];
  });
};

export const parsePinLabels = (
  sourceText: string,
  sourcePath = "component.tsx",
): ParsedPinLabels => {
  const sourceFile = ts.createSourceFile(
    sourcePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  let pinLabelsStatement: ts.VariableStatement | undefined;
  let pinRolesStatement: ts.VariableStatement | undefined;
  let pinAttributesStatement: ts.VariableStatement | undefined;
  let labels: Record<string, string[]> | undefined;
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name)) continue;
      if (declaration.name.text === "pinRoles") pinRolesStatement = statement;
      if (declaration.name.text === "pinAttributes") {
        pinAttributesStatement = statement;
      }
      if (declaration.name.text !== "pinLabels" || !declaration.initializer) {
        continue;
      }
      const initializer = unwrapExpression(declaration.initializer);
      if (!ts.isObjectLiteralExpression(initializer)) continue;

      pinLabelsStatement = statement;
      labels = {};
      for (const property of initializer.properties) {
        if (!ts.isPropertyAssignment(property)) continue;
        const pinKey = getPropertyName(property.name, sourceFile);
        if (!/^pin\d+$/.test(pinKey)) continue;
        labels[pinKey] = getStringAliases(property.initializer);
      }
    }
  }

  if (pinLabelsStatement && labels) {
    if (Boolean(pinRolesStatement) !== Boolean(pinAttributesStatement)) {
      throw new Error(
        `${sourcePath}: generated pinRoles and pinAttributes metadata must appear together`,
      );
    }
    return {
      statementStart: pinLabelsStatement.getStart(sourceFile),
      statementEnd:
        pinRolesStatement && pinAttributesStatement
          ? Math.max(
              pinRolesStatement.getEnd(),
              pinAttributesStatement.getEnd(),
            )
          : pinLabelsStatement.getEnd(),
      labels,
    };
  }

  throw new Error(`${sourcePath}: could not find a pinLabels object`);
};

const roleForPin = (pin: TiDocumentPin) => {
  const metadata = toTscircuitPinMetadata([pin]);
  return Object.values(metadata.pinRoles)[0];
};

export const enrichArrayPinMetadata = (
  existingPinLabels: Readonly<Record<string, readonly string[]>>,
  officialPins: readonly TiDocumentPin[],
): EnrichedArrayPinMetadata => {
  const officialPhysical = new Set(
    officialPins.map((pin) => normalizePhysicalIdentifier(pin.number)),
  );
  const physicalToKey = new Map<string, string>();
  for (const [pinKey, aliases] of Object.entries(existingPinLabels)) {
    const generatedPhysicalAlias = aliases[1];
    const aliasesToInspect =
      generatedPhysicalAlias &&
      officialPhysical.has(normalizePhysicalIdentifier(generatedPhysicalAlias))
        ? [generatedPhysicalAlias]
        : aliases;
    for (const alias of aliasesToInspect) {
      const normalized = normalizePhysicalIdentifier(alias);
      if (!normalized || !officialPhysical.has(normalized)) continue;
      const previous = physicalToKey.get(normalized);
      if (previous && previous !== pinKey) {
        throw new Error(
          `physical identifier ${normalized} is assigned to ${previous} and ${pinKey}`,
        );
      }
      physicalToKey.set(normalized, pinKey);
    }
  }

  const functionalCounts = new Map<string, number>();
  for (const pin of officialPins) {
    const functional = sanitizeTiPinLabel(pin.name, `PIN_${pin.number}`);
    functionalCounts.set(
      functional,
      (functionalCounts.get(functional) ?? 0) + 1,
    );
  }

  const pinLabels: Record<string, readonly string[]> = {};
  const pinRoles: Partial<Record<string, TiSchematicPinRole>> = {};
  const pinAttributes: EnrichedArrayPinMetadata["pinAttributes"] = {};
  const usedKeys = new Set<string>();

  for (const pin of officialPins) {
    const physical = normalizePhysicalIdentifier(pin.number);
    const pinKey = physicalToKey.get(physical);
    if (!pinKey) {
      throw new Error(
        `official physical pin ${pin.number} has no footprint port`,
      );
    }
    if (usedKeys.has(pinKey)) {
      throw new Error(`multiple official pins map to footprint port ${pinKey}`);
    }
    usedKeys.add(pinKey);

    const functional = sanitizeTiPinLabel(pin.name, `PIN_${pin.number}`);
    const aliases = [functional, physical];
    if ((functionalCounts.get(functional) ?? 0) > 1) {
      aliases.push(`${functional}_${physical}`);
    }
    pinLabels[pinKey] = [...new Set(aliases)];

    const role = roleForPin(pin);
    if (role) pinRoles[pinKey] = role;
    if (role === "power") pinAttributes[pinKey] = { requiresPower: true };
    if (role === "ground") pinAttributes[pinKey] = { requiresGround: true };
    if (role === "no-connect") pinAttributes[pinKey] = { doNotConnect: true };
  }

  const existingKeys = Object.keys(existingPinLabels);
  if (usedKeys.size !== existingKeys.length) {
    const missing = existingKeys.filter((key) => !usedKeys.has(key));
    throw new Error(
      `${missing.length} footprint ports are absent from the official pin map: ${missing.join(", ")}`,
    );
  }

  return { pinLabels, pinRoles, pinAttributes };
};

const renderRecord = (record: object) =>
  JSON.stringify(record, null, 2).replace(/"(pin\d+)":/g, "$1:");

const renderMetadata = (metadata: EnrichedArrayPinMetadata) =>
  [
    `const pinLabels = ${renderRecord(metadata.pinLabels)} as const`,
    "",
    `const pinRoles = ${renderRecord(metadata.pinRoles)} as const`,
    "",
    `const pinAttributes = ${renderRecord(metadata.pinAttributes)} as const`,
  ].join("\n");

export const enrichArrayComponentSource = (
  sourceText: string,
  officialPins: readonly TiDocumentPin[],
  sourcePath = "component.tsx",
) => {
  const parsed = parsePinLabels(sourceText, sourcePath);
  const metadata = enrichArrayPinMetadata(parsed.labels, officialPins);
  let output = `${sourceText.slice(0, parsed.statementStart)}${renderMetadata(metadata)}${sourceText.slice(parsed.statementEnd)}`;
  output = output.replace(
    "{...getTiSchematicLayout(pinLabels)}",
    "{...getTiSchematicLayout(pinLabels, { pinRoles })}",
  );
  if (!output.includes("getTiSchematicLayout(pinLabels, { pinRoles })")) {
    throw new Error(`${sourcePath}: could not update schematic-layout call`);
  }
  if (!output.includes("pinAttributes={pinAttributes}")) {
    output = output.replace(
      /^(\s*)pinLabels=\{[A-Za-z_$][\w$]*\}\s*$/m,
      "$&\n$1pinAttributes={pinAttributes}",
    );
  }
  if (!output.includes("pinAttributes={pinAttributes}")) {
    throw new Error(`${sourcePath}: could not insert pinAttributes prop`);
  }
  return output;
};

const isPhysicalOnlyPinout = (
  entry: PinoutCacheEntry,
): entry is PhysicalOnlyPinoutCacheEntry =>
  entry.catalogSource === "jlcpcb" &&
  (entry.selectionReason === "jlcpcb-physical-coordinate-labels" ||
    entry.selectionReason === "jlcpcb-numeric-physical-labels" ||
    entry.selectionReason === "jlcpcb-physical-numeric-labels") &&
  entry.status === "ok";

const runCli = async () => {
  const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
  const cachePath = resolve(
    repositoryRoot,
    "lib/chips/ti-sysblocks-pinouts.json",
  );
  const cache = JSON.parse(await readFile(cachePath, "utf8")) as PinoutCache;
  let updated = 0;

  const selected = Object.values(cache).filter(isPhysicalOnlyPinout);
  const updatedByReason: Record<string, number> = {};
  const pendingWrites: Array<{ path: string; output: string }> = [];
  for (const entry of selected) {
    const componentPath = resolve(repositoryRoot, entry.pinLabelSourcePath);
    const source = await readFile(componentPath, "utf8");
    let output: string;
    try {
      output = enrichArrayComponentSource(
        source,
        entry.pins,
        entry.pinLabelSourcePath,
      );
    } catch (error) {
      throw new Error(
        `${entry.family}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
    pendingWrites.push({ path: componentPath, output });
    updated += 1;
    updatedByReason[entry.selectionReason] =
      (updatedByReason[entry.selectionReason] ?? 0) + 1;
  }

  for (const pending of pendingWrites) {
    await writeFile(pending.path, pending.output);
  }

  console.log({ selected: selected.length, updated, updatedByReason });
};

const isDirectExecution = () => {
  const entry = process.argv[1];
  return Boolean(entry && import.meta.url === pathToFileURL(entry).href);
};

if (isDirectExecution()) await runCli();
