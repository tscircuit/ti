import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TCAN1042HGVDRBQ1 } from "../chips/TCAN1042HGVDRBQ1.circuit.tsx";
import { TPD2E007DCKR } from "../chips/TPD2E007DCKR.circuit.tsx";

/**
 * TIDA-01428 Altium component origins, converted from mil to mm and cropped
 * around the communication-interface cluster. Relative positions, rotations,
 * and assembly sides are unchanged from the supplied PcbDoc.
 */
const pcbPlacement = {
  R21: { pcbX: -14.414, pcbY: -0.191, pcbRotation: 0 },
  R22: { pcbX: -9.461, pcbY: 2.349, pcbRotation: 0 },
  C28: { pcbX: -12.128, pcbY: -0.953, pcbRotation: 90 },
  C29: { pcbX: -6.794, pcbY: 2.349, pcbRotation: 0 },
  U6: { pcbX: -8.953, pcbY: -0.953, pcbRotation: 0 },
  L7: { pcbX: -2.8852, pcbY: -0.9883, pcbRotation: 90 },
  R23: { pcbX: 3.366, pcbY: -2.35, pcbRotation: 180 },
  R24: { pcbX: 3.366, pcbY: 0.6281, pcbRotation: 0 },
  C27: { pcbX: 7.43, pcbY: -0.826, pcbRotation: 0 },
  U7: { pcbX: 11.1423, pcbY: -0.826, pcbRotation: 180 },
  C26: { pcbX: 14.415, pcbY: -2.223, pcbRotation: 90 },
  C30: { pcbX: 14.415, pcbY: 0.571, pcbRotation: 270 },
} as const;

/**
 * Locations where the reference-board copper leaves this cropped subcircuit.
 * These are transformed directly from the TIDA-01428 Altium track crossings.
 */
const pcbBreakout = {
  V5p0: { pcbX: -17, pcbY: -0.569 },
  V3p3: { pcbX: -17, pcbY: -4.255 },
  CAN_RXD: { pcbX: -17, pcbY: 3.049 },
  CAN_TXD: { pcbX: -17, pcbY: 3.503 },
  CAN_STB: { pcbX: -17, pcbY: 3.957 },
  CANH: { pcbX: 17, pcbY: -0.445 },
  CANL: { pcbX: 17, pcbY: -1.377 },
} as const;

/**
 * SIMDAD_1812 copper from Altium: 4.05 x 2.30 mm pad pitch with
 * 1.85 x 1.70 mm rectangular pads.
 */
const CommonModeChoke_B82789C0104H001 = () => (
  <chip
    name="L7"
    manufacturerPartNumber="B82789C0104H001"
    pinLabels={{
      pin1: ["1"],
      pin2: ["2"],
      pin3: ["3"],
      pin4: ["4"],
    }}
    symbol={
      <symbol>
        <schematicline
          x1={-0.8}
          y1={0.6}
          x2={-0.8}
          y2={0.16}
          strokeWidth={0.04}
        />
        <schematicline
          x1={-0.8}
          y1={0.16}
          x2={-0.36}
          y2={0.16}
          strokeWidth={0.04}
        />
        <schematicpath
          svgPath="M -0.36 0.16 C -0.30 -0.02 -0.18 -0.02 -0.12 0.16 C -0.06 -0.02 0.06 -0.02 0.12 0.16 C 0.18 -0.02 0.30 -0.02 0.36 0.16"
          strokeWidth={0.04}
        />
        <schematicline
          x1={0.36}
          y1={0.16}
          x2={0.8}
          y2={0.16}
          strokeWidth={0.04}
        />
        <schematicline
          x1={0.8}
          y1={0.16}
          x2={0.8}
          y2={1.2}
          strokeWidth={0.04}
        />

        <schematicline
          x1={-0.8}
          y1={-0.6}
          x2={-0.8}
          y2={-0.16}
          strokeWidth={0.04}
        />
        <schematicline
          x1={-0.8}
          y1={-0.16}
          x2={-0.36}
          y2={-0.16}
          strokeWidth={0.04}
        />
        <schematicpath
          svgPath="M -0.36 -0.16 C -0.30 0.02 -0.18 0.02 -0.12 -0.16 C -0.06 0.02 0.06 0.02 0.12 -0.16 C 0.18 0.02 0.30 0.02 0.36 -0.16"
          strokeWidth={0.04}
        />
        <schematicline
          x1={0.36}
          y1={-0.16}
          x2={0.8}
          y2={-0.16}
          strokeWidth={0.04}
        />
        <schematicline
          x1={0.8}
          y1={-0.16}
          x2={0.8}
          y2={-1.2}
          strokeWidth={0.04}
        />

        <schematiccircle
          center={{ x: -0.28, y: 0.38 }}
          radius={0.045}
          isFilled
          fillColor="#800000"
        />
        <schematiccircle
          center={{ x: -0.28, y: -0.38 }}
          radius={0.045}
          isFilled
          fillColor="#800000"
        />
        <schematictext
          text="L7"
          schX={1.02}
          schY={0.13}
          fontSize={0.2}
          anchor="left"
        />
        <schematictext
          text="100uH"
          schX={1.02}
          schY={-0.13}
          fontSize={0.2}
          anchor="left"
        />

        <port
          name="pin4"
          aliases={["4"]}
          pinNumber={4}
          direction="left"
          schX={-0.8}
          schY={0.6}
          schStemLength={0}
        />
        <port
          name="pin3"
          aliases={["3"]}
          pinNumber={3}
          direction="right"
          schX={0.8}
          schY={1.2}
          schStemLength={0}
        />
        <port
          name="pin1"
          aliases={["1"]}
          pinNumber={1}
          direction="left"
          schX={-0.8}
          schY={-0.6}
          schStemLength={0}
        />
        <port
          name="pin2"
          aliases={["2"]}
          pinNumber={2}
          direction="right"
          schX={0.8}
          schY={-1.2}
          schStemLength={0}
        />
      </symbol>
    }
    schX={3}
    schY={0.3}
    showPinAliases={false}
    pcbX={pcbPlacement.L7.pcbX}
    pcbY={pcbPlacement.L7.pcbY}
    pcbRotation={pcbPlacement.L7.pcbRotation}
    footprint="crystal4_px4.05mm_py2.3mm_pw1.85mm_ph1.7mm_pin1location(leftside,top)"
  />
);

const DnpEsdProtector = () => (
  <TPD2E007DCKR
    name="U7"
    schX={5.4}
    schY={0}
    pcbX={pcbPlacement.U7.pcbX}
    pcbY={pcbPlacement.U7.pcbY}
    pcbRotation={pcbPlacement.U7.pcbRotation}
    doNotPlace
    footprint="sot323_p1.125mm_pw0.4mm_pl0.85mm"
    symbol={
      <symbol>
        <schematicrect
          schX={0}
          schY={0}
          width={1.2}
          height={0.75}
          color="#aaaaaa"
          fillColor="#bdbdbd"
          isFilled
          strokeWidth={0.035}
        />
        <schematictext
          text="DNP"
          schX={0}
          schY={0}
          fontSize={0.26}
          color="#333333"
          anchor="center"
        />
        <schematictext
          text="U7"
          schX={0}
          schY={0.58}
          fontSize={0.19}
          color="#aaaaaa"
          anchor="center"
        />
        <schematictext
          text="TPD2E007DCKR"
          schX={0}
          schY={-0.58}
          fontSize={0.17}
          color="#aaaaaa"
          anchor="center"
        />
        <port
          name="pin2"
          aliases={["2"]}
          pinNumber={2}
          direction="left"
          schX={-0.8}
          schY={0.2}
          schStemLength={0.2}
        />
        <port
          name="pin1"
          aliases={["1"]}
          pinNumber={1}
          direction="left"
          schX={-0.8}
          schY={-0.2}
          schStemLength={0.2}
        />
        <port
          name="pin3"
          aliases={["3"]}
          pinNumber={3}
          direction="right"
          schX={0.8}
          schY={0}
          schStemLength={0.2}
        />
      </symbol>
    }
  />
);

/**
 * Communication-interface section extracted from TIDA-01428 sheet 3.
 *
 * Scope: the complete blue CAN-transceiver subsection only. The buck/boost
 * supplies, C2000 MCU, external D-sub connector, and demo load are outside the
 * Seat Position Module's Communication Interface block and are intentionally
 * represented as boundary nets instead of copied circuitry.
 */
export const CommunicationInterface_TCAN1042_TIDA01428 = (
  props: SubcircuitProps,
) => (
  <subcircuit
    width="35mm"
    height="10mm"
    minTraceWidth="0.12mm"
    schMaxTraceDistance="6mm"
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />
    <net name="V5p0" isPowerNet />
    <net name="V3p3" isPowerNet />

    <group name="ReferenceCropBreakouts">
      <breakoutpoint connection=".R21 > .pin1" {...pcbBreakout.V5p0} />
      <breakoutpoint connection=".R22 > .pin1" {...pcbBreakout.V3p3} />
      <breakoutpoint connection=".U6 > .RXD" {...pcbBreakout.CAN_RXD} />
      <breakoutpoint connection=".U6 > .TXD" {...pcbBreakout.CAN_TXD} />
      <breakoutpoint connection=".U6 > .STB" {...pcbBreakout.CAN_STB} />
      <breakoutpoint connection=".C26 > .pin1" {...pcbBreakout.CANH} />
      <breakoutpoint connection=".C30 > .pin1" {...pcbBreakout.CANL} />
    </group>

    <TCAN1042HGVDRBQ1
      name="U6"
      manufacturerPartNumber="TCAN1042HGVDRBQ1"
      schX={0}
      schY={0}
      schWidth={2.8}
      schHeight={2.4}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [3, 5, 1, 8, 4],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [7, 6, 2, 9],
        },
      }}
      schPinStyle={{
        pin3: { marginBottom: 0.2 },
        pin5: { marginBottom: 0.2 },
        pin1: { marginBottom: 0.2 },
        pin8: { marginBottom: 0.2 },
        pin6: { marginTop: 1.0 },
        pin2: { marginTop: 0.2 },
      }}
      footprint="dfn8_w3.4mm_h3mm_p0.65mm_pw0.3mm_pl0.6mm_thermalpad1.6mmx2.4mm"
      {...pcbPlacement.U6}
    />

    <resistor
      name="R21"
      resistance="0ohm"
      manufacturerPartNumber="ERJ-3GEY0R00V"
      footprint="res_p1.524mm_pw0.889mm_ph0.508mm_w1.6mm_h0.8mm"
      schX={-4.7}
      schY={1.5}
      schOrientation="vertical"
      {...pcbPlacement.R21}
    />
    <capacitor
      name="C28"
      capacitance="0.1uF"
      manufacturerPartNumber="06033C104JAT2A"
      footprint="cap_p1.524mm_pw0.889mm_ph0.508mm_w1.6mm_h0.8mm"
      schX={-4.7}
      schY={-0.45}
      schOrientation="vertical"
      {...pcbPlacement.C28}
    />
    <trace from=".R21 > .pin1" to="net.V5p0" schDisplayLabel="V5p0" />
    <trace from=".R21 > .pin2" to=".U6 > .VCC" maxLength="6mm" />
    <trace from=".C28 > .pin1" to=".U6 > .VCC" maxLength="20mm" />
    <trace
      from=".C28 > .pin2"
      to="net.GND"
      schDisplayLabel="GND"
      maxLength="20mm"
    />

    <resistor
      name="R22"
      resistance="0ohm"
      manufacturerPartNumber="ERJ-3GEY0R00V"
      footprint="res_p1.524mm_pw0.889mm_ph0.508mm_w1.6mm_h0.8mm"
      schX={-3.7}
      schY={1.5}
      schOrientation="vertical"
      {...pcbPlacement.R22}
    />
    <capacitor
      name="C29"
      capacitance="0.1uF"
      manufacturerPartNumber="06033C104JAT2A"
      footprint="cap_p1.524mm_pw0.889mm_ph0.508mm_w1.6mm_h0.8mm"
      schX={-3.7}
      schY={-0.45}
      schOrientation="vertical"
      {...pcbPlacement.C29}
    />
    <trace from=".R22 > .pin1" to="net.V3p3" schDisplayLabel="V3p3" />
    <trace from=".R22 > .pin2" to=".U6 > .VIO" maxLength="6mm" />
    <trace from=".C29 > .pin1" to=".U6 > .VIO" maxLength="20mm" />
    <trace
      from=".C29 > .pin2"
      to="net.GND"
      schDisplayLabel="GND"
      maxLength="20mm"
    />

    <trace
      name="CAN_TXD_BOUNDARY"
      from=".U6 > .TXD"
      to="net.CAN_TXD"
      schDisplayLabel="CAN_TXD"
    />
    <trace
      name="CAN_STB_BOUNDARY"
      from=".U6 > .STB"
      to="net.CAN_STB"
      schDisplayLabel="CAN_STB"
    />
    <trace
      name="CAN_RXD_BOUNDARY"
      from=".U6 > .RXD"
      to="net.CAN_RXD"
      schDisplayLabel="CAN_RXD"
    />

    <CommonModeChoke_B82789C0104H001 />
    <trace from=".U6 > .CANH" to=".L7 > .pin4" />
    <trace from=".U6 > .CANL" to=".L7 > .pin1" />

    <DnpEsdProtector />
    <trace from=".U7 > .pin3" to="net.GND" schDisplayLabel="GND" />

    <resistor
      name="R23"
      resistance="60.4ohm"
      manufacturerPartNumber="CRCW120660R4FKEA"
      footprint="res_p2.9mm_pw1.85mm_ph1.3mm_w3.2mm_h1.6mm"
      schX={7.8}
      schY={1.2}
      schOrientation="vertical"
      {...pcbPlacement.R23}
    />
    <resistor
      name="R24"
      resistance="60.4ohm"
      manufacturerPartNumber="CRCW120660R4FKEA"
      footprint="res_p2.9mm_pw1.85mm_ph1.3mm_w3.2mm_h1.6mm"
      schX={7.8}
      schY={-0.6}
      schOrientation="vertical"
      {...pcbPlacement.R24}
    />
    <capacitor
      name="C27"
      capacitance="4700pF"
      manufacturerPartNumber="GCM188R71H472KA37D"
      footprint="cap_p1.524mm_pw0.889mm_ph0.508mm_w1.6mm_h0.8mm"
      schX={6.9}
      schY={0.05}
      schOrientation="horizontal"
      {...pcbPlacement.C27}
    />
    <trace from=".R23 > .pin2" to=".R24 > .pin1" />
    <trace from=".C27 > .pin2" to=".R23 > .pin2" />
    <trace from=".C27 > .pin1" to="net.GND" schDisplayLabel="GND" />

    <capacitor
      name="C26"
      capacitance="56pF"
      manufacturerPartNumber="GRM1885C1H560JA01D"
      footprint="cap_p1.524mm_pw0.889mm_ph0.508mm_w1.6mm_h0.8mm"
      schX={8.8}
      schY={1.2}
      schOrientation="vertical"
      {...pcbPlacement.C26}
    />
    <trace from=".L7 > .pin3" to=".U7 > .pin2" />
    <trace from=".L7 > .pin3" to=".R23 > .pin1" />
    <trace from=".R23 > .pin1" to=".C26 > .pin1" />
    <trace
      name="CANH_BOUNDARY"
      from=".C26 > .pin1"
      to="net.CANH"
      schDisplayLabel="CANH"
    />
    <trace from=".C26 > .pin2" to="net.GND" schDisplayLabel="GND" />

    <capacitor
      name="C30"
      capacitance="56pF"
      manufacturerPartNumber="GRM1885C1H560JA01D"
      footprint="cap_p1.524mm_pw0.889mm_ph0.508mm_w1.6mm_h0.8mm"
      schX={8.8}
      schY={-1.2}
      schOrientation="vertical"
      {...pcbPlacement.C30}
    />
    <trace from=".L7 > .pin2" to=".U7 > .pin1" />
    <trace from=".L7 > .pin2" to=".R24 > .pin2" />
    <trace from=".R24 > .pin2" to=".C30 > .pin1" />
    <trace
      name="CANL_BOUNDARY"
      from=".C30 > .pin1"
      to="net.CANL"
      schDisplayLabel="CANL"
    />
    <trace from=".C30 > .pin2" to="net.GND" schDisplayLabel="GND" />

    <trace from=".U6 > .GND" to=".U6 > .PAD" />
    <trace from=".U6 > .PAD" to="net.GND" schDisplayLabel="GND" />

    <schematictext
      text={
        "Two series 0Ω resistors can be used in\nplace of common mode choke."
      }
      schX={3.4}
      schY={-1.75}
      fontSize={0.22}
      anchor="center"
    />
  </subcircuit>
);

export default CommunicationInterface_TCAN1042_TIDA01428;
