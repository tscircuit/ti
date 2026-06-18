/**
 * Headless verification that the TPS7A02 SPICE simulation runs end-to-end
 * (tscircuit -> circuit json -> SPICE netlist -> ngspice WASM -> waveforms).
 *
 * Run with: bun run scripts/verify-tps7a02-spice.tsx
 */
import { RootCircuit } from "@tscircuit/core"
import { getPlatformConfig } from "@tscircuit/eval"
import SimulationDemo from "../lib/TPS7A02/simulation.circuit"

const circuit = new RootCircuit({ platform: getPlatformConfig() })
circuit.add(<SimulationDemo />)
await circuit.renderUntilSettled()

const circuitJson = circuit.getCircuitJson()

const experiments = circuitJson.filter(
  (e: any) => e.type === "simulation_experiment",
)
const graphs = circuitJson.filter(
  (e: any) => e.type === "simulation_transient_voltage_graph",
) as any[]

console.log(`simulation_experiment elements: ${experiments.length}`)
console.log(`voltage graphs: ${graphs.length}`)

if (graphs.length === 0) {
  console.error("FAIL: simulation produced no voltage graphs")
  const errors = circuitJson.filter((e: any) => e.type.includes("error"))
  for (const err of errors) console.error(JSON.stringify(err, null, 2))
  process.exit(1)
}

for (const graph of graphs) {
  const voltages: number[] = graph.voltage_levels ?? []
  const min = Math.min(...voltages)
  const max = Math.max(...voltages)
  console.log(
    `${graph.name ?? graph.simulation_transient_voltage_graph_id}: ${voltages.length} points, min=${min.toFixed(3)}V max=${max.toFixed(3)}V`,
  )
}

const vout = graphs.find((g) => (g.name ?? "").toUpperCase().includes("VOUT"))
if (vout) {
  const voltages: number[] = vout.voltage_levels ?? []
  const settled = voltages.slice(Math.floor(voltages.length / 4))
  const max = Math.max(...settled)
  if (max > 2.85 && max < 3.1) {
    console.log(`PASS: VOUT regulates near 3.0V (max ${max.toFixed(3)}V)`)
  } else {
    console.error(`FAIL: VOUT max ${max.toFixed(3)}V is not ~3.0V`)
    process.exit(1)
  }
} else {
  console.log("NOTE: could not locate VOUT graph by name; check output above")
}
