import type { SubcircuitProps } from "@tscircuit/props";
import { INA350ABSIDSGR } from "../chips/INA350ABSIDSGR.circuit.tsx";

export type InstrumentationAmplifier_INA350Props = SubcircuitProps & {
  /** INA350ABS gains. The CDS (30/50) variant is a different physical part. */
  gain?: 10 | 20;
};

/**
 * Single-supply amplifier section of TI INA350 Figure 9-3 (SBOSAA0C).
 * V_NEG, REF and EP are grounded; SHDN is high (enabled). Supply 1.8-5.5 V.
 * Connect a DC-biased bridge/sensor to IN_POS/IN_NEG and an ADC to OUT.
 * The sensor, excitation reference and ADC belong to the parent circuit.
 * https://www.ti.com/lit/ds/symlink/ina350.pdf
 */
export const InstrumentationAmplifier_INA350 = ({
  gain = 20,
  ...props
}: InstrumentationAmplifier_INA350Props) => (
  <subcircuit
    width={7}
    height={5}
    minTraceWidth={0.1}
    nominalTraceWidth={0.1}
    {...props}
  >
    <INA350ABSIDSGR
      name="U1"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      schWidth={undefined}
      schHeight={undefined}
      schPinArrangement={undefined}
      schPinStyle={undefined}
      symbol={
        <symbol>
          <schematicpath
            points={[
              { x: -2, y: 2 },
              { x: 2, y: 0 },
              { x: -2, y: -2 },
              { x: -2, y: 2 },
            ]}
            strokeWidth={0.04}
          />
          <schematictext
            text="{NAME}"
            schX={-0.5}
            schY={0.25}
            fontSize={0.22}
          />
          <schematictext
            text="INA350ABS"
            schX={-0.5}
            schY={-0.15}
            fontSize={0.22}
          />
          <schematictext text="-" schX={-1.65} schY={0.7} fontSize={0.3} />
          <schematictext text="+" schX={-1.65} schY={-0.7} fontSize={0.3} />
          <port
            name="pin2"
            pinNumber={2}
            schX={-2.5}
            schY={1}
            direction="left"
            schStemLength={0.5}
          />
          <port
            name="pin3"
            pinNumber={3}
            schX={-2.5}
            schY={-1}
            direction="left"
            schStemLength={0.5}
          />
          <port
            name="pin6"
            pinNumber={6}
            schX={2.5}
            schY={0}
            direction="right"
            schStemLength={0.5}
          />
          <port
            name="pin8"
            pinNumber={8}
            schX={-1.65}
            schY={2.2}
            direction="up"
            schStemLength={0.375}
          />
          <port
            name="pin7"
            pinNumber={7}
            schX={-1}
            schY={2.2}
            direction="up"
            schStemLength={0.7}
          />
          <port
            name="pin1"
            pinNumber={1}
            schX={-0.35}
            schY={2.2}
            direction="up"
            schStemLength={1.025}
          />
          <port
            name="pin9"
            pinNumber={9}
            schX={-1.65}
            schY={-2.2}
            direction="down"
            schStemLength={0.375}
          />
          <port
            name="pin4"
            pinNumber={4}
            schX={-1}
            schY={-2.2}
            direction="down"
            schStemLength={0.7}
          />
          <port
            name="pin5"
            pinNumber={5}
            schX={0.35}
            schY={-2.2}
            direction="down"
            schStemLength={1.375}
          />
        </symbol>
      }
    />
    <trace
      name="INPUT_NEGATIVE"
      schDisplayLabel="IN_NEG"
      from=".U1 > .IN_NEG"
      to="net.IN_NEG"
    />
    <trace
      name="INPUT_POSITIVE"
      schDisplayLabel="IN_POS"
      from=".U1 > .IN_POS"
      to="net.IN_POS"
    />
    <trace name="OUTPUT" schDisplayLabel="OUT" from=".U1 > .OUT" to="net.OUT" />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={2.4}
      pcbY={-0.26}
      pcbRotation={-90}
      schX={1.5}
      schY={3.1}
      schRotation={-90}
    />
    <trace name="BYPASS_SUPPLY" from=".U1 > .V_POS" to=".C1 > .pin1" />
    <netlabel
      net="VS"
      schX={1.5}
      schY={3.7}
      anchorSide="bottom"
      connectsTo=".C1 > .pin1"
    />
    <trace name="ENABLE" from=".U1 > .SHDN" to=".U1 > .V_POS" />
    <trace
      name="GAIN_SELECT"
      from=".U1 > .GS"
      to={gain === 20 ? ".U1 > .V_POS" : "net.GND"}
    />
    <netlabel
      net="GND"
      schX={1.5}
      schY={2.45}
      anchorSide="top"
      connectsTo=".C1 > .pin2"
    />

    <trace name="THERMAL_PAD" from=".U1 > .EP" to=".U1 > .V_NEG" />
    <trace name="REFERENCE" from=".U1 > .REF" to=".U1 > .V_NEG" />
    <trace name="GROUND" from=".U1 > .V_NEG" to="net.GND" />
    <schematictext
      text={`G = ${gain} V/V`}
      schX={0}
      schY={-3.1}
      fontSize={0.2}
    />
  </subcircuit>
);

export default InstrumentationAmplifier_INA350;
