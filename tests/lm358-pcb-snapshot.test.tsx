import { expect, test } from "bun:test"
import "bun-match-svg"
import {
  convertCircuitJsonToPcbSvg,
} from "circuit-to-svg"
import { RootCircuit } from "tscircuit"

import { createTiPlatformConfig } from "@tscircuit/ti-parts-engine"

import { LM358 } from "../index"
import { getTestServer } from "./fixtures/get-test-server"

test("LM358 renders stable PCB and schematic snapshots", async () => {
  const { fakeUlProxyUrl, capturedRequests } = await getTestServer()

  const circuit = new RootCircuit({
    platform: createTiPlatformConfig({
      partnerToken: "secret-token",
      baseUrl: fakeUlProxyUrl,
    }),
  })

  circuit.add(
    <board width="20mm" height="20mm">
      <LM358 name="U1" pcbX={0} pcbY={0} />
    </board>,
  )

  await circuit.renderUntilSettled()

  const circuitJson = circuit.getCircuitJson()
  const pcbSvg = convertCircuitJsonToPcbSvg(circuitJson)

  expect(pcbSvg).toContain("<svg")
  expect(pcbSvg).toContain("pcb_plated_hole")
  expect(capturedRequests.some((r) => r.pathname === "/v1/export/kicad")).toBe(
    true,
  )

  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "lm358-pcb")
})
