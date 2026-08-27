import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

const SN74LVC1G34_PIN_LABELS = {
  pin2: ["A", "INPUT"],
  pin3: ["GND"],
  pin4: ["Y", "OUTPUT"],
  pin5: ["VCC"],
} as const;

/**
 * SN74LVC1G34 datasheet Figure 8-1 "Buffer Function" application.
 * @see https://www.ti.com/lit/gpn/SN74LVC1G34
 */
export const LogicBuffer_SN74LVC1G34 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled {...props}>
    <chip
      name="U1"
      manufacturerPartNumber="SN74LVC1G34DBVR"
      pinLabels={SN74LVC1G34_PIN_LABELS}
      showPinAliases={false}
      schX={0}
      schY={0}
      schWidth={1.8}
      schHeight={1.6}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["A"] },
        rightSide: { direction: "top-to-bottom", pins: ["Y"] },
        topSide: { direction: "left-to-right", pins: ["VCC"] },
        bottomSide: { direction: "left-to-right", pins: ["GND"] },
      }}
      connections={{
        A: "net.MCU_OR_LOGIC_IN",
        Y: "net.MCU_OR_LOGIC_OUT",
        VCC: "net.VCC",
        GND: "net.GND",
      }}
    />
    <schematictext
      text="Buffer Function"
      schX={0}
      schY={1.75}
      fontSize={0.25}
    />
  </subcircuit>
);

export default LogicBuffer_SN74LVC1G34;
