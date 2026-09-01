import { expect, test } from "bun:test";
import { Circuit } from "@tscircuit/core";
import "bun-match-svg";
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg";
import {
  MSPM0C1104SDGS20R,
  MSPM0C1104SDSGR,
  MSPM0G5117SPMR,
  MSPM33C3219SPZR,
  MSPM33C321ASPZR,
} from "../index.ts";

const chips = [
  ["MSPM33C321ASPZR", MSPM33C321ASPZR],
  ["MSPM33C3219SPZR", MSPM33C3219SPZR],
  ["MSPM0C1104SDGS20R", MSPM0C1104SDGS20R],
  ["MSPM0C1104SDSGR", MSPM0C1104SDSGR],
  ["MSPM0G5117SPMR", MSPM0G5117SPMR],
] as const;

for (const [partNumber, Chip] of chips) {
  test(`${partNumber} PCB footprint`, async () => {
    const circuit = new Circuit({
      platform: {
        routingDisabled: true,
        partsEngineDisabled: true,
        drcChecksDisabled: true,
      },
    });

    circuit.add(
      <board width={25} height={25} routingDisabled>
        <Chip name="U1" pcbX={0} pcbY={0} />
      </board>,
    );
    await circuit.renderUntilSettled();

    const svg = convertCircuitJsonToPcbSvg(circuit.getCircuitJson());
    await expect(svg).toMatchSvgSnapshot(import.meta.path, partNumber);
  });
}
