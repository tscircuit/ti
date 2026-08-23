import "tscircuit";
import { TPS7A2028PDBVR } from "../lib/chips/TPS7A2028PDBVR.tsx";

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
 * TI TPS7A20 datasheet (SBVS338H), Figure 7-4, "TPS7A20 Typical Application":
 * https://www.ti.com/lit/ds/symlink/tps7a20.pdf#page=30
 *
 * Figure 7-4 and Table 7-1 use the fixed 2.8 V device, with 1 uF input and
 * output capacitors. Placement intentionally follows the TI figure: input and
 * enable on the left, output on the right, and the three ground returns below.
 */
export const TPS7A20_TypicalApplication = () => (
  <board routingDisabled>
    <net
      name="GND"
      isGroundNet
      connectsTo={["C1.pin2", "U1.pin2", "C2.pin2"]}
    />

    <TPS7A2028PDBVR
      name="U1"
      schX={0}
      schY={0}
      pinLabels={{
        pin1: "pin1",
        pin2: "pin2",
        pin3: "pin3",
        pin4: "pin4",
        pin5: "pin5",
      }}
      symbol={
        <symbol>
          <schematicrect
            schX={0}
            schY={0}
            width={1.4}
            height={2.2}
            strokeWidth={0.03}
            color={PRIMARY}
            isFilled={false}
          />
          <schematictext
            text="TPS7A20"
            schX={0}
            schY={0}
            fontSize={0.22}
            anchor="center"
            color={PRIMARY}
          />
          <port
            name="pin1"
            pinNumber={1}
            schX={-1}
            schY={0.6}
            direction="left"
            schStemLength={0.3}
          />
          <port
            name="pin3"
            pinNumber={3}
            schX={-1}
            schY={-0.75}
            direction="left"
            schStemLength={0.3}
          />
          <port
            name="pin5"
            pinNumber={5}
            schX={1}
            schY={0.6}
            direction="right"
            schStemLength={0.3}
          />
          <port
            name="pin2"
            pinNumber={2}
            schX={0}
            schY={-1.4}
            direction="down"
            schStemLength={0.3}
          />
        </symbol>
      }
    />

    <capacitor
      name="C1"
      displayName=""
      capacitance="1uF"
      footprint="0402"
      schX={-2.4}
      schY={0.3}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      displayName=""
      capacitance="1uF"
      footprint="0402"
      schX={2.4}
      schY={0.3}
      schOrientation="vertical"
    />

    <trace from="U1.pin1" to="C1.pin1" />
    <trace from="U1.pin5" to="C2.pin1" />

    <schematicline
      x1={-3.8}
      y1={0.6}
      x2={-2.4}
      y2={0.6}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: -3.8, y: 0.6 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="INPUT"
      schX={-4.2}
      schY={0.6}
      fontSize={0.2}
      anchor="center"
    />

    <schematicline
      x1={-3.8}
      y1={-0.75}
      x2={-1}
      y2={-0.75}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: -3.8, y: -0.75 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="ENABLE"
      schX={-4.25}
      schY={-0.75}
      fontSize={0.2}
      anchor="center"
    />

    <schematicline
      x1={2.4}
      y1={0.6}
      x2={3.8}
      y2={0.6}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: 3.8, y: 0.6 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="OUTPUT"
      schX={4.25}
      schY={0.6}
      fontSize={0.2}
      anchor="center"
    />

    <schematicline
      x1={-3.8}
      y1={-1.55}
      x2={0}
      y2={-1.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: -3.8, y: -1.55 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="GND"
      schX={-4.1}
      schY={-1.55}
      fontSize={0.2}
      anchor="center"
    />

    <TiGround x={-2.4} y={-0.15} />
    <TiGround x={0} y={-1.55} />
    <TiGround x={2.4} y={-0.15} />
  </board>
);

export default TPS7A20_TypicalApplication;
