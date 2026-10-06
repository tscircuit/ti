import assert from "node:assert/strict";
import {
  mkdirSync,
  mkdtempSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import {
  discoverTiInstallations,
  getTiInstallationRoots,
  resolveTiEnvironment,
} from "../../cli/sysconfig/discover-ti-tools.mjs";

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), "ti-discovery-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const versions = new Map();
  const calls = [];
  return {
    root,
    versions,
    calls,
    spawnSync: (command, args) => {
      calls.push({ command, args });
      assert.equal(args[1], "--version");
      assert.equal(args.length, 2);
      assert.ok(versions.has(args[0]), `Unexpected CLI: ${args[0]}`);
      const expected = versions.get(args[0]);
      assert.equal(command, expected.tiNode);
      return { status: 0, stdout: `${expected.version}\n` };
    },
  };
}

function installSysconfig({
  f,
  directory,
  version = "1.28.1+4785",
  ccsRoot,
  platform = process.platform,
}) {
  const tiCli = join(directory, "dist", "cli.js");
  const tiNode = join(
    ccsRoot ? join(ccsRoot, "tools", "node") : join(directory, "nodejs"),
    platform === "win32" ? "node.exe" : "node",
  );
  mkdirSync(join(directory, "dist"), { recursive: true });
  mkdirSync(
    ccsRoot ? join(ccsRoot, "tools", "node") : join(directory, "nodejs"),
    { recursive: true },
  );
  writeFileSync(tiCli, "");
  writeFileSync(tiNode, "");
  f.versions.set(tiCli, { tiNode, version });
  return { tiNode, tiCli };
}

function installSdk({
  directory,
  name = "simplelink_lowpower_f3_sdk",
  version = "9.21.00.36",
}) {
  mkdirSync(join(directory, ".metadata"), { recursive: true });
  writeFileSync(
    join(directory, ".metadata", "product.json"),
    JSON.stringify({ name, version }),
  );
  return directory;
}

function resolveInstalled(f, env = {}) {
  return resolveTiEnvironment({
    target: "cc2340",
    env,
    spawnSync: f.spawnSync,
    installations: discoverTiInstallations({ env, roots: [f.root] }),
  });
}

test("standard TI search roots follow macOS, Linux and Windows installations", () => {
  assert.deepEqual(
    getTiInstallationRoots({
      platform: "darwin",
      homeDir: "/Users/tester",
      env: {},
    }),
    ["/Users/tester/ti", "/Applications/ti", "/opt/ti", "/ti"],
  );
  assert.deepEqual(
    getTiInstallationRoots({
      platform: "linux",
      homeDir: "/home/tester",
      env: {},
    }),
    ["/home/tester/ti", "/opt/ti", "/ti"],
  );
  assert.deepEqual(
    getTiInstallationRoots({
      platform: "win32",
      homeDir: "C:\\Users\\tester",
      env: {},
    }),
    ["C:\\Users\\tester\\ti", "C:\\ti"],
  );
  assert.deepEqual(
    getTiInstallationRoots({
      platform: "win32",
      homeDir: "D:\\Users\\tester",
      env: { SystemDrive: "D:" },
    }),
    ["D:\\Users\\tester\\ti", "D:\\ti"],
  );
});

test("standalone discovery selects compatible metadata and CLI versions without changing the environment", (t) => {
  const f = fixture(t);
  installSysconfig({
    f,
    directory: join(f.root, "sysconfig_1.14.0"),
    version: "1.14.0+2667",
  });
  const { tiNode, tiCli } = installSysconfig({
    f,
    directory: join(f.root, "sysconfig_1.28.1"),
  });
  installSdk({
    directory: join(f.root, "simplelink_older_sdk"),
    version: "9.10.00.83",
  });
  const sdkRoot = installSdk({
    directory: join(f.root, "simplelink_lowpower_f3_sdk_9_21_00_36"),
  });
  const env = { PATH: "/test/path" };
  assert.deepEqual(resolveInstalled(f, env), {
    ...env,
    TI_SYSCONFIG_NODE: tiNode,
    TI_SYSCONFIG_CLI: tiCli,
    TI_SDK_ROOT: sdkRoot,
  });
  assert.deepEqual(env, { PATH: "/test/path" });
  assert.equal(f.calls.length, 2);
});

test("CCS discovery keeps its SysConfig CLI paired with CCS bundled Node", (t) => {
  const f = fixture(t);
  const ccsRoot = join(f.root, "ccs2101", "ccs");
  const { tiNode, tiCli } = installSysconfig({
    f,
    ccsRoot,
    directory: join(ccsRoot, "utils", "sysconfig_1.28.1"),
  });
  installSdk({ directory: join(f.root, "sdk") });
  const env = resolveInstalled(f);
  assert.equal(env.TI_SYSCONFIG_NODE, tiNode);
  assert.equal(env.TI_SYSCONFIG_CLI, tiCli);
});

test("older CCS directory layouts and Windows node.exe are discoverable", (t) => {
  const f = fixture(t);
  const ccsRoot = join(f.root, "ccsv12");
  const installation = installSysconfig({
    f,
    ccsRoot,
    directory: join(ccsRoot, "utils", "sysconfig"),
    platform: "win32",
  });
  installSdk({ directory: join(f.root, "sdk") });
  const installations = discoverTiInstallations({
    env: {},
    roots: [f.root],
    platform: "win32",
  });
  assert.deepEqual(installations.sysconfigInstallations, [installation]);
  assert.equal(
    resolveTiEnvironment({
      target: "cc2340",
      installations,
      env: {},
      spawnSync: f.spawnSync,
    }).TI_SYSCONFIG_NODE,
    installation.tiNode,
  );
});

test("AM2434 discovery selects its historical SDK metadata and tool version", (t) => {
  const f = fixture(t);
  const installation = installSysconfig({
    f,
    directory: join(f.root, "sysconfig_1.14.0"),
    version: "1.14.0+2667",
  });
  installSysconfig({ f, directory: join(f.root, "sysconfig_1.28.1") });
  const sdkRoot = installSdk({
    directory: join(f.root, "mcu_plus_sdk_am243x"),
    name: "MCU_PLUS_SDK",
    version: "07.03.01",
  });
  // The historical TI manifest accepts trailing commas.
  writeFileSync(
    join(sdkRoot, ".metadata", "product.json"),
    '{"name":"MCU_PLUS_SDK","version":"07.03.01",}',
  );
  const env = resolveTiEnvironment({
    target: "am2434",
    env: {},
    spawnSync: f.spawnSync,
    installations: discoverTiInstallations({ env: {}, roots: [f.root] }),
  });
  assert.equal(env.TI_SYSCONFIG_CLI, installation.tiCli);
  assert.equal(env.TI_SDK_ROOT, sdkRoot);
});

test("custom CLI override discovers its own bundled Node and the installed SDK", (t) => {
  const f = fixture(t);
  const custom = join(f.root, "custom", "sysconfig");
  const { tiNode, tiCli } = installSysconfig({ f, directory: custom });
  installSysconfig({ f, directory: join(f.root, "other-sysconfig") });
  installSdk({ directory: join(f.root, "sdk") });
  const env = resolveInstalled(f, { TI_SYSCONFIG_CLI: tiCli });
  assert.equal(env.TI_SYSCONFIG_CLI, tiCli);
  assert.equal(env.TI_SYSCONFIG_NODE, tiNode);
  assert.equal(f.calls.length, 1);
});

test("custom SDK override is preserved while the standard CLI is discovered", (t) => {
  const f = fixture(t);
  const { tiCli } = installSysconfig({
    f,
    directory: join(f.root, "sysconfig"),
  });
  installSdk({ directory: join(f.root, "sdk") });
  const sdkRoot = installSdk({ directory: join(f.root, "custom", "sdk") });
  const env = resolveInstalled(f, { TI_SDK_ROOT: sdkRoot });
  assert.equal(env.TI_SDK_ROOT, sdkRoot);
  assert.equal(env.TI_SYSCONFIG_CLI, tiCli);
});

test("invalid explicit paths fail instead of selecting an installed alternative", (t) => {
  const f = fixture(t);
  installSysconfig({ f, directory: join(f.root, "sysconfig") });
  installSdk({ directory: join(f.root, "sdk") });
  assert.throws(
    () => resolveInstalled(f, { TI_SYSCONFIG_CLI: join(f.root, "missing.js") }),
    /Configured TI paths do not exist[\s\S]*Update TI_SYSCONFIG_CLI/,
  );
  assert.equal(f.calls.length, 0);
});

test("an incompatible explicit CLI is not replaced with a compatible discovered one", (t) => {
  const f = fixture(t);
  const { tiCli } = installSysconfig({
    f,
    directory: join(f.root, "older"),
    version: "1.14.0+2667",
  });
  installSysconfig({ f, directory: join(f.root, "current") });
  installSdk({ directory: join(f.root, "sdk") });
  assert.throws(
    () => resolveInstalled(f, { TI_SYSCONFIG_CLI: tiCli }),
    /requires TI SysConfig 1.28.1\+4785[\s\S]*SysConfig 1.14.0\+2667[\s\S]*TI_SYSCONFIG_CLI/,
  );
  assert.equal(f.calls.length, 1);
});

test("missing or incompatible SDK errors list searched folders and detected versions", (t) => {
  const f = fixture(t);
  installSysconfig({ f, directory: join(f.root, "sysconfig") });
  assert.throws(
    () => resolveInstalled(f),
    /Could not find installed TI tools[\s\S]*TI_SDK_ROOT[\s\S]*Searched:/,
  );
  installSdk({ directory: join(f.root, "older-sdk"), version: "9.10.00.83" });
  assert.throws(
    () => resolveInstalled(f),
    /requires simplelink_lowpower_f3_sdk@9.21.00.36[\s\S]*9.10.00.83[\s\S]*TI_SDK_ROOT/,
  );
  assert.equal(f.calls.length, 0);
});

test("multiple compatible SDKs require an explicit choice", (t) => {
  const f = fixture(t);
  installSysconfig({ f, directory: join(f.root, "sysconfig") });
  const sdkRoot = installSdk({ directory: join(f.root, "sdk-a") });
  installSdk({ directory: join(f.root, "sdk-b") });
  assert.throws(
    () => resolveInstalled(f),
    /multiple compatible installations[\s\S]*sdk-a[\s\S]*sdk-b[\s\S]*Set TI_SDK_ROOT/,
  );
  assert.equal(
    resolveInstalled(f, { TI_SDK_ROOT: sdkRoot }).TI_SDK_ROOT,
    sdkRoot,
  );
});

test("multiple compatible CLIs require an override and retain their paired Node", (t) => {
  const f = fixture(t);
  const { tiNode, tiCli } = installSysconfig({
    f,
    directory: join(f.root, "sysconfig-a"),
  });
  installSysconfig({ f, directory: join(f.root, "sysconfig-b") });
  installSdk({ directory: join(f.root, "sdk") });
  assert.throws(
    () => resolveInstalled(f),
    /multiple compatible installations[\s\S]*sysconfig-a[\s\S]*sysconfig-b[\s\S]*Set TI_SYSCONFIG_CLI/,
  );
  assert.equal(
    resolveInstalled(f, { TI_SYSCONFIG_CLI: tiCli }).TI_SYSCONFIG_NODE,
    tiNode,
  );
});

test("symbolic links and repeated search roots do not create false ambiguity", (t) => {
  const f = fixture(t);
  const directory = join(f.root, "sysconfig");
  installSysconfig({ f, directory });
  const sdkRoot = installSdk({ directory: join(f.root, "sdk") });
  symlinkSync(directory, join(f.root, "sysconfig-link"), "junction");
  symlinkSync(sdkRoot, join(f.root, "sdk-link"), "junction");
  const installations = discoverTiInstallations({
    env: {},
    roots: [f.root, f.root],
  });
  assert.equal(installations.sysconfigInstallations.length, 1);
  assert.equal(installations.sdkInstallations.length, 1);
  assert.doesNotThrow(() =>
    resolveTiEnvironment({
      target: "cc2340",
      installations,
      env: {},
      spawnSync: f.spawnSync,
    }),
  );
});

test("malformed SDK metadata and a broken CLI are diagnosed without reporting success", (t) => {
  const f = fixture(t);
  const { tiCli } = installSysconfig({
    f,
    directory: join(f.root, "sysconfig"),
  });
  const sdkRoot = installSdk({ directory: join(f.root, "sdk") });
  writeFileSync(join(sdkRoot, ".metadata", "product.json"), "null");
  assert.throws(
    () => resolveInstalled(f),
    /no compatible installation found[\s\S]*Expected an SDK product name and version/,
  );
  installSdk({ directory: sdkRoot });
  const installations = discoverTiInstallations({ env: {}, roots: [f.root] });
  assert.throws(
    () =>
      resolveTiEnvironment({
        target: "cc2340",
        installations,
        env: {},
        spawnSync: () => ({ status: 1, stderr: "Permission denied" }),
      }),
    /no compatible installation found[\s\S]*Permission denied/,
  );
  rmSync(f.versions.get(tiCli).tiNode);
  assert.throws(
    () => resolveInstalled(f),
    /CLI found without a bundled Node[\s\S]*TI_SYSCONFIG_NODE/,
  );
});

test("complete explicit paths work outside standard folders without scanning them", (t) => {
  const f = fixture(t);
  const { tiNode, tiCli } = installSysconfig({
    f,
    directory: join(f.root, "custom", "sysconfig"),
  });
  const sdkRoot = installSdk({ directory: join(f.root, "custom", "sdk") });
  const env = {
    TI_SYSCONFIG_NODE: tiNode,
    TI_SYSCONFIG_CLI: tiCli,
    TI_SDK_ROOT: sdkRoot,
  };
  const installations = discoverTiInstallations({
    env,
    roots: ["/not-a-ti-root"],
  });
  assert.equal(
    resolveTiEnvironment({
      target: "cc2340",
      installations,
      env,
      spawnSync: f.spawnSync,
    }),
    env,
  );
  assert.equal(f.calls.length, 1);
});
