import "tscircuit";
import { CC2340R5MODAN0MHAR } from "../lib/chips/CC2340R5MODAN0MHAR.tsx";
import { CoaxialTestPort } from "../lib/chips/CoaxialTestPort.tsx";

/**
 * TI SWRS349A, Figure 9-1, "CC2340R5MODA Typical Application Schematic".
 * Section: https://www.ti.com/document-viewer/CC2340R5MODA/datasheet/GUID-5A3E26EA-5974-4B44-90E2-924F64CDA09C#TITLE-SWRS224T5681821-41
 * Figure: https://www.ti.com/ods/images/SWRS349A/GUID-0543C849-0B38-4C84-8430-0F7AFF4B6A0A-low.png
 *
 * TI's antenna-selection and matching branches remain upper-left, the optional
 * external RF connector remains left, the 32.768-kHz network stays below, and
 * the reset pull-up/capacitor branch remains lower-right.
 */
export const CC2340R5MODA_TypicalApplication = () => (
  <board routingDisabled>
    <CC2340R5MODAN0MHAR
      name="U1"
      schX={2}
      schY={1}
      schWidth={3.6}
      schHeight={5.4}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["ANT_IN", "RSTN", "RFIO"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "VDDS_6",
            "VDDS_7",
            "DIO3_X32P",
            "DIO4_X32N",
            "DIO6_A1",
            "DIO8",
            "DIO24_A7",
            "DIO18",
            "DIO12",
            "DIO20_A11",
            "DIO16_SWDIO",
            "DIO17_SWDCK",
            "DIO21_A10",
          ],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: [
            "GND_1",
            "GND_2",
            "GND_5",
            "GND_8",
            "GND_22",
            "GND_23",
            "GND_24",
          ],
        },
      }}
    />

    <capacitor
      name="C1"
      displayName="CA1"
      capacitance="15pF"
      footprint="0402"
      schX={-4.5}
      schY={2.7}
    />
    <resistor
      name="R1"
      displayName="Z61"
      resistance="0"
      footprint="0402"
      schX={-2.4}
      schY={2.7}
    />
    <capacitor
      name="C2"
      displayName="Z60"
      capacitance="1pF"
      footprint="0402"
      doNotPlace
      schX={-3.45}
      schY={1.65}
      schOrientation="vertical"
    />
    <capacitor
      name="C3"
      displayName="Z62"
      capacitance="1pF"
      footprint="0402"
      schX={-1.35}
      schY={1.65}
      schOrientation="vertical"
    />

    <CoaxialTestPort
      name="J1"
      schX={-5.2}
      schY={0.2}
      schWidth={1.4}
      schHeight={1.4}
      schPinArrangement={{
        rightSide: { direction: "top-to-bottom", pins: ["RF"] },
        bottomSide: {
          direction: "left-to-right",
          pins: ["GND_1", "GND_2"],
        },
      }}
    />
    <capacitor
      name="C4"
      displayName="CA2"
      capacitance="1pF"
      footprint="0402"
      doNotPlace
      schX={-3.35}
      schY={0.2}
    />

    <crystal
      name="Y1"
      frequency="32.768kHz"
      loadCapacitance="12.5pF"
      footprint="0402"
      schX={0.25}
      schY={-2.75}
    />
    <resistor
      name="R2"
      resistance="0"
      footprint="0402"
      doNotPlace
      schX={-1.35}
      schY={-2.75}
    />
    <resistor
      name="R3"
      resistance="0"
      footprint="0402"
      doNotPlace
      schX={1.85}
      schY={-2.75}
    />
    <capacitor
      name="C5"
      capacitance="12pF"
      footprint="0402"
      schX={-0.45}
      schY={-4}
      schOrientation="vertical"
    />
    <capacitor
      name="C6"
      capacitance="15pF"
      footprint="0402"
      schX={0.95}
      schY={-4}
      schOrientation="vertical"
    />

    <resistor
      name="R4"
      resistance="100k"
      footprint="0402"
      schX={5.45}
      schY={-1.55}
      schOrientation="vertical"
    />
    <capacitor
      name="C7"
      capacitance="100nF"
      footprint="0402"
      schX={5.45}
      schY={-3.35}
      schOrientation="vertical"
    />

    <trace from="net.ANT_MATCH" to="C1.pin1" />
    <trace from="C1.pin2" to="R1.pin1" />
    <trace from="R1.pin2" to="U1.ANT_IN" />
    <trace from="C1.pin2" to="C2.pin1" />
    <trace from="R1.pin2" to="C3.pin1" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="C3.pin2" to="net.GND" />

    <trace from="J1.RF" to="C4.pin1" />
    <trace from="C4.pin2" to="U1.RFIO" />
    <trace from="J1.GND_1" to="net.GND" />
    <trace from="J1.GND_2" to="net.GND" />

    <trace from="U1.DIO3_X32P" to="R2.pin1" />
    <trace from="R2.pin2" to="Y1.pin1" />
    <trace from="Y1.pin2" to="R3.pin1" />
    <trace from="R3.pin2" to="U1.DIO4_X32N" />
    <trace from="Y1.pin1" to="C5.pin1" />
    <trace from="Y1.pin2" to="C6.pin1" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin2" to="net.GND" />

    <trace from="R4.pin1" to="net.WMCU_VDD" />
    <trace from="R4.pin2" to="U1.RSTN" />
    <trace from="R4.pin2" to="C7.pin1" />
    <trace from="C7.pin2" to="net.GND" />
    <trace from="U1.pin6" to="net.WMCU_VDD" />
    <trace from="U1.pin1" to="net.GND" />

    <net name="WMCU_VDD" connectsTo={["U1.pin7", "R4.pin1"]} />
    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "U1.pin2",
        "U1.pin5",
        "U1.pin8",
        "U1.pin22",
        "U1.pin23",
        "U1.pin24",
      ]}
    />

    <schematicline
      x1={1.3}
      y1={-2.1}
      x2={2.7}
      y2={-2.1}
      strokeWidth={0.03}
      color="#008000"
    />

    <schematictext
      text="Z60-Z62 antenna matching"
      schX={-2.8}
      schY={3.75}
      fontSize={0.19}
      anchor="center"
    />
    <schematictext
      text="Select CA1 for internal antenna or CA2 for external connector"
      schX={-2.8}
      schY={-1.05}
      fontSize={0.16}
      anchor="center"
    />
  </board>
);

export default CC2340R5MODA_TypicalApplication;
