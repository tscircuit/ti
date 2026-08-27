import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

const logicBufferSymbol = (
  <symbol>
    <schematicpath
      points={[
        { x: -0.9, y: 0.9 },
        { x: -0.9, y: -0.9 },
        { x: 0.9, y: 0 },
        { x: -0.9, y: 0.9 },
      ]}
      strokeWidth={0.03}
    />
    <schematicline x1={-1.3} y1={0} x2={-0.9} y2={0} strokeWidth={0.03} />
    <schematicline x1={0.9} y1={0} x2={1.3} y2={0} strokeWidth={0.03} />
    <schematicline
      x1={-0.15}
      y1={0.525}
      x2={-0.15}
      y2={1.3}
      strokeWidth={0.03}
    />
    <schematicline
      x1={-0.15}
      y1={-0.525}
      x2={-0.15}
      y2={-1.3}
      strokeWidth={0.03}
    />
    <schematictext
      text="LVC1G34"
      schX={-0.15}
      schY={0}
      fontSize={0.2}
      anchor="center"
    />
    <port
      name="pin2"
      pinNumber={2}
      direction="left"
      schX={-1.3}
      schY={0}
      schStemLength={0}
    />
    <port
      name="pin4"
      pinNumber={4}
      direction="right"
      schX={1.3}
      schY={0}
      schStemLength={0}
    />
    <port
      name="pin5"
      pinNumber={5}
      direction="up"
      schX={-0.15}
      schY={1.3}
      schStemLength={0}
    />
    <port
      name="pin3"
      pinNumber={3}
      direction="down"
      schX={-0.15}
      schY={-1.3}
      schStemLength={0}
    />
  </symbol>
);

/**
 * SN74LVC1G34 datasheet Figure 8-1 "Buffer Function" application.
 * @see https://www.ti.com/lit/gpn/SN74LVC1G34
 */
export const LogicBuffer_SN74LVC1G34 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled {...props}>
    <chip
      name="U1"
      manufacturerPartNumber="SN74LVC1G34DBVR"
      symbol={logicBufferSymbol}
      schX={0}
      schY={0}
      connections={{
        pin2: "net.MCU_OR_LOGIC_IN",
        pin4: "net.MCU_OR_LOGIC_OUT",
        pin5: "net.VCC",
        pin3: "net.GND",
      }}
    />
    <schematictext text="Buffer Function" schX={-0.9} schY={2} fontSize={0.2} />
  </subcircuit>
);

export default LogicBuffer_SN74LVC1G34;
