import type { ChipProps, SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { INA240A1QDRQ1 } from "../chips/INA240A1QDRQ1.circuit.tsx";
import { LMV7275IDCKRQ1 } from "../chips/LMV7275IDCKRQ1.circuit.tsx";
import {
  TLV2316QDGKRQ1,
  TLV2316QDGKRQ1UnitA,
  TLV2316QDGKRQ1UnitB,
} from "../chips/TLV2316QDGKRQ1.circuit.tsx";
import {
  type Tida01421AltiumOrigin,
  tida01421Delta,
  tida01421Position,
} from "../tida01421-coordinates.ts";

export const TIDA01421_SIGNAL_CHAIN_ORIGIN: Tida01421AltiumOrigin = {
  x: 820,
  y: 840,
};

const p = (x: number, y: number) =>
  tida01421Position(x, y, TIDA01421_SIGNAL_CHAIN_ORIGIN);

const motorConnectorPinLabels = {
  pin1: "V_PLUS",
  pin2: "V_MINUS",
} as const;

/** J1, reproduced from the mirrored 1727010 source symbol. */
const MotorCurrentConnector = (
  props: ChipProps<typeof motorConnectorPinLabels>,
) => (
  <chip
    manufacturerPartNumber="1727010"
    footprint="kicad:TerminalBlock_Phoenix/TerminalBlock_Phoenix_MKDS-1,5-2_1x02_P3.81mm_Horizontal"
    pinLabels={motorConnectorPinLabels}
    symbol={
      <symbol>
        <schematicrect
          schX={0}
          schY={tida01421Delta(5)}
          width={tida01421Delta(20)}
          height={tida01421Delta(30)}
          strokeWidth={0.025}
        />
        <port
          name="V_PLUS"
          aliases={["V+", "pin1"]}
          pinNumber={1}
          schX={tida01421Delta(30)}
          schY={tida01421Delta(10)}
          direction="right"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="V_MINUS"
          aliases={["V-", "pin2"]}
          pinNumber={2}
          schX={tida01421Delta(30)}
          schY={0}
          direction="right"
          schStemLength={tida01421Delta(20)}
        />
      </symbol>
    }
    {...props}
  />
);

/**
 * TIDA-01421 sheet-2 signal chain relevant to sensorless window pinch sensing.
 *
 * This is the contiguous upper chain from J1 through TIMER, plus the ADCMOTOR
 * branch. It intentionally excludes the battery monitor, LaunchPad headers,
 * switches, reverse-polarity input, and other EVM-only circuitry.
 *
 * Component locations are direct Altium coordinates transformed by
 * tida01421Position. Native schematic traces are autorouted; no decorative
 * line is used as an electrical connection.
 */
export const PinchDetectionSignalChain_TIDA01421 = (props: SubcircuitProps) => (
  <subcircuit
    schAutoLayoutEnabled={false}
    schMaxTraceDistance="30mm"
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />
    <net name="V_PLUS" />
    <net name="V_MINUS" />
    <net name="V5" isPowerNet />
    <net name="V3_3" isPowerNet />
    <net name="BIAS" />
    <net name="ADCMOTOR" />
    <net name="TIMER" />

    {/* Current-shunt input, common-mode filter, and INA240A1-Q1 stage. */}
    <MotorCurrentConnector name="J1" {...p(180, 890)} />
    <resistor
      name="R6"
      resistance="0.003ohm"
      footprint="2512"
      schOrientation="pos_bottom"
      {...p(320, 890)}
    />
    <resistor name="R5" resistance="10ohm" footprint="0805" {...p(370, 910)} />
    <resistor name="R7" resistance="10ohm" footprint="0805" {...p(370, 870)} />
    <capacitor
      name="C8"
      capacitance="2.2uF"
      footprint="0805"
      schOrientation="vertical"
      {...p(400, 890)}
    />
    <INA240A1QDRQ1 name="U2" noConnect={["NC"]} {...p(520, 900)} />
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0603"
      schOrientation="vertical"
      {...p(520, 1000)}
    />
    <capacitor
      name="C4"
      capacitance="0.1uF"
      footprint="0603"
      schOrientation="vertical"
      {...p(550, 1000)}
    />

    <trace from="J1.V_PLUS" to="R5.pin1" />
    <trace from="R6.pin2" to="R5.pin1" />
    <trace from="J1.V_MINUS" to="R7.pin1" />
    <trace from="R6.pin1" to="R7.pin1" />
    <trace from="R5.pin2" to="C8.pin1" />
    <trace from="C8.pin1" to="U2.IN_PLUS" />
    <trace from="R7.pin2" to="C8.pin2" />
    <trace from="C8.pin2" to="U2.IN_MINUS" />
    <trace from="U2.REF2" to="U2.GND" />
    <trace from="C3.pin1" to="C4.pin1" />
    <trace from="C3.pin2" to="C4.pin2" />

    {/* tscircuit net identifiers reject '+' and '-'. The source V+ and V-
        labels are therefore normalized to V_PLUS and V_MINUS; the J1 aliases
        retain the exact Altium labels. */}
    <trace from="R5.pin1" to="net.V_PLUS" />
    <trace from="R7.pin1" to="net.V_MINUS" />
    <trace from="U2.VS" to="net.V5" />
    <trace from="U2.REF1" to="net.V5" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="C3.pin1" to="net.V5" />
    <trace from="C3.pin2" to="net.GND" />

    {/* ADCMOTOR is the source design's scaled DC-current interface. */}
    <resistor
      name="R12"
      resistance="33.2kohm"
      footprint="0603"
      {...p(670, 670)}
    />
    <resistor
      name="R20"
      resistance="33.2kohm"
      footprint="0603"
      schOrientation="pos_bottom"
      {...p(710, 650)}
    />
    <capacitor
      name="C10"
      capacitance="0.1uF"
      footprint="0603"
      schOrientation="vertical"
      {...p(750, 640)}
    />
    <trace from="U2.OUT" to="R12.pin1" />
    <trace from="R12.pin2" to="R20.pin2" />
    <trace from="R20.pin2" to="C10.pin1" />
    <trace from="R20.pin1" to="C10.pin2" />
    <trace from="R12.pin2" to="net.ADCMOTOR" />
    <trace from="C10.pin2" to="net.GND" />

    {/* TLV2316-Q1 active band-pass filter and DC-bias rejection stages. */}
    <capacitor
      name="C7"
      capacitance="0.068uF"
      footprint="0603"
      schOrientation="pos_right"
      {...p(660, 920)}
    />
    <resistor name="R3" resistance="30kohm" footprint="0603" {...p(720, 920)} />
    {/* Native TSX does not yet bind two independently placed schematic units
        to one physical chip. U3 is the exact hidden package/BOM record; the
        two do-not-place units retain the source's centers and pin numbers. */}
    <TLV2316QDGKRQ1 name="U3" noSchematicRepresentation />
    <TLV2316QDGKRQ1UnitA
      name="U3A"
      displayName="U3A"
      doNotPlace
      {...p(790, 910)}
    />
    <TLV2316QDGKRQ1UnitB
      name="U3B"
      displayName="U3B"
      doNotPlace
      {...p(1080, 900)}
    />
    <trace from="U3.OUT_A" to="U3A.OUT" />
    <trace from="U3.IN_MINUS_A" to="U3A.IN_MINUS" />
    <trace from="U3.IN_PLUS_A" to="U3A.IN_PLUS" />
    <trace from="U3.V_MINUS" to="U3A.V_MINUS" />
    <trace from="U3.IN_PLUS_B" to="U3B.IN_PLUS" />
    <trace from="U3.IN_MINUS_B" to="U3B.IN_MINUS" />
    <trace from="U3.OUT_B" to="U3B.OUT" />
    <trace from="U3.V_PLUS" to="U3A.V_PLUS" />
    <schematictext
      text="TLV2316QDGKRQ1"
      fontSize={0.11}
      anchor="left"
      {...p(800, 885)}
    />
    <capacitor
      name="C1"
      capacitance="3300pF"
      footprint="0603"
      schOrientation="pos_right"
      {...p(780, 1040)}
    />
    <resistor
      name="R1"
      resistance="75kohm"
      footprint="0603"
      {...p(790, 1000)}
    />
    <capacitor
      name="C5"
      capacitance="1uF"
      footprint="0603"
      schOrientation="vertical"
      {...p(860, 1000)}
    />
    <capacitor
      name="C6"
      capacitance="0.1uF"
      footprint="0603"
      schOrientation="vertical"
      {...p(890, 1000)}
    />
    <resistor
      name="R11"
      resistance="10kohm"
      footprint="0603"
      schOrientation="pos_bottom"
      {...p(670, 840)}
    />
    <resistor
      name="R17"
      resistance="10kohm"
      footprint="0603"
      schOrientation="pos_bottom"
      {...p(670, 790)}
    />
    <resistor name="R8" resistance="20kohm" footprint="0603" {...p(930, 910)} />
    <resistor name="R9" resistance="20kohm" footprint="0603" {...p(930, 890)} />
    <capacitor
      name="C9"
      capacitance="1500pF"
      footprint="0603"
      schOrientation="vertical"
      {...p(980, 860)}
    />
    <resistor
      name="R10"
      resistance="1.1Mohm"
      footprint="0603"
      schOrientation="pos_bottom"
      {...p(1010, 860)}
    />
    <resistor
      name="R2"
      resistance="1.1Mohm"
      footprint="0603"
      {...p(1050, 980)}
    />

    <trace from="U2.OUT" to="C7.pin2" />
    <trace from="C7.pin1" to="R3.pin1" />
    <trace from="R3.pin2" to="U3A.IN_MINUS" />
    <trace from="R3.pin2" to="R1.pin1" />
    <trace from="R3.pin2" to="C1.pin2" />
    <trace from="U3A.OUT" to="R1.pin2" />
    <trace from="U3A.OUT" to="C1.pin1" />
    <trace from="U3A.OUT" to="R8.pin1" />
    <trace from="U3A.OUT" to="R9.pin1" />
    <trace from="R11.pin1" to="R17.pin2" />
    <trace from="R11.pin1" to="U3A.IN_PLUS" />
    <trace from="R8.pin2" to="U3B.IN_MINUS" />
    <trace from="R8.pin2" to="R2.pin1" />
    <trace from="R9.pin2" to="U3B.IN_PLUS" />
    <trace from="R9.pin2" to="C9.pin1" />
    <trace from="R9.pin2" to="R10.pin2" />
    <trace from="R2.pin2" to="U3B.OUT" />
    <trace from="C5.pin1" to="C6.pin1" />
    <trace from="C5.pin2" to="C6.pin2" />

    <trace from="R11.pin2" to="net.V5" />
    <trace from="R17.pin1" to="net.GND" />
    <trace from="R11.pin1" to="net.BIAS" />
    <trace from="R10.pin1" to="net.BIAS" />
    <trace from="U3A.V_PLUS" to="net.V5" />
    <trace from="U3A.V_MINUS" to="net.GND" />
    <trace from="U3B.V_PLUS" to="net.V5" />
    <trace from="U3B.V_MINUS" to="net.GND" />
    <trace from="C5.pin1" to="net.V5" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C9.pin2" to="net.GND" />

    {/* LMV7275-Q1 inverting comparator, hysteresis, and open-drain pull-up. */}
    <LMV7275IDCKRQ1 name="U1" {...p(1280, 910)} />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0603"
      schOrientation="vertical"
      {...p(1280, 1010)}
    />
    <resistor
      name="R15"
      resistance="95.3kohm"
      footprint="0603"
      schOrientation="pos_bottom"
      {...p(1200, 830)}
    />
    <resistor
      name="R18"
      resistance="100kohm"
      footprint="0603"
      schOrientation="pos_bottom"
      {...p(1200, 780)}
    />
    <resistor
      name="R16"
      resistance="806kohm"
      footprint="0603"
      {...p(1300, 800)}
    />
    <resistor
      name="R4"
      resistance="10kohm"
      footprint="0603"
      schOrientation="pos_bottom"
      {...p(1400, 910)}
    />
    <capacitor
      name="C15"
      capacitance="0.1uF"
      footprint="0603"
      schOrientation="vertical"
      doNotPlace
      {...p(1460, 870)}
    />

    <trace from="U3B.OUT" to="U1.IN_MINUS" />
    <trace from="R15.pin1" to="R18.pin2" />
    <trace from="R15.pin1" to="U1.IN_PLUS" />
    <trace from="R15.pin1" to="R16.pin1" />
    <trace from="U1.OUT" to="R16.pin2" />
    <trace from="U1.OUT" to="R4.pin1" />
    <trace from="U1.OUT" to="C15.pin1" />
    <trace from="C2.pin2" to="U1.V_MINUS" />

    <trace from="C2.pin1" to="net.V5" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="U1.V_PLUS" to="net.V5" />
    <trace from="U1.V_MINUS" to="net.GND" />
    <trace from="R15.pin2" to="net.V5" />
    <trace from="R18.pin1" to="net.GND" />
    <trace from="R4.pin2" to="net.V3_3" />
    <trace from="U1.OUT" to="net.TIMER" />
    <trace from="C15.pin2" to="net.GND" />

    <port name="V_PLUS" direction="left" connectsTo="J1.V_PLUS" />
    <port name="V_MINUS" direction="left" connectsTo="J1.V_MINUS" />
    <port name="V5" direction="left" connectsTo="U2.VS" />
    <port name="V3_3" direction="left" connectsTo="R4.pin2" />
    <port name="GND" direction="left" connectsTo="U2.GND" />
    <port name="ADCMOTOR" direction="right" connectsTo="R12.pin2" />
    <port name="TIMER" direction="right" connectsTo="U1.OUT" />
  </subcircuit>
);

export default PinchDetectionSignalChain_TIDA01421;
