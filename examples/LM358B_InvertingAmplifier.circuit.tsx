import "tscircuit";
import { LM358BIPWR } from "../lib/chips/LM358BIPWR.tsx";

const PRIMARY = "#8b0000";

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
 * TI LM358B datasheet (SLOS068AB), Figure 8-1, "Application Schematic":
 * https://www.ti.com/lit/ds/symlink/lm358b.pdf#page=27
 *
 * The values are TI's worked example from section 8.2.2: RI = 10 kOhm and
 * RF = 36 kOhm for a gain of -3.6. Placement follows Figure 8-1, including
 * the feedback resistor above the op amp and the grounded lower input.
 */
export default () => (
  <board routingDisabled>
    <net name="GND" isGroundNet connectsTo={["VIN.pin1", "U1.pin3"]} />

    <voltagesource
      name="VIN"
      waveShape="sinewave"
      schX={-2.2}
      schY={-0.3}
      schRotation={90}
    />

    <resistor
      name="RI"
      resistance="10k"
      footprint="0402"
      schX={-0.7}
      schY={0.25}
      schOrientation="horizontal"
    />
    <resistor
      name="RF"
      resistance="36k"
      footprint="0402"
      schX={1.375}
      schY={1.5}
      schOrientation="horizontal"
    />

    <LM358BIPWR
      name="U1"
      displayName=""
      schX={1.4}
      schY={0}
      pinLabels={{
        pin1: "pin1",
        pin2: "pin2",
        pin3: "pin3",
        pin4: "pin4",
        pin5: "pin5",
        pin6: "pin6",
        pin7: "pin7",
        pin8: "pin8",
      }}
      symbol={
        <symbol>
          {/* TI Figure 8-1 uses the conventional minus-above-plus ordering. */}
          <schematicpath
            points={[
              { x: -0.55, y: 0.45 },
              { x: -0.55, y: -0.45 },
              { x: 0.5, y: 0 },
              { x: -0.55, y: 0.45 },
            ]}
            strokeWidth={0.03}
            strokeColor={PRIMARY}
          />
          <schematictext
            text="-"
            schX={-0.42}
            schY={0.23}
            fontSize={0.22}
            anchor="center"
            color={PRIMARY}
          />
          <schematictext
            text="+"
            schX={-0.42}
            schY={-0.23}
            fontSize={0.22}
            anchor="center"
            color={PRIMARY}
          />
          <schematicline
            x1={-1.25}
            y1={0.25}
            x2={-0.55}
            y2={0.25}
            strokeWidth={0.02}
            color={PRIMARY}
          />
          <schematicline
            x1={-1.25}
            y1={-0.25}
            x2={-0.55}
            y2={-0.25}
            strokeWidth={0.02}
            color={PRIMARY}
          />
          <schematicline
            x1={0.5}
            y1={0}
            x2={1.2}
            y2={0}
            strokeWidth={0.02}
            color={PRIMARY}
          />
          <schematicline
            x1={-0.05}
            y1={0.45}
            x2={-0.05}
            y2={0.8}
            strokeWidth={0.02}
            color={PRIMARY}
          />
          <schematicline
            x1={-0.05}
            y1={-0.45}
            x2={-0.05}
            y2={-0.8}
            strokeWidth={0.02}
            color={PRIMARY}
          />
          <port
            name="pin2"
            pinNumber={2}
            schX={-1.25}
            schY={0.25}
            direction="left"
            schStemLength={0}
          />
          <port
            name="pin3"
            pinNumber={3}
            schX={-1.25}
            schY={-0.25}
            direction="left"
            schStemLength={0}
          />
          <port
            name="pin1"
            pinNumber={1}
            schX={1.2}
            schY={0}
            direction="right"
            schStemLength={0}
          />
          <port
            name="pin8"
            pinNumber={8}
            schX={-0.05}
            schY={0.8}
            direction="up"
            schStemLength={0}
          />
          <port
            name="pin4"
            pinNumber={4}
            schX={-0.05}
            schY={-0.8}
            direction="down"
            schStemLength={0}
          />
        </symbol>
      }
    />

    <trace from="VIN.pin2" to="RI.pin1" />
    <trace from="RI.pin2" to="U1.pin2" />
    <trace from="RF.pin1" to="U1.pin2" />
    <trace from="RF.pin2" to="U1.pin1" />

    <schematicline
      x1={-2.2}
      y1={-0.84}
      x2={-2.2}
      y2={-1.05}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <TiGround x={-2.2} y={-1.15} />

    <schematicline
      x1={0.15}
      y1={-0.25}
      x2={0.15}
      y2={-1.05}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <TiGround x={0.15} y={-1.15} />

    <schematictext
      text="Vsup+"
      schX={1.65}
      schY={0.75}
      fontSize={0.2}
      anchor="center"
    />
    <schematictext
      text="Vsup-"
      schX={1.65}
      schY={-0.75}
      fontSize={0.2}
      anchor="center"
    />

    <schematicline
      x1={2.6}
      y1={0}
      x2={3.1}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: 3.1, y: 0 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="VOUT"
      schX={3.45}
      schY={0}
      fontSize={0.2}
      anchor="center"
    />
  </board>
);
