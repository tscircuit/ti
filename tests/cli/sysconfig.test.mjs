import assert from "node:assert/strict";
import { spawnSync as realSpawnSync } from "node:child_process";
import {
  existsSync,
  copyFileSync,
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
import {
  validateGeneratedFiles,
  validateTiTarget,
} from "../../cli/sysconfig/ti-cli.mjs";
import { validateCc2340Output } from "../../cli/sysconfig/validate-cc2340-output.mjs";
import { validateAm2434Output } from "../../cli/sysconfig/validate-am2434-output.mjs";
import { resolveConverterOptions } from "../../cli/sysconfig/request.mjs";

const tiOutputFixture = new URL(
  "./fixtures/cc2340-ti-output/",
  import.meta.url,
);
const am2434OutputFixture = new URL(
  "./fixtures/am2434-ti-output/",
  import.meta.url,
);

function am2434Circuit(ball = "A7") {
  return [
    {
      type: "source_component",
      ftype: "simple_chip",
      source_component_id: "mcu",
      name: "U1_MCU",
      manufacturer_part_number: "AM2434BSDFHIALVR",
    },
    {
      type: "source_port",
      source_port_id: "gpio_output",
      source_component_id: "mcu",
      name: "GPIO_OUTPUT",
      port_hints: [ball],
    },
  ];
}

const am2434Request = {
  component: "U1_MCU",
  gpios: [
    { source: "GPIO_OUTPUT", gpio_name: "GPIO_CONVERTED", direction: "output" },
  ],
};

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
      source_port_id: "pmic",
      source_component_id: "mcu",
      name: "DIO3_X32P",
      pin_number: 14,
      port_hints: ["DIO3_X32P"],
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
    ["pmic", "PMIC_LP"],
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
      source: "PMIC_LP",
      gpio_name: "CONFIG_PMIC_LP",
      direction: "output",
      initial_state: "low",
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
        pin14: ["PMIC_LP", "DIO3_X32P"],
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
    pin14: ["PMIC_LP", "DIO3_X32P"],
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
  assert.match(source, /GPIO3\.\$name = "CONFIG_ACCEL_INT"/);
  assert.match(source, /GPIO3\.gpioPin\.\$assign = "DIO12"/);
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
  assert.match(source, /GPIO3\.gpioPin\.\$assign = "DIO13"/);
  assert.doesNotMatch(source, /GPIO3\.gpioPin\.\$assign = "DIO12"/);
});

test("generate-sysconfig accepts the pedometer's open-drain I2C declarations", async (t) => {
  const f = fixture(t);
  const circuitJson = cc2340Circuit();
  for (const port of circuitJson) {
    if (
      port.type === "source_port" &&
      ["sda", "scl"].includes(port.source_port_id)
    ) {
      port.is_using_open_drain = true;
    }
  }
  writeFileSync(join(f.cwd, "board.circuit.json"), JSON.stringify(circuitJson));
  assert.equal(
    await f.run(["generate-sysconfig", "board.circuit.json"]),
    0,
    f.stderr.join("\n"),
  );
  const generated = readFileSync(join(f.cwd, "board.syscfg"), "utf8");
  assert.match(generated, /I2C1\.i2c\.sdaPin\.\$assign = "DIO8"/);
  assert.match(generated, /I2C1\.i2c\.sclPin\.\$assign = "DIO6_A1_AR\+"/);
});

test("missing firmware request distinguishes successful circuit generation from firmware choices", async (t) => {
  const f = fixture(t);
  rmSync(join(f.cwd, "board.sysconfig.json"));
  writeFileSync(join(f.cwd, "index.circuit.tsx"), jsxCircuitSource);
  assert.equal(await f.run(["generate-sysconfig", "index.circuit.tsx"]), 1);
  assert.ok(existsSync(join(f.cwd, "dist/index/circuit.json")));
  const message = f.stderr.join("\n");
  assert.match(message, /Circuit JSON is available/);
  assert.match(message, /GPIO directions, output startup states, or I2C speed/);
  assert.match(message, /Create index\.sysconfig\.json/);
  assert.match(message, /ti\.sysconfig\.json/);
  assert.equal(existsSync(join(f.cwd, "index.syscfg")), false);
});

test("a missing explicit request reports its path without suggesting an implicit request", async (t) => {
  const f = fixture(t);
  assert.equal(
    await f.run([
      "generate-sysconfig",
      "board.circuit.json",
      "--config",
      "missing.json",
    ]),
    1,
  );
  assert.match(f.stderr.join("\n"), /missing\.json \(from --config\)/);
  assert.doesNotMatch(f.stderr.join("\n"), /Create board\.sysconfig\.json/);
  assert.equal(existsSync(join(f.cwd, "board.syscfg")), false);
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

test("CC2340 rejects malformed reserved ports instead of dropping them", async (t) => {
  const f = fixture(t);
  for (const reserved_ports of [null, { source: "DIO20_A11" }, "DIO20_A11"]) {
    writeFileSync(
      join(f.cwd, "board.sysconfig.json"),
      JSON.stringify({ ...request, reserved_ports }),
    );
    assert.equal(await f.run(["generate-sysconfig", "board.circuit.json"]), 1);
    assert.match(f.stderr.at(-1), /reserved_ports must be an array/);
    assert.equal(existsSync(join(f.cwd, "board.syscfg")), false);
  }
});

test("CC2340 requires an explicit LF clock source", async (t) => {
  const f = fixture(t);
  const missingClock = structuredClone(request);
  delete missingClock.firmware.lf_clock_source;
  writeFileSync(
    join(f.cwd, "board.sysconfig.json"),
    JSON.stringify(missingClock),
  );
  assert.equal(await f.run(["generate-sysconfig", "board.circuit.json"]), 1);
  assert.match(
    f.stderr.at(-1),
    /firmware\.lf_clock_source must be explicitly set/,
  );
  assert.equal(existsSync(join(f.cwd, "board.syscfg")), false);
});

test("SysConfig commands report missing Bun before reading circuit files", async (t) => {
  const f = fixture(t);
  const missingBun = () => ({
    error: Object.assign(new Error("not found"), { code: "ENOENT" }),
  });
  assert.equal(
    await f.run(["generate-sysconfig", "missing.circuit.json"], {
      spawnSync: missingBun,
    }),
    1,
  );
  assert.match(f.stderr.at(-1), /require Bun on PATH/);
  assert.doesNotMatch(f.stderr.at(-1), /Input file does not exist/);
  assert.equal(
    await f.run(["check-sysconfig", "missing.circuit.json"], {
      spawnSync: missingBun,
    }),
    1,
  );
  assert.match(f.stderr.at(-1), /require Bun on PATH/);
});

test("generate-sysconfig compiles connected TSX traces and follows a pin change", async (t) => {
  const f = fixture(t);
  const sourcePath = join(f.cwd, "board.circuit.tsx");
  const source = `export default () => (
    <board width="10mm" height="10mm" routingDisabled>
      <chip name="U1_MCU" manufacturerPartNumber="CC2340R52E0RGER"
        pinLabels={{
        pin9: ["DIO20_A11"],
        pin14: ["PMIC_LP", "DIO3_X32P"],
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
    /GPIO3\.gpioPin\.\$assign = "DIO12"/,
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
  assert.match(exported, /GPIO3\.gpioPin\.\$assign = "DIO13"/);
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
  writeFileSync(
    join(tiRoot, ".metadata", "product.json"),
    JSON.stringify({
      name: "simplelink_lowpower_f3_sdk",
      version: "9.21.00.36",
    }),
  );
  writeFileSync(tiNode, "");
  writeFileSync(tiCli, "");

  let observedTiArgs;
  let corruptRate = false;
  const spawnSync = (command, args, options) => {
    if (command === "bun") return realSpawnSync(command, args, options);
    if (command === tiNode) {
      if (args.includes("--version")) {
        return { status: 0, stdout: "1.28.1+4785\n", stderr: "" };
      }
      observedTiArgs = args;
      const outputIndex = args.indexOf("--output");
      assert.notEqual(outputIndex, -1);
      const outputDir = args[outputIndex + 1];
      mkdirSync(outputDir, { recursive: true });
      for (const filename of [
        "ti_drivers_config.h",
        "ti_drivers_config.c",
        "ti_devices_config.c",
      ]) {
        copyFileSync(
          new URL(filename, tiOutputFixture),
          join(outputDir, filename),
        );
      }
      if (corruptRate) {
        const headerPath = join(outputDir, "ti_drivers_config.h");
        writeFileSync(
          headerPath,
          readFileSync(headerPath, "utf8").replace(
            "#define CONFIG_I2C_0_MAXSPEED   (100U)",
            "#define CONFIG_I2C_0_MAXSPEED   (400U)",
          ),
        );
      }
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
  corruptRate = true;
  assert.equal(
    await f.run(["check-sysconfig", "board.jsx"], { spawnSync, env }),
    1,
  );
  assert.match(f.stderr.at(-1), /100 kbit\/s/);
});

test("CC2340 TI validation rejects a mismatched SDK or SysConfig tool", (t) => {
  const f = fixture(t);
  const tiRoot = join(f.cwd, "ti-sdk");
  const tiNode = join(f.cwd, "node");
  const tiCli = join(f.cwd, "cli.js");
  mkdirSync(join(tiRoot, ".metadata"), { recursive: true });
  writeFileSync(tiNode, "");
  writeFileSync(tiCli, "");
  const product = join(tiRoot, ".metadata", "product.json");
  const env = {
    TI_SYSCONFIG_NODE: tiNode,
    TI_SYSCONFIG_CLI: tiCli,
    TI_SDK_ROOT: tiRoot,
  };
  writeFileSync(
    product,
    JSON.stringify({ name: "other_sdk", version: "9.21.00.36" }),
  );
  assert.throws(
    () => validateTiTarget({ target: "cc2340", env }),
    /CC2340 requires simplelink_lowpower_f3_sdk/,
  );
  writeFileSync(
    product,
    JSON.stringify({
      name: "simplelink_lowpower_f3_sdk",
      version: "9.21.00.36",
    }),
  );
  assert.throws(
    () =>
      validateTiTarget({
        target: "cc2340",
        env,
        spawnSync: () => ({ status: 0, stdout: "1.26.3\n" }),
      }),
    /requires TI SysConfig 1\.28\.1\+4785/,
  );
});

test("AM2434 TI validation checks the historical SDK and tool identity", (t) => {
  const f = fixture(t);
  const tiRoot = join(f.cwd, "ti-sdk");
  const tiNode = join(f.cwd, "node");
  const tiCli = join(f.cwd, "cli.js");
  mkdirSync(join(tiRoot, ".metadata"), { recursive: true });
  writeFileSync(tiNode, "");
  writeFileSync(tiCli, "");
  const product = join(tiRoot, ".metadata", "product.json");
  const env = {
    TI_SYSCONFIG_NODE: tiNode,
    TI_SYSCONFIG_CLI: tiCli,
    TI_SDK_ROOT: tiRoot,
  };
  writeFileSync(
    product,
    '{"name":"MCU_PLUS_SDK","version":"07.03.01","includePaths":["../source",],}',
  );
  assert.doesNotThrow(() =>
    validateTiTarget({
      target: "am2434",
      env,
      spawnSync: () => ({ status: 0, stdout: "1.14.0+2667\n" }),
    }),
  );
  writeFileSync(
    product,
    JSON.stringify({ name: "other_sdk", version: "07.03.01" }),
  );
  assert.throws(
    () => validateTiTarget({ target: "am2434", env }),
    /AM2434 requires MCU_PLUS_SDK/,
  );
  writeFileSync(product, '{"name":"MCU_PLUS_SDK", broken]');
  assert.throws(
    () => validateTiTarget({ target: "am2434", env }),
    /Unable to read TI SDK product metadata/,
  );
});

test("AM2434 rejects malformed and unsupported reserved ports", () => {
  const circuitJson = am2434Circuit();
  const request = am2434Request;

  for (const reservedPorts of [
    { source: "A7", reason: "must remain unconfigured" },
    null,
    "A7",
  ]) {
    assert.throws(
      () =>
        resolveConverterOptions(circuitJson, {
          ...request,
          reserved_ports: reservedPorts,
        }),
      /reserved_ports must be an array/,
    );
  }
  assert.throws(
    () =>
      resolveConverterOptions(circuitJson, {
        ...request,
        reserved_ports: [{ source: "A7", reason: "must remain unconfigured" }],
      }),
    /AM2434 CLI conversion does not support reserved_ports yet/,
  );
  assert.equal(
    resolveConverterOptions(circuitJson, {
      ...request,
      reserved_ports: [],
    }).options.source_port_id,
    "gpio_output",
  );
});

test("AM2434 TI output must match the requested A7 or B7 GPIO", async (t) => {
  const f = fixture(t);
  for (const ball of ["A7", "B7"]) {
    const circuitJson = am2434Circuit(ball);
    const options = resolveConverterOptions(circuitJson, am2434Request).options;
    const inputPath = join(f.cwd, "am2434.circuit.json");
    const syscfgPath = join(f.cwd, "am2434.syscfg");
    const directory = join(f.cwd, `am2434-${ball}`);
    writeFileSync(inputPath, JSON.stringify(circuitJson));
    writeFileSync(
      join(f.cwd, "am2434.sysconfig.json"),
      JSON.stringify(am2434Request),
    );
    assert.equal(
      await f.run(["generate-sysconfig", inputPath]),
      0,
      f.stderr.join("\n"),
    );
    mkdirSync(directory);
    for (const filename of ["ti_drivers_config.h", "ti_pinmux_config.c"]) {
      copyFileSync(
        new URL(`${ball}/${filename}`, am2434OutputFixture),
        join(directory, filename),
      );
    }
    const check = () =>
      validateAm2434Output({ directory, circuitJson, options, syscfgPath });
    await check();
    const headerPath = join(directory, "ti_drivers_config.h");
    const pinmuxPath = join(directory, "ti_pinmux_config.c");
    const header = readFileSync(headerPath, "utf8");
    const pinmux = readFileSync(pinmuxPath, "utf8");
    for (const [original, changed, error] of [
      [
        `GPIO_CONVERTED_PIN (${ball === "A7" ? 5 : 6})`,
        "GPIO_CONVERTED_PIN (9)",
        /GPIO_CONVERTED_PIN/,
      ],
      [
        "GPIO_CONVERTED_DIR (GPIO_DIRECTION_OUTPUT)",
        "GPIO_CONVERTED_DIR (GPIO_DIRECTION_INPUT)",
        /GPIO_CONVERTED_DIR/,
      ],
    ]) {
      writeFileSync(headerPath, header.replace(original, changed));
      await assert.rejects(check(), error);
    }
    writeFileSync(headerPath, header);
    writeFileSync(pinmuxPath, pinmux.replace("PIN_MODE(7)", "PIN_MODE(6)"));
    await assert.rejects(check(), /pinmux/);
    writeFileSync(
      pinmuxPath,
      pinmux.replace(
        "{PINMUX_END, PINMUX_END}",
        "{ PIN_MCU_SPI1_CS1, ( PIN_MODE(7) ) },\n    {PINMUX_END, PINMUX_END}",
      ),
    );
    await assert.rejects(check(), /pinmux/);
    writeFileSync(pinmuxPath, pinmux);
  }
});

test("check-sysconfig rejects AM2434 TI output for the previous circuit pin", async (t) => {
  const f = fixture(t);
  const inputPath = join(f.cwd, "am2434.circuit.json");
  writeFileSync(inputPath, JSON.stringify(am2434Circuit("A7")));
  writeFileSync(
    join(f.cwd, "am2434.sysconfig.json"),
    JSON.stringify(am2434Request),
  );
  const tiRoot = join(f.cwd, "ti-sdk");
  const tiNode = join(f.cwd, "sysconfig-node");
  const tiCli = join(f.cwd, "cli.js");
  mkdirSync(join(tiRoot, ".metadata"), { recursive: true });
  writeFileSync(
    join(tiRoot, ".metadata", "product.json"),
    JSON.stringify({ name: "MCU_PLUS_SDK", version: "07.03.01" }),
  );
  writeFileSync(tiNode, "");
  writeFileSync(tiCli, "");
  const spawnSync = (command, args, options) => {
    if (command === "bun") return realSpawnSync(command, args, options);
    assert.equal(command, tiNode);
    if (args.includes("--version")) {
      return { status: 0, stdout: "1.14.0+2667\n", stderr: "" };
    }
    const outputDir = args[args.indexOf("--output") + 1];
    mkdirSync(outputDir, { recursive: true });
    for (const filename of ["ti_drivers_config.h", "ti_pinmux_config.c"]) {
      copyFileSync(
        new URL(`A7/${filename}`, am2434OutputFixture),
        join(outputDir, filename),
      );
    }
    writeFileSync(join(outputDir, "ti_drivers_config.c"), "/* TI output */\n");
    return { status: 0, stdout: "", stderr: "" };
  };
  const env = {
    ...process.env,
    TI_SYSCONFIG_NODE: tiNode,
    TI_SYSCONFIG_CLI: tiCli,
    TI_SDK_ROOT: tiRoot,
  };
  assert.equal(
    await f.run(["check-sysconfig", inputPath], { spawnSync, env }),
    0,
    f.stderr.join("\n"),
  );
  writeFileSync(inputPath, JSON.stringify(am2434Circuit("B7")));
  assert.equal(
    await f.run(["check-sysconfig", inputPath], { spawnSync, env }),
    1,
  );
  assert.match(f.stderr.at(-1), /GPIO_CONVERTED_PIN \(6\)/);
});

test("CC2340 TI output must match requested pins, states, rate, and clock", async (t) => {
  const f = fixture(t);
  assert.equal(await f.run(["generate-sysconfig", "board.circuit.json"]), 0);
  const circuitJson = cc2340Circuit();
  const options = resolveConverterOptions(circuitJson, request).options;
  const directory = join(f.cwd, "ti-output");
  mkdirSync(directory);
  for (const filename of ["ti_drivers_config.h", "ti_drivers_config.c"]) {
    copyFileSync(new URL(filename, tiOutputFixture), join(directory, filename));
  }
  const check = () =>
    validateCc2340Output({
      directory,
      circuitJson,
      options,
      syscfgPath: join(f.cwd, "board.syscfg"),
    });
  await check();
  const headerPath = join(directory, "ti_drivers_config.h");
  const driverPath = join(directory, "ti_drivers_config.c");
  const header = readFileSync(headerPath, "utf8");
  const drivers = readFileSync(driverPath, "utf8");
  for (const [text, replacement, reason] of [
    [
      "#define CONFIG_DISPLAY_ISOLATE 20",
      "#define CONFIG_DISPLAY_ISOLATE 21",
      /CONFIG_DISPLAY_ISOLATE/,
    ],
    [
      "#define CONFIG_I2C_0_MAXSPEED   (100U)",
      "#define CONFIG_I2C_0_MAXSPEED   (400U)",
      /100 kbit\/s/,
    ],
  ]) {
    writeFileSync(headerPath, header.replace(text, replacement));
    await assert.rejects(check(), reason);
  }
  writeFileSync(headerPath, header);
  for (const [text, replacement, reason] of [
    [
      "GPIO_CFG_OUT_HIGH, /* CONFIG_DISPLAY_ISOLATE */",
      "GPIO_CFG_OUT_LOW, /* CONFIG_DISPLAY_ISOLATE */",
      /CONFIG_DISPLAY_ISOLATE/,
    ],
    ["PowerLPF3_selectLFOSC();", "PowerLPF3_selectLFXT();", /lf_rcosc/],
    [
      ".sdaPinMux   = GPIO_MUX_PORTCFG_PFUNC4",
      ".sdaPinMux   = GPIO_MUX_PORTCFG_PFUNC2",
      /SDA mux/,
    ],
    [
      "Board_initHook();",
      "Board_initFlash();\n    Board_initHook();",
      /LaunchPad external-flash/,
    ],
  ]) {
    writeFileSync(driverPath, drivers.replace(text, replacement));
    await assert.rejects(check(), reason);
  }
  writeFileSync(driverPath, drivers);
  const circuitWithReserved = [
    ...circuitJson,
    {
      type: "source_port",
      source_port_id: "reserved",
      source_component_id: "mcu",
      name: "DIO11",
      pin_number: 4,
      port_hints: ["DIO11"],
    },
  ];
  const reservedOptions = {
    ...options,
    reserved_ports: [
      { source_port_id: "reserved", reason: "Other peripheral" },
    ],
  };
  await validateCc2340Output({
    directory,
    circuitJson: circuitWithReserved,
    options: reservedOptions,
    syscfgPath: join(f.cwd, "board.syscfg"),
  });
  writeFileSync(
    driverPath,
    drivers.replace(
      "GPIO_CFG_NO_DIR, /* DIO_11 */",
      "GPIO_CFG_OUTPUT_INTERNAL, /* DIO_11 */",
    ),
  );
  await assert.rejects(
    validateCc2340Output({
      directory,
      circuitJson: circuitWithReserved,
      options: reservedOptions,
      syscfgPath: join(f.cwd, "board.syscfg"),
    }),
    /configures reserved DIO11/,
  );
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
      env: { PATH: process.env.PATH },
    }),
    1,
  );
  assert.match(
    f.stderr.join("\n"),
    /Missing TI environment variable\(s\): TI_SYSCONFIG_NODE, TI_SYSCONFIG_CLI, TI_SDK_ROOT/,
  );
});
