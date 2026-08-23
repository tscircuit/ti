import "tscircuit";
import { TPS92612DBVR } from "../lib/chips/TPS92612DBVR.tsx";

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
 * TI TPS92612 datasheet (SLVSFG3), front-page
 * "TPS92612 Typical Application Diagram":
 * https://www.ti.com/lit/ds/symlink/tps92612.pdf#page=1
 * Figure asset: https://www.ti.com/ods/images/SLVSFG3/tps92612-typical-application-diagram.gif
 */
export const TPS92612_LinearLedDriver = () => (
  <board routingDisabled>
    <net
      name="GND"
      isGroundNet
      connectsTo={["CSUPPLY.pin2", "U1.pin1", "COUT.pin2", "LED3.cathode"]}
    />
    <net name="SUPPLY" connectsTo={["CSUPPLY.pin1", "U1.pin3", "RSNS.pin1"]} />
    <net name="SENSE" connectsTo={["RSNS.pin2", "U1.pin4"]} />
    <net name="LED_OUT" connectsTo={["U1.pin5", "COUT.pin1", "LED1.anode"]} />
    <net name="LED12" connectsTo={["LED1.cathode", "LED2.anode"]} />
    <net name="LED23" connectsTo={["LED2.cathode", "LED3.anode"]} />

    <TPS92612DBVR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={1.9}
      schHeight={2.25}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [3, 2, 1] },
        rightSide: { direction: "top-to-bottom", pins: [4, 5] },
      }}
      schPinStyle={{
        pin3: { marginBottom: 0.35 },
        pin2: { marginBottom: 0.35 },
        pin4: { marginBottom: 0.7 },
      }}
    />
    <schematictext
      text="TPS92612"
      schX={0}
      schY={0.88}
      fontSize={0.18}
      anchor="center"
    />

    <capacitor
      name="CSUPPLY"
      displayName="C(SUPPLY)"
      capacitance="1uF"
      footprint="0402"
      schX={-2.5}
      schY={0.72}
      schOrientation="vertical"
    />
    <resistor
      name="RSNS"
      displayName="R(SNS)"
      resistance="1ohm"
      footprint="0402"
      schX={2}
      schY={0.72}
      schOrientation="vertical"
    />
    <capacitor
      name="COUT"
      displayName="C(OUT)"
      capacitance="100nF"
      footprint="0402"
      schX={3.4}
      schY={0.15}
      schOrientation="horizontal"
    />
    <led
      name="LED1"
      displayName=""
      color="white"
      schDisplayValue=" "
      footprint="0603"
      schX={2.1}
      schY={-0.55}
      schRotation={0}
    />
    <led
      name="LED2"
      displayName=""
      color="white"
      schDisplayValue=" "
      footprint="0603"
      schX={3.25}
      schY={-0.55}
      schRotation={0}
    />
    <led
      name="LED3"
      displayName=""
      color="white"
      schDisplayValue=" "
      footprint="0603"
      schX={4.4}
      schY={-0.55}
      schRotation={0}
    />

    <schematicline
      x1={-3.55}
      y1={1.02}
      x2={2}
      y2={1.02}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-2.5}
      y1={1.02}
      x2={-2.5}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-2.5}
      y1={0.55}
      x2={-1.35}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2}
      y1={0.42}
      x2={1.35}
      y2={0.45}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-3.55}
      y1={1.02}
      x2={-3.55}
      y2={1.45}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematictext
      text="4.5—40V"
      schX={-3.55}
      schY={1.68}
      fontSize={0.2}
      anchor="center"
    />

    <schematicline
      x1={-2.2}
      y1={0}
      x2={-1.35}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: -2.2, y: 0 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="PWM"
      schX={-2.55}
      schY={0}
      fontSize={0.18}
      anchor="center"
    />

    <schematicline
      x1={1.35}
      y1={-0.45}
      x2={1.56}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.64}
      y1={-0.55}
      x2={2.71}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={3.79}
      y1={-0.55}
      x2={3.86}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={4.94}
      y1={-0.55}
      x2={5.15}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.5}
      y1={-0.5}
      x2={1.5}
      y2={0.15}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.5}
      y1={0.15}
      x2={3.1}
      y2={0.15}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={3.7}
      y1={0.15}
      x2={5.15}
      y2={0.15}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={5.15}
      y1={0.15}
      x2={5.15}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />

    <TiGround x={-2.5} y={0.32} />
    <schematicline
      x1={-1.35}
      y1={-0.55}
      x2={-1.35}
      y2={-0.85}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <TiGround x={-1.35} y={-0.85} />
    <TiGround x={5.15} y={-0.55} />
  </board>
);

export default TPS92612_LinearLedDriver;
