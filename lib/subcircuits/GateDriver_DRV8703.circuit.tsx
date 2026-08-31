import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { DRV8703QRHBRQ1 } from "../chips/DRV8703QRHBRQ1.circuit.tsx";

type NetTieProps = { name: string; schX: number; schY: number };

/**
 * C6 receives a small left/up clearance shift from its Altium center so the
 * native autorouter can connect both charge-pump pins without label fallback.
 */
const ChargePumpCapacitor = () => (
  <capacitor
    name="C6"
    capacitance="0.1uF"
    footprint="0402"
    manufacturerPartNumber="GCM155R71H104KE02D"
    schX={-5.9}
    schY={0.3}
    schOrientation="vertical"
  />
);

/** A compact native two-pin chip represents the source net-tie. */
const NetTie = ({ name, schX, schY }: NetTieProps) => (
  <chip
    name={name}
    schX={schX}
    schY={schY}
    footprint="kicad:NetTie/NetTie-2_SMD_Pad0.5mm"
    pinLabels={{ pin1: "1", pin2: "2" }}
    schWidth={0.1}
    schHeight={0.35}
    schPinArrangement={{ leftSide: [1], rightSide: [2] }}
    internallyConnectedPins={[[1, 2]]}
  />
);

/**
 * DRV8703-Q1 gate-driver section extracted from the TIDA-01389 Altium sheet.
 * Component centers and label anchors use the normalized source coordinates.
 * The nearby passives only receive the small clearance shifts required by the
 * native schematic autorouter; source route points remain routing hints.
 *
 * Reference: https://www.ti.com/tool/TIDA-01389
 */
export const GateDriver_DRV8703 = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="20mm"
    schTraceAutoLabelEnabled={false}
    // This block is schematic-only. routingDisabled skips PCB autorouting but
    // does not disable the native schematic autorouter.
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />

    <DRV8703QRHBRQ1
      name="U1"
      schX={-3.198674}
      schY={-0.182781}
      noConnect={["nWDFLT", "NC"]}
    />

    <capacitor
      name="C8"
      capacitance="10uF"
      footprint="1206"
      manufacturerPartNumber="C3216X5R1H106K160AB"
      schX={-8.316553}
      schY={1.37086}
      schOrientation="vertical"
    />
    <capacitor
      name="C7"
      capacitance="0.1uF"
      footprint="0402"
      manufacturerPartNumber="GRM155R61H104ME14D"
      schX={-7.585427}
      schY={1.37086}
      schOrientation="vertical"
    />
    <capacitor
      name="C5"
      capacitance="1uF"
      footprint="0402"
      manufacturerPartNumber="C1005X5R1C105K050BC"
      schX={-6.305958}
      schY={1.37086}
      schOrientation="vertical"
    />
    <NetTie name="NT1" schX={-5.209269} schY={1.27947} />
    <capacitor
      name="C10"
      capacitance="1uF"
      footprint="0402"
      manufacturerPartNumber="GRM155R70J105MA12D"
      schX={-6.488739}
      schY={2.85033}
      schOrientation="vertical"
    />
    <capacitor
      name="C9"
      capacitance="1uF"
      footprint="0402"
      manufacturerPartNumber="GRM155R70J105MA12D"
      schX={-5.757613}
      schY={2.85033}
      schOrientation="vertical"
    />
    <ChargePumpCapacitor />
    <resistor
      name="R8"
      resistance="10kohm"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0JNED"
      schX={-0.274172}
      schY={-1.27947}
      schOrientation="vertical"
    />

    {/* AVDD and DVDD decoupling routes. */}
    <trace
      from="C10.pin1"
      to="U1.AVDD"
      schematicRouteHints={[
        { x: -6.488739, y: 3.124502 },
        { x: -4.843707, y: 3.124502 },
        { x: -4.843707, y: 2.376158 },
      ]}
    />
    <trace
      from="C9.pin1"
      to="U1.DVDD"
      schematicRouteHints={[
        { x: -5.757613, y: 3.124502 },
        { x: -5.209269, y: 3.124502 },
        { x: -5.209269, y: 2.010595 },
      ]}
    />
    <trace from="C10.pin2" to="C9.pin2" />
    <trace from="C9.pin2" to="net.GND" schDisplayLabel="GND" />

    {/* PVDD rail, local bypassing, and VDRAIN net tie. */}
    <trace
      from="C8.pin1"
      to="net.PVDD"
      schDisplayLabel="PVDD"
      schematicRouteHints={[{ x: -9.047678, y: 1.645032 }]}
    />
    <trace
      from="C8.pin1"
      to="C7.pin1"
      schematicRouteHints={[
        { x: -8.316553, y: 1.645032 },
        { x: -7.585427, y: 1.645032 },
      ]}
    />
    <trace
      from="C7.pin1"
      to="C5.pin1"
      schematicRouteHints={[
        { x: -7.585427, y: 1.645032 },
        { x: -6.305958, y: 1.645032 },
      ]}
    />
    <trace
      from="C5.pin1"
      to="U1.PVDD"
      schematicRouteHints={[
        { x: -6.305958, y: 1.645032 },
        { x: -5.757613, y: 1.645032 },
        { x: -4.660925, y: 1.645032 },
      ]}
    />
    <trace
      from="C8.pin2"
      to="C7.pin2"
      schematicRouteHints={[
        { x: -8.316553, y: 1.096688 },
        { x: -8.316553, y: 0.913907 },
        { x: -7.585427, y: 0.913907 },
        { x: -7.585427, y: 1.096688 },
      ]}
    />
    <trace from="C7.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace
      from="C5.pin2"
      to="U1.VCP"
      schDisplayLabel="VCP"
      schematicRouteHints={[
        { x: -6.305958, y: 0.913907 },
        { x: -4.660925, y: 0.913907 },
      ]}
    />
    <trace
      from="C5.pin1"
      to="NT1.pin1"
      schematicRouteHints={[
        { x: -5.757613, y: 1.645032 },
        { x: -5.757613, y: 1.27947 },
      ]}
    />
    <trace from="NT1.pin2" to="U1.VDRAIN" />

    {/* Charge-pump capacitor. */}
    <trace from="C6.pin2" to="U1.CPL" />
    <trace from="C6.pin1" to="U1.CPH" />

    {/* Driver inputs and control signals at their Altium label anchors. */}
    <trace from="U1.IN1_PH" to="net.IN1_PH" schDisplayLabel="IN1_PH" />
    <trace from="U1.IN2_EN" to="net.IN2_EN" schDisplayLabel="IN2_EN" />
    <trace from="U1.nSLEEP" to="net.SLEEP" schDisplayLabel="SLEEP" />
    <trace from="U1.MODE" to="net.GND" />
    <trace
      from="U1.SCLK"
      to="net.SCLK"
      schDisplayLabel="SCLK"
      schematicRouteHints={[{ x: -5.392051, y: -2.193377 }]}
    />
    <trace
      from="U1.SDI"
      to="net.SDI"
      schDisplayLabel="SDI"
      schematicRouteHints={[{ x: -5.392051, y: -2.376158 }]}
    />
    <trace
      from="U1.SDO"
      to="net.SDO"
      schDisplayLabel="SDO"
      schematicRouteHints={[{ x: -5.392051, y: -2.558939 }]}
    />
    <trace
      from="U1.nSCS"
      to="net.SCS"
      schDisplayLabel="SCS"
      schematicRouteHints={[{ x: -5.392051, y: -2.741721 }]}
    />

    {/* Gate-driver outputs. Repeated labels join the adjacent H-bridge exactly
        as they do on the source sheet; no cross-border wire was invented. */}
    <trace
      from="U1.GH1"
      to="net.GH1"
      schDisplayLabel="GH1"
      schematicRouteHints={[{ x: -1.005298, y: 2.376158 }]}
    />
    <trace
      from="U1.SH1"
      to="net.SH1"
      schDisplayLabel="SH1"
      schematicRouteHints={[{ x: -1.005298, y: 2.010595 }]}
    />
    <trace
      from="U1.GL1"
      to="net.GL1"
      schDisplayLabel="GL1"
      schematicRouteHints={[{ x: -1.005298, y: 1.645032 }]}
    />
    <trace
      from="U1.GH2"
      to="net.GH2"
      schDisplayLabel="GH2"
      schematicRouteHints={[{ x: -1.005298, y: 1.27947 }]}
    />
    <trace
      from="U1.SH2"
      to="net.SH2"
      schDisplayLabel="SH2"
      schematicRouteHints={[{ x: -1.005298, y: 0.913907 }]}
    />
    <trace
      from="U1.GL2"
      to="net.GL2"
      schDisplayLabel="GL2"
      schematicRouteHints={[{ x: -1.005298, y: 0.548344 }]}
    />
    <trace
      from="U1.SL2"
      to="net.SL2"
      schDisplayLabel="SL2"
      schematicRouteHints={[{ x: -1.005298, y: 0.182781 }]}
    />
    <trace
      from="U1.SP"
      to="net.SP"
      schDisplayLabel="SP"
      schematicRouteHints={[{ x: -1.005298, y: -0.182781 }]}
    />
    <trace
      from="U1.SN"
      to="net.SN"
      schDisplayLabel="SN"
      schematicRouteHints={[{ x: -1.005298, y: -0.548344 }]}
    />
    <trace
      from="U1.SO"
      to="net.SO"
      schDisplayLabel="SO"
      schematicRouteHints={[{ x: -1.005298, y: -0.913907 }]}
    />
    <trace
      from="U1.nFAULT"
      to="R8.pin2"
      schDisplayLabel="nFAULT"
      schematicRouteHints={[{ x: -0.274172, y: -1.645032 }]}
    />
    <trace
      from="U1.VREF"
      to="R8.pin1"
      schDisplayLabel="VCC"
      schematicRouteHints={[{ x: -0.274172, y: -0.913907 }]}
    />

    <trace from="U1.pin1" to="U1.pin13" />
    <trace from="U1.pin13" to="U1.pin17" />
    <trace from="U1.pin17" to="U1.pin33" />
    <trace
      from="U1.pin33"
      to="net.GND"
      schDisplayLabel="GND"
      schematicRouteHints={[{ x: -1.37086, y: -3.107283 }]}
    />

    <port name="PVDD" direction="left" connectsTo="C8.pin1" />
    <port name="VCC" direction="left" connectsTo="U1.VREF" />
    <port name="VCP" direction="left" connectsTo="C5.pin2" />
    <port name="IN1_PH" direction="left" connectsTo="net.IN1_PH" />
    <port name="IN2_EN" direction="left" connectsTo="net.IN2_EN" />
    <port name="nSLEEP" direction="left" connectsTo="net.SLEEP" />
    <port name="SCLK" direction="left" connectsTo="net.SCLK" />
    <port name="SDI" direction="left" connectsTo="net.SDI" />
    <port name="SDO" direction="left" connectsTo="net.SDO" />
    <port name="nSCS" direction="left" connectsTo="net.SCS" />
    <port name="GH1" direction="right" connectsTo="net.GH1" />
    <port name="SH1" direction="right" connectsTo="net.SH1" />
    <port name="GL1" direction="right" connectsTo="net.GL1" />
    <port name="GH2" direction="right" connectsTo="net.GH2" />
    <port name="SH2" direction="right" connectsTo="net.SH2" />
    <port name="GL2" direction="right" connectsTo="net.GL2" />
    <port name="SL2" direction="right" connectsTo="net.SL2" />
    <port name="SP" direction="right" connectsTo="net.SP" />
    <port name="SN" direction="right" connectsTo="net.SN" />
    <port name="SO" direction="right" connectsTo="net.SO" />
    <port name="nFAULT" direction="right" connectsTo="U1.nFAULT" />
    <port name="GND" direction="right" connectsTo="U1.pin33" />
  </subcircuit>
);

export default GateDriver_DRV8703;
