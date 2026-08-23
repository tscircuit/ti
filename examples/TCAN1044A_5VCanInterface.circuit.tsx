import "tscircuit";
import { TCAN1044AVDRBRQ1 } from "../lib/chips/TCAN1044AVDRBRQ1.tsx";

/**
 * TI SLLSFJ3D, Figure 9-1, "Transceiver Application Using 5V IO Connections".
 * Section: https://www.ti.com/document-viewer/TCAN1044A-Q1/datasheet/GUID-1E00ADFE-29F6-4F59-8BC4-F7463D69B4D9#TITLE-SLLSF17X3660
 * Figure: https://www.ti.com/ods/images/SLLSFJ3D/GUID-20210601-CA0I-KHQN-GM0J-TJ06VSGMRGQJ-low.gif
 *
 * The supply regulator and MCU are on the left, the transceiver is centered,
 * and TI's optional split termination and ESD branches remain on the right.
 */
export const TCAN1044A_5VCanInterface = () => (
  <board routingDisabled>
    <chip
      name="U2"
      footprint="pinrow3"
      manufacturerPartNumber="5-V VOLTAGE REGULATOR"
      schX={-5.5}
      schY={1.5}
      schWidth={2.2}
      schHeight={1.5}
      pinLabels={{ pin1: "VIN", pin2: "VOUT", pin3: "GND" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["VIN"] },
        rightSide: { direction: "top-to-bottom", pins: ["VOUT"] },
        bottomSide: { direction: "left-to-right", pins: ["GND"] },
      }}
    />
    <chip
      name="U3"
      footprint="pinrow5"
      manufacturerPartNumber="CAN-FD MCU"
      schX={-3.6}
      schY={-1}
      schWidth={2.2}
      schHeight={2.4}
      pinLabels={{
        pin1: "VCC",
        pin2: "GND",
        pin3: "RXD",
        pin4: "TXD",
        pin5: "STB",
      }}
      schPinArrangement={{
        topSide: { direction: "left-to-right", pins: ["VCC"] },
        bottomSide: { direction: "left-to-right", pins: ["GND"] },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["STB", "RXD", "TXD"],
        },
      }}
    />
    <TCAN1044AVDRBRQ1
      name="U1"
      schX={0}
      schY={0}
      schWidth={2.5}
      schHeight={3}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["STB", "RXD", "TXD"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["CANH", "CANL"],
        },
        topSide: { direction: "left-to-right", pins: ["VCC"] },
        bottomSide: { direction: "left-to-right", pins: ["GND"] },
      }}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0402"
      schX={-7.2}
      schY={1.1}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="1uF"
      footprint="0402"
      schX={-3.8}
      schY={1.5}
      schOrientation="vertical"
    />
    <capacitor
      name="C3"
      capacitance="100nF"
      footprint="0402"
      schX={-1.7}
      schY={1.5}
      schOrientation="vertical"
    />

    <resistor
      name="R1"
      resistance="60"
      footprint="0402"
      schX={4}
      schY={0.8}
      schOrientation="vertical"
    />
    <resistor
      name="R2"
      resistance="60"
      footprint="0402"
      schX={4}
      schY={-0.8}
      schOrientation="vertical"
    />
    <capacitor
      name="C4"
      capacitance="4.7nF"
      footprint="0402"
      schX={5.1}
      schY={-1.65}
      schOrientation="vertical"
    />
    <diode
      name="D1"
      symbolName="gunn_diode_vert"
      footprint="sod882"
      schX={6.6}
      schY={0.75}
      schRotation={-90}
    />
    <diode
      name="D2"
      symbolName="gunn_diode_vert"
      footprint="sod882"
      schX={6.6}
      schY={-0.75}
      schRotation={-90}
    />

    <trace from="C1.pin1" to="U2.VIN" />
    <trace from="U2.VOUT" to="U3.VCC" />
    <trace from="U2.VOUT" to="U1.VCC" />
    <trace from="C2.pin1" to="U2.VOUT" />
    <trace from="C3.pin1" to="U1.VCC" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U3.STB" to="U1.STB" />
    <trace from="U3.RXD" to="U1.RXD" />
    <trace from="U3.TXD" to="U1.TXD" />

    <trace from="U1.CANH" to="R1.pin1" />
    <trace from="R1.pin2" to="R2.pin1" />
    <trace from="R2.pin2" to="U1.CANL" />
    <trace from="R1.pin2" to="C4.pin1" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="U1.CANH" to="D1.pin1" />
    <trace from="U1.CANL" to="D2.pin1" />
    <trace from="D1.pin2" to="net.GND" />
    <trace from="D2.pin2" to="net.GND" />
    <trace from="U1.CANH" to="net.CANH" />
    <trace from="U1.CANL" to="net.CANL" />
  </board>
);

export default TCAN1044A_5VCanInterface;
