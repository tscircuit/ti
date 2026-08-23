import "tscircuit";
import { TPS22919 } from "../lib/chips/TPS22919.tsx";

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
 * TI TPS22919 datasheet (SLVSEN5B), Figure 30, "Typical Application Schematic":
 * https://www.ti.com/lit/ds/symlink/tps22919.pdf#page=15
 * Figure asset: https://www.ti.com/ods/images/SLVSEN5B/Typical%20Application.jpg
 */
export const TPS22919_LoadSwitchTypicalApplication = () => (
  <board routingDisabled>
    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "VIN.pin1",
        "CIN.pin2",
        "U1.pin2",
        "CLOAD.pin2",
        "RLOAD.pin2",
      ]}
    />

    <voltagesource
      name="VIN"
      voltage="3.3V"
      schX={-4}
      schY={0}
      schRotation={90}
    />
    <capacitor
      name="CIN"
      displayName="CIN"
      capacitance="1uF"
      footprint="0402"
      schX={-2.8}
      schY={0.3}
      schOrientation="vertical"
    />

    <TPS22919
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={1.8}
      schHeight={2.4}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 3] },
        rightSide: { direction: "top-to-bottom", pins: [6, 5] },
        bottomSide: { direction: "left-to-right", pins: [2] },
      }}
      schPinStyle={{
        pin1: { marginBottom: 0.8 },
        pin6: { marginBottom: 0.8 },
      }}
    />
    <schematictext
      text="TPS22919"
      schX={0}
      schY={0}
      fontSize={0.22}
      anchor="center"
    />

    <resistor
      name="RQOD"
      displayName="RQOD"
      resistance="100k"
      footprint="0402"
      schX={2}
      schY={0.05}
      schOrientation="vertical"
    />
    <capacitor
      name="CLOAD"
      displayName="CL"
      capacitance="1uF"
      footprint="0402"
      schX={3.1}
      schY={0.3}
      schOrientation="vertical"
    />
    <resistor
      name="RLOAD"
      displayName="RL"
      resistance="10k"
      footprint="0402"
      schX={4.1}
      schY={0.3}
      schOrientation="vertical"
    />

    <trace from="VIN.pin2" to="CIN.pin1" />
    <trace from="CIN.pin1" to="U1.pin1" />
    <trace from="U1.pin6" to="RQOD.pin1" />
    <trace from="U1.pin6" to="CLOAD.pin1" />
    <trace from="U1.pin6" to="RLOAD.pin1" />
    <trace from="RQOD.pin2" to="U1.pin5" />

    <schematicline
      x1={-2.4}
      y1={-0.65}
      x2={-0.9}
      y2={-0.65}
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
      text="H"
      schX={-2.25}
      schY={-0.9}
      fontSize={0.18}
      anchor="center"
    />
    <schematictext
      text="L"
      schX={-2.8}
      schY={-1.15}
      fontSize={0.18}
      anchor="center"
    />
    <schematictext
      text="ON"
      schX={-1.55}
      schY={-0.82}
      fontSize={0.2}
      anchor="center"
    />

    <TiGround x={-4} y={-0.65} />
    <TiGround x={-2.8} y={-0.1} />
    <TiGround x={0} y={-1.4} />
    <TiGround x={3.1} y={-0.1} />
    <TiGround x={4.1} y={-0.1} />
  </board>
);

export default TPS22919_LoadSwitchTypicalApplication;
