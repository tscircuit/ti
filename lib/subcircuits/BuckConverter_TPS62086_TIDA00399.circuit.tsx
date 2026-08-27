import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

const TPS62086_PIN_LABELS = {
  pin1: ["EN"],
  pin2: ["PG"],
  pin3: ["FB"],
  pin4: ["VOS"],
  pin5: ["GND"],
  pin6: ["SW"],
  pin7: ["VIN"],
} as const;

/**
 * TIDA-00399 sheet-5 3.3 V TPS62086 buck stage.
 *
 * This intentionally stops at the 3p3V_AON rail, before the downstream
 * TPS22922 load switch on the reference sheet.
 * @see https://www.ti.com/tool/TIDA-00399
 */
export const BuckConverter_TPS62086_TIDA00399 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled {...props}>
    <chip
      name="U3P3"
      manufacturerPartNumber="TPS62086RLTR"
      pinLabels={TPS62086_PIN_LABELS}
      showPinAliases={false}
      schX={0}
      schY={0}
      schWidth={1.8}
      schHeight={1.4}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["VIN", "EN"] },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SW", "VOS", "FB", "PG", "GND"],
        },
      }}
      connections={{
        VIN: "net.VIN_DC_DC",
        EN: "net.EN_3P3",
        SW: "L3P3.pin1",
        VOS: "net.V3P3_AON",
        FB: "net.V3P3_AON",
        PG: "net.V3P3_PG",
        GND: "net.GND",
      }}
    />

    <capacitor
      name="C1_3P3"
      capacitance="10uF"
      schX={-3}
      schY={-0.2}
      schOrientation="vertical"
      connections={{ pin1: "net.VIN_DC_DC", pin2: "net.GND" }}
    />
    <inductor
      name="L3P3"
      manufacturerPartNumber="XFL4015-471MEC"
      inductance="470nH"
      schX={2.5}
      schY={0.5}
      connections={{ pin2: "net.V3P3_AON" }}
    />
    <resistor
      name="R3_3P3"
      resistance="100kohm"
      schX={4.1}
      schY={-0.35}
      schRotation={90}
      connections={{ pin1: "net.V3P3_AON", pin2: "net.V3P3_PG" }}
    />
    <capacitor
      name="C2_3P3"
      capacitance="22uF"
      schX={5.4}
      schY={-0.2}
      schOrientation="vertical"
      connections={{ pin1: "net.V3P3_AON", pin2: "net.GND" }}
    />
    <resistor
      name="R3P3_BYP"
      resistance="0ohm"
      doNotPlace
      schX={1.2}
      schY={2.6}
      connections={{ pin1: "net.VIN_DC_DC", pin2: "net.V3P3_AON" }}
    />
    <schematictext text="DNP" schX={1.2} schY={3.1} fontSize={0.18} />
  </subcircuit>
);

export default BuckConverter_TPS62086_TIDA00399;
