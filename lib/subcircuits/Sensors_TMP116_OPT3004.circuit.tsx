import type { SubcircuitProps } from "@tscircuit/props";
import { OPT3004DNPR } from "../chips/OPT3004DNPR.circuit.tsx";
import { TMP116NAIDRVR } from "../chips/TMP116NAIDRVR.circuit.tsx";

const EXPOSED_NETS = [
  "VDD",
  "GND",
  "SCL",
  "SDA",
  "TEMP_ALERT",
  "LIGHT_INT",
] as const;

type SensorNetName = (typeof EXPOSED_NETS)[number];

interface LocalNetLabelProps {
  net: SensorNetName;
  connectsTo: string | string[];
  schX: number;
  schY: number;
  anchorSide: "top" | "bottom" | "left" | "right";
}

const LocalNetLabel = ({
  net,
  connectsTo,
  schX,
  schY,
  anchorSide,
}: LocalNetLabelProps) => (
  <netlabel
    net={net}
    connectsTo={connectsTo}
    schX={schX}
    schY={schY}
    anchorSide={anchorSide}
  />
);

/**
 * Flat-panel module temperature and ambient-light sensing block.
 *
 * The shared I2C bus, address straps, bypass capacitors, and open-drain
 * pull-ups follow the typical-application guidance in the TMP116 and OPT3004
 * data sheets. ADD0 and ADDR are grounded, selecting the devices' lowest
 * addresses without creating an address collision.
 *
 * @see https://www.ti.com/lit/ds/symlink/tmp116.pdf
 * @see https://www.ti.com/lit/ds/symlink/opt3004.pdf
 */
export const Sensors_TMP116_OPT3004 = (props: SubcircuitProps) => (
  <subcircuit
    exposedNets={[...EXPOSED_NETS]}
    width="18mm"
    height="11mm"
    schMaxTraceDistance="2mm"
    {...props}
  >
    <net name="VDD" isPowerNet />
    <net name="GND" isGroundNet />
    <net name="SCL" />
    <net name="SDA" />
    <net name="TEMP_ALERT" />
    <net name="LIGHT_INT" />

    <TMP116NAIDRVR
      name="U1"
      schX={-3.3}
      schY={-0.2}
      schWidth="2.4mm"
      schHeight="3mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [5, 4, 2, 7],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [1, 6, 3],
        },
      }}
      pcbX={-4}
      pcbY={0}
    />

    <OPT3004DNPR
      name="U2"
      schX={3.3}
      schY={-0.2}
      schWidth="2.4mm"
      schHeight="3mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [4, 6, 5],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 7],
        },
      }}
      pcbX={4}
      pcbY={0}
    />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0402"
      schX={-4.7}
      schY={-2.7}
      schRotation={90}
      pcbX={-7}
      pcbY={0}
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0402"
      schX={4.7}
      schY={-2.7}
      schRotation={90}
      pcbX={5}
      pcbY={-3.2}
    />

    <resistor
      name="R1"
      resistance="4.99kohm"
      footprint="0402"
      schX={-2.2}
      schY={3}
      pcbX={-3.3}
      pcbY={4}
    />
    <resistor
      name="R2"
      resistance="4.99kohm"
      footprint="0402"
      schX={-2.2}
      schY={2.2}
      pcbX={-1.1}
      pcbY={4}
    />
    <resistor
      name="R3"
      resistance="4.99kohm"
      footprint="0402"
      schX={2.2}
      schY={3}
      pcbX={1.1}
      pcbY={4}
    />
    <resistor
      name="R4"
      resistance="10kohm"
      footprint="0402"
      schX={2.2}
      schY={2.2}
      pcbX={5}
      pcbY={4}
    />

    <LocalNetLabel
      net="VDD"
      connectsTo=".U1 > .VDD"
      schX={-4.9}
      schY={0.7}
      anchorSide="right"
    />
    <LocalNetLabel
      net="GND"
      connectsTo={[".U1 > .ADD0", ".U1 > .GND", ".U1 > .EP"]}
      schX={-4.9}
      schY={-1.1}
      anchorSide="right"
    />
    <LocalNetLabel
      net="SCL"
      connectsTo=".U1 > .SCL"
      schX={-1.7}
      schY={0.5}
      anchorSide="left"
    />
    <LocalNetLabel
      net="SDA"
      connectsTo=".U1 > .SDA"
      schX={-1.7}
      schY={-0.2}
      anchorSide="left"
    />
    <LocalNetLabel
      net="TEMP_ALERT"
      connectsTo=".U1 > .ALERT"
      schX={-1.7}
      schY={-0.9}
      anchorSide="left"
    />

    <LocalNetLabel
      net="SCL"
      connectsTo=".U2 > .SCL"
      schX={1.7}
      schY={0.5}
      anchorSide="right"
    />
    <LocalNetLabel
      net="SDA"
      connectsTo=".U2 > .SDA"
      schX={1.7}
      schY={-0.2}
      anchorSide="right"
    />
    <LocalNetLabel
      net="LIGHT_INT"
      connectsTo=".U2 > .INT"
      schX={1.7}
      schY={-0.9}
      anchorSide="right"
    />
    <LocalNetLabel
      net="VDD"
      connectsTo=".U2 > .VDD"
      schX={4.9}
      schY={0.7}
      anchorSide="left"
    />
    <LocalNetLabel
      net="GND"
      connectsTo={[".U2 > .ADDR", ".U2 > .GND", ".U2 > .EP"]}
      schX={4.9}
      schY={-1.1}
      anchorSide="left"
    />

    <LocalNetLabel
      net="VDD"
      connectsTo=".R1 > .pin1"
      schX={-3}
      schY={3}
      anchorSide="right"
    />
    <LocalNetLabel
      net="SCL"
      connectsTo=".R1 > .pin2"
      schX={-1.4}
      schY={3}
      anchorSide="left"
    />
    <LocalNetLabel
      net="VDD"
      connectsTo=".R2 > .pin1"
      schX={-3}
      schY={2.2}
      anchorSide="right"
    />
    <LocalNetLabel
      net="SDA"
      connectsTo=".R2 > .pin2"
      schX={-1.4}
      schY={2.2}
      anchorSide="left"
    />
    <LocalNetLabel
      net="VDD"
      connectsTo=".R3 > .pin1"
      schX={1.4}
      schY={3}
      anchorSide="right"
    />
    <LocalNetLabel
      net="TEMP_ALERT"
      connectsTo=".R3 > .pin2"
      schX={3}
      schY={3}
      anchorSide="left"
    />
    <LocalNetLabel
      net="VDD"
      connectsTo=".R4 > .pin2"
      schX={3}
      schY={2.2}
      anchorSide="left"
    />
    <trace
      name="LIGHT_INT_PULLUP"
      from=".U2 > .INT"
      to=".R4 > .pin1"
      schDisplayLabel="LIGHT_INT"
      pcbRouteHints={[{ x: 5.8, y: 0 }]}
    />

    <LocalNetLabel
      net="VDD"
      connectsTo=".C1 > .pin1"
      schX={-4.7}
      schY={-1.9}
      anchorSide="bottom"
    />
    <LocalNetLabel
      net="GND"
      connectsTo=".C1 > .pin2"
      schX={-4.7}
      schY={-3.5}
      anchorSide="top"
    />
    <LocalNetLabel
      net="VDD"
      connectsTo=".C2 > .pin1"
      schX={4.7}
      schY={-1.9}
      anchorSide="bottom"
    />
    <LocalNetLabel
      net="GND"
      connectsTo=".C2 > .pin2"
      schX={4.7}
      schY={-3.5}
      anchorSide="top"
    />
  </subcircuit>
);

export default Sensors_TMP116_OPT3004;
