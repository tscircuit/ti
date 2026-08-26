import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

/** PMP22606 input EMI filter and bridge rectifier.
 * Source placement and connectivity were extracted from TI's native Altium sheet (TIDMBE3 input section).
 * @see https://www.ti.com/lit/pdf/TIDMBE3
 */
export const PMP22606_FilterRectifier = (props: SubcircuitProps) => (
  <subcircuit
    {...props}
    routingDisabled
    schMaxTraceDistance="100mm"
    schTraceAutoLabelEnabled={false}
  >
    <schematictext
      text="PMP22606 input EMI filter and bridge rectifier"
      schX={0}
      schY={9.188}
      fontSize={0.7}
    />
    <chip
      name="J102"
      schX={-7.75}
      schY={1.188}
      manufacturerPartNumber="703W-00/54"
      footprint="pinrow3_p2.54mm"
      pinLabels={{ pin3: "G", pin2: "N", pin1: "L" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 3, 2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R107"
      schX={-5}
      schY={1.438}
      resistance="432k"
      footprint="1206"
      schOrientation="vertical"
    />
    <resistor
      name="R103"
      schX={-5}
      schY={2.438}
      resistance="432k"
      footprint="1206"
      schOrientation="vertical"
    />
    <capacitor
      name="C106"
      schX={-3}
      schY={1.313}
      capacitance="0.47uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <chip
      name="RV100"
      schX={-5.75}
      schY={1.063}
      manufacturerPartNumber="S10K275E2"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [2, 1] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <fuse
      name="F100"
      schX={-6.75}
      schY={2.938}
      currentRating="20A"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C107"
      schX={1.5}
      schY={1.313}
      capacitance="0.47uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C105"
      schX={2.5}
      schY={2.313}
      capacitance="2200pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C109"
      schX={2.5}
      schY={0.563}
      capacitance="2200pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R110"
      schX={-5}
      schY={0.438}
      resistance="432k"
      footprint="1206"
      schOrientation="vertical"
    />
    <chip
      name="K100"
      schX={-4}
      schY={-2.812}
      manufacturerPartNumber="G5LE-1-E-36-DC12"
      footprint="pinrow5_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2", pin3: "3", pin4: "4", pin5: "5" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [3, 5] },
        rightSide: { direction: "top-to-bottom", pins: [1, 2, 4] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <diode
      name="D105"
      schX={-4}
      schY={-4.562}
      manufacturerPartNumber="BAS316,115"
      footprint="sod-323"
      variant="standard"
      schOrientation="horizontal"
    />
    <diode
      name="D104"
      schX={-6.25}
      schY={-3.937}
      manufacturerPartNumber="MMSZ4699T1G"
      footprint="pinrow2_p2.54mm"
      variant="zener"
      schOrientation="vertical"
    />
    <capacitor
      name="C113"
      schX={-0.5}
      schY={-5.187}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <chip
      name="D103"
      schX={7.75}
      schY={0.688}
      manufacturerPartNumber="DFB2560"
      footprint="pinrow4_p2.54mm"
      pinLabels={{ pin3: "_", pin1: "+", pin2: "_", pin4: "-" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [4] },
        rightSide: { direction: "top-to-bottom", pins: [1] },
        topSide: { direction: "left-to-right", pins: [2] },
        bottomSide: { direction: "left-to-right", pins: [3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R118"
      schX={-2}
      schY={-3.312}
      resistance="150ohm"
      footprint="1206"
      schOrientation="horizontal"
    />
    <resistor
      name="R120"
      schX={-2}
      schY={-4.562}
      resistance="150ohm"
      footprint="1206"
      schOrientation="horizontal"
    />
    <resistor
      name="R112"
      schX={-2.5}
      schY={-0.562}
      resistance="10ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C104"
      schX={-1.5}
      schY={2.313}
      capacitance="2200pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C108"
      schX={-1.5}
      schY={0.563}
      capacitance="2200pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R108"
      schX={-4}
      schY={1.438}
      resistance="432k"
      footprint="1206"
      schOrientation="vertical"
    />
    <resistor
      name="R104"
      schX={-4}
      schY={2.438}
      resistance="432k"
      footprint="1206"
      schOrientation="vertical"
    />
    <resistor
      name="R111"
      schX={-4}
      schY={0.438}
      resistance="432k"
      footprint="1206"
      schOrientation="vertical"
    />
    <chip
      name="L102"
      schX={0.25}
      schY={0.938}
      manufacturerPartNumber="750318527"
      footprint="pinrow4_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2", pin3: "3", pin4: "4" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
        rightSide: { direction: "top-to-bottom", pins: [4, 3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="L101"
      schX={4.25}
      schY={1.188}
      manufacturerPartNumber="750318527"
      footprint="pinrow4_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2", pin3: "3", pin4: "4" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
        rightSide: { direction: "top-to-bottom", pins: [4, 3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="D100"
      schX={7.75}
      schY={5.188}
      manufacturerPartNumber="DFB2560"
      footprint="pinrow4_p2.54mm"
      pinLabels={{ pin3: "_", pin1: "+", pin2: "_", pin4: "-" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [4] },
        rightSide: { direction: "top-to-bottom", pins: [1] },
        topSide: { direction: "left-to-right", pins: [2] },
        bottomSide: { direction: "left-to-right", pins: [3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <trace from="J102.pin3" to="net.PE" schDisplayLabel="PE" />
    <trace from="J102.pin2" to="RV100.pin1" />
    <trace from="RV100.pin1" to="R110.pin2" />
    <trace from="R110.pin2" to="R111.pin2" />
    <trace from="R111.pin2" to="R112.pin1" />
    <trace from="R112.pin1" to="C106.pin2" />
    <trace from="R112.pin1" to="K100.pin1" />
    <trace from="R110.pin2" to="K100.pin3" />
    <trace from="J102.pin1" to="F100.pin1" />
    <trace from="R107.pin1" to="R103.pin2" />
    <trace from="R107.pin2" to="R110.pin1" />
    <trace from="R103.pin1" to="F100.pin2" />
    <trace from="R103.pin1" to="R104.pin1" />
    <trace from="F100.pin2" to="RV100.pin2" />
    <trace from="R104.pin1" to="C106.pin1" />
    <trace from="C106.pin1" to="C104.pin1" />
    <trace from="C107.pin1" to="C105.pin1" />
    <trace from="C107.pin2" to="C109.pin2" />
    <trace from="C105.pin2" to="C109.pin1" />
    <trace from="C105.pin2" to="net.PE" schDisplayLabel="PE" />
    <trace from="K100.pin2" to="R112.pin2" />
    <trace from="R112.pin2" to="C108.pin2" />
    <trace from="K100.pin4" to="R118.pin2" />
    <trace from="R118.pin2" to="R120.pin2" />
    <trace from="R120.pin2" to="D105.pin2" />
    <trace from="K100.pin5" to="D104.pin2" />
    <trace from="K100.pin5" to="net.GND" schDisplayLabel="GND" />
    <trace from="D105.pin1" to="D104.pin1" />
    <trace from="C113.pin1" to="net.GND" schDisplayLabel="GND" />
    <trace from="C113.pin2" to="R120.pin1" />
    <trace from="R120.pin1" to="R118.pin1" />
    <trace from="C113.pin2" to="net.N_15V" schDisplayLabel="15V" />
    <trace from="D103.pin3" to="D100.pin2" />
    <trace from="D103.pin1" to="D100.pin1" />
    <trace from="D103.pin2" to="D100.pin3" />
    <trace from="D103.pin4" to="D100.pin4" />
    <trace from="C104.pin2" to="C108.pin1" />
    <trace from="C104.pin2" to="net.PE" schDisplayLabel="PE" />
    <trace from="R108.pin1" to="R104.pin2" />
    <trace from="R108.pin2" to="R111.pin1" />
  </subcircuit>
);

export default PMP22606_FilterRectifier;
