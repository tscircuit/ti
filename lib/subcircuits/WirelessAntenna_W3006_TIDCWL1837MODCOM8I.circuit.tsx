import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { W3006 } from "../chips/W3006.circuit.tsx";
import { U_FL_R_SMT_1_10_FOOTPRINT } from "../chips/jlcpcb-footprints.tsx";

/**
 * ANT1 branch from TI TIDC-WL1837MODCOM8I sheet 2.
 *
 * C5 is intentionally a zero-ohm resistor despite its C reference designator,
 * matching TI's schematic and BOM. C7/L2 are the published no-use options.
 * @see https://www.ti.com/tool/TIDC-WL1837MODCOM8I
 */
export const WirelessAntenna_W3006_TIDCWL1837MODCOM8I = (
  props: SubcircuitProps,
) => (
  <subcircuit routingDisabled schMaxTraceDistance={2.6} {...props}>
    <net name="GND" isGroundNet />
    <resistor
      name="C5"
      resistance="0ohm"
      footprint="0402"
      schX={-3.25}
      schY={-0.2}
      connections={{ pin1: "net.RF_ANT1" }}
      pcbX={-4.5}
      pcbY={0}
    />
    <capacitor
      name="C13"
      capacitance="1pF"
      footprint="0402"
      schX={0}
      schY={-0.2}
      pcbX={-2}
      pcbY={0}
    />

    <inductor
      name="L2"
      inductance="1nH"
      footprint="0402"
      doNotPlace
      schX={-0.6}
      schY={-0.95}
      schRotation={90}
      pcbX={-2}
      pcbY={-2.2}
    />
    <schematictext text="NU" schX={-1.65} schY={-0.95} fontSize={0.18} />
    <inductor
      name="L1"
      manufacturerPartNumber="LQP15MN1N3B02"
      inductance="1.3nH"
      footprint="0402"
      schX={1}
      schY={-0.95}
      schRotation={90}
      pcbX={0}
      pcbY={-2.2}
    />

    <resistor
      name="C7"
      resistance="0ohm"
      footprint="0402"
      doNotPlace
      schX={-3.75}
      schY={-0.75}
      schRotation={90}
      pcbX={-7}
      pcbY={0}
    />
    <schematictext text="NU" schX={-4.5} schY={-0.85} fontSize={0.18} />
    <connector
      name="J5"
      pinCount={3}
      manufacturerPartNumber="U.FL-R-SMT-1(10)"
      supplierPartNumbers={{ jlcpcb: ["C88373"] }}
      footprint={U_FL_R_SMT_1_10_FOOTPRINT}
      schX={-2.65}
      schY={-2.3}
      schWidth={0.8}
      schHeight={0.75}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin2", "pin1", "pin3"],
        },
      }}
      pcbX={-10.3}
      pcbY={0}
    />

    <W3006 name="ANT1" schX={2.6} schY={-0.2} pcbX={5.1} pcbY={0} />

    <trace
      from=".C5 > .pin2"
      to=".C13 > .pin1"
      schematicRouteHints={[
        { x: -2, y: -0.2 },
        { x: -0.5, y: -0.2 },
      ]}
    />
    <trace from=".C5 > .pin1" to=".C7 > .pin2" />
    <trace
      from=".C5 > .pin2"
      to=".L2 > .pin2"
      schematicRouteHints={[{ x: -0.6, y: -0.2 }]}
    />
    <trace from=".C13 > .pin2" to=".ANT1 > .FEED" />
    <trace
      from=".C13 > .pin2"
      to=".L1 > .pin2"
      schematicRouteHints={[{ x: 1, y: 0 }]}
    />
    <trace
      from=".C7 > .pin1"
      to=".J5 > .pin1"
      schematicRouteHints={[{ x: -3.75, y: -2.3 }]}
    />
    <trace
      name="GND_L2_pin1"
      from="L2.pin1"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="GND_L1_pin1"
      from="L1.pin1"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      from=".J5 > .pin2"
      to=".J5 > .pin3"
      schematicRouteHints={[
        { x: -3.45, y: -2.05 },
        { x: -3.45, y: -2.55 },
      ]}
    />
    <trace
      name="GND_J5_pin3"
      from="J5.pin3"
      to="net.GND"
      schDisplayLabel="GND"
    />

    <schematictext
      text="ANT1 - WL_2.4_IO2 / BT / WL_5GHz"
      schX={0}
      schY={1.7}
      fontSize={0.24}
    />
  </subcircuit>
);

export default WirelessAntenna_W3006_TIDCWL1837MODCOM8I;
