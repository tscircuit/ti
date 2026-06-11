import { BQ25180 } from "./BQ25180.tsx";

export default () => (
  <board width="36mm" height="28mm">
    <BQ25180
      name="U1"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["IN", "N_INT", "SCL", "SDA"],
        },
        rightSide: { direction: "top-to-bottom", pins: ["SYS", "BAT", "TSMR"] },
        bottomSide: { direction: "left-to-right", pins: ["GND"] },
      }}
      schWidth="3mm"
      schHeight="7mm"
      schPinStyle={{
        IN: {
          marginTop: -1.8,
        },
        N_INT: {
          marginTop: 2.2,
        },
        SCL: {
          marginTop: 0.2,
        },
        SDA: {
          marginTop: 0.2,
        },
        SYS: {
          marginTop: -0.6,
        },
        BAT: {
          marginTop: 2.4,
        },
        TSMR: {
          marginTop: 1.5,
        },
      }}
      schX={0}
      schY={0}
      pcbX={0}
      pcbY={0}
    />
    <chip
      name="VBUS"
      symbol={
        <symbol>
          <schematicpath
            points={[
              { x: -6, y: 2.3 },
              { x: -4.8, y: 2.3 },
              { x: -4.8, y: 2.6 },
              { x: -6, y: 2.6 },
              { x: -6, y: 2.3 },
            ]}
            isFilled={false}
            strokeWidth={0.02}
            dashLength={0.3}
            dashGap={0.15}
          />
          <schematicline
            x1={-4.8}
            y1={2.45}
            x2={-4.5}
            y2={2.45}
            strokeWidth={0.02}
          />
          <port name="VBUS" direction="left" schX={-4.5} schY={2.45} />
          <schematictext
            text="VBUS"
            schX={-5.4}
            schY={2.45}
            color="red"
            fontSize={0.16}
          />
        </symbol>
      }
      connections={{ VBUS: "U1.IN" }}
    />
    <chip
      name="Regulator_Lead"
      symbol={
        <symbol>
          <schematicpath
            points={[
              { x: 6.1, y: 2.1 },
              { x: 4.7, y: 2.1 },
              { x: 4.7, y: 2.8 },
              { x: 6.1, y: 2.8 },
              { x: 6.1, y: 2.1 },
            ]}
            isFilled={false}
            strokeWidth={0.02}
            dashLength={0.3}
            dashGap={0.15}
          />
          <schematicline
            x1={4.7}
            y1={2.45}
            x2={4.3}
            y2={2.45}
            strokeWidth={0.02}
          />
          <port name="pin1" direction="left" schX={4.5} schY={2.45} />
          <schematictext
            text="Regulator_Lead"
            schX={5.4}
            schY={2.45}
            color="red"
            fontSize={0.16}
          />
        </symbol>
      }
      connections={{ pin1: "U1.SYS" }}
    />
    <chip
      name="HOST"
      symbol={
        <symbol>
          <schematicpath
            points={[
              { x: -6, y: 0.5 },
              { x: -4.8, y: 0.5 },
              { x: -4.8, y: -2.8 },
              { x: -6, y: -2.8 },
              { x: -6, y: 0.5 },
            ]}
            isFilled={false}
            strokeWidth={0.02}
            dashLength={0.3}
            dashGap={0.15}
          />
          <schematictext
            text="HOST"
            schX={-5.4}
            schY={-2}
            color="red"
            fontSize={0.16}
          />

          <port
            name="pin1"
            schX={-4.3}
            schY={0.1}
            direction="right"
            schStemLength={0.5}
          />
          <port
            name="pin2"
            schX={-4.3}
            schY={-0.3}
            direction="right"
            schStemLength={0.5}
          />
          <port
            name="pin3"
            schX={-4.3}
            schY={-0.7}
            direction="right"
            schStemLength={0.5}
          />
          <port
            name="pin4"
            schX={-4.3}
            schY={-2.45}
            direction="right"
            schStemLength={0.5}
          />
        </symbol>
      }
      connections={{ pin1: "U1.N_INT", pin2: "U1.SCL", pin3: "U1.SDA" }}
    />
    <chip
      name="NTC"
      symbol={
        <symbol>
          <schematicpath
            points={[
              { x: 7.5, y: -1.3 },
              { x: 5, y: -1.3 },
              { x: 5, y: -4 },
              { x: 7.5, y: -4 },
              { x: 7.5, y: -1.3 },
            ]}
            isFilled={false}
            strokeWidth={0.02}
            dashLength={0.3}
            dashGap={0.15}
          />
        </symbol>
      }
    />
    <capacitor
      name="C_IN"
      capacitance="1uF"
      footprint="0402"
      connections={{ pos: "U1.pin2", neg: "net.GND" }}
      schX={-3.5}
      schRotation={270}
      schY={1.8}
      pcbX={-2}
      pcbY={1.2}
    />

    <capacitor
      name="C_SYS"
      capacitance="10uF"
      footprint="0603"
      connections={{ pos: "U1.SYS", neg: "net.GND" }}
      schRotation={270}
      schX={2.4}
      schY={1.7}
      pcbX={2}
      pcbY={1.2}
    />

    <capacitor
      name="C_BAT"
      capacitance="1uF"
      footprint="0402"
      connections={{ pos: "U1.BAT", neg: "net.GND" }}
      schX={3}
      schRotation={270}
      schY={-0.8}
      pcbX={2}
      pcbY={-1.0}
    />

    <resistor
      name="R_SCL_PU"
      resistance="10k"
      footprint="0402"
      connections={{ pos: "U1.SCL", neg: "HOST.pin4" }}
      schX={-3.7}
      schRotation={270}
      schY={-1.5}
      pcbX={-2.7}
      pcbY={-1.2}
    />
    <resistor
      name="R_SDA_PU"
      resistance="10k"
      footprint="0402"
      connections={{ pos: "U1.SDA", neg: "HOST.pin4" }}
      schX={-2.7}
      schY={-2.0}
      schRotation={270}
      pcbX={-2.7}
      pcbY={-1.8}
    />

    <resistor
      name="R_NTC"
      resistance="10k"
      footprint="0402"
      connections={{ pos: "U1.TSMR", neg: "net.GND" }}
      schX={5.6}
      schY={-2.6}
      schRotation={270}
      pcbX={2.7}
      pcbY={-2.0}
    />
    <battery name="B1" schX={6.7} schY={-2} schRotation={90} />

    <trace from=".B1 > .pin1" to="net.GND" />
    <trace from=".B1 > .pin2" to=".U1 > .BAT" />

    <switch
      name="SW_TSMR"
      footprint="pushbutton"
      schX={2.2}
      schY={-2.8}
      connections={{ pin2: "U1.TSMR", pin1: "net.GND" }}
      pcbX={8}
      schRotation={90}
      pcbY={-4}
      spst
      simSwitchFrequency="1kHz"
    />
  </board>
);
