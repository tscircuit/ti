import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

const TPS25910RSA_PIN_LABELS = {
  pin1: ["IN1"],
  pin2: ["IN2"],
  pin3: ["IN3"],
  pin4: ["GATE"],
  pin5: ["GND1"],
  pin6: ["GND2"],
  pin7: ["ILIM"],
  pin8: ["GND3"],
  pin9: ["GND4"],
  pin10: ["OUT1"],
  pin11: ["OUT2"],
  pin12: ["OUT3"],
  pin13: ["GND5"],
  pin14: ["GND6"],
  pin15: ["FLT_NOT"],
  pin16: ["EN_NOT"],
  pin17: ["PWPD"],
} as const;

/**
 * TIDA-00890 sheet-3 VBUS input-protection stage.
 *
 * Includes the TPS25910 eFuse, CSD17313Q2 external FET, VBUS clamp and
 * discharge, fault/enable pull-ups, current limit, slew capacitor, and input
 * bulk capacitor exactly as shown in TI's reference.
 * @see https://www.ti.com/tool/TIDA-00890
 */
export const InputPowerProtection_TPS25910_TIDA00890 = (
  props: SubcircuitProps,
) => (
  <subcircuit routingDisabled schMaxTraceDistance="2mm" {...props}>
    <chip
      name="U7"
      manufacturerPartNumber="TPS25910RSA"
      pinLabels={TPS25910RSA_PIN_LABELS}
      showPinAliases={false}
      schX={2.8}
      schY={0}
      schWidth={2}
      schHeight={1.8}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "EN_NOT",
            "FLT_NOT",
            "OUT1",
            "OUT2",
            "OUT3",
            "GND6",
            "GND5",
            "GND4",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["IN1", "IN2", "IN3", "GATE", "GND1", "GND2", "GND3", "ILIM"],
        },
        bottomSide: { direction: "left-to-right", pins: ["PWPD"] },
      }}
      connections={{
        OUT1: "U7.OUT2",
        OUT2: "U7.OUT3",
        GND1: "U7.GND2",
        GND2: "U7.GND3",
        GND3: "net.GND",
        GND4: "U7.GND5",
        GND5: "U7.GND6",
        GND6: ["U7.PWPD", "net.GND"],
        IN1: "U7.IN2",
        IN2: "U7.IN3",
        IN3: "net.V5_COM",
        GATE: ["C11.pin1", "net.TPS25910_GATE1"],
        ILIM: "R26.pin1",
      }}
    />

    <mosfet
      name="Q1"
      manufacturerPartNumber="CSD17313Q2"
      channelType="n"
      mosfetMode="enhancement"
      symbolDrainSide="top"
      symbolSourceSide="bottom"
      symbolGateSide="left"
      schX={-2.5}
      schY={0}
      connections={{
        drain: ["D6.cathode", "net.TYPEC_VBUS"],
        source: ["U7.OUT3", "net.MICRO_AB_VBUS_OUT"],
        gate: "net.TPS25910_GATE1",
      }}
    />

    <resistor
      name="R25"
      resistance="1Mohm"
      schX={-6.4}
      schY={0.4}
      schRotation={90}
      connections={{ pin1: "D6.cathode", pin2: "D6.anode" }}
    />
    <diode
      name="D6"
      manufacturerPartNumber="ESD5Z6.0T1G"
      variant="zener"
      schX={-5.2}
      schY={0.4}
      schRotation={90}
      connections={{ anode: "net.GND" }}
    />

    <resistor
      name="R23"
      resistance="200kohm"
      schX={0.55}
      schY={1.65}
      schRotation={90}
      connections={{ pin1: "U7.EN_NOT", pin2: "R24.pin2" }}
    />
    <resistor
      name="R24"
      resistance="10kohm"
      schX={1.55}
      schY={1.65}
      schRotation={90}
      connections={{ pin1: "U7.FLT_NOT", pin2: "net.V5_COM" }}
    />
    <resistor
      name="R34"
      resistance="0ohm"
      doNotPlace
      schX={0.35}
      schY={0.55}
      connections={{
        pin1: "net.VCONN_FAULT_NOT",
        pin2: "R24.pin1",
      }}
    />

    <resistor
      name="R26"
      resistance="47kohm"
      schX={4.9}
      schY={-1.65}
      schRotation={90}
      connections={{ pin2: "C11.pin2" }}
    />
    <capacitor
      name="C11"
      capacitance="47nF"
      schX={6.15}
      schY={-1.65}
      schOrientation="vertical"
      connections={{ pin2: ["C10.pin2", "net.GND"] }}
    />
    <capacitor
      name="C10"
      capacitance="47uF"
      schX={7.4}
      schY={-1.65}
      schOrientation="vertical"
      connections={{ pin1: "net.V5_COM" }}
    />
  </subcircuit>
);

export default InputPowerProtection_TPS25910_TIDA00890;
