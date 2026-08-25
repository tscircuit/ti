import type { ChipProps } from "@tscircuit/props";
import "tscircuit";
import { tida01421Delta } from "../tida01421-coordinates.ts";

const packagePinLabels = {
  pin1: "OUT_A",
  pin2: "IN_MINUS_A",
  pin3: "IN_PLUS_A",
  pin4: "V_MINUS",
  pin5: "IN_PLUS_B",
  pin6: "IN_MINUS_B",
  pin7: "OUT_B",
  pin8: "V_PLUS",
} as const;

const unitAPinLabels = {
  pin1: "OUT",
  pin2: "IN_MINUS",
  pin3: "IN_PLUS",
  pin4: "V_MINUS",
  pin8: "V_PLUS",
} as const;

const unitBPinLabels = {
  pin5: "IN_PLUS",
  pin6: "IN_MINUS",
  pin7: "OUT",
  pin4: "V_MINUS",
  pin8: "V_PLUS",
} as const;

const AmplifierSymbol = ({
  invertingPin,
  nonInvertingPin,
  outputPin,
}: {
  invertingPin: number;
  nonInvertingPin: number;
  outputPin: number;
}) => (
  <symbol>
    <schematicline
      x1={tida01421Delta(-20)}
      y1={tida01421Delta(20)}
      x2={tida01421Delta(20)}
      y2={0}
      strokeWidth={0.025}
    />
    <schematicline
      x1={tida01421Delta(-20)}
      y1={tida01421Delta(-20)}
      x2={tida01421Delta(20)}
      y2={0}
      strokeWidth={0.025}
    />
    <schematicline
      x1={tida01421Delta(-20)}
      y1={tida01421Delta(20)}
      x2={tida01421Delta(-20)}
      y2={tida01421Delta(-20)}
      strokeWidth={0.025}
    />
    <schematictext
      schX={tida01421Delta(-12)}
      schY={tida01421Delta(10)}
      text="−"
      fontSize={0.12}
    />
    <schematictext
      schX={tida01421Delta(-12)}
      schY={tida01421Delta(-10)}
      text="+"
      fontSize={0.12}
    />
    <port
      name="IN_MINUS"
      aliases={["IN-", `pin${invertingPin}`]}
      pinNumber={invertingPin}
      schX={tida01421Delta(-40)}
      schY={tida01421Delta(10)}
      direction="left"
      schStemLength={tida01421Delta(20)}
    />
    <port
      name="IN_PLUS"
      aliases={["IN+", `pin${nonInvertingPin}`]}
      pinNumber={nonInvertingPin}
      schX={tida01421Delta(-40)}
      schY={tida01421Delta(-10)}
      direction="left"
      schStemLength={tida01421Delta(20)}
    />
    <port
      name="OUT"
      aliases={[`pin${outputPin}`]}
      pinNumber={outputPin}
      schX={tida01421Delta(40)}
      schY={0}
      direction="right"
      schStemLength={tida01421Delta(20)}
    />
    <port
      name="V_PLUS"
      aliases={["V+", "pin8"]}
      pinNumber={8}
      schX={0}
      schY={tida01421Delta(40)}
      direction="up"
      schStemLength={tida01421Delta(20)}
    />
    <port
      name="V_MINUS"
      aliases={["V-", "pin4"]}
      pinNumber={4}
      schX={0}
      schY={tida01421Delta(-40)}
      direction="down"
      schStemLength={tida01421Delta(20)}
    />
  </symbol>
);

/** Datasheet-pinned physical TLV2316-Q1 VSSOP-8 package. */
export const TLV2316QDGKRQ1 = (props: ChipProps<typeof packagePinLabels>) => (
  <chip
    manufacturerPartNumber="TLV2316QDGKRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tlv2316-q1.pdf"
    footprint="kicad:Package_SO/VSSOP-8_3.0x3.0mm_P0.65mm"
    pinLabels={packagePinLabels}
    {...props}
  />
);

/** Native schematic unit A; the physical package is represented separately. */
export const TLV2316QDGKRQ1UnitA = (
  props: ChipProps<typeof unitAPinLabels>,
) => (
  <chip
    pinLabels={unitAPinLabels}
    symbol={
      <AmplifierSymbol invertingPin={2} nonInvertingPin={3} outputPin={1} />
    }
    {...props}
  />
);

/** Native schematic unit B; the physical package is represented separately. */
export const TLV2316QDGKRQ1UnitB = (
  props: ChipProps<typeof unitBPinLabels>,
) => (
  <chip
    pinLabels={unitBPinLabels}
    symbol={
      <AmplifierSymbol invertingPin={6} nonInvertingPin={5} outputPin={7} />
    }
    {...props}
  />
);

export default TLV2316QDGKRQ1;
