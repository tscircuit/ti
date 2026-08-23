import "tscircuit";
import { TLV75533PDBVR } from "../lib/chips/TLV75533PDBVR.tsx";

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
 * TI TLV755P datasheet (SBVS320D), Figure 7-4, "TLV755P Typical Application":
 * https://www.ti.com/lit/ds/symlink/tlv755p.pdf#page=19
 * Figure asset: https://www.ti.com/ods/images/SBVS320D/GUID-0BCA8AAE-CBC2-4E39-90C5-FF3DE67E3CE3-low.gif
 */
export const TLV755P_TypicalApplication = () => (
  <board routingDisabled>
    <net
      name="GND"
      isGroundNet
      connectsTo={["CIN.pin2", "U1.pin2", "COUT.pin2"]}
    />

    <schematicrect
      schX={-4.1}
      schY={0.2}
      width={1.4}
      height={1.8}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="DC/DC"
      schX={-4.1}
      schY={0.35}
      fontSize={0.2}
      anchor="center"
    />
    <schematictext
      text="Converter"
      schX={-4.1}
      schY={0.05}
      fontSize={0.2}
      anchor="center"
    />

    <TLV75533PDBVR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={1.6}
      schHeight={2}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 3] },
        rightSide: { direction: "top-to-bottom", pins: [5] },
        bottomSide: { direction: "left-to-right", pins: [2] },
      }}
      schPinStyle={{
        pin1: { marginBottom: 0.8 },
        pin5: { marginBottom: 0.8 },
      }}
    />
    <schematictext
      text="TLV755P"
      schX={0}
      schY={0}
      fontSize={0.22}
      anchor="center"
    />

    <capacitor
      name="CIN"
      displayName=""
      capacitance="1uF"
      footprint="0402"
      schX={-2.1}
      schY={0.2}
      schOrientation="vertical"
    />
    <capacitor
      name="COUT"
      displayName=""
      capacitance="1uF"
      footprint="0402"
      schX={2.1}
      schY={0.2}
      schOrientation="vertical"
    />

    <trace from="CIN.pin1" to="U1.pin1" />
    <trace from="U1.pin5" to="COUT.pin1" />

    <schematicline
      x1={-3.4}
      y1={0.5}
      x2={-2.1}
      y2={0.5}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.1}
      y1={0.5}
      x2={3.4}
      y2={0.5}
      strokeWidth={0.02}
      color={PRIMARY}
    />

    <schematicrect
      schX={4.1}
      schY={0.2}
      width={1.4}
      height={1.8}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="Load"
      schX={4.1}
      schY={0.2}
      fontSize={0.22}
      anchor="center"
    />

    <schematicline
      x1={-3.4}
      y1={-0.7}
      x2={3.4}
      y2={-0.7}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-3.4}
      y1={-0.7}
      x2={-3.4}
      y2={-0.35}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={3.4}
      y1={-0.7}
      x2={3.4}
      y2={-0.35}
      strokeWidth={0.02}
      color={PRIMARY}
    />

    <schematiccircle
      center={{ x: -1.3, y: -0.55 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematicline
      x1={-1.3}
      y1={-0.55}
      x2={-0.8}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicpath
      points={[
        { x: -1.55, y: -1.15 },
        { x: -1.25, y: -1.15 },
        { x: -1.1, y: -0.85 },
        { x: -0.8, y: -0.85 },
      ]}
      strokeWidth={0.02}
      strokeColor={PRIMARY}
    />
    <schematictext
      text="ON"
      schX={-1.2}
      schY={-0.95}
      fontSize={0.18}
      anchor="center"
    />
    <schematictext
      text="OFF"
      schX={-1.65}
      schY={-1.25}
      fontSize={0.18}
      anchor="center"
    />

    <TiGround x={-2.1} y={-0.2} />
    <TiGround x={0} y={-1.25} />
    <TiGround x={2.1} y={-0.2} />
  </board>
);

export default TLV755P_TypicalApplication;
