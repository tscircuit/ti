import type { ChipProps, SubcircuitProps } from "@tscircuit/props";
import type { ComponentType } from "react";
import "tscircuit";

import { MSPM0G5117SPMR_PIN_LABELS } from "../chips/MSPM0G5117SPMR.circuit.tsx";

type MSPM0G51x7Chip = ComponentType<
  ChipProps<typeof MSPM0G5117SPMR_PIN_LABELS>
>;

type MSPM0G51x7BasicApplicationProps = SubcircuitProps & {
  Chip: MSPM0G51x7Chip;
};

/** TI data-sheet typical application shared by the pin-compatible PM parts. */
export const MSPM0G51x7BasicApplication = ({
  Chip,
  ...props
}: MSPM0G51x7BasicApplicationProps) => (
  <subcircuit width={32} height={32} schMaxTraceDistance="6mm" {...props}>
    <Chip
      name="U1"
      schX={0}
      schY={0}
      pcbX={0}
      pcbY={0}
      connections={{
        VDD: "net.VDD",
        VSS: "net.GND",
        VCORE: "net.VCORE",
        VUSB33: "net.VDD",
        NRST: "net.NRST",
        ROSC: "net.ROSC",
        I2C0_SDA: "net.I2C0_SDA",
        I2C0_SCL: "net.I2C0_SCL",
        USB_DM: "net.USB_DM",
        USB_DP: "net.USB_DP",
        SWDIO: "net.SWDIO",
        SWCLK: "net.SWCLK",
      }}
    />

    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0805"
      schX={-5.8}
      schY={4.2}
      schOrientation="vertical"
      pcbX={-10}
      pcbY={6.5}
      maxDecouplingTraceLength="6mm"
      connections={{ pin1: "net.VDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0402"
      schX={-4.5}
      schY={4.2}
      schOrientation="vertical"
      pcbX={-10}
      pcbY={3}
      pcbRotation={90}
      maxDecouplingTraceLength="4mm"
      connections={{ pin1: "net.VDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C3"
      capacitance="0.47uF"
      footprint="0402"
      schX={-4.5}
      schY={2.3}
      schOrientation="vertical"
      pcbX={-10}
      pcbY={0}
      pcbRotation={90}
      maxDecouplingTraceLength="4mm"
      connections={{ pin1: "net.VCORE", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="0.1uF"
      footprint="0402"
      schX={-5.8}
      schY={2.3}
      schOrientation="vertical"
      pcbX={-10}
      pcbY={-3}
      pcbRotation={90}
      maxDecouplingTraceLength="4mm"
      connections={{ pin1: "net.VDD", pin2: "net.GND" }}
    />

    <resistor
      name="R1"
      resistance="47k"
      footprint="0402"
      schX={-6}
      schY={0.2}
      schRotation={90}
      pcbX={-10}
      pcbY={-6}
      pcbRotation={90}
      connections={{ pin1: "net.NRST", pin2: "net.VDD" }}
    />
    <capacitor
      name="C5"
      capacitance="10nF"
      footprint="0402"
      schX={-6}
      schY={-1.8}
      schOrientation="vertical"
      pcbX={-10}
      pcbY={-9}
      pcbRotation={90}
      connections={{ pin1: "net.NRST", pin2: "net.GND" }}
    />

    <resistor
      name="R2"
      resistance="100k"
      footprint="0402"
      schX={4.7}
      schY={-2.2}
      schRotation={270}
      pcbX={10}
      pcbY={-6}
      pcbRotation={90}
      connections={{ pin1: "net.ROSC", pin2: "net.GND" }}
    />

    <resistor
      name="R3"
      resistance="4.7k"
      footprint="0402"
      schX={5.2}
      schY={2.2}
      schRotation={90}
      pcbX={10}
      pcbY={5}
      pcbRotation={90}
      connections={{ pin1: "net.I2C0_SDA", pin2: "net.VDD" }}
    />
    <resistor
      name="R4"
      resistance="4.7k"
      footprint="0402"
      schX={6.4}
      schY={2.2}
      schRotation={90}
      pcbX={10}
      pcbY={2}
      pcbRotation={90}
      connections={{ pin1: "net.I2C0_SCL", pin2: "net.VDD" }}
    />

    <connector
      name="J1"
      footprint="pinrow2_p2.54_female"
      schX={5.5}
      schY={-4}
      pcbX={0}
      pcbY={-12}
      pinLabels={{ pin1: ["SWDIO"], pin2: ["SWCLK"] }}
      schWidth={1.6}
      schHeight={1.1}
      schPinStyle={{ pin2: { marginTop: 0.3 } }}
      schPinArrangement={{
        leftSide: { pins: ["pin1", "pin2"], direction: "top-to-bottom" },
      }}
      connections={{ pin1: "net.SWDIO", pin2: "net.SWCLK" }}
    />

    <port
      name="VDD"
      direction="left"
      schX={-8}
      schY={3.8}
      connectsTo="net.VDD"
    />
    <port
      name="GND"
      direction="left"
      schX={-8}
      schY={3.2}
      connectsTo="net.GND"
    />
    <port
      name="NRST"
      direction="left"
      schX={-8}
      schY={-0.5}
      connectsTo="net.NRST"
    />
    <port
      name="I2C0_SDA"
      direction="right"
      schX={8}
      schY={3.2}
      connectsTo="net.I2C0_SDA"
    />
    <port
      name="I2C0_SCL"
      direction="right"
      schX={8}
      schY={2.6}
      connectsTo="net.I2C0_SCL"
    />
    <port
      name="USB_DP"
      direction="right"
      schX={8}
      schY={0.8}
      connectsTo="net.USB_DP"
    />
    <port
      name="USB_DM"
      direction="right"
      schX={8}
      schY={0.2}
      connectsTo="net.USB_DM"
    />
    <port
      name="SWDIO"
      direction="right"
      schX={8}
      schY={-2.4}
      connectsTo="net.SWDIO"
    />
    <port
      name="SWCLK"
      direction="right"
      schX={8}
      schY={-3}
      connectsTo="net.SWCLK"
    />
  </subcircuit>
);
