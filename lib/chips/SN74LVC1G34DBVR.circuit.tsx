import type { ChipProps } from "@tscircuit/props";
import "tscircuit";
import { SN74LVC1G34DBVR_FOOTPRINT } from "./jlcpcb-footprints";

export const SN74LVC1G34DBVR_PIN_LABELS = {
  pin2: ["A", "INPUT"],
  pin3: ["GND"],
  pin4: ["Y", "OUTPUT"],
  pin5: ["VCC"],
} as const;

const logicBufferSymbol = (
  <symbol>
    <schematicpath
      points={[
        { x: -0.75, y: 0.65 },
        { x: -0.75, y: -0.65 },
        { x: 0.75, y: 0 },
        { x: -0.75, y: 0.65 },
      ]}
      strokeWidth={0.03}
    />
    <schematicline x1={-1.05} y1={0} x2={-0.75} y2={0} strokeWidth={0.03} />
    <schematicline x1={0.75} y1={0} x2={1.05} y2={0} strokeWidth={0.03} />
    <schematicline x1={-0.35} y1={0.477} x2={-0.35} y2={1} strokeWidth={0.03} />
    <schematicline x1={0.15} y1={-0.26} x2={0.15} y2={-1} strokeWidth={0.03} />
    <port
      name="pin2"
      pinNumber={2}
      direction="left"
      schX={-1.05}
      schY={0}
      schStemLength={0}
    />
    <port
      name="pin4"
      pinNumber={4}
      direction="right"
      schX={1.05}
      schY={0}
      schStemLength={0}
    />
    <port
      name="pin5"
      pinNumber={5}
      direction="up"
      schX={-0.35}
      schY={1}
      schStemLength={0}
    />
    <port
      name="pin3"
      pinNumber={3}
      direction="down"
      schX={0.15}
      schY={-1}
      schStemLength={0}
    />
  </symbol>
);

export const SN74LVC1G34DBVR = (
  props: ChipProps<typeof SN74LVC1G34DBVR_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="SN74LVC1G34DBVR"
    supplierPartNumbers={{ jlcpcb: ["C840096"] }}
    footprint={SN74LVC1G34DBVR_FOOTPRINT}
    pinLabels={SN74LVC1G34DBVR_PIN_LABELS}
    noConnect={["pin1"]}
    symbol={logicBufferSymbol}
    {...props}
  />
);

export default SN74LVC1G34DBVR;
