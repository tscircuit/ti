import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

type GroundProps = {
  net: "GND" | "_Vpri";
  connectsTo: string | string[];
  schX: number;
  schY: number;
  anchorSide?: "left" | "top" | "right" | "bottom";
};

const Ground = ({
  net,
  connectsTo,
  schX,
  schY,
  anchorSide = "top",
}: GroundProps) => (
  <netlabel
    net={net}
    connectsTo={connectsTo}
    schX={schX}
    schY={schY}
    anchorSide={anchorSide}
  />
);

const symbolStroke = 0.04;
const symbolColor = "#c77600";

const TransformerCoilArc = ({
  x,
  y,
  startAngleDegrees,
  endAngleDegrees,
}: {
  x: number;
  y: number;
  startAngleDegrees: number;
  endAngleDegrees: number;
}) => (
  <schematicarc
    center={{ x, y }}
    radius={0.23}
    startAngleDegrees={startAngleDegrees}
    endAngleDegrees={endAngleDegrees}
    direction="clockwise"
    strokeWidth={symbolStroke}
    color={symbolColor}
  />
);

const AcInputSymbol = () => (
  <symbol>
    <schematiccircle
      center={{ x: 0, y: 0 }}
      radius={0.62}
      strokeWidth={symbolStroke}
      color={symbolColor}
      isFilled={false}
    />
    <schematicarc
      center={{ x: -0.21, y: 0 }}
      radius={0.21}
      startAngleDegrees={-90}
      endAngleDegrees={90}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematicarc
      center={{ x: 0.21, y: 0 }}
      radius={0.21}
      startAngleDegrees={90}
      endAngleDegrees={270}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematictext
      text="J2"
      schX={0.78}
      schY={0}
      fontSize={0.22}
      anchor="left"
    />
    <port
      name="pin2"
      pinNumber={2}
      schX={0}
      schY={0.95}
      direction="up"
      schStemLength={0.33}
    />
    <port
      name="pin1"
      pinNumber={1}
      schX={0}
      schY={-0.95}
      direction="down"
      schStemLength={0.33}
    />
  </symbol>
);

const BridgeRectifierSymbol = () => (
  <symbol>
    <schematicpath
      points={[
        { x: 0, y: 0.9 },
        { x: 0.9, y: 0 },
        { x: 0, y: -0.9 },
        { x: -0.9, y: 0 },
        { x: 0, y: 0.9 },
      ]}
      strokeWidth={symbolStroke}
    />
    <schematictext text="+" schX={0} schY={0.55} fontSize={0.2} />
    <schematictext text="−" schX={0} schY={-0.55} fontSize={0.2} />
    <schematictext text="~" schX={-0.55} schY={0} fontSize={0.2} />
    <schematictext text="~" schX={0.55} schY={0} fontSize={0.2} />
    <schematictext text="D6" schX={0} schY={1.35} fontSize={0.22} />
    <schematictext text="DF06M" schX={0} schY={1.08} fontSize={0.2} />
    <port
      name="pin1"
      pinNumber={1}
      schX={0}
      schY={1.2}
      direction="up"
      schStemLength={0.3}
    />
    <port
      name="pin2"
      pinNumber={2}
      schX={0}
      schY={-1.2}
      direction="down"
      schStemLength={0.3}
    />
    <port
      name="pin4"
      pinNumber={4}
      schX={-1.2}
      schY={0}
      direction="left"
      schStemLength={0.3}
    />
    <port
      name="pin3"
      pinNumber={3}
      schX={1.2}
      schY={0}
      direction="right"
      schStemLength={0.3}
    />
  </symbol>
);

const TransformerSymbol = () => (
  <symbol>
    <schematictext text="T1" schX={0} schY={2.55} fontSize={0.24} />
    <schematictext
      text="750315942 Rev01"
      schX={0}
      schY={2.27}
      fontSize={0.19}
    />

    <schematicline
      x1={-0.05}
      y1={-1.9}
      x2={-0.05}
      y2={1.9}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematicline
      x1={0.08}
      y1={-1.9}
      x2={0.08}
      y2={1.9}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />

    {[-1.35, -0.9, -0.45, 0, 0.45, 0.9, 1.35].map((y) => (
      <TransformerCoilArc
        key={`primary-${y}`}
        x={-0.34}
        y={y}
        startAngleDegrees={-90}
        endAngleDegrees={90}
      />
    ))}
    {[-1.42, -0.94, -0.46, 0.5, 0.98, 1.46].map((y) => (
      <TransformerCoilArc
        key={`secondary-${y}`}
        x={0.37}
        y={y}
        startAngleDegrees={90}
        endAngleDegrees={270}
      />
    ))}

    <schematicline
      x1={-1.05}
      y1={1.55}
      x2={-0.34}
      y2={1.55}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematicline
      x1={-1.05}
      y1={-1.55}
      x2={-0.34}
      y2={-1.55}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematicline
      x1={0.37}
      y1={1.7}
      x2={1.05}
      y2={1.7}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematicline
      x1={0.37}
      y1={0.25}
      x2={1.05}
      y2={0.25}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematicline
      x1={0.37}
      y1={-0.25}
      x2={1.05}
      y2={-0.25}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematicline
      x1={0.37}
      y1={-1.7}
      x2={1.05}
      y2={-1.7}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />

    <schematiccircle
      center={{ x: -0.48, y: 1.72 }}
      radius={0.06}
      color={symbolColor}
      isFilled
    />
    <schematiccircle
      center={{ x: 0.51, y: 1.87 }}
      radius={0.06}
      color={symbolColor}
      isFilled
    />
    <schematiccircle
      center={{ x: 0.51, y: -0.08 }}
      radius={0.06}
      color={symbolColor}
      isFilled
    />

    <port
      name="pin8"
      pinNumber={8}
      schX={-1.05}
      schY={1.55}
      direction="left"
      schStemLength={0}
    />
    <port
      name="pin6"
      pinNumber={6}
      schX={-1.05}
      schY={-1.55}
      direction="left"
      schStemLength={0}
    />
    <port
      name="pin4"
      pinNumber={4}
      schX={1.05}
      schY={1.7}
      direction="right"
      schStemLength={0}
    />
    <port
      name="pin2"
      pinNumber={2}
      schX={1.05}
      schY={0.25}
      direction="right"
      schStemLength={0}
    />
    <port
      name="pin1"
      pinNumber={1}
      schX={1.05}
      schY={-0.25}
      direction="right"
      schStemLength={0}
    />
    <port
      name="pin3"
      pinNumber={3}
      schX={1.05}
      schY={-1.7}
      direction="right"
      schStemLength={0}
    />
  </symbol>
);

const ProtectionZenerSymbol = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <symbol>
    <schematicrect
      schX={0}
      schY={0}
      width={1.15}
      height={1.45}
      strokeWidth={symbolStroke}
      color={symbolColor}
      isFilled={false}
    />
    <schematicpath
      points={[
        { x: -0.28, y: -0.14 },
        { x: 0.28, y: -0.14 },
        { x: 0, y: 0.28 },
        { x: -0.28, y: -0.14 },
      ]}
      strokeWidth={symbolStroke}
    />
    <schematicline
      x1={-0.28}
      y1={0.34}
      x2={0.28}
      y2={0.34}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematicline
      x1={-0.28}
      y1={0.34}
      x2={-0.38}
      y2={0.45}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematicline
      x1={0.28}
      y1={0.34}
      x2={0.38}
      y2={0.23}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematictext
      text={name}
      schX={-0.8}
      schY={0.35}
      fontSize={0.2}
      anchor="right"
    />
    <schematictext
      text={value}
      schX={0.8}
      schY={0.35}
      fontSize={0.17}
      anchor="left"
    />
    <schematictext text="NC" schX={0.31} schY={-0.47} fontSize={0.16} />
    <port
      name="pin3"
      pinNumber={3}
      schX={0}
      schY={1.02}
      direction="up"
      schStemLength={0.3}
    />
    <port
      name="pin2"
      pinNumber={2}
      schX={0}
      schY={-1.02}
      direction="down"
      schStemLength={0.3}
    />
    <port
      name="pin1"
      pinNumber={1}
      schX={0.9}
      schY={-0.45}
      direction="right"
      schStemLength={0.33}
    />
  </symbol>
);

const OutputConnectorSymbol = () => (
  <symbol>
    <schematicrect
      schX={0}
      schY={0}
      width={0.7}
      height={2.4}
      strokeWidth={symbolStroke}
      color={symbolColor}
      isFilled={false}
    />
    <schematictext text="J1" schX={0} schY={1.5} fontSize={0.22} />
    <port
      name="pin3"
      pinNumber={3}
      schX={-0.65}
      schY={0.78}
      direction="left"
      schStemLength={0.3}
    />
    <port
      name="pin2"
      pinNumber={2}
      schX={-0.65}
      schY={0}
      direction="left"
      schStemLength={0.3}
    />
    <port
      name="pin1"
      pinNumber={1}
      schX={-0.65}
      schY={-0.78}
      direction="left"
      schStemLength={0.3}
    />
  </symbol>
);

const TestpointSymbol = ({ color = "#d63b32" }: { color?: string }) => (
  <symbol>
    <schematiccircle
      center={{ x: 0, y: 0 }}
      radius={0.09}
      color={color}
      isFilled
    />
    <port
      name="pin1"
      pinNumber={1}
      schX={0}
      schY={0}
      direction="right"
      schStemLength={0}
    />
  </symbol>
);

const ReturnJumperSymbol = () => (
  <symbol>
    <schematicarc
      center={{ x: 0, y: 0 }}
      radius={0.6}
      startAngleDegrees={0}
      endAngleDegrees={180}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematicline
      x1={-0.9}
      y1={0}
      x2={-0.6}
      y2={0}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematicline
      x1={0.6}
      y1={0}
      x2={0.9}
      y2={0}
      strokeWidth={symbolStroke}
      color={symbolColor}
    />
    <schematictext text="J3" schX={0} schY={0.85} fontSize={0.22} />
    <port
      name="pin1"
      pinNumber={1}
      schX={-0.9}
      schY={0}
      direction="left"
      schStemLength={0}
    />
    <port
      name="pin2"
      pinNumber={2}
      schX={0.9}
      schY={0}
      direction="right"
      schStemLength={0}
    />
  </symbol>
);

/**
 * PMP11774 8 W auxiliary flyback power supply.
 * Values, reference designators, pin nets, and functional placement follow
 * TI's released PMP11774 Rev C schematic and BOM (TIDRLL5/TIDRLL6).
 * @see https://www.ti.com/lit/pdf/TIDRLL5
 * @see https://www.ti.com/lit/pdf/TIDRLL6
 */
export const PMP11774_AuxiliaryPower = (props: SubcircuitProps) => (
  <subcircuit
    {...props}
    routingDisabled
    schMaxTraceDistance="5.5mm"
    schTraceAutoLabelEnabled={false}
  >
    <net name="GND" isGroundNet />
    <net name="_Vpri" isGroundNet />
    <net name="Vbulk" isPowerNet />
    <net name="VDD" isPowerNet />
    <net name="VS" />
    <net name="Vsec" />
    <net name="Vsec_5" />
    <net name="Vout_18" isPowerNet />
    <net name="Vout_5" isPowerNet />

    {/* AC input, EMI filter, and bridge rectifier */}
    <connector
      name="J2"
      schX={-16.25}
      schY={2.45}
      manufacturerPartNumber="770W-X2/10"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin2: "2", pin1: "1" }}
      symbol={<AcInputSymbol />}
    />
    <schematictext
      text="100Vac to 254Vac"
      schX={-17.4}
      schY={2.45}
      fontSize={0.25}
      anchor="right"
    />
    <testpoint
      name="TP_LINE"
      displayName="Line"
      schX={-17.45}
      schY={3.35}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
      symbol={<TestpointSymbol />}
    />
    <testpoint
      name="TP_NEUTRAL"
      displayName="Neutral"
      schX={-17.45}
      schY={1.55}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
      symbol={<TestpointSymbol />}
    />
    <schematictext
      text="Line"
      schX={-17.7}
      schY={3.48}
      fontSize={0.2}
      anchor="right"
    />
    <schematictext
      text="Neutral"
      schX={-17.7}
      schY={1.68}
      fontSize={0.2}
      anchor="right"
    />
    <resistor
      name="R2"
      schX={-14.6}
      schY={3.35}
      resistance="10ohm"
      footprint="pinrow2_p2.54mm"
    />
    <capacitor
      name="C5"
      schX={-13.25}
      schY={2.45}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <inductor
      name="L1"
      schX={-11.6}
      schY={3.35}
      inductance="1mH"
      footprint="pinrow2_p2.54mm"
    />
    <resistor
      name="R4"
      schX={-11.6}
      schY={2.55}
      resistance="10k"
      footprint="1206"
    />
    <inductor
      name="L2"
      displayName="L2 (short)"
      schX={-11.6}
      schY={1.55}
      inductance="1nH"
      footprint="pinrow2_p2.54mm"
    />
    <resistor
      name="R9"
      displayName="R9 (DNP)"
      schX={-11.6}
      schY={0.95}
      resistance="10k"
      footprint="1206"
      doNotPlace
    />
    <chip
      name="D6"
      schX={-9.1}
      schY={2.45}
      manufacturerPartNumber="DF06M"
      footprint="pinrow4_p2.54mm"
      symbol={<BridgeRectifierSymbol />}
    />
    <capacitor
      name="C4"
      schX={-6.7}
      schY={2.45}
      capacitance="15uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />

    <trace path={["TP_LINE.pin1", "J2.pin2", "R2.pin1"]} />
    <trace path={["TP_NEUTRAL.pin1", "J2.pin1"]} />
    <trace path={["R2.pin2", "C5.pin1", "L1.pin1", "R4.pin1"]} />
    <trace path={["L1.pin2", "R4.pin2", "D6.pin4"]} />
    <trace path={["TP_NEUTRAL.pin1", "C5.pin2", "L2.pin1", "R9.pin1"]} />
    <trace name="~" path={["R9.pin2", "D6.pin3", "L2.pin2"]} />
    <netlabel
      net="Vbulk"
      connectsTo={["D6.pin1", "C4.pin1"]}
      schX={-7.65}
      schY={3.9}
      anchorSide="bottom"
    />
    <Ground
      net="_Vpri"
      connectsTo={["D6.pin2", "C4.pin2"]}
      schX={-7.65}
      schY={0.85}
    />

    {/* Primary winding, clamp network, and transformer */}
    <capacitor
      name="C3"
      displayName="C3 (DNP)"
      schX={-4.1}
      schY={4.15}
      capacitance="1000pF"
      footprint="0805"
      schOrientation="vertical"
      doNotPlace
    />
    <resistor
      name="R1"
      displayName="R1 (DNP)"
      schX={-3}
      schY={4.15}
      resistance="120k"
      footprint="1206"
      schOrientation="vertical"
      doNotPlace
    />
    <resistor
      name="R7"
      displayName="R7 (DNP)"
      schX={-3.55}
      schY={2.75}
      resistance="10ohm"
      footprint="1206"
      schRotation={180}
      doNotPlace
    />
    <diode
      name="D2"
      displayName="D2 (DNP)"
      schX={-2.15}
      schY={2.75}
      manufacturerPartNumber="DFLR1600-7"
      footprint="pinrow2_p2.54mm"
      variant="standard"
      schRotation={180}
      doNotPlace
    />
    <chip
      name="T1"
      schX={0}
      schY={3.65}
      manufacturerPartNumber="750315942_Rev01"
      footprint="pinrow6_p2.54mm"
      pinLabels={{
        pin8: "8",
        pin6: "6",
        pin4: "4",
        pin2: "2",
        pin1: "1",
        pin3: "3",
      }}
      symbol={<TransformerSymbol />}
    />

    <netlabel
      net="Vbulk"
      connectsTo={["C3.pin2", "R1.pin1", "T1.pin8"]}
      schX={-2.8}
      schY={5.1}
      anchorSide="bottom"
    />
    <trace path={["C3.pin1", "R1.pin2", "R7.pin2"]} />
    <trace from="R7.pin1" to="D2.pin2" />
    <trace from="D2.pin1" to="T1.pin6" />

    {/* 18 V and 5 V rectifier/output networks */}
    <diode
      name="D1"
      schX={2.25}
      schY={5.55}
      manufacturerPartNumber="STPS1150A"
      footprint="sma"
      variant="schottky"
    />
    <capacitor
      name="C1"
      schX={5.2}
      schY={4.55}
      capacitance="150uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      schX={6.7}
      schY={4.55}
      capacitance="10uF"
      footprint="1210"
      schOrientation="vertical"
    />
    <resistor
      name="R3"
      schX={10}
      schY={4.55}
      resistance="10k"
      footprint="0805"
      schOrientation="vertical"
    />
    <chip
      name="D5"
      schX={11.7}
      schY={4.55}
      manufacturerPartNumber="BZX84C20LT1G"
      footprint="sot23"
      noConnect={["pin1"]}
      symbol={<ProtectionZenerSymbol name="D5" value="BZX84C20LT1G" />}
    />
    <testpoint
      name="TP1"
      schX={14.2}
      schY={5.55}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
      symbol={<TestpointSymbol />}
    />

    <resistor
      name="R5"
      displayName="R5 (DNP)"
      schX={1.75}
      schY={3.65}
      resistance="0ohm"
      footprint="0805"
      schOrientation="vertical"
      doNotPlace
    />
    <diode
      name="D3"
      schX={3.1}
      schY={1.75}
      manufacturerPartNumber="B160-13-F"
      footprint="sma"
      variant="schottky"
    />
    <resistor
      name="R6"
      schX={4.45}
      schY={2.55}
      resistance="0ohm"
      footprint="0805"
      schOrientation="vertical"
    />
    <capacitor
      name="C6"
      schX={6.2}
      schY={0.75}
      capacitance="330uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C7"
      schX={7.7}
      schY={0.75}
      capacitance="100uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C8"
      schX={9.2}
      schY={0.75}
      capacitance="10uF"
      footprint="1210"
      schOrientation="vertical"
    />
    <resistor
      name="R8"
      schX={10.7}
      schY={0.75}
      resistance="10k"
      footprint="0805"
      schOrientation="vertical"
    />
    <chip
      name="D7"
      schX={12.2}
      schY={0.75}
      manufacturerPartNumber="BZX84C6V8LT1G"
      footprint="sot23"
      noConnect={["pin1"]}
      symbol={<ProtectionZenerSymbol name="D7" value="BZX84C6V8LT1G" />}
    />
    <testpoint
      name="TP2"
      schX={14.2}
      schY={1.75}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
      symbol={<TestpointSymbol />}
    />
    <testpoint
      name="TP_GND1"
      displayName="GND.1"
      schX={7}
      schY={-0.65}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
      symbol={<TestpointSymbol color="#202124" />}
    />
    <schematictext
      text="TP1"
      schX={14.4}
      schY={5.72}
      fontSize={0.18}
      anchor="left"
      color="#d63b32"
    />
    <schematictext
      text="TP2"
      schX={14.4}
      schY={1.92}
      fontSize={0.18}
      anchor="left"
      color="#d63b32"
    />
    <schematictext
      text="GND.1"
      schX={7.15}
      schY={-0.48}
      fontSize={0.18}
      anchor="left"
    />
    <connector
      name="J1"
      schX={15.8}
      schY={3.65}
      manufacturerPartNumber="1757255"
      footprint="pinrow3_p2.54mm"
      pinLabels={{ pin3: "18V", pin2: "GND", pin1: "5V" }}
      symbol={<OutputConnectorSymbol />}
    />
    <schematictext
      text="5V @ 350mA"
      schX={16.45}
      schY={2.75}
      fontSize={0.22}
      anchor="left"
    />

    <trace from="T1.pin4" to="D1.pin1" />
    <netlabel
      net="Vsec"
      connectsTo="T1.pin4"
      schX={1.4}
      schY={6.1}
      anchorSide="bottom"
    />
    <trace
      path={[
        "D1.pin2",
        "C1.pin1",
        "C2.pin1",
        "R3.pin2",
        "D5.pin3",
        "TP1.pin1",
        "J1.pin3",
      ]}
    />
    <netlabel
      net="Vout_18"
      connectsTo="TP1.pin1"
      schX={13.6}
      schY={5.95}
      anchorSide="bottom"
    />
    <trace path={["C1.pin2", "C2.pin2", "R3.pin1", "D5.pin2", "J1.pin2"]} />
    <Ground net="GND" connectsTo="C1.pin2" schX={8.35} schY={3.25} />

    <trace path={["T1.pin2", "R5.pin2", "R6.pin2"]} />
    <trace path={["T1.pin1", "R5.pin1", "D3.pin1"]} />
    <netlabel
      net="Vsec_5"
      connectsTo="T1.pin1"
      schX={2.1}
      schY={2.55}
      anchorSide="bottom"
    />
    <trace
      path={[
        "D3.pin2",
        "R6.pin1",
        "C6.pin1",
        "C7.pin1",
        "C8.pin1",
        "R8.pin2",
        "D7.pin3",
        "TP2.pin1",
        "J1.pin1",
      ]}
    />
    <netlabel
      net="Vout_5"
      connectsTo="TP2.pin1"
      schX={13.6}
      schY={2.15}
      anchorSide="bottom"
    />
    <trace
      path={["T1.pin3", "C6.pin2", "C7.pin2", "C8.pin2", "R8.pin1", "D7.pin2"]}
    />
    <Ground net="GND" connectsTo="D7.pin2" schX={12.2} schY={-0.55} />
    <trace from="TP_GND1.pin1" to="net.GND" schDisplayLabel="GND" />

    {/* UCC28911 bias, regulation divider, and current-limit network */}
    <diode
      name="D4"
      schX={-13.2}
      schY={-2.4}
      manufacturerPartNumber="BAV20WS-TP"
      footprint="sod323"
      variant="standard"
    />
    <resistor
      name="R10"
      schX={-11.7}
      schY={-2.4}
      resistance="10ohm"
      footprint="0603"
    />
    <capacitor
      name="C10"
      schX={-10.4}
      schY={-3.55}
      capacitance="22uF"
      footprint="1210"
      schOrientation="vertical"
    />
    <resistor
      name="R116"
      schX={-9}
      schY={-2.4}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
    />
    <capacitor
      name="C9"
      schX={-7.65}
      schY={-3.55}
      capacitance="0.1uF"
      footprint="0603"
      schOrientation="vertical"
    />
    <resistor
      name="R17"
      schX={-5.35}
      schY={-2.9}
      resistance="0ohm"
      footprint="1206"
      schOrientation="vertical"
    />
    <resistor
      name="R12"
      schX={-5.35}
      schY={-3.55}
      resistance="23.7k"
      footprint="0603"
      schOrientation="vertical"
    />
    <resistor
      name="R11"
      displayName="R11 (DNP)"
      schX={-6.65}
      schY={-4.25}
      resistance="110k"
      footprint="0603"
      schOrientation="vertical"
      doNotPlace
    />
    <resistor
      name="R14"
      displayName="R14 (DNP)"
      schX={-5.75}
      schY={-5}
      resistance="91k"
      footprint="0603"
      schOrientation="vertical"
      doNotPlace
    />
    <resistor
      name="R15"
      schX={-4.45}
      schY={-5}
      resistance="61.9k"
      footprint="0603"
      schOrientation="vertical"
    />
    <capacitor
      name="C12"
      displayName="C12 (DNP)"
      schX={-3.15}
      schY={-5}
      capacitance="10pF"
      footprint="0603"
      schOrientation="vertical"
      doNotPlace
    />
    <chip
      name="U1"
      schX={-2.25}
      schY={-1.7}
      manufacturerPartNumber="UCC28911DR"
      footprint="pinrow7_p2.54mm"
      pinLabels={{
        pin1: "GND",
        pin2: "GND",
        pin3: "GND",
        pin4: "IPK",
        pin5: "VS",
        pin6: "VDD",
        pin8: "DRAIN",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [6, 5] },
        rightSide: { direction: "top-to-bottom", pins: [8, 4, 1, 2, 3] },
      }}
      schPinStyle={{
        pin5: { marginTop: 0.8 },
        pin4: { marginTop: 0.35 },
        pin1: { marginTop: 0.35 },
      }}
      schWidth="2.4mm"
      schHeight="2.8mm"
    />
    <resistor
      name="R13"
      schX={0}
      schY={-4.1}
      resistance="1.38k"
      footprint="0603"
      schOrientation="vertical"
    />
    <capacitor
      name="C11"
      displayName="C11 (DNP)"
      schX={1.2}
      schY={-4.1}
      capacitance="10pF"
      footprint="0603"
      schOrientation="vertical"
      doNotPlace
    />

    <netlabel
      net="Vsec"
      connectsTo={["D4.pin1", "R11.pin2"]}
      schX={-14.15}
      schY={-2.4}
      anchorSide="right"
    />
    <trace path={["D4.pin2", "R10.pin1"]} />
    <trace path={["R10.pin2", "C10.pin1", "R116.pin1"]} />
    <trace path={["R116.pin2", "C9.pin1"]} />
    <Ground net="GND" connectsTo="C10.pin2" schX={-10.4} schY={-4.6} />
    <Ground net="_Vpri" connectsTo="C9.pin2" schX={-7.65} schY={-4.6} />
    <netlabel
      net="VDD"
      connectsTo={["C9.pin1", "R17.pin1", "R12.pin2", "U1.pin6"]}
      schX={-4.7}
      schY={-1.9}
      anchorSide="bottom"
    />
    <netlabel
      net="Vsec_5"
      connectsTo="R17.pin2"
      schX={-5.8}
      schY={-1.9}
      anchorSide="bottom"
    />
    <netlabel
      net="Vsec"
      connectsTo="R11.pin2"
      schX={-6.15}
      schY={-3.55}
      anchorSide="bottom"
    />
    <trace
      path={["R11.pin1", "R12.pin1", "R14.pin2", "R15.pin2", "C12.pin2"]}
    />
    <netlabel
      net="VS"
      connectsTo={["R12.pin1", "U1.pin5"]}
      schX={-4.7}
      schY={-3.55}
      anchorSide="bottom"
    />
    <Ground
      net="_Vpri"
      connectsTo={["R14.pin1", "R15.pin1", "C12.pin1"]}
      schX={-4.45}
      schY={-5.85}
    />
    <trace from="T1.pin6" to="U1.pin8" />
    <trace path={["U1.pin4", "R13.pin2", "C11.pin2"]} />
    <trace path={["U1.pin1", "U1.pin2", "U1.pin3"]} />
    <Ground net="_Vpri" connectsTo="U1.pin3" schX={-0.65} schY={-4.9} />
    <Ground
      net="_Vpri"
      connectsTo={["R13.pin1", "C11.pin1"]}
      schX={0.6}
      schY={-5}
    />

    {/* Optional return-to-return links from the released design */}
    <jumper
      name="J3"
      schX={8.5}
      schY={-6}
      manufacturerPartNumber="923345-05-C"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "VPRI", pin2: "GND" }}
      symbol={<ReturnJumperSymbol />}
    />
    <resistor
      name="R16"
      schX={2.5}
      schY={-5.7}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
    />
    <trace from="J3.pin1" to="net._Vpri" schDisplayLabel="-Vpri" />
    <trace from="J3.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="R16.pin1" to="net.GND" schDisplayLabel="GND" />
    <trace from="R16.pin2" to="net.GND" schDisplayLabel="GND" />
  </subcircuit>
);

export default PMP11774_AuxiliaryPower;
