import "tscircuit";
import { TMP102AIDRLR } from "../lib/chips/TMP102AIDRLR.tsx";

/**
 * TI TMP102 datasheet (SBOS397I), Figure 7-1, "Typical Connections":
 * https://www.ti.com/document-viewer/TMP102/datasheet/GUID-D9972B9C-7EB3-403C-81AA-258B0C731BF1#TITLE-SBOS397SBOS3979928
 * https://www.ti.com/ods/images/SBOS397I/GUID-20240603-SS0I-I73J-3VFC-EL12H6FVKUPM-low.svg
 */
export const TMP102_TwoWireTemperatureSensor = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <TMP102AIDRLR
      name="U1"
      displayName="TMP102"
      schX={1}
      schY={-0.2}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin6", "pin5", "pin4"],
        },
      }}
      schWidth={2.2}
      schHeight={2.2}
    />

    <resistor
      name="R_SCL"
      resistance="5k"
      footprint="0402"
      schX={-1.4}
      schY={1.55}
      schOrientation="vertical"
    />
    <resistor
      name="R_SDA"
      resistance="5k"
      footprint="0402"
      schX={-0.55}
      schY={1.55}
      schOrientation="vertical"
    />
    <resistor
      name="R_ALERT"
      resistance="5k"
      footprint="0402"
      schX={0.3}
      schY={1.55}
      schOrientation="vertical"
    />
    <capacitor
      name="C_BYPASS"
      capacitance="0.01uF"
      footprint="0402"
      schX={3}
      schY={1.15}
      schOrientation="vertical"
    />

    <schematicsymbol
      name="SUPPLY"
      displayName="1.4 V to 3.6 V"
      symbolName="rail_up"
      schX={1}
      schY={2.5}
    />
    <schematicsymbol
      name="HOST_SCL"
      displayName="Host SCL"
      symbolName="testpoint_left"
      schX={-3.2}
      schY={0.65}
    />
    <schematicsymbol
      name="HOST_SDA"
      displayName="Host SDA"
      symbolName="testpoint_left"
      schX={-3.2}
      schY={0}
    />
    <schematicsymbol
      name="HOST_ALERT"
      displayName="Host ALERT"
      symbolName="testpoint_left"
      schX={-3.2}
      schY={-0.65}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={-0.3}
      schY={-1.6}
    />
    <schematicsymbol
      name="GND_ADDR"
      displayName=""
      symbolName="digital_ground_up"
      schX={2.4}
      schY={-1.3}
    />
    <schematicsymbol
      name="GND_BYPASS"
      displayName=""
      symbolName="digital_ground_up"
      schX={3}
      schY={-0.05}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "U1.pin2",
        "U1.pin4",
        "GND_DEVICE.1",
        "GND_ADDR.1",
        "GND_BYPASS.1",
      ]}
    />
    <net
      name="ALERT"
      connectsTo={["HOST_ALERT.1", "R_ALERT.pin2", "U1.pin3"]}
    />

    <trace from=".SUPPLY > .1" to=".U1 > .pin5" />
    <trace from=".SUPPLY > .1" to=".R_SCL > .pin1" />
    <trace from=".SUPPLY > .1" to=".R_SDA > .pin1" />
    <trace from=".SUPPLY > .1" to=".R_ALERT > .pin1" />
    <trace from=".SUPPLY > .1" to=".C_BYPASS > .pin1" />
    <trace from=".HOST_SCL > .1" to=".U1 > .pin1" />
    <trace from=".R_SCL > .pin2" to=".U1 > .pin1" />
    <trace from=".HOST_SDA > .1" to=".U1 > .pin6" />
    <trace from=".R_SDA > .pin2" to=".U1 > .pin6" />
    <trace from=".HOST_ALERT > .1" to=".U1 > .pin3" />
    <trace from=".C_BYPASS > .pin2" to=".GND_BYPASS > .1" />

    <schematicpath
      points={[
        { x: 0.3, y: 1.05 },
        { x: -0.45, y: 1.05 },
        { x: -0.45, y: -0.6 },
        { x: -0.1, y: -0.6 },
      ]}
      strokeWidth={0.02}
      strokeColor="#008000"
    />
    <schematicpath
      points={[
        { x: -0.1, y: -0.2 },
        { x: -0.3, y: -0.2 },
        { x: -0.3, y: -1.6 },
      ]}
      strokeWidth={0.02}
      strokeColor="#008000"
    />
    <schematicpath
      points={[
        { x: 2.1, y: -0.6 },
        { x: 2.4, y: -0.6 },
        { x: 2.4, y: -1.3 },
      ]}
      strokeWidth={0.02}
      strokeColor="#008000"
    />

    <schematictext
      text="Two-Wire Host Controller"
      schX={-3.2}
      schY={-1.25}
      fontSize={0.16}
      anchor="center"
    />
    <schematictext
      text="TI TMP102 Figure 7-1"
      schX={0}
      schY={-2.2}
      fontSize={0.14}
      anchor="center"
    />
  </board>
);

export default TMP102_TwoWireTemperatureSensor;
