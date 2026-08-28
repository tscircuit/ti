import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  CC2540F256RHAR,
  CC2540F256RHAR_PIN_LABELS,
} from "../chips/CC2540F256RHAR.circuit.tsx";

interface GroundTerminalProps {
  name: string;
  connection: string;
  schX: number;
  schY: number;
  anchorSide?: "top" | "right" | "bottom" | "left";
}

/** A local schematic ground terminal tied directly to the shared GND net. */
const GroundTerminal = ({
  connection,
  schX,
  schY,
  anchorSide = "top",
}: GroundTerminalProps) => (
  <netlabel
    net="GND"
    connectsTo={connection}
    schX={schX}
    schY={schY}
    anchorSide={anchorSide}
  />
);

const iifaAntennaSymbol = (
  <symbol>
    <schematictext
      text="{NAME}"
      schX={-0.7}
      schY={0.55}
      fontSize={0.2}
      anchor="center"
    />
    <schematictext
      text="ANTENNA_IIFA_1_LEFT"
      schX={0.5}
      schY={0.3}
      fontSize={0.18}
      anchor="center"
    />
    <schematicline x1={-0.8} y1={0} x2={1.8} y2={0} strokeWidth={0.03} />
    <schematicline x1={-0.65} y1={-0.6} x2={-0.65} y2={0} strokeWidth={0.03} />
    <schematicline x1={0.15} y1={-0.6} x2={0.15} y2={0} strokeWidth={0.03} />
    <port
      name="pin2"
      pinNumber={2}
      direction="down"
      schX={-0.65}
      schY={-0.6}
      schStemLength={0}
    />
    <port
      name="pin1"
      pinNumber={1}
      direction="down"
      schX={0.15}
      schY={-0.6}
      schStemLength={0}
    />
  </symbol>
);

/**
 * Active Bluetooth Low Energy radio extracted from the RF-PART sheet of
 * TI reference design TIDC-CC2540-BLE-USB (schematic TIDRES0, sheet 3/4).
 *
 * The boundary intentionally includes the CC2540 power decoupling, 32 MHz
 * clock, reset network, Johanson balun, RF shunt capacitor, and PCB IIFA
 * antenna. USB and GPIO nets remain available to the surrounding system.
 * @see https://www.ti.com/tool/TIDC-CC2540-BLE-USB
 */
export const WirelessConnectivity_CC2540_TIDCCC2540BLEUSB = (
  props: SubcircuitProps,
) => (
  <subcircuit
    {...props}
    routingDisabled
    schMaxTraceDistance="20mm"
    schTraceAutoLabelEnabled={false}
  >
    <net name="GND" isGroundNet />
    <net name="VCC" isPowerNet />
    <net name="V3P3_IN" isPowerNet />
    <net name="PA_DP" />
    <net name="PA_DM" />
    <net name="RESET_N" />

    <CC2540F256RHAR
      name="U1"
      schX={0}
      schY={0}
      schWidth="4.2mm"
      schHeight="9mm"
      pcbX={0}
      pcbY={0}
      pinLabels={{
        ...CC2540F256RHAR_PIN_LABELS,
        pin1: ["GND", "DGND_USB", "GND_USB"],
        pin2: ["PA_DP", "USB_P"],
        pin3: ["PA_DM", "USB_N"],
      }}
      internallyConnectedPins={[["pin1", "pin41"]]}
      connections={{
        PA_DP: "net.PA_DP",
        PA_DM: "net.PA_DM",
        P2_0: "net.P2_0",
        P2_1: "net.P2_1",
        P2_2: "net.P2_2",
        P1_0: "net.P1_0_LED",
        P1_1: "net.P1_1_LED",
        P1_2: "net.P1_2",
        P1_3: "net.P1_3",
        P1_4: "net.P1_4",
        P1_5: "net.P1_5",
        P1_6: "net.P1_6",
        P1_7: "net.P1_7",
        P0_0: "net.P0_0",
        P0_1: "net.P0_1",
        P0_2: "net.P0_2",
        P0_3: "net.P0_3",
        P0_4: "net.P0_4",
        P0_5: "net.P0_5",
        P0_6: "net.P0_6",
        P0_7: "net.P0_7",
      }}
    />
    <schematicsymbol
      name="GND_DGND_USB"
      displayName="GND"
      symbolName="ground_down"
      schX={-5}
      schY={2.1}
    />
    <trace
      from=".U1 > .pin1"
      to=".GND_DGND_USB > .pin1"
      schematicRouteHints={[{ x: -5, y: 2.4 }]}
    />

    {/* 3.3 V input and the VCC rail from the released schematic. */}
    <inductor
      name="L1"
      manufacturerPartNumber="BLM15HG102SN1D"
      inductance="1uH"
      footprint="0402"
      schX={11.8}
      schY={7.6}
      pcbX={5}
      pcbY={-2.5}
    />
    <capacitor
      name="C4"
      capacitance="2.2uF"
      footprint="0402"
      schOrientation="vertical"
      schX={10.3}
      schY={6.25}
      pcbX={5}
      pcbY={-5}
      pcbRotation={90}
    />

    {/* Decoupling capacitors, in the same left-to-right order as sheet 3. */}
    <capacitor
      name="C101"
      capacitance="100nF"
      footprint="0402"
      schOrientation="vertical"
      schX={-7.2}
      schY={6.6}
      pcbX={-5}
      pcbY={5}
      pcbRotation={90}
    />
    <capacitor
      name="C391"
      capacitance="1uF"
      footprint="0402"
      schOrientation="vertical"
      schX={-5.5}
      schY={6.6}
      pcbX={-5}
      pcbY={2.5}
      pcbRotation={90}
    />
    <capacitor
      name="C41"
      capacitance="10pF"
      footprint="0402"
      schOrientation="vertical"
      schX={-3.8}
      schY={6.6}
      pcbX={-7.5}
      pcbY={0}
      pcbRotation={90}
    />
    <capacitor
      name="C211"
      capacitance="100nF"
      footprint="0402"
      schOrientation="vertical"
      schX={3.3}
      schY={6.6}
      pcbX={-5}
      pcbY={0}
      pcbRotation={90}
    />
    <capacitor
      name="C241"
      capacitance="100nF"
      footprint="0402"
      schOrientation="vertical"
      schX={4.9}
      schY={6.6}
      pcbX={5}
      pcbY={6}
      pcbRotation={90}
    />
    <capacitor
      name="C271"
      capacitance="100nF"
      footprint="0402"
      schOrientation="vertical"
      schX={6.5}
      schY={6.6}
      pcbX={5}
      pcbY={4}
      pcbRotation={90}
    />
    <capacitor
      name="C272"
      capacitance="220pF"
      footprint="0402"
      schOrientation="vertical"
      schX={8.1}
      schY={6.6}
      pcbX={5}
      pcbY={2}
      pcbRotation={90}
    />
    <capacitor
      name="C311"
      capacitance="100nF"
      footprint="0402"
      schOrientation="vertical"
      schX={9.7}
      schY={6.6}
      pcbX={5}
      pcbY={0}
      pcbRotation={90}
    />

    <group schMaxTraceDistance="20mm">
      <trace
        from=".C101 > .pin1"
        to=".C391 > .pin1"
        schematicRouteHints={[{ x: -6.35, y: 7.1 }]}
      />
      <trace
        from=".C391 > .pin1"
        to=".C41 > .pin1"
        schematicRouteHints={[{ x: -4.65, y: 7.1 }]}
      />
      <trace
        from=".C41 > .pin1"
        to=".C211 > .pin1"
        schematicRouteHints={[{ x: -0.25, y: 7.1 }]}
      />
      <trace
        from=".C211 > .pin1"
        to=".C241 > .pin1"
        schematicRouteHints={[{ x: 4.1, y: 7.1 }]}
      />
      <trace
        from=".C241 > .pin1"
        to=".C271 > .pin1"
        schematicRouteHints={[{ x: 5.7, y: 7.1 }]}
      />
      <trace
        from=".C271 > .pin1"
        to=".C272 > .pin1"
        schematicRouteHints={[{ x: 7.3, y: 7.1 }]}
      />
      <trace
        from=".C272 > .pin1"
        to=".C311 > .pin1"
        schematicRouteHints={[{ x: 8.9, y: 7.1 }]}
      />
      <trace
        from=".C311 > .pin1"
        to=".C4 > .pin1"
        schematicRouteHints={[
          { x: 9.7, y: 7.25 },
          { x: 10.3, y: 7.25 },
        ]}
      />
      <trace
        from=".C4 > .pin1"
        to=".L1 > .pin1"
        schematicRouteHints={[
          { x: 10.3, y: 7.6 },
          { x: 10.8, y: 7.6 },
        ]}
      />
    </group>
    <netlabel
      net="VCC"
      connection="C4.pin1"
      schX={10.3}
      schY={7.65}
      anchorSide="bottom"
    />
    <netlabel
      net="V3P3_IN"
      connection="L1.pin2"
      schX={13.2}
      schY={7.6}
      anchorSide="left"
    />

    <GroundTerminal
      name="GND_C101"
      connection=".C101 > .pin2"
      schX={-7.2}
      schY={5.4}
    />
    <GroundTerminal
      name="GND_C391"
      connection=".C391 > .pin2"
      schX={-5.5}
      schY={5.4}
    />
    <GroundTerminal
      name="GND_C41"
      connection=".C41 > .pin2"
      schX={-3.8}
      schY={5.4}
    />
    <GroundTerminal
      name="GND_C211"
      connection=".C211 > .pin2"
      schX={3.3}
      schY={5.4}
    />
    <GroundTerminal
      name="GND_C241"
      connection=".C241 > .pin2"
      schX={4.9}
      schY={5.4}
    />
    <GroundTerminal
      name="GND_C271"
      connection=".C271 > .pin2"
      schX={6.5}
      schY={5.4}
    />
    <GroundTerminal
      name="GND_C272"
      connection=".C272 > .pin2"
      schX={8.1}
      schY={5.4}
    />
    <GroundTerminal
      name="GND_C311"
      connection=".C311 > .pin2"
      schX={9.7}
      schY={5.4}
    />
    <GroundTerminal
      name="GND_C4"
      connection=".C4 > .pin2"
      schX={10.3}
      schY={5.05}
    />

    <group schMaxTraceDistance="20mm">
      <trace
        from=".U1 > .DVDD2"
        to=".C101 > .pin1"
        schematicRouteHints={[
          { x: -3, y: 4.9 },
          { x: -3, y: 7.1 },
        ]}
      />
      <trace
        from=".U1 > .DVDD1"
        to=".C391 > .pin1"
        schematicRouteHints={[
          { x: -3.35, y: 4.55 },
          { x: -3.35, y: 7.1 },
        ]}
      />
      <trace
        from=".U1 > .DVDD_USB"
        to=".C41 > .pin1"
        schematicRouteHints={[
          { x: -3.7, y: 3.3 },
          { x: -3.7, y: 7.1 },
        ]}
      />
      <trace
        from=".U1 > .AVDD5"
        to=".C211 > .pin1"
        schematicRouteHints={[
          { x: 2.8, y: 4.9 },
          { x: 2.8, y: 7.1 },
        ]}
      />
      <trace
        from=".U1 > .AVDD3"
        to=".C241 > .pin1"
        schematicRouteHints={[
          { x: 3.15, y: 4.5 },
          { x: 3.15, y: 7.1 },
        ]}
      />
      <trace
        from=".U1 > .AVDD2"
        to=".C271 > .pin1"
        schematicRouteHints={[
          { x: 3.5, y: 4.1 },
          { x: 3.5, y: 7.1 },
        ]}
      />
      <trace
        from=".U1 > .AVDD1"
        to=".C272 > .pin1"
        schematicRouteHints={[
          { x: 3.85, y: 3.75 },
          { x: 3.85, y: 7.1 },
        ]}
      />
      <trace
        from=".U1 > .AVDD4"
        to=".C272 > .pin1"
        schematicRouteHints={[
          { x: 4.2, y: 3.4 },
          { x: 4.2, y: 7.1 },
        ]}
      />
      <trace
        from=".U1 > .AVDD6"
        to=".C311 > .pin1"
        schematicRouteHints={[
          { x: 4.55, y: 3.05 },
          { x: 4.55, y: 7.1 },
        ]}
      />
    </group>
    <GroundTerminal
      name="GND_U1"
      connection=".U1 > .pin41"
      schX={2.5}
      schY={-2.8}
    />

    {/* Differential RF output, balun, matching capacitor, and PCB antenna. */}
    <chip
      name="B1"
      manufacturerPartNumber="2450BM15A0002"
      footprint="qfn6"
      pinLabels={{
        pin1: "ANT",
        pin2: "GND",
        pin3: "RF_N",
        pin4: "RF_P",
        pin5: "GND2",
        pin6: "GND3",
      }}
      internallyConnectedPins={[["pin2", "pin5", "pin6"]]}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [4, 3] },
        rightSide: { direction: "top-to-bottom", pins: [1] },
        bottomSide: { direction: "left-to-right", pins: [2] },
      }}
      schWidth="1.8mm"
      schHeight="1mm"
      schX={6.25}
      schY={0.5}
      pcbX={8}
      pcbY={-0.5}
    />
    <chip
      name="A2"
      manufacturerPartNumber="ANTENNA_IIFA_1_LEFT"
      footprint="pinrow2"
      symbol={iifaAntennaSymbol}
      schX={8.05}
      schY={2.3}
      pcbX={14}
      pcbY={0}
    />
    <resistor
      name="R9"
      resistance="0ohm"
      footprint="0402"
      schOrientation="vertical"
      schX={8.2}
      schY={1.4}
      pcbX={10}
      pcbY={2.5}
      pcbRotation={90}
    />
    <capacitor
      name="C5"
      capacitance="0.5pF"
      footprint="0402"
      schOrientation="vertical"
      schX={8.2}
      schY={-0.05}
      pcbX={10}
      pcbY={-3.5}
      pcbRotation={90}
    />
    <group schMaxTraceDistance="20mm">
      <trace
        from=".U1 > .RF_P"
        to=".B1 > .pin4"
      />
      <trace
        from=".U1 > .RF_N"
        to=".B1 > .pin3"
      />
      <trace
        from=".B1 > .pin1"
        to=".C5 > .pin1"
      />
      <trace
        from=".C5 > .pin1"
        to=".R9 > .pin2"
      />
      <trace
        from=".R9 > .pin1"
        to=".A2 > .pin1"
      />
    </group>
    <GroundTerminal
      name="GND_B1"
      connection=".B1 > .pin2"
      schX={6.25}
      schY={-0.3}
    />
    <GroundTerminal
      name="GND_A2"
      connection=".A2 > .pin2"
      schX={6.9}
      schY={1.7}
      anchorSide="right"
    />
    <GroundTerminal
      name="GND_C5"
      connection=".C5 > .pin2"
      schX={8.2}
      schY={-0.85}
    />

    {/* RESET_N, RBIAS, DCOUPL, and 32 MHz crystal networks. */}
    <resistor
      name="R201"
      resistance="2.2k"
      footprint="0402"
      schX={-5.5}
      schY={-2.775}
      pcbX={-5}
      pcbY={-2.5}
    />
    <capacitor
      name="C201"
      capacitance="1nF"
      footprint="0402"
      schOrientation="vertical"
      schX={-5.2}
      schY={-4.1}
      pcbX={-5}
      pcbY={-5}
      pcbRotation={90}
    />
    <group schMaxTraceDistance="20mm">
      <trace
        from=".R201 > .pin2"
        to=".U1 > .RESET_N"
      />
      <trace
        from=".R201 > .pin2"
        to=".C201 > .pin1"
        schematicRouteHints={[{ x: -5.2, y: -3.72 }]}
      />
    </group>
    <netlabel
      net="RESET_N"
      connectsTo=".R201 > .pin1"
      schX={-6.7}
      schY={-2.775}
      anchorSide="right"
    />
    <GroundTerminal
      name="GND_C201"
      connection=".C201 > .pin2"
      schX={-5.2}
      schY={-4.95}
    />

    <inductor
      name="L301"
      inductance="6.8nH"
      footprint="0402"
      schOrientation="vertical"
      schX={3.3}
      schY={-3.4}
      pcbX={7}
      pcbY={-6.5}
      pcbRotation={90}
    />
    <resistor
      name="R301"
      resistance="56k"
      footprint="0402"
      schOrientation="vertical"
      schX={3.3}
      schY={-4.9}
      pcbX={9.5}
      pcbY={-6.5}
      pcbRotation={90}
    />
    <group schMaxTraceDistance="20mm">
      <trace
        from=".U1 > .RBIAS"
        to=".L301 > .pin1"
        schematicRouteHints={[{ x: 3.3, y: -1.9 }]}
      />
      <trace
        from=".L301 > .pin2"
        to=".R301 > .pin1"
      />
    </group>
    <GroundTerminal
      name="GND_R301"
      connection=".R301 > .pin2"
      schX={3.3}
      schY={-5.75}
    />

    <capacitor
      name="C401"
      capacitance="1uF"
      footprint="0402"
      schOrientation="vertical"
      schX={4.9}
      schY={-3.2}
      pcbX={7}
      pcbY={-8.5}
      pcbRotation={90}
    />
    <group schMaxTraceDistance="20mm">
      <trace
        from=".U1 > .DCOUPL"
        to=".C401 > .pin1"
        schematicRouteHints={[{ x: 4.9, y: -1.7 }]}
      />
    </group>
    <GroundTerminal
      name="GND_C401"
      connection=".C401 > .pin2"
      schX={4.9}
      schY={-4.05}
    />

    <crystal
      name="X1"
      manufacturerPartNumber="X_32.000/10/20/60/10"
      frequency="32MHz"
      loadCapacitance="12pF"
      pinVariant="four_pin"
      footprint="qfn4"
      schX={7.4}
      schY={-3.1}
      pcbX={0}
      pcbY={-6}
    />
    <capacitor
      name="C231"
      capacitance="12pF"
      footprint="0402"
      schOrientation="vertical"
      schX={6.2}
      schY={-4.6}
      pcbX={-3}
      pcbY={-8.5}
      pcbRotation={90}
    />
    <capacitor
      name="C221"
      capacitance="12pF"
      footprint="0402"
      schOrientation="vertical"
      schX={8.6}
      schY={-4.6}
      pcbX={3}
      pcbY={-8.5}
      pcbRotation={90}
    />
    <group schMaxTraceDistance="20mm">
      <trace
        from=".U1 > .XOSC_Q1"
        to=".X1 > .pin1"
        schematicRouteHints={[
          { x: 6.86, y: -0.95 },
          { x: 6.86, y: -3.11 },
        ]}
      />
      <trace
        from=".U1 > .XOSC_Q2"
        to=".X1 > .pin3"
        schematicRouteHints={[
          { x: 8.9, y: -1.15 },
          { x: 8.9, y: -3.11 },
        ]}
      />
      <trace
        from=".X1 > .pin1"
        to=".C231 > .pin1"
        schematicRouteHints={[
          { x: 5.9, y: -3.11 },
          { x: 5.9, y: -4.22 },
          { x: 6.2, y: -4.22 },
        ]}
      />
      <trace
        from=".X1 > .pin3"
        to=".C221 > .pin1"
        schematicRouteHints={[
          { x: 8.9, y: -3.11 },
          { x: 8.9, y: -4.22 },
          { x: 8.6, y: -4.22 },
        ]}
      />
    </group>
    <GroundTerminal
      name="GND_X1_1"
      connection=".X1 > .pin2"
      schX={7.4}
      schY={-4.35}
    />
    <GroundTerminal
      name="GND_X1_2"
      connection=".X1 > .pin4"
      schX={8.2}
      schY={-2.39}
      anchorSide="left"
    />
    <GroundTerminal
      name="GND_C231"
      connection=".C231 > .pin2"
      schX={6.2}
      schY={-5.45}
    />
    <GroundTerminal
      name="GND_C221"
      connection=".C221 > .pin2"
      schX={8.6}
      schY={-5.45}
    />

    <schematictext
      text="CC2540 USB DONGLE RF-PART — TIDC-CC2540-BLE-USB"
      schX={0}
      schY={8.9}
      fontSize={0.28}
    />
  </subcircuit>
);

export default WirelessConnectivity_CC2540_TIDCCC2540BLEUSB;
