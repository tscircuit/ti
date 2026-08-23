import "tscircuit";
import { LMC555CMX_NOPB } from "../lib/chips/LMC555CMX_NOPB.tsx";

/**
 * TI LMC555 datasheet (SNAS558N), Figure 8-1,
 * "LMC555 Schematic of Monostable Mode to Flash an LED".
 * Section: https://www.ti.com/document-viewer/LMC555/datasheet/GUID-70DF1B73-42F3-448D-B588-86B0175F1C4C#TITLE-SNAS558SNAS5589201
 * Figure: https://www.ti.com/ods/images/SNAS558N/GUID-9517F735-81AC-4C81-8971-FC3F01B7204F-low.gif
 */
export const LMC555_MonostableLedFlasher = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <LMC555CMX_NOPB
      name="U1"
      schX={0}
      schY={0}
      schWidth={2.4}
      schHeight={3.2}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["TRIGER", "OUTPUT"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["DC", "TH", "CV"],
        },
        topSide: {
          direction: "left-to-right",
          pins: ["RESET", "V_POS"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["GND"],
        },
      }}
    />

    <pushbutton name="SW1" footprint="smdpushbutton" schX={-4.1} schY={0.7} />
    <resistor
      name="R_TRIGGER"
      resistance="10k"
      footprint="0402"
      schX={-2.8}
      schY={1.85}
      schOrientation="horizontal"
    />
    <led
      name="D1"
      color="green"
      footprint="0603"
      schX={-3}
      schY={-0.65}
      schRotation={270}
    />
    <resistor
      name="R_LED"
      resistance="470ohm"
      footprint="0402"
      schX={-3}
      schY={-1.75}
      schOrientation="vertical"
    />
    <resistor
      name="R_TIMING"
      resistance="10k"
      footprint="0402"
      schX={2.9}
      schY={1.1}
      schOrientation="vertical"
    />
    <capacitor
      name="C_TIMING"
      capacitance="470uF"
      footprint="1206"
      schX={2.9}
      schY={-0.4}
      schOrientation="vertical"
    />
    <capacitor
      name="C_CONTROL"
      capacitance="10nF"
      footprint="0402"
      schX={1.9}
      schY={-1.65}
      schOrientation="vertical"
    />

    <schematicsymbol
      name="VCC_TRIGGER"
      displayName="+5 V to +15 V"
      symbolName="rail_up"
      schX={-2.8}
      schY={2.55}
    />
    <schematicsymbol
      name="VCC_DEVICE"
      displayName="+5 V to +15 V"
      symbolName="rail_up"
      schX={0}
      schY={2.25}
    />
    <schematicsymbol
      name="VCC_TIMING"
      displayName="+5 V to +15 V"
      symbolName="rail_up"
      schX={2.9}
      schY={2}
    />
    <schematicsymbol
      name="GND_SWITCH"
      displayName=""
      symbolName="digital_ground_up"
      schX={-4.1}
      schY={-0.15}
    />
    <schematicsymbol
      name="GND_LED"
      displayName=""
      symbolName="digital_ground_up"
      schX={-3}
      schY={-2.55}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0}
      schY={-2.15}
    />
    <schematicsymbol
      name="GND_TIMING"
      displayName=""
      symbolName="digital_ground_up"
      schX={2.9}
      schY={-1.25}
    />
    <schematicsymbol
      name="GND_CONTROL"
      displayName=""
      symbolName="digital_ground_up"
      schX={1.9}
      schY={-2.45}
    />

    <net
      name="VCC"
      connectsTo={["VCC_TRIGGER.pin1", "VCC_DEVICE.pin1", "VCC_TIMING.pin1"]}
    />
    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "GND_SWITCH.pin1",
        "GND_LED.pin1",
        "GND_DEVICE.pin1",
        "GND_TIMING.pin1",
        "GND_CONTROL.pin1",
      ]}
    />

    <trace from=".SW1 > .pin2" to=".U1 > .TRIGER" />
    <trace from=".R_TRIGGER > .pin1" to=".SW1 > .pin2" />
    <trace from=".R_TRIGGER > .pin2" to=".VCC_TRIGGER > .1" />
    <trace path={[".U1 > .RESET", ".U1 > .V_POS", ".VCC_DEVICE > .1"]} />
    <trace from=".R_TIMING > .pin1" to=".VCC_TIMING > .1" />

    <trace
      path={[
        ".R_TIMING > .pin2",
        ".C_TIMING > .pin1",
        ".U1 > .DC",
        ".U1 > .TH",
      ]}
    />
    <trace from=".U1 > .OUTPUT" to=".D1 > .anode" />
    <trace from=".D1 > .cathode" to=".R_LED > .pin1" />
    <trace from=".U1 > .CV" to=".C_CONTROL > .pin1" />

    <trace from=".SW1 > .pin1" to=".GND_SWITCH > .1" />
    <trace from=".R_LED > .pin2" to=".GND_LED > .1" />
    <trace from=".U1 > .GND" to=".GND_DEVICE > .1" />
    <trace from=".C_TIMING > .pin2" to=".GND_TIMING > .1" />
    <trace from=".C_CONTROL > .pin2" to=".GND_CONTROL > .1" />
  </board>
);

export default LMC555_MonostableLedFlasher;
