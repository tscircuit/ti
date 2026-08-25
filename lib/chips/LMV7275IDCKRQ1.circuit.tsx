import type { ChipProps } from "@tscircuit/props";
import "tscircuit";
import { tida01421Delta } from "../tida01421-coordinates.ts";

const pinLabels = {
  pin1: "IN_PLUS",
  pin2: "V_MINUS",
  pin3: "IN_MINUS",
  pin4: "OUT",
  pin5: "V_PLUS",
} as const;

/**
 * LMV7275-Q1 open-drain comparator in the five-pin DCK (SC70) package.
 *
 * tscircuit has no native comparator primitive, so this is a datasheet-pinned
 * custom chip symbol. Its local geometry is the Altium U1 symbol relative to
 * the component location (1280, 910), including the source's offset triangle.
 */
export const LMV7275IDCKRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="LMV7275IDCKRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/lmv7275-q1.pdf"
    footprint="kicad:Package_SO/SC-70-5"
    pinLabels={pinLabels}
    symbol={
      <symbol>
        <schematicline
          x1={0}
          y1={0}
          x2={tida01421Delta(40)}
          y2={tida01421Delta(-20)}
          strokeWidth={0.025}
        />
        <schematicline
          x1={0}
          y1={tida01421Delta(-40)}
          x2={tida01421Delta(40)}
          y2={tida01421Delta(-20)}
          strokeWidth={0.025}
        />
        <schematicline
          x1={0}
          y1={0}
          x2={0}
          y2={tida01421Delta(-40)}
          strokeWidth={0.025}
        />
        <schematictext
          schX={tida01421Delta(8)}
          schY={tida01421Delta(-10)}
          text="−"
          fontSize={0.12}
        />
        <schematictext
          schX={tida01421Delta(8)}
          schY={tida01421Delta(-30)}
          text="+"
          fontSize={0.12}
        />
        <port
          name="IN_MINUS"
          aliases={["IN-", "pin3"]}
          pinNumber={3}
          schX={tida01421Delta(-20)}
          schY={tida01421Delta(-10)}
          direction="left"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="IN_PLUS"
          aliases={["IN+", "pin1"]}
          pinNumber={1}
          schX={tida01421Delta(-20)}
          schY={tida01421Delta(-30)}
          direction="left"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="V_MINUS"
          aliases={["V-", "pin2"]}
          pinNumber={2}
          schX={tida01421Delta(20)}
          schY={tida01421Delta(-60)}
          direction="down"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="OUT"
          aliases={["pin4"]}
          pinNumber={4}
          schX={tida01421Delta(60)}
          schY={tida01421Delta(-20)}
          direction="right"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="V_PLUS"
          aliases={["V+", "pin5"]}
          pinNumber={5}
          schX={tida01421Delta(20)}
          schY={tida01421Delta(20)}
          direction="up"
          schStemLength={tida01421Delta(20)}
        />
      </symbol>
    }
    {...props}
  />
);

export default LMV7275IDCKRQ1;
