import "tscircuit";
import { TPS61165DRVR } from "../lib/chips/TPS61165DRVR.tsx";

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
 * TI TPS61165 datasheet (SLVS790E), front-page "Typical Application":
 * https://www.ti.com/lit/ds/symlink/tps61165.pdf#page=1
 * Figure asset: https://www.ti.com/ods/images/SLVS790E/typ_app_lvs790.gif
 */
export const TPS61165_WhiteLedDriver = () => (
  <board routingDisabled>
    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "C1.pin2",
        "CCOMP.pin2",
        "U1.pin3",
        "U1.pin7",
        "C2.pin2",
        "RSET.pin2",
      ]}
    />
    <net name="VIN" connectsTo={["C1.pin1", "L1.pin1", "U1.pin6"]} />
    <net name="SW" connectsTo={["L1.pin2", "D1.pin1", "U1.pin4"]} />
    <net name="VLED" connectsTo={["D1.pin2", "C2.pin1", "LED1.anode"]} />
    <net name="LED12" connectsTo={["LED1.cathode", "LED2.anode"]} />
    <net name="LED23" connectsTo={["LED2.cathode", "LED3.anode"]} />
    <net name="FB" connectsTo={["LED3.cathode", "U1.pin1", "RSET.pin1"]} />
    <net name="COMP" connectsTo={["U1.pin2", "CCOMP.pin1"]} />

    <TPS61165DRVR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={1.8}
      schHeight={2.2}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [6, 5, 2] },
        rightSide: { direction: "top-to-bottom", pins: [4, 1, 3] },
        bottomSide: { direction: "left-to-right", pins: [7] },
      }}
      schPinStyle={{
        pin6: { marginBottom: 0.35 },
        pin5: { marginBottom: 0.35 },
        pin4: { marginBottom: 0.35 },
        pin1: { marginBottom: 0.35 },
      }}
    />
    <capacitor
      name="C1"
      capacitance="4.7uF"
      footprint="0402"
      schX={-3.15}
      schY={0.95}
      schOrientation="vertical"
    />
    <inductor
      name="L1"
      inductance="10uH"
      footprint="0603"
      schX={-1.45}
      schY={1.25}
      schOrientation="horizontal"
    />
    <diode
      name="D1"
      displayName="D1"
      footprint="sod123"
      schX={1.9}
      schY={1.25}
      schRotation={0}
    />
    <capacitor
      name="C2"
      capacitance="1uF"
      footprint="0402"
      schX={2.55}
      schY={0.95}
      schOrientation="vertical"
    />
    <led
      name="LED1"
      displayName=""
      color="white"
      schDisplayValue=" "
      footprint="0603"
      schX={3.65}
      schY={0.75}
      schRotation={270}
    />
    <led
      name="LED2"
      displayName=""
      color="white"
      schDisplayValue=" "
      footprint="0603"
      schX={3.65}
      schY={-0.4}
      schRotation={270}
    />
    <led
      name="LED3"
      displayName=""
      color="white"
      schDisplayValue=" "
      footprint="0603"
      schX={3.65}
      schY={-1.55}
      schRotation={270}
    />
    <resistor
      name="RSET"
      displayName="Rset"
      resistance="0.57ohm"
      footprint="0402"
      schX={3.65}
      schY={-2.55}
      schOrientation="vertical"
    />
    <capacitor
      name="CCOMP"
      displayName=""
      capacitance="220nF"
      footprint="0402"
      schX={-2.15}
      schY={-0.95}
      schOrientation="vertical"
    />

    <schematicline
      x1={-4.2}
      y1={1.25}
      x2={-1.98}
      y2={1.25}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-3.15}
      y1={1.25}
      x2={-3.15}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-3.15}
      y1={0.55}
      x2={-1.3}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-0.92}
      y1={1.25}
      x2={1.38}
      y2={1.25}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.1}
      y1={1.25}
      x2={1.1}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.1}
      y1={0.55}
      x2={1.3}
      y2={0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.42}
      y1={1.25}
      x2={3.65}
      y2={1.29}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-2.15}
      y1={-0.65}
      x2={-2.15}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-2.15}
      y1={-0.55}
      x2={-1.3}
      y2={-0.55}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={2.55}
      y1={1.25}
      x2={2.55}
      y2={1.29}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={3.65}
      y1={0.21}
      x2={3.65}
      y2={0.14}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={3.65}
      y1={-0.94}
      x2={3.65}
      y2={-1.01}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={3.65}
      y1={-2.09}
      x2={3.65}
      y2={-2.25}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={1.3}
      y1={0}
      x2={3.1}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={3.1}
      y1={0}
      x2={3.1}
      y2={-2.09}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={3.1}
      y1={-2.09}
      x2={3.65}
      y2={-2.09}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: -4.2, y: 1.25 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="VIN 5V"
      schX={-4.55}
      schY={1.25}
      fontSize={0.2}
      anchor="center"
    />

    <schematicline
      x1={-3.45}
      y1={0}
      x2={-1.3}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: -3.45, y: 0 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="ON/OFF"
      schX={-4.05}
      schY={0.2}
      fontSize={0.18}
      anchor="center"
    />
    <schematictext
      text="DIMMING CONTROL"
      schX={-4.05}
      schY={-0.05}
      fontSize={0.18}
      anchor="center"
    />

    <schematictext
      text="350 mA"
      schX={2.65}
      schY={-1.9}
      fontSize={0.18}
      anchor="center"
    />

    <TiGround x={-3.15} y={0.55} />
    <TiGround x={-2.15} y={-1.35} />
    <schematicline
      x1={0}
      y1={-1.5}
      x2={0}
      y2={-1.7}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <TiGround x={0} y={-1.8} />
    <schematicline
      x1={1.3}
      y1={-0.55}
      x2={1.3}
      y2={-0.85}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <TiGround x={1.3} y={-0.85} />
    <TiGround x={2.55} y={0.55} />
    <TiGround x={3.65} y={-2.95} />
  </board>
);

export default TPS61165_WhiteLedDriver;
