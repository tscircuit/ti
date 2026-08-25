import type { ChipProps, SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { DRV5013ADQDBZRQ1 } from "../chips/DRV5013ADQDBZRQ1.circuit.tsx";

/**
 * PR #116 established this scale for TIDA-01389. Every coordinate below uses
 * one source-to-schematic transform, with the Hall-encoder box center as the
 * origin:
 *
 *   schX = (AltiumX - 185) * 0.018278145
 *   schY = (AltiumY - 215) * 0.018278145
 *
 * Child-group coordinates are the transformed global point minus the
 * transformed child center. This is only an algebraic change of origin; no
 * component is manually re-laid out.
 */
const ALTIUM_SCALE = 0.018278145;
const ALTIUM_ORIGIN = { x: 185, y: 215 } as const;

type Point = { x: number; y: number };

const altiumToSchematic = (x: number, y: number): Point => ({
  x: (x - ALTIUM_ORIGIN.x) * ALTIUM_SCALE,
  y: (y - ALTIUM_ORIGIN.y) * ALTIUM_SCALE,
});

const HALL_ENCODER_CENTER = altiumToSchematic(185, 215);
const CONNECTOR_CENTER = altiumToSchematic(160, 525);

const inChild = (x: number, y: number, childCenter: Point): Point => {
  const transformed = altiumToSchematic(x, y);
  return {
    x: transformed.x - childCenter.x,
    y: transformed.y - childCenter.y,
  };
};

const inHallEncoder = (x: number, y: number) =>
  inChild(x, y, HALL_ENCODER_CENTER);
const inConnector = (x: number, y: number) => inChild(x, y, CONNECTOR_CENTER);
const asSchematicPosition = ({ x, y }: Point) => ({ schX: x, schY: y });

const connectorJ1PinLabels = {
  pin1: "VCC",
  pin2: "SO",
  pin3: "SDO",
  pin4: "SDI",
  pin5: "SCS",
  pin6: "SCLK",
  pin7: "SLEEP",
  pin8: "NC",
  pin9: "IN1_PH",
  pin10: "IN2_EN",
} as const;

const connectorJ2PinLabels = {
  pin1: "GND",
  pin2: "NC_2",
  pin3: "PINCH",
  pin4: "NC_4",
  pin5: "NC_5",
  pin6: "HALL_1",
  pin7: "HALL_2",
  pin8: ["nFAULT", "FAULT"],
  pin9: "UP",
  pin10: "DOWN",
} as const;

type SourceConnectorProps = ChipProps & {
  pinSide: "left" | "right";
  pinLabels: typeof connectorJ1PinLabels | typeof connectorJ2PinLabels;
};

const sourceConnectorPinY = [
  0.822517, 0.639735, 0.456954, 0.274172, 0.091391, -0.091391, -0.274172,
  -0.456954, -0.639735, -0.822517,
] as const;

type SourceConnectorPinProps = {
  aliases: readonly string[];
  isLeft: boolean;
  pin: number;
  schY: number;
};

const SourceConnectorPin = ({
  aliases,
  isLeft,
  pin,
  schY,
}: SourceConnectorPinProps) => (
  <>
    <port
      name={`pin${pin}`}
      aliases={[...aliases]}
      schX={isLeft ? -0.548344 : 0.548344}
      schY={schY}
      direction={isLeft ? "left" : "right"}
      schStemLength={0.365563}
      schPinLabelFontSize={0.07}
      pinNumber={pin}
    />
  </>
);

/** SSQ-110-01-T-S 1x10 receptacle, mirrored by selecting its pin side. */
const SourceConnector = ({
  pinLabels,
  pinSide,
  ...props
}: SourceConnectorProps) => {
  const isLeft = pinSide === "left";
  return (
    <chip
      manufacturerPartNumber="SSQ-110-01-T-S"
      footprint="pinrow10"
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicrect
            schX={0}
            schY={0}
            width={0.365563}
            height={2.010596}
            strokeWidth={0.025}
            color="#840000"
          />
          {sourceConnectorPinY.map((schY, index) => {
            const pin = index + 1;
            const labels = pinLabels[`pin${pin}` as keyof typeof pinLabels];
            const aliases = typeof labels === "string" ? [labels] : [...labels];
            return (
              <SourceConnectorPin
                key={`pin-${pin}`}
                aliases={aliases}
                isLeft={isLeft}
                pin={pin}
                schY={schY}
              />
            );
          })}
        </symbol>
      }
      {...props}
    />
  );
};

/**
 * The two-channel Hall encoder box from TIDA-01389. U6 generates HALL_1 and
 * U5 generates HALL_2. TIDA-01389 is used because the Window Module Position
 * Feedback reference-design tab is empty, while TI identifies this closely
 * related window-lift design as the official two-sensor position encoder.
 */
export const HallEncoder_DRV5013 = (props: SubcircuitProps) => {
  const u6 = inHallEncoder(180, 280);
  const u5 = inHallEncoder(180, 140);
  const c13 = inHallEncoder(60, 275);
  const c14 = inHallEncoder(60, 135);
  const r14 = inHallEncoder(270, 310);
  const r15 = inHallEncoder(270, 170);

  return (
    <group
      schMaxTraceDistance="12mm"
      schTraceAutoLabelEnabled={false}
      routingDisabled
      {...props}
    >
      <net name="GND" isGroundNet />

      <schematicbox
        name="HALL_ENCODER_SECTION"
        schX={0}
        schY={0}
        width={290 * ALTIUM_SCALE}
        height={270 * ALTIUM_SCALE}
      />
      <schematictext
        {...asSchematicPosition(inHallEncoder(190, 60))}
        text="HALL ENCODER"
        fontSize={0.3}
      />

      <DRV5013ADQDBZRQ1 name="U6" schX={u6.x} schY={u6.y} />
      <DRV5013ADQDBZRQ1 name="U5" schX={u5.x} schY={u5.y} />
      <schematictext
        {...asSchematicPosition(inHallEncoder(120, 310))}
        text="U6"
        fontSize={0.14}
        anchor="left"
      />
      <schematictext
        {...asSchematicPosition(inHallEncoder(120, 240))}
        text="DRV5013ADQDBZRQ1"
        fontSize={0.1}
        anchor="left"
      />
      <schematictext
        {...asSchematicPosition(inHallEncoder(120, 170))}
        text="U5"
        fontSize={0.14}
        anchor="left"
      />
      <schematictext
        {...asSchematicPosition(inHallEncoder(120, 100))}
        text="DRV5013ADQDBZRQ1"
        fontSize={0.1}
        anchor="left"
      />

      <capacitor
        name="C13"
        capacitance="0.1uF"
        footprint="0402"
        manufacturerPartNumber="GRM155R61H104ME14D"
        schX={c13.x}
        schY={c13.y}
        schOrientation="vertical"
      />
      <capacitor
        name="C14"
        capacitance="0.1uF"
        footprint="0402"
        manufacturerPartNumber="GRM155R61H104ME14D"
        schX={c14.x}
        schY={c14.y}
        schOrientation="vertical"
      />
      <resistor
        name="R14"
        resistance="10kohm"
        footprint="0402"
        manufacturerPartNumber="CRCW040210K0JNED"
        schX={r14.x}
        schY={r14.y}
        schOrientation="vertical"
      />
      <resistor
        name="R15"
        resistance="10kohm"
        footprint="0402"
        manufacturerPartNumber="CRCW040210K0JNED"
        schX={r15.x}
        schY={r15.y}
        schOrientation="vertical"
      />

      <trace
        name="U6_VCC"
        from="C13.pin1"
        to="U6.VCC"
        schematicRouteHints={[inHallEncoder(60, 290), inHallEncoder(100, 290)]}
      />
      <netlabel
        net="VCC"
        connectsTo="C13.pin1"
        {...asSchematicPosition(inHallEncoder(60, 290))}
        anchorSide="bottom"
      />
      <netlabel
        net="GND"
        connectsTo="C13.pin2"
        {...asSchematicPosition(inHallEncoder(60, 260))}
        anchorSide="top"
      />
      <netlabel
        net="GND"
        connectsTo="U6.GND"
        {...asSchematicPosition(inHallEncoder(260, 260))}
        anchorSide="top"
      />
      <trace
        name="HALL_1_PULLUP_NODE"
        from="U6.OUT"
        to="R14.pin1"
        schematicRouteHints={[inHallEncoder(260, 290), inHallEncoder(270, 290)]}
      />
      <trace
        from="R14.pin1"
        to="net.HALL_1"
        schDisplayLabel="HALL_1"
        schematicRouteHints={[inHallEncoder(290, 290)]}
      />
      <netlabel
        net="VCC"
        connectsTo="R14.pin2"
        {...asSchematicPosition(inHallEncoder(270, 330))}
        anchorSide="bottom"
      />

      <trace
        name="U5_VCC"
        from="C14.pin1"
        to="U5.VCC"
        schematicRouteHints={[inHallEncoder(60, 150), inHallEncoder(100, 150)]}
      />
      <netlabel
        net="VCC"
        connectsTo="C14.pin1"
        {...asSchematicPosition(inHallEncoder(60, 150))}
        anchorSide="bottom"
      />
      <netlabel
        net="GND"
        connectsTo="C14.pin2"
        {...asSchematicPosition(inHallEncoder(60, 120))}
        anchorSide="top"
      />
      <netlabel
        net="GND"
        connectsTo="U5.GND"
        {...asSchematicPosition(inHallEncoder(260, 120))}
        anchorSide="top"
      />
      <trace
        name="HALL_2_PULLUP_NODE"
        from="U5.OUT"
        to="R15.pin1"
        schematicRouteHints={[inHallEncoder(260, 150), inHallEncoder(270, 150)]}
      />
      <trace
        from="R15.pin1"
        to="net.HALL_2"
        schDisplayLabel="HALL_2"
        schematicRouteHints={[inHallEncoder(290, 150)]}
      />
      <netlabel
        net="VCC"
        connectsTo="R15.pin2"
        {...asSchematicPosition(inHallEncoder(270, 190))}
        anchorSide="bottom"
      />

      <port name="VCC" direction="left" connectsTo="net.VCC" />
      <port name="GND" direction="left" connectsTo="net.GND" />
      <port name="HALL_1" direction="right" connectsTo="net.HALL_1" />
      <port name="HALL_2" direction="right" connectsTo="net.HALL_2" />
    </group>
  );
};

/** Hall-related pins and VCC feed from the TIDA-01389 I/O connector box. */
export const PositionFeedbackConnector_TIDA01389 = (props: SubcircuitProps) => {
  const j1 = inConnector(150, 475);
  const j2 = inConnector(190, 475);
  const r9 = inConnector(100, 530);

  return (
    <group
      schMaxTraceDistance="10mm"
      schTraceAutoLabelEnabled={false}
      routingDisabled
      {...props}
    >
      <net name="GND" isGroundNet />

      <schematicbox
        name="POSITION_FEEDBACK_CONNECTOR_SECTION"
        schX={0}
        schY={0}
        width={240 * ALTIUM_SCALE}
        height={230 * ALTIUM_SCALE}
      />
      <schematictext
        {...asSchematicPosition(inConnector(160, 390))}
        text="INPUTS AND OUTPUTS"
        fontSize={0.3}
      />

      <SourceConnector
        name="J1"
        pinSide="left"
        pinLabels={connectorJ1PinLabels}
        schX={j1.x}
        schY={j1.y}
      />
      <SourceConnector
        name="J2"
        pinSide="right"
        pinLabels={connectorJ2PinLabels}
        schX={j2.x}
        schY={j2.y}
      />
      <schematictext
        {...asSchematicPosition(inConnector(139, 530))}
        text="J1"
        fontSize={0.13}
        anchor="right"
      />
      <schematictext
        {...asSchematicPosition(inConnector(180, 530))}
        text="J2"
        fontSize={0.13}
        anchor="left"
      />

      <resistor
        name="R9"
        resistance="0ohm"
        footprint="0603"
        manufacturerPartNumber="CRCW06030000Z0EA"
        schX={r9.x}
        schY={r9.y}
        schRotation="180deg"
      />
      <trace
        name="VCC_CONNECTOR_FEED"
        from="R9.pin1"
        to="J1.VCC"
        schematicRouteHints={[inConnector(120, 530), inConnector(120, 520)]}
      />
      <netlabel
        net="VCC"
        connectsTo="R9.pin2"
        {...asSchematicPosition(inConnector(60, 530))}
        anchorSide="right"
      />
      <netlabel
        net="GND"
        connectsTo="J2.GND"
        {...asSchematicPosition(inConnector(230, 520))}
        anchorSide="left"
      />
      <trace
        from="J2.HALL_1"
        to="net.HALL_1"
        schDisplayLabel="HALL_1"
        schematicRouteHints={[inConnector(230, 470)]}
      />
      <trace
        from="J2.HALL_2"
        to="net.HALL_2"
        schDisplayLabel="HALL_2"
        schematicRouteHints={[inConnector(230, 460)]}
      />

      <port name="VCC" direction="left" connectsTo="net.VCC" />
      <port name="GND" direction="left" connectsTo="net.GND" />
      <port name="HALL_1" direction="right" connectsTo="net.HALL_1" />
      <port name="HALL_2" direction="right" connectsTo="net.HALL_2" />
    </group>
  );
};

/**
 * Complete TIDA-01389 two-channel Hall position-feedback subsystem.
 *
 * The Hall encoder and shared I/O connector remain separate native groups
 * inside one subcircuit. Their source labels join the repeated nets without a
 * drawn cross-box wire, while the shared parent connectivity lets tests assert
 * the complete signal path. DRV8703 and H-bridge circuitry are intentionally
 * excluded and remain the separate scope of PR #116.
 */
export const PositionFeedback_DRV5013 = (props: SubcircuitProps) => (
  <subcircuit schTraceAutoLabelEnabled={false} routingDisabled {...props}>
    <HallEncoder_DRV5013
      name="hallEncoder"
      schX={HALL_ENCODER_CENTER.x}
      schY={HALL_ENCODER_CENTER.y}
      connections={{
        VCC: "net.VCC",
        GND: "net.GND",
        HALL_1: "net.HALL_1",
        HALL_2: "net.HALL_2",
      }}
    />
    <PositionFeedbackConnector_TIDA01389
      name="connector"
      schX={CONNECTOR_CENTER.x}
      schY={CONNECTOR_CENTER.y}
      connections={{
        VCC: "net.VCC",
        GND: "net.GND",
        HALL_1: "net.HALL_1",
        HALL_2: "net.HALL_2",
      }}
    />

    <port name="VCC" direction="left" connectsTo="net.VCC" />
    <port name="GND" direction="left" connectsTo="net.GND" />
    <port name="HALL_1" direction="right" connectsTo="net.HALL_1" />
    <port name="HALL_2" direction="right" connectsTo="net.HALL_2" />
  </subcircuit>
);

export default PositionFeedback_DRV5013;
