/// <reference types="node" />

import assert from "node:assert/strict";
import { test } from "node:test";
import { Circuit } from "@tscircuit/core";
import { BatteryCharging_2to5CellNVDCBuckBoost_BQ25731 } from "../lib/subcircuits/BatteryCharging_2to5CellNVDCBuckBoost_BQ25731.circuit.tsx";
import { BatteryManagement_2to4Cell_BQ40Z60 } from "../lib/subcircuits/BatteryManagement_2to4Cell_BQ40Z60.circuit.tsx";
import { BoostConverter_TPS61236 } from "../lib/subcircuits/BoostConverter_TPS61236.circuit.tsx";
import { Microcontroller_MSP430G2332 } from "../lib/subcircuits/Microcontroller_MSP430G2332.circuit.tsx";
import { USBC_PowerDeliveryProgrammablePowerSupply_TPS61288 } from "../lib/subcircuits/USBC_PowerDeliveryProgrammablePowerSupply_TPS61288.circuit.tsx";

const powerBankSubcircuits = [
  ["BatteryManagement_2to4Cell_BQ40Z60", BatteryManagement_2to4Cell_BQ40Z60],
  [
    "BatteryCharging_2to5CellNVDCBuckBoost_BQ25731",
    BatteryCharging_2to5CellNVDCBuckBoost_BQ25731,
  ],
  ["BoostConverter_TPS61236", BoostConverter_TPS61236],
  ["Microcontroller_MSP430G2332", Microcontroller_MSP430G2332],
  [
    "USBC_PowerDeliveryProgrammablePowerSupply_TPS61288",
    USBC_PowerDeliveryProgrammablePowerSupply_TPS61288,
  ],
] as const;

for (const [name, Subcircuit] of powerBankSubcircuits) {
  test(`${name} gives every component a local footprint`, async () => {
    const circuit = new Circuit({
      platform: {
        routingDisabled: true,
        partsEngineDisabled: true,
        drcChecksDisabled: true,
      },
    });
    circuit.add(<Subcircuit name="DUT" />);
    await circuit.renderUntilSettled();

    assert.deepEqual(
      circuit
        .getCircuitJson()
        .filter((element) => element.type.endsWith("_error")),
      [],
    );

    const componentsWithoutPads = circuit.db.source_component
      .list()
      .filter((sourceComponent) => {
        const pcbComponent = circuit.db.pcb_component.getWhere({
          source_component_id: sourceComponent.source_component_id,
        });
        if (!pcbComponent) return true;

        return (
          circuit.db.pcb_smtpad.list({
            pcb_component_id: pcbComponent.pcb_component_id,
          }).length +
            circuit.db.pcb_plated_hole.list({
              pcb_component_id: pcbComponent.pcb_component_id,
            }).length ===
          0
        );
      })
      .map(({ name }) => name);

    assert.deepEqual(componentsWithoutPads, []);
  });
}
