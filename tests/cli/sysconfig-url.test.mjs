import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, rm, symlink, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { gunzipSync } from "node:zlib";
import { test } from "node:test";
import { runCli } from "../../cli/main.mjs";

async function run(args, context) {
  const stdout = [],
    stderr = [],
    invocations = [];
  const status = await runCli(["generate-sysconfig-url", ...args], {
    ...context,
    stdout: (line) => stdout.push(line),
    stderr: (line) => stderr.push(line),
    fetch: () => {
      throw new Error("URL generation must not use the network");
    },
    spawnSync: (command, arguments_, options) => {
      invocations.push({ command, arguments_ });
      return (context?.spawnSync ?? spawnSync)(command, arguments_, options);
    },
  });
  return {
    status,
    stdout: stdout.join("\n"),
    stderr: stderr.join("\n"),
    invocations,
  };
}

function decodeUrl(url) {
  return JSON.parse(
    gunzipSync(Buffer.from(new URL(url).hash.split(",")[1], "base64")).toString(
      "utf8",
    ),
  );
}

async function circuitProject(t) {
  const cwd = await mkdtemp(join(tmpdir(), "ti-url-circuit-"));
  t.after(() => rm(cwd, { recursive: true, force: true }));
  await writeFile(
    join(cwd, "package.json"),
    '{"private":true,"type":"module"}',
  );
  await symlink(
    new URL("../../node_modules/", import.meta.url),
    join(cwd, "node_modules"),
    "junction",
  );
  return cwd;
}

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
    source_port_id: "output",
    source_component_id: "mcu",
    name: "ENABLE",
    pin_number: 4,
    is_output: true,
  },
];

test("URL command builds TSX directly, retains PCB data, and preserves sibling SysConfig", async (t) => {
  const cwd = await circuitProject(t);
  const source = `export default () => (
    <board width="20mm" height="20mm">
      <chip name="U1" manufacturerPartNumber="CC2340R52E0RGER" footprint="qfn24"
        pinLabels={{ pin4: "DIO11", pin5: "DIO12" }}
        pinAttributes={{ pin4: { isOutput: true }, pin5: { isInput: true, isUsingInternalPullup: true } }} />
    </board>
  );`;
  await writeFile(join(cwd, "board.circuit.tsx"), source);
  await writeFile(
    join(cwd, "board.syscfg"),
    "// preserve existing configuration\n",
  );
  const result = await run(
    [
      "board.circuit.tsx",
      "--component",
      "U1",
      "--viewer-url",
      "https://example.com/viewer/?theme=dark",
    ],
    { cwd },
  );
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stderr, "");
  assert.equal(new URL(result.stdout).origin, "https://example.com");
  assert.equal(new URL(result.stdout).search, "?theme=dark");
  const payload = decodeUrl(result.stdout);
  assert.equal(payload.schema_version, 2);
  assert.equal(payload.filename, "board.syscfg");
  assert.match(payload.source, /GPIO1\.gpioPin\.\$assign = "DIO11"/);
  assert.match(payload.source, /GPIO2\.pull = "Pull Up"/);
  assert.equal(await readFile(join(cwd, "board.circuit.tsx"), "utf8"), source);
  assert.equal(
    await readFile(join(cwd, "board.syscfg"), "utf8"),
    "// preserve existing configuration\n",
  );
  const build = result.invocations.find(
    ({ arguments_: args }) => args[1] === "build",
  );
  assert.ok(build);
  assert.equal(build.arguments_.includes("--disable-pcb"), false);
  const records = JSON.parse(
    await readFile(join(cwd, "dist/board/circuit.json"), "utf8"),
  );
  assert.ok(records.some(({ type }) => type === "pcb_board"));
  const encoder = result.invocations.find(({ arguments_: args }) =>
    args[0].endsWith("render-url.mjs"),
  );
  assert.equal(existsSync(dirname(encoder.arguments_[1])), false);
});

test("URL command converts Circuit JSON with component selection or an explicit legacy request", async (t) => {
  const cwd = await circuitProject(t);
  for (const filename of ["board.circuit.json", "circuit.json"]) {
    await writeFile(join(cwd, filename), JSON.stringify(circuit));
    const result = await run([filename], { cwd });
    assert.equal(result.status, 0, result.stderr);
    assert.match(
      decodeUrl(result.stdout).source,
      /GPIO1\.gpioPin\.\$assign = "DIO11"/,
    );
    assert.equal(
      existsSync(join(cwd, decodeUrl(result.stdout).filename)),
      false,
    );
  }
  await writeFile(
    join(cwd, "board.circuit.json"),
    JSON.stringify([
      ...circuit,
      { ...circuit[0], name: "U2", source_component_id: "second" },
    ]),
  );
  const ambiguous = await run(["board.circuit.json"], { cwd });
  assert.equal(ambiguous.status, 1);
  assert.equal(ambiguous.stdout, "");
  assert.match(ambiguous.stderr, /found 2/);
  const selected = await run(["board.circuit.json", "--component", "U1"], {
    cwd,
  });
  assert.equal(selected.status, 0, selected.stderr);
  await writeFile(
    join(cwd, "request.json"),
    JSON.stringify({
      component: "U1",
      firmware: { rtos: "nortos", lf_clock_source: "lf_rcosc" },
      gpios: [
        {
          source: "ENABLE",
          gpio_name: "CONFIG_ENABLE",
          direction: "output",
          initial_state: "low",
        },
      ],
    }),
  );
  const configured = await run(
    ["board.circuit.json", "--config", "request.json"],
    { cwd },
  );
  assert.equal(configured.status, 0, configured.stderr);
  assert.match(decodeUrl(configured.stdout).source, /CONFIG_ENABLE/);
});

test("circuit conversion failures print no URL and remove temporary output", async (t) => {
  const cwd = await circuitProject(t);
  await writeFile(
    join(cwd, "board.circuit.json"),
    JSON.stringify([{ ...circuit[0] }]),
  );
  const failed = await run(["board.circuit.json"], { cwd });
  assert.equal(failed.status, 1);
  assert.equal(failed.stdout, "");
  assert.match(failed.stderr, /no MCU pin records/);
  const converter = failed.invocations.find(({ arguments_: args }) =>
    args[0].endsWith("convert.mjs"),
  );
  assert.equal(existsSync(dirname(converter.arguments_[3])), false);
  assert.equal(
    failed.invocations.some(({ arguments_: args }) =>
      args[0].endsWith("render-url.mjs"),
    ),
    false,
  );
  await writeFile(join(cwd, "board.circuit.json"), JSON.stringify(circuit));
  const encoding = await run(["board.circuit.json"], {
    cwd,
    spawnSync: (command, args, options) =>
      args[0].endsWith("render-url.mjs")
        ? { status: 1, stdout: "", stderr: "encoding failed" }
        : spawnSync(command, args, options),
  });
  assert.equal(encoding.status, 1);
  assert.equal(encoding.stdout, "");
  assert.match(encoding.stderr, /encoding failed/);
  const encoder = encoding.invocations.find(({ arguments_: args }) =>
    args[0].endsWith("render-url.mjs"),
  );
  assert.equal(existsSync(dirname(encoder.arguments_[1])), false);
});

test("TSX build failures print no URL and do not invoke the converter or encoder", async (t) => {
  const cwd = await circuitProject(t);
  await writeFile(
    join(cwd, "broken.circuit.tsx"),
    "export default () => <board",
  );
  const result = await run(["broken.circuit.tsx"], { cwd });
  assert.equal(result.status, 1);
  assert.equal(result.stdout, "");
  assert.match(result.stderr, /tscircuit build failed/);
  assert.equal(existsSync(join(cwd, "broken.syscfg")), false);
  assert.equal(result.invocations.length, 2);
  assert.equal(result.invocations[1].arguments_[1], "build");
});

test("URL command validates circuit options before conversion", async (t) => {
  const cwd = await circuitProject(t);
  await writeFile(join(cwd, "board.syscfg"), "// source\n");
  await writeFile(join(cwd, "board.circuit.json"), JSON.stringify(circuit));
  for (const args of [
    ["board.syscfg", "--component", "U1"],
    ["board.syscfg", "--config", "request.json"],
    ["board.circuit.json", "--component", "U1", "--config", "request.json"],
    ["board.circuit.json", "--component", " "],
    ["board.circuit.json", "--config", " "],
    ["board.circuit.json", "--viewer-url", "javascript:alert(1)"],
  ]) {
    const result = await run(args, { cwd });
    assert.equal(result.status, 1, JSON.stringify(args));
    assert.equal(result.stdout, "");
    assert.ok(
      result.invocations.every(
        ({ arguments_: args }) => args[0] === "--version",
      ),
    );
  }
});

test("URL command needs no private viewer or TI tools and preserves exact UTF-8 source", async () => {
  const cwd = await mkdtemp(join(tmpdir(), "ti-url-"));
  const source = '\uFEFF// 雪 ⚡ </script>\r\nconst label = "München";\n';
  try {
    await writeFile(join(cwd, "board-雪.syscfg"), source);
    const result = await run(["board-雪.syscfg"], {
      cwd,
      env: {
        ...process.env,
        TI_SDK_ROOT: "/missing",
        TI_SYSCONFIG_CLI: "/missing",
      },
    });
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stderr, "");
    const url = new URL(result.stdout);
    assert.equal(url.origin, "https://sysconfig-viewer.vercel.app");
    assert.equal(url.pathname + url.search, "/");
    assert.match(url.hash, /^#data:application\/gzip;base64,/);
    const payload = JSON.parse(
      gunzipSync(Buffer.from(url.hash.split(",")[1], "base64")).toString(
        "utf8",
      ),
    );
    assert.deepEqual(payload, {
      schema_version: 2,
      filename: "board-雪.syscfg",
      source,
    });
    assert.equal(await readFile(join(cwd, "board-雪.syscfg"), "utf8"), source);
    assert.equal(result.invocations.length, 2);
    assert.deepEqual(result.invocations[0].arguments_, ["--version"]);
    assert.match(result.invocations[1].arguments_[0], /render-url.mjs$/);
    const overridden = await run(
      [
        "board-雪.syscfg",
        "--viewer-url",
        "https://example.com/viewer/?theme=dark#old",
      ],
      { cwd },
    );
    assert.equal(overridden.status, 0, overridden.stderr);
    assert.equal(new URL(overridden.stdout).pathname, "/viewer/");
    assert.equal(new URL(overridden.stdout).search, "?theme=dark");
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});

test("URL command rejects wrong inputs, malformed encodings, oversized files and unsafe addresses", async () => {
  const cwd = await mkdtemp(join(tmpdir(), "ti-url-errors-"));
  try {
    await writeFile(join(cwd, "empty.syscfg"), "  \n");
    await writeFile(join(cwd, "invalid.syscfg"), new Uint8Array([0xff, 0xfe]));
    await writeFile(join(cwd, "large.syscfg"), "x".repeat(4 * 1024 * 1024 + 1));
    await writeFile(join(cwd, "valid.syscfg"), "// inert source\n");
    for (const args of [
      [],
      ["a", "b"],
      ["missing.syscfg"],
      ["board.tsx"],
      ["empty.syscfg"],
      ["invalid.syscfg"],
      ["large.syscfg"],
      ["valid.syscfg", "--viewer-url", ""],
      ["valid.syscfg", "--viewer-url", "javascript:alert(1)"],
      ["valid.syscfg", "--viewer-url", "https://user:password@example.com/"],
    ]) {
      const result = await run(args, { cwd });
      assert.equal(result.status, 1, JSON.stringify(args));
      assert.equal(result.stdout, "", JSON.stringify(args));
      assert.match(result.stderr, /Failed to generate SysConfig URL/);
    }
    const help = await run(["--help"], { cwd });
    assert.equal(help.status, 0);
    assert.equal(help.invocations.length, 0);
    assert.match(help.stdout, /No private viewer package/);
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});
