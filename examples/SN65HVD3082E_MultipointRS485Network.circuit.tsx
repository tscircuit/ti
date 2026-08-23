import "tscircuit";
import { SN65HVD3082EDR } from "../lib/chips/SN65HVD3082EDR.tsx";

/**
 * TI SLLS562O, Figure 9-2, "Typical Application Circuit".
 * Section: https://www.ti.com/document-viewer/SN65HVD3082E/datasheet/GUID-8E8196FF-15F5-4B69-A41E-7D9DBA30E79E#TITLE-SLLS562SLLS5621905
 * Figure: https://www.ti.com/ods/images/SLLS562O/GUID-F8DF2F0D-9F11-4160-A7FF-A80DEBF80CB0-low.gif
 *
 * Four transceivers share the A/B trunk. End nodes are terminated across the
 * pair and the two middle nodes are short unterminated drops, matching TI's
 * relative node placement.
 */
export const SN65HVD3082E_MultipointRS485Network = () => (
  <board routingDisabled>
    <SN65HVD3082EDR
      name="U1"
      schX={-6}
      schY={1.2}
      schWidth={2.2}
      schHeight={2.4}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["R", "nRE", "DE", "D"],
        },
        rightSide: { direction: "top-to-bottom", pins: ["A", "B"] },
      }}
    />
    <SN65HVD3082EDR
      name="U2"
      schX={6}
      schY={1.2}
      schWidth={2.2}
      schHeight={2.4}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["A", "B"] },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["R", "nRE", "DE", "D"],
        },
      }}
    />
    <SN65HVD3082EDR
      name="U3"
      schX={-2.1}
      schY={-2.4}
      schWidth={2.2}
      schHeight={2.2}
      schPinArrangement={{
        topSide: { direction: "left-to-right", pins: ["A", "B"] },
        bottomSide: {
          direction: "left-to-right",
          pins: ["R", "nRE", "DE", "D"],
        },
      }}
    />
    <SN65HVD3082EDR
      name="U4"
      schX={2.1}
      schY={-2.4}
      schWidth={2.2}
      schHeight={2.2}
      schPinArrangement={{
        topSide: { direction: "left-to-right", pins: ["A", "B"] },
        bottomSide: {
          direction: "left-to-right",
          pins: ["R", "nRE", "DE", "D"],
        },
      }}
    />

    <resistor
      name="R1"
      resistance="120"
      footprint="0402"
      schX={-4.25}
      schY={1.2}
      schOrientation="vertical"
    />
    <resistor
      name="R2"
      resistance="120"
      footprint="0402"
      schX={4.25}
      schY={1.2}
      schOrientation="vertical"
    />

    <net
      name="RS485_A"
      connectsTo={["U1.A", "U2.A", "U3.A", "U4.A", "R1.pin1", "R2.pin1"]}
    />
    <net
      name="RS485_B"
      connectsTo={["U1.B", "U2.B", "U3.B", "U4.B", "R1.pin2", "R2.pin2"]}
    />

    <schematicline
      x1={-4.5}
      y1={1.3}
      x2={4.5}
      y2={1.3}
      strokeWidth={0.03}
      color="#008000"
    />
    <schematicline
      x1={-4.5}
      y1={1.1}
      x2={4.5}
      y2={1.1}
      strokeWidth={0.03}
      color="#008000"
    />
    <schematicline
      x1={-2.2}
      y1={1.3}
      x2={-2.2}
      y2={-1}
      strokeWidth={0.03}
      color="#008000"
    />
    <schematicline
      x1={-2}
      y1={1.1}
      x2={-2}
      y2={-1}
      strokeWidth={0.03}
      color="#008000"
    />
    <schematicline
      x1={2}
      y1={1.3}
      x2={2}
      y2={-1}
      strokeWidth={0.03}
      color="#008000"
    />
    <schematicline
      x1={2.2}
      y1={1.1}
      x2={2.2}
      y2={-1}
      strokeWidth={0.03}
      color="#008000"
    />

    <schematictext
      text="TERMINATED END NODE"
      schX={-5.2}
      schY={3}
      fontSize={0.18}
      anchor="center"
    />
    <schematictext
      text="SHORT UNTERMINATED DROPS"
      schX={0}
      schY={-4.25}
      fontSize={0.18}
      anchor="center"
    />
    <schematictext
      text="TERMINATED END NODE"
      schX={5.2}
      schY={3}
      fontSize={0.18}
      anchor="center"
    />
  </board>
);

export default SN65HVD3082E_MultipointRS485Network;
