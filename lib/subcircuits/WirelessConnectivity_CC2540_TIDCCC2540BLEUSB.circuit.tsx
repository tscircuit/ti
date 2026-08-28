import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { CC2540F256RHAR } from "../chips/CC2540F256RHAR.circuit.tsx";

const groundPinLabels = {
  pin1: "C101_GND",
  pin2: "C391_GND",
  pin3: "C211_GND",
  pin4: "C241_GND",
  pin5: "C271_GND",
  pin6: "C272_GND",
  pin7: "C311_GND",
  pin8: "C4_GND",
  pin9: "DGND_USB",
  pin10: "EPAD_GND",
  pin11: "BALUN_GND",
  pin12: "ANTENNA_GND",
  pin13: "C5_GND",
  pin14: "C201_GND",
  pin15: "R301_GND",
  pin16: "C401_GND",
  pin17: "X1_GND_1",
  pin18: "X1_GND_2",
  pin19: "C231_GND",
  pin20: "C221_GND",
} as const;

interface GroundTerminalProps {
  name: string;
  pin: keyof typeof groundPinLabels;
  connection: string;
  schX: number;
  schY: number;
}

/** One schematic ground unit backed by an internally common hidden terminal. */
const GroundTerminal = ({
  name,
  pin,
  connection,
  schX,
  schY,
}: GroundTerminalProps) => (
  <>
    <schematicsymbol
      name={name}
      displayName="GND"
      chipRef=".GNDSTAR"
      symbolName="ground_down"
      schX={schX}
      schY={schY}
      connections={{ "1": `.GNDSTAR > .${pin}` }}
    />
    <trace from={connection} to={`.GNDSTAR > .${pin}`} schDisplayLabel=" " />
  </>
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
    routingDisabled
    schMaxTraceDistance="20mm"
    schTraceAutoLabelEnabled={false}
    {...props}
  >
    <net name="GND" isGroundNet />
    <net name="VCC" isPowerNet />
    <net name="V3P3_IN" isPowerNet />
    <net name="PA_DP" />
    <net name="PA_DM" />
    <net name="RESET_N" />

    <chip
      name="GNDSTAR"
      noSchematicRepresentation
      pinLabels={groundPinLabels}
      internallyConnectedPins={[Object.keys(groundPinLabels)]}
      connections={{ pin1: "net.GND" }}
    />

    <CC2540F256RHAR
      name="U1"
      schX={0}
      schY={0}
      connections={{
        USB_P: "net.PA_DP",
        USB_N: "net.PA_DM",
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

    {/* 3.3 V input and the VCC rail from the released schematic. */}
    <inductor
      name="L1"
      manufacturerPartNumber="BLM15HG102SN1D"
      inductance="1uH"
      footprint="0402"
      schX={11.7}
      schY={8.1}
    />
    <capacitor
      name="C4"
      capacitance="2.2uF"
      footprint="0402"
      schOrientation="vertical"
      schX={9.8}
      schY={6.75}
    />

    {/* Decoupling capacitors, in the same left-to-right order as sheet 3. */}
    <capacitor
      name="C101"
      capacitance="100nF"
      footprint="0402"
      schOrientation="vertical"
      schX={-8.5}
      schY={7.1}
    />
    <capacitor
      name="C391"
      capacitance="1uF"
      footprint="0402"
      schOrientation="vertical"
      schX={-6.7}
      schY={7.1}
    />
    <capacitor
      name="C211"
      capacitance="100nF"
      footprint="0402"
      schOrientation="vertical"
      schX={-4.9}
      schY={7.1}
    />
    <capacitor
      name="C241"
      capacitance="100nF"
      footprint="0402"
      schOrientation="vertical"
      schX={3.4}
      schY={7.1}
    />
    <capacitor
      name="C271"
      capacitance="100nF"
      footprint="0402"
      schOrientation="vertical"
      schX={5.2}
      schY={7.1}
    />
    <capacitor
      name="C272"
      capacitance="220pF"
      footprint="0402"
      schOrientation="vertical"
      schX={7}
      schY={7.1}
    />
    <capacitor
      name="C311"
      capacitance="100nF"
      footprint="0402"
      schOrientation="vertical"
      schX={8.6}
      schY={7.1}
    />

    <group schMaxTraceDistance="20mm">
      <trace
        from=".C101 > .pin1"
        to=".C391 > .pin1"
        schematicRouteHints={[{ x: -7.6, y: 7.6 }]}
      />
      <trace
        from=".C391 > .pin1"
        to=".C211 > .pin1"
        schematicRouteHints={[{ x: -5.8, y: 7.6 }]}
      />
      <trace
        from=".C211 > .pin1"
        to=".C241 > .pin1"
        schematicRouteHints={[{ x: -0.75, y: 7.6 }]}
      />
      <trace
        from=".C241 > .pin1"
        to=".C271 > .pin1"
        schematicRouteHints={[{ x: 4.3, y: 7.6 }]}
      />
      <trace
        from=".C271 > .pin1"
        to=".C272 > .pin1"
        schematicRouteHints={[{ x: 6.1, y: 7.6 }]}
      />
      <trace
        from=".C272 > .pin1"
        to=".C311 > .pin1"
        schematicRouteHints={[{ x: 7.8, y: 7.6 }]}
      />
      <trace
        from=".C311 > .pin1"
        to=".C4 > .pin1"
        schematicRouteHints={[
          { x: 8.6, y: 7.9 },
          { x: 9.8, y: 7.9 },
        ]}
      />
      <trace
        from=".C4 > .pin1"
        to=".L1 > .pin1"
        schematicRouteHints={[
          { x: 9.8, y: 8.1 },
          { x: 10.75, y: 8.1 },
        ]}
      />
    </group>
    <netlabel net="VCC" connection="C4.pin1" anchorSide="bottom" />
    <netlabel net="V3P3_IN" connection="L1.pin2" anchorSide="bottom" />

    <GroundTerminal
      name="GND_C101"
      pin="pin1"
      connection=".C101 > .pin2"
      schX={-8.5}
      schY={5.9}
    />
    <GroundTerminal
      name="GND_C391"
      pin="pin2"
      connection=".C391 > .pin2"
      schX={-6.7}
      schY={5.9}
    />
    <GroundTerminal
      name="GND_C211"
      pin="pin3"
      connection=".C211 > .pin2"
      schX={-4.9}
      schY={5.9}
    />
    <GroundTerminal
      name="GND_C241"
      pin="pin4"
      connection=".C241 > .pin2"
      schX={3.4}
      schY={5.9}
    />
    <GroundTerminal
      name="GND_C271"
      pin="pin5"
      connection=".C271 > .pin2"
      schX={5.2}
      schY={5.9}
    />
    <GroundTerminal
      name="GND_C272"
      pin="pin6"
      connection=".C272 > .pin2"
      schX={7}
      schY={5.9}
    />
    <GroundTerminal
      name="GND_C311"
      pin="pin7"
      connection=".C311 > .pin2"
      schX={8.6}
      schY={5.9}
    />
    <GroundTerminal
      name="GND_C4"
      pin="pin8"
      connection=".C4 > .pin2"
      schX={9.8}
      schY={5.5}
    />

    <group schMaxTraceDistance="20mm">
      <trace
        from=".U1 > .DVDD2"
        to=".C101 > .pin1"
        schematicRouteHints={[
          { x: -3.5, y: 3.25 },
          { x: -3.5, y: 7.6 },
        ]}
      />
      <trace
        from=".U1 > .DVDD1"
        to=".C391 > .pin1"
        schematicRouteHints={[
          { x: -3.9, y: 3 },
          { x: -3.9, y: 7.6 },
        ]}
      />
      <trace
        from=".U1 > .DVDD_USB"
        to=".C211 > .pin1"
        schematicRouteHints={[
          { x: -4.3, y: 2 },
          { x: -4.3, y: 7.6 },
        ]}
      />
      <trace
        from=".U1 > .AVDD5"
        to=".C211 > .pin1"
        schematicRouteHints={[
          { x: 3.2, y: 3.2 },
          { x: 3.2, y: 7.6 },
        ]}
      />
      <trace
        from=".U1 > .AVDD3"
        to=".C241 > .pin1"
        schematicRouteHints={[
          { x: 3.6, y: 2.9 },
          { x: 3.6, y: 7.6 },
        ]}
      />
      <trace
        from=".U1 > .AVDD2"
        to=".C271 > .pin1"
        schematicRouteHints={[
          { x: 4, y: 2.6 },
          { x: 4, y: 7.6 },
        ]}
      />
      <trace
        from=".U1 > .AVDD1"
        to=".C272 > .pin1"
        schematicRouteHints={[
          { x: 4.4, y: 2.3 },
          { x: 4.4, y: 7.6 },
        ]}
      />
      <trace
        from=".U1 > .AVDD4"
        to=".C272 > .pin1"
        schematicRouteHints={[
          { x: 4.8, y: 2 },
          { x: 4.8, y: 7.6 },
        ]}
      />
      <trace
        from=".U1 > .AVDD6"
        to=".C311 > .pin1"
        schematicRouteHints={[
          { x: 5.6, y: 1.7 },
          { x: 5.6, y: 7.6 },
        ]}
      />
    </group>
    <GroundTerminal
      name="GND_DGND_USB"
      pin="pin9"
      connection=".U1 > .DGND_USB"
      schX={-3.5}
      schY={2.15}
    />
    <GroundTerminal
      name="GND_U1"
      pin="pin10"
      connection=".U1 > .GND"
      schX={3.35}
      schY={-3.25}
    />

    {/* Differential RF output, balun, matching capacitor, and PCB antenna. */}
    <chip
      name="B1"
      manufacturerPartNumber="2450BM15A0002"
      footprint="qfn6"
      pinLabels={{
        pin1: "ANT",
        pin2: ["GND", "GND_2_5_6"],
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
      schWidth="2mm"
      schHeight="2.2mm"
      schX={7.2}
      schY={1.7}
    />
    <chip
      name="A2"
      manufacturerPartNumber="ANTENNA_IIFA_1_LEFT"
      footprint="pinrow2"
      pinLabels={{ pin1: "FEED", pin2: "GND" }}
      schPinArrangement={{
        bottomSide: { direction: "left-to-right", pins: [2, 1] },
      }}
      schWidth="3.4mm"
      schHeight="1mm"
      schX={12.4}
      schY={5.7}
    />
    <resistor
      name="R9"
      resistance="0ohm"
      footprint="0402"
      schOrientation="vertical"
      schX={12.9}
      schY={3.8}
    />
    <capacitor
      name="C5"
      capacitance="0.5pF"
      footprint="0402"
      schOrientation="vertical"
      schX={12.9}
      schY={1.25}
    />
    <group schMaxTraceDistance="20mm">
      <trace
        from=".U1 > .RF_P"
        to=".B1 > .RF_P"
        schematicRouteHints={[{ x: 4.8, y: 1.65 }]}
      />
      <trace
        from=".U1 > .RF_N"
        to=".B1 > .RF_N"
        schematicRouteHints={[{ x: 4.8, y: 1.25 }]}
      />
      <trace
        from=".B1 > .ANT"
        to=".R9 > .pin2"
        schematicRouteHints={[
          { x: 10, y: 1.7 },
          { x: 12.9, y: 1.7 },
        ]}
      />
      <trace
        from=".R9 > .pin1"
        to=".A2 > .FEED"
        schematicRouteHints={[{ x: 12.9, y: 4.8 }]}
      />
      <trace
        from=".B1 > .ANT"
        to=".C5 > .pin1"
        schematicRouteHints={[{ x: 10, y: 1.7 }]}
      />
    </group>
    <GroundTerminal
      name="GND_B1"
      pin="pin11"
      connection=".B1 > .GND"
      schX={7.2}
      schY={0}
    />
    <GroundTerminal
      name="GND_A2"
      pin="pin12"
      connection=".A2 > .GND"
      schX={11.9}
      schY={4.45}
    />
    <GroundTerminal
      name="GND_C5"
      pin="pin13"
      connection=".C5 > .pin2"
      schX={12.9}
      schY={0.1}
    />

    {/* RESET_N, RBIAS, DCOUPL, and 32 MHz crystal networks. */}
    <resistor
      name="R201"
      resistance="2.2k"
      footprint="0402"
      schX={-7.1}
      schY={-5.2}
      connections={{ pin1: "net.RESET_N" }}
    />
    <capacitor
      name="C201"
      capacitance="1nF"
      footprint="0402"
      schOrientation="vertical"
      schX={-5}
      schY={-6.6}
    />
    <group schMaxTraceDistance="20mm">
      <trace
        from=".R201 > .pin2"
        to=".U1 > .RESET_N"
        schematicRouteHints={[{ x: -4.5, y: -5.2 }]}
      />
      <trace
        from=".R201 > .pin2"
        to=".C201 > .pin1"
        schematicRouteHints={[{ x: -5, y: -5.2 }]}
      />
    </group>
    <GroundTerminal
      name="GND_C201"
      pin="pin14"
      connection=".C201 > .pin2"
      schX={-5}
      schY={-7.75}
    />

    <inductor
      name="L301"
      inductance="6.8nH"
      footprint="0402"
      schOrientation="vertical"
      schX={3.2}
      schY={-6.4}
    />
    <resistor
      name="R301"
      resistance="56k"
      footprint="0402"
      schOrientation="vertical"
      schX={3.2}
      schY={-8.7}
    />
    <group schMaxTraceDistance="20mm">
      <trace
        from=".U1 > .RBIAS"
        to=".L301 > .pin1"
        schematicRouteHints={[{ x: 3.2, y: -3.7 }]}
      />
      <trace
        from=".L301 > .pin2"
        to=".R301 > .pin1"
        schematicRouteHints={[{ x: 3.2, y: -7.7 }]}
      />
    </group>
    <GroundTerminal
      name="GND_R301"
      pin="pin15"
      connection=".R301 > .pin2"
      schX={3.2}
      schY={-9.85}
    />

    <capacitor
      name="C401"
      capacitance="1uF"
      footprint="0402"
      schOrientation="vertical"
      schX={4.2}
      schY={-7.2}
    />
    <group schMaxTraceDistance="20mm">
      <trace
        from=".U1 > .DCOUPL"
        to=".C401 > .pin1"
        schematicRouteHints={[{ x: 4.2, y: -3.3 }]}
      />
    </group>
    <GroundTerminal
      name="GND_C401"
      pin="pin16"
      connection=".C401 > .pin2"
      schX={4.2}
      schY={-8.35}
    />

    <crystal
      name="X1"
      manufacturerPartNumber="X_32.000/10/20/60/10"
      frequency="32MHz"
      loadCapacitance="12pF"
      pinVariant="four_pin"
      footprint="qfn4"
      schX={6.8}
      schY={-6.5}
    />
    <capacitor
      name="C231"
      capacitance="12pF"
      footprint="0402"
      schOrientation="vertical"
      schX={5.5}
      schY={-8.4}
    />
    <capacitor
      name="C221"
      capacitance="12pF"
      footprint="0402"
      schOrientation="vertical"
      schX={8.1}
      schY={-8.4}
    />
    <group schMaxTraceDistance="20mm">
      <trace
        from=".U1 > .XOSC_Q1"
        to=".X1 > .pin1"
        schematicRouteHints={[
          { x: 5.5, y: -2.5 },
          { x: 5.5, y: -6.5 },
        ]}
      />
      <trace
        from=".U1 > .XOSC_Q2"
        to=".X1 > .pin3"
        schematicRouteHints={[
          { x: 8.1, y: -2.8 },
          { x: 8.1, y: -6.5 },
        ]}
      />
      <trace
        from=".X1 > .pin1"
        to=".C231 > .pin1"
        schematicRouteHints={[{ x: 5.5, y: -6.5 }]}
      />
      <trace
        from=".X1 > .pin3"
        to=".C221 > .pin1"
        schematicRouteHints={[{ x: 8.1, y: -6.5 }]}
      />
    </group>
    <GroundTerminal
      name="GND_X1_1"
      pin="pin17"
      connection=".X1 > .pin2"
      schX={6.4}
      schY={-7.6}
    />
    <GroundTerminal
      name="GND_X1_2"
      pin="pin18"
      connection=".X1 > .pin4"
      schX={7.2}
      schY={-7.6}
    />
    <GroundTerminal
      name="GND_C231"
      pin="pin19"
      connection=".C231 > .pin2"
      schX={5.5}
      schY={-9.55}
    />
    <GroundTerminal
      name="GND_C221"
      pin="pin20"
      connection=".C221 > .pin2"
      schX={8.1}
      schY={-9.55}
    />

    <schematictext
      text="CC2540 USB DONGLE RF-PART — TIDC-CC2540-BLE-USB"
      schX={0}
      schY={10.1}
      fontSize={0.28}
    />
  </subcircuit>
);

export default WirelessConnectivity_CC2540_TIDCCC2540BLEUSB;
