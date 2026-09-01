import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TPS62086RLTR } from "../chips/TPS62086RLTR.circuit.tsx";
import { XFL4015_471MEC_FOOTPRINT } from "../chips/jlcpcb-footprints.tsx";

/**
 * TIDA-00399 sheet-5 3.3 V TPS62086 buck stage.
 *
 * This intentionally stops at the 3p3V_AON rail, before the downstream
 * TPS22922 load switch on the reference sheet.
 * @see https://www.ti.com/tool/TIDA-00399
 */
export const BuckConverter_TPS62086_TIDA00399 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled {...props} schTraceAutoLabelEnabled={false}>
    <TPS62086RLTR name="U3P3" schX={0} schY={0} pcbX={0} pcbY={0} />

    <capacitor
      name="C1_3P3"
      capacitance="10uF"
      footprint="0805"
      maxDecouplingTraceLength="12mm"
      schX={-2}
      schY={1}
      schOrientation="vertical"
      pcbX={-3.5}
      pcbY={0}
      pcbRotation={90}
    />
    <inductor
      name="L3P3"
      manufacturerPartNumber="XFL4015-471MEC"
      supplierPartNumbers={{ jlcpcb: ["C18221164"] }}
      footprint={XFL4015_471MEC_FOOTPRINT}
      inductance="470nH"
      schX={2.35}
      schY={0.5}
      pcbX={4}
      pcbY={0}
      pcbRotation={180}
    />
    <resistor
      name="R3_3P3"
      resistance="100kohm"
      footprint="0402"
      schX={3.5}
      schY={-0.05}
      schRotation={270}
      pcbX={-3.5}
      pcbY={-3}
      pcbRotation={90}
    />
    <capacitor
      name="C2_3P3"
      capacitance="22uF"
      footprint="0805"
      schX={4.85}
      schY={-0.2}
      schOrientation="vertical"
      pcbX={8}
      pcbY={0}
    />
    <resistor
      name="R3P3_BYP"
      resistance="0ohm"
      footprint="0402"
      doNotPlace
      schX={0.3}
      schY={1.55}
      pcbX={-3.5}
      pcbY={3}
    />

    {/* Input rail and local input bypass. */}
    <trace from="U3P3.VIN" to="C1_3P3.pin1" />
    <trace from="C1_3P3.pin1" to="R3P3_BYP.pin1" />
    <trace
      name="VIN_DC_DC_U3P3_VIN"
      from="U3P3.VIN"
      to="net.VIN_DC_DC"
      schDisplayLabel="VIN_DC_DC"
    />
    <trace
      name="EN_3P3_U3P3_EN"
      from="U3P3.EN"
      to="net.EN_3P3"
      schDisplayLabel="EN_3P3"
    />

    {/* Buck switch node, feedback, output capacitor, and bypass option. */}
    <trace from="U3P3.SW" to="L3P3.pin1" />
    <trace from="L3P3.pin2" to="U3P3.VOS" />
    <trace from="U3P3.VOS" to="U3P3.FB" />
    <trace from="L3P3.pin2" to="R3_3P3.pin1" />
    <trace from="L3P3.pin2" to="C2_3P3.pin1" schDisplayLabel="V3P3_AON" />
    <trace from="R3P3_BYP.pin2" to="L3P3.pin2" />
    <trace
      name="V3P3_AON_R3P3_BYP_pin2"
      from="R3P3_BYP.pin2"
      to="net.V3P3_AON"
      schDisplayLabel="V3P3_AON"
    />

    {/* Power-good pull-up and exported status rail. */}
    <trace
      from="U3P3.PG"
      to="R3_3P3.pin2"
      pcbRouteHints={[
        { x: -1.5, y: 0.25 },
        { x: -2.4, y: -0.8 },
      ]}
    />
    <trace
      name="V3P3_PG_R3_3P3_pin2"
      from="R3_3P3.pin2"
      to="net.V3P3_PG"
      schDisplayLabel="V3P3_PG"
    />

    {/* Keep ground returns local, as on the TI reference sheet. */}
    <trace
      name="GND_C1_3P3_pin2"
      from="C1_3P3.pin2"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="GND_U3P3_GND"
      from="U3P3.GND"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="GND_C2_3P3_pin2"
      from="C2_3P3.pin2"
      to="net.GND"
      schDisplayLabel="GND"
    />
  </subcircuit>
);

export default BuckConverter_TPS62086_TIDA00399;
