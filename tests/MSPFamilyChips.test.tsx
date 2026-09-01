import assert from "node:assert/strict";
import { test } from "node:test";
import { Circuit } from "@tscircuit/core";
import {
  MSPM0C1104SDGS20R,
  MSPM0C1104SDGS20R_PIN_LABELS,
  MSPM0C1104SDSGR,
  MSPM0C1104SDSGR_PIN_LABELS,
  MSPM33C3219SPZR,
  MSPM33C321ASPZR,
  MSPM33C321XSPZR_PIN_LABELS,
} from "../index.ts";

test("MSPM33C321x PZ pin map matches the TI package diagram", () => {
  assert.equal(Object.keys(MSPM33C321XSPZR_PIN_LABELS).length, 100);
  assert.equal(MSPM33C321XSPZR_PIN_LABELS.pin6, "NRST");
  assert.deepEqual(MSPM33C321XSPZR_PIN_LABELS.pin8, ["VDD1", "VDD"]);
  assert.equal(MSPM33C321XSPZR_PIN_LABELS.pin28, "TDO");
  assert.equal(MSPM33C321XSPZR_PIN_LABELS.pin71, "SWDIO");
  assert.equal(MSPM33C321XSPZR_PIN_LABELS.pin72, "SWCLK");
  assert.equal(MSPM33C321XSPZR_PIN_LABELS.pin77, "TDI");
  assert.equal(MSPM33C321XSPZR_PIN_LABELS.pin100, "VCORE");
});

test("MSPM0C1104 DGS and DSG pin maps match the TI package table", () => {
  assert.equal(Object.keys(MSPM0C1104SDGS20R_PIN_LABELS).length, 20);
  assert.deepEqual(MSPM0C1104SDGS20R_PIN_LABELS.pin5, ["PA1", "NRST"]);
  assert.equal(MSPM0C1104SDGS20R_PIN_LABELS.pin6, "VDD");
  assert.equal(MSPM0C1104SDGS20R_PIN_LABELS.pin7, "VSS");
  assert.deepEqual(MSPM0C1104SDGS20R_PIN_LABELS.pin15, ["PA19", "SWDIO"]);
  assert.deepEqual(MSPM0C1104SDGS20R_PIN_LABELS.pin16, ["PA20", "A6", "SWCLK"]);

  assert.equal(Object.keys(MSPM0C1104SDSGR_PIN_LABELS).length, 9);
  assert.deepEqual(MSPM0C1104SDSGR_PIN_LABELS.pin1, ["PA27", "A0"]);
  assert.deepEqual(MSPM0C1104SDSGR_PIN_LABELS.pin2, ["PA1", "NRST"]);
  assert.deepEqual(MSPM0C1104SDSGR_PIN_LABELS.pin6, ["PA19", "SWDIO"]);
  assert.deepEqual(MSPM0C1104SDSGR_PIN_LABELS.pin7, ["PA20", "A6", "SWCLK"]);
  assert.ok(MSPM0C1104SDSGR_PIN_LABELS.pin9.includes("THERMAL_PAD"));
});

const chips = [
  ["MSPM33C321ASPZR", MSPM33C321ASPZR, 100, undefined],
  ["MSPM33C3219SPZR", MSPM33C3219SPZR, 100, undefined],
  ["MSPM0C1104SDGS20R", MSPM0C1104SDGS20R, 20, "C41936040"],
  ["MSPM0C1104SDSGR", MSPM0C1104SDSGR, 9, "C35105978"],
] as const;

for (const [partNumber, Chip, expectedPadCount, jlcpcbPartNumber] of chips) {
  test(`${partNumber} renders its package footprint`, async () => {
    const circuit = new Circuit({
      platform: {
        routingDisabled: true,
        partsEngineDisabled: true,
        drcChecksDisabled: true,
      },
    });
    circuit.add(
      <board width={25} height={25} routingDisabled>
        <Chip name="U1" />
      </board>,
    );
    await circuit.renderUntilSettled();

    assert.deepEqual(
      circuit
        .getCircuitJson()
        .filter((element) => element.type.endsWith("_error")),
      [],
    );
    assert.equal(circuit.db.pcb_smtpad.list().length, expectedPadCount);

    const sourceComponent = circuit.db.source_component.getWhere({
      name: "U1",
    });
    assert.ok(sourceComponent);
    assert.equal(sourceComponent.manufacturer_part_number, partNumber);
    if (jlcpcbPartNumber) {
      assert.deepEqual(sourceComponent.supplier_part_numbers, {
        jlcpcb: [jlcpcbPartNumber],
      });
    }
  });
}
