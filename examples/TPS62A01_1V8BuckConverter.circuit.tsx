import "tscircuit";
import { TPS62A01PDDCR } from "../lib/chips/TPS62A01PDDCR.tsx";

const PRIMARY = "#840000";

const TiGround = ({ x, y }: { x: number; y: number }) => (
  <>
    <schematicline
      x1={x}
      y1={y + 0.1}
      x2={x}
      y2={y}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicpath
      points={[
        { x: x - 0.13, y },
        { x: x + 0.13, y },
        { x, y: y - 0.22 },
        { x: x - 0.13, y },
      ]}
      strokeWidth={0.02}
      strokeColor={PRIMARY}
      isFilled
      fillColor={PRIMARY}
    />
  </>
);

/**
 * TI TPS62A01 datasheet (SLUSEG9E), Figure 8-1,
 * "TPS62A01 Typical Application Circuit":
 * https://www.ti.com/lit/ds/symlink/tps62a01.pdf#page=11
 * Figure asset: https://www.ti.com/ods/images/SLUSEG9E/GUID-20230310-SS0I-R5NB-L5XF-FBXFT6BWQ4KP-low.svg
 */
export const TPS62A01_1V8BuckConverter = () => (
  <board routingDisabled>
    <net
      name="GND"
      isGroundNet
      connectsTo={["C1.pin2", "U1.pin2", "R2.pin2", "C2.pin2"]}
    />
    <net name="VIN" connectsTo={["U1.pin4", "C1.pin1", "R4.pin1"]} />
    <net name="SW" connectsTo={["U1.pin3", "L1.pin1"]} />
    <net
      name="VOUT"
      connectsTo={["L1.pin2", "R1.pin1", "C3.pin1", "C2.pin1"]}
    />
    <net name="FB" connectsTo={["U1.pin6", "R1.pin2", "R2.pin1", "C3.pin2"]} />
    <net name="PG" connectsTo={["U1.pin5", "R4.pin2"]} />

    <TPS62A01PDDCR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={1.8}
      schHeight={2.2}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [4, 2, 1] },
        rightSide: { direction: "top-to-bottom", pins: [3, 6, 5] },
      }}
      schPinStyle={{
        pin4: { marginBottom: 0.35 },
        pin2: { marginBottom: 0.35 },
        pin3: { marginBottom: 0.35 },
        pin6: { marginBottom: 0.35 },
      }}
    />
    <schematictext
      text="TPS62A01"
      schX={0}
      schY={1.35}
      fontSize={0.2}
      anchor="center"
    />

    <capacitor
      name="C1"
      capacitance="4.7uF"
      footprint="0402"
      schX={-2.8}
      schY={0.35}
      schOrientation="vertical"
    />
    <inductor
      name="L1"
      inductance="1uH"
      footprint="0402"
      schX={2.1}
      schY={0.7}
      schOrientation="horizontal"
    />
    <resistor
      name="R1"
      resistance="200k"
      footprint="0402"
      schX={3.4}
      schY={0.3}
      schOrientation="vertical"
    />
    <resistor
      name="R2"
      resistance="100k"
      footprint="0402"
      schX={3.4}
      schY={-0.55}
      schOrientation="vertical"
    />
    <capacitor
      name="C3"
      capacitance="10pF"
      footprint="0402"
      schX={4.2}
      schY={0.3}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="22uF"
      footprint="0402"
      schX={5}
      schY={0.35}
      schOrientation="vertical"
    />
    <resistor
      name="R4"
      resistance="499k"
      footprint="0402"
      schX={1.7}
      schY={-0.05}
      schOrientation="vertical"
    />

    <schematicline
      x1={-4}
      y1={0.65}
      x2={-2.8}
      y2={0.65}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-2.8}
      y1={0.65}
      x2={-1.5}
      y2={0.65}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-1.5}
      y1={0.65}
      x2={-1.5}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-1.5}
      y1={0.55}
      x2={-1.3}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-2.8}
      y1={0.65}
      x2={-2.8}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-2.8}
      y1={-0.55}
      x2={-1.3}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-1.3}
      y1={0}
      x2={-1.75}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-1.75}
      y1={0}
      x2={-1.75}
      y2={-0.35}
      strokeWidth={0.02}
      color={PRIMARY}
    />

    <schematicline
      x1={1.3}
      y1={0.55}
      x2={1.45}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.45}
      y1={0.55}
      x2={1.45}
      y2={0.7}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.45}
      y1={0.7}
      x2={1.57}
      y2={0.7}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.63}
      y1={0.7}
      x2={5.9}
      y2={0.7}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={3.4}
      y1={0.7}
      x2={3.4}
      y2={0.6}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={4.2}
      y1={0.7}
      x2={4.2}
      y2={0.6}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={5}
      y1={0.7}
      x2={5}
      y2={0.65}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.3}
      y1={0}
      x2={4.2}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={3.4}
      y1={0}
      x2={3.4}
      y2={-0.25}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: -4, y: 0.65 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="VIN 2.5V to 5.5V"
      schX={-4.65}
      schY={0.65}
      fontSize={0.2}
      anchor="center"
    />

    <schematiccircle
      center={{ x: 5.9, y: 0.7 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="VOUT 1.8V / 1A"
      schX={6.55}
      schY={0.7}
      fontSize={0.2}
      anchor="center"
    />

    <schematictext
      text="VIN"
      schX={1.7}
      schY={0.62}
      fontSize={0.18}
      anchor="center"
    />
    <schematicline
      x1={1.7}
      y1={0.5}
      x2={1.7}
      y2={0.25}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.3}
      y1={-0.55}
      x2={2.65}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.7}
      y1={-0.35}
      x2={1.7}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: 2.65, y: -0.55 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="VPG"
      schX={2.95}
      schY={-0.55}
      fontSize={0.18}
      anchor="center"
    />

    <TiGround x={-2.8} y={-0.05} />
    <TiGround x={-1.75} y={-0.35} />
    <TiGround x={3.4} y={-1.1} />
    <TiGround x={5} y={-0.05} />
  </board>
);

export default TPS62A01_1V8BuckConverter;
