import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TMP1827 } from "../chips/TMP1827.circuit";

export const TemperatureSensor_TMP1827 = (props: SubcircuitProps) => (
  <subcircuit {...props}>
    <schematictext
      schX={2}
      schY={5}
      text="TMP1827 Multi-Drop Bus"
      fontSize={0.4}
    />

    <resistor
      name="RPU"
      resistance="3k"
      footprint="0402"
      schX={-2.5}
      schY={3.4}
      schOrientation="vertical"
      connections={{
        pin1: "net.VDD",
        pin2: "net.SDQ_BUS",
      }}
    />

    <TMP1827
      name="U2"
      schX={2}
      schY={0}
      connections={{
        pin1: "net.SDQ_BUS",
        pin2: "net.VDD",
        pin3: "net.GND",
      }}
    />

    <TMP1827
      name="U3"
      schX={6}
      schY={0}
      connections={{
        pin1: "net.SDQ_BUS",
        pin2: "net.VDD",
        pin3: "net.GND",
      }}
    />
    <schematictext schX={2} schY={0} text="TMP1827" fontSize={0.2} />
    <schematictext schX={2} schY={-2.2} text="VDD Powered" fontSize={0.2} />
    <schematictext schX={6} schY={-2.2} text="BUS Powered" fontSize={0.2} />

    <schematictext schX={6} schY={0} text="TMP1827" fontSize={0.2} />
  </subcircuit>
);

export default TemperatureSensor_TMP1827;
