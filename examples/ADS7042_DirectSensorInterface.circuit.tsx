import "tscircuit";
import { ADS7042IDCUT } from "../lib/chips/ADS7042IDCUT.tsx";

/**
 * TI ADS7042 datasheet (SBAS608C), "Interfacing the Device Directly with Sensors":
 * https://www.ti.com/document-viewer/ADS7042/datasheet/application_and_implementation#SBAS608129
 * https://www.ti.com/ods/images/SBAS608C/apps_sys_sensor_bas608.gif
 *
 * TI labels the sensor's ROUT and CFLT but does not prescribe values, so both
 * stay symbolic. The digital pins are exposed to make this analog front-end a
 * reusable block; the TI figure intentionally focuses only on the sensor path.
 */
export const ADS7042_DirectSensorInterface = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <ADS7042IDCUT
      name="U1"
      displayName="ADS7042"
      schX={1}
      schY={0}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin6", "pin5"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin2", "pin3", "pin4"],
        },
        topSide: {
          direction: "left-to-right",
          pins: ["pin7", "pin1"],
        },
        bottomSide: { direction: "left-to-right", pins: ["pin8"] },
      }}
      schWidth={2.25}
      schHeight={2.6}
    />

    <schematicsymbol
      name="SENSOR_POS"
      displayName="Sensor +"
      symbolName="testpoint_left"
      schX={-3.55}
      schY={0.45}
    />
    <schematicsymbol
      name="SENSOR_NEG"
      displayName="Sensor -"
      symbolName="testpoint_left"
      schX={-3.55}
      schY={-0.45}
    />
    <schematicsymbol
      name="R_OUT"
      displayName="ROUT"
      symbolName="resistor_right"
      schX={-2.1}
      schY={0.45}
    />
    <schematicsymbol
      name="C_FILTER"
      displayName="CFLT"
      symbolName="capacitor_down"
      schX={-0.65}
      schY={-0.1}
    />

    <schematicsymbol
      name="AVDD"
      displayName="AVDD"
      symbolName="rail_up"
      schX={0.6}
      schY={1.85}
    />
    <schematicsymbol
      name="DVDD"
      displayName="DVDD"
      symbolName="rail_up"
      schX={1.4}
      schY={1.85}
    />
    <schematicsymbol
      name="GND_SENSOR"
      displayName=""
      symbolName="digital_ground_up"
      schX={-3.55}
      schY={-1.15}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={1}
      schY={-1.85}
    />
    <schematicsymbol
      name="SCLK"
      displayName="SCLK"
      symbolName="testpoint_right"
      schX={3.5}
      schY={0.65}
    />
    <schematicsymbol
      name="SDO"
      displayName="SDO"
      symbolName="testpoint_right"
      schX={3.5}
      schY={0}
    />
    <schematicsymbol
      name="CS"
      displayName="CS"
      symbolName="testpoint_right"
      schX={3.5}
      schY={-0.65}
    />

    <net name="GND" isGroundNet connectsTo={["GND_SENSOR.1", "GND_DEVICE.1"]} />
    <net
      name="SENSOR_RETURN"
      connectsTo={["SENSOR_NEG.1", "C_FILTER.pin2", "U1.pin5"]}
    />

    <trace from=".SENSOR_POS > .1" to=".R_OUT > .pin1" />
    <trace from=".R_OUT > .pin2" to=".U1 > .pin6" />
    <trace from=".C_FILTER > .pin1" to=".R_OUT > .pin2" />
    <trace from=".C_FILTER > .pin2" to=".SENSOR_NEG > .1" />
    <trace from=".SENSOR_NEG > .1" to=".GND_SENSOR > .1" />

    <trace from=".AVDD > .1" to=".U1 > .pin7" />
    <trace from=".DVDD > .1" to=".U1 > .pin1" />
    <trace from=".U1 > .pin8" to=".GND_DEVICE > .1" />
    <trace from=".U1 > .pin2" to=".SCLK > .1" />
    <trace from=".U1 > .pin3" to=".SDO > .1" />
    <trace from=".U1 > .pin4" to=".CS > .1" />

    <schematicpath
      points={[
        { x: -0.65, y: -0.55 },
        { x: -0.2, y: -0.55 },
        { x: -0.2, y: -0.3 },
        { x: -0.125, y: -0.3 },
      ]}
      strokeWidth={0.02}
      strokeColor="#008000"
    />

    <schematictext
      text="TI ADS7042 direct-sensor interface"
      schX={0}
      schY={-2.45}
      fontSize={0.14}
      anchor="center"
    />
  </board>
);

export default ADS7042_DirectSensorInterface;
