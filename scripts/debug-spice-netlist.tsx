/**
 * Debug helper: render the TPS7A02 simulation circuit and print the generated
 * SPICE netlist so simulation issues can be diagnosed.
 *
 * Run with: bun run scripts/debug-spice-netlist.tsx
 */
import { RootCircuit } from "@tscircuit/core"
import { getPlatformConfig } from "@tscircuit/eval"
import { circuitJsonToSpice } from "circuit-json-to-spice"
import SimulationDemo from "../lib/TPS7A02/simulation.circuit"

const circuit = new RootCircuit({ platform: getPlatformConfig() })
circuit.add(<SimulationDemo />)
await circuit.renderUntilSettled()

const circuitJson = circuit.getCircuitJson()
const netlist = circuitJsonToSpice(circuitJson as any)
console.log("=== GENERATED SPICE NETLIST ===")
console.log(netlist.toSpiceString())

console.log("\n=== SIMULATION-RELATED CIRCUIT JSON ===")
for (const elm of circuitJson as any[]) {
  if (elm.type?.startsWith("simulation") || elm.type?.includes("error")) {
    console.log(JSON.stringify(elm))
  }
}
