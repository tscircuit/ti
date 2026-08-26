import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { MSP430G2553IPW0RQ1 } from "../chips/MSP430G2553IPW0RQ1.circuit.tsx";

/**
 * MSP430G2553-Q1 controller for the TIDA-01539 rearview-mirror application.
 *
 * The power and reset support follows the MSP-EXP430G2 target schematic. The
 * application nets follow TIDA-01539 Figure 12, which connects the LaunchPad
 * to the light sensors, DAC and electrochromic-mirror discharge control.
 */
export const Microcontroller_MSP430G2553_TIDA01539 = (
  props: SubcircuitProps,
) => (
  <subcircuit
    routingDisabled
    schMaxTraceDistance="3mm"
    schTraceAutoLabelEnabled={false}
    {...props}
  >
    <net name="V3P3" isPowerNet />
    <net name="GND" isGroundNet />
    <net name="RST_SBWTDIO" />

    <MSP430G2553IPW0RQ1
      name="MSP1"
      schX={0}
      schY={0}
      noConnect={[
        "pin2",
        "pin3",
        "pin4",
        "pin6",
        "pin7",
        "pin8",
        "pin11",
        "pin14",
        "pin15",
        "pin17",
        "pin18",
        "pin19",
      ]}
      connections={{
        DVCC: "net.V3P3",
        DVSS: "net.GND",
        P1_3: "net.OPT_F",
        P2_1: "net.SCL",
        P2_2: "net.SDA",
        P2_4: "net.OPT_B",
        P2_5: "net.DISC",
        RST_NMI_SBWTDIO: "net.RST_SBWTDIO",
      }}
    />

    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0805"
      schX={-6.2}
      schY={2.6}
      schOrientation="vertical"
      connections={{ pin1: "net.V3P3", pin2: "net.GND" }}
    />
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0603"
      schX={-4.9}
      schY={2.6}
      schOrientation="vertical"
      connections={{ pin1: "net.V3P3", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="0.1uF"
      footprint="0402"
      schX={-3.6}
      schY={2.6}
      schOrientation="vertical"
      connections={{ pin1: "net.V3P3", pin2: "net.GND" }}
    />

    <resistor
      name="R7"
      resistance="10kohm"
      footprint="0402"
      schX={-5.6}
      schY={-1.4}
      schOrientation="vertical"
      connections={{ pin1: "net.V3P3", pin2: "net.OPT_F" }}
    />
    <resistor
      name="R5"
      resistance="10kohm"
      footprint="0402"
      schX={-5.6}
      schY={-3.3}
      schOrientation="vertical"
      connections={{ pin1: "net.V3P3", pin2: "net.SCL" }}
    />
    <resistor
      name="R4"
      resistance="10kohm"
      footprint="0402"
      schX={-4.1}
      schY={-3.3}
      schOrientation="vertical"
      connections={{ pin1: "net.V3P3", pin2: "net.SDA" }}
    />
    <resistor
      name="R6"
      resistance="10kohm"
      footprint="0402"
      schX={4}
      schY={-3.3}
      schOrientation="vertical"
      connections={{ pin1: "net.V3P3", pin2: "net.OPT_B" }}
    />

    <resistor
      name="R10"
      resistance="47kohm"
      footprint="0402"
      schX={5}
      schY={1.6}
      schOrientation="vertical"
      connections={{ pin1: "net.V3P3", pin2: "net.RST_SBWTDIO" }}
    />
    <capacitor
      name="C13"
      capacitance="1000pF"
      footprint="0402"
      schX={6.2}
      schY={-0.7}
      schOrientation="vertical"
      connections={{ pin1: "net.RST_SBWTDIO", pin2: "net.GND" }}
    />
    <pushbutton
      name="S2"
      displayName="RESET"
      footprint="smdpushbutton"
      schX={5}
      schY={-1.3}
      connections={{ pin1: "net.RST_SBWTDIO", pin2: "net.GND" }}
    />
  </subcircuit>
);

export default Microcontroller_MSP430G2553_TIDA01539;
