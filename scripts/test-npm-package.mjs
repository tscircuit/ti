import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const manifest = JSON.parse(
  await readFile(new URL("../npm/package.json", import.meta.url), "utf8"),
);
const sourceManifest = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8"),
);
const temporary = await mkdtemp(join(tmpdir(), "tscircuit-ti-npm-"));
const npm = process.platform === "win32" ? "npm.cmd" : "npm";

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    env: { ...process.env, NODE_PATH: "" },
    shell: process.platform === "win32" && command === npm,
    maxBuffer: 10 * 1024 * 1024,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(
      `${command} ${args.join(" ")} failed\n${result.stdout}\n${result.stderr}`,
    );
  }
  return result.stdout;
}

try {
  console.log("Packing the npm distribution");
  const [packed] = JSON.parse(
    run(
      npm,
      ["pack", "./dist/npm", "--json", "--pack-destination", temporary],
      root,
    ),
  );
  assert.equal(packed.name, manifest.name);
  assert.equal(packed.version, manifest.version);
  assert.deepEqual(packed.files.map((file) => file.path).sort(), [
    "README.md",
    "index.cjs",
    "index.d.ts",
    "index.js",
    "package.json",
  ]);
  const tarball = join(temporary, packed.filename);
  const consumer = join(temporary, "consumer");
  await mkdir(consumer);
  await writeFile(
    join(consumer, "package.json"),
    '{"private":true,"type":"module"}',
  );
  console.log("Installing the tarball in a clean project");
  // Pin the host to the version used to develop this library. npm must supply
  // all other runtime/type dependencies from the packed package's manifest.
  run(
    npm,
    [
      "install",
      "--no-audit",
      "--no-fund",
      "--registry=https://registry.npmjs.org",
      tarball,
      `tscircuit@${sourceManifest.devDependencies.tscircuit}`,
      "typescript@5.9.3",
    ],
    consumer,
  );
  await writeFile(
    join(consumer, "smoke.mjs"),
    `import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { createElement } from "react";
import { Circuit } from "tscircuit";
import * as esm from "@tscircuit/ti";
const cjs = createRequire(import.meta.url)("@tscircuit/ti");
assert.deepEqual(Object.keys(cjs).sort(), Object.keys(esm).sort());
for (const ti of [esm, cjs]) {
  assert.equal(typeof ti.BQ24074, "function");
  assert.equal(typeof ti.PowerMonitor_INA237, "function");
  assert.equal(ti.TiChipComponents.BQ24074, ti.BQ24074);
  const chip = ti.TPS22919({ name: "U1" });
  assert.equal(chip.props.spiceModel.type, "spicemodel");
  assert.ok(chip.props.spiceModel.props.source.includes(".SUBCKT"));
  const circuit = new Circuit();
  circuit.add(createElement("board", { width: "20mm", height: "20mm", pcbDisabled: true },
    createElement(ti.BQ24074, { name: "U1" })));
  await circuit.renderUntilSettled();
  assert.ok(circuit.getCircuitJson().some((item) =>
    item.type === "source_component" && item.name === "U1"));
}
console.log("ESM/CJS exports, embedded model, and circuit rendering passed");
`,
  );
  console.log(run(process.execPath, ["smoke.mjs"], consumer).trim());
  await writeFile(
    join(consumer, "types.mts"),
    `import { BQ24074, PowerMonitor_INA237 } from "@tscircuit/ti";
BQ24074({ name: "U1", footprintVariant: "vqfn_16_ep_3x3" });
PowerMonitor_INA237({ name: "Monitor" });
// @ts-expect-error The published declarations must reject invalid prop types.
BQ24074({ name: "U1", footprintVariant: 123 });
`,
  );
  run(
    process.execPath,
    [
      "node_modules/typescript/bin/tsc",
      "--noEmit",
      "--strict",
      "--skipLibCheck",
      "--module",
      "esnext",
      "--moduleResolution",
      "bundler",
      "--target",
      "es2023",
      "types.mts",
    ],
    consumer,
  );
  console.log("Checking global installation in an isolated prefix");
  const prefix = join(temporary, "global");
  run(
    npm,
    [
      "install",
      "-g",
      "--prefix",
      prefix,
      "--no-audit",
      "--no-fund",
      "--registry=https://registry.npmjs.org",
      tarball,
    ],
    temporary,
  );
  const globalRoot = run(
    npm,
    ["root", "-g", "--prefix", prefix],
    temporary,
  ).trim();
  const installed = JSON.parse(
    await readFile(join(globalRoot, "@tscircuit/ti/package.json"), "utf8"),
  );
  assert.equal(installed.name, manifest.name);
  assert.equal(installed.version, manifest.version);
  console.log("TypeScript consumer and isolated global installation passed");
} finally {
  await rm(temporary, { recursive: true, force: true });
}
