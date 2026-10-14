import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync as realSpawnSync } from "node:child_process";
import { test } from "node:test";
import { runCli } from "../../cli/main.mjs";
import { getCircuitJsonInput } from "../../cli/sysconfig/input.mjs";

// A subprocess protocol fixture, not TI UI or a configuration validator.
const rendererFixture = `export function getBundledSdkCatalog() { return { fixture: true }; }
export function readReadOnlyViewerInput(json) { return JSON.parse(json); }
export async function generateReadOnlyHtml(input) { return '<!doctype html><title>' + input.filename + '</title><pre>' + JSON.stringify(input.source) + '</pre>'; }`;

async function createProject() {
  const cwd = await mkdtemp(join(tmpdir(), "ti-site-test-"));
  await writeFile(join(cwd, "package.json"), '{"private":true}');
  const packageDir = join(
    cwd,
    "node_modules",
    "@tscircuit",
    "sysconfig-viewer",
  );
  await mkdir(packageDir, { recursive: true });
  await writeFile(
    join(packageDir, "package.json"),
    JSON.stringify({
      name: "@tscircuit/sysconfig-viewer",
      type: "module",
      exports: { "./html": "./html.mjs" },
    }),
  );
  await writeFile(join(packageDir, "html.mjs"), rendererFixture);
  await writeFile(
    join(cwd, "board.syscfg"),
    'const GPIO = scripting.addModule("/ti/drivers/GPIO");',
  );
  return { cwd, packageDir };
}

async function run(args, options = {}) {
  const stdout = [],
    stderr = [],
    invocations = [];
  const status = await runCli(["generate-sysconfig-site", ...args], {
    ...options,
    stdout: (line) => stdout.push(line),
    stderr: (line) => stderr.push(line),
    spawnSync: (command, arguments_, context) => {
      invocations.push({ command, arguments_ });
      return realSpawnSync(command, arguments_, context);
    },
  });
  return {
    status,
    stdout: stdout.join("\n"),
    stderr: stderr.join("\n"),
    invocations,
  };
}

test("existing syscfg site generation uses only Bun/private renderer, preserves source, and never calls TI", async () => {
  const { cwd } = await createProject();
  try {
    const sourceBefore = await readFile(join(cwd, "board.syscfg"), "utf8");
    const result = await run(["board.syscfg"], {
      cwd,
      env: {
        ...process.env,
        TI_SYSCONFIG_NODE: "/does-not-exist",
        TI_SDK_ROOT: "/does-not-exist",
      },
    });
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Generated board.sysconfig.html/);
    assert.match(
      result.stdout,
      /validation and firmware generation were not run/,
    );
    assert.equal(result.invocations.length, 2);
    assert.deepEqual(result.invocations[0].arguments_, ["--version"]);
    assert.match(result.invocations[1].arguments_[0], /render-site.mjs$/);
    assert.equal(
      await readFile(join(cwd, "board.syscfg"), "utf8"),
      sourceBefore,
    );
    assert.match(
      await readFile(join(cwd, "board.sysconfig.html"), "utf8"),
      /board.syscfg/,
    );
    assert.equal(existsSync(result.invocations[1].arguments_[2]), false);
    const again = await run(["board.syscfg"], { cwd });
    assert.equal(again.status, 1);
    assert.match(again.stderr, /already exists/);
    assert.equal(again.invocations.length, 1);
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});

test("site command rejects invalid arguments before starting any subprocess", async () => {
  const calls = [];
  for (const args of [
    [],
    ["one", "two"],
    ["one", "--unknown"],
    ["one", "--catalog", " "],
  ]) {
    const status = await runCli(["generate-sysconfig-site", ...args], {
      stdout: () => {},
      stderr: () => {},
      spawnSync: (...args) => {
        calls.push(args);
        throw new Error("unexpected process");
      },
    });
    assert.equal(status, 1);
  }
  assert.equal(calls.length, 0);
  const help = await runCli(["generate-sysconfig-site", "--help"], {
    stdout: () => {},
    spawnSync: () => {
      throw new Error("unexpected process");
    },
  });
  assert.equal(help, 0);
});

test("missing private renderer and incompatible package fail without producing a site", async () => {
  const { cwd, packageDir } = await createProject();
  try {
    await writeFile(
      join(packageDir, "html.mjs"),
      "export function oldApi() {}",
    );
    const incompatible = await run(["board.syscfg"], { cwd });
    assert.equal(incompatible.status, 1);
    assert.match(incompatible.stderr, /matching reviewed version/);
    assert.equal(existsSync(join(cwd, "board.sysconfig.html")), false);
    assert.equal(existsSync(incompatible.invocations[1].arguments_[2]), false);
    await rm(packageDir, { recursive: true });
    const missing = await run(["board.syscfg"], { cwd });
    assert.equal(missing.status, 1);
    assert.match(missing.stderr, /authorised private/);
    assert.equal(missing.invocations.length, 1);
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});

test("explicit catalog is passed as metadata, output directories work, and conflicting circuit options fail", async () => {
  const { cwd } = await createProject();
  try {
    await writeFile(join(cwd, "catalog.json"), '{"metadata":true}');
    const result = await run(
      ["board.syscfg", "--catalog", "catalog.json", "-o", "nested/view.html"],
      { cwd },
    );
    assert.equal(result.status, 0, result.stderr);
    assert.equal(existsSync(join(cwd, "nested/view.html")), true);
    const conflict = await run(["board.syscfg", "--component", "U1"], { cwd });
    assert.equal(conflict.status, 1);
    assert.match(conflict.stderr, /circuit inputs/);
    const missing = await run(["board.syscfg", "--catalog", "missing.json"], {
      cwd,
    });
    assert.equal(missing.status, 1);
    assert.match(missing.stderr, /catalog does not exist/);
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});

test("site conversion can retain PCB outputs instead of overwriting them with a schematic-only build", async () => {
  const { cwd } = await createProject();
  try {
    const packageDir = join(cwd, "node_modules", "tscircuit");
    await mkdir(packageDir, { recursive: true });
    await writeFile(
      join(packageDir, "package.json"),
      '{"name":"tscircuit","main":"index.js"}',
    );
    await writeFile(join(packageDir, "index.js"), "");
    await writeFile(join(packageDir, "cli.mjs"), "");
    await writeFile(join(cwd, "board.circuit.tsx"), "");
    await mkdir(join(cwd, "dist/board"), { recursive: true });
    const circuitJsonPath = join(cwd, "dist/board/circuit.json");
    const records = [{ type: "pcb_board", pcb_board_id: "board" }];
    const calls = [];
    const built = await getCircuitJsonInput("board.circuit.tsx", {
      cwd,
      includePcb: true,
      spawnSync: (command, args) => {
        calls.push(args);
        writeFileSync(circuitJsonPath, JSON.stringify(records));
        return { status: 0, stdout: "", stderr: "" };
      },
    });
    assert.equal(calls[0].includes("--disable-pcb"), false);
    assert.deepEqual(built.circuitJson, records);
    const previous = readFileSync(circuitJsonPath, "utf8");
    await assert.rejects(
      getCircuitJsonInput("board.circuit.tsx", {
        cwd,
        includePcb: true,
        spawnSync: () => ({
          status: 1,
          stderr: "board DRC failed",
          stdout: "",
        }),
      }),
      /board DRC failed/,
    );
    assert.equal(readFileSync(circuitJsonPath, "utf8"), previous);
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});
