import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: ["CATHODE", "K"],
  pin2: ["REF", "REFERENCE"],
  pin3: ["ANODE", "A", "GND"],
} as const;

const atl431SchematicSymbol = (
  <symbol width="1.2mm" height="1.7mm">
    <port
      name="pin1"
      pinNumber={1}
      schX={0}
      schY={0.8}
      direction="up"
      schStemLength={0.3}
    />
    <port
      name="pin2"
      pinNumber={2}
      schX={-0.6}
      schY={0}
      direction="left"
      schStemLength={0.25}
    />
    <port
      name="pin3"
      pinNumber={3}
      schX={0}
      schY={-0.8}
      direction="down"
      schStemLength={0.3}
    />
    <schematicpath
      points={[
        { x: -0.3, y: 0.24 },
        { x: 0.3, y: 0.24 },
        { x: 0, y: -0.2 },
        { x: -0.3, y: 0.24 },
      ]}
      strokeWidth={0.035}
      strokeColor="#840000"
    />
    <schematicline
      x1={-0.28}
      y1={-0.25}
      x2={0.28}
      y2={-0.25}
      strokeWidth={0.035}
      color="#840000"
    />
    <schematicline
      x1={-0.35}
      y1={0}
      x2={-0.12}
      y2={0}
      strokeWidth={0.035}
      color="#840000"
    />
    <schematictext text="{NAME}" schX={0.42} schY={0.17} fontSize={0.18} />
    <schematictext
      text="ATL431LIBIDBZR"
      schX={0}
      schY={-1.08}
      fontSize={0.14}
    />
  </symbol>
);

/** ATL431LI B-grade shunt reference in the DBZ 3-pin SOT-23 package. */
export const ATL431LIBIDBZR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="ATL431LIBIDBZR"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/atl431li.pdf"
    footprint="sot23_3"
    pinLabels={pinLabels}
    pinAttributes={{
      pin1: { mustBeConnected: true },
      pin2: { mustBeConnected: true },
      pin3: { requiresGround: true, mustBeConnected: true },
    }}
    symbol={atl431SchematicSymbol}
    {...props}
  />
);

export default ATL431LIBIDBZR;
