import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  TPS7B6933QDBVRQ1,
  TPS7B6950QDBVRQ1,
} from "../chips/TPS7B69QDBVRQ1.circuit.tsx";
import {
  type Tida01421AltiumOrigin,
  tida01421Position,
} from "../tida01421-coordinates.ts";

export const TIDA01421_POWER_ORIGIN: Tida01421AltiumOrigin = {
  x: 795,
  y: 360,
};

const p = (x: number, y: number) =>
  tida01421Position(x, y, TIDA01421_POWER_ORIGIN);

/**
 * Only the TIDA-01421 local 3.3 V and 5 V regulators required by the analog
 * chain. J3, D1, the ADCBAT monitor, D2, and LaunchPad circuitry are excluded.
 */
export const PinchDetectionPower_TIDA01421 = (props: SubcircuitProps) => (
  <subcircuit
    schAutoLayoutEnabled={false}
    schMaxTraceDistance="20mm"
    schTraceAutoLabelEnabled={false}
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />

    <TPS7B6933QDBVRQ1 name="U4" noConnect={["NC"]} {...p(790, 440)} />
    <TPS7B6950QDBVRQ1 name="U5" noConnect={["NC"]} {...p(790, 280)} />
    <capacitor
      name="C11"
      capacitance="4.7uF"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71C475KA73K"
      schOrientation="vertical"
      {...p(690, 440)}
    />
    <capacitor
      name="C12"
      capacitance="2.2uF"
      footprint="0805"
      manufacturerPartNumber="CGA4J3X7R1E225K125AB"
      schOrientation="vertical"
      {...p(900, 440)}
    />
    <capacitor
      name="C13"
      capacitance="4.7uF"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71C475KA73K"
      schOrientation="vertical"
      {...p(690, 280)}
    />
    <capacitor
      name="C14"
      capacitance="2.2uF"
      footprint="0805"
      manufacturerPartNumber="CGA4J3X7R1E225K125AB"
      schOrientation="vertical"
      {...p(900, 280)}
    />

    <trace from="C11.pin1" to="U4.VIN" />
    <trace from="U4.VIN" to="U5.VIN" />
    <trace from="U5.VIN" to="C13.pin1" />
    <trace from="U4.VOUT" to="C12.pin1" />
    <trace from="U5.VOUT" to="C14.pin1" />
    <trace from="U4.GND_3" to="U4.GND_4" />
    <trace from="U4.GND_3" to="C12.pin2" />
    <trace from="U5.GND_3" to="U5.GND_4" />
    <trace from="U5.GND_3" to="C14.pin2" />

    <netlabel
      net="PWR"
      connectsTo="U4.VIN"
      anchorSide="left"
      {...p(640, 470)}
    />
    <netlabel
      net="GND"
      connectsTo="C11.pin2"
      anchorSide="top"
      {...p(690, 430)}
    />
    <netlabel
      net="GND"
      connectsTo="C13.pin2"
      anchorSide="top"
      {...p(690, 270)}
    />
    {/* Altium V3.3 is normalized to V3_3 because native net identifiers reject
        periods. The component, value, placement, and electrical net are exact. */}
    <netlabel
      net="V3_3"
      connectsTo="U4.VOUT"
      anchorSide="left"
      {...p(900, 470)}
    />
    <netlabel
      net="GND"
      connectsTo="C12.pin2"
      anchorSide="top"
      {...p(900, 420)}
    />
    <netlabel
      net="V5"
      connectsTo="U5.VOUT"
      anchorSide="left"
      {...p(900, 310)}
    />
    <netlabel
      net="GND"
      connectsTo="C14.pin2"
      anchorSide="top"
      {...p(900, 260)}
    />

    <port name="PWR" direction="left" connectsTo="U4.VIN" />
    <port name="V3_3" direction="right" connectsTo="U4.VOUT" />
    <port name="V5" direction="right" connectsTo="U5.VOUT" />
    <port name="GND" direction="right" connectsTo="U4.GND_3" />
  </subcircuit>
);

export default PinchDetectionPower_TIDA01421;
