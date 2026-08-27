import { describe, expect, test } from "bun:test";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import webWorkerBlobUrl from "@tscircuit/eval/blob-url";
import { createCircuitWebWorker } from "@tscircuit/eval/worker";
import { generateSystemDesignArtifacts } from "../model";
import { getCircuitJsonErrors } from "./circuit-json-errors";
import {
  GENERATED_SYSTEM_MAIN_FILE_NAME,
  getGeneratedSystemEvaluationFsMap,
} from "./generated-source-files";
import {
  createPinnedTiSourceFsMap,
  getPinnedTiEvaluationFsMap,
  PINNED_TI_GIT_COMMIT,
} from "./pinned-ti-sources";

const installedPackageRoot = fileURLToPath(
  new URL("../../node_modules/@tscircuit/ti/", import.meta.url),
);

const readInstalledPinnedSources = async (): Promise<
  Record<string, string>
> => {
  const relativePaths = [
    "index.ts",
    "package.json",
    ...Array.from(
      new Bun.Glob("{lib,imports}/**/*.{ts,tsx,json}").scanSync({
        cwd: installedPackageRoot,
      }),
    ),
  ];
  return Object.fromEntries(
    await Promise.all(
      relativePaths.map(async (relativePath) => [
        `../../node_modules/@tscircuit/ti/${relativePath}`,
        await Bun.file(join(installedPackageRoot, relativePath)).text(),
      ]),
    ),
  );
};

describe("pinned TI source package", () => {
  test("normalizes installed source paths for the evaluator", () => {
    expect(
      createPinnedTiSourceFsMap({
        "../../node_modules/@tscircuit/ti/index.ts": "export const X = 1",
      }),
    ).toEqual({
      "node_modules/@tscircuit/ti/index.ts": "export const X = 1",
    });
  });

  test("normalizes the invalid BQ25731 slash label for evaluation", () => {
    expect(
      createPinnedTiSourceFsMap({
        "../../node_modules/@tscircuit/ti/lib/chips/BQ25731RSN.circuit.tsx":
          'const pinLabels = { pin5: "OTG/VAP" };',
      }),
    ).toEqual({
      "node_modules/@tscircuit/ti/lib/chips/BQ25731RSN.circuit.tsx":
        'const pinLabels = { pin5: "OTG_VAP" };',
    });
  });

  test("evaluates the generated power-bank design from the pinned commit", async () => {
    const installedSources = createPinnedTiSourceFsMap(
      await readInstalledPinnedSources(),
    );
    const artifacts = generateSystemDesignArtifacts({
      blocks: [
        {
          id: "battery_management",
          definitionId: "battery-management-2to4-cell-bq40z60",
        },
        {
          id: "battery_charging",
          definitionId: "battery-charging-2to5-cell-bq25731",
        },
        { id: "system_power", definitionId: "boost-converter-tps61236" },
        {
          id: "microcontroller",
          definitionId: "microcontroller-msp430g2332",
        },
        {
          id: "usb_c_output",
          definitionId: "usb-c-power-delivery-tps61288",
        },
      ],
      connections: [
        {
          id: "battery-pack",
          fromBlockId: "battery_management",
          toBlockId: "battery_charging",
          kind: "Power",
        },
        {
          id: "charger-control",
          fromBlockId: "microcontroller",
          toBlockId: "battery_charging",
          kind: "Data",
        },
        {
          id: "fuel-gauge-control",
          fromBlockId: "microcontroller",
          toBlockId: "battery_management",
          kind: "Data",
        },
        {
          id: "mcu-power",
          fromBlockId: "system_power",
          toBlockId: "microcontroller",
          kind: "Power",
        },
        {
          id: "regulator-control",
          fromBlockId: "microcontroller",
          toBlockId: "system_power",
          kind: "Data",
        },
        {
          id: "system-rail",
          fromBlockId: "battery_charging",
          toBlockId: "system_power",
          kind: "Power",
        },
        {
          id: "usb-c-rail",
          fromBlockId: "battery_charging",
          toBlockId: "usb_c_output",
          kind: "Power",
        },
      ],
    });
    const worker = await createCircuitWebWorker({
      webWorkerBlobUrl,
      platform: {
        pcbDisabled: true,
        routingDisabled: true,
        partsEngineDisabled: true,
      },
    });

    try {
      await worker.executeWithFsMap({
        fsMap: {
          ...getGeneratedSystemEvaluationFsMap(artifacts),
          ...installedSources,
          [GENERATED_SYSTEM_MAIN_FILE_NAME]: artifacts.tsx,
        },
        mainComponentPath: GENERATED_SYSTEM_MAIN_FILE_NAME,
      });
      await worker.renderUntilSettled();
      const circuitJson = await worker.getCircuitJson();

      expect(getCircuitJsonErrors(circuitJson)).toEqual([]);
      expect(artifacts.tsx).toContain('from "@tscircuit/ti"');
      expect(PINNED_TI_GIT_COMMIT).toBe(
        "63f4f01cf28400c4ced9423d9058252485fb987d",
      );
    } finally {
      await worker.kill();
    }
  });
});
