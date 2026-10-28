import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { setTimeout } from "node:timers/promises";
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

function run({ command, args, cwd, env = {} }) {
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

async function testSyncSysconfig({ command, cwd }) {
  const projectDir = await mkdtemp(join(cwd, "watch-consumer-"));
  const sourcePath = join(projectDir, "board.syscfg");
  const source = "// Installed TI watcher\n";
  await writeFile(join(projectDir, "package.json"), '{"private":true}');
  await writeFile(sourcePath, source);
  const child = spawn(command, ["sync-sysconfig", "board.syscfg"], {
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
    let initialUrl;
    for (const nextSource of [source, "// Updated installed TI watcher\n"]) {
      await writeFile(sourcePath, nextSource);
      let published = false;
      const deadline = Date.now() + 15000;
      while (Date.now() < deadline) {
        let config;
        try {
          config = JSON.parse(
            await readFile(join(projectDir, "tscircuit.config.json"), "utf8"),
          );
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        const iframeUrl = config?.extraRunFrameTabs?.find(
          (tab) => tab.tabName === "SysConfig",
        )?.iframeUrl;
        if (iframeUrl && iframeUrl !== initialUrl) {
          assert.match(iframeUrl, /#data:application\/gzip;base64,/);
          initialUrl = iframeUrl;
          published = true;
          break;
        }
        await setTimeout(25);
      }
      assert.ok(
        published,
        stderr || "Installed watcher did not publish its URL",
      );
    }
    assert.equal(stdout, "");
    assert.equal(stderr, "");
    child.kill("SIGTERM");
    assert.equal(await exited, 143);
  } finally {
    if (child.exitCode === null) child.kill("SIGTERM");
    await exited;
    await rm(projectDir, { recursive: true, force: true });
  }
}

async function testCli({ command, cwd }) {
  assert.match(
    run({ command, args: ["sync-sysconfig", "--help"], cwd }),
    /Usage: ti sync-sysconfig/,
  );
  if (process.platform !== "win32") await testSyncSysconfig({ command, cwd });
  assert.match(run({ command, args: ["--help"], cwd }), /Usage: ti search/);
  assert.match(
    run({ command, args: ["generate-sysconfig", "--help"], cwd }),
    /Usage: ti generate-sysconfig/,
  );
  const checkHelp = run({ command, args: ["check-sysconfig", "--help"], cwd });
  assert.match(
    run({ command, args: ["generate-sysconfig-url", "--help"], cwd }),
    /Usage: ti generate-sysconfig-url/,
  );
  await writeFile(
    join(cwd, "url-input.syscfg"),
    '// Unicode: 雪\r\nconst text = "hello";\n',
  );
  const viewerUrl = new URL(
    run({
      command,
      args: ["generate-sysconfig-url", "url-input.syscfg"],
      cwd,
    }).trim(),
  );
  assert.equal(viewerUrl.origin, "https://sysconfig-viewer.vercel.app");
  assert.match(viewerUrl.hash, /^#data:application\/gzip;base64,/);
  assert.match(
    run({ command, args: ["generate-sysconfig-site", "--help"], cwd }),
    /Usage: ti generate-sysconfig-site/,
  );
  assert.match(checkHelp, /Usage: ti check-sysconfig/);
  assert.match(checkHelp, /full CCS is optional/);
  assert.match(
    checkHelp,
    /Optional environment overrides.*searched automatically/,
  );
  assert.match(checkHelp, /CC2340.*1\.28\.1\+4785.*9\.21\.00\.36/);
  assert.match(checkHelp, /https:\/\/www.ti.com\/tool\/SYSCONFIG/);
  const result = JSON.parse(
    run({
      command,
      args: ["search", "--json", "buck converter"],
      cwd,
      env: {
        NODE_OPTIONS: `--import=${new URL("../tests/cli/fixtures/mock-fetch.mjs", import.meta.url).href}`,
      },
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
  assert.match(
    run({
      command,
      args: ["import", "C324077"],
      cwd,
      env: {
        NODE_OPTIONS: `--import=${new URL("../tests/cli/fixtures/mock-import-fetch.mjs", import.meta.url).href}`,
      },
    }),
    /Imported imports\/TPS62160DSGR.tsx from EasyEDA/,
  );
  assert.match(
    await readFile(join(cwd, "imports/TPS62160DSGR.tsx"), "utf8"),
    /export const TPS62160DSGR/,
  );
  await writeFile(
    join(cwd, "board.circuit.json"),
    JSON.stringify([
      {
        type: "source_component",
        ftype: "simple_chip",
        source_component_id: "mcu",
        name: "U1_MCU",
        manufacturer_part_number: "CC2340R52E0RGER",
      },
      {
        type: "source_port",
        source_port_id: "display",
        source_component_id: "mcu",
        name: "DIO20_A11",
        pin_number: 9,
        port_hints: ["DIO20_A11"],
      },
    ]),
  );
  await writeFile(
    join(cwd, "board.sysconfig.json"),
    JSON.stringify({
      component: "U1_MCU",
      gpios: [
        {
          source: "DIO20_A11",
          gpio_name: "CONFIG_DISPLAY_ISOLATE",
          direction: "output",
          initial_state: "high",
        },
      ],
      firmware: { rtos: "nortos", lf_clock_source: "lf_rcosc" },
    }),
  );
  assert.match(
    run({
      command,
      args: [
        "generate-sysconfig",
        "board.circuit.json",
        "--config",
        "board.sysconfig.json",
      ],
      cwd,
    }),
    /Generated board\.syscfg/,
  );
  assert.match(
    await readFile(join(cwd, "board.syscfg"), "utf8"),
    /GPIO1\.gpioPin\.\$assign = "DIO20_A11"/,
  );
  await writeFile(
    join(cwd, "source-pins.circuit.json"),
    JSON.stringify([
      {
        type: "source_component",
        ftype: "simple_chip",
        source_component_id: "mcu",
        name: "U1",
        manufacturer_part_number: "CC2340R52E0RGER",
      },
      {
        type: "source_port",
        source_port_id: "output",
        source_component_id: "mcu",
        name: "ENABLE",
        pin_number: 4,
        is_output: true,
        is_bidirectional: true,
      },
    ]),
  );
  assert.match(
    run({
      command,
      args: ["generate-sysconfig", "source-pins.circuit.json"],
      cwd,
    }),
    /Pin configuration: Circuit JSON/,
  );
  const derived = await readFile(join(cwd, "source-pins.syscfg"), "utf8");
  assert.match(derived, /GPIO1\.gpioPin\.\$assign = "DIO11"/);
  assert.doesNotMatch(derived, /initialOutputState|--rtos/);
  assert.throws(
    () =>
      run({
        command,
        args: ["check-sysconfig", "source-pins.circuit.json"],
        cwd,
        env: {
          TI_SYSCONFIG_NODE: join(cwd, "not-installed", "node"),
          TI_SYSCONFIG_CLI: "",
          TI_SDK_ROOT: "",
        },
      }),
    /Configured TI paths do not exist[\s\S]*Update TI_SYSCONFIG_NODE[\s\S]*full CCS is optional[\s\S]*ti generate-sysconfig <file>/,
  );
  await writeFile(
    join(cwd, "incomplete-pins.circuit.json"),
    JSON.stringify([
      {
        type: "source_component",
        ftype: "simple_chip",
        source_component_id: "mcu",
        name: "U1",
        manufacturer_part_number: "CC2340R52E0RGER",
      },
      {
        type: "source_port",
        source_port_id: "output",
        source_component_id: "mcu",
        name: "ENABLE",
        pin_number: 4,
        is_output: true,
        is_bidirectional: true,
      },
      {
        type: "source_trace",
        source_trace_id: "input_trace",
        connected_source_port_ids: ["missing_input"],
        connected_source_net_ids: [],
      },
    ]),
  );
  assert.throws(
    () =>
      run({
        command,
        args: ["generate-sysconfig", "incomplete-pins.circuit.json"],
        cwd,
      }),
    (error) => {
      assert.match(
        error.message,
        /Incomplete Circuit JSON pin records: 1 connection\(s\) reference missing pins[\s\S]*Rebuild the circuit/,
      );
      assert.doesNotMatch(
        error.message,
        /input_trace|missing_input|throw new Error|\bat \S+ \(/,
      );
      return true;
    },
  );
  await assert.rejects(readFile(join(cwd, "incomplete-pins.syscfg")), {
    code: "ENOENT",
  });
}

try {
  console.log("Packing the npm distribution");
  const [packed] = JSON.parse(
    run({
      command: npm,
      args: ["pack", "./dist/npm", "--json", "--pack-destination", temporary],
      cwd: root,
    }),
  );
  assert.equal(packed.name, manifest.name);
  assert.equal(packed.version, sourceManifest.version);
  assert.equal(manifest.dependencies["circuit-json-to-sysconfig"], undefined);
  assert.deepEqual(packed.files.map((file) => file.path).sort(), [
    "README.md",
    "cli/check-sysconfig.mjs",
    "cli/generate-sysconfig-site.mjs",
    "cli/generate-sysconfig-url.mjs",
    "cli/generate-sysconfig.mjs",
    "cli/import.mjs",
    "cli/main.mjs",
    "cli/sysconfig/am2434-profile.mjs",
    "cli/sysconfig/cc2340-profile.mjs",
    "cli/sysconfig/convert.mjs",
    "cli/sysconfig/discover-ti-tools.mjs",
    "cli/sysconfig/generate-site.mjs",
    "cli/sysconfig/generate-url.mjs",
    "cli/sysconfig/generate.mjs",
    "cli/sysconfig/get-validation-options.mjs",
    "cli/sysconfig/input.mjs",
    "cli/sysconfig/render-site.mjs",
    "cli/sysconfig/render-url.mjs",
    "cli/sysconfig/request.mjs",
    "cli/sysconfig/runtime.mjs",
    "cli/sysconfig/ti-cli.mjs",
    "cli/sysconfig/validate-am2434-output.mjs",
    "cli/sysconfig/validate-cc2340-output.mjs",
    "cli/sysconfig/sync/command-processes.mjs",
    "cli/sysconfig/sync/generation-queue.mjs",
    "cli/sysconfig/sync/publish-tab.mjs",
    "cli/sysconfig/sync/watch-source.mjs",
    "cli/sysconfig/sync/sync-url.mjs",
    "cli/ti.mjs",
    "cli/sync-sysconfig.mjs",
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
  // Install only TI and tscircuit. npm must supply the remaining peers,
  // including props, Circuit JSON, React, and TypeScript, from their manifests.
  run({
    command: npm,
    args: [
      "install",
      "--no-audit",
      "--no-fund",
      "--registry=https://registry.npmjs.org",
      tarball,
      `tscircuit@${hostVersion}`,
    ],
    cwd: consumer,
  });
  await testCli({
    command: join(
      consumer,
      "node_modules/.bin",
      process.platform === "win32" ? "ti.cmd" : "ti",
    ),
    cwd: consumer,
  });
  await writeFile(
    join(consumer, "source-pins.circuit.tsx"),
    `export default () => (
    <board width="10mm" height="10mm">
      <chip name="U1" manufacturerPartNumber="CC2340R52E0RGER"
        pinLabels={{ pin4: "DIO11", pin5: "DIO12" }}
        pinAttributes={{ pin4: { isOutput: true }, pin5: { isInput: true } }} />
    </board>
  );`,
  );
  run({
    command: process.execPath,
    args: [
      "node_modules/@tscircuit/ti/cli/ti.mjs",
      "generate-sysconfig",
      "source-pins.circuit.tsx",
    ],
    cwd: consumer,
  });
  const sourcePins = await readFile(
    join(consumer, "source-pins.syscfg"),
    "utf8",
  );
  assert.match(sourcePins, /GPIO1\.gpioPin\.\$assign = "DIO11"/);
  assert.match(sourcePins, /GPIO2\.mode = "Input"/);
  console.log("Locally installed ti command passed");
  await writeFile(
    join(consumer, "smoke.mjs"),
    `import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { createElement } from "react";
import { Circuit } from "tscircuit";
import { source_component_misconfigured_error } from "circuit-json";
import * as esm from "@tscircuit/ti";
assert.equal(typeof source_component_misconfigured_error.parse, "function");
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
  console.log(
    run({
      command: process.execPath,
      args: ["smoke.mjs"],
      cwd: consumer,
    }).trim(),
  );
  await writeFile(
    join(consumer, "types.mts"),
    `import { BQ24074, PowerMonitor_INA237 } from "@tscircuit/ti";
BQ24074({ name: "U1", footprintVariant: "vqfn_16_ep_3x3" });
PowerMonitor_INA237({ name: "Monitor" });
// @ts-expect-error The published declarations must reject invalid prop types.
BQ24074({ name: "U1", footprintVariant: 123 });
`,
  );
  run({
    command: process.execPath,
    args: [
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
    cwd: consumer,
  });
  await writeFile(
    join(consumer, "smoke.circuit.tsx"),
    `import { BQ24074, PowerMonitor_INA237 } from "@tscircuit/ti";
import { TPS62160DSGR } from "./imports/TPS62160DSGR";
export default () => (
  <board width="120mm" height="120mm">
    <BQ24074 name="Standalone" schX={30} />
    <PowerMonitor_INA237 name="Monitor" />
    <TPS62160DSGR name="Imported" schX={-30} />
  </board>
);
`,
  );
  run({
    command: "bun",
    args: [
      "node_modules/tscircuit/cli.mjs",
      "build",
      "smoke.circuit.tsx",
      "--disable-pcb",
      "--disable-parts-engine",
      "--schematic-svgs",
    ],
    cwd: consumer,
  });
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
  run({
    command: npm,
    args: [
      "install",
      "-g",
      "--prefix",
      prefix,
      "--no-audit",
      "--no-fund",
      "--registry=https://registry.npmjs.org",
      tarball,
    ],
    cwd: temporary,
  });
  const globalRoot = run({
    command: npm,
    args: ["root", "-g", "--prefix", prefix],
    cwd: temporary,
  }).trim();
  const installed = JSON.parse(
    await readFile(join(globalRoot, "@tscircuit/ti/package.json"), "utf8"),
  );
  assert.equal(installed.name, manifest.name);
  assert.equal(installed.version, sourceManifest.version);
  assert.deepEqual(installed.bin, manifest.bin);
  await testCli({
    command:
      process.platform === "win32"
        ? join(prefix, "ti.cmd")
        : join(prefix, "bin/ti"),
    cwd: temporary,
  });
  console.log("Globally installed ti command passed");
  // Installation alone does not detect an incompatible peer chosen for core.
  run({
    command: process.execPath,
    args: [
      "--input-type=module",
      "--eval",
      `
      import assert from "node:assert/strict";
      import { createRequire } from "node:module";
      import { pathToFileURL } from "node:url";
      const entry = pathToFileURL(${JSON.stringify(join(globalRoot, "@tscircuit/ti/index.js"))});
      const esm = await import(entry.href);
      const cjs = createRequire(entry)("./index.cjs");
      const schemas = createRequire(entry)("circuit-json");
      assert.equal(typeof schemas.source_component_misconfigured_error?.parse, "function");
      assert.equal(typeof esm.BQ24074, "function");
      assert.equal(typeof cjs.BQ24074, "function");
    `,
    ],
    cwd: temporary,
  });
  console.log("Isolated global installation and ESM/CJS imports passed");
} finally {
  await rm(temporary, { recursive: true, force: true });
}
