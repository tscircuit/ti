import { BQ27441DRZR_G1B } from "./imports/BQ27441DRZR_G1B";
import type { SubcircuitProps } from "@tscircuit/props";

export default (props: SubcircuitProps) => (
  <subcircuit schMaxTraceDistance={20} width={100} height={100} {...props}>
    <BQ27441DRZR_G1B
      name="U1"
      schX={0}
      schY={0.55}
      schWidth={4.6}
      schHeight={3}
      showPinAliases={false}
      noConnect={["NC1", "NC2", "NC3"]}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["SDA", "SCL", "VSS", "NC3", "VDD", "BAT"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["GPOUT", "NC1", "BIN", "NC2", "SRP", "SRN"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["EP"],
        },
      }}
      schPinStyle={{
        VSS: { marginBottom: 0.35 },
        NC3: { marginBottom: 0.25 },
        VDD: { marginBottom: 0.3 },
        NC1: { marginBottom: 0.35 },
        BIN: { marginBottom: 0.25 },
        NC2: { marginBottom: 0.3 },
        SRP: { marginBottom: 0.05 },
      }}
      connections={{
        VSS: "net.PGND",
        EP: "net.PGND",
      }}
    />

    <chip
      name="J5"
      manufacturerPartNumber="Battery Pack"
      footprint="pinrow3"
      pinLabels={{
        pin1: "PACKN",
        pin2: "BIN",
        pin3: "PACKP",
      }}
      schX={-8.4}
      schY={-4.8}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3"],
        },
      }}
      connections={{
        pin1: "net.PGND",
        pin2: "net.BIN",
        pin3: "net.PACKP",
      }}
    />

    <resistor
      name="R1"
      resistance="0.010"
      tolerance="1%"
      footprint="1206"
      schX={4.4}
      schY={-4.8}
      schOrientation="horizontal"
      connections={{
        pin1: "net.PACKP",
        pin2: "net.VSYS",
      }}
    />

    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0603"
      schX={-6.25}
      schY={3.55}
      schOrientation="vertical"
    />
    <resistor
      name="R3"
      resistance="5.1k"
      footprint="0603"
      schX={-5.1}
      schY={3.55}
      schOrientation="vertical"
    />

    <resistor
      name="R4"
      resistance="5.1k"
      footprint="0603"
      schX={6.0}
      schY={3.55}
      schOrientation="vertical"
    />
    <resistor
      name="R5"
      resistance="1.8M"
      footprint="0603"
      schX={7.15}
      schY={3.55}
      schOrientation="vertical"
    />

    <capacitor
      name="C1"
      capacitance="0.47uF"
      footprint="0603"
      schX={-4.7}
      schY={-1.45}
      schOrientation="vertical"
      connections={{
        pin2: "net.PGND",
      }}
    />

    <capacitor
      name="C2"
      capacitance="1.0uF"
      footprint="0603"
      schX={-2.55}
      schY={-5.65}
      schOrientation="vertical"
      connections={{
        pin1: "net.PACKP",
        pin2: "net.PGND",
      }}
    />

    <netlabel
      net="SDA"
      connection="U1.SDA"
      schX={-9.55}
      schY={2.28}
      anchorSide="right"
    />
    <netlabel
      net="SCL"
      connection="U1.SCL"
      schX={-9.55}
      schY={1.46}
      anchorSide="right"
    />
    <netlabel
      net="GPOUT"
      connection="U1.GPOUT"
      schX={9.65}
      schY={2.28}
      anchorSide="left"
    />
    <netlabel
      net="BIN"
      connection="U1.BIN"
      schX={9.65}
      schY={0.66}
      anchorSide="left"
    />
    <netlabel
      net="BIN"
      connection="J5.pin2"
      schX={-6.55}
      schY={-4.8}
      anchorSide="left"
    />
    <netlabel
      net="VSYS"
      connection="R1.pin2"
      schX={9.65}
      schY={-4.8}
      anchorSide="left"
    />

    <netlabel
      net="PGND"
      connection="U1.VSS"
      schX={-4.6}
      schY={0.2}
      anchorSide="top"
    />
    <netlabel
      net="PGND"
      connection="U1.EP"
      schX={0}
      schY={-2.85}
      anchorSide="top"
    />

    <schematictext
      text="VPU"
      schX={-5.65}
      schY={4.85}
      fontSize={0.18}
      anchor="center"
    />
    <schematictext
      text="VPU"
      schX={6.55}
      schY={4.85}
      fontSize={0.18}
      anchor="center"
    />
    <schematictext
      text="System Load/Charger"
      schX={8.45}
      schY={-4.25}
      fontSize={0.18}
      anchor="center"
    />
    <schematictext
      text="Note: 1% Tol."
      schX={4.4}
      schY={-5.65}
      fontSize={0.18}
      anchor="center"
    />

    <trace from="R2.pin1" to="R3.pin1" />
    <trace from="R4.pin1" to="R5.pin1" />

    <trace from="R2.pin2" to="U1.SDA" />
    <trace from="R3.pin2" to="U1.SCL" />

    <trace from="R4.pin2" to="U1.GPOUT" />
    <trace from="R5.pin2" to="U1.BIN" />

    <trace from="C1.pin1" to="U1.VDD" />

    <trace from="J5.pin3" to="C2.pin1" />
    <trace from="C2.pin1" to="U1.BAT" />
    <trace from="C2.pin1" to="R1.pin1" />
    <trace from="R1.pin1" to="U1.SRP" />
    <trace from="R1.pin2" to="U1.SRN" />

    <trace from="J5.pin1" to="net.PGND" />
    <trace from="C1.pin2" to="net.PGND" />
    <trace from="C2.pin2" to="net.PGND" />
    <trace from="U1.VSS" to="net.PGND" />
    <trace from="U1.EP" to="net.PGND" />
  </subcircuit>
);
