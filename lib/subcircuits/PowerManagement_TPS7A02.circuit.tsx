import { TPS7A0230PDBVR } from "../chips/TPS7A0230PDBVR";
import type { SubcircuitProps } from "@tscircuit/props";

export const PowerManagement_TPS7A02 = (props: SubcircuitProps) => (
  <subcircuit>
    <TPS7A0230PDBVR
      name="U1"
      schX={0}
      schY={0}
      schWidth={1.5}
      schHeight={1.5}
      schPinArrangement={{
        leftSide: {
          direction: "right-to-left",
          pins: ["EN", "IN"],
        },
        rightSide: {
          direction: "left-to-right",
          pins: ["OUT", "GND"],
        },
      }}
      schPinStyle={{
        IN: { marginBottom: 0.45 },
        OUT: { marginBottom: 0.45 },
      }}
    />

    <battery
      name="VBAT"
      footprint={"kicad:Battery/BatteryHolder_TruPower_BH-331P_3xAA"}
      schX={-3}
      schY={-1}
      schRotation="270deg"
    />

    <capacitor
      name="C1"
      schX={-1.3}
      schY={-1.6}
      footprint={"0402"}
      capacitance="1uF"
      schOrientation="vertical"
    />

    <capacitor
      name="C2"
      schX={2}
      schY={-1}
      footprint={"0402"}
      capacitance="1uF"
      schOrientation="vertical"
    />
    <chip
      name="Load"
      schX={3.2}
      schY={-1}
      footprint={"pinrow2"}
      schHeight={1}
      schWidth={1}
      schPinArrangement={{
        topSide: {
          direction: "top-to-bottom",
          pins: ["pin1"],
        },
        bottomSide: {
          direction: "bottom-to-top",
          pins: ["pin2"],
        },
      }}
      pinLabels={{
        pin1: "pin1",
        pin2: "pin2",
      }}
    />

    <trace from="U1.pin2" to="net.GND" />
    <trace from="VBAT.pin2" to="U1.pin1" />
    <trace from="VBAT.pin1" to="net.GND" />
    <trace from="VBAT.pin2" to="U1.EN" />
    <trace from="C1.pin1" to="U1.IN" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="U1.OUT" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="Load.pin1" to="U1.OUT" />
    <trace from="Load.pin2" to="net.GND" />
  </subcircuit>
);

export default PowerManagement_TPS7A02;
