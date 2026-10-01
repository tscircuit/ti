import assert from "node:assert/strict";
import { spawnSync as realSpawnSync } from "node:child_process";
import {
  existsSync,
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
import { validateGeneratedFiles } from "../../cli/sysconfig/ti-cli.mjs";

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
  firmware: { rtos: "nortos", lf_clock_source: "lf_rcosc" },
};

const jsxCircuitSource = `export default () => (
  <board width="10mm" height="10mm" routingDisabled>
    <chip name="U1_MCU" manufacturerPartNumber="CC2340R52E0RGER"
      pinLabels={{
        pin9: ["DISP_PWR_N", "DIO20_A11"],
        pin5: ["ACCEL_INT1", "DIO12"],
        pin3: ["I2C_SDA", "DIO8"],
        pin19: ["I2C_SCL", "DIO6_A1"],
      }} />
  </board>
);`;

const plainCircuitSource = `import React from "react";
export default () => React.createElement("board", {
  width: "10mm", height: "10mm", routingDisabled: true,
}, React.createElement("chip", {
  name: "U1_MCU",
  manufacturerPartNumber: "CC2340R52E0RGER",
  pinLabels: {
    pin9: ["DISP_PWR_N", "DIO20_A11"],
    pin5: ["ACCEL_INT1", "DIO12"],
    pin3: ["I2C_SDA", "DIO8"],
    pin19: ["I2C_SCL", "DIO6_A1"],
  },
}));`;

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
  assert.match(source, /CCFG\.srcClkLF = "LF RCOSC";/);
  assert.match(source, /Board\.generateInitializationFunctions = false;/);
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

test("generate-sysconfig accepts every advertised source and Circuit JSON input format", {
  timeout: 20_000,
}, async (t) => {
  const f = fixture(t);
  for (const extension of ["tsx", "ts", "jsx", "js"]) {
    const inputName = `board.${extension}`;
    writeFileSync(
      join(f.cwd, inputName),
      extension === "tsx" || extension === "jsx"
        ? jsxCircuitSource
        : plainCircuitSource,
    );
    assert.equal(
      await f.run(["generate-sysconfig", inputName]),
      0,
      `${inputName}: ${f.stderr.join("\n")}`,
    );
    const buildDirectory = extension === "tsx" ? "board" : inputName;
    assert.ok(existsSync(join(f.cwd, "dist", buildDirectory, "circuit.json")));
    const syscfg = readFileSync(join(f.cwd, "board.syscfg"), "utf8");
    assert.match(syscfg, /GPIO1\.gpioPin\.\$assign = "DIO20_A11"/);
    assert.match(syscfg, /I2C1\.maxBitRate = 100;/);
  }

  writeFileSync(join(f.cwd, "circuit.json"), JSON.stringify(cc2340Circuit()));
  assert.equal(
    await f.run([
      "generate-sysconfig",
      "circuit.json",
      "--config",
      "board.sysconfig.json",
      "-o",
      "direct.syscfg",
    ]),
    0,
    f.stderr.join("\n"),
  );
  assert.match(
    readFileSync(join(f.cwd, "direct.syscfg"), "utf8"),
    /CONFIG_DISPLAY_ISOLATE/,
  );
});

test("generate-sysconfig rejects non-array GPIO requests instead of dropping them", async (t) => {
  const f = fixture(t);
  for (const gpios of [request.gpios[0], null]) {
    writeFileSync(
      join(f.cwd, "board.sysconfig.json"),
      JSON.stringify({ ...request, gpios }),
    );
    assert.equal(await f.run(["generate-sysconfig", "board.circuit.json"]), 1);
    assert.match(f.stderr.at(-1), /gpios must be an array/);
    assert.equal(existsSync(join(f.cwd, "board.syscfg")), false);
  }
});

test("generate-sysconfig compiles connected TSX traces and follows a pin change", async (t) => {
  const f = fixture(t);
  const sourcePath = join(f.cwd, "board.circuit.tsx");
  const source = `export default () => (
    <board width="10mm" height="10mm" routingDisabled>
      <chip name="U1_MCU" manufacturerPartNumber="CC2340R52E0RGER"
        pinLabels={{
          pin9: ["DIO20_A11"],
          pin5: ["ACCEL_INT1", "DIO12"],
          pin3: ["I2C_SDA", "DIO8"],
          pin19: ["I2C_SCL", "DIO6_A1"],
        }} />
      <resistor name="R1" resistance="10k" footprint="0402" />
      <net name="DISP_PWR_N" />
      <trace from=".U1_MCU > .DIO20_A11" to=".R1 > .pin1" />
      <trace from=".R1 > .pin1" to="net.DISP_PWR_N" />
      <trace from=".R1 > .pin2" to=".U1_MCU > .ACCEL_INT1" />
    </board>
  );`;
  writeFileSync(sourcePath, source);
  assert.equal(
    await f.run(["generate-sysconfig", "board.circuit.tsx"]),
    0,
    f.stderr.join("\n"),
  );
  assert.match(
    readFileSync(join(f.cwd, "board.syscfg"), "utf8"),
    /GPIO2\.gpioPin\.\$assign = "DIO12"/,
  );
  writeFileSync(
    sourcePath,
    source.replace(
      'pin5: ["ACCEL_INT1", "DIO12"]',
      'pin6: ["ACCEL_INT1", "DIO13"]',
    ),
  );
  assert.equal(
    await f.run(["generate-sysconfig", "board.circuit.tsx"]),
    0,
    f.stderr.join("\n"),
  );
  const exported = readFileSync(join(f.cwd, "board.syscfg"), "utf8");
  assert.match(exported, /GPIO1\.gpioPin\.\$assign = "DIO20_A11"/);
  assert.match(exported, /GPIO2\.gpioPin\.\$assign = "DIO13"/);
  assert.match(exported, /I2C1\.maxBitRate = 100;/);
});

test("generate-sysconfig rejects a net reaching multiple MCU pins through connected traces", async (t) => {
  const f = fixture(t);
  const circuitJson = cc2340Circuit();
  circuitJson.push(
    {
      type: "source_trace",
      source_trace_id: "display_to_junction",
      connected_source_port_ids: ["display", "junction"],
      connected_source_net_ids: [],
    },
    {
      type: "source_trace",
      source_trace_id: "junction_to_accel",
      connected_source_port_ids: ["junction", "accel"],
      connected_source_net_ids: [],
    },
    {
      type: "source_trace",
      source_trace_id: "cycle",
      connected_source_port_ids: ["junction", "display"],
      connected_source_net_ids: [],
    },
  );
  writeFileSync(join(f.cwd, "board.circuit.json"), JSON.stringify(circuitJson));
  assert.equal(await f.run(["generate-sysconfig", "board.circuit.json"]), 1);
  assert.match(
    f.stderr.join("\n"),
    /"DISP_PWR_N" to resolve to one port on U1_MCU; found 2/,
  );
});

test("check-sysconfig invokes the configured TI CLI only after conversion", async (t) => {
  const f = fixture(t);
  writeFileSync(join(f.cwd, "board.jsx"), jsxCircuitSource);
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
      writeFileSync(
        join(outputDir, "ti_drivers_config.c"),
        "/* test output */\n",
      );
      writeFileSync(
        join(outputDir, "ti_devices_config.c"),
        "/* test output */\n",
      );
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
    await f.run(["check-sysconfig", "board.jsx"], {
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

test("TI success requires the target's generated C and header files", async (t) => {
  const f = fixture(t);
  writeFileSync(join(f.cwd, "unrelated.log"), "success\n");
  await assert.rejects(
    validateGeneratedFiles(f.cwd, "cc2340"),
    /ti_drivers_config.c/,
  );
  writeFileSync(join(f.cwd, "ti_drivers_config.c"), "/* test output */\n");
  writeFileSync(join(f.cwd, "ti_drivers_config.h"), "/* test output */\n");
  writeFileSync(join(f.cwd, "ti_devices_config.c"), "");
  await assert.rejects(
    validateGeneratedFiles(f.cwd, "cc2340"),
    /ti_devices_config.c/,
  );
  writeFileSync(join(f.cwd, "ti_devices_config.c"), "/* test output */\n");
  assert.ok(await validateGeneratedFiles(f.cwd, "cc2340"));
  await assert.rejects(
    validateGeneratedFiles(f.cwd, "am2434"),
    /ti_pinmux_config.c/,
  );
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
