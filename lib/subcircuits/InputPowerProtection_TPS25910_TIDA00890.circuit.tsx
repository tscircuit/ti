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
  <subcircuit {...props}>
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
        EN_NOT: "net.ID_3220",
        FLT_NOT: "net.FLT_INT",
        OUT1: "net.MICRO_AB_VBUS_OUT",
        OUT2: "net.MICRO_AB_VBUS_OUT",
        OUT3: "net.MICRO_AB_VBUS_OUT",
        GND1: "net.GND",
        GND2: "net.GND",
        GND3: "net.GND",
        GND4: "net.GND",
        GND5: "net.GND",
        GND6: "net.GND",
        PWPD: "net.GND",
        IN1: "net.V5_COM",
        IN2: "net.V5_COM",
        IN3: "net.V5_COM",
        GATE: "net.TPS25910_GATE1",
        ILIM: "net.TPS25910_ILIM",
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
      schX={-2.65}
      schY={0}
      connections={{
        drain: "net.TYPEC_VBUS",
        source: "net.MICRO_AB_VBUS_OUT",
        gate: "net.TPS25910_GATE1",
      }}
    />

    <resistor
      name="R25"
      resistance="1Mohm"
      schX={-6.1}
      schY={0.4}
      schRotation={90}
      connections={{ pin1: "net.TYPEC_VBUS", pin2: "net.GND" }}
    />
    <diode
      name="D6"
      manufacturerPartNumber="ESD5Z6.0T1G"
      variant="zener"
      schX={-5.35}
      schY={0.4}
      schRotation={90}
      connections={{ anode: "net.GND", cathode: "net.TYPEC_VBUS" }}
    />

    <resistor
      name="R23"
      resistance="200kohm"
      schX={0.6}
      schY={3}
      schRotation={90}
      connections={{ pin1: "net.V5_COM", pin2: "net.ID_3220" }}
    />
    <resistor
      name="R24"
      resistance="10kohm"
      schX={1.8}
      schY={3}
      schRotation={90}
      connections={{ pin1: "net.V5_COM", pin2: "net.FLT_INT" }}
    />
    <resistor
      name="R34"
      resistance="0ohm"
      doNotPlace
      schX={-0.6}
      schY={1.15}
      connections={{ pin1: "net.VCONN_FAULT_NOT", pin2: "net.FLT_INT" }}
    />
    <schematictext text="DNP" schX={-0.6} schY={1.65} fontSize={0.18} />

    <resistor
      name="R26"
      resistance="47kohm"
      schX={5.4}
      schY={-1.6}
      schRotation={90}
      connections={{ pin1: "net.TPS25910_ILIM", pin2: "net.GND" }}
    />
    <capacitor
      name="C11"
      capacitance="47nF"
      schX={6.8}
      schY={-1.6}
      schOrientation="vertical"
      connections={{ pin1: "net.TPS25910_GATE1", pin2: "net.GND" }}
    />
    <capacitor
      name="C10"
      capacitance="47uF"
      schX={8.2}
      schY={-1.6}
      schOrientation="vertical"
      connections={{ pin1: "net.V5_COM", pin2: "net.GND" }}
    />
  </subcircuit>
);

export default InputPowerProtection_TPS25910_TIDA00890;
