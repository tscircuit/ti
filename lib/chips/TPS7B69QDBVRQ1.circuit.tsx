import type { ChipProps } from "@tscircuit/props";
import "tscircuit";
import { tida01421Delta } from "../tida01421-coordinates.ts";

const pinLabels = {
  pin1: "VIN",
  pin2: "NC",
  pin3: ["GND_3", "GND"],
  pin4: ["GND_4", "GND"],
  pin5: "VOUT",
} as const;

type TPS7B69Variant = "TPS7B6933QDBVRQ1" | "TPS7B6950QDBVRQ1";

type TPS7B69Props = ChipProps<typeof pinLabels> & {
  manufacturerPartNumber: TPS7B69Variant;
};

/**
 * TIDA-01421 TPS7B69-Q1 SOT-23-5 symbol shared by the 3.3 V and 5 V variants.
 * Pin numbers are verified against the TPS7B69-Q1 DBV package table.
 */
export const TPS7B69QDBVRQ1 = ({
  manufacturerPartNumber,
  ...props
}: TPS7B69Props) => (
  <chip
    manufacturerPartNumber={manufacturerPartNumber}
    datasheetUrl="https://www.ti.com/lit/gpn/TPS7B69-Q1"
    footprint="kicad:Package_TO_SOT_SMD/SOT-23-5"
    pinLabels={pinLabels}
    symbol={
      <symbol>
        <schematicrect
          schX={0}
          schY={0}
          width={tida01421Delta(120)}
          height={tida01421Delta(100)}
          strokeWidth={0.025}
        />
        <port
          name="VIN"
          aliases={["pin1"]}
          pinNumber={1}
          schX={tida01421Delta(-80)}
          schY={tida01421Delta(30)}
          direction="left"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="NC"
          aliases={["pin2"]}
          pinNumber={2}
          schX={tida01421Delta(-80)}
          schY={tida01421Delta(-30)}
          direction="left"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="VOUT"
          aliases={["pin5"]}
          pinNumber={5}
          schX={tida01421Delta(80)}
          schY={tida01421Delta(30)}
          direction="right"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="GND_3"
          aliases={["GND", "pin3"]}
          pinNumber={3}
          schX={tida01421Delta(80)}
          schY={tida01421Delta(-20)}
          direction="right"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="GND_4"
          aliases={["GND", "pin4"]}
          pinNumber={4}
          schX={tida01421Delta(80)}
          schY={tida01421Delta(-30)}
          direction="right"
          schStemLength={tida01421Delta(20)}
        />
      </symbol>
    }
    {...props}
  />
);

export const TPS7B6933QDBVRQ1 = (
  props: Omit<TPS7B69Props, "manufacturerPartNumber">,
) => <TPS7B69QDBVRQ1 manufacturerPartNumber="TPS7B6933QDBVRQ1" {...props} />;

export const TPS7B6950QDBVRQ1 = (
  props: Omit<TPS7B69Props, "manufacturerPartNumber">,
) => <TPS7B69QDBVRQ1 manufacturerPartNumber="TPS7B6950QDBVRQ1" {...props} />;

export default TPS7B69QDBVRQ1;
