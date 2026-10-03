import type { ChipProps, SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { INA240A1QDRQ1 } from "../chips/INA240A1QDRQ1.circuit.tsx";
import { LMV7275IDCKRQ1 } from "../chips/LMV7275IDCKRQ1.circuit.tsx";
import { TLV2316QDGKRQ1 } from "../chips/TLV2316QDGKRQ1.circuit.tsx";
import {
  type Tida01421AltiumOrigin,
  tida01421Position,
} from "../tida01421-coordinates.ts";

type PinchDetectionSignalChainProps = SubcircuitProps & {
  renderLocalRailConnections?: boolean;
};

const withoutLocalRailConnectionProp = ({
  renderLocalRailConnections: _renderLocalRailConnections,
  ...subcircuitProps
}: PinchDetectionSignalChainProps): SubcircuitProps => subcircuitProps;

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

/** J1, using the native chip-box renderer with the source's right-side pins. */
const MotorCurrentConnector = (
  props: ChipProps<typeof motorConnectorPinLabels>,
) => (
  <chip
    manufacturerPartNumber="1727010"
    footprint="kicad:TerminalBlock_Phoenix/TerminalBlock_Phoenix_MKDS-1,5-2_1x02_P3.81mm_Horizontal"
    pinLabels={motorConnectorPinLabels}
    schWidth={0.8}
    schHeight={0.9}
    schPinArrangement={{
      rightSide: {
        direction: "top-to-bottom",
        pins: ["V_PLUS", "V_MINUS"],
      },
    }}
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
export const PinchDetectionSignalChain_INA240_TLV2316_LMV7275 = (
  props: PinchDetectionSignalChainProps,
) => (
  <subcircuit
    exposedNets={["V5", "V3_3", "GND", "ADCMOTOR", "TIMER"]}
    schAutoLayoutEnabled={false}
    schMaxTraceDistance="8mm"
    routingDisabled
    {...withoutLocalRailConnectionProp(props)}
  >
    <net name="V5" isPowerNet />
    {/* Net selectors reject periods, so V3.3 is normalized internally. The
        output trace still requests the source spelling as its display label. */}
    <net name="V3_3" isPowerNet />
    <net name="GND" isGroundNet />
    <net name="V_PLUS" isPowerNet />
    <net name="V_MINUS" isGroundNet />
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

    <trace
      name="V-PLUS-INPUT"
      path={["net.V_PLUS", "J1.V_PLUS", "R6.pin2", "R5.pin1"]}
      schDisplayLabel="V+"
    />
    <trace
      name="V-MINUS-INPUT"
      path={["net.V_MINUS", "J1.V_MINUS", "R6.pin1", "R7.pin1"]}
      schDisplayLabel="V-"
    />
    <trace from="R5.pin2" to="C8.pin1" />
    <trace from="C8.pin1" to="U2.IN_PLUS" />
    <trace from="R7.pin2" to="C8.pin2" />
    <trace from="C8.pin2" to="U2.IN_MINUS" />
    <trace from="U2.REF2" to="U2.GND" />
    <trace from="C3.pin1" to="C4.pin1" />
    <trace from="C3.pin2" to="C4.pin2" />

    {/* The source's V+ and V- spellings remain on the real traces through
        schDisplayLabel. The native source-net identifiers stay selector-safe
        so they can also carry the required power/ground metadata. */}
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
    <trace
      name="ADCMOTOR"
      from="R12.pin2"
      to="R20.pin2"
      schDisplayLabel="ADCMOTOR"
    />
    <trace from="R20.pin2" to="net.ADCMOTOR" />
    <trace from="R20.pin2" to="C10.pin1" />
    <trace from="R20.pin1" to="C10.pin2" />
    {/* TLV2316-Q1 active band-pass filter and DC-bias rejection stages. */}
    <capacitor
      name="C7"
      capacitance="0.068uF"
      footprint="0603"
      schOrientation="pos_right"
      {...p(660, 920)}
    />
    <resistor name="R3" resistance="30kohm" footprint="0603" {...p(720, 920)} />
    {/* Two published native symbol projections share the exact physical U3
        package. In the native symbol contract inp1 is the visible + port and
        inp2 is the visible - port; these connections map each one directly to
        the authoritative physical package pin. */}
    <TLV2316QDGKRQ1 name="U3" noSchematicRepresentation />
    <schematicsymbol
      name="U3A"
      displayName="U3A"
      chipRef=".U3"
      symbolName="opamp_with_power_right"
      connections={{
        inp1: "U3.IN_PLUS_A",
        inp2: "U3.IN_MINUS_A",
        out: "U3.OUT_A",
        "V+": "U3.V_PLUS",
        "V-": "U3.V_MINUS",
      }}
      {...p(790, 915.357143)}
    />
    <schematicsymbol
      name="U3B"
      displayName="U3B"
      chipRef=".U3"
      symbolName="opamp_with_power_right"
      connections={{
        inp1: "U3.IN_PLUS_B",
        inp2: "U3.IN_MINUS_B",
        out: "U3.OUT_B",
        "V+": "U3.V_PLUS",
        "V-": "U3.V_MINUS",
      }}
      {...p(1080, 910.357143)}
    />
    <schematictext
      text="TLV2316QDGKRQ1"
      fontSize={0.11}
      anchor="left"
      {...p(800, 900)}
    />
    <capacitor
      name="C1"
      capacitance="3300pF"
      footprint="0603"
      schOrientation="pos_right"
      {...p(790, 1040)}
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
    <resistor name="R8" resistance="20kohm" footprint="0603" {...p(930, 915)} />
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
    {/* Route to the visible native projections. Each projected pin is mapped
        above to its authoritative physical U3 package pin. */}
    <trace path={["R3.pin2", "U3A.pin2", "R1.pin1", "C1.pin2"]} />
    <trace path={["U3A.pin4", "R1.pin2", "C1.pin1", "R8.pin1", "R9.pin1"]} />
    <trace from="R11.pin1" to="R17.pin2" />
    <trace from="R11.pin1" to="U3A.pin1" />
    <trace path={["R8.pin2", "U3B.pin2", "R2.pin1"]} />
    <trace path={["R9.pin2", "U3B.pin1", "C9.pin1", "R10.pin2"]} />
    <trace from="R2.pin2" to="U3B.pin4" />
    <trace from="U3B.pin4" to="U1.IN_MINUS" />
    <trace from="C5.pin1" to="C6.pin1" />
    <trace from="C5.pin2" to="C6.pin2" />

    <trace name="BIAS-A" from="R11.pin1" to="net.BIAS" schDisplayLabel="BIAS" />
    <trace name="BIAS-B" from="R10.pin1" to="net.BIAS" schDisplayLabel="BIAS" />

    {/* LMV7275-Q1 inverting comparator, hysteresis, and open-drain pull-up. */}
    <LMV7275IDCKRQ1 name="U1" noSchematicRepresentation />
    <schematicsymbol
      name="U1Symbol"
      displayName="U1"
      chipRef=".U1"
      symbolName="opamp_with_power_right"
      connections={{
        inp1: "U1.IN_PLUS",
        inp2: "U1.IN_MINUS",
        out: "U1.OUT",
        "V+": "U1.V_PLUS",
        "V-": "U1.V_MINUS",
      }}
      {...p(1280, 905.357143)}
    />
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
    {/* Native vertical-passive ports require a short lead-in along their pin
        direction. These source-grid projection offsets place R4 above and C15
        below the TIMER line, so their real stems meet U1.OUT on one straight
        horizontal route without changing connectivity. */}
    <resistor
      name="R4"
      resistance="10kohm"
      footprint="0603"
      schOrientation="pos_bottom"
      {...p(1400, 922.857143)}
    />
    <capacitor
      name="C15"
      capacitance="0.1uF"
      footprint="0603"
      schOrientation="vertical"
      doNotPlace
      {...p(1460, 884.285714)}
    />

    <trace path={["R15.pin1", "R18.pin2", "U1.IN_PLUS", "R16.pin1"]} />
    <trace
      name="TIMER"
      path={["R16.pin2", "U1.OUT", "R4.pin1", "C15.pin1"]}
      schDisplayLabel="TIMER"
    />
    <trace from="R4.pin1" to="net.TIMER" />
    {/* Native traces connect each visible amplifier projection to its rail.
        U3A/U3B share physical TLV2316 supply pins, while each projection keeps
        its own source-authentic V5/GND endpoint. */}
    {props.renderLocalRailConnections !== false && (
      <>
        {/* U2 pin 6 is the V5 supply and pin 7 is its V5 reference endpoint. */}
        <trace name="V5_U2_VS" from="U2.VS" to="net.V5" schDisplayLabel="V5" />
        <trace
          name="V5_U2_REF1"
          from="U2.REF1"
          to="net.V5"
          schDisplayLabel="V5"
        />
        <trace
          name="V5_U3A_pin5"
          from="U3A.pin5"
          to="net.V5"
          schDisplayLabel="V5"
        />
        <trace
          name="GND_U3A_pin3"
          from="U3A.pin3"
          to="net.GND"
          schDisplayLabel="GND"
        />
        <trace
          name="V5_U3B_pin5"
          from="U3B.pin5"
          to="net.V5"
          schDisplayLabel="V5"
        />
        <trace
          name="GND_U3B_pin3"
          from="U3B.pin3"
          to="net.GND"
          schDisplayLabel="GND"
        />
        <trace
          name="V5_U1Symbol_pin5"
          from="U1Symbol.pin5"
          to="net.V5"
          schDisplayLabel="V5"
        />
        <trace
          name="GND_U1Symbol_pin3"
          from="U1Symbol.pin3"
          to="net.GND"
          schDisplayLabel="GND"
        />
      </>
    )}
    <trace name="GND_U2_GND" from="U2.GND" to="net.GND" schDisplayLabel="GND" />
    <trace name="V5_C3_pin1" from="C3.pin1" to="net.V5" schDisplayLabel="V5" />
    <trace
      name="GND_C3_pin2"
      from="C3.pin2"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="GND_C10_pin2"
      from="C10.pin2"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="V5_R11_pin2"
      from="R11.pin2"
      to="net.V5"
      schDisplayLabel="V5"
    />
    <trace
      name="GND_R17_pin1"
      from="R17.pin1"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace name="V5_C5_pin1" from="C5.pin1" to="net.V5" schDisplayLabel="V5" />
    <trace
      name="GND_C5_pin2"
      from="C5.pin2"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="GND_C9_pin2"
      from="C9.pin2"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace name="V5_C2_pin1" from="C2.pin1" to="net.V5" schDisplayLabel="V5" />
    <trace
      name="GND_C2_pin2"
      from="C2.pin2"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="V5_R15_pin2"
      from="R15.pin2"
      to="net.V5"
      schDisplayLabel="V5"
    />
    <trace
      name="GND_R18_pin1"
      from="R18.pin1"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="V3_3_R4_pin2"
      from="R4.pin2"
      to="net.V3_3"
      schDisplayLabel="V3_3"
    />
    <trace
      name="GND_C15_pin2"
      from="C15.pin2"
      to="net.GND"
      schDisplayLabel="GND"
    />
    {/* J1 itself is the source-authentic motor-current interface. V+ and V-
        remain display names owned by the two real input traces above, not
        separate explicit net-label components. */}
  </subcircuit>
);

export default PinchDetectionSignalChain_INA240_TLV2316_LMV7275;
