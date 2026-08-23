import "tscircuit";
import { SN74AUP1G17DBVR } from "../lib/chips/SN74AUP1G17DBVR.tsx";

const TI_RED = "#840000";

/**
 * TI SCES579J, Figure 8, "Turn-On Pulse Generator (Normally High Output)".
 * Section: https://www.ti.com/document-viewer/SN74AUP1G17/datasheet/application-and-implementation#x5214
 * Figure: https://www.ti.com/ods/images/SCES579J/sces579_app1.gif
 *
 * The timing node is kept directly left of the non-inverting Schmitt buffer,
 * with the pull-up above it and timing capacitor below it as in the TI figure.
 */
export const SN74AUP1G17_TurnOnPulseGenerator = () => (
  <board routingDisabled>
    <SN74AUP1G17DBVR
      name="U1"
      schX={1}
      schY={0}
      symbol={
        <symbol>
          <schematicpath
            points={[
              { x: -0.62, y: 0.72 },
              { x: -0.62, y: -0.72 },
              { x: 0.62, y: 0 },
              { x: -0.62, y: 0.72 },
            ]}
            strokeWidth={0.03}
            strokeColor={TI_RED}
            isFilled={false}
          />
          <schematicpath
            points={[
              { x: -0.32, y: -0.18 },
              { x: -0.12, y: -0.18 },
              { x: -0.12, y: 0.18 },
              { x: 0.1, y: 0.18 },
            ]}
            strokeWidth={0.04}
            strokeColor={TI_RED}
          />
          <port
            name="A"
            pinNumber={2}
            schX={-1.02}
            schY={0}
            direction="left"
            schStemLength={0.4}
          />
          <port
            name="Y"
            pinNumber={4}
            schX={1.02}
            schY={0}
            direction="right"
            schStemLength={0.4}
          />
        </symbol>
      }
    />

    <resistor
      name="R1"
      resistance="100k"
      footprint="0402"
      schX={-1.15}
      schY={1.4}
      schOrientation="vertical"
    />
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      schX={-1.15}
      schY={-1.35}
      schOrientation="vertical"
    />

    <trace from="R1.pin2" to="U1.A" />
    <trace from="C1.pin1" to="U1.A" />
    <trace from="R1.pin1" to="net.VCC" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="U1.Y" to="net.VO" />

    <schematictext
      text="Vc"
      schX={-2}
      schY={0}
      fontSize={0.26}
      anchor="center"
    />
  </board>
);

export default SN74AUP1G17_TurnOnPulseGenerator;
