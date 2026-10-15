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
      return spawnSync(command, arguments_, options);
    },
  });
  return {
    status,
    stdout: stdout.join("\n"),
    stderr: stderr.join("\n"),
    invocations,
  };
}

test("URL command converts TSX without overwriting a sibling SysConfig file", async (t) => {
  const cwd = await mkdtemp(join(tmpdir(), "ti-url-tsx-"));
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
  await writeFile(join(cwd, "index.syscfg"), "// existing configuration\n");
  await writeFile(
    join(cwd, "index.circuit.tsx"),
    `export default () => (
    <board width="20mm" height="20mm">
      <chip name="U1" manufacturerPartNumber="CC2340R52E0RGER" footprint="qfn24"
        pinLabels={{ pin4: "DIO11" }} pinAttributes={{ pin4: { isOutput: true } }} />
    </board>
  );`,
  );
  const result = await run(["index.circuit.tsx"], { cwd });
  assert.equal(result.status, 0, result.stderr);
  const payload = JSON.parse(
    gunzipSync(
      Buffer.from(new URL(result.stdout).hash.split(",")[1], "base64"),
    ).toString("utf8"),
  );
  assert.equal(payload.filename, "index.syscfg");
  assert.match(payload.source, /GPIO1\.gpioPin\.\$assign = "DIO11"/);
  assert.equal(
    await readFile(join(cwd, "index.syscfg"), "utf8"),
    "// existing configuration\n",
  );
  const encoder = result.invocations.at(-1);
  assert.equal(existsSync(dirname(encoder.arguments_[1])), false);
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
