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
  renderAmplifierRailLabels?: boolean;
};

const withoutAmplifierRailLabelProp = ({
  renderAmplifierRailLabels: _renderAmplifierRailLabels,
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
    {...withoutAmplifierRailLabelProp(props)}
  >
    <net name="V5" isPowerNet />
    {/* Net selectors reject periods, so V3.3 is normalized internally. The
        output trace still requests the source spelling as its display label. */}
    <net name="V3_3" isPowerNet />
    <net name="GND" isGroundNet />
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

    <trace from="J1.V_PLUS" to="R5.pin1" schDisplayLabel="V+" />
    <trace from="R6.pin2" to="R5.pin1" />
    <trace from="J1.V_MINUS" to="R7.pin1" schDisplayLabel="V-" />
    <trace from="R6.pin1" to="R7.pin1" />
    <trace from="R5.pin2" to="C8.pin1" />
    <trace from="C8.pin1" to="U2.IN_PLUS" />
    <trace from="R7.pin2" to="C8.pin2" />
    <trace from="C8.pin2" to="U2.IN_MINUS" />
    <trace from="U2.REF2" to="U2.GND" />
    <trace from="C3.pin1" to="C4.pin1" />
    <trace from="C3.pin2" to="C4.pin2" />

    {/* The public TSX ports retain underscore-safe identifiers. The source's
        exact V+ and V- text is carried electrically by the on-trace labels. */}
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
    {/* Two native symbol projections share the exact physical U3 package.
        The native right-facing powered op-amp currently has + above -, while
        the TI symbol has - above +. The datasheet-correct pin mapping is kept,
        so the U3B input traces cross instead of swapping pins or using a
        decorative connection. */}
    <TLV2316QDGKRQ1 name="U3" noSchematicRepresentation />
    {/* Native U3A places IN- 0.14 units below its center, while Altium's
        triangle places that pin on R3's centerline. The +14.827586 source-grid
        projection offset aligns the authoritative R3-to-IN- connection. */}
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
      {...p(790, 924.827586)}
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
      {...p(1080, 898.517241)}
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
    <trace path={["R3.pin2", "U3.IN_MINUS_A", "R1.pin1", "C1.pin2"]} />
    <trace path={["U3.OUT_A", "R1.pin2", "C1.pin1", "R8.pin1", "R9.pin1"]} />
    <trace from="R11.pin1" to="R17.pin2" />
    <trace from="R11.pin1" to="U3.IN_PLUS_A" />
    <trace path={["R8.pin2", "U3.IN_MINUS_B", "R2.pin1"]} />
    <trace path={["R9.pin2", "U3.IN_PLUS_B", "C9.pin1", "R10.pin2"]} />
    <trace from="R2.pin2" to="U3.OUT_B" />
    <trace from="U3.OUT_B" to="U1.IN_MINUS" />
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
      {...p(1280, 903)}
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
      {...p(1400, 919.896552)}
    />
    <capacitor
      name="C15"
      capacitance="0.1uF"
      footprint="0603"
      schOrientation="vertical"
      doNotPlace
      {...p(1460, 882.655172)}
    />

    <trace path={["R15.pin1", "R18.pin2", "U1.IN_PLUS", "R16.pin1"]} />
    <trace
      name="TIMER"
      path={["R16.pin2", "U1.OUT", "R4.pin1", "C15.pin1"]}
      schDisplayLabel="TIMER"
    />
    <trace from="R4.pin1" to="net.TIMER" />
    <trace name="U2-V5" from="U2.VS" to="net.V5" schDisplayLabel="V5" />
    <trace name="U2-REF1-V5" from="U2.REF1" to="net.V5" schDisplayLabel="V5" />
    {/* The TI sheet uses local rail symbols rather than sheet-wide V5/GND
        buses. Explicitly placed native rail labels preserve that topology;
        signal names continue to use schDisplayLabel on their real traces. */}
    {/* Each rail symbol is placed at the exact native triangle-stem endpoint.
        The fractional Altium-space coordinates below still pass through p(),
        keeping one transform for source centers and native-symbol projections.
        U3A/U3B share the same physical TLV2316 supply pins, while each visual
        projection retains its own source-authentic V5/GND endpoint. */}
    {props.renderAmplifierRailLabels !== false && (
      <>
        <netlabel
          net="V5"
          connection="U3A.pin5"
          anchorSide="bottom"
          {...p(788.965517, 938.275862)}
        />
        <netlabel
          net="GND"
          connection="U3A.pin3"
          anchorSide="top"
          {...p(789.310345, 911.37931)}
        />
        <netlabel
          net="V5"
          connection="U3B.pin5"
          anchorSide="bottom"
          {...p(1078.965517, 911.965517)}
        />
        <netlabel
          net="GND"
          connection="U3B.pin3"
          anchorSide="top"
          {...p(1079.310345, 885.068965)}
        />
        <netlabel
          net="V5"
          connection="U1Symbol.pin5"
          anchorSide="bottom"
          {...p(1278.965517, 916.448276)}
        />
        <netlabel
          net="GND"
          connection="U1Symbol.pin3"
          anchorSide="top"
          {...p(1279.310345, 889.551724)}
        />
      </>
    )}
    <netlabel net="GND" connection="U2.GND" anchorSide="top" {...p(570, 840)} />
    <netlabel
      net="V5"
      connection="C3.pin1"
      anchorSide="bottom"
      {...p(520, 1040)}
    />
    <netlabel
      net="GND"
      connection="C3.pin2"
      anchorSide="top"
      {...p(520, 970)}
    />
    <netlabel
      net="GND"
      connection="C10.pin2"
      anchorSide="top"
      {...p(750, 610)}
    />
    <netlabel
      net="V5"
      connection="R11.pin2"
      anchorSide="bottom"
      {...p(670, 880)}
    />
    <netlabel
      net="GND"
      connection="R17.pin1"
      anchorSide="top"
      {...p(670, 750)}
    />
    <netlabel
      net="V5"
      connection="C5.pin1"
      anchorSide="bottom"
      {...p(860, 1040)}
    />
    <netlabel
      net="GND"
      connection="C5.pin2"
      anchorSide="top"
      {...p(860, 970)}
    />
    <netlabel
      net="GND"
      connection="C9.pin2"
      anchorSide="top"
      {...p(980, 830)}
    />
    <netlabel
      net="V5"
      connection="C2.pin1"
      anchorSide="bottom"
      {...p(1280, 1050)}
    />
    <netlabel
      net="GND"
      connection="C2.pin2"
      anchorSide="top"
      {...p(1280, 980)}
    />
    <netlabel
      net="V5"
      connection="R15.pin2"
      anchorSide="bottom"
      {...p(1200, 870)}
    />
    <netlabel
      net="GND"
      connection="R18.pin1"
      anchorSide="top"
      {...p(1200, 740)}
    />
    <netlabel
      net="V3_3"
      connection="R4.pin2"
      anchorSide="bottom"
      {...p(1400, 950)}
    />
    <netlabel
      net="GND"
      connection="C15.pin2"
      anchorSide="top"
      {...p(1460, 840)}
    />
    {/* The source-authentic motor-current inputs terminate at child ports.
        ADCMOTOR/TIMER are exposed named nets and keep their display text on
        their real internal traces. */}
    <port name="V_PLUS" direction="left" connectsTo="J1.V_PLUS" />
    <port name="V_MINUS" direction="left" connectsTo="J1.V_MINUS" />
  </subcircuit>
);

export default PinchDetectionSignalChain_INA240_TLV2316_LMV7275;
