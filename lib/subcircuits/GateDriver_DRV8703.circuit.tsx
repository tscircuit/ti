import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { DRV8703QRHBRQ1 } from "../chips/DRV8703QRHBRQ1.circuit.tsx";

type NetTieProps = { name: string; schX: number; schY: number };

/** C6 keeps the exact Altium component center and uses the native symbol. */
const ChargePumpCapacitor = () => (
  <capacitor
    name="C6"
    capacitance="0.1uF"
    footprint="0402"
    manufacturerPartNumber="GCM155R71H104KE02D"
    schX={-5.392051}
    schY={0.274172}
    schOrientation="vertical"
  />
);

/**
 * tscircuit has no dedicated net-tie primitive. A generic two-pin chip keeps
 * the Altium connectivity, box size, and designator; the adjacent value text
 * reproduces the source symbol's "Net-Tie" annotation.
 */
const NetTie = ({ name, schX, schY }: NetTieProps) => (
  <>
    <chip
      name={name}
      schX={schX}
      schY={schY}
      footprint="kicad:NetTie/NetTie-2_SMD_Pad0.5mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      internallyConnectedPins={[[1, 2]]}
      symbol={
        <symbol>
          <schematicrect
            schX={0}
            schY={0}
            width={0.4}
            height={0.4}
            strokeWidth={0.025}
          />
          <port
            name="pin1"
            schX={-0.365563}
            schY={0}
            direction="left"
            schStemLength={0.165563}
            pinNumber={1}
          />
          <port
            name="pin2"
            schX={0.365563}
            schY={0}
            direction="right"
            schStemLength={0.165563}
            pinNumber={2}
          />
        </symbol>
      }
    />
    <schematictext schX={schX} schY={schY + 0.34} text={name} fontSize={0.12} />
    <schematictext
      schX={schX}
      schY={schY - 0.34}
      text="Net-Tie"
      fontSize={0.1}
    />
  </>
);

/**
 * DRV8703-Q1 gate-driver section extracted from the TIDA-01389 Altium sheet.
 * Component centers, border, and label anchors use the normalized source
 * coordinates without re-layout. Native schematic traces are autorouted; the
 * source route points are supplied only as routing hints.
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

    <schematicbox
      name="DRV8703_SECTION"
      schX={-4.295363}
      schY={0}
      width={10.235757}
      height={7.676818}
    />
    <schematictext
      schX={-4.295363}
      schY={-4.18}
      text="DRV8703-Q1"
      fontSize={0.3}
    />
    <DRV8703QRHBRQ1
      name="U1"
      schX={-3.198674}
      schY={-0.182781}
      noConnect={["nWDFLT", "NC"]}
    />
    <schematictext
      schX={-4.295363}
      schY={2.94}
      text="U1"
      fontSize={0.16}
      anchor="left"
    />
    <schematictext
      schX={-4.295363}
      schY={-3.23}
      text="=PartNumber"
      fontSize={0.14}
      anchor="left"
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
      schY={2.65033}
      schOrientation="vertical"
    />
    <capacitor
      name="C9"
      capacitance="1uF"
      footprint="0402"
      manufacturerPartNumber="GRM155R70J105MA12D"
      schX={-5.757613}
      schY={2.65033}
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
        { x: -6.488739, y: 2.924502 },
        { x: -4.843707, y: 2.924502 },
        { x: -4.843707, y: 2.376158 },
      ]}
    />
    <trace
      from="C9.pin1"
      to="U1.DVDD"
      schematicRouteHints={[
        { x: -5.757613, y: 2.924502 },
        { x: -5.209269, y: 2.924502 },
        { x: -5.209269, y: 2.010595 },
      ]}
    />
    <trace from="C10.pin2" to="C9.pin2" />
    <netlabel
      net="GND"
      connectsTo="C9.pin2"
      schX={-5.757613}
      schY={2.376158}
      anchorSide="top"
    />

    {/* PVDD rail, local bypassing, and VDRAIN net tie. */}
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
    <netlabel
      net="PVDD"
      connectsTo="C8.pin1"
      schX={-9.047678}
      schY={1.645032}
      anchorSide="right"
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
    <netlabel
      net="GND"
      connectsTo="C7.pin2"
      schX={-7.95099}
      schY={0.913907}
      anchorSide="top"
    />
    <trace
      from="C5.pin2"
      to="U1.VCP"
      schematicRouteHints={[
        { x: -6.305958, y: 0.913907 },
        { x: -4.660925, y: 0.913907 },
      ]}
    />
    <netlabel
      net="VCP"
      connectsTo="C5.pin2"
      schX={-6.854302}
      schY={0.913907}
      anchorSide="right"
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
    <trace
      from="C6.pin2"
      to="U1.CPL"
      schematicRouteHints={[{ x: -5.392051, y: 0 }]}
    />
    <trace
      from="C6.pin1"
      to="U1.CPH"
      schematicRouteHints={[{ x: -5.392051, y: 0.548344 }]}
    />

    {/* Driver inputs and control signals at their Altium label anchors. */}
    <netlabel
      net="IN1_PH"
      connectsTo="U1.IN1_PH"
      schX={-5.392051}
      schY={-0.365563}
      anchorSide="right"
    />
    <netlabel
      net="IN2_EN"
      connectsTo="U1.IN2_EN"
      schX={-5.392051}
      schY={-0.731126}
      anchorSide="right"
    />
    <netlabel
      net="SLEEP"
      connectsTo="U1.nSLEEP"
      schX={-5.392051}
      schY={-1.096688}
      anchorSide="right"
    />
    <netlabel
      net="GND"
      connectsTo="U1.MODE"
      schX={-5.940395}
      schY={-1.462251}
      anchorSide="right"
    />
    <netlabel
      net="SCLK"
      connectsTo="U1.SCLK"
      schX={-5.392051}
      schY={-2.193377}
      anchorSide="right"
    />
    <netlabel
      net="SDI"
      connectsTo="U1.SDI"
      schX={-5.392051}
      schY={-2.376158}
      anchorSide="right"
    />
    <netlabel
      net="SDO"
      connectsTo="U1.SDO"
      schX={-5.392051}
      schY={-2.558939}
      anchorSide="right"
    />
    <netlabel
      net="SCS"
      connectsTo="U1.nSCS"
      schX={-5.392051}
      schY={-2.741721}
      anchorSide="right"
    />

    {/* Gate-driver outputs. Repeated labels join the adjacent H-bridge exactly
        as they do on the source sheet; no cross-border wire was invented. */}
    <netlabel
      net="GH1"
      connectsTo="U1.GH1"
      schX={-1.005298}
      schY={2.376158}
      anchorSide="left"
    />
    <netlabel
      net="SH1"
      connectsTo="U1.SH1"
      schX={-1.005298}
      schY={2.010595}
      anchorSide="left"
    />
    <netlabel
      net="GL1"
      connectsTo="U1.GL1"
      schX={-1.005298}
      schY={1.645032}
      anchorSide="left"
    />
    <netlabel
      net="GH2"
      connectsTo="U1.GH2"
      schX={-1.005298}
      schY={1.27947}
      anchorSide="left"
    />
    <netlabel
      net="SH2"
      connectsTo="U1.SH2"
      schX={-1.005298}
      schY={0.913907}
      anchorSide="left"
    />
    <netlabel
      net="GL2"
      connectsTo="U1.GL2"
      schX={-1.005298}
      schY={0.548344}
      anchorSide="left"
    />
    <netlabel
      net="SL2"
      connectsTo="U1.SL2"
      schX={-1.005298}
      schY={0.182781}
      anchorSide="left"
    />
    <netlabel
      net="SP"
      connectsTo="U1.SP"
      schX={-1.005298}
      schY={-0.182781}
      anchorSide="left"
    />
    <netlabel
      net="SN"
      connectsTo="U1.SN"
      schX={-1.005298}
      schY={-0.548344}
      anchorSide="left"
    />
    <netlabel
      net="SO"
      connectsTo="U1.SO"
      schX={-1.005298}
      schY={-0.913907}
      anchorSide="left"
    />
    <netlabel
      net="VCC"
      connectsTo="U1.VREF"
      schX={-1.005298}
      schY={-1.27947}
      anchorSide="left"
    />
    <trace
      from="U1.nFAULT"
      to="R8.pin2"
      schematicRouteHints={[{ x: -0.274172, y: -1.645032 }]}
    />
    <netlabel
      net="nFAULT"
      connectsTo="R8.pin2"
      schX={0.091391}
      schY={-1.645032}
      anchorSide="left"
    />
    <netlabel
      net="VCC"
      connectsTo="R8.pin1"
      schX={-0.274172}
      schY={-0.913907}
      anchorSide="bottom"
    />

    <netlabel
      net="GND"
      connectsTo="U1.pin1"
      schX={-1.37086}
      schY={-3.107283}
      anchorSide="top"
    />
    <netlabel
      net="GND"
      connectsTo="U1.pin13"
      schX={-1.37086}
      schY={-3.107283}
      anchorSide="top"
    />
    <netlabel
      net="GND"
      connectsTo="U1.pin17"
      schX={-1.37086}
      schY={-3.107283}
      anchorSide="top"
    />
    <netlabel
      net="GND"
      connectsTo="U1.pin33"
      schX={-1.37086}
      schY={-3.107283}
      anchorSide="top"
    />

    <port name="PVDD" direction="left" connectsTo="net.PVDD" />
    <port name="VCC" direction="left" connectsTo="net.VCC" />
    <port name="VCP" direction="left" connectsTo="net.VCP" />
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
    <port name="nFAULT" direction="right" connectsTo="net.nFAULT" />
    <port name="GND" direction="right" connectsTo="net.GND" />
  </subcircuit>
);

export default GateDriver_DRV8703;
