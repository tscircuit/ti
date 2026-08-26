import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

/** PMP22606 1-kW continuous-conduction-mode PFC stage.
 * Source placement and connectivity were extracted from TI's native Altium sheet (TIDMBE3 PFC section).
 * @see https://www.ti.com/lit/pdf/TIDMBE3
 */
export const PMP22606_PFC = (props: SubcircuitProps) => (
  <subcircuit
    {...props}
    routingDisabled
    schMaxTraceDistance="100mm"
    schTraceAutoLabelEnabled={false}
  >
    <schematictext
      text="PMP22606 1-kW continuous-conduction-mode PFC stage"
      schX={0}
      schY={10.063}
      fontSize={0.7}
    />
    <chip
      name="D103"
      schX={-10.375}
      schY={1.063}
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
      name="R117"
      schX={2.625}
      schY={-2.687}
      resistance="499k"
      footprint="1206"
      schOrientation="vertical"
    />
    <resistor
      name="R119"
      schX={2.625}
      schY={-3.687}
      resistance="499k"
      footprint="1206"
      schOrientation="vertical"
    />
    <diode
      name="D101"
      schX={3.5}
      schY={5.563}
      manufacturerPartNumber="CVFD20065A"
      footprint="pinrow2_p2.54mm"
      variant="standard"
      schOrientation="horizontal"
    />
    <mosfet
      name="Q100"
      schX={-2.125}
      schY={3.813}
      manufacturerPartNumber="IPW65R095C7"
      footprint="pinrow3_p2.54mm"
      channelType="n"
      mosfetMode="enhancement"
    />
    <resistor
      name="R101"
      schX={-2.625}
      schY={3.313}
      resistance="20k"
      footprint="1206"
      schOrientation="vertical"
    />
    <resistor
      name="R102"
      schX={1.625}
      schY={3.313}
      resistance="20k"
      footprint="1206"
      schOrientation="vertical"
    />
    <resistor
      name="R105"
      schX={-7.875}
      schY={2.563}
      resistance="0.033ohm"
      footprint="2512"
      schOrientation="horizontal"
    />
    <resistor
      name="R121"
      schX={-1.875}
      schY={-5.187}
      resistance="5.90k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C117"
      schX={0.125}
      schY={-5.562}
      capacitance="0.47uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C119"
      schX={-1.875}
      schY={-6.062}
      capacitance="10uF"
      footprint="1206"
      schOrientation="vertical"
    />
    <resistor
      name="R100"
      schX={9.125}
      schY={3.813}
      resistance="330k"
      footprint="2512"
      schOrientation="vertical"
    />
    <chip
      name="J100"
      schX={10.375}
      schY={4.688}
      manufacturerPartNumber="691214310002"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [2, 1] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="J101"
      schX={10.375}
      schY={2.688}
      manufacturerPartNumber="691214310002"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [2, 1] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="Q103"
      schX={-3.75}
      schY={-0.187}
      manufacturerPartNumber="FMMT718TA"
      footprint="sot23"
      pinLabels={{ pin3: "C", pin1: "B", pin2: "E" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1] },
        rightSide: { direction: "top-to-bottom", pins: [2, 3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="Q102"
      schX={-3.75}
      schY={1.563}
      manufacturerPartNumber="FMMT620TA"
      footprint="sot23"
      pinLabels={{ pin3: "C", pin1: "B", pin2: "E" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1] },
        rightSide: { direction: "top-to-bottom", pins: [3, 2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <capacitor
      name="C111"
      schX={4.125}
      schY={-0.562}
      capacitance="1uF"
      footprint="1206"
      schOrientation="vertical"
    />
    <diode
      name="D102"
      schX={-4.25}
      schY={0.563}
      manufacturerPartNumber="BAT54HT1G"
      footprint="sod-323"
      variant="schottky"
      schOrientation="horizontal"
    />
    <capacitor
      name="C101"
      schX={4.875}
      schY={3.938}
      capacitance="180uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C102"
      schX={6.125}
      schY={3.938}
      capacitance="180uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C103"
      schX={7.375}
      schY={3.938}
      capacitance="180uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <chip
      name="U101"
      schX={-3.875}
      schY={-3.937}
      manufacturerPartNumber="UCC28180D"
      footprint="pinrow8_p2.54mm"
      pinLabels={{
        pin1: "GND",
        pin2: "ICOMP",
        pin3: "ISENSE",
        pin4: "FREQ",
        pin5: "VCOMP",
        pin6: "VSENSE",
        pin7: "VCC",
        pin8: "GATE",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2, 3, 4] },
        rightSide: { direction: "top-to-bottom", pins: [8, 7, 6, 5] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="U100"
      schX={1}
      schY={-0.437}
      manufacturerPartNumber="UCC27511DBVR"
      footprint="pinrow6_p2.54mm"
      pinLabels={{
        pin1: "VDD",
        pin2: "OUTH",
        pin3: "OUTL",
        pin4: "GND",
        pin5: "IN-",
        pin6: "IN+",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 6, 5] },
        rightSide: { direction: "top-to-bottom", pins: [2, 3, 4] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R113"
      schX={2.875}
      schY={-0.437}
      resistance="10ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R116"
      schX={-1.375}
      schY={-2.187}
      resistance="10ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C110"
      schX={-6.125}
      schY={0.438}
      capacitance="1uF"
      footprint="1206"
      schOrientation="vertical"
    />
    <resistor
      name="R115"
      schX={-8.375}
      schY={-1.687}
      resistance="221ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C116"
      schX={-0.875}
      schY={-5.562}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C118"
      schX={1.375}
      schY={-5.562}
      capacitance="1000pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R123"
      schX={2.625}
      schY={-5.687}
      resistance="13.3k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C112"
      schX={0.125}
      schY={-3.062}
      capacitance="0.47uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <mosfet
      name="Q101"
      schX={2.125}
      schY={3.813}
      manufacturerPartNumber="IPW65R095C7"
      footprint="pinrow3_p2.54mm"
      channelType="n"
      mosfetMode="enhancement"
    />
    <resistor
      name="R114"
      schX={3.125}
      schY={-0.937}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R122"
      schX={-5.875}
      schY={-5.687}
      resistance="16.2k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C100"
      schX={-8.625}
      schY={4.688}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <chip
      name="L100"
      schX={-4.375}
      schY={6.063}
      manufacturerPartNumber="RLTI-1328"
      footprint="pinrow4_p2.54mm"
      pinLabels={{ pin3: "3", pin1: "1", pin2: "2", pin4: "4" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1] },
        rightSide: { direction: "top-to-bottom", pins: [4] },
        bottomSide: { direction: "left-to-right", pins: [3, 2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <diode
      name="D106"
      schX={-10.125}
      schY={-5.437}
      manufacturerPartNumber="MMDL914-TP"
      footprint="sod-323"
      variant="standard"
      schOrientation="vertical"
    />
    <chip
      name="D100"
      schX={-10.375}
      schY={5.563}
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
    <capacitor
      name="C114"
      schX={-8.375}
      schY={-5.312}
      capacitance="680pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R106"
      schX={-7.875}
      schY={1.813}
      resistance="0.033ohm"
      footprint="2512"
      schOrientation="horizontal"
    />
    <resistor
      name="R109"
      schX={-7.875}
      schY={1.063}
      resistance="0.033ohm"
      footprint="2512"
      schOrientation="horizontal"
    />
    <capacitor
      name="C115"
      schX={-7.125}
      schY={-5.312}
      capacitance="2700pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <trace from="D103.pin3" to="D100.pin2" />
    <trace from="D103.pin1" to="C100.pin1" />
    <trace from="C100.pin1" to="D100.pin1" />
    <trace from="C100.pin1" to="L100.pin1" />
    <trace from="L100.pin1" to="L100.pin2" />
    <trace from="D103.pin2" to="D100.pin3" />
    <trace from="D103.pin4" to="R109.pin2" />
    <trace from="R109.pin2" to="R106.pin2" />
    <trace from="R106.pin2" to="R105.pin2" />
    <trace from="R105.pin2" to="C100.pin2" />
    <trace from="R109.pin2" to="R115.pin1" />
    <trace from="C100.pin2" to="D100.pin4" />
    <trace from="R117.pin1" to="net.B_" schDisplayLabel="B+" />
    <trace from="R117.pin2" to="R119.pin1" />
    <trace from="R119.pin2" to="R123.pin1" />
    <trace from="R123.pin1" to="C118.pin1" />
    <trace from="C118.pin1" to="U101.pin6" />
    <trace from="D101.pin1" to="Q101.drain" />
    <trace from="Q101.drain" to="Q100.drain" />
    <trace from="Q100.drain" to="L100.pin4" />
    <trace from="L100.pin4" to="L100.pin3" />
    <trace from="D101.pin2" to="C101.pin1" />
    <trace from="C101.pin1" to="C102.pin1" />
    <trace from="C102.pin1" to="C103.pin1" />
    <trace from="C103.pin1" to="R100.pin1" />
    <trace from="R100.pin1" to="J100.pin1" />
    <trace from="J100.pin1" to="J100.pin2" />
    <trace from="D101.pin2" to="net.B_" schDisplayLabel="B+" />
    <trace from="Q100.gate" to="R101.pin1" />
    <trace from="Q100.gate" to="Q102.pin2" />
    <trace from="Q102.pin2" to="Q103.pin2" />
    <trace from="Q103.pin2" to="D102.pin2" />
    <trace from="Q100.gate" to="R102.pin1" />
    <trace from="R102.pin1" to="Q101.gate" />
    <trace from="R102.pin1" to="R113.pin2" />
    <trace from="R113.pin2" to="R114.pin1" />
    <trace from="Q100.source" to="R101.pin2" />
    <trace from="Q100.source" to="R102.pin2" />
    <trace from="R102.pin2" to="Q101.source" />
    <trace from="Q101.source" to="C101.pin2" />
    <trace from="C101.pin2" to="C102.pin2" />
    <trace from="C102.pin2" to="C103.pin2" />
    <trace from="C103.pin2" to="R100.pin2" />
    <trace from="R100.pin2" to="J101.pin2" />
    <trace from="J101.pin2" to="J101.pin1" />
    <trace from="R101.pin2" to="R105.pin1" />
    <trace from="R105.pin1" to="R106.pin1" />
    <trace from="R106.pin1" to="R109.pin1" />
    <trace from="Q100.source" to="net.GND" schDisplayLabel="GND" />
    <trace from="R121.pin1" to="U101.pin5" />
    <trace from="R121.pin1" to="C116.pin1" />
    <trace from="C116.pin1" to="C117.pin1" />
    <trace from="R121.pin2" to="C119.pin1" />
    <trace from="C117.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="C119.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="Q103.pin3" to="net.GND" schDisplayLabel="GND" />
    <trace from="Q103.pin1" to="D102.pin1" />
    <trace from="Q103.pin1" to="Q102.pin1" />
    <trace from="Q103.pin1" to="R116.pin2" />
    <trace from="Q102.pin3" to="C110.pin1" />
    <trace from="Q102.pin3" to="net.N_15V" schDisplayLabel="15V" />
    <trace from="C111.pin1" to="net.N_15V" schDisplayLabel="15V" />
    <trace from="C111.pin2" to="U100.pin4" />
    <trace from="C111.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="U101.pin1" to="net.GND" schDisplayLabel="GND" />
    <trace from="U101.pin2" to="C115.pin1" />
    <trace from="U101.pin3" to="C114.pin1" />
    <trace from="C114.pin1" to="D106.pin2" />
    <trace from="C114.pin1" to="R115.pin2" />
    <trace from="U101.pin4" to="R122.pin1" />
    <trace from="U101.pin7" to="C112.pin1" />
    <trace from="U101.pin7" to="net.N_15V" schDisplayLabel="15V" />
    <trace from="U101.pin8" to="R116.pin1" />
    <trace from="C110.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="C116.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="C118.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="R123.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="C112.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="R122.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="D106.pin1" to="net.GND" schDisplayLabel="GND" />
    <trace from="C114.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="C115.pin2" to="net.GND" schDisplayLabel="GND" />
  </subcircuit>
);

export default PMP22606_PFC;
