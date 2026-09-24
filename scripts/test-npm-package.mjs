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
const hostVersion =
  process.env.TSCIRCUIT_TEST_VERSION === "latest"
    ? "latest"
    : sourceManifest.devDependencies.tscircuit;
const temporary = await mkdtemp(join(tmpdir(), "tscircuit-ti-npm-"));
const npm = process.platform === "win32" ? "npm.cmd" : "npm";

function run(command, args, cwd, env = {}) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    env: { ...process.env, NODE_PATH: "", ...env },
    shell: process.platform === "win32" && command.endsWith(".cmd"),
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

function testCli(command, cwd) {
  assert.match(run(command, ["--help"], cwd), /Usage: ti search/);
  const result = JSON.parse(
    run(command, ["search", "--json", "buck converter"], cwd, {
      NODE_OPTIONS: `--import=${new URL("../tests/cli/fixtures/mock-fetch.mjs", import.meta.url).href}`,
    }),
  );
  assert.deepEqual(result, {
    query: "buck converter",
    results: [
      {
        mfr: "TPS62160DSGR",
        description: "Buck converter",
        stock: 1200,
        price: null,
        source: "ti",
      },
    ],
  });
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
    "cli/main.mjs",
    "cli/ti.mjs",
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
  // Exercise both the development runtime and the runtime npm selects today.
  // npm must resolve the remaining peers from the packed package's manifest.
  run(
    npm,
    [
      "install",
      "--no-audit",
      "--no-fund",
      "--registry=https://registry.npmjs.org",
      tarball,
      `tscircuit@${hostVersion}`,
      "typescript@5.9.3",
    ],
    consumer,
  );
  testCli(
    join(
      consumer,
      "node_modules/.bin",
      process.platform === "win32" ? "ti.cmd" : "ti",
    ),
    consumer,
  );
  console.log("Locally installed ti command passed");
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
  for (const Component of [ti.BQ24074, ti.PowerMonitor_INA237]) {
    const circuit = new Circuit();
    circuit.pcbDisabled = true;
    circuit.add(createElement("board", { width: "120mm", height: "120mm" },
      createElement(Component, { name: "Device" })));
    await circuit.renderUntilSettled();
    const json = circuit.getCircuitJson();
    assert.ok(json.some((item) => item.type === "source_component"));
    assert.deepEqual(json.filter((item) => item.type.endsWith("_error")), []);
  }
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
  await writeFile(
    join(consumer, "smoke.circuit.tsx"),
    `import { BQ24074, PowerMonitor_INA237 } from "@tscircuit/ti";
export default () => (
  <board width="120mm" height="120mm">
    <BQ24074 name="Standalone" schX={30} />
    <PowerMonitor_INA237 name="Monitor" />
  </board>
);
`,
  );
  run(
    "bun",
    [
      "node_modules/tscircuit/cli.mjs",
      "build",
      "smoke.circuit.tsx",
      "--disable-pcb",
      "--disable-parts-engine",
      "--schematic-svgs",
    ],
    consumer,
  );
  const circuitJson = JSON.parse(
    await readFile(join(consumer, "dist/smoke/circuit.json"), "utf8"),
  );
  assert.ok(
    circuitJson.filter((item) => item.type === "source_component").length > 10,
  );
  assert.deepEqual(
    circuitJson.filter((item) => item.type.endsWith("_error")),
    [],
  );
  assert.match(
    await readFile(join(consumer, "dist/smoke/schematic.svg"), "utf8"),
    /<svg/,
  );
  console.log(`TypeScript and tsci build passed with tscircuit@${hostVersion}`);
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
  assert.deepEqual(installed.bin, manifest.bin);
  testCli(
    process.platform === "win32"
      ? join(prefix, "ti.cmd")
      : join(prefix, "bin/ti"),
    temporary,
  );
  console.log("Globally installed ti command passed");
  // Installation alone does not detect an incompatible peer chosen for core.
  run(
    process.execPath,
    [
      "--input-type=module",
      "--eval",
      `
      import assert from "node:assert/strict";
      import { createRequire } from "node:module";
      import { pathToFileURL } from "node:url";
      const entry = pathToFileURL(${JSON.stringify(join(globalRoot, "@tscircuit/ti/index.js"))});
      const esm = await import(entry.href);
      const cjs = createRequire(entry)("./index.cjs");
      assert.equal(typeof esm.BQ24074, "function");
      assert.equal(typeof cjs.BQ24074, "function");
    `,
    ],
    temporary,
  );
  console.log("Isolated global installation and ESM/CJS imports passed");
} finally {
  await rm(temporary, { recursive: true, force: true });
}
