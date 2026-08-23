import "tscircuit";
import { TPS61299DRLR } from "../lib/chips/TPS61299DRLR.tsx";

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
 * TI TPS61299 datasheet (SLVSGS9G), Figure 8-1,
 * "3.6-V Input Source to 5-V Boost Converter Under Fast Mode":
 * https://www.ti.com/lit/ds/symlink/tps61299.pdf#page=19
 * Figure asset: https://www.ti.com/ods/images/SLVSGS9G/GUID-20230315-SS0I-SNWQ-NK7H-W5SZXM5FNTJP-low.svg
 */
export const TPS61299_5VBoostConverter = () => (
  <board routingDisabled>
    <net
      name="GND"
      isGroundNet
      connectsTo={["C1.pin2", "U1.pin6", "C2.pin2"]}
    />
    <net name="VIN" connectsTo={["C1.pin1", "L1.pin1", "U1.pin1"]} />
    <net name="SW" connectsTo={["L1.pin2", "U1.pin2"]} />
    <net name="VOUT" connectsTo={["U1.pin4", "U1.pin5", "C2.pin1"]} />

    <TPS61299DRLR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={1.8}
      schHeight={2.1}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [2, 1, 3] },
        rightSide: { direction: "top-to-bottom", pins: [5, 4, 6] },
      }}
      schPinStyle={{
        pin2: { marginBottom: 0.35 },
        pin1: { marginBottom: 0.35 },
        pin5: { marginBottom: 0.35 },
        pin4: { marginBottom: 0.35 },
      }}
    />
    <schematictext
      text="TPS61299"
      schX={0}
      schY={-0.28}
      fontSize={0.18}
      anchor="center"
    />

    <inductor
      name="L1"
      displayName="L"
      inductance="1uH"
      footprint="0402"
      schX={-2.15}
      schY={0.65}
      schOrientation="horizontal"
    />
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0402"
      schX={-3.2}
      schY={0.35}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0402"
      schX={2.7}
      schY={0.25}
      schOrientation="vertical"
    />

    <schematicline
      x1={-4}
      y1={0.65}
      x2={-2.68}
      y2={0.65}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-3.2}
      y1={0.65}
      x2={-3.2}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-3.2}
      y1={0}
      x2={-1.3}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-1.62}
      y1={0.65}
      x2={-1.45}
      y2={0.65}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-1.45}
      y1={0.65}
      x2={-1.45}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-1.45}
      y1={0.55}
      x2={-1.3}
      y2={0.55}
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
      text="VIN"
      schX={-4.3}
      schY={0.65}
      fontSize={0.2}
      anchor="center"
    />

    <schematicline
      x1={1.3}
      y1={0.55}
      x2={4}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.3}
      y1={0}
      x2={2.3}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.3}
      y1={0}
      x2={2.3}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: 4, y: 0.55 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="VOUT 5V"
      schX={4.45}
      schY={0.55}
      fontSize={0.2}
      anchor="center"
    />

    <schematicline
      x1={-2.4}
      y1={-0.55}
      x2={-1.3}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicpath
      points={[
        { x: -2.75, y: -1.05 },
        { x: -2.45, y: -1.05 },
        { x: -2.3, y: -0.75 },
        { x: -2, y: -0.75 },
      ]}
      strokeWidth={0.02}
      strokeColor={PRIMARY}
    />
    <schematictext
      text="ON"
      schX={-1.65}
      schY={-0.85}
      fontSize={0.18}
      anchor="center"
    />
    <schematictext
      text="OFF"
      schX={-2.8}
      schY={-1.15}
      fontSize={0.18}
      anchor="center"
    />

    <TiGround x={-3.2} y={-0.05} />
    <schematicline
      x1={1.3}
      y1={-0.55}
      x2={1.3}
      y2={-0.85}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <TiGround x={1.3} y={-0.85} />
    <TiGround x={2.7} y={-0.15} />
  </board>
);

export default TPS61299_5VBoostConverter;
