import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir, mkdtemp, rename, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { gunzipSync } from "node:zlib";
import { test } from "node:test";
import { waitFor } from "./watch-test-helpers.mjs";

const watcherPath = fileURLToPath(
  new URL("../fixtures/run-watcher.mjs", import.meta.url),
);

test("Circuit JSON under dist is watched directly and converts atomic pin updates", async () => {
  const projectDir = await mkdtemp(join(tmpdir(), "ti-url-watch-json-"));
  const buildDir = join(projectDir, "dist", "index");
  await mkdir(buildDir, { recursive: true });
  await writeFile(join(projectDir, "package.json"), '{"private":true}\n');
  const circuit = [
    {
      type: "source_component",
      ftype: "simple_chip",
      source_component_id: "mcu",
      name: "U1",
      manufacturer_part_number: "CC2340R52E0RGER",
    },
    {
      type: "source_port",
      source_port_id: "gpio",
      source_component_id: "mcu",
      name: "ENABLE",
      pin_number: 4,
      is_output: true,
    },
  ];
  const sourcePath = join(buildDir, "circuit.json");
  await writeFile(sourcePath, JSON.stringify(circuit));
  const child = spawn(process.execPath, [watcherPath, sourcePath], {
    cwd: projectDir,
    stdio: ["ignore", "pipe", "pipe"],
  });
  let stdout = "";
  let stderr = "";
  child.stdout.setEncoding("utf8").on("data", (chunk) => {
    stdout += chunk;
  });
  child.stderr.setEncoding("utf8").on("data", (chunk) => {
    stderr += chunk;
  });
  const exited = new Promise((resolveExit, reject) => {
    child.once("error", reject);
    child.once("exit", resolveExit);
  });
  try {
    await waitFor(
      () => stdout.includes("#data:"),
      () => stderr,
    );
    delete circuit[1].is_output;
    circuit[1].is_input = true;
    const replacementPath = join(buildDir, "circuit.json.tmp");
    await writeFile(replacementPath, JSON.stringify(circuit));
    await rename(replacementPath, sourcePath);
    await waitFor(
      () => stdout.trim().split("\n").length === 2,
      () => stderr,
    );
    const latestUrl = new URL(stdout.trim().split("\n")[1]);
    const envelope = JSON.parse(
      gunzipSync(
        Buffer.from(latestUrl.hash.split(",")[1], "base64"),
      ).toString(),
    );
    assert.match(envelope.source, /GPIO1\.mode = "Input"/);
    assert.match(envelope.source, /GPIO1\.gpioPin\.\$assign = "DIO11"/);
  } finally {
    child.kill("SIGTERM");
    await exited;
    await rm(projectDir, { recursive: true, force: true });
  }
});
