import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: ["K", "CATHODE"],
  pin2: ["R", "REF", "REFERENCE"],
  pin3: ["A", "ANODE", "GND"],
} as const;

const atl431SchematicSymbol = (
  <symbol width="1mm" height="1.4mm">
    <port
      name="pin1"
      pinNumber={1}
      schX={0}
      schY={0.7}
      direction="up"
      schStemLength={0.3}
    />
    <port
      name="pin2"
      pinNumber={2}
      schX={-0.5}
      schY={0}
      direction="left"
      schStemLength={0.25}
    />
    <port
      name="pin3"
      pinNumber={3}
      schX={0}
      schY={-0.7}
      direction="down"
      schStemLength={0.3}
    />
    <schematicpath
      points={[
        { x: -0.22, y: 0.18 },
        { x: 0.22, y: 0.18 },
        { x: 0, y: -0.18 },
        { x: -0.22, y: 0.18 },
      ]}
      strokeWidth={0.035}
      strokeColor="#840000"
    />
    <schematicline
      x1={-0.22}
      y1={-0.22}
      x2={0.22}
      y2={-0.22}
      strokeWidth={0.035}
      color="#840000"
    />
    <schematicline
      x1={-0.28}
      y1={0}
      x2={-0.08}
      y2={0}
      strokeWidth={0.035}
      color="#840000"
    />
    <schematictext text="{NAME}" schX={0.4} schY={0.22} fontSize={0.16} />
    <schematictext
      text="ATL431LIBIDBZR"
      schX={0}
      schY={-0.95}
      fontSize={0.13}
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
    showPinAliases={false}
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
