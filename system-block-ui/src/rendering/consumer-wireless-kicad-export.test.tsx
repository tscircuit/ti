import { expect, test } from "bun:test";
import { Circuit } from "@tscircuit/core";
import { strFromU8, unzipSync } from "fflate";
import ConsumerWirelessModule from "../../../examples/ConsumerWirelessModule.circuit.tsx";
import { createKicadProjectZipBlob } from "./export-kicad-project";

test("Consumer Wireless Module KiCad export preserves every available pad", async () => {
  const circuit = new Circuit({
    platform: {
      routingDisabled: true,
      partsEngineDisabled: true,
      drcChecksDisabled: true,
    },
  });
  circuit.add(<ConsumerWirelessModule />);
  await circuit.renderUntilSettled();

  const blob = await createKicadProjectZipBlob(circuit.getCircuitJson(), {
    projectName: "consumer-wireless-module",
  });
  const archive = unzipSync(new Uint8Array(await blob.arrayBuffer()));
  const pcb = strFromU8(
    archive["consumer-wireless-module.kicad_pcb"] ?? new Uint8Array(),
  );

  expect(pcb.match(/\(footprint\b/g)).toHaveLength(36);
  expect(pcb.match(/\(pad\b/g)).toHaveLength(108);
});
