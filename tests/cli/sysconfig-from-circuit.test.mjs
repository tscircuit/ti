import assert from "node:assert/strict";
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { runCli } from "../../cli/main.mjs";

function circuit() {
  return [
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
    {
      type: "source_port",
      source_port_id: "input",
      source_component_id: "mcu",
      name: "INTERRUPT",
      pin_number: 5,
      is_input: true,
      is_using_internal_pullup: true,
    },
  ];
}

function fixture(t) {
  const cwd = mkdtempSync(join(tmpdir(), "ti-source-pins-"));
  t.after(() => rmSync(cwd, { recursive: true, force: true }));
  symlinkSync(
    new URL("../../node_modules/", import.meta.url),
    join(cwd, "node_modules"),
    "junction",
  );
  writeFileSync(join(cwd, "package.json"), '{"private":true,"type":"module"}');
  writeFileSync(join(cwd, "board.circuit.json"), JSON.stringify(circuit()));
  const stdout = [],
    stderr = [];
  return {
    cwd,
    stdout,
    stderr,
    run: (args) =>
      runCli(args, {
        cwd,
        stdout: (line) => stdout.push(line),
        stderr: (line) => stderr.push(line),
      }),
  };
}

test("existing pin attributes generate SysConfig and ignore implicit request files", async (t) => {
  const f = fixture(t);
  writeFileSync(join(f.cwd, "board.sysconfig.json"), "invalid old request");
  writeFileSync(
    join(f.cwd, "ti.sysconfig.json"),
    "another invalid old request",
  );
  assert.equal(
    await f.run(["generate-sysconfig", "board.circuit.json"]),
    0,
    f.stderr.join("\n"),
  );
  assert.match(f.stdout.join("\n"), /Pin configuration: Circuit JSON/);
  const source = readFileSync(join(f.cwd, "board.syscfg"), "utf8");
  assert.match(source, /GPIO1\.gpioPin\.\$assign = "DIO11"/);
  assert.match(source, /GPIO2\.mode = "Input"/);
  assert.match(source, /GPIO2\.pull = "Pull Up"/);
  assert.doesNotMatch(source, /--rtos|initialOutputState|interruptTrigger/);
  assert.equal(
    readFileSync(join(f.cwd, "board.sysconfig.json"), "utf8"),
    "invalid old request",
  );
});

test("connected pins with missing roles fail without a request-file suggestion", async (t) => {
  const f = fixture(t);
  const incomplete = circuit();
  delete incomplete[1].is_output;
  incomplete.push({
    type: "source_trace",
    source_trace_id: "trace",
    connected_source_port_ids: ["output"],
    connected_source_net_ids: [],
  });
  writeFileSync(join(f.cwd, "board.circuit.json"), JSON.stringify(incomplete));
  assert.equal(await f.run(["generate-sysconfig", "board.circuit.json"]), 1);
  assert.match(f.stderr.join("\n"), /U1.*CC2340R52E0RGER/);
  assert.match(f.stderr.join("\n"), /pin 4[\s\S]*pinAttributes/);
  assert.doesNotMatch(
    f.stderr.join("\n"),
    /request file is missing|source_component_id|source_port_id|\bat \S+|throw new Error|convert\.mjs:\d/,
  );
  assert.doesNotMatch(f.stderr.join("\n"), /\(mcu,|\(output,/);
  assert.match(f.stderr.join("\n"), /isInput: true or isOutput: true/);
  assert.equal(existsSync(join(f.cwd, "board.syscfg")), false);
});

test("a missing connected pin record fails instead of writing partial SysConfig", async (t) => {
  const f = fixture(t);
  const incomplete = circuit().filter(
    (element) => element.source_port_id !== "input",
  );
  incomplete.push({
    type: "source_trace",
    source_trace_id: "input_trace",
    connected_source_port_ids: ["input"],
    connected_source_net_ids: [],
  });
  writeFileSync(join(f.cwd, "board.circuit.json"), JSON.stringify(incomplete));
  assert.equal(await f.run(["generate-sysconfig", "board.circuit.json"]), 1);
  assert.match(f.stderr.join("\n"), /1 connection\(s\) reference missing pins/);
  assert.match(f.stderr.join("\n"), /Rebuild the circuit/);
  assert.equal(existsSync(join(f.cwd, "board.syscfg")), false);
});

test("an MCU without pin records reports the component and required attributes", async (t) => {
  const f = fixture(t);
  writeFileSync(
    join(f.cwd, "board.circuit.json"),
    JSON.stringify([circuit()[0]]),
  );
  assert.equal(await f.run(["generate-sysconfig", "board.circuit.json"]), 1);
  assert.match(f.stderr.join("\n"), /U1.*CC2340R52E0RGER.*no MCU pin records/);
  assert.match(f.stderr.join("\n"), /pinAttributes/);
  assert.equal(existsSync(join(f.cwd, "board.syscfg")), false);
});

test("multiple MCUs require a component selection", async (t) => {
  const f = fixture(t);
  const multiple = circuit();
  multiple.push({ ...multiple[0], source_component_id: "second", name: "U2" });
  writeFileSync(join(f.cwd, "board.circuit.json"), JSON.stringify(multiple));
  assert.equal(await f.run(["generate-sysconfig", "board.circuit.json"]), 1);
  assert.match(f.stderr.join("\n"), /found 2/);
  assert.equal(
    await f.run([
      "generate-sysconfig",
      "board.circuit.json",
      "--component",
      "U1",
    ]),
    0,
    f.stderr.join("\n"),
  );
  assert.equal(
    await f.run([
      "generate-sysconfig",
      "board.circuit.json",
      "--component",
      "U1",
      "--config",
      "request.json",
    ]),
    1,
  );
  assert.match(f.stderr.at(-1), /not both/);
});

test("TSX pinAttributes export selected GPIO roles without a request file", async (t) => {
  const f = fixture(t);
  writeFileSync(
    join(f.cwd, "board.circuit.tsx"),
    `export default () => (
    <board width="10mm" height="10mm">
      <chip name="U1" manufacturerPartNumber="CC2340R52E0RGER"
        pinLabels={{ pin4: "DIO11", pin5: "DIO12" }}
        pinAttributes={{
          pin4: { isOutput: true, isBidirectional: true },
          pin5: { isInput: true, isUsingInternalPullup: true, isBidirectional: true },
        }} />
    </board>
  );`,
  );
  assert.equal(
    await f.run(["generate-sysconfig", "board.circuit.tsx"]),
    0,
    f.stderr.join("\n"),
  );
  const source = readFileSync(join(f.cwd, "board.syscfg"), "utf8");
  assert.match(source, /GPIO1\.gpioPin\.\$assign = "DIO11"/);
  assert.match(source, /GPIO2\.pull = "Pull Up"/);
  const exported = JSON.parse(
    readFileSync(join(f.cwd, "dist/board/circuit.json"), "utf8"),
  );
  assert.ok(
    exported
      .filter((port) => port.type === "source_port")
      .every((port) => port.is_bidirectional === true),
  );
  assert.equal(
    exported.find(
      (port) => port.type === "source_port" && port.pin_number === 4,
    ).is_output,
    true,
  );
  assert.equal(
    exported.find(
      (port) => port.type === "source_port" && port.pin_number === 5,
    ).is_input,
    true,
  );
});

test("a TSX pin failure prints actionable labels without the converter stack", async (t) => {
  const f = fixture(t);
  writeFileSync(
    join(f.cwd, "board.circuit.tsx"),
    `export default () => (
    <board width="10mm" height="10mm">
      <chip name="U1" manufacturerPartNumber="CC2340R52E0RGER"
        pinLabels={{ pin4: "DIO11", pin6: "DIO13" }}
        pinAttributes={{ pin4: { isGpio: true }, pin6: { isGpio: true } }} />
      <net name="PMIC_LP" /><net name="CHARGER_INT" />
      <trace from=".U1 > .DIO11" to="net.PMIC_LP" />
      <trace from=".U1 > .DIO13" to="net.CHARGER_INT" />
    </board>
  );`,
  );
  assert.equal(await f.run(["generate-sysconfig", "board.circuit.tsx"]), 1);
  const message = f.stderr.join("\n");
  assert.match(message, /U1 \(CC2340R52E0RGER\)/);
  assert.match(message, /U1 pin 4 \(DIO11\)/);
  assert.match(message, /U1 pin 6 \(DIO13\)/);
  assert.match(
    message,
    /Set exactly one of isInput: true or isOutput: true in U1's TSX pinAttributes/,
  );
  assert.doesNotMatch(
    message,
    /source_component_\d|source_port_\d|\bat \S+|throw new Error/,
  );
  assert.equal(existsSync(join(f.cwd, "board.syscfg")), false);
});
