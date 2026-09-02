import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TPS25910RSA } from "../chips/TPS25910RSA.circuit.tsx";
import {
  CSD17313Q2_FOOTPRINT,
  ESD5Z6_0T1G_FOOTPRINT,
} from "../chips/jlcpcb-footprints.tsx";

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
  <subcircuit routingDisabled schMaxTraceDistance="3.6mm" {...props}>
    <breakoutpoint connection=".R34 > .pin1" pcbX={7.2} pcbY={4} />

    <TPS25910RSA name="U7" schX={3.15} schY={0.03} pcbX={0} pcbY={0} />

    <mosfet
      name="Q1"
      manufacturerPartNumber="CSD17313Q2"
      supplierPartNumbers={{ jlcpcb: ["C2863837"] }}
      footprint={CSD17313Q2_FOOTPRINT}
      channelType="n"
      mosfetMode="enhancement"
      symbolDrainSide="top"
      symbolSourceSide="bottom"
      symbolGateSide="left"
      schX={-1.4}
      schY={0.82}
      pcbX={-4.7}
      pcbY={0.7}
    />

    <resistor
      name="R25"
      resistance="1Mohm"
      footprint="0402"
      schX={-6.2}
      schY={0.87}
      schRotation={270}
      pcbX={-7.1}
      pcbY={2.6}
    />
    <diode
      name="D6"
      manufacturerPartNumber="ESD5Z6.0T1G"
      supplierPartNumbers={{ jlcpcb: ["C82323"] }}
      footprint={ESD5Z6_0T1G_FOOTPRINT}
      zener
      pinLabels={{
        pin1: ["cathode", "neg"],
        pin2: ["anode", "pos"],
      }}
      schX={-4.6}
      schY={0.87}
      schRotation={90}
      pcbX={-7.1}
      pcbY={0.7}
    />

    <resistor
      name="R23"
      resistance="200kohm"
      footprint="0402"
      schX={0.35}
      schY={2.5}
      schRotation={90}
      pcbX={-2.5}
      pcbY={4}
    />
    <resistor
      name="R24"
      resistance="10kohm"
      footprint="0402"
      schX={1.55}
      schY={2.5}
      schRotation={90}
      pcbX={0}
      pcbY={4}
    />
    <resistor
      name="R34"
      resistance="0ohm"
      footprint="0402"
      doNotPlace
      schX={1.15}
      schY={0.65}
      pcbX={2.5}
      pcbY={4}
    />

    <resistor
      name="R26"
      resistance="47kohm"
      footprint="0402"
      schX={5.45}
      schY={-0.97}
      schRotation={270}
      pcbX={4.2}
      pcbY={-3.5}
    />
    <capacitor
      name="C11"
      capacitance="47nF"
      footprint="0402"
      schX={6.45}
      schY={-0.17}
      schOrientation="vertical"
      pcbX={1.4}
      pcbY={-3.8}
    />
    <capacitor
      name="C10"
      capacitance="47uF"
      footprint="1210"
      schX={7.75}
      schY={0.4}
      schOrientation="vertical"
      pcbX={5}
      pcbY={0.2}
    />

    {/* Type-C VBUS input rail, discharge resistor, and ESD clamp. */}
    <>
      <trace
        name="VBUS_IN_R25_pin1"
        from="R25.pin1"
        to="net.VBUS_IN"
        schDisplayLabel="VBUS_IN"
      />
      <trace
        name="VBUS_IN_D6_pin1"
        from="D6.pin1"
        to="net.VBUS_IN"
        schDisplayLabel="VBUS_IN"
      />
      <trace
        name="VBUS_IN_Q1_drain"
        from="Q1.drain"
        to="net.VBUS_IN"
        schDisplayLabel="VBUS_IN"
      />
    </>
    <trace
      name="GND_R25_pin2"
      from="R25.pin2"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="GND_D6_pin2"
      from="D6.pin2"
      to="net.GND"
      schDisplayLabel="GND"
    />

    {/* Q1 gate and protected VBUS output follow the reference left-to-right. */}
    <trace from="Q1.gate" to="U7.GATE" />
    <trace from="Q1.source" to="U7.OUT3" />
    <trace from="U7.OUT1" to="U7.OUT2" />
    <trace from="U7.OUT2" to="U7.OUT3" />

    {/* Pull-ups and logic nets use TI's displayed names. */}
    <>
      <trace
        name="V5_COM_R23_pin2"
        from="R23.pin2"
        to="net.V5_COM"
        schDisplayLabel="V5_COM"
      />
      <trace
        name="V5_COM_R24_pin2"
        from="R24.pin2"
        to="net.V5_COM"
        schDisplayLabel="V5_COM"
      />
    </>
    <>
      <trace
        name="USB_ID_R23_pin1"
        from="R23.pin1"
        to="net.USB_ID"
        schDisplayLabel="USB_ID"
      />
      <trace
        name="USB_ID_U7_EN_NOT"
        from="U7.EN_NOT"
        to="net.USB_ID"
        schDisplayLabel="USB_ID"
      />
    </>
    <trace from="R24.pin1" to="U7.FLT_NOT" />
    <trace from="R24.pin1" to="R34.pin2" />
    <trace from="R34.pin1" to="net.VCONN_FLT" schDisplayLabel="VCONN_FLT" />

    {/* U7 input, gate, current-limit, and local ground rails. */}
    <>
      <trace
        name="V5_COM_U7_IN1"
        from="U7.IN1"
        to="net.V5_COM"
        schDisplayLabel="V5_COM"
      />
      <trace
        name="V5_COM_U7_IN2"
        from="U7.IN2"
        to="net.V5_COM"
        schDisplayLabel="V5_COM"
      />
      <trace
        name="V5_COM_U7_IN3"
        from="U7.IN3"
        to="net.V5_COM"
        schDisplayLabel="V5_COM"
      />
      <trace
        name="V5_COM_C10_pin1"
        from="C10.pin1"
        to="net.V5_COM"
        schDisplayLabel="V5_COM"
      />
    </>
    <trace from="U7.GATE" to="C11.pin1" />
    <trace from="U7.ILIM" to="R26.pin1" />

    <trace from="U7.GND1" to="U7.GND2" />
    <trace from="U7.GND2" to="U7.GND3" />
    <trace from="U7.GND3" to="R26.pin2" />
    <trace from="R26.pin2" to="C11.pin2" />
    <trace from="C11.pin2" to="C10.pin2" />
    <trace
      name="GND_R26_pin2"
      from="R26.pin2"
      to="net.GND"
      schDisplayLabel="GND"
    />

    <trace from="U7.GND4" to="U7.GND5" />
    <trace from="U7.GND5" to="U7.GND6" />
    <trace from="U7.PWPD" to="R26.pin2" />
    <trace
      name="GND_U7_GND5"
      from="U7.GND5"
      to="net.GND"
      schDisplayLabel="GND"
    />
  </subcircuit>
);

export default InputPowerProtection_TPS25910_TIDA00890;
