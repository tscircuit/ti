import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { BAT46W_E3_08 } from "../chips/BAT46W_E3_08.circuit.tsx";
import { SQJ461EP } from "../chips/SQJ461EP.circuit.tsx";
import { TLV1805QDBVRQ1 } from "../chips/TLV1805QDBVRQ1.circuit.tsx";

const SOURCE_ORIGIN = { x: 21.716, y: 19.812 } as const;
const sx = (x: number) => Number((x - SOURCE_ORIGIN.x).toFixed(6));
const sy = (y: number) => Number((y - SOURCE_ORIGIN.y).toFixed(6));

/**
 * Reverse-battery, transient-protection, and EMI-input section from sheet 2 of
 * TI TIDA-050008 (native Altium archive TIDRXT8).
 *
 * Coordinate transform: Altium positions are converted from mil to mm using
 * x_mm = x_mil * 0.0254 and y_mm = y_mil * 0.0254. This child then applies the
 * pure translation (x_tsx, y_tsx) = (x_mm - 21.716, y_mm - 19.812). There is
 * no scaling, rotation, reflection, or re-layout.
 *
 * The released schematic displays Q1 as SQJ465EP, while TI's released BOM
 * specifies the fitted manufacturer part number SQJ461EP. The component keeps
 * the authoritative BOM MPN and the released five-terminal Altium pin map.
 */
export const ReverseBatteryProtection_TLV1805_SQJ461EP = (
  props: SubcircuitProps,
) => (
  <subcircuit schMaxTraceDistance="5mm" routingDisabled {...props}>
    <net name="GND" isPowerNet isGroundNet />

    <schematictext
      text="Reverse Battery Protection and System EMI Input Filter"
      schX={sx(21.716)}
      schY={sy(24.638)}
      fontSize={0.3}
    />

    <testpoint
      name="P1"
      displayName="VBATT"
      manufacturerPartNumber="6091"
      footprint="kicad:TestPoint/TestPoint_Plated_Hole_D3.0mm"
      schX={sx(3.048)}
      schY={sy(22.098)}
    />
    <testpoint
      name="P2"
      displayName="GND"
      manufacturerPartNumber="6092"
      footprint="kicad:TestPoint/TestPoint_Plated_Hole_D3.0mm"
      schX={sx(3.048)}
      schY={sy(19.05)}
    />
    <testpoint
      name="TP2"
      displayName="VBATT"
      manufacturerPartNumber="5010"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={sx(7.112)}
      schY={sy(22.4536)}
      schRotation={90}
    />
    <testpoint
      name="TP7"
      displayName="GND"
      manufacturerPartNumber="5011"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={sx(7.112)}
      schY={sy(17.6276)}
      schRotation={90}
    />

    <led
      name="D2"
      color="red"
      footprint="led0402"
      manufacturerPartNumber="SML-P12UTT86"
      pinLabels={{ pin1: "K", pin2: "A" }}
      schX={sx(3.9497)}
      schY={sy(21.082)}
      schOrientation="vertical"
    />
    <resistor
      name="R14"
      resistance="2.20kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04022K20FKED"
      schX={sx(4.064)}
      schY={sy(19.558)}
      schRotation={90}
    />
    <diode
      name="D1"
      avalanche
      pinLabels={{ pin1: "1", pin2: "2" }}
      manufacturerPartNumber="SMAJ28CA"
      footprint="kicad:Diode_SMD/D_SMA"
      schX={sx(5.588)}
      schY={sy(20.574)}
      schOrientation="vertical"
    />
    <capacitor
      name="C24"
      capacitance="0.22uF"
      maxVoltageRating="50V"
      footprint="0603"
      manufacturerPartNumber="CGA3E3X7R1H224K080AB"
      schX={sx(7.239)}
      schY={sy(20.574)}
      schOrientation="horizontal"
    />
    <capacitor
      name="C25"
      capacitance="0.22uF"
      maxVoltageRating="50V"
      footprint="0603"
      manufacturerPartNumber="CGA3E3X7R1H224K080AB"
      schX={sx(6.604)}
      schY={sy(19.431)}
      schOrientation="vertical"
    />

    <SQJ461EP name="Q1" schX={sx(10.033)} schY={sy(22.1869)} />
    <resistor
      name="R4"
      resistance="56kohm"
      tolerance="5%"
      footprint="0603"
      manufacturerPartNumber="RC0603JR-0756KL"
      schX={sx(11.938)}
      schY={sy(22.86)}
      schRotation={90}
    />
    <resistor
      name="R1"
      resistance="10kohm"
      tolerance="5%"
      footprint="0402"
      manufacturerPartNumber="ERJ-2GEJ103X"
      schX={sx(9.652)}
      schY={sy(19.558)}
      schRotation={180}
    />
    <BAT46W_E3_08 name="D3" schX={sx(11.938)} schY={sy(18.1864)} />
    <capacitor
      name="C4"
      capacitance="10uF"
      maxVoltageRating="35V"
      footprint="1206"
      manufacturerPartNumber="C3216X7R1V106M160AC"
      schX={sx(15.748)}
      schY={sy(21.209)}
      schOrientation="vertical"
    />
    <diode
      name="D5"
      zener
      pinLabels={{ pin1: "K", pin2: "A" }}
      manufacturerPartNumber="BZT52C15-7-F"
      footprint="kicad:Diode_SMD/D_SOD-123"
      schX={sx(16.764)}
      schY={sy(21.2598)}
      schOrientation="vertical"
    />
    <TLV1805QDBVRQ1 name="U1" schX={sx(18.542)} schY={sy(19.431)} />
    <resistor
      name="R2"
      resistance="47ohm"
      tolerance="5%"
      footprint="0402"
      manufacturerPartNumber="CRCW040247R0JNED"
      schX={sx(22.098)}
      schY={sy(19.304)}
      schOrientation="horizontal"
    />
    <BAT46W_E3_08
      name="D4"
      schX={sx(18.542)}
      schY={sy(16.3576)}
      schRotation={180}
    />
    <resistor
      name="R3"
      resistance="560ohm"
      tolerance="1%"
      footprint="1206"
      manufacturerPartNumber="RC1206FR-07560RL"
      schX={sx(18.542)}
      schY={sy(15.24)}
      schRotation={90}
    />
    <diode
      name="D6"
      pinLabels={{ pin1: "K", pin2: "A" }}
      manufacturerPartNumber="DB2430100L"
      footprint="kicad:Diode_SMD/D_SOD-128"
      schX={sx(23.876)}
      schY={sy(20.9804)}
      schOrientation="vertical"
    />

    <capacitor
      name="CF1"
      capacitance="4.7uF"
      maxVoltageRating="50V"
      footprint="1206"
      manufacturerPartNumber="C3216X7R1H475K160AC"
      schX={sx(31.369)}
      schY={sy(20.955)}
      schOrientation="vertical"
    />
    <capacitor
      name="C1"
      capacitance="0.1uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GCM188R71C104KA37J"
      schX={sx(32.385)}
      schY={sy(20.955)}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GCM188R71C104KA37J"
      schX={sx(33.401)}
      schY={sy(20.955)}
      schOrientation="vertical"
    />
    <chip
      name="FB1"
      manufacturerPartNumber="HR2220V801R-10"
      footprint="kicad:Inductor_SMD/L_2220_5650Metric_Pad1.5x5.3mm_HandSolder"
      symbolName="inductor"
      schX={sx(34.798)}
      schY={sy(22.098)}
      pinLabels={{ pin1: "1", pin2: "2" }}
    />
    <schematictext
      text="800 ohm @ 100 MHz"
      schX={sx(34.798)}
      schY={sy(21.463)}
      fontSize={0.13}
    />
    <capacitor
      name="CF2"
      capacitance="4.7uF"
      maxVoltageRating="50V"
      footprint="1206"
      manufacturerPartNumber="C3216X7R1H475K160AC"
      schX={sx(36.195)}
      schY={sy(20.955)}
      schOrientation="vertical"
    />
    <capacitor
      name="C3"
      capacitance="0.1uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GCM188R71C104KA37J"
      schX={sx(37.465)}
      schY={sy(20.955)}
      schOrientation="vertical"
    />
    <capacitor
      name="C8"
      capacitance="0.1uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GCM188R71C104KA37J"
      schX={sx(38.481)}
      schY={sy(20.955)}
      schOrientation="vertical"
    />
    <inductor
      name="LF1"
      inductance="600nH"
      footprint="kicad:Inductor_SMD/L_Coilcraft_XAL40xx"
      manufacturerPartNumber="XAL4020-601MEB"
      schX={sx(39.624)}
      schY={sy(22.4155)}
      schOrientation="horizontal"
    />

    <trace
      name="VBATT_PCH"
      schDisplayLabel="VBATT_PCH"
      path={[
        ".P1 > .pin1",
        ".TP2 > .pin1",
        ".Q1 > .pin5",
        ".R1 > .pin2",
        ".D2 > .pin1",
        ".D1 > .pin1",
        ".C24 > .pin2",
      ]}
    />
    <trace
      from=".D2 > .pin2"
      to=".R14 > .pin2"
      schematicRouteHints={[
        { x: sx(3.9497), y: sy(20.447) },
        { x: sx(4.064), y: sy(20.193) },
      ]}
    />
    <trace path={[".C24 > .pin1", ".C25 > .pin1"]} />
    <trace
      name="VIN2"
      schDisplayLabel="VIN2"
      path={[
        ".Q1 > .pin1",
        ".Q1 > .pin2",
        ".Q1 > .pin3",
        ".R4 > .pin1",
        ".C4 > .pin1",
        ".D5 > .pin1",
        ".U1 > .pin4",
        ".U1 > .pin6",
        ".D6 > .pin1",
        ".CF1 > .pin1",
        ".C1 > .pin1",
        ".C2 > .pin1",
        ".FB1 > .pin1",
      ]}
    />
    <trace
      name="P_Gate"
      schDisplayLabel="P_Gate"
      path={[".Q1 > .pin4", ".R4 > .pin2", ".R2 > .pin2"]}
    />
    <trace
      name="BATT_SENS_PCH"
      schDisplayLabel="BATT_SENS_PCH"
      from=".R1 > .pin1"
      to=".U1 > .pin3"
    />
    <trace from=".R1 > .pin1" to=".D3 > .pin1" />
    <trace
      name="FLT_GND_P"
      schDisplayLabel="FLT_GND_P"
      path={[
        ".D3 > .pin2",
        ".C4 > .pin2",
        ".D5 > .pin2",
        ".U1 > .pin2",
        ".U1 > .pin5",
        ".D4 > .pin2",
      ]}
    />
    <trace
      name="CMP_OUT_PCH"
      schDisplayLabel="CMP_OUT_PCH"
      path={[".U1 > .pin1", ".R2 > .pin1"]}
    />
    <trace path={[".D4 > .pin1", ".R3 > .pin2"]} />
    <trace
      path={[
        ".FB1 > .pin2",
        ".CF2 > .pin1",
        ".C3 > .pin1",
        ".C8 > .pin1",
        ".LF1 > .pin1",
      ]}
    />
    <trace from=".P2 > .pin1" to="net.GND" />
    <trace from=".TP7 > .pin1" to="net.GND" />
    <trace from=".R14 > .pin1" to="net.GND" />
    <trace from=".D1 > .pin2" to="net.GND" />
    <trace from=".C25 > .pin2" to="net.GND" />
    <trace from=".R3 > .pin1" to="net.GND" />
    <trace from=".D6 > .pin2" to="net.GND" />
    <trace from=".CF1 > .pin2" to="net.GND" />
    <trace from=".C1 > .pin2" to="net.GND" />
    <trace from=".C2 > .pin2" to="net.GND" />
    <trace from=".CF2 > .pin2" to="net.GND" />
    <trace from=".C3 > .pin2" to="net.GND" />
    <trace from=".C8 > .pin2" to="net.GND" />
    <trace
      name="VIN1"
      schDisplayLabel="VIN1"
      from=".LF1 > .pin2"
      to="net.VIN1"
    />

    <port name="VBATT" direction="left" connectsTo="P1.pin1" />
    <port name="GND" direction="left" connectsTo="P2.pin1" />
    <port name="VIN1" direction="right" connectsTo="LF1.pin2" />
  </subcircuit>
);

export default ReverseBatteryProtection_TLV1805_SQJ461EP;
