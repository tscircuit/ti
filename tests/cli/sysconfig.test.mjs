import assert from "node:assert/strict";
import { spawnSync as realSpawnSync } from "node:child_process";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { runCli } from "../../cli/main.mjs";

function cc2340Circuit(accelPin = 5, accelIdentifier = "DIO12") {
  const component = {
    type: "source_component",
    ftype: "simple_chip",
    source_component_id: "mcu",
    name: "U1_MCU",
    manufacturer_part_number: "CC2340R52E0RGER",
  };
  const ports = [
    {
      type: "source_port",
      source_port_id: "display",
      source_component_id: "mcu",
      name: "DIO20_A11",
      pin_number: 9,
      port_hints: ["DIO20_A11"],
    },
    {
      type: "source_port",
      source_port_id: "accel",
      source_component_id: "mcu",
      name: accelIdentifier,
      pin_number: accelPin,
      port_hints: [accelIdentifier],
    },
    {
      type: "source_port",
      source_port_id: "sda",
      source_component_id: "mcu",
      name: "DIO8",
      pin_number: 3,
      port_hints: ["DIO8"],
    },
    {
      type: "source_port",
      source_port_id: "scl",
      source_component_id: "mcu",
      name: "DIO6_A1",
      pin_number: 19,
      port_hints: ["DIO6_A1"],
    },
  ];
  const signals = [
    ["display", "DISP_PWR_N"],
    ["accel", "ACCEL_INT1"],
    ["sda", "I2C_SDA"],
    ["scl", "I2C_SCL"],
  ];
  return [
    component,
    ...ports,
    ...signals.flatMap(([portId, name], index) => [
      {
        type: "source_net",
        source_net_id: `net_${index}`,
        name,
        member_source_group_ids: [],
      },
      {
        type: "source_trace",
        source_trace_id: `trace_${index}`,
        connected_source_port_ids: [portId],
        connected_source_net_ids: [`net_${index}`],
      },
    ]),
  ];
}

const request = {
  component: "U1_MCU",
  gpios: [
    {
      source: "DISP_PWR_N",
      gpio_name: "CONFIG_DISPLAY_ISOLATE",
      direction: "output",
      initial_state: "high",
    },
    {
      source: "ACCEL_INT1",
      gpio_name: "CONFIG_ACCEL_INT",
      direction: "input",
      pull: "none",
      interrupt: "none",
    },
  ],
  i2c: {
    i2c_name: "CONFIG_I2C_0",
    sda: "I2C_SDA",
    scl: "I2C_SCL",
    max_bit_rate: 100000,
    peripheral_assignment: "suggested",
  },
  reserved_ports: [],
  firmware: { rtos: "nortos" },
};

function fixture(t) {
  const cwd = mkdtempSync(join(tmpdir(), "ti-sysconfig-cli-"));
  t.after(() => rmSync(cwd, { recursive: true, force: true }));
  writeFileSync(join(cwd, "package.json"), '{"private":true,"type":"module"}');
  writeFileSync(
    join(cwd, "board.circuit.json"),
    JSON.stringify(cc2340Circuit(), null, 2),
  );
  writeFileSync(
    join(cwd, "board.sysconfig.json"),
    JSON.stringify(request, null, 2),
  );
  const stdout = [];
  const stderr = [];
  return {
    cwd,
    stdout,
    stderr,
    run: (args, overrides = {}) =>
      runCli(args, {
        cwd,
        stdout: (line) => stdout.push(line),
        stderr: (line) => stderr.push(line),
        ...overrides,
      }),
  };
}

test("generate-sysconfig resolves stable signal names and writes CC2340 SysConfig", async (t) => {
  const f = fixture(t);
  assert.equal(await f.run(["generate-sysconfig", "board.circuit.json"]), 0);
  assert.deepEqual(f.stderr, []);
  assert.match(f.stdout.join("\n"), /Generated board\.syscfg/);

  const source = readFileSync(join(f.cwd, "board.syscfg"), "utf8");
  assert.match(source, /--device "CC2340R5RGE"/);
  assert.match(source, /GPIO1\.\$name = "CONFIG_DISPLAY_ISOLATE"/);
  assert.match(source, /GPIO1\.gpioPin\.\$assign = "DIO20_A11"/);
  assert.match(source, /GPIO2\.\$name = "CONFIG_ACCEL_INT"/);
  assert.match(source, /GPIO2\.gpioPin\.\$assign = "DIO12"/);
  assert.match(source, /I2C1\.i2c\.sdaPin\.\$assign = "DIO8"/);
  assert.match(source, /I2C1\.i2c\.sclPin\.\$assign = "DIO6_A1_AR\+"/);
  assert.match(source, /I2C1\.maxBitRate = 100;/);
  assert.doesNotMatch(source, /maxBitRate = 100000/);
});

test("generate-sysconfig follows a circuit pin change without changing the request file", async (t) => {
  const f = fixture(t);
  writeFileSync(
    join(f.cwd, "board.circuit.json"),
    JSON.stringify(cc2340Circuit(6, "DIO13"), null, 2),
  );

  assert.equal(await f.run(["generate-sysconfig", "board.circuit.json"]), 0);
  const source = readFileSync(join(f.cwd, "board.syscfg"), "utf8");
  assert.match(source, /CONFIG_ACCEL_INT/);
  assert.match(source, /GPIO2\.gpioPin\.\$assign = "DIO13"/);
  assert.doesNotMatch(source, /GPIO2\.gpioPin\.\$assign = "DIO12"/);
});

test("generate-sysconfig supports TSX after the normal tscircuit build step", async (t) => {
  const f = fixture(t);
  writeFileSync(
    join(f.cwd, "board.circuit.tsx"),
    "export default () => null\n",
  );
  const compiledPath = join(f.cwd, "dist", "board", "circuit.json");

  const spawnSync = (command, args, options) => {
    if (args?.[1] === "build") {
      mkdirSync(join(f.cwd, "dist", "board"), { recursive: true });
      writeFileSync(compiledPath, JSON.stringify(cc2340Circuit(), null, 2));
      return { status: 0, stdout: "", stderr: "" };
    }
    return realSpawnSync(command, args, options);
  };

  assert.equal(
    await f.run(["generate-sysconfig", "board.circuit.tsx"], { spawnSync }),
    0,
    f.stderr.join("\n"),
  );
  assert.match(readFileSync(join(f.cwd, "board.syscfg"), "utf8"), /DIO20_A11/);
});

test("check-sysconfig invokes the configured TI CLI only after conversion", async (t) => {
  const f = fixture(t);
  const tiRoot = join(f.cwd, "ti-sdk");
  const tiNode = join(f.cwd, "sysconfig-node");
  const tiCli = join(f.cwd, "cli.js");
  mkdirSync(join(tiRoot, ".metadata"), { recursive: true });
  writeFileSync(join(tiRoot, ".metadata", "product.json"), "{}");
  writeFileSync(tiNode, "");
  writeFileSync(tiCli, "");

  let observedTiArgs;
  const spawnSync = (command, args, options) => {
    if (command === "bun") return realSpawnSync(command, args, options);
    if (command === tiNode) {
      observedTiArgs = args;
      const outputIndex = args.indexOf("--output");
      assert.notEqual(outputIndex, -1);
      const outputDir = args[outputIndex + 1];
      mkdirSync(outputDir, { recursive: true });
      writeFileSync(join(outputDir, "ti_drivers_config.h"), "#define OK 1\n");
      return { status: 0, stdout: "", stderr: "" };
    }
    throw new Error(`Unexpected command: ${command}`);
  };

  const env = {
    ...process.env,
    TI_SYSCONFIG_NODE: tiNode,
    TI_SYSCONFIG_CLI: tiCli,
    TI_SDK_ROOT: tiRoot,
  };
  assert.equal(
    await f.run(["check-sysconfig", "board.circuit.json"], {
      spawnSync,
      env,
    }),
    0,
    f.stderr.join("\n"),
  );
  assert.ok(observedTiArgs);
  assert.ok(observedTiArgs.includes("CC2340R5RGE"));
  assert.ok(observedTiArgs.includes("RGE"));
  assert.ok(observedTiArgs.includes("nortos"));
  assert.match(f.stdout.join("\n"), /SysConfig check passed/);
});

test("check-sysconfig reports missing TI prerequisites without installing anything", async (t) => {
  const f = fixture(t);
  assert.equal(
    await f.run(["check-sysconfig", "board.circuit.json"], {
      env: {},
    }),
    1,
  );
  assert.match(
    f.stderr.join("\n"),
    /Missing TI environment variable\(s\): TI_SYSCONFIG_NODE, TI_SYSCONFIG_CLI, TI_SDK_ROOT/,
  );
});
