import "tscircuit";
import { OPA333AIDR } from "../lib/chips/OPA333AIDR.tsx";

/**
 * TI OPA333 datasheet (SBOS351E), "Temperature Measurement":
 * https://www.ti.com/document-viewer/OPA333/datasheet/application_and_implementation#SBOS3519103
 * https://www.ti.com/ods/images/SBOS351E/ai_measure_tmp_bos351.gif
 *
 * The bridge, thermistor, feedback resistor, and op-amp orientation follow the
 * TI figure. TI specifies the thermistor by type rather than a nominal value,
 * so it remains a symbolic resistor instead of receiving an invented value.
 */
export const OPA333_ThermistorBridge = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <OPA333AIDR
      name="U1_OPAMP"
      displayName=""
      schX={1.55}
      schY={0}
      pinLabels={{
        pin1: "pin1",
        pin2: "pin2",
        pin3: "pin3",
        pin4: "pin4",
        pin5: "pin5",
        pin6: "pin6",
        pin7: "pin7",
        pin8: "pin8",
      }}
      symbol={
        <symbol>
          <schematicpath
            points={[
              { x: -0.55, y: 0.45 },
              { x: -0.55, y: -0.45 },
              { x: 0.5, y: 0 },
              { x: -0.55, y: 0.45 },
            ]}
            strokeWidth={0.03}
            strokeColor="#8b0000"
          />
          <schematictext
            text="-"
            schX={-0.42}
            schY={0.23}
            fontSize={0.22}
            anchor="center"
          />
          <schematictext
            text="+"
            schX={-0.42}
            schY={-0.23}
            fontSize={0.22}
            anchor="center"
          />
          <schematictext
            text="OPA333"
            schX={0}
            schY={0}
            fontSize={0.15}
            anchor="center"
          />
          <schematicline
            x1={-1.25}
            y1={0.25}
            x2={-0.55}
            y2={0.25}
            strokeWidth={0.02}
            color="#8b0000"
          />
          <schematicline
            x1={-1.25}
            y1={-0.25}
            x2={-0.55}
            y2={-0.25}
            strokeWidth={0.02}
            color="#8b0000"
          />
          <schematicline
            x1={0.5}
            y1={0}
            x2={1.2}
            y2={0}
            strokeWidth={0.02}
            color="#8b0000"
          />
          <schematicline
            x1={-0.05}
            y1={0.45}
            x2={-0.05}
            y2={0.8}
            strokeWidth={0.02}
            color="#8b0000"
          />
          <schematicline
            x1={-0.05}
            y1={-0.45}
            x2={-0.05}
            y2={-0.8}
            strokeWidth={0.02}
            color="#8b0000"
          />
          <port
            name="pin2"
            pinNumber={2}
            schX={-1.25}
            schY={0.25}
            direction="left"
            schStemLength={0}
          />
          <port
            name="pin3"
            pinNumber={3}
            schX={-1.25}
            schY={-0.25}
            direction="left"
            schStemLength={0}
          />
          <port
            name="pin6"
            pinNumber={6}
            schX={1.2}
            schY={0}
            direction="right"
            schStemLength={0}
          />
          <port
            name="pin7"
            pinNumber={7}
            schX={-0.05}
            schY={0.8}
            direction="up"
            schStemLength={0}
          />
          <port
            name="pin4"
            pinNumber={4}
            schX={-0.05}
            schY={-0.8}
            direction="down"
            schStemLength={0}
          />
        </symbol>
      }
    />

    <resistor
      name="R_LEFT_TOP"
      displayName="R1"
      resistance="1Mohm"
      footprint="0402"
      schX={-2.4}
      schY={0.85}
      schOrientation="vertical"
    />
    <resistor
      name="R_LEFT_BOTTOM"
      displayName="R2"
      resistance="1Mohm"
      footprint="0402"
      schX={-2.4}
      schY={-0.85}
      schOrientation="vertical"
    />
    <resistor
      name="R_RIGHT_TOP"
      displayName="R3"
      resistance="60k"
      footprint="0402"
      schX={-0.75}
      schY={0.85}
      schOrientation="vertical"
    />
    <schematicsymbol
      name="R_THERMISTOR"
      displayName="NTC Thermistor"
      symbolName="resistor_down"
      schX={-0.75}
      schY={-0.85}
    />
    <resistor
      name="R_FEEDBACK"
      displayName="RF"
      resistance="100k"
      footprint="0402"
      schX={1.45}
      schY={1.35}
      schOrientation="horizontal"
    />

    <schematicsymbol
      name="V3"
      displayName="3 V"
      symbolName="rail_up"
      schX={-1.6}
      schY={1.75}
    />
    <schematicsymbol
      name="GND_BRIDGE"
      displayName=""
      symbolName="digital_ground_up"
      schX={-1.6}
      schY={-1.75}
    />
    <schematicsymbol
      name="VOUT"
      displayName="VOUT"
      symbolName="testpoint_right"
      schX={3.3}
      schY={0}
    />
    <schematicsymbol
      name="V3_OPAMP"
      displayName=""
      symbolName="rail_up"
      schX={1.5}
      schY={1.05}
    />
    <schematicsymbol
      name="GND_OPAMP"
      displayName=""
      symbolName="digital_ground_up"
      schX={1.5}
      schY={-1.05}
    />

    <trace path={[".V3 > .1", ".R_LEFT_TOP > .pin1", ".R_RIGHT_TOP > .pin1"]} />
    <trace
      path={[
        ".GND_BRIDGE > .1",
        ".R_LEFT_BOTTOM > .pin2",
        ".R_THERMISTOR > .2",
      ]}
    />
    <trace from=".R_LEFT_TOP > .pin2" to=".R_LEFT_BOTTOM > .pin1" />
    <trace from=".R_LEFT_TOP > .pin2" to=".U1_OPAMP > .pin3" />
    <trace from=".R_RIGHT_TOP > .pin2" to=".R_THERMISTOR > .pin1" />
    <trace from=".R_RIGHT_TOP > .pin2" to=".U1_OPAMP > .pin2" />
    <trace from=".R_FEEDBACK > .pin1" to=".U1_OPAMP > .pin2" />
    <trace from=".U1_OPAMP > .pin6" to=".R_FEEDBACK > .pin2" />
    <trace from=".U1_OPAMP > .pin6" to=".VOUT > .1" />
    <trace from=".V3_OPAMP > .1" to=".U1_OPAMP > .pin7" />
    <trace from=".U1_OPAMP > .pin4" to=".GND_OPAMP > .1" />

    <schematictext
      text="TI OPA333 temperature-measurement bridge"
      schX={0}
      schY={-2.25}
      fontSize={0.14}
      anchor="center"
    />
  </board>
);

export default OPA333_ThermistorBridge;
