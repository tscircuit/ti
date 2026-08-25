import type { ChipProps, SubcircuitProps } from "@tscircuit/props";
import { Fragment } from "react";
import "tscircuit";

const dualMosfetPinLabels = {
  pin1: "S1",
  pin2: "G1",
  pin3: "S2",
  pin4: "G2",
  pin5: "D2",
  pin6: "D1",
} as const;

const SQJ940EP = (props: ChipProps<typeof dualMosfetPinLabels>) => (
  <chip
    manufacturerPartNumber="SQJ940EP-T1-GE3"
    datasheetUrl="https://www.vishay.com/docs/62767/sqj940ep.pdf"
    footprint="kicad:Package_SO/PowerPAK_SO-8_Dual"
    pinLabels={dualMosfetPinLabels}
    {...props}
  />
);

type NetTieProps = {
  name: string;
  schX: number;
  schY: number;
};

type MosfetUnitProps = {
  displayName: "Q1" | "Q2";
  schX: number;
  schY: number;
  gateSide: "left" | "right";
  drainPin: number;
  gatePin: number;
  sourcePin: number;
};

const symbolBlue = "#0000ff";
const sourceLineWidth = 0.018278;
const sourceWireBlue = "#000080";
const sourceDark = "#1f2937";
const sourceRed = "#800000";

type ReferenceNetLabelProps = {
  net: string;
  schX: number;
  schY: number;
};

const ReferenceNetLabel = ({ net, schX, schY }: ReferenceNetLabelProps) => (
  <schematictext
    text={net}
    schX={schX}
    schY={schY + 0.091391}
    fontSize={0.18}
    anchor="left"
    color={sourceRed}
  />
);

/** Every visible net segment in the Altium H-bridge reference box. */
const referenceWirePaths = [
  [
    { x: 3.290065, y: 1.645032 },
    { x: 2.924502, y: 1.645032 },
  ],
  [
    { x: -3.472846, y: 1.645032 },
    { x: -3.107283, y: 1.645032 },
  ],
  [
    { x: -3.472846, y: -0.731126 },
    { x: -3.107283, y: -0.731126 },
  ],
  [
    { x: 3.290065, y: -0.731126 },
    { x: 2.924502, y: -0.731126 },
  ],
  [
    { x: 0, y: -2.010595 },
    { x: 0, y: -1.827814 },
    { x: 0, y: -1.462251 },
  ],
  [
    { x: 0.365563, y: -1.827814 },
    { x: 0, y: -1.827814 },
  ],
  [
    { x: 0, y: -3.107283 },
    { x: 0, y: -2.924502 },
    { x: 0, y: -2.741721 },
  ],
  [
    { x: 0, y: -2.924502 },
    { x: 0.365563, y: -2.924502 },
  ],
  [
    { x: 1.27947, y: -1.462251 },
    { x: 2.010595, y: -1.462251 },
  ],
  [
    { x: 3.290065, y: 0.182781 },
    { x: 2.741721, y: 0.182781 },
  ],
  [
    { x: -3.472846, y: 0.182781 },
    { x: -2.741721, y: 0.182781 },
  ],
  [
    { x: 1.645032, y: -1.827814 },
    { x: 1.27947, y: -1.827814 },
    { x: 1.096688, y: -1.827814 },
  ],
  [
    { x: 1.645032, y: -2.924502 },
    { x: 1.27947, y: -2.924502 },
    { x: 1.096688, y: -2.924502 },
  ],
  [
    { x: 2.741721, y: -1.462251 },
    { x: 3.290065, y: -1.462251 },
  ],
  [
    { x: 2.010595, y: 0.182781 },
    { x: 1.27947, y: 0.182781 },
  ],
  [
    { x: 1.27947, y: -1.462251 },
    { x: 0, y: -1.462251 },
  ],
  [
    { x: -2.376158, y: 1.645032 },
    { x: -2.010595, y: 1.645032 },
  ],
  [
    { x: -2.010595, y: 0.182781 },
    { x: -1.27947, y: 0.182781 },
    { x: -1.27947, y: 0.913907 },
    { x: -1.27947, y: 1.096688 },
  ],
  [
    { x: -1.27947, y: 0.182781 },
    { x: -1.27947, y: -0.182781 },
  ],
  [
    { x: -2.376158, y: -0.731126 },
    { x: -2.010595, y: -0.731126 },
  ],
  [
    { x: -1.27947, y: -1.27947 },
    { x: -1.27947, y: -1.462251 },
    { x: 0, y: -1.462251 },
  ],
  [
    { x: 1.27947, y: -1.27947 },
    { x: 1.27947, y: -1.462251 },
  ],
  [
    { x: 1.27947, y: -0.182781 },
    { x: 1.27947, y: 0.182781 },
  ],
  [
    { x: 1.27947, y: 0.182781 },
    { x: 1.27947, y: 0.913907 },
    { x: 1.27947, y: 1.096688 },
  ],
  [
    { x: 1.27947, y: 2.193377 },
    { x: 0, y: 2.193377 },
    { x: -1.27947, y: 2.193377 },
  ],
  [
    { x: 0, y: 3.472846 },
    { x: 0, y: 2.193377 },
  ],
  [
    { x: 2.010595, y: -0.731126 },
    { x: 2.193377, y: -0.731126 },
  ],
  [
    { x: 2.010595, y: 1.645032 },
    { x: 2.193377, y: 1.645032 },
  ],
  [
    { x: 0, y: 3.472846 },
    { x: 0.365563, y: 3.472846 },
  ],
  [
    { x: -0.913907, y: 3.472846 },
    { x: 0, y: 3.472846 },
  ],
  [
    { x: 1.27947, y: -2.010595 },
    { x: 1.27947, y: -1.827814 },
  ],
  [
    { x: 1.27947, y: -2.558939 },
    { x: 1.27947, y: -2.924502 },
  ],
  [
    { x: -1.27947, y: 0.913907 },
    { x: -0.731126, y: 0.913907 },
    { x: -0.365563, y: 0.913907 },
  ],
  [
    { x: -0.365563, y: 0 },
    { x: -0.731126, y: 0 },
    { x: -0.731126, y: 0.913907 },
  ],
  [
    { x: 0.182781, y: 0 },
    { x: 0.731126, y: 0 },
    { x: 0.731126, y: 0.913907 },
    { x: 0.182781, y: 0.913907 },
  ],
  [
    { x: 1.27947, y: 0.913907 },
    { x: 0.731126, y: 0.913907 },
  ],
] as const;

const ReferenceWiring = () => (
  <>
    {referenceWirePaths.map((points, index) => (
      <Fragment key={`wire-${index}`}>
        <schematicpath
          points={points.map(({ x, y }) => ({ x, y }))}
          strokeColor={sourceWireBlue}
          strokeWidth={sourceLineWidth}
        />
      </Fragment>
    ))}
  </>
);

/**
 * One Altium unit from the dual SQJ940EP symbol. These points are a direct
 * 0.018278138 mm-per-source-pixel translation of TIDA-01389_Sch.source.svg.
 * The real package and its electrical connections are hidden below. Keeping
 * this as source-vector artwork prevents the schematic router and its default
 * symbol styling from altering the Altium geometry.
 */
const MosfetUnit = ({
  displayName,
  schX,
  schY,
  gateSide,
  drainPin,
  gatePin,
  sourcePin,
}: MosfetUnitProps) => {
  const mirror = gateSide === "left" ? 1 : -1;
  const mx = (x: number) => x * mirror;
  const lines = [
    [0.063973, 0.127947, -0.118808, 0.127947],
    [0.063973, 0, -0.118808, 0],
    [0.063973, -0.127947, -0.118808, -0.127947],
    [0.063973, 0, 0.063973, -0.182781],
    [-0.155503, 0.164503, -0.155503, -0.164503],
    [-0.118808, 0.164503, -0.118808, 0.091391],
    [-0.118808, 0.036556, -0.118808, -0.036556],
    [-0.118808, -0.091391, -0.118808, -0.164503],
    [-0.301589, 0, -0.155503, 0],
    [0.063973, 0.127947, 0.063973, 0.182781],
    [0.19192, 0.036556, 0.301589, 0.036556],
    [0.246755, -0.182781, 0.246755, -0.054834],
    [0.246755, 0.182781, 0.246755, 0.036556],
    [0.063973, 0.182781, 0.246755, 0.182781],
    [0.063973, -0.182781, 0.246755, -0.182781],
    // Exact Altium pin stems.
    [0.063973, 0.182781, 0.063973, 0.548344],
    [0.063973, -0.182781, 0.063973, -0.548344],
    [-0.667152, 0, -0.301589, 0],
  ] as const;

  return (
    <>
      {lines.map(([x1, y1, x2, y2], index) => (
        <Fragment key={`mosfet-line-${index}`}>
          <schematicline
            x1={schX + mx(x1)}
            y1={schY + y1}
            x2={schX + mx(x2)}
            y2={schY + y2}
            strokeWidth={sourceLineWidth}
            color={symbolBlue}
          />
        </Fragment>
      ))}
      <schematicpath
        points={[
          { x: schX + mx(-0.118808), y: schY },
          { x: schX + mx(-0.009139), y: schY - 0.036556 },
          { x: schX + mx(-0.009139), y: schY + 0.036556 },
        ]}
        isFilled
        fillColor={symbolBlue}
        strokeColor={symbolBlue}
        strokeWidth={sourceLineWidth}
      />
      <schematicpath
        points={[
          { x: schX + mx(0.246755), y: schY + 0.036556 },
          { x: schX + mx(0.19192), y: schY - 0.054834 },
          { x: schX + mx(0.301589), y: schY - 0.054834 },
        ]}
        isFilled
        fillColor={symbolBlue}
        strokeColor={symbolBlue}
        strokeWidth={sourceLineWidth}
      />
      <schematictext
        schX={schX + mx(0.063973)}
        schY={schY + 0.219338}
        schRotation={90}
        text={String(drainPin)}
        fontSize={0.14}
        anchor="left"
        color={sourceDark}
      />
      <schematictext
        schX={schX + mx(-0.338145)}
        schY={schY + 0.091391}
        text={String(gatePin)}
        fontSize={0.14}
        anchor={gateSide === "left" ? "right" : "left"}
        color={sourceDark}
      />
      <schematictext
        schX={schX + mx(0.063973)}
        schY={schY - 0.219338}
        schRotation={90}
        text={String(sourcePin)}
        fontSize={0.14}
        anchor="right"
        color={sourceDark}
      />
      <schematictext
        schX={schX + (gateSide === "left" ? 0.319867 : 0.703708)}
        schY={schY + (gateSide === "left" ? 0.109669 : 0.292451)}
        text={displayName}
        fontSize={0.18}
        anchor="left"
        color={sourceDark}
      />
    </>
  );
};

const NetTie = ({ name, schX, schY }: NetTieProps) => (
  <>
    <chip
      name={name}
      noSchematicRepresentation
      footprint="kicad:NetTie/NetTie-2_SMD_Pad0.5mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      internallyConnectedPins={[[1, 2]]}
    />
    <schematicline
      x1={schX - 0.365563}
      y1={schY}
      x2={schX - 0.182781}
      y2={schY}
      strokeWidth={sourceLineWidth}
      color={sourceDark}
    />
    <schematicline
      x1={schX + 0.182781}
      y1={schY}
      x2={schX + 0.365563}
      y2={schY}
      strokeWidth={sourceLineWidth}
      color={sourceDark}
    />
    <schematicrect
      schX={schX}
      schY={schY}
      width={0.365563}
      height={0.182781}
      strokeWidth={sourceLineWidth}
      isFilled
      color="#ffffb0"
    />
    <schematicrect
      schX={schX}
      schY={schY}
      width={0.365563}
      height={0.182781}
      strokeWidth={sourceLineWidth}
      color={sourceRed}
    />
    <schematictext
      schX={schX - 0.182781}
      schY={schY + 0.182782}
      text={name}
      fontSize={0.18}
      anchor="left"
      color={sourceDark}
    />
    <schematictext
      schX={schX - 0.182781}
      schY={schY - 0.182781}
      text="Net-Tie"
      fontSize={0.18}
      anchor="left"
      color={sourceDark}
    />
  </>
);

type ReferencePartProps = {
  name: string;
  value: string;
  schX: number;
  schY: number;
};

const ReferenceHorizontalResistor = ({
  name,
  value,
  schX,
  schY,
}: ReferencePartProps) => (
  <>
    <schematicline
      x1={schX - 0.365563}
      y1={schY}
      x2={schX - 0.182781}
      y2={schY}
      strokeWidth={sourceLineWidth}
      color={sourceDark}
    />
    <schematicpath
      points={[
        { x: schX - 0.182781, y: schY },
        { x: schX - 0.109669, y: schY },
        { x: schX - 0.091391, y: schY + 0.036556 },
        { x: schX - 0.054834, y: schY - 0.036556 },
        { x: schX - 0.018278, y: schY + 0.036556 },
        { x: schX + 0.018278, y: schY - 0.036556 },
        { x: schX + 0.054834, y: schY + 0.036556 },
        { x: schX + 0.091391, y: schY - 0.036556 },
        { x: schX + 0.109669, y: schY },
        { x: schX + 0.182781, y: schY },
      ]}
      strokeColor={symbolBlue}
      strokeWidth={sourceLineWidth}
    />
    <schematicline
      x1={schX + 0.182781}
      y1={schY}
      x2={schX + 0.365563}
      y2={schY}
      strokeWidth={sourceLineWidth}
      color={sourceDark}
    />
    <schematictext
      schX={schX - 0.182781}
      schY={schY + 0.091391}
      text={value}
      fontSize={0.18}
      anchor="left"
      color={sourceDark}
    />
    <schematictext
      schX={schX}
      schY={schY + 0.091391}
      text={name}
      fontSize={0.18}
      anchor="left"
      color={sourceDark}
    />
  </>
);

const ReferenceVerticalResistor = ({
  name,
  value,
  schX,
  schY,
}: ReferencePartProps) => (
  <>
    <schematicline
      x1={schX}
      y1={schY + 0.365563}
      x2={schX}
      y2={schY + 0.182781}
      strokeWidth={sourceLineWidth}
      color={sourceDark}
    />
    <schematicpath
      points={[
        { x: schX, y: schY + 0.182781 },
        { x: schX, y: schY + 0.109669 },
        { x: schX + 0.036556, y: schY + 0.091391 },
        { x: schX - 0.036556, y: schY + 0.054834 },
        { x: schX + 0.036556, y: schY + 0.018278 },
        { x: schX - 0.036556, y: schY - 0.018278 },
        { x: schX + 0.036556, y: schY - 0.054834 },
        { x: schX - 0.036556, y: schY - 0.091391 },
        { x: schX, y: schY - 0.109669 },
        { x: schX, y: schY - 0.182781 },
      ]}
      strokeColor={symbolBlue}
      strokeWidth={sourceLineWidth}
    />
    <schematicline
      x1={schX}
      y1={schY - 0.182781}
      x2={schX}
      y2={schY - 0.365563}
      strokeWidth={sourceLineWidth}
      color={sourceDark}
    />
    <schematictext
      schX={schX + 0.054834}
      schY={schY + 0.109669}
      text={name}
      fontSize={0.18}
      anchor="left"
      color={sourceDark}
    />
    <schematictext
      schX={schX + 0.054834}
      schY={schY - 0.073112}
      text={value}
      fontSize={0.18}
      anchor="left"
      color={sourceDark}
    />
  </>
);

const ReferenceVerticalCapacitor = ({
  name,
  value,
  schX,
  schY,
}: ReferencePartProps) => (
  <>
    <schematicline
      x1={schX}
      y1={schY + 0.274172}
      x2={schX}
      y2={schY + 0.091391}
      strokeWidth={sourceLineWidth}
      color={sourceDark}
    />
    <schematicline
      x1={schX}
      y1={schY + 0.091391}
      x2={schX}
      y2={schY + 0.036556}
      strokeWidth={sourceLineWidth}
      color={symbolBlue}
    />
    <schematicline
      x1={schX - 0.146225}
      y1={schY + 0.036556}
      x2={schX + 0.146225}
      y2={schY + 0.036556}
      strokeWidth={sourceLineWidth}
      color={symbolBlue}
    />
    <schematicline
      x1={schX - 0.146225}
      y1={schY - 0.036556}
      x2={schX + 0.146225}
      y2={schY - 0.036556}
      strokeWidth={sourceLineWidth}
      color={symbolBlue}
    />
    <schematicline
      x1={schX}
      y1={schY - 0.036556}
      x2={schX}
      y2={schY - 0.091391}
      strokeWidth={sourceLineWidth}
      color={symbolBlue}
    />
    <schematicline
      x1={schX}
      y1={schY - 0.091391}
      x2={schX}
      y2={schY - 0.274172}
      strokeWidth={sourceLineWidth}
      color={sourceDark}
    />
    <schematictext
      schX={schX + 0.164503}
      schY={schY + 0.018278}
      text={name}
      fontSize={0.18}
      anchor="left"
      color={sourceDark}
    />
    <schematictext
      schX={schX + 0.164503}
      schY={schY - 0.164503}
      text={value}
      fontSize={0.18}
      anchor="left"
      color={sourceDark}
    />
  </>
);

const ReferenceHorizontalCapacitor = ({
  name,
  value,
  schX,
  schY,
}: ReferencePartProps) => (
  <>
    <schematicline
      x1={schX - 0.274172}
      y1={schY}
      x2={schX - 0.091391}
      y2={schY}
      strokeWidth={sourceLineWidth}
      color={sourceDark}
    />
    <schematicline
      x1={schX - 0.091391}
      y1={schY}
      x2={schX - 0.036556}
      y2={schY}
      strokeWidth={sourceLineWidth}
      color={symbolBlue}
    />
    <schematicline
      x1={schX - 0.036556}
      y1={schY - 0.146225}
      x2={schX - 0.036556}
      y2={schY + 0.146225}
      strokeWidth={sourceLineWidth}
      color={symbolBlue}
    />
    <schematicline
      x1={schX + 0.036556}
      y1={schY - 0.146225}
      x2={schX + 0.036556}
      y2={schY + 0.146225}
      strokeWidth={sourceLineWidth}
      color={symbolBlue}
    />
    <schematicline
      x1={schX + 0.036556}
      y1={schY}
      x2={schX + 0.091391}
      y2={schY}
      strokeWidth={sourceLineWidth}
      color={symbolBlue}
    />
    <schematicline
      x1={schX + 0.091391}
      y1={schY}
      x2={schX + 0.274172}
      y2={schY}
      strokeWidth={sourceLineWidth}
      color={sourceDark}
    />
    <schematictext
      schX={schX - 0.109669}
      schY={schY + 0.255894}
      text={name}
      fontSize={0.18}
      anchor="left"
      color={sourceDark}
    />
    <schematictext
      schX={schX - 0.109669}
      schY={schY - 0.255893}
      text={value}
      fontSize={0.18}
      anchor="left"
      color={sourceDark}
    />
  </>
);

const ReferenceGround = ({ schX, schY }: { schX: number; schY: number }) => (
  <>
    <schematicline
      x1={schX}
      y1={schY}
      x2={schX}
      y2={schY - 0.073113}
      strokeWidth={sourceLineWidth}
      color={sourceRed}
    />
    <schematicline
      x1={schX - 0.127947}
      y1={schY - 0.073113}
      x2={schX + 0.127947}
      y2={schY - 0.073113}
      strokeWidth={sourceLineWidth}
      color={sourceRed}
    />
    <schematicline
      x1={schX - 0.082252}
      y1={schY - 0.146225}
      x2={schX + 0.082252}
      y2={schY - 0.146225}
      strokeWidth={sourceLineWidth}
      color={sourceRed}
    />
    <schematicline
      x1={schX - 0.036556}
      y1={schY - 0.219338}
      x2={schX + 0.036556}
      y2={schY - 0.219338}
      strokeWidth={sourceLineWidth}
      color={sourceRed}
    />
    <schematictext
      schX={schX}
      schY={schY - 0.29245}
      text="GND"
      fontSize={0.18}
      anchor="top"
      color={sourceRed}
    />
  </>
);

const ReferenceJunctions = () => {
  const centers = [
    { x: -1.27947, y: 0.182781 },
    { x: -1.27947, y: 0.913907 },
    { x: -0.731126, y: 0.913907 },
    { x: 0, y: -2.924502 },
    { x: 0, y: -1.827814 },
    { x: 0, y: -1.462251 },
    { x: 0, y: 2.193377 },
    { x: 0, y: 3.472846 },
    { x: 0.731126, y: 0.913907 },
    { x: 1.27947, y: -2.924502 },
    { x: 1.27947, y: -1.827814 },
    { x: 1.27947, y: -1.462251 },
    { x: 1.27947, y: 0.182781 },
    { x: 1.27947, y: 0.913907 },
  ];

  return (
    <>
      {centers.map((center, index) => (
        <Fragment key={`junction-${index}`}>
          <schematiccircle
            center={center}
            radius={0.032901}
            isFilled
            color={sourceRed}
            strokeWidth={sourceLineWidth}
          />
        </Fragment>
      ))}
    </>
  );
};

const HiddenTwoPinPart = ({
  name,
  footprint,
  manufacturerPartNumber,
  doNotPlace,
}: {
  name: string;
  footprint: string;
  manufacturerPartNumber: string;
  doNotPlace?: boolean;
}) => (
  <chip
    name={name}
    footprint={footprint}
    manufacturerPartNumber={manufacturerPartNumber}
    pinLabels={{ pin1: "pin1", pin2: "pin2" }}
    noSchematicRepresentation
    doNotPlace={doNotPlace}
  />
);

/**
 * TIDA-01389 H-bridge power stage, extracted from TIDA-01389_Sch.SchDoc.
 *
 * Component centers and route bends below are translated directly from the
 * Altium sheet around the H-bridge center (26.503300, 7.859599). Q1 and Q2 are
 * dual SQJ940EP packages, each represented by its two schematic units.
 *
 * Reference: https://www.ti.com/tool/TIDA-01389
 */
export const HBridge_SQJ940EP = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="20mm"
    schTraceAutoLabelEnabled={false}
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />

    <schematicpath
      points={[
        { x: -4.02119, y: 3.838409 },
        { x: 4.02119, y: 3.838409 },
        { x: 4.02119, y: -3.838409 },
        { x: -4.02119, y: -3.838409 },
        { x: -4.02119, y: 3.838409 },
      ]}
      strokeColor={sourceDark}
      strokeWidth={0.036556}
    />
    <schematictext
      schX={0}
      schY={-4.203972}
      text="H-BRIDGE"
      fontSize={0.365563}
      color={sourceDark}
    />

    {/* The physical packages carry BOM/footprint metadata. The four schematic
        units below use the vector geometry from the Altium source. */}
    <SQJ940EP name="Q1" noSchematicRepresentation />
    <SQJ940EP name="Q2" noSchematicRepresentation />

    <MosfetUnit
      displayName="Q1"
      schX={-1.343443}
      schY={1.645032}
      gateSide="left"
      drainPin={5}
      gatePin={4}
      sourcePin={3}
    />
    <MosfetUnit
      displayName="Q1"
      schX={-1.343443}
      schY={-0.731126}
      gateSide="left"
      drainPin={6}
      gatePin={2}
      sourcePin={1}
    />
    <MosfetUnit
      displayName="Q2"
      schX={1.343443}
      schY={1.645032}
      gateSide="right"
      drainPin={6}
      gatePin={2}
      sourcePin={1}
    />
    <MosfetUnit
      displayName="Q2"
      schX={1.343443}
      schY={-0.731126}
      gateSide="right"
      drainPin={5}
      gatePin={4}
      sourcePin={3}
    />

    <HiddenTwoPinPart
      name="R2"
      footprint="res0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
    />
    <HiddenTwoPinPart
      name="R3"
      footprint="res0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
    />
    <HiddenTwoPinPart
      name="R5"
      footprint="res0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
    />
    <HiddenTwoPinPart
      name="R4"
      footprint="res0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
    />

    <HiddenTwoPinPart
      name="C1"
      footprint="cap0805"
      manufacturerPartNumber="GRM21BR71H105KA12L"
    />
    <HiddenTwoPinPart
      name="C17"
      footprint="cap0402"
      manufacturerPartNumber="GCM155R71C104KA55D"
      doNotPlace
    />
    <HiddenTwoPinPart
      name="C18"
      footprint="cap0402"
      manufacturerPartNumber="GRM155R71C102KA01D"
      doNotPlace
    />

    <NetTie name="NT2" schX={-2.376158} schY={0.182781} />
    <NetTie name="NT3" schX={2.376158} schY={0.182781} />
    <NetTie name="NT4" schX={2.376158} schY={-1.462251} />
    <NetTie name="NT5" schX={0.731126} schY={-1.827814} />
    <NetTie name="NT6" schX={0.731126} schY={-2.924502} />

    <HiddenTwoPinPart
      name="R1"
      footprint="res2010"
      manufacturerPartNumber="CSRN2010FK40L0"
    />
    <HiddenTwoPinPart
      name="C16"
      footprint="cap0402"
      manufacturerPartNumber="GRM155R71C102KA01D"
    />

    <ReferenceHorizontalResistor
      name="R2"
      value="0"
      schX={-2.741721}
      schY={1.645032}
    />
    <ReferenceHorizontalResistor
      name="R3"
      value="0"
      schX={-2.741721}
      schY={-0.731126}
    />
    <ReferenceHorizontalResistor
      name="R5"
      value="0"
      schX={2.558939}
      schY={1.645032}
    />
    <ReferenceHorizontalResistor
      name="R4"
      value="0"
      schX={2.558939}
      schY={-0.731126}
    />
    <ReferenceVerticalCapacitor
      name="C1"
      value="1µF"
      schX={-0.913907}
      schY={3.198674}
    />
    <ReferenceHorizontalCapacitor
      name="C17"
      value="0.1µF"
      schX={-0.091391}
      schY={0.913907}
    />
    <ReferenceHorizontalCapacitor
      name="C18"
      value="1000pF"
      schX={-0.091391}
      schY={0}
    />
    <ReferenceVerticalResistor
      name="R1"
      value="0.04"
      schX={0}
      schY={-2.376158}
    />
    <ReferenceVerticalCapacitor
      name="C16"
      value="1000pF"
      schX={1.27947}
      schY={-2.284767}
    />
    <ReferenceGround schX={-0.913907} schY={2.924502} />
    <ReferenceGround schX={0} schY={-3.107283} />

    <ReferenceWiring />
    <ReferenceJunctions />

    {/* Electrical traces join only hidden component representations. The
        source-vector geometry above is consequently the sole visible layer. */}
    <trace from="R2.pin1" to="net.GH1" />
    <trace from="R2.pin2" to="Q1.G2" />
    <trace from="R3.pin1" to="net.GL1" />
    <trace from="R3.pin2" to="Q1.G1" />
    <trace from="Q2.G1" to="R5.pin1" />
    <trace from="R5.pin2" to="net.GH2" />
    <trace from="Q2.G2" to="R4.pin1" />
    <trace from="R4.pin2" to="net.GL2" />

    <trace from="Q1.D2" to="Q2.D1" />
    <trace from="C1.pin1" to="Q1.D2" />
    <trace from="Q1.D2" to="net.PVDD" />
    <trace from="C1.pin2" to="net.GND" />

    <trace from="Q1.S2" to="Q1.D1" />
    <trace from="NT2.pin2" to="Q1.S2" />
    <trace from="NT2.pin1" to="net.SH1" />
    <trace from="C17.pin1" to="Q1.S2" />
    <trace from="C18.pin1" to="C17.pin1" />

    <trace from="Q2.S1" to="Q2.D2" />
    <trace from="Q2.S1" to="NT3.pin1" />
    <trace from="NT3.pin2" to="net.SH2" />
    <trace from="C17.pin2" to="Q2.S1" />
    <trace from="C18.pin2" to="C17.pin2" />

    <trace from="Q1.S1" to="Q2.S2" />
    <trace from="Q2.S2" to="NT4.pin1" />
    <trace from="NT4.pin2" to="net.SL2" />
    <trace from="Q1.S1" to="R1.pin1" />
    <trace from="NT5.pin1" to="R1.pin1" />
    <trace from="NT5.pin2" to="net.SP" />
    <trace from="C16.pin1" to="NT5.pin2" />

    <trace from="R1.pin2" to="net.GND" />
    <trace from="R1.pin2" to="NT6.pin1" />
    <trace from="NT6.pin2" to="net.SN" />
    <trace from="C16.pin2" to="NT6.pin2" />

    <ReferenceNetLabel net="GH1" schX={-3.472846} schY={1.645032} />
    <ReferenceNetLabel net="GL1" schX={-3.472846} schY={-0.731126} />
    <ReferenceNetLabel net="GH2" schX={3.290065} schY={1.645032} />
    <ReferenceNetLabel net="GL2" schX={3.290065} schY={-0.731126} />
    <ReferenceNetLabel net="PVDD" schX={0.365563} schY={3.472846} />
    <ReferenceNetLabel net="SH1" schX={-3.472846} schY={0.182781} />
    <ReferenceNetLabel net="SH2" schX={3.290065} schY={0.182781} />
    <ReferenceNetLabel net="SL2" schX={3.290065} schY={-1.462251} />
    <ReferenceNetLabel net="SP" schX={1.645032} schY={-1.827814} />
    <ReferenceNetLabel net="SN" schX={1.645032} schY={-2.924502} />

    <port name="PVDD" direction="left" connectsTo="C1.pin1" />
    <port name="GH1" direction="left" connectsTo="net.GH1" />
    <port name="SH1" direction="left" connectsTo="net.SH1" />
    <port name="GL1" direction="left" connectsTo="net.GL1" />
    <port name="GH2" direction="right" connectsTo="net.GH2" />
    <port name="SH2" direction="right" connectsTo="net.SH2" />
    <port name="GL2" direction="right" connectsTo="net.GL2" />
    <port name="SL2" direction="right" connectsTo="net.SL2" />
    <port name="SP" direction="right" connectsTo="net.SP" />
    <port name="SN" direction="right" connectsTo="net.SN" />
    <port name="GND" direction="right" connectsTo="net.GND" />
  </subcircuit>
);

export default HBridge_SQJ940EP;
