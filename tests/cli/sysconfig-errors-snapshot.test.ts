import { expect, test } from "bun:test";
import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdtempSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import type { CircuitJson } from "circuit-json";

function generateSysconfig({
  inputName,
  source,
}: {
  inputName: string;
  source: string;
}) {
  const cwd = mkdtempSync(join(tmpdir(), "ti-sysconfig-snapshot-"));
  try {
    symlinkSync(
      new URL("../../node_modules/", import.meta.url),
      join(cwd, "node_modules"),
      "junction",
    );
    writeFileSync(
      join(cwd, "package.json"),
      '{"private":true,"type":"module"}',
    );
    writeFileSync(join(cwd, inputName), source);
    const result = spawnSync(
      "node",
      [
        fileURLToPath(new URL("../../cli/ti.mjs", import.meta.url)),
        "generate-sysconfig",
        inputName,
      ],
      { cwd, encoding: "utf8" },
    );
    if (result.error) throw result.error;
    return {
      status: result.status,
      stdout: result.stdout,
      stderr: result.stderr,
      sysconfigWritten: existsSync(join(cwd, "board.syscfg")),
    };
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
}

test("Circuit JSON error output names unresolved pins without IDs or a stack", () => {
  const circuitJson: CircuitJson = [
    {
      type: "source_component",
      ftype: "simple_chip",
      source_component_id: "source_component_123",
      name: "U1",
      manufacturer_part_number: "CC2340R52E0RGER",
    },
    {
      type: "source_port",
      source_component_id: "source_component_123",
      source_port_id: "source_port_456",
      name: "DIO11",
      pin_number: 4,
      is_gpio: true,
    },
    {
      type: "source_port",
      source_component_id: "source_component_123",
      source_port_id: "source_port_789",
      name: "DIO13",
      pin_number: 6,
      is_gpio: true,
    },
    {
      type: "source_trace",
      source_trace_id: "source_trace_321",
      connected_source_port_ids: ["source_port_456", "source_port_789"],
      connected_source_net_ids: [],
    },
  ];
  const { stderr, ...result } = generateSysconfig({
    inputName: "board.circuit.json",
    source: JSON.stringify(circuitJson),
  });
  expect(result).toEqual({ status: 1, stdout: "", sysconfigWritten: false });
  expect(stderr).toMatchInlineSnapshot(`
    "Failed to generate SysConfig: SysConfig conversion failed:
    Unresolved CC2340 pin configuration for U1 (CC2340R52E0RGER):
    - U1 pin 4 (DIO11): no GPIO direction or supported peripheral selected
    - U1 pin 6 (DIO13): no GPIO direction or supported peripheral selected
    Update U1's TSX pinAttributes with the intended function for each listed pin: set exactly one of isInput: true or isOutput: true for GPIO, or activeCapability: "i2c_sda" / "i2c_scl" for I2C.
    Datasheet capabilities such as isGpio describe what a pin supports; they do not select how this board uses it.
    "
  `);
});

test("TSX error output explains board choices without a request file or stack", () => {
  const { stderr, ...result } = generateSysconfig({
    inputName: "board.circuit.tsx",
    source: `export default () => (
        <board width="10mm" height="10mm">
          <chip name="U1" manufacturerPartNumber="CC2340R52E0RGER"
            pinLabels={{ pin4: "DIO11", pin6: "DIO13" }}
            pinAttributes={{
              pin4: { isGpio: true },
              pin6: { isGpio: true },
            }} />
          <net name="PMIC_LP" /><net name="CHARGER_INT" />
          <trace from=".U1 > .DIO11" to="net.PMIC_LP" />
          <trace from=".U1 > .DIO13" to="net.CHARGER_INT" />
        </board>
      );`,
  });
  expect(result).toEqual({ status: 1, stdout: "", sysconfigWritten: false });
  expect(stderr).toMatchInlineSnapshot(`
    "Failed to generate SysConfig: SysConfig conversion failed:
    Unresolved CC2340 pin configuration for U1 (CC2340R52E0RGER):
    - U1 pin 4 (DIO11): no GPIO direction or supported peripheral selected
    - U1 pin 6 (DIO13): no GPIO direction or supported peripheral selected
    Update U1's TSX pinAttributes with the intended function for each listed pin: set exactly one of isInput: true or isOutput: true for GPIO, or activeCapability: "i2c_sda" / "i2c_scl" for I2C.
    Datasheet capabilities such as isGpio describe what a pin supports; they do not select how this board uses it.
    "
  `);
});
