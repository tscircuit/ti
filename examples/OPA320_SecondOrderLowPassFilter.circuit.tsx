import "tscircuit";
import { OPA320SAIDBVR } from "../lib/chips/OPA320SAIDBVR.tsx";

/**
 * TI OPA320 datasheet (SBOS513F), Figure 45:
 * "Second-Order, Butterworth, 500-kHz, Low-Pass Filter"
 * https://www.ti.com/document-viewer/OPA320/datasheet/application-and-implementation#SBOS5132327
 * https://www.ti.com/ods/images/SBOS513F/ai_2order_lopass_filt_bos513.gif
 *
 * The physical OPA320S is projected as the op-amp triangle used by TI. The
 * shutdown input is electrically held at V+ but omitted from the drawing,
 * matching the simplified TI signal-path figure.
 */
export const OPA320_SecondOrderLowPassFilter = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <OPA320SAIDBVR
      name="U1_OPAMP"
      displayName=""
      schX={1.25}
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
            text="OPA320"
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
            x1={-0.15}
            y1={0.45}
            x2={-0.15}
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
            name="pin4"
            pinNumber={4}
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
            name="pin1"
            pinNumber={1}
            schX={1.2}
            schY={0}
            direction="right"
            schStemLength={0}
          />
          <port
            name="pin6"
            pinNumber={6}
            schX={-0.15}
            schY={0.8}
            direction="up"
            schStemLength={0}
          />
          <port
            name="pin2"
            pinNumber={2}
            schX={-0.05}
            schY={-0.8}
            direction="down"
            schStemLength={0}
          />
        </symbol>
      }
    />

    <resistor
      name="R1"
      resistance="549ohm"
      footprint="0402"
      schX={-2.8}
      schY={0.35}
      schOrientation="horizontal"
    />
    <resistor
      name="R2"
      resistance="1.24k"
      footprint="0402"
      schX={-0.75}
      schY={0.35}
      schOrientation="horizontal"
    />
    <resistor
      name="R3"
      resistance="549ohm"
      footprint="0402"
      schX={-0.2}
      schY={1.85}
      schOrientation="horizontal"
    />
    <capacitor
      name="C1"
      capacitance="1nF"
      footprint="0402"
      schX={-1.75}
      schY={-0.65}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="150pF"
      footprint="0402"
      schX={0.35}
      schY={1.05}
      schOrientation="horizontal"
    />

    <schematicsymbol
      name="VIN"
      displayName="VIN"
      symbolName="testpoint_left"
      schX={-4.2}
      schY={0.35}
    />
    <schematicsymbol
      name="VOUT"
      displayName="VOUT"
      symbolName="testpoint_right"
      schX={3.15}
      schY={0}
    />
    <schematicsymbol
      name="GND_C1"
      displayName=""
      symbolName="digital_ground_up"
      schX={-1.75}
      schY={-1.55}
    />
    <schematicsymbol
      name="GND_INP"
      displayName=""
      symbolName="digital_ground_up"
      schX={0.15}
      schY={-1.2}
    />
    <schematicsymbol
      name="VPLUS"
      displayName="V+"
      symbolName="rail_up"
      schX={1.3}
      schY={1.2}
    />
    <schematicsymbol
      name="VMINUS"
      displayName="V-"
      symbolName="rail_down"
      schX={1.3}
      schY={-1.2}
    />

    <net name="GND" isGroundNet connectsTo={["GND_C1.1", "GND_INP.1"]} />
    <net name="V_POS" connectsTo={["U1_OPAMP.pin5", "VPLUS.1"]} />
    <trace from=".VIN > .1" to=".R1 > .pin1" />
    <trace path={[".R1 > .pin2", ".R2 > .pin1", ".C1 > .pin1"]} />
    <trace from=".C1 > .pin2" to=".GND_C1 > .1" />
    <trace from=".R2 > .pin2" to=".U1_OPAMP > .pin4" />
    <trace from=".U1_OPAMP > .pin3" to=".GND_INP > .1" />
    <trace from=".U1_OPAMP > .pin1" to=".VOUT > .1" />
    <trace from=".R3 > .pin2" to=".U1_OPAMP > .pin1" />
    <trace from=".C2 > .pin2" to=".U1_OPAMP > .pin1" />
    <trace
      from=".R3 > .pin1"
      to=".R1 > .pin2"
      schematicRouteHints={[
        { x: -1.75, y: 1.85 },
        { x: -1.75, y: 0.35 },
      ]}
    />
    <trace
      from=".C2 > .pin1"
      to=".R2 > .pin2"
      schematicRouteHints={[
        { x: -0.05, y: 1.05 },
        { x: -0.05, y: 0.35 },
      ]}
    />
    <trace from=".U1_OPAMP > .pin6" to=".VPLUS > .1" />
    <trace from=".U1_OPAMP > .pin2" to=".VMINUS > .1" />

    <schematictext
      text="TI Figure 45 · 500-kHz Butterworth low-pass"
      schX={-0.3}
      schY={-2.1}
      fontSize={0.14}
      anchor="center"
    />
  </board>
);

export default OPA320_SecondOrderLowPassFilter;
