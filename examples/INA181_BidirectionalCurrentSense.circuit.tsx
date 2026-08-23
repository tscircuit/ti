import "tscircuit";
import { INA181A2IDBVR } from "../lib/chips/INA181A2IDBVR.tsx";

/**
 * TI INA181 datasheet (SBOS793H), Figure 8-7, "Measuring Bidirectional Current":
 * https://www.ti.com/document-viewer/INA181/datasheet/GUID-51EC9609-0E42-451E-BE38-F15C8C75D408#TITLE-SBOS793SBOS7932623
 * https://www.ti.com/ods/images/SBOS793H/GUID-ECDF49FE-1464-4DC3-BE2C-728F776BD407-low.gif
 *
 * The selectable REF source and divider are retained symbolically because TI
 * gives no resistor values in the figure. CBYPASS is the specified 0.1 uF.
 */
export const INA181_BidirectionalCurrentSense = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <INA181A2IDBVR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      pinLabels={{
        pin1: "pin1",
        pin2: "pin2",
        pin3: "pin3",
        pin4: "pin4",
        pin5: "pin5",
        pin6: "pin6",
      }}
      symbol={
        <symbol>
          <schematicrect
            schX={0}
            schY={0}
            width={2.2}
            height={2.5}
            strokeWidth={0.03}
            color="#8b0000"
            isFilled={false}
          />
          <schematictext
            text="INA181"
            schX={0}
            schY={0}
            fontSize={0.2}
            anchor="center"
          />
          <schematictext
            text="IN-"
            schX={-0.72}
            schY={0.55}
            fontSize={0.14}
            anchor="center"
          />
          <schematictext
            text="IN+"
            schX={-0.72}
            schY={-0.55}
            fontSize={0.14}
            anchor="center"
          />
          <schematictext
            text="OUT"
            schX={0.72}
            schY={0.45}
            fontSize={0.14}
            anchor="center"
          />
          <schematictext
            text="REF"
            schX={0.72}
            schY={-0.45}
            fontSize={0.14}
            anchor="center"
          />
          <port
            name="pin4"
            pinNumber={4}
            schX={-1.4}
            schY={0.55}
            direction="left"
            schStemLength={0.3}
          />
          <port
            name="pin3"
            pinNumber={3}
            schX={-1.4}
            schY={-0.55}
            direction="left"
            schStemLength={0.3}
          />
          <port
            name="pin1"
            pinNumber={1}
            schX={1.4}
            schY={0.45}
            direction="right"
            schStemLength={0.3}
          />
          <port
            name="pin5"
            pinNumber={5}
            schX={1.4}
            schY={-0.45}
            direction="right"
            schStemLength={0.3}
          />
          <port
            name="pin6"
            pinNumber={6}
            schX={0}
            schY={1.55}
            direction="up"
            schStemLength={0.3}
          />
          <port
            name="pin2"
            pinNumber={2}
            schX={0}
            schY={-1.55}
            direction="down"
            schStemLength={0.3}
          />
        </symbol>
      }
    />

    <schematicsymbol
      name="R_SENSE"
      displayName="RSENSE"
      symbolName="resistor_right"
      schX={-2.5}
      schY={1.7}
    />
    <schematicsymbol
      name="LOAD"
      displayName="Load"
      symbolName="resistor_down"
      schX={-1.7}
      schY={1.7}
    />
    <capacitor
      name="C_BYPASS"
      displayName="CBYPASS"
      capacitance="0.1uF"
      footprint="0402"
      schX={0.75}
      schY={1.9}
      schOrientation="horizontal"
    />
    <schematicsymbol
      name="R_REF_TOP"
      displayName="RREF1"
      symbolName="resistor_down"
      schX={3.65}
      schY={0.35}
    />
    <schematicsymbol
      name="R_REF_BOTTOM"
      displayName="RREF2"
      symbolName="resistor_down"
      schX={3.65}
      schY={-0.95}
    />
    <schematicsymbol
      name="REF_BUFFER"
      displayName="Reference Buffer"
      symbolName="opamp_with_power_right"
      schX={2.55}
      schY={-0.3}
      schRotation="180deg"
    />

    <schematicsymbol
      name="VBUS"
      displayName="Bus · -0.2 V to +26 V"
      symbolName="rail_up"
      schX={-3.75}
      schY={1.7}
    />
    <schematicsymbol
      name="VS"
      displayName="VS · 2.7 V to 5.5 V"
      symbolName="rail_up"
      schX={0}
      schY={2.25}
    />
    <schematicsymbol
      name="VREF"
      displayName="Reference Voltage"
      symbolName="rail_up"
      schX={3.65}
      schY={1.35}
    />
    <schematicsymbol
      name="GND_LOAD"
      displayName=""
      symbolName="digital_ground_up"
      schX={-1.7}
      schY={0.65}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0}
      schY={-1.55}
    />
    <schematicsymbol
      name="GND_BYPASS"
      displayName=""
      symbolName="digital_ground_up"
      schX={1.55}
      schY={1.55}
    />
    <schematicsymbol
      name="GND_REF"
      displayName=""
      symbolName="digital_ground_up"
      schX={3.65}
      schY={-1.8}
    />
    <schematicsymbol
      name="OUTPUT"
      displayName="Output"
      symbolName="testpoint_right"
      schX={2}
      schY={0.45}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "LOAD.pin2",
        "GND_LOAD.1",
        "GND_DEVICE.1",
        "GND_BYPASS.1",
        "GND_REF.1",
      ]}
    />
    <net
      name="SENSE_NEG"
      connectsTo={["R_SENSE.pin2", "LOAD.pin1", "U1.pin4"]}
    />
    <net name="REFERENCE" connectsTo={["U1.pin5", "REF_BUFFER.out"]} />

    <trace from=".VBUS > .1" to=".R_SENSE > .pin1" />
    <trace from=".U1 > .pin3" to=".R_SENSE > .pin1" />
    <trace from=".VS > .1" to=".U1 > .pin6" />
    <trace from=".VS > .1" to=".C_BYPASS > .pin1" />
    <trace from=".C_BYPASS > .pin2" to=".GND_BYPASS > .1" />
    <trace from=".U1 > .pin2" to=".GND_DEVICE > .1" />
    <trace from=".U1 > .pin1" to=".OUTPUT > .1" />

    <trace from=".VREF > .1" to=".R_REF_TOP > .pin1" />
    <trace from=".R_REF_TOP > .pin2" to=".R_REF_BOTTOM > .pin1" />
    <trace from=".R_REF_TOP > .pin2" to=".REF_BUFFER > .inp1" />
    <trace from=".R_REF_BOTTOM > .pin2" to=".GND_REF > .1" />
    <trace from=".REF_BUFFER > .out" to=".REF_BUFFER > .inp2" />
    <schematicpath
      points={[
        { x: -2, y: 1.7 },
        { x: -1.4, y: 1.7 },
        { x: -1.4, y: 0.55 },
      ]}
      strokeWidth={0.02}
      strokeColor="#008000"
    />
    <schematicpath
      points={[
        { x: -2, y: 1.7 },
        { x: -1.7, y: 1.7 },
        { x: -1.7, y: 2.2 },
      ]}
      strokeWidth={0.02}
      strokeColor="#008000"
    />
    <schematicline
      x1={-1.7}
      y1={1.2}
      x2={-1.7}
      y2={0.65}
      strokeWidth={0.02}
      color="#008000"
    />
    <schematicline
      x1={1.4}
      y1={-0.45}
      x2={2.55}
      y2={-0.45}
      strokeWidth={0.02}
      color="#008000"
    />

    <schematictext
      text="TI INA181 Figure 8-7"
      schX={0}
      schY={-2.25}
      fontSize={0.14}
      anchor="center"
    />
  </board>
);

export default INA181_BidirectionalCurrentSense;
