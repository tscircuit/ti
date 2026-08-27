import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
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
  <subcircuit schMaxTraceDistance="30mm" routingDisabled {...props}>
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
      connections={{ pin1: "net.VBATT_PCH" }}
    />
    <testpoint
      name="P2"
      displayName="GND"
      manufacturerPartNumber="6092"
      footprint="kicad:TestPoint/TestPoint_Plated_Hole_D3.0mm"
      schX={sx(3.048)}
      schY={sy(19.05)}
      connections={{ pin1: "net.GND" }}
    />
    <testpoint
      name="TP2"
      displayName="VBATT"
      manufacturerPartNumber="5010"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={sx(7.112)}
      schY={sy(22.4536)}
      connections={{ pin1: "net.VBATT_PCH" }}
    />
    <testpoint
      name="TP7"
      displayName="GND"
      manufacturerPartNumber="5011"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={sx(7.112)}
      schY={sy(17.6276)}
      connections={{ pin1: "net.GND" }}
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
      connections={{ pin1: "net.VBATT_PCH", pin2: "net.LED_RETURN" }}
    />
    <resistor
      name="R14"
      resistance="2.20kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04022K20FKED"
      schX={sx(4.064)}
      schY={sy(19.558)}
      schOrientation="vertical"
      connections={{ pin1: "net.GND", pin2: "net.LED_RETURN" }}
    />
    <diode
      name="D1"
      variant="avalanche"
      pinLabels={{ pin1: "1", pin2: "2" }}
      manufacturerPartNumber="SMAJ28CA"
      footprint="kicad:Diode_SMD/D_SMA"
      schX={sx(5.588)}
      schY={sy(20.574)}
      schOrientation="vertical"
      connections={{ pin1: "net.VBATT_PCH", pin2: "net.GND" }}
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
      connections={{ pin1: "net.EMI_CAP_MID", pin2: "net.VBATT_PCH" }}
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
      connections={{ pin1: "net.EMI_CAP_MID", pin2: "net.GND" }}
    />

    <SQJ461EP
      name="Q1"
      schX={sx(10.033)}
      schY={sy(22.1869)}
      connections={{
        pin1: "net.LOAD_SENS_PCH",
        pin2: "net.LOAD_SENS_PCH",
        pin3: "net.LOAD_SENS_PCH",
        pin4: "net.P_Gate",
        pin5: "net.VBATT_PCH",
      }}
    />
    <resistor
      name="R4"
      resistance="56kohm"
      tolerance="5%"
      footprint="0603"
      manufacturerPartNumber="RC0603JR-0756KL"
      schX={sx(11.938)}
      schY={sy(22.86)}
      schOrientation="vertical"
      connections={{ pin1: "net.LOAD_SENS_PCH", pin2: "net.P_Gate" }}
    />
    <resistor
      name="R1"
      resistance="10kohm"
      tolerance="5%"
      footprint="0402"
      manufacturerPartNumber="ERJ-2GEJ103X"
      schX={sx(9.652)}
      schY={sy(19.558)}
      schOrientation="horizontal"
      connections={{ pin1: "net.BATT_SENS_PCH", pin2: "net.VBATT_PCH" }}
    />
    <diode
      name="D3"
      variant="schottky"
      pinLabels={{ pin1: "K", pin2: "A" }}
      manufacturerPartNumber="BAT46W-E3-08"
      footprint="kicad:Diode_SMD/D_SOD-123"
      schX={sx(11.938)}
      schY={sy(18.1864)}
      schOrientation="vertical"
      connections={{ pin1: "net.BATT_SENS_PCH", pin2: "net.FLT_GND_P" }}
    />
    <capacitor
      name="C4"
      capacitance="10uF"
      maxVoltageRating="35V"
      footprint="1206"
      manufacturerPartNumber="C3216X7R1V106M160AC"
      schX={sx(15.748)}
      schY={sy(21.209)}
      schOrientation="vertical"
      connections={{ pin1: "net.LOAD_SENS_PCH", pin2: "net.FLT_GND_P" }}
    />
    <diode
      name="D5"
      variant="zener"
      pinLabels={{ pin1: "K", pin2: "A" }}
      manufacturerPartNumber="BZT52C15-7-F"
      footprint="kicad:Diode_SMD/D_SOD-123"
      schX={sx(16.764)}
      schY={sy(21.2598)}
      schOrientation="vertical"
      connections={{ pin1: "net.LOAD_SENS_PCH", pin2: "net.FLT_GND_P" }}
    />
    <TLV1805QDBVRQ1
      name="U1"
      schX={sx(18.542)}
      schY={sy(19.431)}
      connections={{
        OUT: "net.CMP_OUT_PCH",
        V_MINUS: "net.FLT_GND_P",
        IN_MINUS: "net.BATT_SENS_PCH",
        IN_PLUS: "net.LOAD_SENS_PCH",
        SD: "net.FLT_GND_P",
        V_PLUS: "net.LOAD_SENS_PCH",
      }}
    />
    <resistor
      name="R2"
      resistance="47ohm"
      tolerance="5%"
      footprint="0402"
      manufacturerPartNumber="CRCW040247R0JNED"
      schX={sx(22.098)}
      schY={sy(19.304)}
      schOrientation="horizontal"
      connections={{ pin1: "net.CMP_OUT_PCH", pin2: "net.P_Gate" }}
    />
    <diode
      name="D4"
      variant="schottky"
      pinLabels={{ pin1: "K", pin2: "A" }}
      manufacturerPartNumber="BAT46W-E3-08"
      footprint="kicad:Diode_SMD/D_SOD-123"
      schX={sx(18.542)}
      schY={sy(16.3576)}
      schRotation={90}
      connections={{ pin1: "net.D4_R3", pin2: "net.FLT_GND_P" }}
    />
    <resistor
      name="R3"
      resistance="560ohm"
      tolerance="1%"
      footprint="1206"
      manufacturerPartNumber="RC1206FR-07560RL"
      schX={sx(18.542)}
      schY={sy(15.24)}
      schOrientation="vertical"
      connections={{ pin1: "net.GND", pin2: "net.D4_R3" }}
    />
    <diode
      name="D6"
      pinLabels={{ pin1: "K", pin2: "A" }}
      manufacturerPartNumber="DB2430100L"
      footprint="kicad:Diode_SMD/D_SOD-128"
      schX={sx(23.876)}
      schY={sy(20.9804)}
      schOrientation="vertical"
      connections={{ pin1: "net.LOAD_SENS_PCH", pin2: "net.GND" }}
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
      connections={{ pin1: "net.LOAD_SENS_PCH", pin2: "net.GND" }}
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
      connections={{ pin1: "net.LOAD_SENS_PCH", pin2: "net.GND" }}
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
      connections={{ pin1: "net.LOAD_SENS_PCH", pin2: "net.GND" }}
    />
    <chip
      name="FB1"
      manufacturerPartNumber="HR2220V801R-10"
      footprint="kicad:Inductor_SMD/L_2220_5650Metric_Pad1.5x5.3mm_HandSolder"
      symbolName="inductor"
      schX={sx(34.798)}
      schY={sy(22.098)}
      pinLabels={{ pin1: "1", pin2: "2" }}
      connections={{ pin1: "net.LOAD_SENS_PCH", pin2: "net.FILTER_MID" }}
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
      connections={{ pin1: "net.FILTER_MID", pin2: "net.GND" }}
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
      connections={{ pin1: "net.FILTER_MID", pin2: "net.GND" }}
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
      connections={{ pin1: "net.FILTER_MID", pin2: "net.GND" }}
    />
    <inductor
      name="LF1"
      inductance="600nH"
      footprint="kicad:Inductor_SMD/L_Coilcraft_XAL40xx"
      manufacturerPartNumber="XAL4020-601MEB"
      schX={sx(39.624)}
      schY={sy(22.4155)}
      schOrientation="horizontal"
      connections={{ pin1: "net.FILTER_MID", pin2: "net.VIN1" }}
    />

    <port name="VBATT" direction="left" connectsTo="P1.pin1" />
    <port name="GND" direction="left" connectsTo="P2.pin1" />
    <port name="VIN1" direction="right" connectsTo="LF1.pin2" />
  </subcircuit>
);

export default ReverseBatteryProtection_TLV1805_SQJ461EP;
