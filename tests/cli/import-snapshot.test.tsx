import { expect, test } from "bun:test";
import { spawnSync } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { Circuit } from "@tscircuit/core";
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg";
import "bun-match-svg";

test("imported TPS62160DSGR schematic", async () => {
  // Keep generated TSX inside the project so its JSX runtime resolves locally.
  const directory = await mkdtemp(join(import.meta.dir, ".import-snapshot-"));
  try {
    const result = spawnSync(
      "node",
      [
        "--import",
        new URL("./fixtures/mock-import-fetch.mjs", import.meta.url).href,
        fileURLToPath(new URL("../../cli/ti.mjs", import.meta.url)),
        "import",
        "TPS62160DSGR",
      ],
      { cwd: directory, encoding: "utf8" },
    );
    expect(result.stderr).toBe("");
    expect(result.status).toBe(0);

    const { TPS62160DSGR } = await import(
      pathToFileURL(join(directory, "imports/TPS62160DSGR.tsx")).href
    );
    const circuit = new Circuit({
      platform: { pcbDisabled: true, partsEngineDisabled: true },
    });
    circuit.add(
      <board width={20} height={20}>
        <TPS62160DSGR name="U1" />
      </board>,
    );
    await circuit.renderUntilSettled();
    const circuitJson = circuit.getCircuitJson();
    expect(circuitJson.filter((item) => item.type.endsWith("_error"))).toEqual(
      [],
    );
    const svg = convertCircuitJsonToSchematicSvg(circuitJson);
    await expect(svg).toMatchSvgSnapshot(import.meta.path, "TPS62160DSGR");
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
