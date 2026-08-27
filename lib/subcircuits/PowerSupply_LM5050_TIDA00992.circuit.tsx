import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { CSD19532Q5B } from "../chips/CSD19532Q5B.circuit.tsx";
import { LM5050Q1MKX_1_NOPB } from "../chips/LM5050Q1MKX_1_NOPB.circuit.tsx";
import { NTR5198NLT1G } from "../chips/NTR5198NLT1G.circuit.tsx";

const bidirectionalTvsSymbol = (
  <symbol>
    <port
      name="pin2"
      pinNumber={2}
      aliases={["cathode"]}
      schX={0}
      schY={1.2}
      direction="up"
      schStemLength={0.68}
    />
    <schematicpath
      points={[
        { x: -0.34, y: 0.52 },
        { x: 0.34, y: 0.52 },
        { x: 0, y: 0 },
        { x: -0.34, y: 0.52 },
      ]}
      strokeWidth={0.025}
      strokeColor="#840000"
      fillColor="#840000"
      isFilled
    />
    <schematicpath
      points={[
        { x: -0.34, y: -0.52 },
        { x: 0.34, y: -0.52 },
        { x: 0, y: 0 },
        { x: -0.34, y: -0.52 },
      ]}
      strokeWidth={0.025}
      strokeColor="#840000"
      fillColor="#840000"
      isFilled
    />
    <schematicpath
      points={[
        { x: -0.52, y: -0.3 },
        { x: -0.3, y: 0 },
        { x: 0, y: 0 },
      ]}
      strokeWidth={0.035}
      strokeColor="#840000"
    />
    <schematicpath
      points={[
        { x: 0, y: 0 },
        { x: 0.3, y: 0 },
        { x: 0.52, y: 0.3 },
      ]}
      strokeWidth={0.035}
      strokeColor="#840000"
    />
    <port
      name="pin1"
      pinNumber={1}
      aliases={["anode"]}
      schX={0}
      schY={-1.2}
      direction="down"
      schStemLength={0.68}
    />
    <schematictext
      text="{NAME}"
      schX={0.12}
      schY={-0.78}
      fontSize={0.22}
      anchor="left"
    />
  </symbol>
);

/** TIDA-00992 automotive reverse-polarity protection reference schematic. */
export const PowerSupply_LM5050_TIDA00992 = (props: SubcircuitProps) => (
  <subcircuit
    width="42mm"
    height="30mm"
    schMaxTraceDistance="6mm"
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />
    <net name="VBATT" isPowerNet />
    <net name="V_OUT" />
    <net name="ENABLE" />
    <autoroutingphase name="C3 decoupling" phaseIndex={0} />

    <CSD19532Q5B
      name="Q1"
      internallyConnectedPins={[
        [1, 2, 3],
        [5, 6, 7, 8, 9],
      ]}
      schX={2.8}
      schY={4.05}
      pcbX={0}
      pcbY={8}
      pcbRotation={90}
      symbol={
        <symbol>
          <schematicpath
            points={[
              { x: -0.1, y: -0.42 },
              { x: -0.11, y: 0.05 },
            ]}
            strokeColor="#880000"
            strokeWidth={0.02}
          />
          <schematicpath
            points={[
              { x: 0.55, y: 0.3 },
              { x: 0.11, y: 0.3 },
            ]}
            strokeColor="#880000"
            strokeWidth={0.02}
          />
          <schematicpath
            points={[
              { x: -0.55, y: 0.31 },
              { x: -0.01, y: 0.31 },
            ]}
            strokeColor="#880000"
            strokeWidth={0.02}
          />
          <schematicpath
            points={[
              { x: 0.11, y: 0.09 },
              { x: 0.11, y: 0.31 },
            ]}
            strokeColor="#880000"
            strokeWidth={0.02}
          />
          <schematicpath
            points={[
              { x: 0.15, y: 0.09 },
              { x: 0.07, y: 0.09 },
            ]}
            strokeColor="#880000"
            strokeWidth={0.02}
          />
          <schematicpath
            points={[
              { x: -0.1, y: 0.09 },
              { x: -0.1, y: 0.31 },
            ]}
            strokeColor="#880000"
            strokeWidth={0.02}
          />
          <schematicpath
            points={[
              { x: -0.08, y: 0.09 },
              { x: -0.15, y: 0.09 },
            ]}
            strokeColor="#880000"
            strokeWidth={0.02}
          />
          <schematicpath
            points={[
              { x: 0.03, y: 0.09 },
              { x: -0.04, y: 0.09 },
            ]}
            strokeColor="#880000"
            strokeWidth={0.02}
          />
          <schematicpath
            points={[
              { x: -0.04, y: 0.27 },
              { x: 0.03, y: 0.27 },
              { x: 0, y: 0.2 },
              { x: -0.04, y: 0.27 },
            ]}
            strokeColor="#880000"
            strokeWidth={0.02}
            fillColor="#880000"
            isFilled
          />
          <schematicpath
            points={[
              { x: 0, y: 0.09 },
              { x: -0.01, y: 0.31 },
            ]}
            strokeColor="#880000"
            strokeWidth={0.02}
          />
          <schematicpath
            points={[
              { x: 0.11, y: 0.05 },
              { x: -0.11, y: 0.05 },
            ]}
            strokeColor="#880000"
            strokeWidth={0.02}
          />
          <port
            name="pin1"
            pinNumber={1}
            aliases={["S3"]}
            direction="left"
            schX={-0.55}
            schY={0.31}
            schStemLength={0}
          />
          <port
            name="pin2"
            pinNumber={2}
            aliases={["S2"]}
            direction="left"
            schX={-0.55}
            schY={0.31}
            schStemLength={0}
          />
          <port
            name="pin3"
            pinNumber={3}
            aliases={["S1"]}
            direction="left"
            schX={-0.55}
            schY={0.31}
            schStemLength={0}
          />
          <port
            name="pin4"
            pinNumber={4}
            aliases={["G"]}
            direction="down"
            schX={-0.1}
            schY={-0.42}
            schStemLength={0}
          />
          <port
            name="pin5"
            pinNumber={5}
            aliases={["D5"]}
            direction="right"
            schX={0.55}
            schY={0.3}
            schStemLength={0}
          />
          <port
            name="pin6"
            pinNumber={6}
            aliases={["D4"]}
            direction="right"
            schX={0.55}
            schY={0.3}
            schStemLength={0}
          />
          <port
            name="pin7"
            pinNumber={7}
            aliases={["D3"]}
            direction="right"
            schX={0.55}
            schY={0.3}
            schStemLength={0}
          />
          <port
            name="pin8"
            pinNumber={8}
            aliases={["D2"]}
            direction="right"
            schX={0.55}
            schY={0.3}
            schStemLength={0}
          />
          <port
            name="pin9"
            pinNumber={9}
            aliases={["D1"]}
            direction="right"
            schX={0.55}
            schY={0.3}
            schStemLength={0}
          />
        </symbol>
      }
    />
    <schematictext schX={3.28} schY={4.45} text="Q1" fontSize={0.18} />
    <schematictext schX={2.8} schY={4.8} text="100V" fontSize={0.22} />
    <schematictext schX={1.9} schY={3.82} text="1,2,3" fontSize={0.18} />
    <schematictext schX={3.63} schY={3.82} text="7,8" fontSize={0.18} />
    <schematictext schX={3.18} schY={3.5} text="5,6," fontSize={0.18} />

    <LM5050Q1MKX_1_NOPB
      name="U1"
      schX={2.4}
      schY={1.45}
      pcbX={0}
      pcbY={1.5}
      schWidth={2.3}
      schHeight={2.7}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 4, 3],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [5, 6, 2],
        },
      }}
      schPinStyle={{
        pin1: { marginBottom: 0.55 },
        pin4: { marginBottom: 0.55 },
        pin5: { marginBottom: 0.55 },
        pin6: { marginBottom: 0.55 },
      }}
    />

    <NTR5198NLT1G
      name="Q2"
      schX={2.75}
      schY={-2.9}
      pcbX={5.4}
      pcbY={0.869}
      pcbRotation={90}
    />
    <schematictext schX={3.38} schY={-2.98} text="60V" fontSize={0.22} />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="1206"
      manufacturerPartNumber="VJ1206Y104KBBAT4X"
      schX={-8.1}
      schY={2.95}
      pcbX={-13}
      pcbY={6}
      pcbRotation={90}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="1206"
      manufacturerPartNumber="VJ1206Y104KBBAT4X"
      schX={-7.15}
      schY={1.8}
      pcbX={-13}
      pcbY={-6}
      pcbRotation={90}
      schOrientation="horizontal"
    />
    <capacitor
      name="C3"
      capacitance="0.1uF"
      footprint="0603"
      manufacturerPartNumber="GRM188R72A104KA35J"
      maxDecouplingTraceLength="2mm"
      schX={-3.2}
      schY={0.75}
      pcbX={2.915}
      pcbY={1.025}
      pcbRotation={90}
      schOrientation="vertical"
    />
    <capacitor
      name="C4"
      capacitance="4.7uF"
      footprint="1210"
      manufacturerPartNumber="GRM32ER71K475KE14L"
      schX={7.4}
      schY={0.4}
      pcbX={13}
      pcbY={1}
      pcbRotation={90}
      schOrientation="vertical"
    />

    <diode
      name="D1"
      tvs
      symbol={bidirectionalTvsSymbol}
      footprint="smc"
      manufacturerPartNumber="1.5SMC33CA-E3/57T"
      schX={-5.55}
      schY={2.25}
      pcbX={-9}
      pcbY={0}
      schOrientation="vertical"
    />
    <diode
      name="D2"
      symbolName="schottky_diode"
      footprint="sod323"
      manufacturerPartNumber="BAS 170W E6327"
      schX={-2.45}
      schY={-0.05}
      pcbX={-8.5}
      pcbY={-4.5}
      schOrientation="neg_top"
    />
    <diode
      name="D4"
      symbolName="schottky_diode"
      footprint="sod323"
      manufacturerPartNumber="PMEG6010CEJ,115"
      schX={2.75}
      schY={-1.65}
      pcbX={1}
      pcbY={-4.5}
      schOrientation="pos_top"
    />
    <diode
      name="D5"
      symbolName="zener_diode"
      footprint="sod323"
      manufacturerPartNumber="BZT52C9V1S-7-F"
      schX={1.6}
      schY={-3.85}
      pcbX={-2.5}
      pcbY={-9.7}
      schOrientation="neg_top"
    />

    <schematictext
      schX={-5.12}
      schY={2.15}
      text="28.2V"
      fontSize={0.22}
      anchor="center_left"
    />
    <schematictext
      schX={-2.02}
      schY={-0.13}
      text="70V"
      fontSize={0.22}
      anchor="center_left"
    />
    <schematictext
      schX={3.18}
      schY={-1.73}
      text="60V"
      fontSize={0.22}
      anchor="center_left"
    />
    <schematictext
      schX={1.15}
      schY={-3.75}
      text="9.1V"
      fontSize={0.22}
      anchor="center_right"
    />

    <resistor
      name="R1"
      resistance="10kohm"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0FKED"
      schX={6.0}
      schY={1.75}
      pcbX={8.8}
      pcbY={3}
      schOrientation="vertical"
    />
    <resistor
      name="R3"
      resistance="20kohm"
      footprint="0603"
      manufacturerPartNumber="RG1608P-203-B-T5"
      schX={-3.55}
      schY={-2.9}
      pcbX={-7}
      pcbY={-10.5}
    />
    <resistor
      name="R4"
      resistance="10kohm"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0FKED"
      schX={-2.15}
      schY={-3.6}
      pcbX={-5.5}
      pcbY={-8}
      schOrientation="vertical"
    />

    {/* Input and output rails exposed at the functional-block boundaries. */}
    <trace
      name="VBATT_RAIL"
      path={[
        ".Q1 > .pin1",
        ".C1 > .pin1",
        ".D1 > .cathode",
        ".U1 > .IN",
        ".D2 > .cathode",
        "net.VBATT",
      ]}
      schDisplayLabel="VBATT"
    />
    <trace
      name="V_OUT_RAIL"
      path={[
        ".Q1 > .pin5",
        ".U1 > .OUT",
        ".R1 > .pin2",
        ".C4 > .pin1",
        "net.V_OUT",
      ]}
      schDisplayLabel="V_OUT"
    />

    {/* Input transient protection and series capacitors. */}
    <trace from=".C1 > .pin2" to=".C2 > .pin1" />
    <trace
      name="INPUT_GROUND"
      path={[".C2 > .pin2", ".D1 > .anode", "net.GND"]}
      schDisplayLabel="GND"
    />

    {/* VS bypass and MOSFET gate drive. */}
    <trace
      path={[".U1 > .VS", ".C3 > .pin1", ".R1 > .pin1"]}
      routingPhaseIndex={0}
    />
    <trace from=".U1 > .GATE" to=".Q1 > .pin4" />

    {/* Switched controller-ground network. */}
    <trace path={[".D2 > .anode", ".U1 > .GND", ".D4 > .anode"]} />
    <trace from=".D4 > .cathode" to=".Q2 > .D" />

    {/* Functional enable input and Q2 gate clamp. */}
    <trace from=".R3 > .pin1" to="net.ENABLE" schDisplayLabel="ENABLE" />
    <trace
      path={[".R3 > .pin2", ".Q2 > .G", ".R4 > .pin1", ".D5 > .cathode"]}
    />
    <trace
      path={[
        ".R4 > .pin2",
        ".D5 > .anode",
        ".Q2 > .S",
        ".C4 > .pin2",
        "net.GND",
      ]}
      schDisplayLabel="GND"
    />
    <trace
      from=".C3 > .pin2"
      to="net.GND"
      schDisplayLabel="GND"
      routingPhaseIndex={0}
    />
  </subcircuit>
);

export default PowerSupply_LM5050_TIDA00992;
