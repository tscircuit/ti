import "tscircuit";
import { DRV8833 } from "../lib/chips/DRV8833.tsx";

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
 * TI DRV8833 datasheet (SLVSAR1E), Figure 7, "Parallel Mode":
 * https://www.ti.com/lit/ds/symlink/drv8833.pdf#page=12
 */
export const DRV8833_ParallelMotorDriver = () => (
  <board routingDisabled>
    <net
      name="GND"
      isGroundNet
      connectsTo={["U1.pin13", "C4.pin2", "C2.pin2", "R2.pin2"]}
    />
    <net name="IN1" connectsTo={["U1.pin16", "U1.pin9"]} />
    <net name="IN2" connectsTo={["U1.pin15", "U1.pin10"]} />
    <net name="VM" connectsTo={["U1.pin12", "C4.pin1", "C1.pin1"]} />
    <net name="VCP" connectsTo={["U1.pin11", "C1.pin2"]} />
    <net name="OUT1" connectsTo={["U1.pin2", "U1.pin7", "M1.pin1"]} />
    <net name="OUT2" connectsTo={["U1.pin4", "U1.pin5", "M1.pin2"]} />
    <net name="VINT" connectsTo={["U1.pin14", "C2.pin1"]} />
    <net name="ISENSE" connectsTo={["U1.pin3", "U1.pin6", "R2.pin1"]} />

    <DRV8833
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={2.5}
      schHeight={4.3}
    />
    <schematictext
      text="DRV8833"
      schX={0}
      schY={0}
      fontSize={0.23}
      anchor="center"
    />

    <capacitor
      name="C4"
      capacitance="10uF"
      footprint="0805"
      schX={2.15}
      schY={2.05}
      schOrientation="vertical"
      polarized
    />
    <capacitor
      name="C1"
      capacitance="0.01uF"
      footprint="0402"
      schX={3.1}
      schY={1.7}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="2.2uF"
      footprint="0402"
      schX={3.05}
      schY={-1.15}
      schOrientation="vertical"
    />
    <resistor
      name="R2"
      resistance="0.2ohm"
      footprint="0603"
      schX={2.25}
      schY={-2}
      schOrientation="vertical"
    />

    <chip
      name="M1"
      displayName=""
      footprint="pinrow2"
      symbol={
        <symbol>
          <schematiccircle
            center={{ x: 0, y: 0 }}
            radius={0.42}
            strokeWidth={0.03}
            color={PRIMARY}
            isFilled={false}
          />
          <schematictext
            text="M"
            schX={0}
            schY={0}
            fontSize={0.28}
            anchor="center"
            color={PRIMARY}
          />
          <schematicline
            x1={-0.75}
            y1={0}
            x2={-0.42}
            y2={0}
            strokeWidth={0.02}
            color={PRIMARY}
          />
          <schematicline
            x1={0.42}
            y1={0}
            x2={0.75}
            y2={0}
            strokeWidth={0.02}
            color={PRIMARY}
          />
          <port
            name="pin1"
            pinNumber={1}
            schX={-0.75}
            schY={0}
            direction="left"
            schStemLength={0}
          />
          <port
            name="pin2"
            pinNumber={2}
            schX={0.75}
            schY={0}
            direction="right"
            schStemLength={0}
          />
        </symbol>
      }
      schX={4.15}
      schY={0.45}
    />

    <schematicline
      x1={-3.15}
      y1={0.8}
      x2={-1.65}
      y2={0.8}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: -3.15, y: 0.8 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="IN1"
      schX={-3.45}
      schY={0.8}
      fontSize={0.18}
      anchor="center"
    />
    <schematicline
      x1={-2.15}
      y1={0.8}
      x2={-2.15}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-2.15}
      y1={0}
      x2={-1.65}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />

    <schematicline
      x1={-3.15}
      y1={0.6}
      x2={-1.65}
      y2={0.6}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: -3.15, y: 0.6 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="IN2"
      schX={-3.45}
      schY={0.6}
      fontSize={0.18}
      anchor="center"
    />
    <schematicline
      x1={-2.4}
      y1={0.6}
      x2={-2.4}
      y2={-0.2}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-2.4}
      y1={-0.2}
      x2={-1.65}
      y2={-0.2}
      strokeWidth={0.02}
      color={PRIMARY}
    />

    <schematicline
      x1={-3.15}
      y1={-0.8}
      x2={-1.65}
      y2={-0.8}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: -3.15, y: -0.8 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="LOW = SLEEP, HIGH = RUN"
      schX={-4.25}
      schY={-0.8}
      fontSize={0.18}
      anchor="center"
    />

    <schematicline
      x1={0}
      y1={2.55}
      x2={0}
      y2={2.75}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={0}
      y1={2.75}
      x2={3.1}
      y2={2.75}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.15}
      y1={2.75}
      x2={2.15}
      y2={2.35}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={3.1}
      y1={2.75}
      x2={3.1}
      y2={2}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.65}
      y1={1.4}
      x2={3.1}
      y2={1.4}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematictext
      text="VM"
      schX={0}
      schY={2.95}
      fontSize={0.2}
      anchor="center"
    />

    <schematicline
      x1={1.65}
      y1={0.8}
      x2={2.65}
      y2={0.8}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.65}
      y1={0.8}
      x2={2.65}
      y2={0.45}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.65}
      y1={0.45}
      x2={3.4}
      y2={0.45}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.65}
      y1={0}
      x2={2.35}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.35}
      y1={0}
      x2={2.35}
      y2={0.45}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.35}
      y1={0.45}
      x2={2.65}
      y2={0.45}
      strokeWidth={0.02}
      color={PRIMARY}
    />

    <schematicline
      x1={1.65}
      y1={0.6}
      x2={2.9}
      y2={0.6}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.9}
      y1={0.6}
      x2={2.9}
      y2={-0.35}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.65}
      y1={-0.2}
      x2={2.9}
      y2={-0.2}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.9}
      y1={-0.35}
      x2={5.3}
      y2={-0.35}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={5.3}
      y1={-0.35}
      x2={5.3}
      y2={0.45}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={5.3}
      y1={0.45}
      x2={4.9}
      y2={0.45}
      strokeWidth={0.02}
      color={PRIMARY}
    />

    <schematicline
      x1={1.65}
      y1={-1}
      x2={2.75}
      y2={-1}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.75}
      y1={-1}
      x2={2.75}
      y2={-0.85}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.75}
      y1={-0.85}
      x2={3.05}
      y2={-0.85}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.65}
      y1={-1.2}
      x2={2}
      y2={-1.2}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.65}
      y1={-1.4}
      x2={2}
      y2={-1.4}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2}
      y1={-1.2}
      x2={2}
      y2={-1.7}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2}
      y1={-1.7}
      x2={2.25}
      y2={-1.7}
      strokeWidth={0.02}
      color={PRIMARY}
    />

    <TiGround x={0} y={-2.65} />
    <TiGround x={2.15} y={1.65} />
    <TiGround x={2.25} y={-2.4} />
    <TiGround x={3.05} y={-1.55} />
  </board>
);

export default DRV8833_ParallelMotorDriver;
