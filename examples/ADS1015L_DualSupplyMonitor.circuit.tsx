import "tscircuit";
import { ADS1015LIDGSR } from "../lib/chips/ADS1015LIDGSR.tsx";

/**
 * TI ADS1015L datasheet (SBASAV7), Figure 9-9:
 * "Monitoring Two Supply Voltage Rails Using the ADS1015L"
 * https://www.ti.com/document-viewer/ADS1015L/datasheet/GUID-15CF0C0C-4F6E-49F6-A678-8C8E0445438D#TITLE-SBAS822T4758422-11
 * https://www.ti.com/ods/images/SBASAV7/GUID-20230711-SS0I-WZVJ-MZBB-ZCL3HNXRCG50-low.svg
 *
 * TI gives a 1-kOhm to 10-kOhm range for the bus pullups rather than one
 * selected value; those two resistors therefore remain explicitly symbolic.
 */
export const ADS1015L_DualSupplyMonitor = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <ADS1015LIDGSR
      name="U1"
      displayName="ADS1015L"
      schX={0.75}
      schY={0}
      pinLabels={{
        pin1: "ADDR",
        pin2: "pin2",
        pin3: "GND",
        pin4: "AIN0",
        pin5: "AIN1",
        pin6: "AIN2",
        pin7: "AIN3",
        pin8: "VDD",
        pin9: "SDA",
        pin10: "SCL",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin5", "pin6", "pin7"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin2", "pin10", "pin9", "pin1"],
        },
        topSide: { direction: "left-to-right", pins: ["pin8"] },
        bottomSide: { direction: "left-to-right", pins: ["pin3"] },
      }}
      schWidth={2.35}
      schHeight={3}
    />

    <schematictext
      text="pin2 = ALERT/RDY"
      schX={0.75}
      schY={-1.25}
      fontSize={0.12}
      anchor="center"
    />

    <resistor
      name="R_3V3"
      resistance="100ohm"
      footprint="0402"
      schX={-3}
      schY={1.15}
      schOrientation="horizontal"
    />
    <capacitor
      name="C_3V3"
      capacitance="0.47uF"
      footprint="0402"
      schX={-1.9}
      schY={0.4}
      schOrientation="vertical"
    />
    <resistor
      name="R_1V8"
      resistance="100ohm"
      footprint="0402"
      schX={-3}
      schY={-0.45}
      schOrientation="horizontal"
    />
    <capacitor
      name="C_1V8"
      capacitance="0.47uF"
      footprint="0402"
      schX={-1.9}
      schY={-1.2}
      schOrientation="vertical"
    />
    <capacitor
      name="C_VDD"
      capacitance="0.1uF"
      footprint="0402"
      schX={0.75}
      schY={2.45}
      schOrientation="vertical"
    />
    <schematicsymbol
      name="R_SCL"
      displayName=""
      symbolName="resistor_down"
      schX={3.15}
      schY={1.4}
    />
    <schematicsymbol
      name="R_SDA"
      displayName=""
      symbolName="resistor_down"
      schX={4.1}
      schY={1.4}
    />

    <schematicsymbol
      name="RAIL_3V3_IN"
      displayName="3.3 V"
      symbolName="rail_up"
      schX={-4.15}
      schY={1.15}
    />
    <schematicsymbol
      name="RAIL_1V8_IN"
      displayName="1.8 V"
      symbolName="rail_up"
      schX={-4.15}
      schY={-0.45}
    />
    <schematicsymbol
      name="RAIL_VDD"
      displayName="3.3 V"
      symbolName="rail_up"
      schX={0.75}
      schY={3.25}
    />
    <schematicsymbol
      name="RAIL_BUS"
      displayName="1.8 V"
      symbolName="rail_up"
      schX={3.65}
      schY={2.25}
    />
    <schematicsymbol
      name="SCL_BUS"
      displayName="I2C SCL"
      symbolName="testpoint_right"
      schX={5.25}
      schY={0.45}
    />
    <schematicsymbol
      name="SDA_BUS"
      displayName="I2C SDA"
      symbolName="testpoint_right"
      schX={5.25}
      schY={-0.15}
    />

    <schematicsymbol
      name="GND_3V3"
      displayName=""
      symbolName="digital_ground_up"
      schX={-1.9}
      schY={-0.35}
    />
    <schematicsymbol
      name="GND_1V8"
      displayName=""
      symbolName="digital_ground_up"
      schX={-1.9}
      schY={-1.95}
    />
    <schematicsymbol
      name="GND_VDD"
      displayName=""
      symbolName="digital_ground_up"
      schX={1.55}
      schY={2.05}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0.75}
      schY={-2.15}
    />
    <schematicsymbol
      name="GND_ADDR"
      displayName=""
      symbolName="digital_ground_up"
      schX={2.3}
      schY={-1.6}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "GND_3V3.1",
        "GND_1V8.1",
        "GND_VDD.1",
        "GND_DEVICE.1",
        "GND_ADDR.1",
        "U1.pin1",
      ]}
    />

    <trace from=".RAIL_3V3_IN > .1" to=".R_3V3 > .pin1" />
    <trace from=".R_3V3 > .pin2" to=".U1 > .pin4" />
    <trace from=".C_3V3 > .pin1" to=".R_3V3 > .pin2" />
    <trace from=".C_3V3 > .pin2" to=".GND_3V3 > .1" />
    <trace from=".RAIL_1V8_IN > .1" to=".R_1V8 > .pin1" />
    <trace from=".R_1V8 > .pin2" to=".U1 > .pin6" />
    <trace from=".C_1V8 > .pin1" to=".R_1V8 > .pin2" />
    <trace from=".C_1V8 > .pin2" to=".GND_1V8 > .1" />

    <trace from=".RAIL_VDD > .1" to=".U1 > .pin8" />
    <trace from=".C_VDD > .pin1" to=".RAIL_VDD > .1" />
    <trace from=".C_VDD > .pin2" to=".GND_VDD > .1" />
    <trace from=".U1 > .pin3" to=".GND_DEVICE > .1" />
    <schematicpath
      points={[
        { x: 1.925, y: -0.65 },
        { x: 2.3, y: -0.65 },
        { x: 2.3, y: -1.6 },
      ]}
      strokeWidth={0.02}
      strokeColor="#008000"
    />

    <trace from=".RAIL_BUS > .1" to=".R_SCL > .pin1" />
    <trace from=".RAIL_BUS > .1" to=".R_SDA > .pin1" />
    <trace from=".U1 > .pin10" to=".SCL_BUS > .1" />
    <trace from=".R_SCL > .pin2" to=".U1 > .pin10" />
    <trace from=".U1 > .pin9" to=".SDA_BUS > .1" />
    <trace from=".R_SDA > .pin2" to=".U1 > .pin9" />

    <schematictext
      text="1 kOhm to 10 kOhm pullups"
      schX={3.65}
      schY={1.85}
      fontSize={0.12}
      anchor="center"
    />

    <schematictext
      text="TI ADS1015L Figure 9-9 · dual-rail monitor"
      schX={0.5}
      schY={-2.8}
      fontSize={0.14}
      anchor="center"
    />
  </board>
);

export default ADS1015L_DualSupplyMonitor;
